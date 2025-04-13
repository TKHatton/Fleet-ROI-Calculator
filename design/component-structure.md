# Fleet Services ROI Calculator - Component Structure

## Layout Components
- `Layout`: Main layout wrapper with navigation and progress indicator
- `Header`: Contains logo, title, and navigation aids
- `Footer`: Contains copyright, links, and support information
- `ProgressBar`: Shows current step in the calculation process
- `NavigationButtons`: Previous/Next/Save buttons for moving between sections

## Page Components
- `WelcomePage`: Initial landing page with introduction
- `FleetCompositionPage`: For fleet size and vehicle type inputs
- `CurrentCostsPage`: For entering current operational costs
- `ServiceOptionsPage`: For selecting service packages
- `AssumptionsPage`: For adjusting calculation assumptions
- `ResultsDashboardPage`: For displaying calculation results
- `ExportOptionsPage`: For saving and exporting results

## Form Components
- `NumberInput`: For numerical inputs with validation
- `Dropdown`: For selection inputs (vehicle types, etc.)
- `Slider`: For adjusting assumption values
- `Toggle`: For including/excluding certain benefits
- `RadioGroup`: For selecting between mutually exclusive options
- `Tooltip`: For providing explanatory information
- `FormSection`: Container for grouping related form elements

## Visualization Components
- `ComparisonChart`: Side-by-side before/after comparison
- `ProjectionGraph`: Annual savings projection over time
- `ROITimeline`: Visual representation of ROI over time
- `PieChart`: For cost breakdown visualization
- `CumulativeSavingsChart`: For showing savings over different periods
- `DataTable`: For displaying detailed numerical results

## Interactive Feature Components
- `ScenarioManager`: For saving and loading different scenarios
- `PDFGenerator`: For creating downloadable PDF reports
- `ExportTools`: For exporting data in various formats
- `HelpSystem`: For providing contextual help and FAQs

## Utility Components
- `CalculationEngine`: Core logic for ROI calculations
- `DataValidator`: For validating user inputs
- `StorageManager`: For managing saved scenarios
- `NotificationSystem`: For displaying alerts and notifications

## State Management
- Use React Context API for global state management
- Create separate contexts for:
  - User Input Data
  - Calculation Results
  - UI State (current step, form validity)
  - Saved Scenarios
