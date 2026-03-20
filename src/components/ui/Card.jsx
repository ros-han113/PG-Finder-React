import React from 'react';

// Enhanced card component with hover effects - Day 8
export function Card({ children, className = '', hover = false, onClick }) {
  return (
    <div
      className={`bg-white rounded-xl shadow-sm border border-gray-100 ${
        hover ? 'hover:shadow-md transition-shadow duration-200 cursor-pointer' : ''
      } ${className}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
}




