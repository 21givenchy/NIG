import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Wind, TreesIcon as Tree } from 'lucide-react'

export default function EnvironmentalImpact() {
  const airQualityIndex = 65 // Mock data
  const greenSpaces = 22 // Mock data (percentage)

  return (
    <Card>
      <CardHeader>
        <CardTitle>Environmental Impact</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex justify-around">
          <div className="text-center">
            <Wind className="mx-auto mb-2" />
            <div className="text-2xl font-bold">{airQualityIndex}</div>
            <div className="text-sm text-gray-500">Air Quality Index</div>
          </div>
          <div className="text-center">
            <Tree className="mx-auto mb-2" />
            <div className="text-2xl font-bold">{greenSpaces}%</div>
            <div className="text-sm text-gray-500">Green Spaces</div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

