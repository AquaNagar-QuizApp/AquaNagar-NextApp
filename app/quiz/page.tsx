"use client"

import { useRouter, useSearchParams } from "next/navigation"
import { motion } from "framer-motion"
import { AnimatedBackground } from "@/components/AnimatedBackground"
import { Quiz } from "@/components/Quiz"
import { QuizSet } from "@/types"

export default function QuizPage() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const stage: string | null = searchParams.get("stage")
  const quizSet =searchParams.get("set") as unknown as QuizSet;

  const handleQuizCompletion = (score: number): void => {
    router.push(
      `/certificate?stage=${encodeURIComponent(stage ?? "")}&set=${encodeURIComponent(JSON.stringify(quizSet)?? "")}&score=${score}`,
    )
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
          <h2 className="text-2xl font-semibold text-white mb-6 text-center">
            {stage} - {JSON.stringify(quizSet)}
          </h2>
          <Quiz quizSet={quizSet} onComplete={handleQuizCompletion} />
        </motion.div>
      </div>
    </main>
  )
}

