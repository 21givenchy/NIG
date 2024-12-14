import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowUp } from 'lucide-react'

export default function TopConcerns() {
  const concerns = [
    { issue: 'Public Transportation', votes: 1520 },
    { issue: 'Healthcare Access', votes: 1350 },
    { issue: 'Education Funding', votes: 1280 },
    { issue: 'Environmental Protection', votes: 1100 },
    { issue: 'Job Creation', votes: 980 },
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle>Top Citizen Concerns</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2">
          {concerns.map((concern, index) => (
            <li key={index} className="flex justify-between items-center">
              <span>{concern.issue}</span>
              <span className="flex items-center text-green-500">
                <ArrowUp size={16} />
                {concern.votes}
              </span>
            </li>
          ))}
        </ul>
        <div className="text-sm text-center mt-4 text-gray-500">Most upvoted issues in the past week</div>
      </CardContent>
    </Card>
  )
}

