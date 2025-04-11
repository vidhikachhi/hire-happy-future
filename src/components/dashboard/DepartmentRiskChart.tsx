
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  Cell,
  TooltipProps
} from "recharts";

const data = [
  { department: "Engineering", riskScore: 42 },
  { department: "Sales", riskScore: 68 },
  { department: "Marketing", riskScore: 35 },
  { department: "HR", riskScore: 22 },
  { department: "Product", riskScore: 48 },
  { department: "Finance", riskScore: 31 },
];

// Custom tooltip
const CustomTooltip = ({ active, payload, label }: TooltipProps<number, string>) => {
  if (active && payload && payload.length) {
    let riskLevel = "Low";
    const riskScore = payload[0].value as number;
    
    if (riskScore > 65) riskLevel = "High";
    else if (riskScore > 40) riskLevel = "Medium";
    
    return (
      <div className="bg-white p-3 border border-gray-200 rounded-md shadow-sm">
        <p className="font-medium">{label}</p>
        <p className="text-sm">Risk Score: {riskScore}</p>
        <p className={`text-sm font-medium ${
          riskLevel === "High" ? "text-red-500" : 
          riskLevel === "Medium" ? "text-amber-500" : 
          "text-green-500"
        }`}>
          {riskLevel} Risk
        </p>
      </div>
    );
  }
  return null;
};

// Custom bar color based on risk score
const getBarColor = (riskScore: number) => {
  if (riskScore > 65) return "#ea384c";
  if (riskScore > 40) return "#f59e0b";
  return "#10b981";
};

export function DepartmentRiskChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Department Risk Analysis</CardTitle>
        <CardDescription>Attrition risk scores by department</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={data}
              layout="vertical"
              margin={{ top: 5, right: 30, left: 60, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} />
              <XAxis 
                type="number" 
                domain={[0, 100]}
                axisLine={false}
                tickLine={false}
              />
              <YAxis 
                type="category" 
                dataKey="department" 
                axisLine={false}
                tickLine={false}
              />
              <Tooltip content={<CustomTooltip />} />
              <Bar 
                dataKey="riskScore" 
                radius={[0, 4, 4, 0]}
                barSize={20}
                animationDuration={1000}
                label={{ position: 'right', formatter: (value: any) => `${value}`, fill: '#666', fontSize: 12 }}
                fillOpacity={0.9}
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={getBarColor(entry.riskScore)} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}
