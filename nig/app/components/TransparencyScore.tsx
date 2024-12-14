import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function TransparencyScore() {
  const transparencyScore = 82 // Mock data

  return (
    <Card>
      <CardHeader>
        <CardTitle>Transparency Score</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="text-4xl font-bold text-center">{transparencyScore}%</div>
        <div className="text-sm text-center text-gray-500">of government data made publicly available</div>
        <div className="mt-4 h-3 bg-gray-200 rounded-full">
          <div 
            className="h-3 bg-purple-500 rounded-full" 
            style={{ width: `${transparencyScore}%` }}
          ></div>
        </div>
      </CardContent>
    </Card>
  )
}

