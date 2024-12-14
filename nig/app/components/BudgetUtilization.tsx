import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function BudgetUtilization() {
  const budgetData = [
    { category: 'Education', allocated: 30, spent: 25 },
    { category: 'Healthcare', allocated: 25, spent: 22 },
    { category: 'Infrastructure', allocated: 20, spent: 18 },
    { category: 'Social Welfare', allocated: 15, spent: 14 },
    { category: 'Others', allocated: 10, spent: 8 },
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle>Budget Utilization</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          {budgetData.map((item) => (
            <div key={item.category}>
              <div className="flex justify-between text-sm">
                <span>{item.category}</span>
                <span>{item.spent}B / {item.allocated}B</span>
              </div>
              <div className="h-2 bg-gray-200 rounded-full">
                <div 
                  className="h-2 bg-blue-500 rounded-full" 
                  style={{ width: `${(item.spent / item.allocated) * 100}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

