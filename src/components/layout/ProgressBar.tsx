import React from 'react';

interface ProgressBarProps {
  currentStep: number;
  totalSteps: number;
  stepLabels: string[];
}

const ProgressBar: React.FC<ProgressBarProps> = ({ 
  currentStep, 
  totalSteps, 
  stepLabels 
}) => {
  // Calculate progress percentage
  const progressPercentage = (currentStep / totalSteps) * 100;
  
  return (
    <div className="bg-white shadow-sm border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
        <div className="w-full bg-gray-200 rounded-full h-2.5">
          <div 
            className="bg-blue-600 h-2.5 rounded-full" 
            style={{ width: `${progressPercentage}%` }}
          ></div>
        </div>
        <div className="flex justify-between mt-2 text-sm text-gray-600">
          {stepLabels.map((label, index) => (
            <div 
              key={index} 
              className={index === currentStep - 1 ? "font-medium" : ""}
            >
              {label}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
