import React from 'react';
import { Skill } from '../../types/resume';

interface SkillGridProps {
  skills: Skill[];
}

export function SkillGrid({ skills }: SkillGridProps) {
  return (
    <div className="grid grid-cols-2 gap-4">
      {skills.map((skill, index) => (
        <div key={index} className="flex justify-between">
          <span className="text-gray-800">{skill.name}</span>
          <span className="text-blue-600">{skill.level}</span>
        </div>
      ))}
    </div>
  );
}