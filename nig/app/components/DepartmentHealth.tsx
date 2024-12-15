'use client';

import { useEffect, useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

interface HealthData {
  data: {
    country_currency_desc: string;
    exchange_rate: string;
    record_date: string;
  }[];
  analysis: string;
}

export default function DepartmentHealth() {
  const [healthData, setHealthData] = useState<HealthData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchHealth() {
      try {
        const response = await fetch('/api/spending');
        const data = await response.json();
        setHealthData(data);
      } catch (error) {
        console.error('Error fetching health data:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchHealth();
  }, []);

  if (loading) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Department Health Analysis</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-center">Loading analysis...</div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="col-span-full">
      <CardHeader>
        <CardTitle>Department Health Analysis</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {/* AI Analysis Section */}
          <div className="bg-muted p-4 rounded-lg">
            <h3 className="text-lg font-semibold mb-2">AI Analysis</h3>
            <p className="text-sm text-muted-foreground whitespace-pre-line">
              {healthData?.analysis}
            </p>
          </div>

          {/* Recent Data Section */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Recent Exchange Rates</h3>
            <div className="space-y-2">
              {healthData?.data.slice(0, 5).map((item, index) => (
                <div key={index} className="flex justify-between items-center p-2 bg-muted/50 rounded">
                  <span>{item.country_currency_desc}</span>
                  <span className="font-medium">{item.exchange_rate}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
