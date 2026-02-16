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
    dark: 'bg-medait-dark',
    primary: 'bg-medait-primary',
  };

  const isDark = background === 'dark' || background === 'primary';

  // Improve readability automatically on dark/primary backgrounds
  const darkReadable = isDark
    ? `
      text-white
      [&_h1]:text-white
      [&_h2]:text-white
      [&_h3]:text-white
      [&_h4]:text-white
      [&_p]:text-white/80
      [&_li]:text-white/85
      [&_span]:text-white/80
      [&_a]:text-white
      [&_a:hover]:text-white
    `
    : '';

  return (
    <section
      className={cn('py-16', bgClasses[background], darkReadable, className)}
      {...props}
    >
      {children}
    </section>
  );
};

export default Section;
