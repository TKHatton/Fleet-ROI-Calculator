import React from 'react';
import Card from '../common/Card';
import SectionTitle from '../common/SectionTitle';
import CheckboxWithLabel from '../common/CheckboxWithLabel';
import RadioGroupWithLabel from '../common/RadioGroupWithLabel';
import NavigationButtons from '../common/NavigationButtons';

interface ServicePackage {
  id: string;
  name: string;
  features: string[];
  annualCost: number;
}

interface AdditionalFeature {
  id: string;
  name: string;
  description: string;
  annualCost: number;
  selected: boolean;
}

interface ServiceOptionsInputProps {
  selectedPackage: string;
  additionalFeatures: AdditionalFeature[];
  onPackageChange: (packageId: string) => void;
  onFeatureToggle: (featureId: string, selected: boolean) => void;
  onBack: () => void;
  onNext: () => void;
}

const ServiceOptionsInput: React.FC<ServiceOptionsInputProps> = ({
  selectedPackage,
  additionalFeatures,
  onPackageChange,
  onFeatureToggle,
  onBack,
  onNext
}) => {
  // Service package data
  const servicePackages: ServicePackage[] = [
    {
      id: 'basic',
      name: 'Basic',
      features: ['Preventive Maintenance', 'Fuel Management'],
      annualCost: 750
    },
    {
      id: 'standard',
      name: 'Standard',
      features: ['Preventive Maintenance', 'Fuel Management', 'Driver Training', 'Fleet Telematics'],
      annualCost: 1250
    },
    {
      id: 'premium',
      name: 'Premium',
      features: ['Preventive Maintenance', 'Fuel Management', 'Driver Training', 'Fleet Telematics', '24/7 Support'],
      annualCost: 1950
    }
  ];

  const packageOptions = servicePackages.map(pkg => ({
    value: pkg.id,
    label: pkg.name
  }));

  return (
    <Card title="Service Package Selection">
      <p className="text-gray-700 mb-8">
        Choose the service package that best fits your fleet management needs. Each package includes different features and benefits.
      </p>

      {/* Package Comparison Table */}
      <div className="mb-8 overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Features</th>
              <th scope="col" className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Basic</th>
              <th scope="col" className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Standard</th>
              <th scope="col" className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Premium</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Preventive Maintenance</td>
              <td className="px-6 py-4 whitespace-nowrap text-center text-sm text-gray-500">
                <svg className="h-5 w-5 mx-auto text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-center text-sm text-gray-500">
                <svg className="h-5 w-5 mx-auto text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-center text-sm text-gray-500">
                <svg className="h-5 w-5 mx-auto text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Fuel Management</td>
              <td className="px-6 py-4 whitespace-nowrap text-center text-sm text-gray-500">
                <svg className="h-5 w-5 mx-auto text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-center text-sm text-gray-500">
                <svg className="h-5 w-5 mx-auto text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-center text-sm text-gray-500">
                <svg className="h-5 w-5 mx-auto text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Driver Training</td>
              <td className="px-6 py-4 whitespace-nowrap text-center text-sm text-gray-500">
                <svg className="h-5 w-5 mx-auto text-gray-300" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-center text-sm text-gray-500">
                <svg className="h-5 w-5 mx-auto text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-center text-sm text-gray-500">
                <svg className="h-5 w-5 mx-auto text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Fleet Telematics</td>
              <td className="px-6 py-4 whitespace-nowrap text-center text-sm text-gray-500">
                <svg className="h-5 w-5 mx-auto text-gray-300" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-center text-sm text-gray-500">
                <svg className="h-5 w-5 mx-auto text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-center text-sm text-gray-500">
                <svg className="h-5 w-5 mx-auto text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">24/7 Support</td>
              <td className="px-6 py-4 whitespace-nowrap text-center text-sm text-gray-500">
                <svg className="h-5 w-5 mx-auto text-gray-300" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-center text-sm text-gray-500">
                <svg className="h-5 w-5 mx-auto text-gray-300" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-center text-sm text-gray-500">
                <svg className="h-5 w-5 mx-auto text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Annual Cost Per Vehicle</td>
              <td className="px-6 py-4 whitespace-nowrap text-center text-sm text-gray-900 font-medium">$750</td>
              <td className="px-6 py-4 whitespace-nowrap text-center text-sm text-gray-900 font-medium">$1,250</td>
              <td className="px-6 py-4 whitespace-nowrap text-center text-sm text-gray-900 font-medium">$1,950</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Package Selection */}
      <div className="mb-8">
        <RadioGroupWithLabel
          id="service-package"
          label="Select Service Package"
          options={packageOptions}
          selectedValue={selectedPackage}
          onChange={onPackageChange}
          className="mb-8"
        />
      </div>

      {/* Custom Features */}
      <div className="mb-8">
        <SectionTitle 
          title="Additional Features" 
          description="Select any additional features you'd like to include in your service package."
        />
        
        <div className="space-y-3">
          {additionalFeatures.map(feature => (
            <CheckboxWithLabel
              key={feature.id}
              id={feature.id}
              label={`${feature.name} (+$${feature.annualCost}/vehicle/year)`}
              description={feature.description}
              checked={feature.selected}
              onChange={(checked) => onFeatureToggle(feature.id, checked)}
            />
          ))}
        </div>
      </div>

      <NavigationButtons
        onBack={onBack}
        onNext={onNext}
      />
    </Card>
  );
};

export default ServiceOptionsInput;
