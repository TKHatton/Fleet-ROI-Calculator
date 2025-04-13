import React from 'react';

interface SliderWithLabelProps {
  id: string;
  label: string;
  min: number;
  max: number;
  value: number;
  onChange: (value: number) => void;
  tooltip?: string;
  showValue?: boolean;
  valueUnit?: string;
  className?: string;
}

const SliderWithLabel: React.FC<SliderWithLabelProps> = ({
  id,
  label,
  min,
  max,
  value,
  onChange,
  tooltip,
  showValue = true,
  valueUnit = '',
  className = '',
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(Number(e.target.value));
  };

  // Generate labels for min, current, and max values
  const generateLabels = () => {
    const labels = [];
    const step = (max - min) / 2;
    
    for (let i = min; i <= max; i += step) {
      labels.push(i);
    }
    
    return labels;
  };

  return (
    <div className={`mb-6 ${className}`}>
      <label htmlFor={id} className="block text-sm font-medium text-gray-700 mb-1">
        {label}
        {tooltip && (
          <span className="ml-1 inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-blue-100 text-blue-800 cursor-help" title={tooltip}>
            ?
          </span>
        )}
      </label>
      <div className="mt-1">
        <input
          type="range"
          id={id}
          name={id}
          min={min}
          max={max}
          value={value}
          onChange={handleChange}
          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
        />
        <div className="flex justify-between text-xs text-gray-600 px-2 mt-1">
          {generateLabels().map((label, index) => (
            <span key={index}>{label}%</span>
          ))}
        </div>
      </div>
      {showValue && (
        <div className="mt-2 text-center">
          <span className="text-lg font-medium text-blue-600">{value}{valueUnit}</span>
        </div>
      )}
    </div>
  );
};

export default SliderWithLabel;
