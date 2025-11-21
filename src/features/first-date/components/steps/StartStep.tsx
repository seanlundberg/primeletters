import React from 'react';
import Image from 'next/image';
import { StartStep as StartStepType } from '../../types';
import { useFirstDate } from '../../context/FirstDateContext';

interface Props {
  step: StartStepType;
}

export const StartStep: React.FC<Props> = ({ step }) => {
  const { goToNextStep } = useFirstDate();

  return (
    <div className="relative flex flex-col items-center justify-end px-6 py-12 pt-[10vh] text-center">
      {/* Background Image using Next.js Image for optimization */}
      {step.backgroundImage && (
        <Image
          src={step.backgroundImage}
          alt="Scene background"
          fill
          className="object-cover animate-fade-in-bg"
          priority
          quality={90}
        />
      )}
      {/* Stronger gradient overlay for text readability - more concentrated at bottom */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 via-black/50 to-transparent" />
      
      {/* Content container - immediately visible */}
      <div className="relative z-10 max-w-2xl mx-auto space-y-8">
        {/* Header / Title - Using a serif font with white text for contrast */}
        <h1 
          className="text-5xl md:text-6xl font-serif font-bold text-white mb-6 leading-tight"
          style={{ textShadow: '0 4px 12px rgba(0, 0, 0, 0.8), 0 2px 4px rgba(0, 0, 0, 0.9)' }}
        >
          {step.title}
        </h1>

        {/* Descriptive Text - Large and readable with white text */}
        <p 
          className="text-2xl md:text-3xl text-white leading-relaxed font-light"
          style={{ textShadow: '0 3px 8px rgba(0, 0, 0, 0.7), 0 1px 3px rgba(0, 0, 0, 0.8)' }}
        >
          {step.description}
        </p>

        {/* Action Button - High contrast, large touch target */}
        <div className="pt-8">
          <button
            onClick={() => goToNextStep(step.nextStepId)}
            className="px-10 py-5 bg-rose-600 text-white text-2xl font-semibold rounded-full shadow-2xl hover:bg-rose-700 transition-transform transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-rose-300"
            aria-label={step.buttonText}
          >
            {step.buttonText}
          </button>
        </div>
      </div>
    </div>
  );
};

