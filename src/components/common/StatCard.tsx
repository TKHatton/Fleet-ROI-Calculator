import React from 'react';

interface StatCardProps {
  title: string;
  value: string | number;
  description?: string;
  className?: string;
  valueClassName?: string;
}

const StatCard: React.FC<StatCardProps> = ({
  title,
  value,
  description,
  className = '',
  valueClassName = 'text-3xl font-bold text-blue-600',
}) => {
  return (
    <div className={`bg-blue-50 rounded-lg p-6 text-center ${className}`}>
      <h3 className="text-lg font-medium text-gray-900 mb-2">{title}</h3>
      <p className={valueClassName}>{value}</p>
      {description && <p className="text-sm text-gray-600 mt-2">{description}</p>}
    </div>
  );
};

export default StatCard;
