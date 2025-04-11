
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const factorsData = [
  {
    id: 1,
    factor: "Compensation",
    impact: "High",
    trend: "Increasing",
    recommendation: "Review salary bands for consistency with market rates"
  },
  {
    id: 2,
    factor: "Work-Life Balance",
    impact: "High",
    trend: "Stable",
    recommendation: "Implement flexible work hours policy"
  },
  {
    id: 3,
    factor: "Career Growth",
    impact: "Medium",
    trend: "Increasing",
    recommendation: "Create more transparent promotion pathways"
  },
  {
    id: 4,
    factor: "Management Quality",
    impact: "High",
    trend: "Decreasing",
    recommendation: "Provide leadership training for middle managers"
  },
  {
    id: 5,
    factor: "Company Culture",
    impact: "Medium",
    trend: "Improving",
    recommendation: "Continue culture initiatives and measure impact"
  },
];

const getImpactColor = (impact: string) => {
  switch (impact) {
    case "High": return "bg-red-100 text-red-800 hover:bg-red-100";
    case "Medium": return "bg-amber-100 text-amber-800 hover:bg-amber-100";
    case "Low": return "bg-green-100 text-green-800 hover:bg-green-100";
    default: return "";
  }
};

const getTrendColor = (trend: string) => {
  switch (trend) {
    case "Increasing": return "bg-red-100 text-red-800 hover:bg-red-100";
    case "Decreasing": return "bg-green-100 text-green-800 hover:bg-green-100";
    case "Improving": return "bg-green-100 text-green-800 hover:bg-green-100";
    case "Stable": return "bg-blue-100 text-blue-800 hover:bg-blue-100";
    default: return "";
  }
};

export function FactorsTable() {
  return (
    <Card className="col-span-2">
      <CardHeader>
        <CardTitle>Key Attrition Factors</CardTitle>
        <CardDescription>
          Top factors affecting employee retention with recommendations
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="overflow-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b border-gray-200 text-sm text-gray-500">
                <th className="text-left py-3 px-4 font-medium">Factor</th>
                <th className="text-left py-3 px-4 font-medium">Impact</th>
                <th className="text-left py-3 px-4 font-medium">Trend</th>
                <th className="text-left py-3 px-4 font-medium">Recommendation</th>
              </tr>
            </thead>
            <tbody>
              {factorsData.map((item) => (
                <tr key={item.id} className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-3 px-4 font-medium">{item.factor}</td>
                  <td className="py-3 px-4">
                    <Badge variant="outline" className={getImpactColor(item.impact)}>
                      {item.impact}
                    </Badge>
                  </td>
                  <td className="py-3 px-4">
                    <Badge variant="outline" className={getTrendColor(item.trend)}>
                      {item.trend}
                    </Badge>
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-600">{item.recommendation}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  );
}
