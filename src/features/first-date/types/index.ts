export type StepType = 'start' | 'choice' | 'info';

export interface BaseStep {
  id: string;
  type: StepType;
}

export interface StartStep extends BaseStep {
  type: 'start';
  title: string;
  description: string;
  buttonText: string;
  backgroundImage?: string; // For the cinematic feel
  nextStepId: string;
}

export interface ChoiceStep extends BaseStep {
  type: 'choice';
  question: string;
  backgroundImage?: string;
  options: {
    id: string;
    text: string;
    nextStepId: string; // Simple branching for now
  }[];
}

export interface InfoStep extends BaseStep {
  type: 'info';
  title?: string;
  content: string;
  buttonText?: string; // Defaults to "Continue"
  backgroundImage?: string;
  nextStepId: string;
}

export type StoryStep = StartStep | ChoiceStep | InfoStep;

export interface FirstDateState {
  currentStepId: string;
  history: string[]; // Track path taken
  answers: Record<string, string>; // stepId -> optionId
}

