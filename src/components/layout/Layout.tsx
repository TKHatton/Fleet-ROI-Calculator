import React, { ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';
import ProgressBar from './ProgressBar';

interface LayoutProps {
  children: ReactNode;
  showProgressBar?: boolean;
  currentStep?: number;
  totalSteps?: number;
  stepLabels?: string[];
  helpAction?: () => void;
}

const Layout: React.FC<LayoutProps> = ({ 
  children, 
  showProgressBar = false,
  currentStep = 1,
  totalSteps = 5,
  stepLabels = ['Fleet Composition', 'Current Costs', 'Service Options', 'Assumptions', 'Results'],
  helpAction
}) => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header helpAction={helpAction} />
      
      {showProgressBar && (
        <ProgressBar 
          currentStep={currentStep} 
          totalSteps={totalSteps} 
          stepLabels={stepLabels} 
        />
      )}
      
      <main className="flex-grow">
        <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
          {children}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Layout;
