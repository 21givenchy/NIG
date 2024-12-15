const BASE_URL = 'https://api.fiscaldata.treasury.gov/services/api/fiscal_service';

export type FiscalDataResponse<T> = {
  data: T[];
  meta: {
    count: number;
    labels: Record<string, string>;
    dataTypes: Record<string, string>;
    totalCount: number;
    totalPages: number;
  };
};

export async function fetchFiscalData<T>(
  endpoint: string,
  params?: Record<string, string>
): Promise<FiscalDataResponse<T>> {
  const queryParams = new URLSearchParams(params);
  const url = `${BASE_URL}${endpoint}?${queryParams.toString()}`;
  
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`API Error: ${response.statusText}`);
  }
  
  return response.json();
} 