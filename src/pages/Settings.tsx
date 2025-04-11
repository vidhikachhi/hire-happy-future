
import { PageLayout } from "@/components/layout/PageLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import { 
  ScrollText, 
  Building, 
  Bell, 
  Lock, 
  UserCog, 
  Key,
  Upload,
  Save
} from "lucide-react";

export default function Settings() {
  return (
    <PageLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Settings</h1>
          <p className="text-gray-500 mt-1">
            Configure your organization profile, notifications, and system preferences
          </p>
        </div>

        <Tabs defaultValue="organization" className="w-full">
          <TabsList className="w-full max-w-3xl mb-6 bg-gray-100 grid grid-cols-4">
            <TabsTrigger value="organization" className="flex gap-2 items-center">
              <Building className="h-4 w-4" />
              <span className="hidden sm:inline">Organization</span>
            </TabsTrigger>
            <TabsTrigger value="integrations" className="flex gap-2 items-center">
              <Key className="h-4 w-4" />
              <span className="hidden sm:inline">Integrations</span>
            </TabsTrigger>
            <TabsTrigger value="notifications" className="flex gap-2 items-center">
              <Bell className="h-4 w-4" />
              <span className="hidden sm:inline">Notifications</span>
            </TabsTrigger>
            <TabsTrigger value="users" className="flex gap-2 items-center">
              <UserCog className="h-4 w-4" />
              <span className="hidden sm:inline">Users</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="organization" className="mt-0">
            <Card>
              <CardHeader>
                <CardTitle>Organization Profile</CardTitle>
                <CardDescription>
                  Update your company details and preferences
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="w-full md:w-2/3 space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="company-name">Company Name</Label>
                      <Input id="company-name" defaultValue="TechFlow Innovations" />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="industry">Industry</Label>
                      <Input id="industry" defaultValue="Software / Technology" />
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="company-size">Company Size</Label>
                        <Input id="company-size" defaultValue="248" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="founded">Founded</Label>
                        <Input id="founded" defaultValue="2018" />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="company-description">Company Description</Label>
                      <Textarea 
                        id="company-description" 
                        rows={4}
                        defaultValue="TechFlow Innovations is a B2B SaaS company focused on building productivity tools for modern workplaces."
                      />
                    </div>
                  </div>
                  
                  <div className="w-full md:w-1/3">
                    <div className="space-y-2">
                      <Label>Company Logo</Label>
                      <div className="border-2 border-dashed rounded-lg p-6 flex flex-col items-center justify-center gap-3 text-center">
                        <div className="bg-hr-purple-light p-4 rounded-full">
                          <Upload className="h-6 w-6 text-hr-purple-DEFAULT" />
                        </div>
                        <div>
                          <p className="text-sm font-medium">Drag and drop or click to upload</p>
                          <p className="text-xs text-muted-foreground mt-1">SVG, PNG or JPG (max. 2MB)</p>
                        </div>
                        <Button variant="outline" size="sm" className="mt-2">
                          Browse Files
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-lg font-medium">System Preferences</h3>
                  
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>Anonymize Employee Data</Label>
                      <p className="text-sm text-muted-foreground">
                        Hide employee identities in reports and analytics
                      </p>
                    </div>
                    <Switch />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>Enable Department Benchmarking</Label>
                      <p className="text-sm text-muted-foreground">
                        Compare departments against each other in reports
                      </p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>Automatic Risk Alerts</Label>
                      <p className="text-sm text-muted-foreground">
                        Receive notifications for high-risk employees
                      </p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                </div>
                
                <div className="pt-4 flex justify-end gap-3">
                  <Button variant="outline">Cancel</Button>
                  <Button className="bg-hr-purple-DEFAULT hover:bg-hr-purple-secondary">
                    <Save className="mr-2 h-4 w-4" />
                    Save Changes
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="integrations">
            <Card>
              <CardHeader>
                <CardTitle>Integrations</CardTitle>
                <CardDescription>
                  Connect with your existing HR systems and tools
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  <Card className="border border-gray-200">
                    <CardHeader className="pb-2">
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-base">HRIS System</CardTitle>
                        <Badge className="bg-green-100 text-green-800">Connected</Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-gray-500">Import employee data from your HRIS system</p>
                      <div className="mt-4 flex justify-end">
                        <Button variant="outline" size="sm">Configure</Button>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card className="border border-gray-200">
                    <CardHeader className="pb-2">
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-base">ATS Integration</CardTitle>
                        <Badge className="bg-gray-100 text-gray-800">Not Connected</Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-gray-500">Connect to your applicant tracking system</p>
                      <div className="mt-4 flex justify-end">
                        <Button variant="outline" size="sm">Connect</Button>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card className="border border-gray-200">
                    <CardHeader className="pb-2">
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-base">Survey Platform</CardTitle>
                        <Badge className="bg-green-100 text-green-800">Connected</Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-gray-500">Import engagement survey data automatically</p>
                      <div className="mt-4 flex justify-end">
                        <Button variant="outline" size="sm">Configure</Button>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card className="border border-gray-200">
                    <CardHeader className="pb-2">
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-base">SSO Provider</CardTitle>
                        <Badge className="bg-gray-100 text-gray-800">Not Connected</Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-gray-500">Enable single sign-on for your organization</p>
                      <div className="mt-4 flex justify-end">
                        <Button variant="outline" size="sm">Connect</Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
                
                <div className="pt-4 flex justify-end">
                  <Button className="bg-hr-purple-DEFAULT hover:bg-hr-purple-secondary">
                    Add New Integration
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="notifications">
            <Card>
              <CardHeader>
                <CardTitle>Notification Settings</CardTitle>
                <CardDescription>
                  Configure how and when you receive alerts and updates
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-500">Notification preferences will appear here.</p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="users">
            <Card>
              <CardHeader>
                <CardTitle>User Management</CardTitle>
                <CardDescription>
                  Manage user accounts and permission levels
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-500">User management options will appear here.</p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </PageLayout>
  );
}
