"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import { AnimatedBackground } from "@/components/AnimatedBackground";
import { QuizSelection } from "@/components/QuizSelection";
import type { QuizSetName } from "@/types";

export function QuizSelectionPageContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const stage: string | null = searchParams.get("stage");

  const handleQuizSelection = (quizSetName: QuizSetName): void => {
    if (stage) {
      router.push(`/quiz?stage=${encodeURIComponent(stage)}&set=${encodeURIComponent(quizSetName)}`);
    } else {
      console.error("Stage is missing");
    }
  };

  if (!stage) {
    return <div>Error: Missing stage information</div>;
  }

  return (
    <main className="min-h-screen relative overflow-hidden">
      <AnimatedBackground />
      <div className="relative z-10 h-screen flex flex-col items-center justify-center">
        <motion.div
          className="max-w-2xl w-full bg-white bg-opacity-20 backdrop-blur-lg rounded-xl p-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-semibold text-white mb-6 text-center">Select Quiz Set for {stage}</h2>
          <QuizSelection onSelect={handleQuizSelection} />
        </motion.div>
      </div>
    </main>
  );
}
