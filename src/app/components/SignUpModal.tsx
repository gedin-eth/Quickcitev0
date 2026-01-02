import { motion, AnimatePresence } from "motion/react";
import { X, CheckCircle, Loader2 } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";

interface SignUpModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface FormData {
  name: string;
  email: string;
  role: string;
  jurisdiction: string;
}

export function SignUpModal({ isOpen, onClose }: SignUpModalProps) {
  const [step, setStep] = useState<"form" | "success">("form");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setStep("success");
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-slate-950/80 backdrop-blur-sm z-[100] flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-slate-900 border border-slate-800 rounded-2xl w-full max-w-md shadow-2xl overflow-hidden relative"
            >
              <button
                onClick={onClose}
                className="absolute top-4 right-4 text-slate-400 hover:text-white transition-colors"
              >
                <X size={20} />
              </button>

              <div className="p-8">
                {step === "form" ? (
                  <>
                    <div className="text-center mb-6">
                      <h3 className="text-2xl font-bold text-white mb-2">Get Early Access</h3>
                      <p className="text-slate-400 text-sm">
                        Join the waitlist for QuickCite and start automating your citations.
                      </p>
                    </div>

                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-slate-300 mb-1">Full Name</label>
                        <input
                          {...register("name", { required: true })}
                          className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-2 text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                          placeholder="Jane Doe"
                        />
                        {errors.name && <span className="text-red-400 text-xs mt-1">Name is required</span>}
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-slate-300 mb-1">Work Email</label>
                        <input
                          {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
                          className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-2 text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                          placeholder="jane@lawfirm.com"
                        />
                        {errors.email && <span className="text-red-400 text-xs mt-1">Valid email is required</span>}
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-slate-300 mb-1">Role</label>
                        <select
                          {...register("role", { required: true })}
                          className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-2 text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                        >
                          <option value="">Select your role</option>
                          <option value="Associate">Associate</option>
                          <option value="Partner">Partner</option>
                          <option value="Law Student">Law Student</option>
                          <option value="Paralegal">Paralegal/Staff</option>
                          <option value="Other">Other</option>
                        </select>
                        {errors.role && <span className="text-red-400 text-xs mt-1">Role is required</span>}
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-slate-300 mb-1">Primary Jurisdiction</label>
                        <input
                          {...register("jurisdiction")}
                          className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-2 text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                          placeholder="e.g. SDNY, CA State, etc."
                        />
                      </div>

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-xl transition-all shadow-lg shadow-blue-900/20 mt-2 flex items-center justify-center gap-2"
                      >
                        {isSubmitting ? (
                          <>
                            <Loader2 className="w-5 h-5 animate-spin" />
                            Processing...
                          </>
                        ) : (
                          "Request Access"
                        )}
                      </button>
                    </form>
                  </>
                ) : (
                  <div className="text-center py-8">
                    <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-4 border border-green-500/20">
                      <CheckCircle className="w-8 h-8 text-green-500" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">You're on the list!</h3>
                    <p className="text-slate-400 mb-6">
                      We've received your request. Check your email for next steps.
                    </p>
                    <button
                      onClick={onClose}
                      className="bg-slate-800 hover:bg-slate-700 text-white font-medium px-6 py-2 rounded-lg transition-colors"
                    >
                      Close
                    </button>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
