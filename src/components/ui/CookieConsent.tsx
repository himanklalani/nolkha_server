'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

export function CookieConsent() {
  const [show, setShow] = useState(false);
  const [view, setView] = useState<'banner' | 'preferences'>('banner');
  
  const [preferences, setPreferences] = useState({
    functional: true,
    analytics: true
  });

  useEffect(() => {
    const consent = localStorage.getItem('nolkha_cookie_consent');
    if (!consent) {
      const timer = setTimeout(() => setShow(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const acceptAll = () => {
    localStorage.setItem('nolkha_cookie_consent', JSON.stringify({
      strictlyNecessary: true,
      functional: true,
      analytics: true
    }));
    setShow(false);
  };

  const savePreferences = () => {
    localStorage.setItem('nolkha_cookie_consent', JSON.stringify({
      strictlyNecessary: true,
      ...preferences
    }));
    setShow(false);
  };

  const togglePreference = (key: 'functional' | 'analytics') => {
    setPreferences(prev => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <AnimatePresence>
      {show && (
        <div className={`fixed z-[100] pointer-events-none flex ${
          view === 'preferences' ? 'inset-0 items-center justify-center p-4 sm:p-6' : 'bottom-6 left-6 right-6 md:left-6 md:right-auto'
        }`}>
          {view === 'preferences' && (
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/20 pointer-events-auto backdrop-blur-sm"
              onClick={() => setView('banner')}
            />
          )}
          
          <motion.div
            initial={{ y: 50, opacity: 0, scale: 0.98 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 50, opacity: 0, scale: 0.98 }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className={`pointer-events-auto w-full bg-white/95 backdrop-blur-md shadow-[0_20px_40px_rgba(0,0,0,0.1)] sm:rounded-2xl border border-black/5 overflow-hidden relative z-10 ${
              view === 'preferences' ? 'max-w-2xl' : 'max-w-[420px]'
            }`}
          >
            {view === 'banner' ? (
              <div className="p-5 sm:p-6 flex flex-col gap-5">
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 shrink-0" />
                  <p className="text-[11px] font-sans leading-relaxed text-muted">
                    We utilize cookies to optimize performance. By proceeding, you consent to our data usage. See our <Link href="/privacy" className="text-secondary border-b border-black/20 hover:border-secondary transition-colors font-semibold">Privacy Protocol</Link>.
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setView('preferences')}
                    className="flex-1 px-4 py-2.5 text-[10px] uppercase tracking-widest font-bold font-sans rounded-full border border-black/10 text-secondary hover:bg-black/5 transition-colors text-center"
                  >
                    Manage Config
                  </button>
                  <button
                    onClick={acceptAll}
                    className="flex-1 px-4 py-2.5 text-[10px] uppercase tracking-widest font-bold font-sans text-white rounded-full transition-all hover:bg-secondary/90 bg-secondary shadow-md text-center"
                  >
                    Accept All
                  </button>
                </div>
              </div>
            ) : (
              <div className="flex flex-col h-full max-h-[85vh]">
                <div className="p-6 md:p-8 border-b border-black/5 flex items-center justify-between bg-white shrink-0">
                  <div className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                    <h3 className="font-serif font-bold text-xl text-secondary tracking-tight">Configuration Matrix</h3>
                  </div>
                  <button onClick={() => setView('banner')} className="text-xs uppercase tracking-widest font-bold font-sans text-muted hover:text-secondary transition-colors">
                    Close
                  </button>
                </div>
                
                <div className="p-6 md:p-8 overflow-y-auto bg-black/[0.02] space-y-4">
                  {/* Strictly Necessary */}
                  <div className="bg-white p-6 rounded-xl border border-black/5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                    <div className="flex-1">
                      <h4 className="font-serif text-lg font-bold mb-2 text-secondary">01. Core Infrastructure</h4>
                      <p className="text-sm font-sans text-muted leading-relaxed">Fundamental cookies required for secure site operations and routing. This cannot be disabled.</p>
                    </div>
                    <div className="relative inline-flex h-6 w-11 items-center rounded-full bg-secondary/30 shrink-0 cursor-not-allowed">
                      <span className="translate-x-6 inline-block h-4 w-4 transform rounded-full bg-white" />
                    </div>
                  </div>

                  {/* Functional */}
                  <div className="bg-white p-6 rounded-xl border border-black/5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                    <div className="flex-1">
                      <h4 className="font-serif text-lg font-bold mb-2 text-secondary">02. Enhanced Functionality</h4>
                      <p className="text-sm font-sans text-muted leading-relaxed">Permits the platform to remember your configurations and aesthetic preferences.</p>
                    </div>
                    <button 
                      onClick={() => togglePreference('functional')}
                      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors shrink-0 ${preferences.functional ? 'bg-secondary' : 'bg-black/10'}`}
                    >
                      <span className={`${preferences.functional ? 'translate-x-6' : 'translate-x-1'} inline-block h-4 w-4 transform rounded-full bg-white transition-transform duration-300`} />
                    </button>
                  </div>

                  {/* Analytics */}
                  <div className="bg-white p-6 rounded-xl border border-black/5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                    <div className="flex-1">
                      <h4 className="font-serif text-lg font-bold mb-2 text-secondary">03. Telemetry & Analytics</h4>
                      <p className="text-sm font-sans text-muted leading-relaxed">Provides us with structural data on how visitors interact with our interfaces to optimize performance.</p>
                    </div>
                    <button 
                      onClick={() => togglePreference('analytics')}
                      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors shrink-0 ${preferences.analytics ? 'bg-secondary' : 'bg-black/10'}`}
                    >
                      <span className={`${preferences.analytics ? 'translate-x-6' : 'translate-x-1'} inline-block h-4 w-4 transform rounded-full bg-white transition-transform duration-300`} />
                    </button>
                  </div>
                </div>

                <div className="p-6 md:p-8 border-t border-black/5 bg-white flex flex-col sm:flex-row items-center justify-end gap-4 shrink-0">
                  <button
                    onClick={savePreferences}
                    className="w-full sm:w-auto px-6 py-3 text-xs uppercase tracking-widest font-bold font-sans rounded-full border border-black/10 text-secondary hover:bg-black/5 transition-colors"
                  >
                    Save Config
                  </button>
                  <button
                    onClick={acceptAll}
                    className="w-full sm:w-auto px-8 py-3 text-xs uppercase tracking-widest font-bold font-sans text-white rounded-full transition-all hover:bg-secondary/90 bg-secondary"
                  >
                    Accept All
                  </button>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
