import React from 'react';
import { cn } from '@/lib/utils.js';

/**
 * Card component with rounded corners and shadow
 */
const Card = ({ children, className, hover = false, ...props }) => {
  return (
    <div
      className={cn(
        'rounded-2xl bg-white p-6 shadow-lg',
        hover && 'transition-all duration-300 hover:shadow-xl hover:-translate-y-1',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export default Card;
