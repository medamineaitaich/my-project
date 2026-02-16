import React from 'react';
import { cn } from '@/lib/utils.js';

/**
 * Container component for consistent max-width and padding
 */
const Container = ({ children, className, ...props }) => {
  return (
    <div
      className={cn(
        'mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export default Container;
