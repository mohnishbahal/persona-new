import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Logo } from '../Logo';
import { Button } from '../ui/button';
import ThemeToggle from '../ThemeToggle';

const navigation = [
  { name: 'Features', href: '#features' },
  { name: 'Solutions', href: '#solutions' },
  { name: 'Pricing', href: '#pricing' },
  { name: 'Resources', href: '#resources' },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <header className="absolute inset-x-0 top-0 z-50">
        <nav className="flex items-center justify-between p-6 lg:px-8 max-w-7xl mx-auto" aria-label="Global">
          <div className="flex lg:flex-1">
            <Link to="/" className="-m-1.5 p-1.5 flex items-center gap-2">
              <Logo size="sm" />
              <span className="text-xl font-display font-bold text-gray-900 dark:text-white">
                Persona Paths
              </span>
            </Link>
          </div>
          
          {/* Mobile menu button */}
          <div className="flex lg:hidden">
            <ThemeToggle />
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 dark:text-gray-200 ml-4"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Menu className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>

          {/* Desktop navigation */}
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-semibold leading-6 text-gray-900 dark:text-white hover:text-primary dark:hover:text-primary-400 transition-colors"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Desktop CTA buttons */}
          <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:gap-4 items-center">
            <ThemeToggle />
            <Link 
              to="/login"
              className="text-sm font-semibold leading-6 text-gray-900 dark:text-white hover:text-primary dark:hover:text-primary-400"
            >
              Sign in
            </Link>
            <Button asChild className="bg-[#6C47FF] hover:bg-[#5A3CD7] text-white">
              <Link to="/signup">Get Started Free</Link>
            </Button>
          </div>
        </nav>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden">
            <div className="fixed inset-0 z-50">
              <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white dark:bg-gray-900 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                <div className="flex items-center justify-between">
                  <Link to="/" className="-m-1.5 p-1.5 flex items-center gap-2">
                    <Logo size="sm" />
                    <span className="text-xl font-display font-bold text-gray-900 dark:text-white">
                      Persona Paths
                    </span>
                  </Link>
                  <button
                    type="button"
                    className="-m-2.5 rounded-md p-2.5 text-gray-700 dark:text-gray-200"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <span className="sr-only">Close menu</span>
                    <X className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>
                <div className="mt-6 flow-root">
                  <div className="-my-6 divide-y divide-gray-500/10">
                    <div className="space-y-2 py-6">
                      {navigation.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-800"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {item.name}
                        </a>
                      ))}
                    </div>
                    <div className="py-6 space-y-4">
                      <Link
                        to="/login"
                        className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-800"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        Sign in
                      </Link>
                      <Button asChild className="w-full bg-[#6C47FF] hover:bg-[#5A3CD7] text-white">
                        <Link to="/signup" onClick={() => setMobileMenuOpen(false)}>
                          Get Started Free
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Backdrop */}
      {mobileMenuOpen && (
        <div 
          className="fixed inset-0 z-40 bg-black/30 backdrop-blur-sm lg:hidden"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}
    </>
  );
}