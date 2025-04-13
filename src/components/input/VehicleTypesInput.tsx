import React from 'react';
import Card from '../common/Card';
import SectionTitle from '../common/SectionTitle';
import SelectWithLabel from '../common/SelectWithLabel';
import InputWithLabel from '../common/InputWithLabel';
import NavigationButtons from '../common/NavigationButtons';

interface VehicleType {
  id: string;
  type: string;
  quantity: number;
}

interface VehicleTypesInputProps {
  vehicleTypes: VehicleType[];
  onVehicleTypesChange: (vehicleTypes: VehicleType[]) => void;
  onBack: () => void;
  onNext: () => void;
}

const VehicleTypesInput: React.FC<VehicleTypesInputProps> = ({
  vehicleTypes,
  onVehicleTypesChange,
  onBack,
  onNext
}) => {
  const vehicleTypeOptions = [
    { value: 'sedan', label: 'Sedan' },
    { value: 'suv', label: 'SUV' },
    { value: 'light-truck', label: 'Light Truck' },
    { value: 'heavy-truck', label: 'Heavy Truck' },
    { value: 'van', label: 'Van' },
    { value: 'specialty', label: 'Specialty Vehicle' }
  ];

  const handleVehicleTypeChange = (id: string, type: string) => {
    const updatedTypes = vehicleTypes.map(vt => 
      vt.id === id ? { ...vt, type } : vt
    );
    onVehicleTypesChange(updatedTypes);
  };

  const handleQuantityChange = (id: string, quantityStr: string) => {
    const quantity = parseInt(quantityStr);
    if (!isNaN(quantity) && quantity >= 0) {
      const updatedTypes = vehicleTypes.map(vt => 
        vt.id === id ? { ...vt, quantity } : vt
      );
      onVehicleTypesChange(updatedTypes);
    }
  };

  const addVehicleType = () => {
    const newId = `vehicle-${Date.now()}`;
    onVehicleTypesChange([
      ...vehicleTypes,
      { id: newId, type: 'sedan', quantity: 0 }
    ]);
  };

  const removeVehicleType = (id: string) => {
    const updatedTypes = vehicleTypes.filter(vt => vt.id !== id);
    onVehicleTypesChange(updatedTypes);
  };

  return (
    <Card title="Fleet Composition">
      <p className="text-gray-700 mb-8">
        Please provide information about your current fleet size and vehicle types. 
        This will help us calculate potential savings based on your specific fleet composition.
      </p>

      <div className="mb-8">
        <div className="flex justify-between items-center mb-4">
          <SectionTitle title="Vehicle Types" />
          <button 
            onClick={addVehicleType}
            className="inline-flex items-center px-3 py-1.5 border border-blue-600 text-blue-600 bg-white hover:bg-blue-50 rounded-md text-sm font-medium"
          >
            <svg className="h-4 w-4 mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd" />
            </svg>
            Add Vehicle Type
          </button>
        </div>

        <div className="space-y-4">
          {vehicleTypes.map((vehicleType) => (
            <div key={vehicleType.id} className="border border-gray-200 rounded-md p-4 bg-gray-50">
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-grow">
                  <SelectWithLabel
                    id={`vehicle-type-${vehicleType.id}`}
                    label="Vehicle Type"
                    options={vehicleTypeOptions}
                    value={vehicleType.type}
                    onChange={(value) => handleVehicleTypeChange(vehicleType.id, value)}
                  />
                </div>
                <div>
                  <InputWithLabel
                    id={`vehicle-quantity-${vehicleType.id}`}
                    label="Quantity"
                    type="number"
                    placeholder="0"
                    value={vehicleType.quantity}
                    onChange={(e) => handleQuantityChange(vehicleType.id, e.target.value)}
                    min={1}
                  />
                </div>
                <div className="flex items-end">
                  <button 
                    onClick={() => removeVehicleType(vehicleType.id)}
                    className="inline-flex items-center p-1.5 border border-gray-300 text-gray-700 bg-white hover:bg-gray-50 rounded-md"
                  >
                    <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}

          {vehicleTypes.length === 0 && (
            <div className="text-center py-4 text-gray-500">
              No vehicle types added. Click "Add Vehicle Type" to begin.
            </div>
          )}
        </div>
      </div>

      <NavigationButtons
        onBack={onBack}
        onNext={onNext}
      />
    </Card>
  );
};

export default VehicleTypesInput;
