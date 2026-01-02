import { motion } from "motion/react";
import { Clock, BookOpen, AlertCircle, Zap, ShieldCheck, Smile } from "lucide-react";

export function ProblemSolution() {
  return (
    <section className="py-16 bg-slate-900 border-y border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16">
          
          {/* The Problem */}
          <div className="space-y-6">
             <div className="mb-6">
                <h2 className="text-2xl font-bold text-white mb-2">The Struggle</h2>
                <p className="text-slate-400">Why legal writing feels like punishment.</p>
             </div>
             
             <div className="space-y-4">
                <div className="bg-slate-800/50 p-5 rounded-xl border border-red-500/10 hover:border-red-500/20 transition-colors">
                   <div className="flex gap-4">
                      <div className="bg-red-500/10 p-2 h-fit rounded-lg">
                         <Clock className="w-5 h-5 text-red-400" />
                      </div>
                      <div>
                         <h3 className="font-semibold text-red-200 mb-1">Endless Grunt Work</h3>
                         <p className="text-sm text-slate-400 leading-relaxed">
                           You draft strong arguments, then lose an entire night to manual citations and fixing broken TOAs.
                         </p>
                      </div>
                   </div>
                </div>

                <div className="bg-slate-800/50 p-5 rounded-xl border border-red-500/10 hover:border-red-500/20 transition-colors">
                   <div className="flex gap-4">
                      <div className="bg-red-500/10 p-2 h-fit rounded-lg">
                         <BookOpen className="w-5 h-5 text-red-400" />
                      </div>
                      <div>
                         <h3 className="font-semibold text-red-200 mb-1">Rule Fatigue</h3>
                         <p className="text-sm text-slate-400 leading-relaxed">
                           Every new issue sends you back into dense Bluebook rules and paywalled guides.
                         </p>
                      </div>
                   </div>
                </div>

                <div className="bg-slate-800/50 p-5 rounded-xl border border-red-500/10 hover:border-red-500/20 transition-colors">
                   <div className="flex gap-4">
                      <div className="bg-red-500/10 p-2 h-fit rounded-lg">
                         <AlertCircle className="w-5 h-5 text-red-400" />
                      </div>
                      <div>
                         <h3 className="font-semibold text-red-200 mb-1">Fear of Errors</h3>
                         <p className="text-sm text-slate-400 leading-relaxed">
                           One wrong signal or format change can make you look careless to partners and judges.
                         </p>
                      </div>
                   </div>
                </div>
             </div>
          </div>

          {/* The Solution */}
          <div className="space-y-6 relative">
             <div className="hidden lg:block absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-slate-700 to-transparent -ml-8"></div>
             
             <div className="mb-6">
                <h2 className="text-2xl font-bold text-white mb-2">The Solution</h2>
                <p className="text-slate-400">QuickCite turns chaos into one click.</p>
             </div>

             <div className="space-y-4">
                <div className="bg-blue-900/10 p-5 rounded-xl border border-blue-500/20 hover:border-blue-500/30 transition-colors">
                   <div className="flex gap-4">
                      <div className="bg-blue-500/10 p-2 h-fit rounded-lg">
                         <Zap className="w-5 h-5 text-blue-400" />
                      </div>
                      <div>
                         <h3 className="font-semibold text-blue-100 mb-1">Done in 60 Seconds</h3>
                         <p className="text-sm text-slate-400 leading-relaxed">
                           Click once, let QuickCite propose everything, and spend your time sharpening arguments.
                         </p>
                      </div>
                   </div>
                </div>

                <div className="bg-blue-900/10 p-5 rounded-xl border border-blue-500/20 hover:border-blue-500/30 transition-colors">
                   <div className="flex gap-4">
                      <div className="bg-blue-500/10 p-2 h-fit rounded-lg">
                         <ShieldCheck className="w-5 h-5 text-blue-400" />
                      </div>
                      <div>
                         <h3 className="font-semibold text-blue-100 mb-1">Confident Compliance</h3>
                         <p className="text-sm text-slate-400 leading-relaxed">
                           Citations are consistent and court-ready, with Bluebook and local rules applied automatically.
                         </p>
                      </div>
                   </div>
                </div>

                <div className="bg-blue-900/10 p-5 rounded-xl border border-blue-500/20 hover:border-blue-500/30 transition-colors">
                   <div className="flex gap-4">
                      <div className="bg-blue-500/10 p-2 h-fit rounded-lg">
                         <Smile className="w-5 h-5 text-blue-400" />
                      </div>
                      <div>
                         <h3 className="font-semibold text-blue-100 mb-1">Sanity Restored</h3>
                         <p className="text-sm text-slate-400 leading-relaxed">
                           Partners see cleaner drafts earlier. Juniors aren’t stuck doing cleanup until 3 a.m.
                         </p>
                      </div>
                   </div>
                </div>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
}
