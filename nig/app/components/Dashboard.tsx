"use client"

import { useState } from 'react'
import DepartmentSelector from './DepartmentSelector'
import DepartmentMetrics from './DepartmentMetrics'

export type Department = {
  id: string
  name: string
}

const departments: Department[] = [
  { id: 'education', name: 'Education' },
  { id: 'health', name: 'Health' },
  { id: 'transport', name: 'Transport' },
  { id: 'environment', name: 'Environment' },
  { id: 'finance', name: 'Finance' },
]

export default function Dashboard() {
  const [selectedDepartment, setSelectedDepartment] = useState<Department | null>(null)

  return (
    <div className="max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold mb-8 text-center">D.O.G.E Citizen Dashboard</h1>
      <DepartmentSelector 
        departments={departments} 
        selectedDepartment={selectedDepartment}
        onSelectDepartment={setSelectedDepartment}
      />
      {selectedDepartment && (
        <DepartmentMetrics department={selectedDepartment} />
      )}
    </div>
  )
}

