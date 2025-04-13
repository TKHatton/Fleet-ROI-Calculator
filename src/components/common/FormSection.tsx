import React, { ReactNode } from 'react';

interface FormSectionProps {
  children: ReactNode;
}

const FormSection: React.FC<FormSectionProps> = ({ children }) => {
  return (
    <div className="mb-8">
      {children}
    </div>
  );
};

export default FormSection;
