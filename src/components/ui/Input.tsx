import React, { InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

export function Input({ className = '', ...props }: InputProps) {
  return (
    <input
      {...props}
      className={`
        p-2 border border-secondary-200 rounded-lg 
        focus:ring-2 focus:ring-primary-400 focus:border-primary-400
        placeholder-secondary-400 text-secondary-900
        transition-colors
        ${className}
      `}
    />
  );
}