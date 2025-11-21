'use client';

import React, { useState, useEffect } from 'react';
import { firstDateSteps } from '../data/steps';

/**
 * ImagePreloader - Renders hidden img tags to force browser caching
 * 
 * This approach:
 * 1. Renders actual <img> tags in DOM (hidden)
 * 2. Browser caches them properly
 * 3. When step components use same src, instant from cache
 */

interface ImagePreloaderProps {
  currentStepId: string;
}

export const ImagePreloader: React.FC<ImagePreloaderProps> = ({ currentStepId }) => {
  const [shouldPreload, setShouldPreload] = useState(false);

  useEffect(() => {
    // Start preloading after initial image has time to load
    const timer = setTimeout(() => {
      setShouldPreload(true);
      console.log('🖼️ Starting image preload...');
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (!shouldPreload) {
    return null;
  }

  // Get all unique background images
  const allImages = firstDateSteps
    .map(step => step.backgroundImage)
    .filter((img): img is string => !!img);

  // Remove duplicates
  const uniqueImages = Array.from(new Set(allImages));

  // Get current step's image
  const currentStep = firstDateSteps.find(s => s.id === currentStepId);
  const currentImage = currentStep?.backgroundImage;

  // Filter out the current image (already loaded)
  const imagesToPreload = uniqueImages.filter(img => img !== currentImage);

  return (
    <div 
      className="fixed inset-0 pointer-events-none -z-50 opacity-0 overflow-hidden" 
      aria-hidden="true"
      style={{ width: '1px', height: '1px' }}
    >
      {imagesToPreload.map((src) => (
        <img
          key={src}
          src={src}
          alt=""
          style={{ position: 'absolute', width: '1px', height: '1px' }}
          onLoad={() => console.log(`✅ Cached: ${src}`)}
          onError={() => console.error(`❌ Failed: ${src}`)}
        />
      ))}
    </div>
  );
};
