"use client"

import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"
import { AnimatedBackground } from "@/components/AnimatedBackground"
import { useAudio } from "@/context/AudioContext"

export default function RoleSelection() {
  const router = useRouter();
  const [selectedRole, setSelectedRole] = useState<string | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const { isMuted } = useAudio();

  if (typeof window !== "undefined" && selectedRole) {
    sessionStorage.setItem("selectedRole", JSON.stringify(selectedRole));
  }

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

  const roles = [
    {
      title: "Engineer",
      emoji: "👨‍💻"
    },
    {
      title: "Non-Engineer",
      emoji: "👥"
    },
  ]

  const handleRoleSelect = (role: string) => {
    setSelectedRole(role)
    setTimeout(() => {
      router.replace("/set")
    }, 100)
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
          <motion.h2 className="text-4xl font-bold text-center text-gray-800 mb-8" variants={itemVariants}>Select Your Role</motion.h2>
          <motion.p className="text-center text-gray-600 mb-8" variants={itemVariants}>
            Choose the option that best describes you.
          </motion.p>
          <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-6" variants={containerVariants}>
            {roles.map((role) => (
              <motion.div key={role.title} variants={itemVariants}>
                <motion.div
                  whileHover={{
                    scale: 1.03,
                    transition: { duration: 0.2 },
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button
                    onClick={() => handleRoleSelect(role.title)}
                    className="w-full py-8 text-lg font-semibold flex flex-row items-center justify-center space-y-2 bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white transition-all duration-300 ease-in-out transform hover:shadow-lg"
                  >
                    <span className="text-2xl" role="img" aria-label={role.title}>
                      {role.emoji}
                    </span>
                    <span>{role.title}</span>
                  </Button>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Hidden Audio Element */}
      <audio ref={audioRef} src="./voiceover/role.mp3" preload="auto" />
    </main>
  )
}