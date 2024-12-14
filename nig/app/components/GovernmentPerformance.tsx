import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function GovernmentPerformance() {
  const performanceScore = 75 // Mock data

  return (
    <Card>
      <CardHeader>
        <CardTitle>Government Performance Index</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="text-4xl font-bold text-center">{performanceScore}</div>
        <div className="text-sm text-center text-gray-500">Out of 100</div>
        <div className="mt-4 h-3 bg-gray-200 rounded-full">
          <div 
            className="h-3 bg-blue-600 rounded-full" 
            style={{ width: `${performanceScore}%` }}
          ></div>
        </div>
      </CardContent>
    </Card>
  )
}

