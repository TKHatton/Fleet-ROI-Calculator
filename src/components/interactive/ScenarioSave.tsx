import React, { useState } from 'react';
import Card from '../common/Card';
import SectionTitle from '../common/SectionTitle';
import NavigationButtons from '../common/NavigationButtons';
import { ROIResults } from '../../utils/calculationEngine';

interface ScenarioSaveProps {
  results: ROIResults;
  onSave: (scenarioName: string, notes: string) => void;
  onBack: () => void;
  onNext: () => void;
}

const ScenarioSave: React.FC<ScenarioSaveProps> = ({
  results,
  onSave,
  onBack,
  onNext
}) => {
  const [scenarioName, setScenarioName] = useState('');
  const [notes, setNotes] = useState('');
  const [saveSuccess, setSaveSuccess] = useState(false);

  const handleSave = () => {
    if (scenarioName.trim()) {
      onSave(scenarioName, notes);
      setSaveSuccess(true);
      setTimeout(() => setSaveSuccess(false), 3000);
    }
  };

  return (
    <Card title="Save Scenario">
      <p className="text-gray-700 mb-8">
        Save your current calculation scenario for future reference or comparison.
      </p>

      <div className="mb-8">
        <SectionTitle title="Scenario Information" />
        
        <div className="space-y-4">
          <div>
            <label htmlFor="scenario-name" className="block text-sm font-medium text-gray-700 mb-1">
              Scenario Name *
            </label>
            <input 
              type="text" 
              id="scenario-name" 
              className="focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md" 
              placeholder="e.g., Current Fleet with Premium Package"
              value={scenarioName}
              onChange={(e) => setScenarioName(e.target.value)}
            />
          </div>
          
          <div>
            <label htmlFor="scenario-notes" className="block text-sm font-medium text-gray-700 mb-1">
              Notes (Optional)
            </label>
            <textarea 
              id="scenario-notes" 
              rows={4} 
              className="focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md" 
              placeholder="Add any notes about this scenario..."
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
            ></textarea>
          </div>
        </div>
      </div>

      <div className="mb-8">
        <SectionTitle title="Scenario Summary" />
        
        <div className="bg-gray-50 rounded-lg p-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-sm font-medium text-gray-500">Annual Savings:</p>
              <p className="text-lg font-medium text-gray-900">${results.annualSavings.toLocaleString()}</p>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-500">ROI:</p>
              <p className="text-lg font-medium text-gray-900">{results.roi.toFixed(1)}%</p>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-500">Payback Period:</p>
              <p className="text-lg font-medium text-gray-900">{results.paybackPeriodMonths.toFixed(1)} months</p>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-500">5-Year Savings:</p>
              <p className="text-lg font-medium text-gray-900">${results.fiveYearSavings.toLocaleString()}</p>
            </div>
          </div>
        </div>
      </div>

      {saveSuccess && (
        <div className="mb-8 bg-green-50 border border-green-200 rounded-md p-4">
          <div className="flex">
            <div className="flex-shrink-0">
              <svg className="h-5 w-5 text-green-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="ml-3">
              <p className="text-sm font-medium text-green-800">
                Scenario saved successfully!
              </p>
            </div>
          </div>
        </div>
      )}

      <div className="flex justify-center space-x-4">
        <button 
          onClick={handleSave}
          disabled={!scenarioName.trim()}
          className={`inline-flex items-center px-4 py-2 border border-transparent text-white rounded-md text-sm font-medium ${
            scenarioName.trim() ? 'bg-blue-600 hover:bg-blue-700' : 'bg-blue-300 cursor-not-allowed'
          }`}
        >
          <svg className="h-5 w-5 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
          Save Scenario
        </button>
      </div>

      <NavigationButtons
        onBack={onBack}
        onNext={onNext}
        backLabel="Back to Results"
        nextLabel="Continue to Export Options"
      />
    </Card>
  );
};

export default ScenarioSave;
