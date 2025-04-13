import React from 'react';

interface RadioGroupWithLabelProps {
  id: string;
  label: string;
  options: { value: string; label: string }[];
  selectedValue: string;
  onChange: (value: string) => void;
  className?: string;
}

const RadioGroupWithLabel: React.FC<RadioGroupWithLabelProps> = ({
  id,
  label,
  options,
  selectedValue,
  onChange,
  className = '',
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  return (
    <div className={className}>
      <label className="block text-sm font-medium text-gray-700 mb-2">{label}</label>
      <div className="space-y-2">
        {options.map((option) => (
          <div key={option.value} className="flex items-center">
            <input
              id={`${id}-${option.value}`}
              name={id}
              type="radio"
              value={option.value}
              checked={selectedValue === option.value}
              onChange={handleChange}
              className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300"
            />
            <label htmlFor={`${id}-${option.value}`} className="ml-3 text-sm text-gray-700">
              {option.label}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RadioGroupWithLabel;
