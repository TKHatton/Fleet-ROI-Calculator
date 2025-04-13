import { useState } from 'react';
import './App.css';
import Layout from './components/layout/Layout';
import Card from './components/common/Card';
import FleetSizeInput from './components/input/FleetSizeInput';
import VehicleTypesInput from './components/input/VehicleTypesInput';
import CurrentCostsInput from './components/input/CurrentCostsInput';
import ServiceOptionsInput from './components/input/ServiceOptionsInput';
import AssumptionsInput from './components/input/AssumptionsInput';
import ResultsSummary from './components/results/ResultsSummary';
import DetailedBreakdown from './components/results/DetailedBreakdown';
import ExportOptions from './components/results/ExportOptions';
import { ROIResults } from './utils/calculationEngine';

function App() {
  // Step state to track current step in the calculator
  const [currentStep, setCurrentStep] = useState(1);
  
  // Fleet composition state
  const [fleetSize, setFleetSize] = useState(100);
  const [vehicleTypes, setVehicleTypes] = useState([
    { id: 'vehicle-1', type: 'sedan', quantity: 40 },
    { id: 'vehicle-2', type: 'light-truck', quantity: 35 },
    { id: 'vehicle-3', type: 'heavy-truck', quantity: 25 }
  ]);
  
  // Current costs state
  const [maintenanceCost, setMaintenanceCost] = useState(2500);
  const [fuelConsumption, setFuelConsumption] = useState(18);
  const [fuelPrice, setFuelPrice] = useState(3.50);
  const [annualMileage, setAnnualMileage] = useState(25000);
  const [driverRate, setDriverRate] = useState(25);
  const [downtimePercentage, setDowntimePercentage] = useState(8);
  const [vehicleLifespan, setVehicleLifespan] = useState(7);
  
  // Service options state
  const [selectedPackage, setSelectedPackage] = useState('standard');
  const [additionalFeatures, setAdditionalFeatures] = useState([
    { id: 'fuel-optimization', name: 'Fuel Optimization', description: 'Advanced fuel management and route optimization', annualCost: 250, selected: true },
    { id: 'driver-training', name: 'Driver Training', description: 'Comprehensive driver training program', annualCost: 350, selected: false },
    { id: 'telematics', name: 'Telematics Integration', description: 'Real-time vehicle monitoring and analytics', annualCost: 400, selected: true },
    { id: 'predictive-maintenance', name: 'Predictive Maintenance', description: 'AI-powered maintenance forecasting', annualCost: 300, selected: false }
  ]);
  
  // Assumptions state
  const [maintenanceReduction, setMaintenanceReduction] = useState(20);
  const [fuelEfficiencyImprovement, setFuelEfficiencyImprovement] = useState(12);
  const [downtimeReduction, setDowntimeReduction] = useState(30);
  const [lifespanExtension, setLifespanExtension] = useState(15);
  const [includedBenefits, setIncludedBenefits] = useState({
    maintenanceSavings: true,
    fuelEfficiency: true,
    downtimeReduction: true,
    extendedLifespan: true,
    laborOptimization: true
  });
  
  // Mock results (in a real app, this would be calculated based on inputs)
  const [results] = useState<ROIResults>({
    annualSavings: 325000,
    roi: 215,
    paybackPeriodMonths: 5.6,
    currentAnnualCosts: 1700000,
    projectedAnnualCosts: 1525000,
    savingsBreakdown: {
      maintenanceSavings: 125000,
      fuelSavings: 95000,
      downtimeSavings: 65000,
      lifespanSavings: 40000,
      laborSavings: 0,
      totalSavings: 325000,
      serviceCost: 150000,
      netSavings: 175000
    },
    threeYearSavings: 525000,
    fiveYearSavings: 875000,
    tenYearSavings: 1750000,
    detailedBreakdown: {
      maintenance: {
        current: 250000,
        projected: 125000,
        savings: 125000
      },
      fuel: {
        current: 350000,
        projected: 255000,
        savings: 95000
      },
      downtime: {
        current: 180000,
        projected: 115000,
        savings: 65000
      },
      vehicleReplacement: {
        current: 420000,
        projected: 380000,
        savings: 40000
      },
      labor: {
        current: 500000,
        projected: 500000,
        savings: 0
      },
      total: {
        current: 1700000,
        projected: 1375000,
        savings: 325000
      },
      servicePackage: {
        current: 0,
        projected: 150000,
        cost: -150000
      },
      net: {
        savings: 175000
      }
    }
  });
  
  // Handle feature toggle
  const handleFeatureToggle = (featureId: string, selected: boolean) => {
    setAdditionalFeatures(additionalFeatures.map(feature => 
      feature.id === featureId ? { ...feature, selected } : feature
    ));
  };

  // Handle included benefit change
  const handleIncludedBenefitChange = (benefit: keyof typeof includedBenefits, included: boolean) => {
    setIncludedBenefits({
      ...includedBenefits,
      [benefit]: included
    });
  };

  // Reset assumptions to defaults
  const resetAssumptionsDefaults = () => {
    setMaintenanceReduction(20);
    setFuelEfficiencyImprovement(12);
    setDowntimeReduction(30);
    setLifespanExtension(15);
    setIncludedBenefits({
      maintenanceSavings: true,
      fuelEfficiency: true,
      downtimeReduction: true,
      extendedLifespan: true,
      laborOptimization: true
    });
  };
  
  // Navigation handlers
  const goToNextStep = () => {
    setCurrentStep(currentStep + 1);
  };
  
  const goToPreviousStep = () => {
    setCurrentStep(currentStep - 1);
  };
  
  const goToStep = (step: number) => {
    setCurrentStep(step);
  };
  
  // Render current step
  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <Card title="Welcome to the Fleet Services ROI Calculator">
            <p className="text-gray-700 mb-6">
              This calculator will help you understand the potential return on investment from implementing our fleet services. 
              By providing information about your current fleet operations and selecting service options, you can generate detailed ROI projections.
            </p>
            <p className="text-gray-700 mb-6">
              The calculator will guide you through the following steps:
            </p>
            <ol className="list-decimal list-inside mb-8 space-y-2">
              <li className="text-gray-700">Enter your fleet composition</li>
              <li className="text-gray-700">Provide current operational costs</li>
              <li className="text-gray-700">Select service options</li>
              <li className="text-gray-700">Review and adjust assumptions</li>
              <li className="text-gray-700">View your ROI results</li>
            </ol>
            <div className="flex justify-end">
              <button 
                onClick={goToNextStep}
                className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-md"
              >
                Get Started
              </button>
            </div>
          </Card>
        );
      case 2:
        return (
          <FleetSizeInput 
            fleetSize={fleetSize}
            onFleetSizeChange={setFleetSize}
            onNext={goToNextStep}
          />
        );
      case 3:
        return (
          <VehicleTypesInput 
            vehicleTypes={vehicleTypes}
            onVehicleTypesChange={setVehicleTypes}
            onBack={goToPreviousStep}
            onNext={goToNextStep}
          />
        );
      case 4:
        return (
          <CurrentCostsInput 
            maintenanceCost={maintenanceCost}
            fuelConsumption={fuelConsumption}
            fuelPrice={fuelPrice}
            annualMileage={annualMileage}
            driverRate={driverRate}
            downtimePercentage={downtimePercentage}
            vehicleLifespan={vehicleLifespan}
            onMaintenanceCostChange={setMaintenanceCost}
            onFuelConsumptionChange={setFuelConsumption}
            onFuelPriceChange={setFuelPrice}
            onAnnualMileageChange={setAnnualMileage}
            onDriverRateChange={setDriverRate}
            onDowntimePercentageChange={setDowntimePercentage}
            onVehicleLifespanChange={setVehicleLifespan}
            onBack={goToPreviousStep}
            onNext={goToNextStep}
          />
        );
      case 5:
        return (
          <ServiceOptionsInput 
            selectedPackage={selectedPackage}
            additionalFeatures={additionalFeatures}
            onPackageChange={setSelectedPackage}
            onFeatureToggle={handleFeatureToggle}
            onBack={goToPreviousStep}
            onNext={goToNextStep}
          />
        );
      case 6:
        return (
          <AssumptionsInput 
            maintenanceReduction={maintenanceReduction}
            fuelEfficiencyImprovement={fuelEfficiencyImprovement}
            downtimeReduction={downtimeReduction}
            lifespanExtension={lifespanExtension}
            includedBenefits={includedBenefits}
            onMaintenanceReductionChange={setMaintenanceReduction}
            onFuelEfficiencyImprovementChange={setFuelEfficiencyImprovement}
            onDowntimeReductionChange={setDowntimeReduction}
            onLifespanExtensionChange={setLifespanExtension}
            onIncludedBenefitChange={handleIncludedBenefitChange}
            onResetDefaults={resetAssumptionsDefaults}
            onBack={goToPreviousStep}
            onNext={goToNextStep}
          />
        );
      case 7:
        return (
          <ResultsSummary 
            results={results}
            onBack={goToPreviousStep}
            onNext={goToNextStep}
          />
        );
      case 8:
        return (
          <DetailedBreakdown 
            results={results}
            onBack={goToPreviousStep}
            onStartNew={() => goToStep(9)}
          />
        );
      case 9:
        return (
          <ExportOptions 
            results={results}
            onBack={goToPreviousStep}
            onComplete={() => goToStep(1)}
          />
        );
      default:
        return (
          <Card title="Error">
            <p>Invalid step</p>
          </Card>
        );
    }
  };
  
  return (
    <Layout currentStep={currentStep} totalSteps={9}>
      {renderStep()}
    </Layout>
  );
}

export default App;
