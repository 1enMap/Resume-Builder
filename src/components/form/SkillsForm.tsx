import React from 'react';
import { Plus } from 'lucide-react';
import { Skill } from '../../types/resume';
import { FormSection } from '../ui/FormSection';
import { Button } from '../ui/Button';
import { Input } from '../ui/Input';

interface SkillsFormProps {
  skills: Skill[];
  onChange: (skills: Skill[]) => void;
}

export function SkillsForm({ skills, onChange }: SkillsFormProps) {
  const addSkill = () => {
    onChange([...skills, { name: '', level: 'Beginner' }]);
  };

  return (
    <FormSection title="Skills">
      <div className="flex justify-between items-center mb-4">
        <Button onClick={addSkill} icon={Plus}>
          Add Skill
        </Button>
      </div>
      <div className="grid grid-cols-2 gap-4">
        {skills.map((skill, index) => (
          <div key={index} className="flex gap-2">
            <Input
              placeholder="Skill"
              value={skill.name}
              onChange={(e) => {
                const newSkills = [...skills];
                newSkills[index] = { ...skill, name: e.target.value };
                onChange(newSkills);
              }}
              className="flex-1"
            />
            <select
              value={skill.level}
              onChange={(e) => {
                const newSkills = [...skills];
                newSkills[index] = { ...skill, level: e.target.value as Skill['level'] };
                onChange(newSkills);
              }}
              className="p-2 border rounded-lg border-secondary-200 focus:ring-2 focus:ring-primary-400 focus:border-primary-400"
            >
              <option value="Beginner">Beginner</option>
              <option value="Intermediate">Intermediate</option>
              <option value="Advanced">Advanced</option>
              <option value="Expert">Expert</option>
            </select>
          </div>
        ))}
      </div>
    </FormSection>
  );
}