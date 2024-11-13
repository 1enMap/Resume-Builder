import React, { useEffect } from 'react';
import { AlertCircle, CheckCircle, X } from 'lucide-react';

export type ToastType = 'success' | 'error' | 'warning';

interface ToastProps {
  message: string;
  type: ToastType;
  onClose: () => void;
}

export function Toast({ message, type, onClose }: ToastProps) {
  useEffect(() => {
    const timer = setTimeout(onClose, 5000);
    return () => clearTimeout(timer);
  }, [onClose]);

  const icons = {
    success: <CheckCircle className="w-5 h-5 text-success-500" />,
    error: <AlertCircle className="w-5 h-5 text-danger-500" />,
    warning: <AlertCircle className="w-5 h-5 text-warning-500" />,
  };

  const backgrounds = {
    success: 'bg-success-50 border-success-200',
    error: 'bg-danger-50 border-danger-200',
    warning: 'bg-warning-50 border-warning-200',
  };

  return (
    <div className={`fixed bottom-4 right-4 p-4 rounded-lg border shadow-lg flex items-center gap-3 ${backgrounds[type]}`}>
      {icons[type]}
      <p className="text-secondary-800">{message}</p>
      <button onClick={onClose} className="p-1 hover:bg-secondary-200 rounded-full">
        <X className="w-4 h-4 text-secondary-600" />
      </button>
    </div>
  );
}