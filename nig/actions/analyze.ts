import { NextResponse } from 'next/server';
import axios from 'axios';
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY as string,
  baseURL: 'https://api.x.ai/v1',
});

export async function GET() {
  try {
    // 1. Fetch fiscal data
    const response = await axios.get('https://api.fiscaldata.treasury.gov/services/api/fiscal_service/v1/accounting/od/rates_of_exchange', {
      params: {
        fields: 'country_currency_desc,exchange_rate,record_date',
        filter: 'country_currency_desc:in:(Canada-Dollar,Mexico-Peso),record_date:gte:2020-01-01',
        sort: '-record_date'
      }
    });
    
    // 2. Analyze data with Grok
    const completion = await openai.chat.completions.create({
      model: 'grok-beta',
      messages: [
        {
          role: 'system',
          content: 'You are an expert financial analyst. Analyze the department data and provide insights about its financial health.'
        },
        {
          role: 'user',
          content: `Analyze this fiscal data and provide a brief health assessment: ${JSON.stringify(response.data.data)}`
        }
      ]
    });

    // 3. Return both raw data and analysis
    return NextResponse.json({
      data: response.data.data,
      analysis: completion.choices[0].message.content
    });
  } catch (error) {
    return NextResponse.json({ error: 'Error analyzing data' }, { status: 500 });
  }
}

export async function OPTIONS() {
  return NextResponse.json({}, { status: 200 });
}