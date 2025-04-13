import React from 'react';

interface InputWithLabelProps {
  id: string;
  label: string;
  type?: string;
  placeholder?: string;
  value?: string | number;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  min?: number;
  max?: number;
  step?: number;
  tooltip?: string;
  prefix?: string;
  suffix?: string;
  className?: string;
}

const InputWithLabel: React.FC<InputWithLabelProps> = ({
  id,
  label,
  type = 'text',
  placeholder = '',
  value,
  onChange,
  min,
  max,
  step,
  tooltip,
  prefix,
  suffix,
  className = '',
}) => {
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
      <div className="mt-1 relative rounded-md shadow-sm">
        {prefix && (
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <span className="text-gray-500 sm:text-sm">{prefix}</span>
          </div>
        )}
        <input
          type={type}
          name={id}
          id={id}
          className={`focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md ${
            prefix ? 'pl-7' : ''
          } ${suffix ? 'pr-12' : ''}`}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          min={min}
          max={max}
          step={step}
        />
        {suffix && (
          <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
            <span className="text-gray-500 sm:text-sm">{suffix}</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default InputWithLabel;
