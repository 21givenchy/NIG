import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Star, StarHalf } from 'lucide-react'

export default function CitizenSatisfaction() {
  const rating = 3.5 // Mock data

  const renderStars = (rating: number) => {
    const stars = []
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(<Star key={i} className="fill-yellow-400 text-yellow-400" />)
      } else if (i - 0.5 <= rating) {
        stars.push(<StarHalf key={i} className="fill-yellow-400 text-yellow-400" />)
      } else {
        stars.push(<Star key={i} className="text-gray-300" />)
      }
    }
    return stars
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Citizen Satisfaction Rating</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex justify-center items-center space-x-1">
          {renderStars(rating)}
        </div>
        <div className="text-center mt-2">{rating.toFixed(1)} out of 5</div>
      </CardContent>
    </Card>
  )
}

