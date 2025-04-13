import React, { useState } from 'react';
import Card from '../common/Card';
import SectionTitle from '../common/SectionTitle';
import NavigationButtons from '../common/NavigationButtons';
import { ROIResults } from '../../utils/calculationEngine';

interface PDFReportGeneratorProps {
  results: ROIResults;
  onGenerate: (options: PDFOptions) => void;
  onBack: () => void;
  onNext: () => void;
}

interface PDFOptions {
  includeSummary: boolean;
  includeDetailedBreakdown: boolean;
  includeCharts: boolean;
  includeAssumptions: boolean;
  includeInputData: boolean;
  companyInfo: {
    name: string;
    contactName: string;
    email: string;
    phone: string;
  };
}

const PDFReportGenerator: React.FC<PDFReportGeneratorProps> = ({
  // results,
  onGenerate,
  onBack,
  onNext
}) => {
  const [options, setOptions] = useState<PDFOptions>({
    includeSummary: true,
    includeDetailedBreakdown: true,
    includeCharts: true,
    includeAssumptions: true,
    includeInputData: false,
    companyInfo: {
      name: '',
      contactName: '',
      email: '',
      phone: ''
    }
  });

  const [generating, setGenerating] = useState(false);
  const [generated, setGenerated] = useState(false);

  const handleOptionChange = (option: keyof Omit<PDFOptions, 'companyInfo'>, value: boolean) => {
    setOptions(prev => ({
      ...prev,
      [option]: value
    }));
  };

  const handleCompanyInfoChange = (field: keyof PDFOptions['companyInfo'], value: string) => {
    setOptions(prev => ({
      ...prev,
      companyInfo: {
        ...prev.companyInfo,
        [field]: value
      }
    }));
  };

  const handleGenerate = () => {
    setGenerating(true);
    
    // Simulate PDF generation
    setTimeout(() => {
      onGenerate(options);
      setGenerating(false);
      setGenerated(true);
      
      // Reset generated state after 3 seconds
      setTimeout(() => setGenerated(false), 3000);
    }, 1500);
  };

  return (
    <Card title="Generate PDF Report">
      <p className="text-gray-700 mb-8">
        Create a professional PDF report of your ROI calculation results that you can download, print, or share.
      </p>

      <div className="mb-8">
        <SectionTitle title="Report Content" />
        
        <div className="space-y-4">
          <div className="flex items-start">
            <div className="flex items-center h-5">
              <input 
                id="include-summary" 
                type="checkbox" 
                className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded"
                checked={options.includeSummary}
                onChange={(e) => handleOptionChange('includeSummary', e.target.checked)}
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
                type="checkbox" 
                className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded"
                checked={options.includeDetailedBreakdown}
                onChange={(e) => handleOptionChange('includeDetailedBreakdown', e.target.checked)}
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
                type="checkbox" 
                className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded"
                checked={options.includeCharts}
                onChange={(e) => handleOptionChange('includeCharts', e.target.checked)}
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
                type="checkbox" 
                className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded"
                checked={options.includeAssumptions}
                onChange={(e) => handleOptionChange('includeAssumptions', e.target.checked)}
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
                id="include-input-data" 
                type="checkbox" 
                className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded"
                checked={options.includeInputData}
                onChange={(e) => handleOptionChange('includeInputData', e.target.checked)}
              />
            </div>
            <div className="ml-3 text-sm">
              <label htmlFor="include-input-data" className="font-medium text-gray-700">Include Input Data</label>
              <p className="text-gray-500">All data entered during calculation</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-8">
        <SectionTitle title="Company Information (Optional)" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="company-name" className="block text-sm font-medium text-gray-700 mb-1">
              Company Name
            </label>
            <input 
              type="text" 
              id="company-name" 
              className="focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md" 
              placeholder="Your Company Name"
              value={options.companyInfo.name}
              onChange={(e) => handleCompanyInfoChange('name', e.target.value)}
            />
          </div>
          
          <div>
            <label htmlFor="contact-name" className="block text-sm font-medium text-gray-700 mb-1">
              Contact Name
            </label>
            <input 
              type="text" 
              id="contact-name" 
              className="focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md" 
              placeholder="Your Name"
              value={options.companyInfo.contactName}
              onChange={(e) => handleCompanyInfoChange('contactName', e.target.value)}
            />
          </div>
          
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email Address
            </label>
            <input 
              type="email" 
              id="email" 
              className="focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md" 
              placeholder="your.email@company.com"
              value={options.companyInfo.email}
              onChange={(e) => handleCompanyInfoChange('email', e.target.value)}
            />
          </div>
          
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
              Phone Number
            </label>
            <input 
              type="tel" 
              id="phone" 
              className="focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md" 
              placeholder="(123) 456-7890"
              value={options.companyInfo.phone}
              onChange={(e) => handleCompanyInfoChange('phone', e.target.value)}
            />
          </div>
        </div>
      </div>

      {generated && (
        <div className="mb-8 bg-green-50 border border-green-200 rounded-md p-4">
          <div className="flex">
            <div className="flex-shrink-0">
              <svg className="h-5 w-5 text-green-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="ml-3">
              <p className="text-sm font-medium text-green-800">
                PDF report generated successfully! Click the download button below to save it.
              </p>
            </div>
          </div>
        </div>
      )}

      <div className="flex justify-center space-x-4 mb-8">
        <button 
          onClick={handleGenerate}
          disabled={generating}
          className={`inline-flex items-center px-4 py-2 border border-transparent text-white rounded-md text-sm font-medium ${
            generating ? 'bg-blue-300 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'
          }`}
        >
          {generating ? (
            <>
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Generating...
            </>
          ) : (
            <>
              <svg className="h-5 w-5 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
              </svg>
              Generate PDF Report
            </>
          )}
        </button>
        
        {generated && (
          <button className="inline-flex items-center px-4 py-2 border border-transparent text-white bg-green-600 hover:bg-green-700 rounded-md text-sm font-medium">
            <svg className="h-5 w-5 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
            Download PDF
          </button>
        )}
      </div>

      <NavigationButtons
        onBack={onBack}
        onNext={onNext}
        backLabel="Back"
        nextLabel="Continue"
      />
    </Card>
  );
};

export default PDFReportGenerator;
