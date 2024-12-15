// app/api/spending/route.ts
import { NextResponse } from 'next/server';
import axios from 'axios';

export async function GET() {
  try {
    const response = await axios.get('https://api.usaspending.gov/api/v2/recipient/state/06/?year=latest', {
      params: {
        fields: 'country_currency_desc,exchange_rate,record_date',
        filter: 'country_currency_desc:in:(Canada-Dollar,Mexico-Peso),record_date:gte:2020-01-01',
        sort: '-record_date'
      }
    });
    
    return NextResponse.json(response.data.data);
  } catch (error) {
    return NextResponse.json({ error: 'Error fetching data' }, { status: 500 });
  }
}

// Add OPTIONS method handler
export async function OPTIONS() {
  return NextResponse.json({}, { status: 200 });
}