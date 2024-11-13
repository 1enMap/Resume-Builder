import React from 'react';
import { ResumeData } from '../../types/resume';
import { Section } from '../ui/Section';
import { SkillGrid } from '../ui/SkillGrid';

interface TemplateProps {
  data: ResumeData;
}

export function ClassicTemplate({ data }: TemplateProps) {
  return (
    <div className="w-full max-w-[21cm] mx-auto bg-white shadow-lg p-8 min-h-[29.7cm]">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-serif text-secondary-900">{data.personalInfo.fullName}</h1>
        <p className="text-xl text-secondary-700 mt-2">{data.personalInfo.title}</p>
        <div className="mt-3 text-secondary-600">
          <p>{data.personalInfo.email} | {data.personalInfo.phone}</p>
          <p>{data.personalInfo.location}</p>
        </div>
      </header>

      <Section title="Professional Summary">
        <p className="text-secondary-700">{data.personalInfo.summary}</p>
      </Section>

      <Section title="Experience">
        {data.experience.map((exp, index) => (
          <div key={index} className="mb-6">
            <h3 className="text-lg font-serif text-secondary-900">{exp.position}</h3>
            <div className="flex justify-between text-secondary-600 italic">
              <span>{exp.company}</span>
              <span>{exp.startDate} - {exp.endDate}</span>
            </div>
            <p className="mt-2 text-secondary-700">{exp.description}</p>
          </div>
        ))}
      </Section>

      <Section title="Education">
        {data.education.map((edu, index) => (
          <div key={index} className="mb-6">
            <h3 className="text-lg font-serif text-secondary-900">{edu.degree}</h3>
            <div className="flex justify-between text-secondary-600 italic">
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