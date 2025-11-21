'use client';

import React, { createContext, useContext, useReducer, ReactNode } from 'react';
import { FirstDateState, StoryStep } from '../types';
import { firstDateSteps } from '../data/steps';

type Action =
  | { type: 'SET_STEP'; payload: { stepId: string } }
  | { type: 'ANSWER_QUESTION'; payload: { stepId: string; optionId: string } };

interface FirstDateContextType {
  state: FirstDateState;
  currentStep: StoryStep | undefined;
  dispatch: React.Dispatch<Action>;
  goToNextStep: (nextStepId: string) => void;
  submitAnswer: (stepId: string, optionId: string, nextStepId: string) => void;
}

const FirstDateContext = createContext<FirstDateContextType | undefined>(undefined);

function firstDateReducer(state: FirstDateState, action: Action): FirstDateState {
  switch (action.type) {
    case 'SET_STEP':
      return {
        ...state,
        currentStepId: action.payload.stepId,
        history: state.history.includes(state.currentStepId) 
          ? state.history 
          : [...state.history, state.currentStepId],
      };
    case 'ANSWER_QUESTION':
      return {
        ...state,
        answers: {
          ...state.answers,
          [action.payload.stepId]: action.payload.optionId,
        },
      };
    default:
      return state;
  }
}

interface FirstDateProviderProps {
  children: ReactNode;
  initialStepId?: string;
}

export function FirstDateProvider({ children, initialStepId = 'start' }: FirstDateProviderProps) {
  const [state, dispatch] = useReducer(firstDateReducer, {
    currentStepId: initialStepId,
    history: [],
    answers: {},
  });

  const currentStep = firstDateSteps.find((s) => s.id === state.currentStepId);

  // Just update state - no route changes!
  const goToNextStep = (nextStepId: string) => {
    dispatch({ type: 'SET_STEP', payload: { stepId: nextStepId } });
  };

  const submitAnswer = (stepId: string, optionId: string, nextStepId: string) => {
    dispatch({ type: 'ANSWER_QUESTION', payload: { stepId, optionId } });
    goToNextStep(nextStepId);
  };

  return (
    <FirstDateContext.Provider value={{ state, currentStep, dispatch, goToNextStep, submitAnswer }}>
      {children}
    </FirstDateContext.Provider>
  );
}

export function useFirstDate() {
  const context = useContext(FirstDateContext);
  if (context === undefined) {
    throw new Error('useFirstDate must be used within a FirstDateProvider');
  }
  return context;
}

