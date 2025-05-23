import React from 'react';

interface CardProps {
  title?: string;
  children: React.ReactNode;
  className?: string;
}

const Card: React.FC<CardProps> = ({ title, children, className = '' }) => {
  return (
    <div className={`bg-white rounded-lg shadow-md p-8 max-w-4xl mx-auto ${className}`}>
      {title && <h2 className="text-2xl font-bold text-gray-900 mb-6">{title}</h2>}
      {children}
    </div>
  );
};

export default Card;
