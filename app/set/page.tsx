"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import type { QuizSelectionProps, QuizSetName } from "@/types"
import { JSX } from "react"
import { useRouter } from "next/navigation"
import { AnimatedBackground } from "@/components/AnimatedBackground"

export default function SetSelection(): JSX.Element {
  const router = useRouter()
  const quizSets: QuizSetName[] = ["Set 1", "Set 2", "Set 3", "Set 4"]

  const onSelect = (set: QuizSetName) => {
    // setSelectedSet(set)
    setTimeout(() => {
      router.push("/game-map")
    }, 100)
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  }

  return (
    <main className="min-h-screen relative overflow-hidden">
      <AnimatedBackground />
      <div className="relative z-10 h-screen flex flex-col items-center justify-center">
        <motion.div
          className="relative bg-white bg-opacity-70 backdrop-blur-lg rounded-xl p-6 mb-4"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.h2 className="text-4xl font-bold text-center text-gray-800 mb-8" variants={itemVariants}>
            Choose a Quiz Set
          </motion.h2>
          {/* <motion.p className="text-center text-gray-600 mb-8" variants={itemVariants}>
            Choose the option that best describes you.
          </motion.p> */}
          <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-8" variants={containerVariants}>
            {quizSets.map((set) => (
              <motion.div key={set} variants={itemVariants}>
                <motion.div className="px-6 py-2 bg-blue-700 text-white rounded-lg font-semibold backdrop-blur-lg"
                  whileHover={{
                    scale: 1.05,
                    transition: { duration: 0.2 },
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button onClick={() => onSelect(set)} className="w-full h-full py-8 text-lg font-semibold">
                    {set}
                  </Button>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </main>
  )
}
