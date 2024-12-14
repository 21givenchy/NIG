import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { TrendingUp, Building } from 'lucide-react'

export default function EconomicHealth() {
  const jobCreation = 5000 // Mock data
  const businessGrowth = 3.5 // Mock data (percentage)

  return (
    <Card>
      <CardHeader>
        <CardTitle>Economic Health Indicator</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex justify-around">
          <div className="text-center">
            <TrendingUp className="mx-auto mb-2" />
            <div className="text-2xl font-bold">{jobCreation.toLocaleString()}</div>
            <div className="text-sm text-gray-500">New Jobs Created</div>
          </div>
          <div className="text-center">
            <Building className="mx-auto mb-2" />
            <div className="text-2xl font-bold">{businessGrowth}%</div>
            <div className="text-sm text-gray-500">Local Business Growth</div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

