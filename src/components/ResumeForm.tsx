import React from 'react';
import { ResumeData } from '../types/resume';
import { PersonalInfoForm } from './form/PersonalInfoForm';
import { EducationForm } from './form/EducationForm';
import { ExperienceForm } from './form/ExperienceForm';
import { SkillsForm } from './form/SkillsForm';

interface ResumeFormProps {
  data: ResumeData;
  onChange: (data: ResumeData) => void;
}

export default function ResumeForm({ data, onChange }: ResumeFormProps) {
  const handlePersonalInfoChange = (field: string, value: string) => {
    onChange({
      ...data,
      personalInfo: { ...data.personalInfo, [field]: value },
    });
  };

  return (
    <div className="w-full max-w-2xl mx-auto p-6 space-y-8">
      <PersonalInfoForm
        data={data.personalInfo}
        onChange={handlePersonalInfoChange}
      />
      
      <ExperienceForm
        experience={data.experience}
        onChange={(experience) => onChange({ ...data, experience })}
      />

      <EducationForm
        education={data.education}
        onChange={(education) => onChange({ ...data, education })}
      />

      <SkillsForm
        skills={data.skills}
        onChange={(skills) => onChange({ ...data, skills })}
      />
    </div>
  );
}