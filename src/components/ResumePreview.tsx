import React, { forwardRef } from 'react';
import { ResumeData } from '../types/resume';
import { ModernTemplate } from './templates/ModernTemplate';
import { ClassicTemplate } from './templates/ClassicTemplate';
import { MinimalTemplate } from './templates/MinimalTemplate';

interface ResumePreviewProps {
  data: ResumeData;
}

const ResumePreview = forwardRef<HTMLDivElement, ResumePreviewProps>(
  ({ data }, ref) => {
    const templates = {
      modern: ModernTemplate,
      classic: ClassicTemplate,
      minimal: MinimalTemplate,
    };

    const SelectedTemplate = templates[data.template];

    return (
      <div ref={ref} className="bg-white">
        <SelectedTemplate data={data} />
      </div>
    );
  }
);

ResumePreview.displayName = 'ResumePreview';

export default ResumePreview;