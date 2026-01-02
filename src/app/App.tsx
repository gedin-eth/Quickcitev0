import { useState } from "react";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { ProblemSolution } from "./components/ProblemSolution"; // Replaced Pain/Outcome
import { ProductBridge } from "./components/ProductBridge";
import { Testimonials } from "./components/Testimonials";
import { Pricing } from "./components/Pricing";
import { FAQ } from "./components/FAQ";
import { FinalCTA } from "./components/FinalCTA";
import { Footer } from "./components/Footer";
import { SignUpModal } from "./components/SignUpModal";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="bg-slate-950 min-h-screen font-sans selection:bg-blue-500/30 text-slate-200">
      <Header onOpenModal={openModal} />
      <main>
        <Hero onOpenModal={openModal} />
        <ProblemSolution />
        <ProductBridge onOpenModal={openModal} />
        <Testimonials />
        <Pricing onOpenModal={openModal} />
        <FAQ />
        <FinalCTA onOpenModal={openModal} />
      </main>
      <Footer />
      <SignUpModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
}

export default App;
