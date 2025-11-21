'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function AgeConfirmation() {
  const handleUnder18 = () => {
    window.location.href = 'https://www.google.com';
  };

  return (
    <div className="min-h-screen bg-[#FFF8F0] relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/backgrounds/age-gate.png"
          alt="Romantic evening ambiance"
          fill
          className="object-cover"
          priority
          quality={90}
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-rose-950/90 via-rose-900/85 to-black/90" />
        {/* Vignette effect */}
        <div className="absolute inset-0" style={{
          background: 'radial-gradient(circle at center, transparent 0%, rgba(0,0,0,0.6) 100%)'
        }} />
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center px-6 py-8 md:py-12">
        <div className="max-w-3xl mx-auto text-center space-y-6 md:space-y-8">
          {/* Main heading with inline icon */}
          <div className="flex items-center justify-center gap-4">
            <span className="text-4xl md:text-5xl">💕</span>
            <h1 className="text-3xl md:text-6xl font-serif font-bold text-white leading-tight" style={{
              textShadow: '0 4px 20px rgba(0,0,0,0.9), 0 2px 4px rgba(0,0,0,0.9)'
            }}>
              Before We Begin...
            </h1>
          </div>

          {/* Main message */}
          <div className="bg-white/10 backdrop-blur-md rounded-3xl p-6 md:p-12 border-2 border-rose-300/30 shadow-2xl">
            <p className="text-xl md:text-3xl text-white leading-relaxed mb-4 md:mb-6 font-light" style={{
              textShadow: '0 2px 10px rgba(0,0,0,0.8)'
            }}>
              This romantic journey is designed for{' '}
              <span className="font-semibold text-rose-200 italic">mature adults</span>.
            </p>
            
            <p className="text-lg md:text-2xl text-rose-100 leading-relaxed mb-3 md:mb-4" style={{
              textShadow: '0 2px 10px rgba(0,0,0,0.8)'
            }}>
              While always tasteful and respectful, some scenarios may include{' '}
              <span className="font-semibold text-white italic">sensual and intimate moments</span>{' '}
              between consenting adults.
            </p>

            <p className="text-lg md:text-2xl text-rose-100 leading-relaxed italic" style={{
              textShadow: '0 2px 10px rgba(0,0,0,0.8)'
            }}>
              Experience the romance you've been missing...
            </p>
          </div>

          {/* Age confirmation question */}
          <h2 className="text-4xl md:text-4xl font-serif font-bold text-white pt-2 md:pt-4" style={{
            textShadow: '0 3px 15px rgba(0,0,0,0.9)'
          }}>
            Please confirm you are 18 or older
          </h2>

          {/* Action buttons */}
          <div className="flex flex-col md:flex-row gap-4 md:gap-6 justify-center items-center pt-4 md:pt-6">
            <Link 
              href="/first-date"
              className="px-12 py-5 md:py-7 bg-rose-600 text-white text-xl md:text-3xl font-bold rounded-full hover:bg-rose-700 hover:scale-105 transition-all duration-300 w-full md:w-auto min-w-[260px] border-4 border-rose-300/40"
              style={{
                boxShadow: '0 10px 40px rgba(0,0,0,0.7), 0 0 0 1px rgba(255,255,255,0.2)'
              }}
            >
              Yes, I'm 18+
            </Link>

            <button
              onClick={handleUnder18}
              className="px-12 py-5 md:py-7 bg-gray-700/80 text-white text-xl md:text-3xl font-bold rounded-full hover:bg-gray-600 hover:scale-105 transition-all duration-300 w-full md:w-auto min-w-[260px] border-4 border-gray-500/40 backdrop-blur-sm"
              style={{
                boxShadow: '0 10px 40px rgba(0,0,0,0.7), 0 0 0 1px rgba(255,255,255,0.1)'
              }}
            >
              I'm Under 18
            </button>
          </div>

          {/* Legal disclaimer */}
          <p className="text-xs md:text-base text-white/70 pt-3 md:pt-4 max-w-2xl mx-auto leading-relaxed" style={{
            textShadow: '0 2px 8px rgba(0,0,0,0.8)'
          }}>
            By clicking "Yes, I'm 18+", you confirm that you are of legal age to view mature romantic content in your jurisdiction.
          </p>
        </div>
      </div>
    </div>
  );
}

