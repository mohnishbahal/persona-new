import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { LayoutDashboard, Users, Map, BarChart2, Settings, LogOut } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { Button } from './ui/button';

const navigation = [
  { name: 'Dashboard', href: '/app', icon: LayoutDashboard },
  { name: 'Personas', href: '/app/personas', icon: Users },
  { name: 'Journeys', href: '/app/journeys', icon: Map },
  { name: 'Analytics', href: '/app/analytics', icon: BarChart2 },
  { name: 'Settings', href: '/app/settings/profile', icon: Settings },
];

interface SidebarProps {
  onClose?: () => void;
}

export default function Sidebar({ onClose }: SidebarProps) {
  const location = useLocation();
  const { currentUser, logout } = useAuth();

  if (!currentUser) return null;

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.error('Failed to log out:', error);
    }
  };

  return (
    <div className="flex h-full flex-col gap-y-5 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 px-6 pb-4">
      <div className="flex h-16 shrink-0 items-center">
        <Link to="/app" className="text-xl font-display font-bold text-gray-900 dark:text-white">
          Persona Paths
        </Link>
      </div>
      
      <nav className="flex flex-1 flex-col">
        <ul role="list" className="flex flex-1 flex-col gap-y-7">
          <li>
            <ul role="list" className="-mx-2 space-y-1">
              {navigation.map((item) => {
                const Icon = item.icon;
                const isActive = location.pathname === item.href;
                
                return (
                  <li key={item.name}>
                    <Link
                      to={item.href}
                      onClick={onClose}
                      className={`
                        group flex gap-x-3 rounded-lg p-2 text-sm font-semibold leading-6
                        ${isActive 
                          ? 'bg-gray-50 dark:bg-gray-900 text-[#6C47FF] dark:text-[#8165FF]'
                          : 'text-gray-700 hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-gray-900'
                        }
                      `}
                    >
                      <Icon className={`h-6 w-6 shrink-0 ${
                        isActive 
                          ? 'text-[#6C47FF] dark:text-[#8165FF]'
                          : 'text-gray-400 group-hover:text-gray-600 dark:text-gray-400 dark:group-hover:text-gray-300'
                      }`} />
                      {item.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </li>

          <li className="mt-auto">
            <Button
              variant="ghost"
              className="w-full justify-start"
              onClick={handleLogout}
            >
              <LogOut className="mr-2 h-5 w-5" />
              Sign out
            </Button>
          </li>
        </ul>
      </nav>
    </div>
  );
}