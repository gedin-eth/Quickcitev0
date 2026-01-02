import { ArrowRight } from "lucide-react";

interface FinalCTAProps {
  onOpenModal: () => void;
}

export function FinalCTA({ onOpenModal }: FinalCTAProps) {
  return (
    <section className="py-16 bg-blue-600 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 tracking-tight">
          Never Lose Another Night to Bluebook
        </h2>
        
        <p className="text-blue-100 text-lg mb-8 leading-relaxed max-w-2xl mx-auto">
          Every hour you spend fixing commas is an hour you’re not sharpening your arguments. QuickCite turns citation work into a one‑minute step.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
          <button 
            onClick={onOpenModal}
            className="w-full sm:w-auto bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-xl font-bold text-lg transition-colors shadow-xl"
          >
            Get Early Access
          </button>
          <button className="w-full sm:w-auto bg-blue-700 text-white hover:bg-blue-800 px-8 py-4 rounded-xl font-semibold text-lg transition-colors border border-blue-500">
            Schedule a Demo
          </button>
        </div>
        
        <p className="text-blue-200 text-sm">
          No long‑term commitment. Try it on a real brief and decide if it earns its place in your workflow.
        </p>
      </div>
    </section>
  );
}
