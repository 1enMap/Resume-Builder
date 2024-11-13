import React, { useState } from 'react';
import { AlertCircle, CheckCircle, XCircle } from 'lucide-react';
import { ResumeData } from '../types/resume';
import { Button } from './ui/Button';

interface ResumeCheckerProps {
  data: ResumeData;
}

interface CheckResult {
  score: number;
  feedback: {
    category: string;
    status: 'success' | 'warning' | 'error';
    message: string;
  }[];
}

export default function ResumeChecker({ data }: ResumeCheckerProps) {
  const [result, setResult] = useState<CheckResult | null>(null);

  const checkResume = () => {
    const feedback = [];
    let totalScore = 0;

    // Check personal info completeness
    if (data.personalInfo.summary.length < 50) {
      feedback.push({
        category: 'Professional Summary',
        status: 'warning',
        message: 'Professional summary should be at least 50 characters long for better impact.',
      });
    } else {
      totalScore += 20;
      feedback.push({
        category: 'Professional Summary',
        status: 'success',
        message: 'Professional summary has good length and detail.',
      });
    }

    // Check experience entries
    if (data.experience.length === 0) {
      feedback.push({
        category: 'Experience',
        status: 'error',
        message: 'Add at least one work experience entry.',
      });
    } else {
      const hasDetailedExp = data.experience.every(exp => exp.description.length > 30);
      if (hasDetailedExp) {
        totalScore += 30;
        feedback.push({
          category: 'Experience',
          status: 'success',
          message: 'Work experience entries are well detailed.',
        });
      } else {
        feedback.push({
          category: 'Experience',
          status: 'warning',
          message: 'Add more details to your work experience descriptions.',
        });
      }
    }

    // Check education
    if (data.education.length === 0) {
      feedback.push({
        category: 'Education',
        status: 'warning',
        message: 'Consider adding education details.',
      });
    } else {
      totalScore += 20;
      feedback.push({
        category: 'Education',
        status: 'success',
        message: 'Education section is complete.',
      });
    }

    // Check skills
    if (data.skills.length < 5) {
      feedback.push({
        category: 'Skills',
        status: 'warning',
        message: 'Add at least 5 relevant skills.',
      });
    } else {
      totalScore += 30;
      feedback.push({
        category: 'Skills',
        status: 'success',
        message: 'Good variety of skills listed.',
      });
    }

    setResult({ score: totalScore, feedback });
  };

  const getStatusIcon = (status: 'success' | 'warning' | 'error') => {
    switch (status) {
      case 'success':
        return <CheckCircle className="w-5 h-5 text-success-500" />;
      case 'warning':
        return <AlertCircle className="w-5 h-5 text-warning-500" />;
      case 'error':
        return <XCircle className="w-5 h-5 text-danger-500" />;
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-secondary-900">Resume Checker</h2>
        <Button onClick={checkResume} variant="primary">
          Analyze Resume
        </Button>
      </div>

      {result && (
        <div className="space-y-6">
          <div className="text-center">
            <div className="text-4xl font-bold text-primary-600 mb-2">{result.score}%</div>
            <p className="text-secondary-600">
              Resume Strength Score
            </p>
          </div>

          <div className="space-y-4">
            {result.feedback.map((item, index) => (
              <div
                key={index}
                className={`p-4 rounded-lg flex items-start gap-3 ${
                  item.status === 'error'
                    ? 'bg-danger-50'
                    : item.status === 'warning'
                    ? 'bg-warning-50'
                    : 'bg-success-50'
                }`}
              >
                {getStatusIcon(item.status)}
                <div>
                  <h3 className="font-semibold text-secondary-900">{item.category}</h3>
                  <p className="text-secondary-600">{item.message}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 p-4 bg-secondary-50 rounded-lg">
            <h3 className="font-semibold text-secondary-900 mb-2">Need More Help?</h3>
            <p className="text-secondary-600">
              For a more detailed analysis, consider using professional ATS checkers like:
            </p>
            <ul className="list-disc list-inside mt-2">
              <li>
                <a href="https://www.jobscan.co" target="_blank" rel="noopener noreferrer" 
                   className="text-primary-600 hover:text-primary-700 hover:underline">
                  JobScan
                </a>
              </li>
              <li>
                <a href="https://www.resumeworded.com" target="_blank" rel="noopener noreferrer"
                   className="text-primary-600 hover:text-primary-700 hover:underline">
                  Resume Worded
                </a>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}