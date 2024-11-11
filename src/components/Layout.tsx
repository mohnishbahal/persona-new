import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import ThemeToggle from './ThemeToggle';
import { useAuth } from '../context/AuthContext';
import { Menu, X } from 'lucide-react';
import { Logo } from './Logo';

export default function Layout() {
  const { currentUser } = useAuth();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  if (!currentUser) return null;

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Mobile sidebar */}
      <div 
        className={`fixed inset-0 z-40 lg:hidden ${isSidebarOpen ? 'block' : 'hidden'}`}
        onClick={() => setIsSidebarOpen(false)}
      >
        <div className="fixed inset-0 bg-gray-600 bg-opacity-75" />
        <div className="fixed inset-y-0 left-0 z-40 w-72 overflow-y-auto bg-white dark:bg-gray-800 transform transition-transform duration-300">
          <Sidebar onClose={() => setIsSidebarOpen(false)} />
        </div>
      </div>

      {/* Desktop sidebar */}
      <div className="hidden lg:fixed lg:inset-y-0 lg:z-40 lg:flex lg:w-72 lg:flex-col">
        <Sidebar />
      </div>

      {/* Main content */}
      <div className="lg:pl-72">
        {/* Header */}
        <div className="sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-4 border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-800 px-4 shadow-sm">
          <button
            type="button"
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="lg:hidden text-gray-700 dark:text-gray-200"
          >
            <span className="sr-only">{isSidebarOpen ? 'Close sidebar' : 'Open sidebar'}</span>
            {isSidebarOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
          <div className="flex flex-1 items-center gap-x-3">
            <Logo size="sm" />
            <span className="font-display font-semibold text-gray-900 dark:text-white">
              Persona Paths
            </span>
          </div>
          <ThemeToggle />
        </div>

        <main className="py-6 px-4 sm:px-6 lg:px-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
}