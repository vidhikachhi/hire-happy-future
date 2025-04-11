
import { useState } from "react";
import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer, 
  TooltipProps 
} from "recharts";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Sample data
const monthlyData = [
  { month: "Jan", attrition: 3.2 },
  { month: "Feb", attrition: 3.5 },
  { month: "Mar", attrition: 2.9 },
  { month: "Apr", attrition: 2.7 },
  { month: "May", attrition: 4.2 },
  { month: "Jun", attrition: 3.8 },
  { month: "Jul", attrition: 2.5 },
  { month: "Aug", attrition: 2.2 },
  { month: "Sep", attrition: 2.1 },
  { month: "Oct", attrition: 2.4 },
  { month: "Nov", attrition: 3.1 },
  { month: "Dec", attrition: 3.3 },
];

const quarterlyData = [
  { quarter: "Q1", attrition: 3.2 },
  { quarter: "Q2", attrition: 3.7 },
  { quarter: "Q3", attrition: 2.3 },
  { quarter: "Q4", attrition: 2.9 },
];

const yearlyData = [
  { year: "2020", attrition: 4.2 },
  { year: "2021", attrition: 3.8 },
  { year: "2022", attrition: 3.2 },
  { year: "2023", attrition: 2.9 },
  { year: "2024", attrition: 2.6 },
];

// Custom tooltip component
const CustomTooltip = ({ active, payload, label }: TooltipProps<number, string>) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-3 border border-gray-200 rounded-md shadow-sm">
        <p className="font-medium">{label}</p>
        <p className="text-sm text-hr-purple-secondary">
          Attrition Rate: {payload[0].value}%
        </p>
      </div>
    );
  }
  return null;
};

export function AttritionChart() {
  const [timeframe, setTimeframe] = useState("monthly");

  const getChartData = () => {
    switch (timeframe) {
      case "monthly":
        return {
          data: monthlyData,
          dataKey: "month",
        };
      case "quarterly":
        return {
          data: quarterlyData,
          dataKey: "quarter",
        };
      case "yearly":
        return {
          data: yearlyData,
          dataKey: "year",
        };
      default:
        return {
          data: monthlyData,
          dataKey: "month",
        };
    }
  };

  const { data, dataKey } = getChartData();

  return (
    <Card className="col-span-2">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <div>
          <CardTitle>Employee Attrition Trends</CardTitle>
          <CardDescription>
            Historical attrition rates across departments
          </CardDescription>
        </div>
        <Tabs defaultValue="monthly" value={timeframe} onValueChange={setTimeframe}>
          <TabsList>
            <TabsTrigger value="monthly">Monthly</TabsTrigger>
            <TabsTrigger value="quarterly">Quarterly</TabsTrigger>
            <TabsTrigger value="yearly">Yearly</TabsTrigger>
          </TabsList>
        </Tabs>
      </CardHeader>
      <CardContent>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart
              data={data}
              margin={{ top: 10, right: 10, left: 0, bottom: 0 }}
            >
              <defs>
                <linearGradient id="attritionGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#9b87f5" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#9b87f5" stopOpacity={0.1} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis 
                dataKey={dataKey} 
                axisLine={false}
                tickLine={false}
              />
              <YAxis 
                unit="%" 
                axisLine={false}
                tickLine={false}
                width={40}
                tickFormatter={(value) => `${value}%`}
              />
              <Tooltip content={<CustomTooltip />} />
              <Area
                type="monotone"
                dataKey="attrition"
                stroke="#7E69AB"
                strokeWidth={2}
                fillOpacity={1}
                fill="url(#attritionGradient)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}
