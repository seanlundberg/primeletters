'use client';

import React from 'react';
import { useFirstDate } from '../context/FirstDateContext';
import { StartStep } from './steps/StartStep';
import { ChoiceStep } from './steps/ChoiceStep';
import { InfoStep } from './steps/InfoStep';

export const FirstDateFlow: React.FC = () => {
  const { currentStep } = useFirstDate();

  if (!currentStep) {
    return (
      <div className="flex items-center justify-center bg-amber-50">
        <div className="text-center">
          <p className="text-2xl text-gray-600">Loading your story...</p>
        </div>
      </div>
    );
  }

  return (
    <main className="">
        {currentStep.type === 'start' && <StartStep step={currentStep} />}
        {currentStep.type === 'choice' && <ChoiceStep step={currentStep} />}
        {currentStep.type === 'info' && <InfoStep step={currentStep} />}
    </main>
  );
};

