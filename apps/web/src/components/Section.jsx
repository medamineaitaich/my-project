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
    primary: 'bg-medait-primary text-white',
  };

  const isDark = background === 'dark' || background === 'primary';

  // Make text readable on dark backgrounds without changing every page manually
  const darkReadable = isDark
    ? `
      [&_h1]:text-white
      [&_h2]:text-white
      [&_h3]:text-white
      [&_h4]:text-white
      [&_p]:text-white/80
      [&_li]:text-white/85
      [&_span]:text-white/80
      [&_a]:text-white
      [&_a]:underline
      [&_a:hover]:text-white
    `
    : '';

  return (
    <section
      className={cn(
        'py-16',
        bgClasses[background],
        darkReadable,
        className
      )}
      {...props}
    >
      {children}
    </section>
  );
};

export default Section;
