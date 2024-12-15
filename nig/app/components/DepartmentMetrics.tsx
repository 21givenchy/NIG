import { Department } from './Dashboard'
import GovernmentPerformance from './GovernmentPerformance'
import CitizenSatisfaction from './CitizenSatisfaction'
import PolicyProgress from './PolicyProgress'
import BudgetUtilization from './BudgetUtilization'
import CommunityEngagement from './CommunityEngagement'
import TopConcerns from './TopConcerns'
import ResponseTime from './ResponseTime'
import TransparencyScore from './TransparencyScore'
import EnvironmentalImpact from './EnvironmentalImpact'
import EconomicHealth from './EconomicHealth'
import VotingSystem from './VotingSystem'

type DepartmentMetricsProps = {
  department: Department
}

export default function DepartmentMetrics({ department }: DepartmentMetricsProps) {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-6 text-center">{department.name} Department Metrics</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <GovernmentPerformance department={department} />
        <CitizenSatisfaction department={department} />
        <PolicyProgress department={department} />
        <BudgetUtilization department={department} />
        <CommunityEngagement department={department} />
        <TopConcerns department={department} />
        <ResponseTime department={department} />
        <TransparencyScore department={department} />
        <EnvironmentalImpact department={department} />
        <EconomicHealth department={department} />
        <div className="md:col-span-2 lg:col-span-3">
          <VotingSystem department={department} />
        </div>
      </div>
    </div>
  )
}

