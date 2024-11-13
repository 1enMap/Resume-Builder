import React, { useRef, useState } from 'react';
import { useReactToPrint } from 'react-to-print';
import { FileText, Printer, CheckCircle2, Trash2 } from 'lucide-react';
import { ResumeData } from './types/resume';
import ResumeForm from './components/ResumeForm';
import ResumePreview from './components/ResumePreview';
import ResumeChecker from './components/ResumeChecker';
import { Toast, ToastType } from './components/ui/Toast';
import { Button } from './components/ui/Button';

const initialData: ResumeData = {
  template: 'modern',
  personalInfo: {
    fullName: '',
    email: '',
    phone: '',
    location: '',
    title: '',
    summary: '',
  },
  education: [],
  experience: [],
  skills: [],
};

export default function App() {
  const [data, setData] = useState<ResumeData>(initialData);
  const [activeTab, setActiveTab] = useState<'edit' | 'preview' | 'check'>('edit');
  const [toast, setToast] = useState<{ message: string; type: ToastType } | null>(null);
  const componentRef = useRef<HTMLDivElement>(null);

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    onBeforeGetContent: () => {
      if (!data.personalInfo.fullName) {
        setToast({
          message: 'Please fill in at least your name before printing',
          type: 'warning',
        });
        return false;
      }
      return Promise.resolve();
    },
    onAfterPrint: () => {
      setToast({
        message: 'Resume exported successfully!',
        type: 'success',
      });
    },
    onPrintError: () => {
      setToast({
        message: 'An error occurred while exporting. Please try again.',
        type: 'error',
      });
    },
  });

  const handleClear = () => {
    if (confirm('Are you sure you want to clear all fields? This action cannot be undone.')) {
      setData(initialData);
      setToast({
        message: 'All fields have been cleared',
        type: 'success',
      });
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center">
              <FileText className="w-8 h-8 text-blue-500" />
              <span className="ml-2 text-xl font-semibold text-gray-900">QuikResumeBuilder</span>
            </div>
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setActiveTab('edit')}
                className={`px-4 py-2 rounded-lg ${
                  activeTab === 'edit'
                    ? 'bg-blue-500 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Edit
              </button>
              <button
                onClick={() => setActiveTab('preview')}
                className={`px-4 py-2 rounded-lg ${
                  activeTab === 'preview'
                    ? 'bg-blue-500 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Preview
              </button>
              <button
                onClick={() => setActiveTab('check')}
                className={`px-4 py-2 rounded-lg ${
                  activeTab === 'check'
                    ? 'bg-blue-500 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4" />
                  Check Resume
                </div>
              </button>
              <Button
                onClick={handlePrint}
                className="flex items-center gap-2"
                variant="primary"
              >
                <Printer className="w-4 h-4" />
                Print / Export PDF
              </Button>
              <Button
                onClick={handleClear}
                className="flex items-center gap-2"
                variant="danger"
              >
                <Trash2 className="w-4 h-4" />
                Clear All
              </Button>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          {activeTab === 'edit' && <ResumeForm data={data} onChange={setData} />}
          {activeTab === 'preview' && (
            <div>
              <ResumePreview ref={componentRef} data={data} />
            </div>
          )}
          {activeTab === 'check' && <ResumeChecker data={data} />}
        </div>
      </main>

      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast(null)}
        />
      )}

      {/* Hidden preview for printing */}
      <div style={{ display: 'none' }}>
        <ResumePreview ref={componentRef} data={data} />
      </div>
    </div>
  );
}