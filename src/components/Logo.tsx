import React from 'react';
import { cn } from '@/lib/utils';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'default' | 'white';
}

export function Logo({ className, size = 'md', variant = 'default' }: LogoProps) {
  const sizes = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16'
  };

  const colors = {
    default: 'fill-[#6C47FF]',
    white: 'fill-white'
  };

  return (
    <div className={cn('relative', sizes[size], className)}>
      <svg
        viewBox="0 0 1024 1024"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={cn('w-full h-full', colors[variant])}
      >
        {/* House/Path Icon */}
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M512 64L128 320V960H896V320L512 64ZM448 576V832H320V576H448ZM704 576V832H576V576H704Z"
        />
        {/* Multiple Paths Overlay */}
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M512 192L256 384V448L512 256L768 448V384L512 192Z"
          fillOpacity="0.3"
        />
      </svg>
    </div>
  );
}