'use client';

import React from 'react';
import { useFirstDate } from '../context/FirstDateContext';
import { StartStep } from './steps/StartStep';
import { ChoiceStep } from './steps/ChoiceStep';
import { InfoStep } from './steps/InfoStep';
import { ImagePreloader } from './ImagePreloader';

export const FirstDateFlow: React.FC = () => {
  const { currentStep } = useFirstDate();

  if (!currentStep) {
    return (
      <main className="min-h-screen bg-black flex items-center justify-center">
        <div className="w-full max-w-[600px] min-h-screen bg-black flex items-center justify-center">
          <div className="text-center">
            <p className="text-2xl text-white">Loading your story...</p>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-black flex items-center justify-center">
      {/* Mobile-like container for desktop */}
      <div className="w-full max-w-[600px] min-h-screen bg-black relative shadow-2xl">
        {currentStep.type === 'start' && <StartStep step={currentStep} />}
        {currentStep.type === 'choice' && <ChoiceStep step={currentStep} />}
        {currentStep.type === 'info' && <InfoStep step={currentStep} />}
        
        {/* Progressively preload all images in background (excludes current) */}
        <ImagePreloader currentStepId={currentStep.id} />
      </div>
    </main>
  );
};

