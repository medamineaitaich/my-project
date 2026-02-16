import React from 'react';
import { cn } from '@/lib/utils.js';

/**
 * Button component with primary and secondary variants
 */
const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'md',
  className,
  ...props 
}) => {
  const baseClasses = 'inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2';
  
  const variants = {
    primary: 'bg-medait-primary text-white hover:bg-[#256029] focus:ring-medait-primary',
    secondary: 'border-2 border-medait-primary text-medait-primary hover:bg-medait-primary hover:text-white focus:ring-medait-primary',
    outline: 'border-2 border-medait-dark text-medait-dark hover:bg-medait-dark hover:text-white focus:ring-medait-dark'
  };
  
  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  };

  return (
    <button
      className={cn(
        baseClasses,
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
