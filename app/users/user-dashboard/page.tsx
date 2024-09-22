'use client'

import React, { useState } from 'react';
import Sidebar from '../../../components/custom/Sidebar';
import Header from '../../../components/custom/Header';
import DashboardContent from '../../../components/custom/DashboardContent';

const UserDashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("overview");
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState<boolean>(false);

  const toggleSidebar = () => setIsSidebarCollapsed(!isSidebarCollapsed);

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        isSidebarCollapsed={isSidebarCollapsed}
        toggleSidebar={toggleSidebar}
      />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        <DashboardContent activeTab={activeTab} setActiveTab={setActiveTab} />
      </div>
    </div>
  );
};

export default UserDashboard;