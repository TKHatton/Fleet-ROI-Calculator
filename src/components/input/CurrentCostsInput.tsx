import React from 'react';
import Card from '../common/Card';
import SectionTitle from '../common/SectionTitle';
import InputWithLabel from '../common/InputWithLabel';
// import TooltipIcon from '../common/TooltipIcon';
import FormSection from '../common/FormSection';
import NavigationButtons from '../common/NavigationButtons';

interface CurrentCostsInputProps {
  maintenanceCost: number;
  fuelConsumption: number;
  fuelPrice: number;
  annualMileage: number;
  driverRate: number;
  downtimePercentage: number;
  vehicleLifespan: number;
  onMaintenanceCostChange: (cost: number) => void;
  onFuelConsumptionChange: (consumption: number) => void;
  onFuelPriceChange: (price: number) => void;
  onAnnualMileageChange: (mileage: number) => void;
  onDriverRateChange: (rate: number) => void;
  onDowntimePercentageChange: (percentage: number) => void;
  onVehicleLifespanChange: (years: number) => void;
  onBack: () => void;
  onNext: () => void;
}

const CurrentCostsInput: React.FC<CurrentCostsInputProps> = ({
  maintenanceCost,
  fuelConsumption,
  fuelPrice,
  annualMileage,
  driverRate,
  downtimePercentage,
  vehicleLifespan,
  onMaintenanceCostChange,
  onFuelConsumptionChange,
  onFuelPriceChange,
  onAnnualMileageChange,
  onDriverRateChange,
  onDowntimePercentageChange,
  onVehicleLifespanChange,
  onBack,
  onNext
}) => {
  const handleNumberChange = (setter: (value: number) => void) => (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(e.target.value);
    if (!isNaN(value) && value >= 0) {
      setter(value);
    }
  };

  return (
    <Card title="Current Fleet Costs">
      <p className="text-gray-700 mb-8">
        Please provide information about your current fleet operational costs. 
        This will help us calculate potential savings based on your specific situation.
      </p>

      {/* Maintenance Costs */}
      <FormSection>
        <SectionTitle title="Maintenance Costs" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <InputWithLabel
            id="maintenance-cost"
            label="Annual Maintenance Cost Per Vehicle"
            type="number"
            placeholder="0.00"
            value={maintenanceCost}
            onChange={handleNumberChange(onMaintenanceCostChange)}
            prefix="$"
            suffix="/year"
            tooltip="Include regular maintenance, repairs, and parts replacement"
          />
        </div>
      </FormSection>

      {/* Fuel Costs */}
      <FormSection>
        <SectionTitle title="Fuel Costs" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <InputWithLabel
            id="fuel-consumption"
            label="Average Fuel Consumption"
            type="number"
            placeholder="0"
            value={fuelConsumption}
            onChange={handleNumberChange(onFuelConsumptionChange)}
            suffix="MPG"
            tooltip="Average miles per gallon across your fleet"
          />
          <InputWithLabel
            id="fuel-price"
            label="Average Fuel Price"
            type="number"
            placeholder="0.00"
            step={0.01}
            value={fuelPrice}
            onChange={handleNumberChange(onFuelPriceChange)}
            prefix="$"
            suffix="/gal"
          />
          <InputWithLabel
            id="annual-mileage"
            label="Average Annual Mileage Per Vehicle"
            type="number"
            placeholder="0"
            value={annualMileage}
            onChange={handleNumberChange(onAnnualMileageChange)}
            suffix="miles/year"
          />
        </div>
      </FormSection>

      {/* Labor Costs */}
      <FormSection>
        <SectionTitle title="Labor Costs" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <InputWithLabel
            id="driver-rate"
            label="Driver/Operator Hourly Rate"
            type="number"
            placeholder="0.00"
            step={0.01}
            value={driverRate}
            onChange={handleNumberChange(onDriverRateChange)}
            prefix="$"
            suffix="/hour"
          />
        </div>
      </FormSection>

      {/* Downtime and Lifespan */}
      <FormSection>
        <SectionTitle title="Downtime and Lifespan" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <InputWithLabel
            id="downtime-percentage"
            label="Current Vehicle Downtime"
            type="number"
            placeholder="0"
            min={0}
            max={100}
            value={downtimePercentage}
            onChange={handleNumberChange(onDowntimePercentageChange)}
            suffix="%"
            tooltip="Percentage of time vehicles are unavailable due to maintenance or repairs"
          />
          <InputWithLabel
            id="vehicle-lifespan"
            label="Average Vehicle Lifespan"
            type="number"
            placeholder="0"
            value={vehicleLifespan}
            onChange={handleNumberChange(onVehicleLifespanChange)}
            suffix="years"
          />
        </div>
      </FormSection>

      <NavigationButtons
        onBack={onBack}
        onNext={onNext}
      />
    </Card>
  );
};

export default CurrentCostsInput;
