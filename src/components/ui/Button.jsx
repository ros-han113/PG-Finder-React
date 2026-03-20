import React from 'react';

// Enhanced button component with variants - Day 8
export function Button({ 
  variant = 'primary', 
  size = 'md', 
  children, 
  className = '', 
  ...props 
}) {
  const baseStyles = 'inline-flex items-center justify-center rounded-lg font-medium transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed';
  
  const variants = {
    primary: 'bg-primary-600 text-white hover:bg-primary-700 active:bg-primary-800 shadow-sm',
    secondary: 'bg-secondary-600 text-white hover:bg-secondary-700 active:bg-secondary-800 shadow-sm',
    outline: 'border-2 border-primary-600 text-primary-600 hover:bg-primary-50 active:bg-primary-100',
    ghost: 'text-gray-700 hover:bg-gray-100 active:bg-gray-200'
  };
  
  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg'
  };
  
  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}




