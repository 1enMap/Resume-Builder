import React from 'react';
import { ResumeData } from '../../types/resume';
import { Section } from '../ui/Section';
import { SkillGrid } from '../ui/SkillGrid';

interface TemplateProps {
  data: ResumeData;
}

export function MinimalTemplate({ data }: TemplateProps) {
  return (
    <div className="w-full max-w-[21cm] mx-auto bg-white shadow-lg p-8 min-h-[29.7cm]">
      <header className="mb-8">
        <h1 className="text-3xl font-light text-secondary-900">{data.personalInfo.fullName}</h1>
        <p className="text-lg text-secondary-600 mt-1">{data.personalInfo.title}</p>
        <div className="mt-2 text-sm text-secondary-500 flex gap-2">
          <span>{data.personalInfo.email}</span>
          <span>•</span>
          <span>{data.personalInfo.phone}</span>
          <span>•</span>
          <span>{data.personalInfo.location}</span>
        </div>
      </header>

      <Section title="Professional Summary">
        <p className="text-secondary-700 leading-relaxed">{data.personalInfo.summary}</p>
      </Section>

      <Section title="Experience">
        {data.experience.map((exp, index) => (
          <div key={index} className="mb-6">
            <div className="flex justify-between items-baseline">
              <h3 className="text-lg text-secondary-900">{exp.position}</h3>
              <span className="text-sm text-secondary-500">{exp.startDate} - {exp.endDate}</span>
            </div>
            <p className="text-secondary-600">{exp.company}</p>
            <p className="mt-2 text-secondary-700 leading-relaxed">{exp.description}</p>
          </div>
        ))}
      </Section>

      <Section title="Education">
        {data.education.map((edu, index) => (
          <div key={index} className="mb-6">
            <div className="flex justify-between items-baseline">
              <h3 className="text-lg text-secondary-900">{edu.degree}</h3>
              <span className="text-sm text-secondary-500">{edu.startDate} - {edu.endDate}</span>
            </div>
            <p className="text-secondary-600">{edu.school}</p>
            <p className="mt-2 text-secondary-700 leading-relaxed">{edu.description}</p>
          </div>
        ))}
      </Section>

      <Section title="Skills">
        <SkillGrid skills={data.skills} />
      </Section>
    </div>
  );
}