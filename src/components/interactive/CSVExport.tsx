import React, { useState } from 'react';
import Card from '../common/Card';
import SectionTitle from '../common/SectionTitle';
import NavigationButtons from '../common/NavigationButtons';
import { ROIResults } from '../../utils/calculationEngine';

interface CSVExportProps {
  results: ROIResults;
  onExport: () => void;
  onBack: () => void;
  onNext: () => void;
}

const CSVExport: React.FC<CSVExportProps> = ({
  // results,
  onExport,
  onBack,
  onNext
}) => {
  const [exporting, setExporting] = useState(false);
  const [exported, setExported] = useState(false);

  const handleExport = () => {
    setExporting(true);
    
    // Simulate CSV export
    setTimeout(() => {
      onExport();
      setExporting(false);
      setExported(true);
      
      // Reset exported state after 3 seconds
      setTimeout(() => setExported(false), 3000);
    }, 1000);
  };

  return (
    <Card title="Export Data (CSV)">
      <p className="text-gray-700 mb-8">
        Export your ROI calculation data in CSV format for further analysis in spreadsheet software.
      </p>

      <div className="mb-8">
        <SectionTitle title="Export Options" />
        
        <div className="bg-gray-50 rounded-lg p-6">
          <p className="text-sm text-gray-600 mb-4">
            The CSV export will include the following data:
          </p>
          
          <ul className="list-disc pl-5 space-y-2 text-sm text-gray-600 mb-6">
            <li>Fleet composition details</li>
            <li>Current operational costs</li>
            <li>Selected service package and features</li>
            <li>Calculation assumptions</li>
            <li>Detailed cost breakdown</li>
            <li>Savings by category</li>
            <li>ROI metrics and projections</li>
          </ul>
          
          <p className="text-sm text-gray-600">
            This data can be imported into Excel, Google Sheets, or any other spreadsheet software for further analysis or integration with your existing financial models.
          </p>
        </div>
      </div>

      {exported && (
        <div className="mb-8 bg-green-50 border border-green-200 rounded-md p-4">
          <div className="flex">
            <div className="flex-shrink-0">
              <svg className="h-5 w-5 text-green-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="ml-3">
              <p className="text-sm font-medium text-green-800">
                Data exported successfully! Click the download button below to save the CSV file.
              </p>
            </div>
          </div>
        </div>
      )}

      <div className="flex justify-center space-x-4 mb-8">
        <button 
          onClick={handleExport}
          disabled={exporting}
          className={`inline-flex items-center px-4 py-2 border border-transparent text-white rounded-md text-sm font-medium ${
            exporting ? 'bg-blue-300 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'
          }`}
        >
          {exporting ? (
            <>
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Exporting...
            </>
          ) : (
            <>
              <svg className="h-5 w-5 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path d="M3 12v3c0 1.657 3.134 3 7 3s7-1.343 7-3v-3c0 1.657-3.134 3-7 3s-7-1.343-7-3z" />
                <path d="M3 7v3c0 1.657 3.134 3 7 3s7-1.343 7-3V7c0 1.657-3.134 3-7 3S3 8.657 3 7z" />
                <path d="M17 5c0 1.657-3.134 3-7 3S3 6.657 3 5s3.134-3 7-3 7 1.343 7 3z" />
              </svg>
              Export CSV Data
            </>
          )}
        </button>
        
        {exported && (
          <button className="inline-flex items-center px-4 py-2 border border-transparent text-white bg-green-600 hover:bg-green-700 rounded-md text-sm font-medium">
            <svg className="h-5 w-5 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
            Download CSV
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

export default CSVExport;
