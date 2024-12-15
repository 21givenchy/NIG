"use client";

import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { fetchFiscalData } from "@/lib/api";

type DebtData = {
  record_date: string;
  debt_held_public_amt: string;
  intragov_hold_amt: string;
  tot_pub_debt_out_amt: string;
};

export default function FiscalOverview() {
  const [debtData, setDebtData] = useState<DebtData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetchFiscalData<DebtData>(
          '/v1/debt/mspd/detail',
          {
            'sort': '-record_date',
            'limit': '1'
          }
        );
        setDebtData(response.data[0]);
      } catch (error) {
        console.error('Error fetching fiscal data:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  if (loading) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Fiscal Overview</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-center">Loading fiscal data...</div>
        </CardContent>
      </Card>
    );
  }

  if (!debtData) {
    return null;
  }

  const formatAmount = (amount: string) => {
    const value = parseFloat(amount);
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      notation: 'compact',
      maximumFractionDigits: 1,
    }).format(value);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>U.S. National Debt Overview</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div>
            <div className="text-sm text-gray-500">Total Public Debt</div>
            <div className="text-2xl font-bold">
              {formatAmount(debtData.tot_pub_debt_out_amt)}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <div className="text-sm text-gray-500">Debt Held by Public</div>
              <div className="text-xl font-semibold">
                {formatAmount(debtData.debt_held_public_amt)}
              </div>
            </div>
            <div>
              <div className="text-sm text-gray-500">Intragovernmental Holdings</div>
              <div className="text-xl font-semibold">
                {formatAmount(debtData.intragov_hold_amt)}
              </div>
            </div>
          </div>
          <div className="text-sm text-gray-500 text-center mt-2">
            As of {new Date(debtData.record_date).toLocaleDateString()}
          </div>
        </div>
      </CardContent>
    </Card>
  );
} 