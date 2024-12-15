'use client';

import { useState, useEffect } from 'react';
import axios from 'axios';

interface SpendingItem {
  record_date: string;
  tot_pub_debt_out_amt: string;
}

export default function Home() {
  const [spendingData, setSpendingData] = useState<SpendingItem[]>([]);

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get<SpendingItem[]>('./api/spending');
      setSpendingData(response.data);
    }
    fetchData();
  }, []);

  return (
    <div>
      <h1>Government Spending Tracker</h1>
      <ul>
        {spendingData.map((item, index) => (
          <li key={index}>{item.record_date}: ${item.tot_pub_debt_out_amt}</li>
        ))}
      </ul>
    </div>
  );
}
