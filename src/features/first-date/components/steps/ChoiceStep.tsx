import React from 'react';
import Image from 'next/image';
import { ChoiceStep as ChoiceStepType } from '../../types';
import { useFirstDate } from '../../context/FirstDateContext';

interface Props {
  step: ChoiceStepType;
}

export const ChoiceStep: React.FC<Props> = ({ step }) => {
  const { submitAnswer } = useFirstDate();

  const handleChoice = (optionId: string, nextStepId: string) => {
    submitAnswer(step.id, optionId, nextStepId);
  };

  return (
    <div className="relative flex flex-col items-center justify-end min-h-screen px-6 py-12 text-center">
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
      {/* Stronger gradient overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 via-black/50 to-transparent" />
      
      {/* Content container - immediately visible */}
      <div className="relative z-10 max-w-2xl mx-auto space-y-8">
        {/* Question Text - Large and readable */}
        <h2 
          className="text-3xl md:text-4xl font-serif text-white mb-8 leading-relaxed"
          style={{ textShadow: '0 4px 12px rgba(0, 0, 0, 0.8), 0 2px 4px rgba(0, 0, 0, 0.9)' }}
        >
          {step.question}
        </h2>

        {/* Choice Buttons - Large, accessible, easy to tap */}
        <div className="space-y-4">
          {step.options.map((option) => (
            <button
              key={option.id}
              onClick={() => handleChoice(option.id, option.nextStepId)}
              className="w-full px-8 py-5 bg-white/95 hover:bg-white text-gray-900 text-xl md:text-2xl font-light rounded-2xl shadow-2xl hover:shadow-rose-200/50 transition-all transform hover:scale-[1.02] focus:outline-none focus:ring-4 focus:ring-rose-300 backdrop-blur-sm"
              aria-label={option.text}
            >
              {option.text}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

