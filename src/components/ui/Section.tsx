import React, { ReactNode } from 'react';

interface SectionProps {
  title: string;
  children: ReactNode;
}

export function Section({ title, children }: SectionProps) {
  return (
    <section className="mb-6">
      <h2 className="text-2xl font-semibold text-gray-800 mb-3">{title}</h2>
      {children}
    </section>
  );
}