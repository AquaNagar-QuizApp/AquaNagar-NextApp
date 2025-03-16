"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import type { QuizSetName } from "@/types"
import { JSX, useEffect, useRef, useState } from "react"
import { useRouter } from "next/navigation"
import { AnimatedBackground } from "@/components/AnimatedBackground"
import { useAudio } from "@/context/AudioContext"

export default function SetSelection(): JSX.Element {
  const router = useRouter()
  //const quizSets: QuizSetName[] = ["Set 1", "Set 2", "Set 3", "Set 4"]
  const apiBaseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

  const audioRef = useRef<HTMLAudioElement | null>(null);
  const { isMuted } = useAudio();

  useEffect(() => {
    const audio = audioRef.current;

    // Play audio if not muted
    if (audio) {
      if (!isMuted && audio.paused) {
        audio.play();
      }
      audio.muted = isMuted; // Just mute/unmute without stopping
    }
  }, [isMuted]);

  // Ensure client-side rendering for dynamic content
  useEffect(() => {
    // Play audio if not greeted
    if (!isMuted && audioRef.current) {
      audioRef.current.play();
    }

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0; // Reset audio on unmount
      }
    };
  }, []);

  // State to store completed sets
  const [completedSets, setCompletedSets] = useState<string[]>([]);
  // const [quizSets, setQuizSets] = useState<QuizSetName[]>([]);
  const [quizSets, setQuizSets] = useState<{ setId: number; setName: string; missionName: string; isCompleted: boolean }[]>([]);

  const handleSetSelection = (setId: number, setName: string) => {
    if (typeof window !== "undefined") {
      // const setNumber = set.replace(/\D/g, ""); // Removes all non-numeric characters
      sessionStorage.setItem("currentSet", JSON.stringify(setId));
    }
    // setSelectedSet(set)
    setTimeout(() => {
      router.replace(`/spinwheel?set=${encodeURIComponent(setName)}`);
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

    const fetchQuizSets = async () => {
      try {
        let responseUri: string = "";
        if (typeof window !== "undefined") {
          const userId = sessionStorage.getItem("userID");
          const roleId = sessionStorage.getItem("roleID");
          responseUri = `${apiBaseUrl}/api/Sets/user/${userId}/role/${roleId}`
        }
        const response = await fetch(responseUri);
        // const data = await response.json();
        // const setNames = data.map((set: { setId: number; setName: string; isCompleted: boolean }) => set.setName);
        const sets: { setId: number; setName: string; isCompleted: boolean }[] = await response.json();

        const missionNames: Record<string, string> = {
          "Set 1": "🌊 Ripple Quest",
          "Set 2": "⚡ Current Challenge",
          "Set 3": "🌪️ Tidal Trials",
          "Set 4": "🏆 Aqua Conqueror"
        };
        
        const quizSets = sets.map(set => ({
          ...set,
          missionName: missionNames[set.setName] || ""
        }));

        setQuizSets(quizSets); // Assuming API returns an array of strings
      } catch (error) {
        console.error("Error fetching quiz sets:", error);
      }
    };

    fetchQuizSets();
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
          <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-8" variants={containerVariants}>
            {quizSets.map((set) => {
              return (
                <motion.div key={set.setId} variants={itemVariants}>
                  <motion.div
                    className={`px-6 py-2 rounded-lg font-semibold backdrop-blur-lg ${set.isCompleted
                      ? "bg-gray-400 text-gray-700 cursor-not-allowed" // Disabled state
                      : "bg-blue-700 text-white"
                      }`}
                    whileHover={set.isCompleted ? {} : { scale: 1.05, transition: { duration: 0.2 } }}
                    whileTap={set.isCompleted ? {} : { scale: 0.95 }}
                  >
                    <Button onClick={() => handleSetSelection(set.setId, set.setName)} className="w-full h-full py-8 text-lg font-semibold" disabled={set.isCompleted}>
                      {/* {set} */}
                      {set.isCompleted ? `${set.missionName} (Completed) ✅` : set.missionName}
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
