import React, { ButtonHTMLAttributes } from 'react';
import { LucideIcon } from 'lucide-react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'success' | 'danger';
  icon?: LucideIcon;
}

export function Button({ 
  children, 
  variant = 'primary', 
  icon: Icon,
  className = '', 
  ...props 
}: ButtonProps) {
  const variants = {
    primary: 'bg-primary-600 hover:bg-primary-700 text-white shadow-sm',
    secondary: 'bg-secondary-100 hover:bg-secondary-200 text-secondary-700 shadow-sm',
    success: 'bg-success-600 hover:bg-success-700 text-white shadow-sm',
    danger: 'bg-danger-600 hover:bg-danger-700 text-white shadow-sm',
  };

  return (
    <button
      {...props}
      className={`
        flex items-center gap-2 px-4 py-2 rounded-lg transition-colors
        ${variants[variant]}
        ${className}
      `}
    >
      {Icon && <Icon className="w-4 h-4" />}
      {children}
    </button>
  );
}