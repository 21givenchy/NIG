"use client";

import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { fetchFiscalData } from "@/lib/api";
import type { DepartmentSpending } from "@/lib/types/fiscal";
import { DEPARTMENTS } from "@/lib/types/fiscal";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function DepartmentSpending() {
  const [selectedDept, setSelectedDept] = useState(DEPARTMENTS[0].code);
  const [spendingData, setSpendingData] = useState<DepartmentSpending[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchDepartmentData() {
      setLoading(true);
      try {
        const today = new Date();
        const lastYear = new Date(today.setFullYear(today.getFullYear() - 1))
          .toISOString()
          .split('T')[0];

        const response = await fetchFiscalData<DepartmentSpending>(
          'v1/accounting/mts/mts_table_2',
          {
            'filter': `account_type:eq:${selectedDept},record_date:gte:${lastYear}`,
            'sort': '-record_date',
            'page[size]': '365'
          }
        );
        setSpendingData(response.data);
      } catch (error) {
        console.error('Error fetching department data:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchDepartmentData();
  }, [selectedDept]);

  const calculateTotalSpending = () => {
    return spendingData.reduce((total, record) => {
      return total + Math.abs(parseFloat(record.withdraw_amt));
    }, 0);
  };

  const calculateMonthlySpending = () => {
    const monthly: Record<string, number> = {};
    spendingData.forEach(record => {
      const month = record.record_date.substring(0, 7); // YYYY-MM
      monthly[month] = (monthly[month] || 0) + Math.abs(parseFloat(record.withdraw_amt));
    });
    return monthly;
  };

  const formatAmount = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      notation: 'compact',
      maximumFractionDigits: 1,
    }).format(amount);
  };

  if (loading) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Department Spending</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-center">Loading spending data...</div>
        </CardContent>
      </Card>
    );
  }

  const monthlySpending = calculateMonthlySpending();
  const totalSpending = calculateTotalSpending();

  return (
    <Card className="col-span-full">
      <CardHeader>
        <CardTitle>Department Spending Analysis</CardTitle>
        <Select
          value={selectedDept}
          onValueChange={setSelectedDept}
        >
          <SelectTrigger className="w-[280px]">
            <SelectValue placeholder="Select Department" />
          </SelectTrigger>
          <SelectContent>
            {DEPARTMENTS.map((dept) => (
              <SelectItem key={dept.code} value={dept.code}>
                {dept.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold mb-2">Annual Overview</h3>
            <div className="text-3xl font-bold">
              {formatAmount(totalSpending)}
            </div>
            <div className="text-sm text-gray-500">Total spending (Last 12 months)</div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2">Monthly Breakdown</h3>
            <div className="space-y-2">
              {Object.entries(monthlySpending)
                .sort((a, b) => b[0].localeCompare(a[0]))
                .slice(0, 6)
                .map(([month, amount]) => (
                  <div key={month} className="flex justify-between items-center">
                    <span>{new Date(month).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</span>
                    <span className="font-semibold">{formatAmount(amount)}</span>
                  </div>
                ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2">Key Programs</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {DEPARTMENTS.find(d => d.code === selectedDept)?.programs.map((program) => (
                <div key={program} className="p-4 bg-gray-50 rounded-lg">
                  <div className="font-semibold">{program}</div>
                  <div className="text-sm text-gray-500">
                    Data pending
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
} 