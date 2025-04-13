import React from 'react';

interface SectionTitleProps {
  title: string;
  description?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title, description }) => {
  return (
    <div className="mb-8">
      <h3 className="text-lg font-medium text-gray-900 mb-4">{title}</h3>
      {description && <p className="text-sm text-gray-600 mb-4">{description}</p>}
    </div>
  );
};

export default SectionTitle;
