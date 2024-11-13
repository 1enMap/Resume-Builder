import React from 'react';
import { ResumeData } from '../../types/resume';
import { Section } from '../ui/Section';
import { SkillGrid } from '../ui/SkillGrid';

interface TemplateProps {
  data: ResumeData;
}

export function ModernTemplate({ data }: TemplateProps) {
  return (
    <div className="w-full max-w-[21cm] mx-auto bg-white shadow-lg p-8 min-h-[29.7cm]">
      <header className="border-b-2 border-primary-500 pb-4 mb-6">
        <h1 className="text-4xl font-bold text-secondary-900">{data.personalInfo.fullName}</h1>
        <p className="text-xl text-primary-600 mt-1">{data.personalInfo.title}</p>
        <div className="flex gap-4 mt-2 text-secondary-600">
          <span>{data.personalInfo.email}</span>
          <span>{data.personalInfo.phone}</span>
          <span>{data.personalInfo.location}</span>
        </div>
      </header>

      <Section title="Professional Summary">
        <p className="text-secondary-700">{data.personalInfo.summary}</p>
      </Section>

      <Section title="Experience">
        {data.experience.map((exp, index) => (
          <div key={index} className="mb-4">
            <h3 className="text-lg font-semibold text-primary-700">{exp.position}</h3>
            <div className="flex justify-between text-secondary-600">
              <span>{exp.company}</span>
              <span>{exp.startDate} - {exp.endDate}</span>
            </div>
            <p className="mt-2 text-secondary-700">{exp.description}</p>
          </div>
        ))}
      </Section>

      <Section title="Education">
        {data.education.map((edu, index) => (
          <div key={index} className="mb-4">
            <h3 className="text-lg font-semibold text-primary-700">{edu.degree}</h3>
            <div className="flex justify-between text-secondary-600">
              <span>{edu.school}</span>
              <span>{edu.startDate} - {edu.endDate}</span>
            </div>
            <p className="mt-2 text-secondary-700">{edu.description}</p>
          </div>
        ))}
      </Section>

      <Section title="Skills">
        <SkillGrid skills={data.skills} />
      </Section>
    </div>
  );
}