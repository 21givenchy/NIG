import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Clock } from 'lucide-react'

export default function ResponseTime() {
  const averageResponseTime = 72 // Mock data (in hours)

  return (
    <Card>
      <CardHeader>
        <CardTitle>Response Time</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-center space-x-2">
          <Clock size={24} />
          <span className="text-2xl font-bold">{averageResponseTime} hours</span>
        </div>
        <div className="text-sm text-center mt-2 text-gray-500">
          Average time taken for government to address top concerns
        </div>
      </CardContent>
    </Card>
  )
}

