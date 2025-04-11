
import { PageLayout } from "@/components/layout/PageLayout";
import { MetricCard } from "@/components/dashboard/MetricCard";
import { AttritionChart } from "@/components/dashboard/AttritionChart";
import { DepartmentRiskChart } from "@/components/dashboard/DepartmentRiskChart";
import { FactorsTable } from "@/components/dashboard/FactorsTable";
import { CandidateStats } from "@/components/dashboard/CandidateStats";
import { Users, UserMinus, Timer, Award, CalendarCheck } from "lucide-react";

const Dashboard = () => {
  return (
    <PageLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
          <p className="text-gray-500 mt-1">
            Monitor employee retention metrics and hiring performance
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <MetricCard
            title="Total Employees"
            value="248"
            description="Across 6 departments"
            icon={Users}
            trend={{ value: 4.2, isPositive: true }}
          />
          <MetricCard
            title="Current Attrition Rate"
            value="2.8%"
            description="3.4% industry average"
            icon={UserMinus}
            trend={{ value: 1.2, isPositive: true }}
          />
          <MetricCard
            title="Average Tenure"
            value="2.4 yrs"
            description="Increased from 1.8 yrs"
            icon={Timer}
            trend={{ value: 33, isPositive: true }}
          />
          <MetricCard
            title="Culture Score"
            value="7.8/10"
            description="Based on engagement survey"
            icon={Award}
            trend={{ value: 0.6, isPositive: true }}
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <AttritionChart />
          <DepartmentRiskChart />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <FactorsTable />
          <CandidateStats />
        </div>
      </div>
    </PageLayout>
  );
};

export default Dashboard;
