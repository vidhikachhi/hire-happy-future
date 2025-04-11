
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { 
  BarChart3, 
  Users, 
  UserCheck, 
  Award, 
  Settings, 
  ChevronLeft, 
  ChevronRight,
  HomeIcon,
  HelpCircle
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navItems = [
  {
    title: "Dashboard",
    href: "/",
    icon: HomeIcon,
  },
  {
    title: "Hiring Optimization",
    href: "/hiring",
    icon: Users,
  },
  {
    title: "Retention Analytics",
    href: "/retention",
    icon: UserCheck,
  },
  {
    title: "Culture Assessment",
    href: "/culture",
    icon: Award,
  },
  {
    title: "Settings",
    href: "/settings",
    icon: Settings,
  }
];

export function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);
  const location = useLocation();

  return (
    <div className="relative">
      <div
        className={cn(
          "h-screen bg-sidebar fixed left-0 top-0 z-30 flex flex-col transition-all duration-300 ease-in-out border-r border-hr-purple-dark/10",
          collapsed ? "w-16" : "w-64"
        )}
      >
        <div className="p-4 flex items-center justify-between border-b border-sidebar-border">
          {!collapsed && (
            <div className="flex items-center gap-2">
              <BarChart3 className="h-6 w-6 text-hr-purple-DEFAULT" />
              <h1 className="text-xl font-bold text-white">Retain<span className="text-hr-purple-DEFAULT">AI</span></h1>
            </div>
          )}
          {collapsed && <BarChart3 className="h-6 w-6 text-hr-purple-DEFAULT mx-auto" />}
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setCollapsed(!collapsed)}
            className="text-sidebar-foreground hover:text-white hover:bg-sidebar-accent rounded-full"
          >
            {collapsed ? <ChevronRight className="h-4 w-4" /> : <ChevronLeft className="h-4 w-4" />}
          </Button>
        </div>

        <div className="flex-1 overflow-auto py-4">
          <nav className="flex flex-col gap-1 px-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={cn(
                  "flex items-center gap-3 px-3 py-2 rounded-md transition-colors",
                  location.pathname === item.href
                    ? "bg-sidebar-accent text-white"
                    : "text-sidebar-foreground/80 hover:text-white hover:bg-sidebar-accent/50"
                )}
              >
                <item.icon className="h-5 w-5" />
                {!collapsed && <span>{item.title}</span>}
              </Link>
            ))}
          </nav>
        </div>

        <div className="p-4 border-t border-sidebar-border">
          <Link
            to="/help"
            className={cn(
              "flex items-center gap-3 px-3 py-2 rounded-md transition-colors text-sidebar-foreground/80 hover:text-white hover:bg-sidebar-accent/50"
            )}
          >
            <HelpCircle className="h-5 w-5" />
            {!collapsed && <span>Help & Support</span>}
          </Link>
        </div>
      </div>
      <div
        className={cn(
          "transition-all duration-300 ease-in-out",
          collapsed ? "ml-16" : "ml-64"
        )}
      >
        {/* Main content wrapper */}
      </div>
    </div>
  );
}
