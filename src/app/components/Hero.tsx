import { motion } from "motion/react";
import { CheckCircle, ArrowRight } from "lucide-react";
import heroImage from "figma:asset/98780adf9a1cdea358527536ee4472760cd51661.png";

interface HeroProps {
  onOpenModal: () => void;
}

export function Hero({ onOpenModal }: HeroProps) {
  return (
    <section className="relative pt-24 pb-12 lg:pt-32 lg:pb-16 bg-slate-950 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-900 via-slate-950 to-slate-950 opacity-80" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-900/30 border border-blue-800 text-blue-300 text-xs font-medium mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              Accepting Early Access Users
            </div>
            
            <h1 className="text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight mb-4">
              Stop Letting Bluebook <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                Kill Your Will to Live
              </span>
            </h1>
            
            <p className="text-lg text-slate-400 mb-6 leading-relaxed max-w-xl">
              For litigators and law students drowning in citations. Turn your draft and sources into court‑compliant Bluebook citations and a Table of Authorities in under a minute.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 mb-8">
              <button 
                onClick={onOpenModal}
                className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-bold text-base transition-all shadow-lg shadow-blue-900/20 hover:shadow-blue-900/40"
              >
                Get Early Access
                <ArrowRight size={18} />
              </button>
            </div>
            
            <div className="space-y-2">
              {[
                "Turn hours of Bluebooking into a one‑minute pass",
                "Generate full citations, pincites, and TOA instantly",
                "Stop jumping between Bluebook and local rules"
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-2 text-slate-300 text-sm">
                  <CheckCircle className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
             <img 
              src={heroImage} 
              alt="QuickCite Interface" 
              className="w-full rounded-xl shadow-2xl border border-slate-800 bg-slate-900" 
             />
             
             {/* Floating Badge - Positioned slightly different for new image */}
             <div className="absolute -bottom-4 -left-4 bg-slate-800 p-3 rounded-xl shadow-xl border border-slate-700 flex items-center gap-3 animate-bounce-slow hidden sm:flex">
               <div className="bg-green-500/20 p-2 rounded-lg">
                 <CheckCircle className="text-green-400 w-5 h-5" />
               </div>
               <div>
                 <p className="text-sm font-bold text-slate-200">Court Ready</p>
                 <p className="text-[10px] text-slate-400">100% Compliant</p>
               </div>
             </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
