# Fleet Services ROI Calculator - Technical Documentation

## Overview

This technical documentation provides detailed information about the implementation, architecture, and code structure of the Fleet Services ROI Calculator. It is intended for developers who need to understand, modify, or extend the application.

## Architecture

The Fleet Services ROI Calculator follows a component-based architecture using React. The application is structured to separate concerns and promote reusability.

### High-Level Architecture

```
User Interface Layer
    ↓
Component Layer
    ↓
Business Logic Layer
    ↓
Data Management Layer
```

- **User Interface Layer**: Handles presentation and user interactions
- **Component Layer**: Reusable UI components and page sections
- **Business Logic Layer**: ROI calculation engine and data processing
- **Data Management Layer**: State management and data persistence

### State Management

The application uses React Context API for state management with the following contexts:

1. **CalculatorContext**: Manages the overall calculator state
2. **FleetDataContext**: Manages fleet composition and vehicle data
3. **CostDataContext**: Manages current cost information
4. **ServiceOptionsContext**: Manages selected service options
5. **ResultsContext**: Manages calculation results and visualizations

## Code Structure

### Component Organization

Components are organized by function:

- **Layout Components**: Define the overall structure of the application
  - Header, Footer, Layout, ProgressBar

- **Common Components**: Reusable UI elements
  - Card, Button, InputWithLabel, SliderWithLabel, etc.

- **Input Components**: Handle user input for different sections
  - FleetSizeInput, VehicleTypesInput, CurrentCostsInput, etc.

- **Results Components**: Display calculation results
  - ResultsSummary, DetailedBreakdown, etc.

- **Interactive Components**: Handle user interactions
  - InteractiveAssumptions, ScenarioSave, PDFReportGenerator, etc.

### Key Files and Their Functions

#### Entry Points
- `src/index.tsx`: Application entry point
- `src/App.tsx`: Main application component and routing

#### Core Logic
- `src/utils/calculationEngine.ts`: ROI calculation logic
- `src/contexts/CalculatorContext.tsx`: Main state management
- `src/hooks/useCalculation.ts`: Custom hook for calculations

#### UI Components
- `src/components/layout/`: Layout components
- `src/components/common/`: Reusable UI components
- `src/components/input/`: Input form components
- `src/components/results/`: Results visualization components
- `src/components/interactive/`: Interactive feature components

## Calculation Engine

The calculation engine is the core of the application, implementing the ROI calculation logic.

### Key Calculations

1. **Maintenance Cost Savings**:
   ```typescript
   const maintenanceSavings = currentMaintenanceCost * (maintenanceReductionPercentage / 100);
   ```

2. **Fuel Efficiency Savings**:
   ```typescript
   const fuelSavings = currentFuelCost * (fuelEfficiencyImprovement / 100);
   ```

3. **Downtime Reduction Value**:
   ```typescript
   const downtimeValue = (currentDowntimeDays * downtimeReduction / 100) * dailyDowntimeCost;
   ```

4. **Vehicle Lifespan Financial Impact**:
   ```typescript
   const lifespanSavings = (replacementCost / currentLifespanYears) * (lifespanExtension / 100);
   ```

5. **ROI Calculation**:
   ```typescript
   const totalAnnualSavings = maintenanceSavings + fuelSavings + downtimeValue + lifespanSavings;
   const roi = (totalAnnualSavings / serviceCost) * 100;
   ```

6. **Payback Period**:
   ```typescript
   const paybackPeriodMonths = (serviceCost / (totalAnnualSavings / 12));
   ```

### Calculation Flow

1. User inputs fleet data, current costs, and selects service options
2. User adjusts calculation assumptions (or uses defaults)
3. Calculation engine processes inputs and assumptions
4. Results are calculated and stored in ResultsContext
5. Visualization components render the results

## Data Flow

```
User Input → State Update → Calculation Trigger → Results Update → UI Render
```

1. User interacts with input components
2. Input components update their respective contexts
3. Changes trigger recalculation in the calculation engine
4. Results are updated in the ResultsContext
5. UI components re-render with new results

## Export Functionality

### PDF Generation

PDF reports are generated using jsPDF:

1. Results data is formatted for the report
2. Report template is constructed with sections based on user selection
3. Charts are converted to images using canvas
4. PDF is assembled and offered for download

### CSV Export

CSV export is implemented using a custom function:

1. Results data is converted to CSV format
2. File is created using Blob API
3. Download is triggered using FileSaver.js

## Testing

The application includes comprehensive testing:

1. **Unit Tests**: Test individual components and functions
2. **Integration Tests**: Test component interactions
3. **Browser Compatibility Tests**: Test across different browsers
4. **Responsive Design Tests**: Test across different screen sizes
5. **Performance Tests**: Test application performance

## Performance Optimizations

Several optimizations are implemented:

1. **Memoization**: React.memo and useMemo to prevent unnecessary re-renders
2. **Code Splitting**: Lazy loading of components
3. **Asset Optimization**: Compressed images and optimized assets
4. **Efficient Rendering**: Optimized component rendering cycles

## Security Considerations

1. **Data Handling**: All calculations performed client-side
2. **Input Validation**: Proper validation of all user inputs
3. **Content Security Policy**: Strict CSP implementation
4. **Dependency Security**: Regular updates of dependencies

## Extensibility

The application is designed for extensibility:

1. **Adding New Vehicle Types**: Extend the vehicle types array in FleetDataContext
2. **Adding Service Options**: Extend the service options in ServiceOptionsContext
3. **Modifying Calculation Logic**: Update the calculation functions in calculationEngine.ts
4. **Adding New Visualizations**: Create new visualization components in the results directory

## Known Limitations

1. **Browser Support**: Requires modern browsers (IE not supported)
2. **Performance with Large Fleets**: May experience performance issues with extremely large fleet sizes
3. **PDF Generation**: Complex reports may have rendering limitations in some browsers

## Future Enhancements

Potential areas for future development:

1. **API Integration**: Connect to real fleet data sources
2. **Advanced Analytics**: More sophisticated analysis and projections
3. **User Accounts**: Save and manage scenarios across sessions
4. **Comparative Analysis**: Enhanced tools for comparing multiple scenarios
5. **Mobile App**: Native mobile application version

---

© 2025 Fleet Services Company. All rights reserved.
