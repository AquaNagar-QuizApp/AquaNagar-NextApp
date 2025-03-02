"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import type { QuizSetName } from "@/types"
import { JSX, useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { AnimatedBackground } from "@/components/AnimatedBackground"

export default function SetSelection(): JSX.Element {
  const router = useRouter();
  // const quizSets: QuizSetName[] = ["Set 1", "Set 2", "Set 3", "Set 4"]

  const missionNames: Record<QuizSetName, string> = {
    "Set 1": "🌊 Ripple Quest",
    "Set 2": "⚡ Current Challenge",
    "Set 3": "🌪️ Tidal Trials",
    "Set 4": "🏆 Aqua Conqueror"
  };

  const quizSets: QuizSetName[] = Object.keys(missionNames) as QuizSetName[];

  // State to store completed sets
  const [completedSets, setCompletedSets] = useState<string[]>([]);

  const onSelect = (set: QuizSetName) => {
    // setSelectedSet(set)
    setTimeout(() => {
      router.push(`/spinwheel?set=${encodeURIComponent(set)}`)
    }, 100)
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    }
  }

  // Retrieve sessionStorage data on mount
  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedData = sessionStorage.getItem("completedSets");
      if (storedData) {
        setCompletedSets(JSON.parse(storedData));
        console.log("Completed Sets:", storedData);
      }
    }
  }, []);

  return (
    <main className="min-h-screen relative overflow-hidden">
      <AnimatedBackground />
      <div className="relative z-10 h-screen flex flex-col items-center justify-center">
        <motion.div
          className="relative bg-white/20 backdrop-blur-md rounded-xl shadow-lg p-8 mb-4"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.h2 className="text-4xl font-bold text-center text-gray-800 mb-8" variants={itemVariants}>
            Take the Plunge: Water Missions Await!
          </motion.h2>
          {/* <motion.p className="text-center text-gray-600 mb-8" variants={itemVariants}>
            Choose the option that best describes you.
          </motion.p> */}
          <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-8" variants={containerVariants}>
            {quizSets.map((set) => {
              const isCompleted = completedSets.includes(set);
              const missionName = missionNames[set];

              return (
                <motion.div key={set} variants={itemVariants}>
                  <motion.div
                  // bg-blue-600 hover:bg-blue-700 transition-all duration-300 p-6 rounded-lg shadow-lg cursor-pointer transform hover:scale-105 text-white h-full
                    className={`px-6 py-2 rounded-lg font-semibold backdrop-blur-lg ${isCompleted
                      ? "bg-gray-400 text-gray-700 cursor-not-allowed" // Disabled state
                      : "bg-[rgb(2_132_199)] hover:bg-[rgb(3_105_161)] transition-all duration-300 transform hover:scale-105 text-white"
                      }`}
                    whileHover={isCompleted ? {} : { scale: 1.05, transition: { duration: 0.2 } }}
                    whileTap={isCompleted ? {} : { scale: 0.95 }}
                  >
                    <Button onClick={() => onSelect(set)} 
                    className="w-full h-full py-8 text-lg font-semibold" 
                    disabled={isCompleted}>
                      {/* {set} */}
                      {isCompleted ? `✅ ${missionName} (Completed)` : missionName}
                    </Button>
                  </motion.div>
                </motion.div>
              )
            }
            )}
          </motion.div>
        </motion.div>
      </div>
    </main>
  )
}
