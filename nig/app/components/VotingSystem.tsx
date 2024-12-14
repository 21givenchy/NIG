"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowUp, ArrowDown } from 'lucide-react'

export default function VotingSystem() {
  const [initiatives, setInitiatives] = useState([
    { id: 1, title: "Improve Public Transportation", votes: 120 },
    { id: 2, title: "Increase Funding for Education", votes: 95 },
    { id: 3, title: "Expand Green Spaces in Urban Areas", votes: 80 },
    { id: 4, title: "Implement City-wide Recycling Program", votes: 75 },
    { id: 5, title: "Support Local Small Businesses", votes: 60 },
  ])

  const handleVote = (id: number, increment: boolean) => {
    setInitiatives(initiatives.map(initiative => 
      initiative.id === id
        ? { ...initiative, votes: initiative.votes + (increment ? 1 : -1) }
        : initiative
    ))
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Vote on Government Initiatives</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-4">
          {initiatives.map((initiative) => (
            <li key={initiative.id} className="flex items-center justify-between">
              <span>{initiative.title}</span>
              <div className="flex items-center space-x-2">
                <span className="font-bold">{initiative.votes}</span>
                <Button size="sm" onClick={() => handleVote(initiative.id, true)}>
                  <ArrowUp size={16} />
                </Button>
                <Button size="sm" onClick={() => handleVote(initiative.id, false)}>
                  <ArrowDown size={16} />
                </Button>
              </div>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}

