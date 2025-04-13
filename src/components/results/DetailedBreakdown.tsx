import React from 'react';
import { formatCurrency } from '../../utils/calculationEngine';
import Card from '../common/Card';
// import SectionTitle from '../common/SectionTitle';
import NavigationButtons from '../common/NavigationButtons';
import { ROIResults } from '../../utils/calculationEngine';

interface DetailedBreakdownProps {
  results: ROIResults;
  onBack: () => void;
  onStartNew: () => void;
}

const DetailedBreakdown: React.FC<DetailedBreakdownProps> = ({
  results,
  onBack,
  onStartNew
}) => {
  return (
    <Card title="Detailed Breakdown">
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
              <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Current Costs</th>
              <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Projected Costs</th>
              <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Savings</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Maintenance</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-right">{formatCurrency(results.detailedBreakdown.maintenance.current)}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-right">{formatCurrency(results.detailedBreakdown.maintenance.projected)}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-green-600 font-medium text-right">{formatCurrency(results.detailedBreakdown.maintenance.savings)}</td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Fuel</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-right">{formatCurrency(results.detailedBreakdown.fuel.current)}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-right">{formatCurrency(results.detailedBreakdown.fuel.projected)}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-green-600 font-medium text-right">{formatCurrency(results.detailedBreakdown.fuel.savings)}</td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Downtime Costs</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-right">{formatCurrency(results.detailedBreakdown.downtime.current)}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-right">{formatCurrency(results.detailedBreakdown.downtime.projected)}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-green-600 font-medium text-right">{formatCurrency(results.detailedBreakdown.downtime.savings)}</td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Vehicle Replacement</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-right">{formatCurrency(results.detailedBreakdown.vehicleReplacement.current)}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-right">{formatCurrency(results.detailedBreakdown.vehicleReplacement.projected)}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-green-600 font-medium text-right">{formatCurrency(results.detailedBreakdown.vehicleReplacement.savings)}</td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Labor</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-right">{formatCurrency(results.detailedBreakdown.labor.current)}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-right">{formatCurrency(results.detailedBreakdown.labor.projected)}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-green-600 font-medium text-right">{formatCurrency(results.detailedBreakdown.labor.savings)}</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Total</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 text-right">{formatCurrency(results.detailedBreakdown.total.current)}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 text-right">{formatCurrency(results.detailedBreakdown.total.projected)}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-green-600 text-right">{formatCurrency(results.detailedBreakdown.total.savings)}</td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Service Package Cost</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-right">{formatCurrency(results.detailedBreakdown.servicePackage.current)}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-right">{formatCurrency(results.detailedBreakdown.servicePackage.projected)}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-red-600 font-medium text-right">{formatCurrency(results.detailedBreakdown.servicePackage.cost)}</td>
            </tr>
            <tr className="bg-blue-50">
              <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-gray-900">Net Savings</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-right"></td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-right"></td>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-green-600 text-right">{formatCurrency(results.detailedBreakdown.net.savings)}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <NavigationButtons
        onBack={onBack}
        onNext={onStartNew}
        backLabel="Back to Summary"
        nextLabel="Start New Calculation"
      />
    </Card>
  );
};

export default DetailedBreakdown;
