import React from 'react';

interface CheckboxWithLabelProps {
  id: string;
  label: string;
  description?: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
  className?: string;
}

const CheckboxWithLabel: React.FC<CheckboxWithLabelProps> = ({
  id,
  label,
  description,
  checked,
  onChange,
  className = '',
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.checked);
  };

  return (
    <div className={`flex items-start ${className}`}>
      <div className="flex items-center h-5">
        <input
          id={id}
          name={id}
          type="checkbox"
          checked={checked}
          onChange={handleChange}
          className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded"
        />
      </div>
      <div className="ml-3 text-sm">
        <label htmlFor={id} className="font-medium text-gray-700">{label}</label>
        {description && <p className="text-gray-500">{description}</p>}
      </div>
    </div>
  );
};

export default CheckboxWithLabel;
