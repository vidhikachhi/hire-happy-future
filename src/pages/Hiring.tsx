
import { PageLayout } from "@/components/layout/PageLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, Filter, UserPlus, CalendarRange } from "lucide-react";

const candidatesList = [
  {
    id: "c1",
    name: "Sarah Johnson",
    role: "Senior Frontend Developer",
    experience: "8 years",
    status: "Interview",
    match: 92,
    location: "Remote",
    date: "Apr 8, 2025"
  },
  {
    id: "c2",
    name: "Michael Chen",
    role: "Product Manager",
    experience: "6 years",
    status: "Screened",
    match: 88,
    location: "San Francisco, CA",
    date: "Apr 5, 2025"
  },
  {
    id: "c3",
    name: "Aisha Patel",
    role: "UX Designer",
    experience: "5 years",
    status: "Offer",
    match: 95,
    location: "New York, NY",
    date: "Apr 2, 2025"
  },
  {
    id: "c4",
    name: "James Wilson",
    role: "Backend Engineer",
    experience: "7 years",
    status: "Applied",
    match: 82,
    location: "Austin, TX",
    date: "Apr 10, 2025"
  },
  {
    id: "c5",
    name: "Elena Rodriguez",
    role: "Data Scientist",
    experience: "4 years",
    status: "Interview",
    match: 90,
    location: "Remote",
    date: "Apr 9, 2025"
  },
  {
    id: "c6",
    name: "Thomas Nguyen",
    role: "DevOps Engineer",
    experience: "6 years",
    status: "Screened",
    match: 86,
    location: "Chicago, IL",
    date: "Apr 7, 2025"
  },
];

export default function Hiring() {
  return (
    <PageLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Hiring Optimization</h1>
            <p className="text-gray-500 mt-1">
              Analyze candidates, track recruitment metrics, and optimize your hiring process
            </p>
          </div>
          <Button className="bg-hr-purple-DEFAULT hover:bg-hr-purple-secondary">
            <UserPlus className="mr-2 h-4 w-4" />
            Add Candidate
          </Button>
        </div>

        <Tabs defaultValue="candidates" className="w-full">
          <TabsList className="w-full max-w-md mb-6 bg-gray-100">
            <TabsTrigger value="candidates" className="flex-1">Candidates</TabsTrigger>
            <TabsTrigger value="jobs" className="flex-1">Open Positions</TabsTrigger>
            <TabsTrigger value="analytics" className="flex-1">Analytics</TabsTrigger>
          </TabsList>

          <TabsContent value="candidates" className="mt-0">
            <Card>
              <CardHeader className="pb-3">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div className="relative w-full md:w-96">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input
                      type="search"
                      placeholder="Search candidates..."
                      className="pl-9 bg-gray-50 border-gray-200"
                    />
                  </div>
                  <div className="flex items-center gap-3">
                    <Select defaultValue="all">
                      <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="All Status" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Status</SelectItem>
                        <SelectItem value="applied">Applied</SelectItem>
                        <SelectItem value="screened">Screened</SelectItem>
                        <SelectItem value="interview">Interview</SelectItem>
                        <SelectItem value="offer">Offer</SelectItem>
                        <SelectItem value="hired">Hired</SelectItem>
                      </SelectContent>
                    </Select>
                    <Button variant="outline" size="icon">
                      <Filter className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="rounded-md border">
                  <table className="w-full caption-bottom text-sm">
                    <thead className="border-b bg-gray-50">
                      <tr>
                        <th className="h-12 px-4 text-left font-medium text-gray-500">Name</th>
                        <th className="h-12 px-4 text-left font-medium text-gray-500">Role</th>
                        <th className="h-12 px-4 text-left font-medium text-gray-500">Status</th>
                        <th className="h-12 px-4 text-left font-medium text-gray-500">Match Score</th>
                        <th className="h-12 px-4 text-left font-medium text-gray-500">Location</th>
                        <th className="h-12 px-4 text-left font-medium text-gray-500">Applied</th>
                      </tr>
                    </thead>
                    <tbody>
                      {candidatesList.map((candidate) => (
                        <tr key={candidate.id} className="border-b hover:bg-gray-50">
                          <td className="px-4 py-3 font-medium">{candidate.name}</td>
                          <td className="px-4 py-3 text-gray-700">{candidate.role}</td>
                          <td className="px-4 py-3">
                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                              candidate.status === "Applied" ? "bg-gray-100 text-gray-800" :
                              candidate.status === "Screened" ? "bg-blue-100 text-blue-800" :
                              candidate.status === "Interview" ? "bg-purple-100 text-purple-800" :
                              candidate.status === "Offer" ? "bg-amber-100 text-amber-800" :
                              "bg-green-100 text-green-800"
                            }`}>
                              {candidate.status}
                            </span>
                          </td>
                          <td className="px-4 py-3">
                            <div className="flex items-center gap-2">
                              <div className="w-full max-w-24 bg-gray-200 rounded-full h-2.5">
                                <div className="bg-hr-purple-DEFAULT h-2.5 rounded-full" style={{ width: `${candidate.match}%` }}></div>
                              </div>
                              <span className="text-gray-600">{candidate.match}%</span>
                            </div>
                          </td>
                          <td className="px-4 py-3 text-gray-700">{candidate.location}</td>
                          <td className="px-4 py-3 text-gray-700">{candidate.date}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="jobs">
            <Card>
              <CardHeader>
                <CardTitle>Open Positions</CardTitle>
                <CardDescription>Manage your current job openings and recruitment progress</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-500">Position details will appear here.</p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="analytics">
            <Card>
              <CardHeader>
                <CardTitle>Hiring Analytics</CardTitle>
                <CardDescription>Track recruitment metrics and optimize your hiring process</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-500">Analytics data will appear here.</p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </PageLayout>
  );
}
