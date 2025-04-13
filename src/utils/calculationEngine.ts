// Calculation Engine for Fleet Services ROI Calculator

export interface VehicleType {
  id: string;
  type: string;
  quantity: number;
}

export interface AdditionalFeature {
  id: string;
  name: string;
  description: string;
  annualCost: number;
  selected: boolean;
}

export interface CalculationInputs {
  // Fleet Composition
  fleetSize: number;
  vehicleTypes: VehicleType[];
  
  // Current Costs
  maintenanceCost: number;
  fuelConsumption: number;
  fuelPrice: number;
  annualMileage: number;
  driverRate: number;
  downtimePercentage: number;
  vehicleLifespan: number;
  
  // Service Options
  selectedPackage: string;
  additionalFeatures: AdditionalFeature[];
  
  // Assumptions
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
}

export interface SavingsBreakdown {
  maintenanceSavings: number;
  fuelSavings: number;
  downtimeSavings: number;
  lifespanSavings: number;
  laborSavings: number;
  totalSavings: number;
  serviceCost: number;
  netSavings: number;
}

export interface ROIResults {
  // Summary metrics
  annualSavings: number;
  roi: number;
  paybackPeriodMonths: number;
  
  // Cost comparison
  currentAnnualCosts: number;
  projectedAnnualCosts: number;
  
  // Savings breakdown
  savingsBreakdown: SavingsBreakdown;
  
  // Cumulative savings
  threeYearSavings: number;
  fiveYearSavings: number;
  tenYearSavings: number;
  
  // Detailed breakdown
  detailedBreakdown: {
    maintenance: {
      current: number;
      projected: number;
      savings: number;
    };
    fuel: {
      current: number;
      projected: number;
      savings: number;
    };
    downtime: {
      current: number;
      projected: number;
      savings: number;
    };
    vehicleReplacement: {
      current: number;
      projected: number;
      savings: number;
    };
    labor: {
      current: number;
      projected: number;
      savings: number;
    };
    total: {
      current: number;
      projected: number;
      savings: number;
    };
    servicePackage: {
      current: number;
      projected: number;
      cost: number;
    };
    net: {
      savings: number;
    };
  };
}

// Helper function to get service package cost
const getServicePackageCost = (packageId: string): number => {
  switch (packageId) {
    case 'basic':
      return 750;
    case 'standard':
      return 1250;
    case 'premium':
      return 1950;
    default:
      return 0;
  }
};

// Helper function to calculate total additional features cost
const calculateAdditionalFeaturesCost = (features: AdditionalFeature[]): number => {
  return features
    .filter(feature => feature.selected)
    .reduce((total, feature) => total + feature.annualCost, 0);
};

// Main calculation function
export const calculateROI = (inputs: CalculationInputs): ROIResults => {
  // Calculate current costs
  const totalFleetSize = inputs.fleetSize;
  
  // Annual maintenance costs
  const currentMaintenanceCost = totalFleetSize * inputs.maintenanceCost;
  const maintenanceReductionFactor = inputs.includedBenefits.maintenanceSavings ? (inputs.maintenanceReduction / 100) : 0;
  const projectedMaintenanceCost = currentMaintenanceCost * (1 - maintenanceReductionFactor);
  const maintenanceSavings = currentMaintenanceCost - projectedMaintenanceCost;
  
  // Annual fuel costs
  const gallonsPerVehicle = inputs.annualMileage / inputs.fuelConsumption;
  const currentFuelCost = totalFleetSize * gallonsPerVehicle * inputs.fuelPrice;
  const fuelEfficiencyFactor = inputs.includedBenefits.fuelEfficiency ? (inputs.fuelEfficiencyImprovement / 100) : 0;
  const projectedFuelCost = currentFuelCost * (1 - fuelEfficiencyFactor);
  const fuelSavings = currentFuelCost - projectedFuelCost;
  
  // Downtime costs
  // Assume 8 hours per workday, 260 workdays per year
  const hoursPerYear = 8 * 260;
  const currentDowntimeHours = hoursPerYear * (inputs.downtimePercentage / 100);
  const downtimeCostPerVehicle = currentDowntimeHours * inputs.driverRate;
  const currentDowntimeCost = totalFleetSize * downtimeCostPerVehicle;
  const downtimeReductionFactor = inputs.includedBenefits.downtimeReduction ? (inputs.downtimeReduction / 100) : 0;
  const projectedDowntimeCost = currentDowntimeCost * (1 - downtimeReductionFactor);
  const downtimeSavings = currentDowntimeCost - projectedDowntimeCost;
  
  // Vehicle replacement costs
  // Assume average vehicle cost of $35,000
  const averageVehicleCost = 35000;
  const vehiclesReplacedPerYear = totalFleetSize / inputs.vehicleLifespan;
  const currentReplacementCost = vehiclesReplacedPerYear * averageVehicleCost;
  const lifespanExtensionFactor = inputs.includedBenefits.extendedLifespan ? (inputs.lifespanExtension / 100) : 0;
  const projectedVehiclesReplacedPerYear = totalFleetSize / (inputs.vehicleLifespan * (1 + lifespanExtensionFactor));
  const projectedReplacementCost = projectedVehiclesReplacedPerYear * averageVehicleCost;
  const replacementSavings = currentReplacementCost - projectedReplacementCost;
  
  // Labor optimization
  // Assume 5% labor efficiency improvement for standard and premium packages
  const laborOptimizationFactor = inputs.includedBenefits.laborOptimization ? 
    (inputs.selectedPackage === 'basic' ? 0.02 : 0.05) : 0;
  const annualLaborHours = hoursPerYear * totalFleetSize;
  const currentLaborCost = annualLaborHours * inputs.driverRate;
  const projectedLaborCost = currentLaborCost * (1 - laborOptimizationFactor);
  const laborSavings = currentLaborCost - projectedLaborCost;
  
  // Service package costs
  const packageCostPerVehicle = getServicePackageCost(inputs.selectedPackage);
  const additionalFeaturesCostPerVehicle = calculateAdditionalFeaturesCost(inputs.additionalFeatures);
  const totalServiceCost = totalFleetSize * (packageCostPerVehicle + additionalFeaturesCostPerVehicle);
  
  // Total costs and savings
  const currentTotalCost = currentMaintenanceCost + currentFuelCost + currentDowntimeCost + currentReplacementCost + currentLaborCost;
  const projectedTotalCost = projectedMaintenanceCost + projectedFuelCost + projectedDowntimeCost + projectedReplacementCost + projectedLaborCost;
  const totalSavings = currentTotalCost - projectedTotalCost;
  const netSavings = totalSavings - totalServiceCost;
  
  // ROI calculation
  const roi = (netSavings / totalServiceCost) * 100;
  
  // Payback period in months
  const paybackPeriodMonths = (totalServiceCost / netSavings) * 12;
  
  // Multi-year savings
  const threeYearSavings = netSavings * 3;
  const fiveYearSavings = netSavings * 5;
  const tenYearSavings = netSavings * 10;
  
  // Compile results
  return {
    annualSavings: netSavings,
    roi: roi,
    paybackPeriodMonths: paybackPeriodMonths,
    
    currentAnnualCosts: currentTotalCost,
    projectedAnnualCosts: projectedTotalCost + totalServiceCost,
    
    savingsBreakdown: {
      maintenanceSavings: maintenanceSavings,
      fuelSavings: fuelSavings,
      downtimeSavings: downtimeSavings,
      lifespanSavings: replacementSavings,
      laborSavings: laborSavings,
      totalSavings: totalSavings,
      serviceCost: totalServiceCost,
      netSavings: netSavings
    },
    
    threeYearSavings: threeYearSavings,
    fiveYearSavings: fiveYearSavings,
    tenYearSavings: tenYearSavings,
    
    detailedBreakdown: {
      maintenance: {
        current: currentMaintenanceCost,
        projected: projectedMaintenanceCost,
        savings: maintenanceSavings
      },
      fuel: {
        current: currentFuelCost,
        projected: projectedFuelCost,
        savings: fuelSavings
      },
      downtime: {
        current: currentDowntimeCost,
        projected: projectedDowntimeCost,
        savings: downtimeSavings
      },
      vehicleReplacement: {
        current: currentReplacementCost,
        projected: projectedReplacementCost,
        savings: replacementSavings
      },
      labor: {
        current: currentLaborCost,
        projected: projectedLaborCost,
        savings: laborSavings
      },
      total: {
        current: currentTotalCost,
        projected: projectedTotalCost,
        savings: totalSavings
      },
      servicePackage: {
        current: 0,
        projected: totalServiceCost,
        cost: -totalServiceCost
      },
      net: {
        savings: netSavings
      }
    }
  };
};

// Function to format currency values
export const formatCurrency = (value: number): string => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(value);
};

// Function to format percentage values
export const formatPercentage = (value: number): string => {
  return new Intl.NumberFormat('en-US', {
    style: 'percent',
    minimumFractionDigits: 0,
    maximumFractionDigits: 1
  }).format(value / 100);
};

// Function to format decimal values
export const formatDecimal = (value: number, decimals: number = 1): string => {
  return new Intl.NumberFormat('en-US', {
    minimumFractionDigits: 0,
    maximumFractionDigits: decimals
  }).format(value);
};
