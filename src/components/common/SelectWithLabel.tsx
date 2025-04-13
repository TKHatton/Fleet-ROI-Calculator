import React from 'react';

interface SelectWithLabelProps {
  id: string;
  label: string;
  options: { value: string; label: string }[];
  value: string;
  onChange: (value: string) => void;
  tooltip?: string;
  placeholder?: string;
  className?: string;
}

const SelectWithLabel: React.FC<SelectWithLabelProps> = ({
  id,
  label,
  options,
  value,
  onChange,
  tooltip,
  placeholder = 'Select an option',
  className = '',
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onChange(e.target.value);
  };

  return (
    <div className={className}>
      <label htmlFor={id} className="block text-sm font-medium text-gray-700 mb-1">
        {label}
        {tooltip && (
          <span className="ml-1 inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-blue-100 text-blue-800 cursor-help" title={tooltip}>
            ?
          </span>
        )}
      </label>
      <select
        id={id}
        name={id}
        className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
        value={value}
        onChange={handleChange}
      >
        <option value="" disabled>
          {placeholder}
        </option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectWithLabel;
