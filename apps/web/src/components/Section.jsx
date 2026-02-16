import React from 'react';
import { cn } from '@/lib/utils.js';

/**
 * Section component with consistent padding and optional background
 */
const Section = ({ children, className, background = 'transparent', ...props }) => {
  const bgClasses = {
    transparent: 'bg-transparent',
    light: 'bg-medait-light',
    white: 'bg-white',
    dark: 'bg-medait-dark text-white',
    primary: 'bg-medait-primary text-white'
  };

  return (
    <section
      className={cn(
        'py-16 sm:py-20 lg:py-24',
        bgClasses[background] || bgClasses.transparent,
        className
      )}
      {...props}
    >
      {children}
    </section>
  );
};

export default Section;
