import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function PolicyProgress() {
  const progress = 65 // Mock data

  return (
    <Card>
      <CardHeader>
        <CardTitle>Policy Implementation Progress</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="text-4xl font-bold text-center">{progress}%</div>
        <div className="text-sm text-center text-gray-500">of manifesto items initiated/completed</div>
        <div className="mt-4 h-3 bg-gray-200 rounded-full">
          <div 
            className="h-3 bg-green-500 rounded-full" 
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </CardContent>
    </Card>
  )
}

