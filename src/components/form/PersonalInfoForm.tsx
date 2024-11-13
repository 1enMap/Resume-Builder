import React from 'react';
import { ResumeData } from '../../types/resume';
import { FormSection } from '../ui/FormSection';
import { Input } from '../ui/Input';
import { TextArea } from '../ui/TextArea';

interface PersonalInfoFormProps {
  data: ResumeData['personalInfo'];
  onChange: (field: string, value: string) => void;
}

export function PersonalInfoForm({ data, onChange }: PersonalInfoFormProps) {
  return (
    <FormSection title="Personal Information">
      <div className="grid grid-cols-2 gap-4">
        <Input
          placeholder="Full Name"
          value={data.fullName}
          onChange={(e) => onChange('fullName', e.target.value)}
        />
        <Input
          type="email"
          placeholder="Email"
          value={data.email}
          onChange={(e) => onChange('email', e.target.value)}
        />
        <Input
          type="tel"
          placeholder="Phone"
          value={data.phone}
          onChange={(e) => onChange('phone', e.target.value)}
        />
        <Input
          placeholder="Location"
          value={data.location}
          onChange={(e) => onChange('location', e.target.value)}
        />
      </div>
      <Input
        placeholder="Professional Title"
        value={data.title}
        onChange={(e) => onChange('title', e.target.value)}
        className="mt-4"
      />
      <TextArea
        placeholder="Professional Summary"
        value={data.summary}
        onChange={(e) => onChange('summary', e.target.value)}
        className="mt-4"
      />
    </FormSection>
  );
}