'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export const LandingPage: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-[#FFF8F0] text-gray-900 font-sans selection:bg-rose-200">
      {/* Hero Section with Full Background Image */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/backgrounds/hero-dream.jpg"
            alt="A dreamy golden age romance scene"
            fill
            className="object-cover"
            priority
            quality={90}
          />
          {/* Enhanced Gradient Overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/60 to-black/80" />
          {/* Additional vignette for extra contrast */}
          <div className="absolute inset-0 bg-radial-gradient" style={{
            background: 'radial-gradient(circle at center, transparent 0%, rgba(0,0,0,0.4) 100%)'
          }} />
        </div>

        {/* Hero Content */}
        <div 
          className={`relative z-10 px-6 py-20 max-w-5xl mx-auto text-center space-y-8 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h1 className="text-4xl md:text-7xl font-serif font-bold text-white leading-tight drop-shadow-2xl" style={{
            textShadow: '0 4px 20px rgba(0,0,0,0.8), 0 2px 4px rgba(0,0,0,0.9)'
          }}>
            Feel Like a Teenager Again
          </h1>
          
          <p className="text-2xl md:text-4xl text-white max-w-3xl mx-auto leading-relaxed font-light" style={{
            textShadow: '0 3px 15px rgba(0,0,0,0.9), 0 2px 4px rgba(0,0,0,0.8)'
          }}>
            For women over 65 who remember when romance meant something special.
            <br />
            <span className="italic text-rose-200 font-normal">Step back into the golden age of courtship, respect, and butterflies in your stomach.</span>
          </p>

          <div className="pt-12 flex flex-col items-center gap-6">
            <Link 
              href="/first-date/age-confirmation"
              className="px-16 py-7 bg-rose-600 text-white text-2xl font-semibold rounded-full shadow-2xl hover:bg-rose-700 hover:shadow-rose-500/50 hover:-translate-y-2 transition-all duration-300 w-full md:w-auto min-w-[320px] border-4 border-rose-300/30"
              style={{
                boxShadow: '0 10px 40px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.1)'
              }}
            >
              Click To Start Your First Date
            </Link>
            <p className="text-xl text-white font-medium" style={{
              textShadow: '0 2px 10px rgba(0,0,0,0.9)'
            }}>Completely Free • No Sign-Up Required</p>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce mt-16">
          <div className="w-8 h-12 border-2 border-white/70 rounded-full flex items-start justify-center p-2" style={{
            boxShadow: '0 2px 10px rgba(0,0,0,0.5)'
          }}>
            <div className="w-1.5 h-3 bg-white rounded-full" />
          </div>
        </div>
      </section>

      {/* Story Preview Gallery Section */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto space-y-16">
          <div 
            className={`text-center space-y-6 transition-all duration-1000 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <h2 className="text-5xl md:text-6xl font-serif font-bold text-gray-900">
              Your Evening Awaits
            </h2>
            <p className="text-2xl md:text-3xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Every moment is designed to make you feel cherished, admired, and swept away
            </p>
          </div>

          {/* Image Grid */}
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {/* First moment */}
            <div 
              className={`group relative overflow-hidden rounded-3xl shadow-2xl transition-all duration-700 delay-300 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              <div className="relative h-[500px]">
                <Image
                  src="/backgrounds/gallery-romantic-era.jpg"
                  alt="The romantic 1950s era"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                {/* Enhanced gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                <h3 className="text-3xl md:text-4xl font-serif font-bold mb-3" style={{
                  textShadow: '0 3px 15px rgba(0,0,0,0.9), 0 2px 4px rgba(0,0,0,0.8)'
                }}>The Golden Age</h3>
                <p className="text-xl text-white leading-relaxed" style={{
                  textShadow: '0 2px 10px rgba(0,0,0,0.9)'
                }}>
                  When romance meant hand-written letters, opened doors, and hearts that raced with anticipation
                </p>
              </div>
            </div>

            {/* Second moment */}
            <div 
              className={`group relative overflow-hidden rounded-3xl shadow-2xl transition-all duration-700 delay-400 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              <div className="relative h-[500px]">
                <Image
                  src="/backgrounds/gallery-promise.jpg"
                  alt="The promise of romance"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                {/* Enhanced gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                <h3 className="text-3xl md:text-4xl font-serif font-bold mb-3" style={{
                  textShadow: '0 3px 15px rgba(0,0,0,0.9), 0 2px 4px rgba(0,0,0,0.8)'
                }}>Thoughtful Gestures</h3>
                <p className="text-xl text-white leading-relaxed" style={{
                  textShadow: '0 2px 10px rgba(0,0,0,0.9)'
                }}>
                  Every word carefully chosen, every moment treasured, every gesture filled with meaning
                </p>
              </div>
            </div>

            {/* Third moment */}
            <div 
              className={`group relative overflow-hidden rounded-3xl shadow-2xl transition-all duration-700 delay-500 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              <div className="relative h-[500px]">
                <Image
                  src="/backgrounds/gallery-golden-drive.jpg"
                  alt="The perfect evening drive"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                {/* Enhanced gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                <h3 className="text-3xl md:text-4xl font-serif font-bold mb-3" style={{
                  textShadow: '0 3px 15px rgba(0,0,0,0.9), 0 2px 4px rgba(0,0,0,0.8)'
                }}>The Adventure</h3>
                <p className="text-xl text-white leading-relaxed" style={{
                  textShadow: '0 2px 10px rgba(0,0,0,0.9)'
                }}>
                  The open road, the wind in your hair, and the thrill of possibility
                </p>
              </div>
            </div>

            {/* Fourth moment */}
            <div 
              className={`group relative overflow-hidden rounded-3xl shadow-2xl transition-all duration-700 delay-600 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              <div className="relative h-[500px]">
                <Image
                  src="/backgrounds/gallery-moonlit-garden.jpg"
                  alt="Romantic moonlit garden"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                {/* Enhanced gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                <h3 className="text-3xl md:text-4xl font-serif font-bold mb-3" style={{
                  textShadow: '0 3px 15px rgba(0,0,0,0.9), 0 2px 4px rgba(0,0,0,0.8)'
                }}>Magical Moments</h3>
                <p className="text-xl text-white leading-relaxed" style={{
                  textShadow: '0 2px 10px rgba(0,0,0,0.9)'
                }}>
                  Those enchanted evenings when time stood still and anything felt possible
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="bg-gradient-to-br from-rose-50 to-amber-50 py-24 px-6">
        <div className="max-w-5xl mx-auto text-center space-y-12">
          <h2 className="text-5xl md:text-6xl font-serif font-bold text-gray-900 mb-4">
            They're Feeling 18 Again
          </h2>
          <p className="text-2xl text-gray-600 max-w-2xl mx-auto mb-12">
            Women over 65 are rediscovering the magic of first love
          </p>

          <div className="max-w-4xl mx-auto bg-white/80 backdrop-blur-sm p-12 md:p-16 rounded-3xl shadow-2xl border border-rose-100 relative">
            <div className="text-7xl text-rose-300 absolute top-8 left-8 font-serif leading-none">"</div>
            <p className="text-2xl md:text-3xl text-gray-800 italic relative z-10 font-serif leading-relaxed mb-6">
              I'm 72 years old and I haven't felt butterflies like this since I was a teenager. It's like being swept back to those wonderful evenings when romance was elegant, respectful, and thrilling. I feel young again.
            </p>
            <div className="text-xl font-semibold text-gray-900">— Margaret T., 72</div>
            <div className="text-lg text-gray-600 mt-2">Retired Teacher, Boston</div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 pt-8">
            {[
              { quote: "At 68, I thought those feelings were gone forever. This brought them rushing back.", author: "Dorothy R., 68" },
              { quote: "My book club is obsessed! We all feel like giddy schoolgirls again.", author: "Patricia M., 71" },
              { quote: "It reminded me of my late husband's courtship—so tender and genuine. I cried happy tears.", author: "Eleanor S., 74" },
            ].map((testimonial, i) => (
              <div key={i} className="bg-white/60 p-8 rounded-2xl shadow-lg border border-rose-100 hover:shadow-xl transition-shadow">
                <p className="text-lg text-gray-700 italic mb-4 leading-relaxed">"{testimonial.quote}"</p>
                <p className="text-base font-semibold text-gray-900">— {testimonial.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto space-y-16">
          <div className="text-center space-y-6">
            <h2 className="text-5xl md:text-6xl font-serif font-bold text-gray-900">Simple & Delightful</h2>
            <p className="text-2xl md:text-3xl text-gray-600 max-w-3xl mx-auto">
              No complicated technology. Just click and enjoy the journey.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              { 
                step: "1", 
                title: "Click to Begin", 
                desc: "One button starts your romantic evening. No accounts, no passwords, no hassle." 
              },
              { 
                step: "2", 
                title: "Read & Choose", 
                desc: "Beautiful prose brings the story to life. Make simple choices to guide your journey." 
              },
              { 
                step: "3", 
                title: "Feel the Magic", 
                desc: "Experience the warmth, excitement, and tender romance of a golden age courtship." 
              },
            ].map((item, i) => (
              <div key={i} className="text-center space-y-6 p-8 bg-gradient-to-br from-rose-50 to-white rounded-3xl border border-rose-100 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <div className="mx-auto w-20 h-20 bg-rose-600 rounded-full flex items-center justify-center text-white font-bold text-4xl font-serif shadow-lg">
                  {item.step}
                </div>
                <h3 className="text-3xl font-serif font-bold text-gray-900">{item.title}</h3>
                <p className="text-xl text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section with Image */}
      <section className="relative min-h-[600px] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/backgrounds/cta-evening-begins.jpg"
            alt="Your evening awaits"
            fill
            className="object-cover"
            quality={90}
          />
          {/* Enhanced gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-rose-900/85 via-rose-900/75 to-rose-950/95" />
          {/* Additional vignette */}
          <div className="absolute inset-0" style={{
            background: 'radial-gradient(circle at center, transparent 0%, rgba(0,0,0,0.5) 100%)'
          }} />
        </div>

        {/* CTA Content */}
        <div className="relative z-10 max-w-4xl mx-auto text-center space-y-10 px-6 py-20">
          <h2 className="text-5xl md:text-7xl font-serif font-bold text-white leading-tight" style={{
            textShadow: '0 4px 20px rgba(0,0,0,0.9), 0 2px 4px rgba(0,0,0,0.9)'
          }}>
            Your Perfect Evening Awaits
          </h2>
          <p className="text-2xl md:text-4xl text-white font-light leading-relaxed" style={{
            textShadow: '0 3px 15px rgba(0,0,0,0.9), 0 2px 4px rgba(0,0,0,0.8)'
          }}>
            Remember what it felt like to have butterflies?
            <br />
            <span className="italic text-rose-200 font-normal">That feeling is just one click away.</span>
          </p>
          <div className="pt-8">
            <Link 
              href="/first-date/age-confirmation"
              className="inline-block px-16 py-8 bg-white text-rose-900 text-3xl font-bold rounded-full hover:bg-rose-50 hover:scale-105 transition-all duration-300 border-4 border-rose-200/50"
              style={{
                boxShadow: '0 10px 40px rgba(0,0,0,0.7), 0 0 0 1px rgba(255,255,255,0.2)'
              }}
            >
              Begin Your Journey
            </Link>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="bg-rose-950 text-rose-200 py-16 px-6 text-center">
        <p className="text-lg">&copy; 2025 All rights reserved.</p>
        <p className="mt-3 text-xl italic">Designed with love for the golden age of romance.</p>
      </footer>
    </div>
  );
};

