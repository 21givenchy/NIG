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

export default function Dashboard() {
  return (
    <div className="max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold mb-8 text-center">GovTech Citizen Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <GovernmentPerformance />
        <CitizenSatisfaction />
        <PolicyProgress />
        <BudgetUtilization />
        <CommunityEngagement />
        <TopConcerns />
        <ResponseTime />
        <TransparencyScore />
        <EnvironmentalImpact />
        <EconomicHealth />
        <div className="md:col-span-2 lg:col-span-3">
          <VotingSystem />
        </div>
      </div>
    </div>
  )
}

