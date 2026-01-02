import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export function FAQ() {
  const faqs = [
    {
      q: "Will this handle my court’s local rules?",
      a: "Yes. QuickCite is trained on the Bluebook as well as local rules for major federal and state jurisdictions."
    },
    {
      q: "Can I still edit citations manually?",
      a: "Absolutely. QuickCite inserts citations as editable text. You maintain full control."
    },
    {
      q: "Is my brief and citation data secure?",
      a: "Yes. We use bank-grade encryption and do not train our models on your proprietary legal arguments."
    },
     {
      q: "Does it work for law review?",
      a: "Yes, we support both practitioner (briefs) and academic (law review) styles."
    }
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-16 bg-slate-900 border-t border-slate-800">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        
        <div className="grid md:grid-cols-2 gap-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-slate-800 rounded-lg p-4 border border-slate-700">
                <h4 className="font-semibold text-slate-200 text-sm mb-2">{faq.q}</h4>
                <p className="text-slate-400 text-xs leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
