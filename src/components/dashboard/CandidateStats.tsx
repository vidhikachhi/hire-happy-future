
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const candidateData = [
  {
    stage: "Applied",
    count: 128,
    percentage: 100,
    color: "bg-hr-purple-light"
  },
  {
    stage: "Screened",
    count: 86,
    percentage: 67,
    color: "bg-hr-purple-DEFAULT"
  },
  {
    stage: "Interview",
    count: 42,
    percentage: 33,
    color: "bg-hr-purple-secondary"
  },
  {
    stage: "Offer",
    count: 18,
    percentage: 14,
    color: "bg-hr-purple-dark"
  },
  {
    stage: "Hired",
    count: 12,
    percentage: 9,
    color: "bg-green-500"
  },
];

export function CandidateStats() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Hiring Pipeline</CardTitle>
        <CardDescription>Current recruitment funnel statistics</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {candidateData.map((item) => (
            <div key={item.stage}>
              <div className="flex items-center justify-between mb-1">
                <div className="text-sm font-medium">{item.stage}</div>
                <div className="text-sm text-muted-foreground">
                  {item.count} ({item.percentage}%)
                </div>
              </div>
              <Progress value={item.percentage} className={item.color} />
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
