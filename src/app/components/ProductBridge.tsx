import { motion } from "motion/react";
import { Upload, Zap, Eye, Play } from "lucide-react";

interface ProductBridgeProps {
  onOpenModal: () => void;
}

export function ProductBridge({ onOpenModal }: ProductBridgeProps) {
  const steps = [
    {
      icon: <Upload className="w-5 h-5 text-blue-400" />,
      title: "1. Upload Draft & Sources",
      description: "Attach your brief and source PDFs/links."
    },
    {
      icon: <Zap className="w-5 h-5 text-blue-400" />,
      title: "2. Generate in One Click",
      description: "QuickCite creates citations and TOA instantly."
    },
    {
      icon: <Eye className="w-5 h-5 text-blue-400" />,
      title: "3. Review, Tweak & File",
      description: "Accept suggestions and export to Word."
    }
  ];

  return (
    <section id="how-it-works" className="py-16 bg-slate-950 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          
          <div className="flex-1">
            <span className="text-blue-400 font-semibold tracking-wider text-xs uppercase mb-2 block">How It Works</span>
            <h2 className="text-3xl font-bold text-white mb-6">
              Your One‑Minute <br />Bluebook Engine
            </h2>
            <p className="text-slate-400 text-base mb-8 leading-relaxed">
              QuickCite lives inside your drafting tools. It takes your brief and sources, then automatically generates, inserts, and formats Bluebook‑ and court‑compliant citations—plus a Table of Authorities—in seconds.
            </p>

            <div className="space-y-6">
              {steps.map((step, index) => (
                <div key={index} className="flex gap-4">
                  <div className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center flex-shrink-0 border border-slate-700">
                    {step.icon}
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white">{step.title}</h3>
                    <p className="text-sm text-slate-500">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <button 
               onClick={onOpenModal}
               className="mt-8 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-bold text-sm transition-all"
             >
               Request Early Access
             </button>
          </div>

          <div className="flex-1 w-full">
            <div className="relative rounded-2xl overflow-hidden bg-slate-800 aspect-video shadow-2xl border border-slate-800 group cursor-pointer">
              <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/10 transition-all">
                <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/20 group-hover:scale-110 transition-transform">
                  <Play className="w-6 h-6 text-white fill-current ml-1" />
                </div>
              </div>
              <img 
                src="https://images.unsplash.com/photo-1667430806405-70ef5bc4970f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b3JraW5nJTIwb24lMjBsYXB0b3AlMjBjbGVhbiUyMG1vZGVybiUyMGRlc2t8ZW58MXx8fHwxNzY3Mzg2NTI5fDA&ixlib=rb-4.1.0&q=80&w=800"
                alt="Product Demo"
                className="w-full h-full object-cover opacity-60"
              />
               <div className="absolute bottom-4 left-4 text-white">
                  <p className="font-bold text-sm">Watch QuickCite in Action</p>
                  <p className="text-slate-300 text-xs">1:24</p>
               </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
