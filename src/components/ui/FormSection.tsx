import React, { ReactNode } from 'react';

interface FormSectionProps {
  title: string;
  children: ReactNode;
}

export function FormSection({ title, children }: FormSectionProps) {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-800">{title}</h2>
      {children}
    </div>
  );
}