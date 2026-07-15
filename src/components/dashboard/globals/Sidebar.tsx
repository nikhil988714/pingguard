"use client";

import Link from "next/link";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarSeparator,
} from "@/components/ui/sidebar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  LayoutDashboard,
  Globe,
  Bell,
  Settings,
  LogOut,
  Plus,
  Zap,
  BarChart3,
} from "lucide-react";
import { RootState } from "@/lib/store/store";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedProject } from "@/lib/reducers/Project";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { signOut } from "next-auth/react";

const navigationItems = [
  {
    title: "Dashboard",
    icon: LayoutDashboard,
    href: "/dashboard",
    description: "Overview of all projects & websites",
  },
  {
    title: "Websites",
    icon: Globe,
    href: "/dashboard/websites",
    description: "Monitor website performance",
  },
  {
    title: "Alerts",
    icon: Bell,
    href: "/dashboard/alerts",
    description: "View alert history",
  },
  {
    title: "Analytics",
    icon: BarChart3,
    href: "/dashboard/analytics",
    description: "Performance metrics",
  },
  {
    title: "Settings",
    icon: Settings,
    href: "/dashboard/settings",
    description: "Notifications & integrations",
  },
];

const quickActions = [
  {
    title: "New Project",
    icon: Plus,
    href: "/dashboard/projects/new",
    description: "Create a new project",
  },
  {
    title: "Add Website",
    icon: Globe,
    href: "/dashboard/websites/new",
    description: "Monitor a new website",
  },
];

export default function SidebarComponent() {
  const { user } = useSelector((state: RootState) => state.user);
  const { projects, selectedProject } = useSelector(
    (state: RootState) => state.project
  );

  const dispatch = useDispatch();
  const pathname = usePathname();

  useEffect(() => {
    if (projects.length > 0 && !selectedProject) {
      dispatch(setSelectedProject(projects[0]));
    }
  }, [projects, selectedProject, dispatch]);

  return (
    <Sidebar collapsible="icon" className="border-r">
      <SidebarHeader className="border-b border-sidebar-border">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <Link href="/dashboard" className="flex items-center gap-2">
                <Zap className="h-6 w-6 text-primary" />
                <span className="font-bold text-lg">PingGuard</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      <SidebarContent>
        {/* Navigation */}
        <SidebarGroup>
          <SidebarGroupLabel>Navigation</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {navigationItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild tooltip={item.description}>
                    <Link
                      href={item.href}
                      className={
                        pathname === item.href
                          ? "bg-primary/10 rounded-lg"
                          : ""
                      }
                    >
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarSeparator />

        {/* Projects */}
        <SidebarGroup>
          <SidebarGroupLabel>Recent Projects</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {projects.map((project) => (
                <SidebarMenuItem
                  key={project.id}
                  onClick={() => dispatch(setSelectedProject(project))}
                  className={
                    project.id === selectedProject?.id
                      ? "bg-primary/10 rounded-lg"
                      : ""
                  }
                >
                  <SidebarMenuButton asChild tooltip={project.name}>
                    <div className="flex items-center w-full cursor-pointer">
                      <Globe className="h-5 w-5 text-primary" />
                      <span className="ml-2">{project.name}</span>

                      <div
                        className={`ml-auto w-2 h-2 rounded-full ${project.status === "online"
                            ? "bg-green-500"
                            : project.status === "offline"
                              ? "bg-yellow-500"
                              : "bg-red-500"
                          }`}
                      />
                    </div>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarSeparator />

        {/* Quick Actions */}
        <SidebarGroup>
          <SidebarGroupLabel>Quick Actions</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {quickActions.map((action) => (
                <SidebarMenuItem key={action.title}>
                  <SidebarMenuButton asChild tooltip={action.description}>
                    <Link href={action.href}>
                      <action.icon />
                      <span>{action.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="border-t border-sidebar-border">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <div className="flex items-center gap-3 w-full">
                <Avatar className="h-8 w-8">
                  <AvatarImage src="" alt={user?.name || ""} />

                  <AvatarFallback>
                    {user?.name?.charAt(0).toUpperCase()}
                  </AvatarFallback>
                </Avatar>

                <div className="flex flex-col flex-1">
                  <span className="text-sm font-medium">{user?.name}</span>
                  <span className="text-xs text-muted-foreground">
                    {user?.email}
                  </span>
                </div>

                <button
                  onClick={() => signOut({ callbackUrl: "/" })}
                  className="p-2 rounded-md hover:bg-accent transition-colors"
                  title="Logout"
                >
                  <LogOut className="h-4 w-4 text-red-500" />
                </button>
              </div>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}