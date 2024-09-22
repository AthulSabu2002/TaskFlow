'use client'

import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LayoutDashboard, Users, FileText, Bell, LucideIcon } from 'lucide-react';

interface OverviewCardProps {
  title: string;
  value: string;
  change: string;
  icon: LucideIcon;
  color: string;
}

const OverviewCard: React.FC<OverviewCardProps> = ({ title, value, change, icon: Icon, color }) => (
  <Card className={`bg-gradient-to-br from-${color}-500 to-${color}-600 text-white`}>
    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
      <CardTitle className="text-sm font-medium">{title}</CardTitle>
      <Icon className={`h-4 w-4 text-${color}-100`} />
    </CardHeader>
    <CardContent>
      <div className="text-2xl font-bold">{value}</div>
      <p className={`text-xs text-${color}-100`}>
        {change}
      </p>
    </CardContent>
  </Card>
);

const Overview: React.FC = () => (
  <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
    <OverviewCard title="Total Tasks" value="24" change="+10.1% from last month" icon={LayoutDashboard} color="blue" />
    <OverviewCard title="In Progress" value="8" change="+20.1% from last month" icon={Users} color="green" />
    <OverviewCard title="Completed" value="12" change="+19% from last month" icon={FileText} color="purple" />
    <OverviewCard title="Overdue" value="4" change="-14% from last month" icon={Bell} color="red" />
  </div>
);

interface DashboardContentProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const DashboardContent: React.FC<DashboardContentProps> = ({ activeTab, setActiveTab }) => {
  const tabContent: { [key: string]: React.ReactNode } = {
    overview: <Overview />,
    kanban: <div className="text-2xl">Kanban Board (To be implemented)</div>,
    projects: <div className="text-2xl">Projects (To be implemented)</div>,
    team: <div className="text-2xl">Team Management (To be implemented)</div>,
    account: <div className="text-2xl">Account Settings (To be implemented)</div>,
  };

  return (
    <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100">
      <div className="container mx-auto px-6 py-8">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-2 sm:grid-cols-3 md:grid-cols-5 bg-blue-100 p-1 rounded-lg">
            {Object.keys(tabContent).map((tab) => (
              <TabsTrigger 
                key={tab} 
                value={tab}
                className="data-[state=active]:bg-white data-[state=active]:text-blue-600"
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </TabsTrigger>
            ))}
          </TabsList>
          {Object.entries(tabContent).map(([tab, content]) => (
            <TabsContent key={tab} value={tab}>
              {content}
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </main>
  );
};


export default DashboardContent