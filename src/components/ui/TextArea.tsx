import React, { TextareaHTMLAttributes } from 'react';

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  className?: string;
}

export function TextArea({ className = '', ...props }: TextAreaProps) {
  return (
    <textarea
      {...props}
      className={`
        w-full p-2 border border-secondary-200 rounded-lg 
        focus:ring-2 focus:ring-primary-400 focus:border-primary-400
        placeholder-secondary-400 text-secondary-900
        transition-colors h-32
        ${className}
      `}
    />
  );
}