import React from 'react';
import { formatCurrency, formatDecimal } from '../../utils/calculationEngine';
import Card from '../common/Card';
import StatCard from '../common/StatCard';
import SectionTitle from '../common/SectionTitle';
import NavigationButtons from '../common/NavigationButtons';
import { ROIResults } from '../../utils/calculationEngine';

interface ResultsSummaryProps {
  results: ROIResults;
  onBack: () => void;
  onNext: () => void;
}

const ResultsSummary: React.FC<ResultsSummaryProps> = ({
  results,
  onBack,
  onNext
}) => {
  return (
    <Card title="ROI Summary">
      {/* Summary Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <StatCard 
          title="Annual Savings" 
          value={formatCurrency(results.annualSavings)}
          description="Per year across your fleet"
        />
        <StatCard 
          title="ROI" 
          value={`${formatDecimal(results.roi)}%`}
          description="Return on investment"
        />
        <StatCard 
          title="Payback Period" 
          value={`${formatDecimal(results.paybackPeriodMonths)} months`}
          description="To recover investment"
        />
      </div>

      {/* Cost Comparison Chart */}
      <div className="mb-8">
        <SectionTitle title="Annual Cost Comparison" />
        <div className="h-80 bg-gray-50 rounded-lg p-4 flex items-center justify-center">
          <div className="w-full max-w-md">
            <div className="flex items-center mb-4">
              <div className="w-full bg-gray-200 rounded-full h-8">
                <div 
                  className="bg-red-500 h-8 rounded-full" 
                  style={{ width: '100%' }}
                ></div>
              </div>
              <div className="ml-4 min-w-[100px] text-right">
                <span className="text-lg font-medium">{formatCurrency(results.currentAnnualCosts)}</span>
              </div>
            </div>
            <div className="text-sm text-gray-600 mb-6 text-center">Current Annual Costs</div>
            
            <div className="flex items-center mb-4">
              <div className="w-full bg-gray-200 rounded-full h-8">
                <div 
                  className="bg-green-500 h-8 rounded-full" 
                  style={{ width: `${(results.projectedAnnualCosts / results.currentAnnualCosts) * 100}%` }}
                ></div>
              </div>
              <div className="ml-4 min-w-[100px] text-right">
                <span className="text-lg font-medium">{formatCurrency(results.projectedAnnualCosts)}</span>
              </div>
            </div>
            <div className="text-sm text-gray-600 text-center">Projected Annual Costs with Fleet Services</div>
          </div>
        </div>
      </div>

      {/* Savings Breakdown */}
      <div className="mb-8">
        <SectionTitle title="Savings Breakdown" />
        <div className="h-80 bg-gray-50 rounded-lg p-4 flex items-center justify-center">
          <div className="w-full max-w-md">
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center">
                <div className="w-4 h-4 bg-blue-500 rounded-full mr-2"></div>
                <div className="text-sm">Maintenance Savings</div>
                <div className="ml-auto font-medium">{formatCurrency(results.savingsBreakdown.maintenanceSavings)}</div>
              </div>
              <div className="flex items-center">
                <div className="w-4 h-4 bg-green-500 rounded-full mr-2"></div>
                <div className="text-sm">Fuel Efficiency</div>
                <div className="ml-auto font-medium">{formatCurrency(results.savingsBreakdown.fuelSavings)}</div>
              </div>
              <div className="flex items-center">
                <div className="w-4 h-4 bg-yellow-500 rounded-full mr-2"></div>
                <div className="text-sm">Downtime Reduction</div>
                <div className="ml-auto font-medium">{formatCurrency(results.savingsBreakdown.downtimeSavings)}</div>
              </div>
              <div className="flex items-center">
                <div className="w-4 h-4 bg-purple-500 rounded-full mr-2"></div>
                <div className="text-sm">Extended Lifespan</div>
                <div className="ml-auto font-medium">{formatCurrency(results.savingsBreakdown.lifespanSavings)}</div>
              </div>
              <div className="flex items-center">
                <div className="w-4 h-4 bg-red-500 rounded-full mr-2"></div>
                <div className="text-sm">Labor Optimization</div>
                <div className="ml-auto font-medium">{formatCurrency(results.savingsBreakdown.laborSavings)}</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ROI Timeline */}
      <div className="mb-8">
        <SectionTitle title="ROI Timeline" />
        <div className="h-80 bg-gray-50 rounded-lg p-4 flex items-center justify-center">
          <div className="w-full h-full flex items-end justify-between px-4">
            {/* This would be a line chart in the actual implementation */}
            {/* For now, we'll use a simple bar chart to represent the ROI over time */}
            {[1, 2, 3, 4, 5, 6, 7, 8].map((month) => {
              // Calculate a simple progression for the demo
              const height = Math.min(20 + (month * 30), 210);
              
              return (
                <div key={month} className="flex flex-col items-center">
                  <div 
                    className="bg-blue-600 w-12 rounded-t-md" 
                    style={{ height: `${height}px` }}
                  ></div>
                  <div className="mt-2 text-xs">Month {month}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Cumulative Savings */}
      <div className="mb-8">
        <SectionTitle title="Cumulative Savings" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="border border-gray-200 rounded-lg p-6 text-center">
            <h4 className="text-base font-medium text-gray-700 mb-2">3 Year Savings</h4>
            <p className="text-2xl font-bold text-blue-600">{formatCurrency(results.threeYearSavings)}</p>
          </div>
          <div className="border border-gray-200 rounded-lg p-6 text-center">
            <h4 className="text-base font-medium text-gray-700 mb-2">5 Year Savings</h4>
            <p className="text-2xl font-bold text-blue-600">{formatCurrency(results.fiveYearSavings)}</p>
          </div>
          <div className="border border-gray-200 rounded-lg p-6 text-center">
            <h4 className="text-base font-medium text-gray-700 mb-2">10 Year Savings</h4>
            <p className="text-2xl font-bold text-blue-600">{formatCurrency(results.tenYearSavings)}</p>
          </div>
        </div>
      </div>

      {/* Export Options */}
      <div className="flex flex-wrap justify-center gap-4 mt-8">
        <button className="inline-flex items-center px-4 py-2 border border-transparent text-white bg-blue-600 hover:bg-blue-700 rounded-md text-sm font-medium">
          <svg className="h-5 w-5 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
          Save Results
        </button>
        <button className="inline-flex items-center px-4 py-2 border border-transparent text-white bg-blue-600 hover:bg-blue-700 rounded-md text-sm font-medium">
          <svg className="h-5 w-5 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
          </svg>
          Generate Report
        </button>
      </div>

      <NavigationButtons
        onBack={onBack}
        onNext={onNext}
        nextLabel="View Detailed Breakdown"
      />
    </Card>
  );
};

export default ResultsSummary;
