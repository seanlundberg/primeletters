import { useEffect } from 'react';
import { firstDateSteps } from '../data/steps';

/**
 * Custom hook to preload the next step's background image
 * This ensures smooth transitions with no loading delays
 */
export function useImagePreload(currentStepId: string) {
  useEffect(() => {
    const currentStep = firstDateSteps.find(step => step.id === currentStepId);
    if (!currentStep) return;

    const imagesToPreload: string[] = [];

    // Get the next step image based on step type
    if (currentStep.type === 'choice') {
      // For choice steps, preload all possible next step images
      currentStep.options.forEach(option => {
        const nextStep = firstDateSteps.find(s => s.id === option.nextStepId);
        if (nextStep?.backgroundImage) {
          imagesToPreload.push(nextStep.backgroundImage);
        }
      });
    } else if (currentStep.nextStepId) {
      // For info/start steps, preload the single next step image
      const nextStep = firstDateSteps.find(s => s.id === currentStep.nextStepId);
      if (nextStep?.backgroundImage) {
        imagesToPreload.push(nextStep.backgroundImage);
      }
    }

    // Preload all images using link preload (most efficient)
    const preloadLinks: HTMLLinkElement[] = [];
    
    imagesToPreload.forEach(imageSrc => {
      // Check if already preloaded to avoid duplicates
      const existingLink = document.querySelector(`link[href="${imageSrc}"]`);
      if (!existingLink) {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'image';
        link.href = imageSrc;
        document.head.appendChild(link);
        preloadLinks.push(link);
      }
    });

    // Also use Image() for browsers that don't support link preload well
    const imageElements: HTMLImageElement[] = [];
    imagesToPreload.forEach(imageSrc => {
      const img = new Image();
      img.src = imageSrc;
      imageElements.push(img);
    });

    // Cleanup function to remove preload links when component unmounts
    return () => {
      preloadLinks.forEach(link => {
        if (link.parentNode) {
          link.parentNode.removeChild(link);
        }
      });
    };
  }, [currentStepId]);
}

