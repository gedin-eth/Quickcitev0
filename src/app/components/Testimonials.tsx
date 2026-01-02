import { Star } from "lucide-react";

export function Testimonials() {
  const testimonials = [
    {
      quote: "I used to spend more time fixing citations than writing. QuickCite handled 90% of the work in one pass.",
      author: "Sarah J.",
      role: "Litigation Associate",
    },
    {
      quote: "The Table of Authorities saves our team hours on every filing. It paid for itself in the first month.",
      author: "Michael R.",
      role: "Appellate Specialist",
    },
    {
      quote: "We stopped arguing about supra and infra and started focusing on substance. Editing is now painless.",
      author: "Jessica L.",
      role: "Law Review EIC",
    }
  ];

  return (
    <section id="testimonials" className="py-16 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-white text-center mb-10">
          Trusted by Stressed Lawyers Everywhere
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, index) => (
            <div key={index} className="bg-slate-800/50 p-6 rounded-xl border border-slate-700/50 hover:bg-slate-800 transition-colors">
              <div className="flex gap-1 text-amber-400 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} fill="currentColor" />
                ))}
              </div>
              <p className="text-slate-300 text-sm leading-relaxed mb-4">
                "{t.quote}"
              </p>
              <div>
                <p className="font-bold text-white text-sm">{t.author}</p>
                <p className="text-xs text-slate-500">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
