import React from 'react';
// import { formatCurrency } from '../../utils/calculationEngine';
import Card from '../common/Card';
import SectionTitle from '../common/SectionTitle';
import NavigationButtons from '../common/NavigationButtons';
import { ROIResults } from '../../utils/calculationEngine';

interface ExportOptionsProps {
  results: ROIResults;
  onBack: () => void;
  onComplete: () => void;
}

const ExportOptions: React.FC<ExportOptionsProps> = ({
  // results,
  onBack,
  onComplete
}) => {
  // State for form fields
  const [includeSummary, setIncludeSummary] = React.useState(true);
  const [includeDetailed, setIncludeDetailed] = React.useState(true);
  const [includeCharts, setIncludeCharts] = React.useState(true);
  const [includeAssumptions, setIncludeAssumptions] = React.useState(true);
  const [includeInputs, setIncludeInputs] = React.useState(false);
  
  // State for company information
  const [companyName, setCompanyName] = React.useState('');
  const [contactName, setContactName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [phone, setPhone] = React.useState('');
  
  // State for scenario
  const [scenarioName, setScenarioName] = React.useState('');
  const [scenarioNotes, setScenarioNotes] = React.useState('');

  return (
    <Card title="Export Options">
      <p className="text-gray-700 mb-8">
        Choose how you would like to save or share your ROI calculation results.
      </p>

      {/* PDF Report Options */}
      <div className="mb-8">
        <SectionTitle title="PDF Report Options" />
        
        <div className="space-y-4">
          <div className="flex items-start">
            <div className="flex items-center h-5">
              <input 
                id="include-summary" 
                name="include-summary" 
                type="checkbox" 
                className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded"
                checked={includeSummary}
                onChange={(e) => setIncludeSummary(e.target.checked)}
              />
            </div>
            <div className="ml-3 text-sm">
              <label htmlFor="include-summary" className="font-medium text-gray-700">Include Summary Dashboard</label>
              <p className="text-gray-500">High-level overview of ROI and savings</p>
            </div>
          </div>
          <div className="flex items-start">
            <div className="flex items-center h-5">
              <input 
                id="include-detailed" 
                name="include-detailed" 
                type="checkbox" 
                className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded"
                checked={includeDetailed}
                onChange={(e) => setIncludeDetailed(e.target.checked)}
              />
            </div>
            <div className="ml-3 text-sm">
              <label htmlFor="include-detailed" className="font-medium text-gray-700">Include Detailed Breakdown</label>
              <p className="text-gray-500">Comprehensive breakdown of all cost categories</p>
            </div>
          </div>
          <div className="flex items-start">
            <div className="flex items-center h-5">
              <input 
                id="include-charts" 
                name="include-charts" 
                type="checkbox" 
                className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded"
                checked={includeCharts}
                onChange={(e) => setIncludeCharts(e.target.checked)}
              />
            </div>
            <div className="ml-3 text-sm">
              <label htmlFor="include-charts" className="font-medium text-gray-700">Include Charts and Graphs</label>
              <p className="text-gray-500">Visual representations of savings and ROI</p>
            </div>
          </div>
          <div className="flex items-start">
            <div className="flex items-center h-5">
              <input 
                id="include-assumptions" 
                name="include-assumptions" 
                type="checkbox" 
                className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded"
                checked={includeAssumptions}
                onChange={(e) => setIncludeAssumptions(e.target.checked)}
              />
            </div>
            <div className="ml-3 text-sm">
              <label htmlFor="include-assumptions" className="font-medium text-gray-700">Include Calculation Assumptions</label>
              <p className="text-gray-500">List of assumptions used in calculations</p>
            </div>
          </div>
          <div className="flex items-start">
            <div className="flex items-center h-5">
              <input 
                id="include-inputs" 
                name="include-inputs" 
                type="checkbox" 
                className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded"
                checked={includeInputs}
                onChange={(e) => setIncludeInputs(e.target.checked)}
              />
            </div>
            <div className="ml-3 text-sm">
              <label htmlFor="include-inputs" className="font-medium text-gray-700">Include Input Data</label>
              <p className="text-gray-500">All data entered during calculation</p>
            </div>
          </div>
        </div>
      </div>

      {/* Company Information */}
      <div className="mb-8">
        <SectionTitle title="Company Information" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="company-name" className="block text-sm font-medium text-gray-700 mb-1">
              Company Name
            </label>
            <input 
              type="text" 
              name="company-name" 
              id="company-name" 
              className="focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md" 
              placeholder="Your Company Name"
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="contact-name" className="block text-sm font-medium text-gray-700 mb-1">
              Contact Name
            </label>
            <input 
              type="text" 
              name="contact-name" 
              id="contact-name" 
              className="focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md" 
              placeholder="Your Name"
              value={contactName}
              onChange={(e) => setContactName(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email Address
            </label>
            <input 
              type="email" 
              name="email" 
              id="email" 
              className="focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md" 
              placeholder="your.email@company.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
              Phone Number
            </label>
            <input 
              type="tel" 
              name="phone" 
              id="phone" 
              className="focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md" 
              placeholder="(123) 456-7890"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
        </div>
      </div>

      {/* Save Scenario */}
      <div className="mb-8">
        <SectionTitle title="Save Scenario" />
        
        <div className="grid grid-cols-1 gap-4">
          <div>
            <label htmlFor="scenario-name" className="block text-sm font-medium text-gray-700 mb-1">
              Scenario Name
            </label>
            <input 
              type="text" 
              name="scenario-name" 
              id="scenario-name" 
              className="focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md" 
              placeholder="e.g., Current Fleet with Standard Package"
              value={scenarioName}
              onChange={(e) => setScenarioName(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="scenario-notes" className="block text-sm font-medium text-gray-700 mb-1">
              Notes (Optional)
            </label>
            <textarea 
              name="scenario-notes" 
              id="scenario-notes" 
              rows={3} 
              className="focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md" 
              placeholder="Add any notes about this scenario..."
              value={scenarioNotes}
              onChange={(e) => setScenarioNotes(e.target.value)}
            ></textarea>
          </div>
        </div>
      </div>

      {/* Export Buttons */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
        <button className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-white bg-blue-600 hover:bg-blue-700 rounded-md text-sm font-medium">
          <svg className="h-5 w-5 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
          </svg>
          Generate PDF Report
        </button>
        <button className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-white bg-blue-600 hover:bg-blue-700 rounded-md text-sm font-medium">
          <svg className="h-5 w-5 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
            <path d="M3 12v3c0 1.657 3.134 3 7 3s7-1.343 7-3v-3c0 1.657-3.134 3-7 3s-7-1.343-7-3z" />
            <path d="M3 7v3c0 1.657 3.134 3 7 3s7-1.343 7-3V7c0 1.657-3.134 3-7 3S3 8.657 3 7z" />
            <path d="M17 5c0 1.657-3.134 3-7 3S3 6.657 3 5s3.134-3 7-3 7 1.343 7 3z" />
          </svg>
          Export Data (CSV)
        </button>
        <button className="inline-flex items-center justify-center px-4 py-2 border border-gray-300 text-gray-700 bg-white hover:bg-gray-50 rounded-md text-sm font-medium">
          <svg className="h-5 w-5 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
          </svg>
          Email Results
        </button>
        <button className="inline-flex items-center justify-center px-4 py-2 border border-gray-300 text-gray-700 bg-white hover:bg-gray-50 rounded-md text-sm font-medium">
          <svg className="h-5 w-5 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clipRule="evenodd" />
          </svg>
          Save Scenario & Start New
        </button>
      </div>

      <NavigationButtons
        onBack={onBack}
        onNext={onComplete}
        backLabel="Back to Results"
        nextLabel="Complete"
      />
    </Card>
  );
};

export default ExportOptions;
