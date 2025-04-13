import React from 'react';
import Card from '../common/Card';
import SectionTitle from '../common/SectionTitle';
import InputWithLabel from '../common/InputWithLabel';
import NavigationButtons from '../common/NavigationButtons';

interface FleetSizeInputProps {
  fleetSize: number;
  onFleetSizeChange: (size: number) => void;
  onNext: () => void;
}

const FleetSizeInput: React.FC<FleetSizeInputProps> = ({
  fleetSize,
  onFleetSizeChange,
  onNext
}) => {
  const handleFleetSizeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    if (!isNaN(value) && value >= 0) {
      onFleetSizeChange(value);
    }
  };

  return (
    <Card title="Fleet Composition">
      <p className="text-gray-700 mb-8">
        Please provide information about your current fleet size and vehicle types. 
        This will help us calculate potential savings based on your specific fleet composition.
      </p>

      <SectionTitle title="Fleet Size" />
      
      <InputWithLabel
        id="fleet-size"
        label="Total Fleet Size"
        type="number"
        placeholder="0"
        value={fleetSize}
        onChange={handleFleetSizeChange}
        min={1}
        suffix="vehicles"
        className="mb-8"
      />

      <NavigationButtons
        showBackButton={false}
        onNext={onNext}
      />
    </Card>
  );
};

export default FleetSizeInput;
