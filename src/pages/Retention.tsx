
import { PageLayout } from "@/components/layout/PageLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertCircle, Calendar, Users, User, BarChart3 } from "lucide-react";

const employeesAtRisk = [
  {
    id: "e1",
    name: "David Thompson",
    department: "Engineering",
    tenure: "2.1 years",
    riskScore: 78,
    riskLevel: "High",
    riskFactors: ["Compensation", "Work-Life Balance", "Career Growth"]
  },
  {
    id: "e2",
    name: "Jennifer Lee",
    department: "Sales",
    tenure: "1.8 years",
    riskScore: 85,
    riskLevel: "High",
    riskFactors: ["Compensation", "Management", "Recognition"]
  },
  {
    id: "e3",
    name: "Marcus Williams",
    department: "Product",
    tenure: "1.4 years",
    riskScore: 72,
    riskLevel: "High",
    riskFactors: ["Career Growth", "Work-Life Balance"]
  },
  {
    id: "e4",
    name: "Laura Martinez",
    department: "Marketing",
    tenure: "3.2 years",
    riskScore: 65,
    riskLevel: "Medium",
    riskFactors: ["Compensation", "Role Clarity"]
  },
  {
    id: "e5",
    name: "Robert Kim",
    department: "Engineering",
    tenure: "1.1 years",
    riskScore: 62,
    riskLevel: "Medium",
    riskFactors: ["Career Growth", "Role Clarity"]
  }
];

export default function Retention() {
  return (
    <PageLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Retention Analytics</h1>
          <p className="text-gray-500 mt-1">
            Monitor attrition risks, identify key factors, and implement retention strategies
          </p>
        </div>

        <Alert className="bg-amber-50 border-amber-200">
          <AlertCircle className="h-5 w-5 text-amber-600" />
          <AlertTitle className="text-amber-800">Attention Required</AlertTitle>
          <AlertDescription className="text-amber-700">
            We've detected an increase in attrition risk within the Sales department. Review the detailed reports below.
          </AlertDescription>
        </Alert>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card>
            <CardHeader className="pb-2">
              <div className="flex items-center gap-2">
                <BarChart3 className="h-5 w-5 text-hr-purple-DEFAULT" />
                <CardTitle className="text-base">Current Risk Level</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-center py-4">
                <div className="text-4xl font-bold text-hr-purple-secondary">24%</div>
                <p className="text-sm text-muted-foreground mt-1">of employees at high risk</p>
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <div>High Risk (60-100)</div>
                  <div className="font-medium">12 employees</div>
                </div>
                <Progress value={24} className="h-2 bg-gray-100" />
                <div className="flex items-center justify-between text-sm">
                  <div>Medium Risk (40-59)</div>
                  <div className="font-medium">28 employees</div>
                </div>
                <Progress value={32} className="h-2 bg-gray-100" />
                <div className="flex items-center justify-between text-sm">
                  <div>Low Risk (0-39)</div>
                  <div className="font-medium">208 employees</div>
                </div>
                <Progress value={44} className="h-2 bg-gray-100" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <div className="flex items-center gap-2">
                <Calendar className="h-5 w-5 text-hr-purple-DEFAULT" />
                <CardTitle className="text-base">Upcoming 1:1 Meetings</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center gap-3 pb-3 border-b">
                  <div className="w-8 h-8 rounded-full bg-hr-purple-light flex items-center justify-center text-hr-purple-dark font-medium">
                    JL
                  </div>
                  <div className="flex-1">
                    <div className="font-medium">Jennifer Lee</div>
                    <div className="text-sm text-muted-foreground">Apr 12, 2:00 PM</div>
                  </div>
                  <Badge className="bg-red-100 text-red-800 hover:bg-red-100">High Risk</Badge>
                </div>
                <div className="flex items-center gap-3 pb-3 border-b">
                  <div className="w-8 h-8 rounded-full bg-hr-purple-light flex items-center justify-center text-hr-purple-dark font-medium">
                    RK
                  </div>
                  <div className="flex-1">
                    <div className="font-medium">Robert Kim</div>
                    <div className="text-sm text-muted-foreground">Apr 13, 10:30 AM</div>
                  </div>
                  <Badge className="bg-amber-100 text-amber-800 hover:bg-amber-100">Medium Risk</Badge>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-hr-purple-light flex items-center justify-center text-hr-purple-dark font-medium">
                    MW
                  </div>
                  <div className="flex-1">
                    <div className="font-medium">Marcus Williams</div>
                    <div className="text-sm text-muted-foreground">Apr 14, 3:15 PM</div>
                  </div>
                  <Badge className="bg-red-100 text-red-800 hover:bg-red-100">High Risk</Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5 text-hr-purple-DEFAULT" />
                <CardTitle className="text-base">Department Risk Overview</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <div className="text-sm font-medium">Sales</div>
                    <div className="text-sm text-muted-foreground">
                      68%
                    </div>
                  </div>
                  <Progress value={68} className="h-2 bg-red-100" />
                </div>
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <div className="text-sm font-medium">Engineering</div>
                    <div className="text-sm text-muted-foreground">
                      42%
                    </div>
                  </div>
                  <Progress value={42} className="h-2 bg-amber-100" />
                </div>
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <div className="text-sm font-medium">Product</div>
                    <div className="text-sm text-muted-foreground">
                      48%
                    </div>
                  </div>
                  <Progress value={48} className="h-2 bg-amber-100" />
                </div>
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <div className="text-sm font-medium">Marketing</div>
                    <div className="text-sm text-muted-foreground">
                      35%
                    </div>
                  </div>
                  <Progress value={35} className="h-2 bg-green-100" />
                </div>
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <div className="text-sm font-medium">Finance</div>
                    <div className="text-sm text-muted-foreground">
                      31%
                    </div>
                  </div>
                  <Progress value={31} className="h-2 bg-green-100" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="at-risk" className="w-full">
          <TabsList className="w-full max-w-md mb-6 bg-gray-100">
            <TabsTrigger value="at-risk" className="flex-1">
              <User className="mr-2 h-4 w-4" />
              Employees at Risk
            </TabsTrigger>
            <TabsTrigger value="strategies" className="flex-1">
              <BarChart3 className="mr-2 h-4 w-4" />
              Retention Strategies
            </TabsTrigger>
          </TabsList>

          <TabsContent value="at-risk" className="mt-0">
            <Card>
              <CardHeader>
                <CardTitle>Employees at Risk</CardTitle>
                <CardDescription>Predictive analysis of employees with high attrition risk</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="rounded-md border overflow-hidden">
                  <table className="w-full caption-bottom text-sm">
                    <thead className="border-b bg-gray-50">
                      <tr>
                        <th className="h-12 px-4 text-left font-medium text-gray-500">Employee</th>
                        <th className="h-12 px-4 text-left font-medium text-gray-500">Department</th>
                        <th className="h-12 px-4 text-left font-medium text-gray-500">Tenure</th>
                        <th className="h-12 px-4 text-left font-medium text-gray-500">Risk Score</th>
                        <th className="h-12 px-4 text-left font-medium text-gray-500">Risk Factors</th>
                      </tr>
                    </thead>
                    <tbody>
                      {employeesAtRisk.map((employee) => (
                        <tr key={employee.id} className="border-b hover:bg-gray-50">
                          <td className="px-4 py-3 font-medium">{employee.name}</td>
                          <td className="px-4 py-3">{employee.department}</td>
                          <td className="px-4 py-3">{employee.tenure}</td>
                          <td className="px-4 py-3">
                            <div className="flex items-center gap-2">
                              <div className="w-full max-w-16 bg-gray-200 rounded-full h-2.5">
                                <div 
                                  className={
                                    employee.riskLevel === "High" 
                                      ? "bg-red-500 h-2.5 rounded-full" 
                                      : "bg-amber-500 h-2.5 rounded-full"
                                  } 
                                  style={{ width: `${employee.riskScore}%` }}
                                ></div>
                              </div>
                              <span className={
                                employee.riskLevel === "High" 
                                  ? "text-red-600 font-medium" 
                                  : "text-amber-600 font-medium"
                              }>
                                {employee.riskScore}%
                              </span>
                            </div>
                          </td>
                          <td className="px-4 py-3">
                            <div className="flex flex-wrap gap-1">
                              {employee.riskFactors.map((factor, index) => (
                                <Badge key={index} variant="outline" className="bg-gray-100 text-gray-800">
                                  {factor}
                                </Badge>
                              ))}
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="strategies">
            <Card>
              <CardHeader>
                <CardTitle>Retention Strategies</CardTitle>
                <CardDescription>Recommended initiatives to improve employee retention</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-500">Retention strategies will appear here.</p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </PageLayout>
  );
}
