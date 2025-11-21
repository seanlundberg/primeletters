import React from 'react';
import { InfoStep as InfoStepType } from '../../types';
import { useFirstDate } from '../../context/FirstDateContext';

interface Props {
  step: InfoStepType;
}

export const InfoStep: React.FC<Props> = ({ step }) => {
  const { goToNextStep } = useFirstDate();

  return (
    <div 
      className="relative flex flex-col items-center justify-end min-h-[100dvh] px-6 py-12 pb-20 text-center"
      style={{
        backgroundColor: step.backgroundImage ? 'transparent' : '#FFF8F0',
      }}
    >
      {/* Background Image using native img */}
      {step.backgroundImage && (
        <img
          key={`${step.id}-bg`}
          src={step.backgroundImage}
          alt="Scene background"
          className="absolute inset-0 w-full h-full object-cover animate-fade-in-bg"
        />
      )}
      {/* Gradient overlay - fades in AFTER background */}
      {step.backgroundImage && (
        <div key={`${step.id}-gradient`} className="absolute inset-0 bg-gradient-to-t from-black via-black/80 via-black/50 to-transparent animate-fade-in-gradient" />
      )}
      
      {/* Content container - staggered animations */}
      <div key={`${step.id}-content`} className="relative z-10 max-w-2xl mx-auto space-y-8">
        {/* Optional Title - Slides up after gradient */}
        {step.title && (
          <h2 
            className={`text-4xl md:text-5xl font-serif font-bold mb-6 leading-tight animate-slide-up animate-delay-1600 ${
              step.backgroundImage ? 'text-white' : 'text-gray-900'
            }`}
            style={step.backgroundImage ? { textShadow: '0 4px 12px rgba(0, 0, 0, 0.8), 0 2px 4px rgba(0, 0, 0, 0.9)' } : {}}
          >
            {step.title}
          </h2>
        )}

        {/* Story Content - Slides up second */}
        <p 
          className={`text-2xl md:text-3xl leading-relaxed font-light animate-slide-up ${
            step.title ? 'animate-delay-1700' : 'animate-delay-1600'
          } ${
            step.backgroundImage ? 'text-white' : 'text-gray-800'
          }`}
          style={step.backgroundImage ? { textShadow: '0 3px 8px rgba(0, 0, 0, 0.7), 0 1px 3px rgba(0, 0, 0, 0.8)' } : {}}
        >
          {step.content}
        </p>

        {/* Continue Button - Slides up last */}
        <div className={`pt-8 animate-slide-up ${step.title ? 'animate-delay-1800' : 'animate-delay-1700'}`}>
          <button
            onClick={() => goToNextStep(step.nextStepId)}
            className="px-10 py-5 bg-rose-600 text-white text-2xl font-semibold rounded-full shadow-2xl hover:bg-rose-700 transition-transform transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-rose-300"
            aria-label={step.buttonText || 'Continue'}
          >
            {step.buttonText || 'Continue'}
          </button>
        </div>
      </div>
    </div>
  );
};

