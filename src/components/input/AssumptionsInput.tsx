import React from 'react';
import Card from '../common/Card';
import SectionTitle from '../common/SectionTitle';
import SliderWithLabel from '../common/SliderWithLabel';
import CheckboxWithLabel from '../common/CheckboxWithLabel';
import FormSection from '../common/FormSection';
import NavigationButtons from '../common/NavigationButtons';

interface AssumptionsInputProps {
  maintenanceReduction: number;
  fuelEfficiencyImprovement: number;
  downtimeReduction: number;
  lifespanExtension: number;
  includedBenefits: {
    maintenanceSavings: boolean;
    fuelEfficiency: boolean;
    downtimeReduction: boolean;
    extendedLifespan: boolean;
    laborOptimization: boolean;
  };
  onMaintenanceReductionChange: (value: number) => void;
  onFuelEfficiencyImprovementChange: (value: number) => void;
  onDowntimeReductionChange: (value: number) => void;
  onLifespanExtensionChange: (value: number) => void;
  onIncludedBenefitChange: (benefit: keyof AssumptionsInputProps['includedBenefits'], included: boolean) => void;
  onResetDefaults: () => void;
  onBack: () => void;
  onNext: () => void;
}

const AssumptionsInput: React.FC<AssumptionsInputProps> = ({
  maintenanceReduction,
  fuelEfficiencyImprovement,
  downtimeReduction,
  lifespanExtension,
  includedBenefits,
  onMaintenanceReductionChange,
  onFuelEfficiencyImprovementChange,
  onDowntimeReductionChange,
  onLifespanExtensionChange,
  onIncludedBenefitChange,
  onResetDefaults,
  onBack,
  onNext
}) => {
  return (
    <Card title="Adjust Calculation Assumptions">
      <p className="text-gray-700 mb-8">
        Fine-tune the assumptions used in our ROI calculations. These values are pre-filled with industry averages, 
        but you can adjust them to better match your specific situation.
      </p>

      {/* Maintenance Savings Assumptions */}
      <FormSection>
        <SectionTitle title="Maintenance Savings" />
        <SliderWithLabel
          id="maintenance-reduction"
          label="Maintenance Cost Reduction"
          min={0}
          max={50}
          value={maintenanceReduction}
          onChange={onMaintenanceReductionChange}
          tooltip="Estimated percentage reduction in maintenance costs with our services"
          valueUnit="%"
        />
      </FormSection>

      {/* Fuel Efficiency Assumptions */}
      <FormSection>
        <SectionTitle title="Fuel Efficiency" />
        <SliderWithLabel
          id="fuel-efficiency-improvement"
          label="Fuel Efficiency Improvement"
          min={0}
          max={30}
          value={fuelEfficiencyImprovement}
          onChange={onFuelEfficiencyImprovementChange}
          tooltip="Estimated percentage improvement in fuel efficiency with our services"
          valueUnit="%"
        />
      </FormSection>

      {/* Downtime Reduction Assumptions */}
      <FormSection>
        <SectionTitle title="Downtime Reduction" />
        <SliderWithLabel
          id="downtime-reduction"
          label="Vehicle Downtime Reduction"
          min={0}
          max={60}
          value={downtimeReduction}
          onChange={onDowntimeReductionChange}
          tooltip="Estimated percentage reduction in vehicle downtime with our services"
          valueUnit="%"
        />
      </FormSection>

      {/* Vehicle Lifespan Assumptions */}
      <FormSection>
        <SectionTitle title="Vehicle Lifespan" />
        <SliderWithLabel
          id="lifespan-extension"
          label="Vehicle Lifespan Extension"
          min={0}
          max={40}
          value={lifespanExtension}
          onChange={onLifespanExtensionChange}
          tooltip="Estimated percentage increase in vehicle lifespan with our services"
          valueUnit="%"
        />
      </FormSection>

      {/* Benefit Toggles */}
      <FormSection>
        <SectionTitle 
          title="Include Benefits" 
          description="Select which benefits to include in your ROI calculation."
        />
        
        <div className="space-y-3">
          <CheckboxWithLabel
            id="benefit-maintenance"
            label="Maintenance Cost Savings"
            checked={includedBenefits.maintenanceSavings}
            onChange={(checked) => onIncludedBenefitChange('maintenanceSavings', checked)}
          />
          <CheckboxWithLabel
            id="benefit-fuel"
            label="Fuel Efficiency Improvements"
            checked={includedBenefits.fuelEfficiency}
            onChange={(checked) => onIncludedBenefitChange('fuelEfficiency', checked)}
          />
          <CheckboxWithLabel
            id="benefit-downtime"
            label="Downtime Reduction Value"
            checked={includedBenefits.downtimeReduction}
            onChange={(checked) => onIncludedBenefitChange('downtimeReduction', checked)}
          />
          <CheckboxWithLabel
            id="benefit-lifespan"
            label="Extended Vehicle Lifespan"
            checked={includedBenefits.extendedLifespan}
            onChange={(checked) => onIncludedBenefitChange('extendedLifespan', checked)}
          />
          <CheckboxWithLabel
            id="benefit-labor"
            label="Labor Optimization"
            checked={includedBenefits.laborOptimization}
            onChange={(checked) => onIncludedBenefitChange('laborOptimization', checked)}
          />
        </div>
      </FormSection>

      {/* Reset Button */}
      <div className="mb-8 flex justify-center">
        <button 
          onClick={onResetDefaults}
          className="inline-flex items-center px-4 py-2 border border-gray-300 text-gray-700 bg-white hover:bg-gray-50 rounded-md text-sm font-medium"
        >
          <svg className="h-5 w-5 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clipRule="evenodd" />
          </svg>
          Reset to Default Values
        </button>
      </div>

      <NavigationButtons
        onBack={onBack}
        onNext={onNext}
        nextLabel="Calculate ROI"
      />
    </Card>
  );
};

export default AssumptionsInput;
