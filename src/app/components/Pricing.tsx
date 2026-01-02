import { Check } from "lucide-react";

interface PricingProps {
  onOpenModal: () => void;
}

export function Pricing({ onOpenModal }: PricingProps) {
  return (
    <section id="pricing" className="py-16 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {/* Associate Plan */}
          <div className="bg-slate-900 rounded-xl border border-slate-800 p-6 flex flex-col">
            <div className="mb-4">
              <h3 className="text-xl font-bold text-white">Associate Plan</h3>
              <p className="text-slate-400 text-xs">For individual lawyers.</p>
            </div>
            
            <div className="flex-1 space-y-3 mb-6">
              {[
                "Unlimited generations",
                "Automatic TOA",
                "Word & Docs plugins",
              ].map((feature, i) => (
                <div key={i} className="flex items-center gap-2">
                  <Check size={14} className="text-blue-500" />
                  <span className="text-slate-300 text-sm">{feature}</span>
                </div>
              ))}
            </div>

            <button 
              onClick={onOpenModal}
              className="w-full bg-slate-800 hover:bg-slate-700 text-white py-3 rounded-lg font-medium text-sm transition-colors border border-slate-700"
            >
              Request Access
            </button>
          </div>

          {/* Team Plan */}
          <div className="bg-blue-900/10 rounded-xl border border-blue-500/30 p-6 flex flex-col relative">
             <div className="absolute top-0 right-0 bg-blue-600 text-white text-[10px] font-bold px-2 py-1 rounded-bl-lg rounded-tr-lg">
              POPULAR
            </div>
            <div className="mb-4">
              <h3 className="text-xl font-bold text-white">Team Plan</h3>
              <p className="text-slate-400 text-xs">For firms and law reviews.</p>
            </div>
            
            <div className="flex-1 space-y-3 mb-6">
              {[
                "Everything in Associate",
                "Team billing",
                "Custom court rules",
                "Priority support",
              ].map((feature, i) => (
                <div key={i} className="flex items-center gap-2">
                  <Check size={14} className="text-blue-400" />
                  <span className="text-slate-200 text-sm">{feature}</span>
                </div>
              ))}
            </div>

            <button 
              onClick={onOpenModal}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-medium text-sm transition-colors"
            >
              Request Access
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
