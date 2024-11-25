import React, { useState, useEffect } from 'react';
import LoginPage from './components/auth/LoginPage';
import WelcomePage from './components/dashboard/WelcomePage';
import StakeHolder from './components/dashboard/StakeHolder';
import PendingRequests from './components/dashboard/PendingRequests';
import BackgroundCheck from './components/dashboard/BackgroundCheck';
import BadgeRequest from './components/dashboard/BadgeRequest';
import AccessRequest from './components/dashboard/AccessRequest';
import Attendance from './components/dashboard/Attendance';
import VisitorsManagement from './components/dashboard/VisitorsManagement';
import Reports from './components/dashboard/Reports';

  const renderPage = () => {
    switch (currentPage) {
      case 'stakeholder':
        if (currentSubItem === 'Pending') {
          return <PendingRequests />;
        }
        return <StakeHolder onNavigate={handleNavigate} subItem={currentSubItem} />;
      case 'background':
        return <BackgroundCheck onNavigate={handleNavigate} subItem={currentSubItem} />;
      case 'badge':
        return <BadgeRequest onNavigate={handleNavigate} subItem={currentSubItem} />;
      case 'access':
        return <AccessRequest onNavigate={handleNavigate} subItem={currentSubItem} />;
      case 'attendance':
        return <Attendance onNavigate={handleNavigate} subItem={currentSubItem} />;
      case 'visitors':
        return <VisitorsManagement onNavigate={handleNavigate} subItem={currentSubItem} />;
      case 'reports':
        return <Reports onNavigate={handleNavigate} subItem={currentSubItem} />;
      default:
        return (
          <WelcomePage 
            username={username} 
            onLogout={handleLogout}
            onNavigate={handleNavigate}
          />
        );
    }
  };
