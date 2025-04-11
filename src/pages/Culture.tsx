
import { PageLayout } from "@/components/layout/PageLayout";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  PieChart, 
  Pie, 
  Cell, 
  ResponsiveContainer, 
  Radar, 
  RadarChart, 
  PolarGrid, 
  PolarAngleAxis, 
  PolarRadiusAxis,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend
} from "recharts";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";

// Survey Responses Data
const surveyResponses = [
  { name: "Very Satisfied", value: 42, color: "#10b981" },
  { name: "Satisfied", value: 28, color: "#9b87f5" },
  { name: "Neutral", value: 18, color: "#8E9196" },
  { name: "Dissatisfied", value: 8, color: "#f59e0b" },
  { name: "Very Dissatisfied", value: 4, color: "#ea384c" },
];

// Culture Dimensions Data
const cultureDimensions = [
  { subject: "Collaboration", score: 78, fullMark: 100 },
  { subject: "Innovation", score: 65, fullMark: 100 },
  { subject: "Transparency", score: 82, fullMark: 100 },
  { subject: "Work-Life Balance", score: 68, fullMark: 100 },
  { subject: "Inclusivity", score: 75, fullMark: 100 },
  { subject: "Recognition", score: 60, fullMark: 100 },
];

// Department Engagement Data
const departmentEngagement = [
  { department: "Engineering", score: 76 },
  { department: "Sales", score: 68 },
  { department: "Marketing", score: 82 },
  { department: "Product", score: 74 },
  { department: "HR", score: 88 },
  { department: "Finance", score: 71 },
];

// Culture Initiatives
const initiatives = [
  {
    id: "i1",
    title: "Flexible Work Policy",
    description: "Implement a hybrid work model with flexible hours and work-from-home options",
    impact: "High",
    status: "In Progress",
    completion: 65
  },
  {
    id: "i2",
    title: "Peer Recognition Program",
    description: "Launch a digital platform for employees to recognize and reward each other's contributions",
    impact: "Medium",
    status: "Planned",
    completion: 25
  },
  {
    id: "i3",
    title: "Career Development Workshops",
    description: "Monthly skills development workshops aligned with career growth paths",
    impact: "High",
    status: "Active",
    completion: 80
  },
  {
    id: "i4",
    title: "Diversity & Inclusion Training",
    description: "Mandatory training sessions for all employees to foster an inclusive workplace",
    impact: "Medium",
    status: "Completed",
    completion: 100
  },
];

export default function Culture() {
  return (
    <PageLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Culture Assessment</h1>
          <p className="text-gray-500 mt-1">
            Evaluate workplace culture, monitor employee engagement, and implement effective initiatives
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-base">Overall Culture Score</CardTitle>
            </CardHeader>
            <CardContent className="pt-4">
              <div className="text-center">
                <div className="text-5xl font-bold text-hr-purple-DEFAULT">7.8</div>
                <p className="text-sm text-muted-foreground mt-1">out of 10</p>
                <div className="w-full bg-gray-200 rounded-full h-2.5 mt-4">
                  <div className="bg-hr-purple-DEFAULT h-2.5 rounded-full" style={{ width: "78%" }}></div>
                </div>
                <p className="text-xs text-muted-foreground mt-2">+0.6 points from last quarter</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-base">Survey Participation</CardTitle>
            </CardHeader>
            <CardContent className="pt-4">
              <div className="text-center">
                <div className="text-5xl font-bold text-hr-purple-DEFAULT">86%</div>
                <p className="text-sm text-muted-foreground mt-1">response rate</p>
                <div className="w-full bg-gray-200 rounded-full h-2.5 mt-4">
                  <div className="bg-hr-purple-DEFAULT h-2.5 rounded-full" style={{ width: "86%" }}></div>
                </div>
                <p className="text-xs text-muted-foreground mt-2">214 out of 248 employees</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-base">eNPS Score</CardTitle>
              <CardDescription className="text-xs">Employee Net Promoter Score</CardDescription>
            </CardHeader>
            <CardContent className="pt-2">
              <div className="text-center">
                <div className="text-5xl font-bold text-hr-purple-DEFAULT">+32</div>
                <div className="flex justify-between text-xs text-muted-foreground mt-3">
                  <span>-100</span>
                  <span>0</span>
                  <span>+100</span>
                </div>
                <div className="w-full h-2 bg-gray-200 rounded-full mt-1 relative">
                  <div className="absolute top-0 left-1/2 w-px h-4 bg-gray-400 -translate-x-1/2 -translate-y-1"></div>
                  <div className="bg-hr-purple-DEFAULT h-2 rounded-full" style={{ width: "66%" }}></div>
                </div>
                <p className="text-xs text-muted-foreground mt-4">42% Promoters, 48% Passives, 10% Detractors</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-base">Key Improvement Areas</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <Badge className="bg-red-100 text-red-800 hover:bg-red-100">#1</Badge>
                  <span>Career growth opportunities</span>
                </li>
                <li className="flex items-center gap-2">
                  <Badge className="bg-amber-100 text-amber-800 hover:bg-amber-100">#2</Badge>
                  <span>Recognition of contributions</span>
                </li>
                <li className="flex items-center gap-2">
                  <Badge className="bg-yellow-100 text-yellow-800 hover:bg-yellow-100">#3</Badge>
                  <span>Compensation transparency</span>
                </li>
                <li className="flex items-center gap-2">
                  <Badge className="bg-green-100 text-green-800 hover:bg-green-100">#4</Badge>
                  <span>Work-life balance</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="w-full max-w-md mb-6 bg-gray-100">
            <TabsTrigger value="overview" className="flex-1">Overview</TabsTrigger>
            <TabsTrigger value="dimensions" className="flex-1">Culture Dimensions</TabsTrigger>
            <TabsTrigger value="initiatives" className="flex-1">Initiatives</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Survey Responses</CardTitle>
                  <CardDescription>Overall employee satisfaction distribution</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-80">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={surveyResponses}
                          innerRadius={80}
                          outerRadius={110}
                          paddingAngle={2}
                          dataKey="value"
                          label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                          labelLine={false}
                        >
                          {surveyResponses.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} />
                          ))}
                        </Pie>
                        <Tooltip formatter={(value) => [`${value} responses`, 'Count']} />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                  <div className="flex flex-wrap justify-center gap-3 mt-2">
                    {surveyResponses.map((entry, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full" style={{ backgroundColor: entry.color }}></div>
                        <span className="text-sm">{entry.name}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Department Engagement</CardTitle>
                  <CardDescription>Engagement scores across different departments</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-80">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart
                        data={departmentEngagement}
                        margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                      >
                        <XAxis dataKey="department" />
                        <YAxis domain={[0, 100]} />
                        <Tooltip formatter={(value) => [`${value}/100`, 'Score']} />
                        <Bar dataKey="score" fill="#9b87f5" radius={[4, 4, 0, 0]} />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="dimensions" className="mt-0">
            <Card>
              <CardHeader>
                <CardTitle>Culture Dimensions Analysis</CardTitle>
                <CardDescription>Assessment of key cultural components</CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col lg:flex-row items-center gap-8">
                <div className="w-full lg:w-1/2 h-96">
                  <ResponsiveContainer width="100%" height="100%">
                    <RadarChart cx="50%" cy="50%" outerRadius="80%" data={cultureDimensions}>
                      <PolarGrid />
                      <PolarAngleAxis dataKey="subject" />
                      <PolarRadiusAxis domain={[0, 100]} />
                      <Radar
                        name="Score"
                        dataKey="score"
                        stroke="#9b87f5"
                        fill="#9b87f5"
                        fillOpacity={0.6}
                      />
                      <Tooltip formatter={(value) => [`${value}/100`, 'Score']} />
                    </RadarChart>
                  </ResponsiveContainer>
                </div>
                <div className="w-full lg:w-1/2 space-y-4">
                  {cultureDimensions.map((dimension, index) => (
                    <div key={index}>
                      <div className="flex items-center justify-between mb-1">
                        <div className="text-sm font-medium">{dimension.subject}</div>
                        <div className="text-sm text-muted-foreground">
                          {dimension.score}/100
                        </div>
                      </div>
                      <Progress value={dimension.score} className="h-2" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="initiatives" className="mt-0">
            <Card>
              <CardHeader>
                <CardTitle>Culture Improvement Initiatives</CardTitle>
                <CardDescription>Ongoing and planned programs to enhance workplace culture</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {initiatives.map((initiative) => (
                    <Card key={initiative.id} className="border border-gray-200">
                      <CardHeader className="pb-2">
                        <div className="flex items-center justify-between">
                          <CardTitle className="text-base">{initiative.title}</CardTitle>
                          <Badge className={
                            initiative.impact === "High" 
                              ? "bg-purple-100 text-purple-800" 
                              : "bg-blue-100 text-blue-800"
                          }>
                            {initiative.impact} Impact
                          </Badge>
                        </div>
                      </CardHeader>
                      <CardContent className="py-2">
                        <p className="text-sm text-gray-600">{initiative.description}</p>
                        <div className="mt-4">
                          <div className="flex items-center justify-between mb-1">
                            <div className="flex items-center gap-2">
                              <Badge variant="outline" className={
                                initiative.status === "Completed" 
                                  ? "bg-green-100 text-green-800 border-green-200" 
                                  : initiative.status === "Active" 
                                    ? "bg-blue-100 text-blue-800 border-blue-200"
                                    : initiative.status === "In Progress"
                                      ? "bg-amber-100 text-amber-800 border-amber-200"
                                      : "bg-gray-100 text-gray-800 border-gray-200"
                              }>
                                {initiative.status}
                              </Badge>
                            </div>
                            <div className="text-sm text-muted-foreground">
                              {initiative.completion}% Complete
                            </div>
                          </div>
                          <Progress value={initiative.completion} className="h-2" />
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex justify-center pt-2">
                <Button className="bg-hr-purple-DEFAULT hover:bg-hr-purple-secondary">
                  Create New Initiative
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </PageLayout>
  );
}
