import React, { useState } from 'react';
import Card from '../common/Card';
import SectionTitle from '../common/SectionTitle';
import NavigationButtons from '../common/NavigationButtons';
import { ROIResults } from '../../utils/calculationEngine';

interface ComparisonToolProps {
  results: ROIResults;
  savedScenarios: Array<{
    id: string;
    name: string;
    results: ROIResults;
    date: string;
  }>;
  onBack: () => void;
  onNext: () => void;
}

const ComparisonTool: React.FC<ComparisonToolProps> = ({
  results,
  savedScenarios,
  onBack,
  onNext
}) => {
  const [selectedScenarioIds, setSelectedScenarioIds] = useState<string[]>([]);

  const toggleScenarioSelection = (id: string) => {
    if (selectedScenarioIds.includes(id)) {
      setSelectedScenarioIds(selectedScenarioIds.filter(scenarioId => scenarioId !== id));
    } else {
      setSelectedScenarioIds([...selectedScenarioIds, id]);
    }
  };

  const getSelectedScenarios = () => {
    return savedScenarios.filter(scenario => selectedScenarioIds.includes(scenario.id));
  };

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(value);
  };

  const formatPercentage = (value: number) => {
    return `${value.toFixed(1)}%`;
  };

  return (
    <Card title="Scenario Comparison Tool">
      <p className="text-gray-700 mb-8">
        Compare your current calculation with previously saved scenarios to see how different options affect your ROI.
      </p>

      {savedScenarios.length === 0 ? (
        <div className="bg-gray-50 rounded-lg p-6 text-center mb-8">
          <p className="text-gray-600">
            No saved scenarios found. Save your current scenario first to enable comparison.
          </p>
        </div>
      ) : (
        <>
          <div className="mb-8">
            <SectionTitle title="Select Scenarios to Compare" />
            
            <div className="space-y-4">
              {savedScenarios.map(scenario => (
                <div key={scenario.id} className="flex items-start">
                  <div className="flex items-center h-5">
                    <input 
                      id={`scenario-${scenario.id}`} 
                      type="checkbox" 
                      className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded"
                      checked={selectedScenarioIds.includes(scenario.id)}
                      onChange={() => toggleScenarioSelection(scenario.id)}
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label htmlFor={`scenario-${scenario.id}`} className="font-medium text-gray-700">{scenario.name}</label>
                    <p className="text-gray-500">Saved on {scenario.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {selectedScenarioIds.length > 0 && (
            <div className="mb-8">
              <SectionTitle title="Comparison Results" />
              
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Metric</th>
                      <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Current Calculation</th>
                      {getSelectedScenarios().map(scenario => (
                        <th key={scenario.id} scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">{scenario.name}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Annual Savings</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 text-right">{formatCurrency(results.annualSavings)}</td>
                      {getSelectedScenarios().map(scenario => (
                        <td key={scenario.id} className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 text-right">{formatCurrency(scenario.results.annualSavings)}</td>
                      ))}
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">ROI</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 text-right">{formatPercentage(results.roi)}</td>
                      {getSelectedScenarios().map(scenario => (
                        <td key={scenario.id} className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 text-right">{formatPercentage(scenario.results.roi)}</td>
                      ))}
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Payback Period</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 text-right">{results.paybackPeriodMonths.toFixed(1)} months</td>
                      {getSelectedScenarios().map(scenario => (
                        <td key={scenario.id} className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 text-right">{scenario.results.paybackPeriodMonths.toFixed(1)} months</td>
                      ))}
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">5-Year Savings</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 text-right">{formatCurrency(results.fiveYearSavings)}</td>
                      {getSelectedScenarios().map(scenario => (
                        <td key={scenario.id} className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 text-right">{formatCurrency(scenario.results.fiveYearSavings)}</td>
                      ))}
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Maintenance Savings</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 text-right">{formatCurrency(results.savingsBreakdown.maintenanceSavings)}</td>
                      {getSelectedScenarios().map(scenario => (
                        <td key={scenario.id} className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 text-right">{formatCurrency(scenario.results.savingsBreakdown.maintenanceSavings)}</td>
                      ))}
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Fuel Savings</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 text-right">{formatCurrency(results.savingsBreakdown.fuelSavings)}</td>
                      {getSelectedScenarios().map(scenario => (
                        <td key={scenario.id} className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 text-right">{formatCurrency(scenario.results.savingsBreakdown.fuelSavings)}</td>
                      ))}
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Service Package Cost</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 text-right">{formatCurrency(results.savingsBreakdown.serviceCost)}</td>
                      {getSelectedScenarios().map(scenario => (
                        <td key={scenario.id} className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 text-right">{formatCurrency(scenario.results.savingsBreakdown.serviceCost)}</td>
                      ))}
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </>
      )}

      <NavigationButtons
        onBack={onBack}
        onNext={onNext}
        backLabel="Back"
        nextLabel="Continue"
      />
    </Card>
  );
};

export default ComparisonTool;
