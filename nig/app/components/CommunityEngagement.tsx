import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, Vote } from 'lucide-react'

export default function CommunityEngagement() {
  const activeUsers = 25000 // Mock data
  const votesCast = 75000 // Mock data

  return (
    <Card>
      <CardHeader>
        <CardTitle>Community Engagement Level</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex justify-around">
          <div className="text-center">
            <Users className="mx-auto mb-2" />
            <div className="text-2xl font-bold">{activeUsers.toLocaleString()}</div>
            <div className="text-sm text-gray-500">Active Users</div>
          </div>
          <div className="text-center">
            <Vote className="mx-auto mb-2" />
            <div className="text-2xl font-bold">{votesCast.toLocaleString()}</div>
            <div className="text-sm text-gray-500">Votes Cast</div>
          </div>
        </div>
        <div className="text-sm text-center mt-4 text-gray-500">in the last 30 days</div>
      </CardContent>
    </Card>
  )
}

