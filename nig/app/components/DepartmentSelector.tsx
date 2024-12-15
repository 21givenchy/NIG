import { Department } from './Dashboard'
import { Button } from "@/components/ui/button"

type DepartmentSelectorProps = {
  departments: Department[]
  selectedDepartment: Department | null
  onSelectDepartment: (department: Department) => void
}

export default function DepartmentSelector({ 
  departments, 
  selectedDepartment, 
  onSelectDepartment 
}: DepartmentSelectorProps) {
  return (
    <div className="flex flex-wrap justify-center gap-4 mb-8">
      {departments.map((dept) => (
        <Button
          key={dept.id}
          onClick={() => onSelectDepartment(dept)}
          variant={selectedDepartment?.id === dept.id ? "default" : "outline"}
        >
          {dept.name}
        </Button>
      ))}
    </div>
  )
}

