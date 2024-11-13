import React from 'react';
import { Plus, Trash2 } from 'lucide-react';
import { Experience } from '../../types/resume';
import { FormSection } from '../ui/FormSection';
import { Button } from '../ui/Button';
import { Input } from '../ui/Input';
import { TextArea } from '../ui/TextArea';

interface ExperienceFormProps {
  experience: Experience[];
  onChange: (experience: Experience[]) => void;
}

export function ExperienceForm({ experience, onChange }: ExperienceFormProps) {
  const addExperience = () => {
    onChange([
      ...experience,
      { company: '', position: '', location: '', startDate: '', endDate: '', description: '' },
    ]);
  };

  const removeExperience = (index: number) => {
    const newExperience = experience.filter((_, i) => i !== index);
    onChange(newExperience);
  };

  return (
    <FormSection title="Experience">
      <div className="flex justify-between items-center mb-4">
        <Button onClick={addExperience} icon={Plus}>
          Add Experience
        </Button>
      </div>
      {experience.map((exp, index) => (
        <div key={index} className="p-6 border rounded-lg space-y-4 bg-gray-50 mb-6">
          <div className="flex justify-between">
            <h3 className="text-lg font-semibold text-gray-700">Experience {index + 1}</h3>
            <Button 
              variant="danger" 
              icon={Trash2}
              onClick={() => removeExperience(index)}
              className="!p-2"
            />
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <Input
              placeholder="Company"
              value={exp.company}
              onChange={(e) => {
                const newExperience = [...experience];
                newExperience[index] = { ...exp, company: e.target.value };
                onChange(newExperience);
              }}
            />
            <Input
              placeholder="Position"
              value={exp.position}
              onChange={(e) => {
                const newExperience = [...experience];
                newExperience[index] = { ...exp, position: e.target.value };
                onChange(newExperience);
              }}
            />
            <Input
              placeholder="Location"
              value={exp.location}
              onChange={(e) => {
                const newExperience = [...experience];
                newExperience[index] = { ...exp, location: e.target.value };
                onChange(newExperience);
              }}
            />
            <div className="grid grid-cols-2 gap-2">
              <Input
                type="date"
                placeholder="Start Date"
                value={exp.startDate}
                onChange={(e) => {
                  const newExperience = [...experience];
                  newExperience[index] = { ...exp, startDate: e.target.value };
                  onChange(newExperience);
                }}
              />
              <Input
                type="date"
                placeholder="End Date"
                value={exp.endDate}
                onChange={(e) => {
                  const newExperience = [...experience];
                  newExperience[index] = { ...exp, endDate: e.target.value };
                  onChange(newExperience);
                }}
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              Description
            </label>
            <p className="text-sm text-gray-500">
              Describe your responsibilities and achievements. Include:
              <ul className="list-disc list-inside mt-1 space-y-1">
                <li>Key responsibilities and daily tasks</li>
                <li>Notable achievements and projects</li>
                <li>Quantifiable results (e.g., "Increased sales by 25%")</li>
                <li>Technologies or tools used</li>
              </ul>
            </p>
            <TextArea
              placeholder="Example: Led a team of 5 developers in redesigning the company's e-commerce platform, resulting in a 40% increase in mobile conversion rates. Implemented CI/CD pipelines reducing deployment time by 60%..."
              value={exp.description}
              onChange={(e) => {
                const newExperience = [...experience];
                newExperience[index] = { ...exp, description: e.target.value };
                onChange(newExperience);
              }}
              className="h-48"
            />
            <div className="flex justify-between text-sm text-gray-500">
              <span>Minimum recommended: 100 characters</span>
              <span>{exp.description.length} characters</span>
            </div>
          </div>
        </div>
      ))}
      
      {experience.length === 0 && (
        <div className="text-center py-8 text-gray-500">
          <p>No experience entries yet. Click "Add Experience" to get started.</p>
        </div>
      )}
    </FormSection>
  );
}