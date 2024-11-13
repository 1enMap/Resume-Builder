import React from 'react';
import { Plus } from 'lucide-react';
import { Education } from '../../types/resume';
import { FormSection } from '../ui/FormSection';
import { Button } from '../ui/Button';
import { Input } from '../ui/Input';

interface EducationFormProps {
  education: Education[];
  onChange: (education: Education[]) => void;
}

export function EducationForm({ education, onChange }: EducationFormProps) {
  const addEducation = () => {
    onChange([
      ...education,
      { school: '', degree: '', fieldOfStudy: '', startDate: '', endDate: '', description: '' },
    ]);
  };

  return (
    <FormSection title="Education">
      <div className="flex justify-between items-center">
        <Button onClick={addEducation} icon={Plus}>
          Add Education
        </Button>
      </div>
      {education.map((edu, index) => (
        <div key={index} className="p-4 border rounded-lg space-y-4 bg-gray-50">
          <div className="grid grid-cols-2 gap-4">
            <Input
              placeholder="School"
              value={edu.school}
              onChange={(e) => {
                const newEducation = [...education];
                newEducation[index] = { ...edu, school: e.target.value };
                onChange(newEducation);
              }}
            />
            <Input
              placeholder="Degree"
              value={edu.degree}
              onChange={(e) => {
                const newEducation = [...education];
                newEducation[index] = { ...edu, degree: e.target.value };
                onChange(newEducation);
              }}
            />
          </div>
        </div>
      ))}
    </FormSection>
  );
}