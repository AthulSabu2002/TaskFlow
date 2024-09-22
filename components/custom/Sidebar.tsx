'use client'

import React from 'react';
import { LayoutDashboard, Kanban, FileText, Users, Settings, Menu, ChevronLeft, LucideIcon } from 'lucide-react';

interface NavItem {
  key: string;
  icon: LucideIcon;
}

interface SidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  isSidebarCollapsed: boolean;
  toggleSidebar: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activeTab, setActiveTab, isSidebarCollapsed, toggleSidebar }) => {
  const navItems: NavItem[] = [
    { key: 'overview', icon: LayoutDashboard },
    { key: 'kanban', icon: Kanban },
    { key: 'projects', icon: FileText },
    { key: 'team', icon: Users },
    { key: 'account', icon: Settings },
  ];

  return (
    <div className={`bg-gradient-to-b from-blue-600 to-blue-800 text-white transition-all duration-300 ease-in-out ${isSidebarCollapsed ? 'w-16' : 'w-64'} flex flex-col`}>
      <div className="p-4 flex items-center justify-between">
        {!isSidebarCollapsed && <h2 className="text-2xl font-semibold">TaskMaster</h2>}
        <button onClick={toggleSidebar} className="p-2 rounded-full hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400">
          {isSidebarCollapsed ? <Menu size={24} /> : <ChevronLeft size={24} />}
        </button>
      </div>
      <nav className="mt-6 flex-grow">
        {navItems.map(({ key, icon: Icon }) => (
          <a
            key={key}
            className={`flex items-center px-4 py-2 mt-2 transition-colors duration-200 ${
              activeTab === key
                ? "bg-blue-700 text-white"
                : "text-blue-100 hover:bg-blue-700"
            }`}
            href="#"
            onClick={() => setActiveTab(key)}
          >
            <Icon className="w-5 h-5 mr-3" />
            {!isSidebarCollapsed && (key.charAt(0).toUpperCase() + key.slice(1))}
          </a>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar