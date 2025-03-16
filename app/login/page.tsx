"use client"
import { useRouter } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { AnimatedBackground } from "@/components/AnimatedBackground"
import { Login } from "@/components/Login"
import { User } from "@/types"
import { useState } from "react"
import { useAudio } from "@/context/AudioContext"

export default function LoginPage() {
  const [showInitialContent, setShowInitialContent] = useState(true)
  const [showWaves, setShowWaves] = useState(false)
  const [waveCount, setWaveCount] = useState(0)
  const router = useRouter()
  const { isMuted, playBackgroundMusic } = useAudio();

  const handleLogin = (userData: User) => {
    setShowInitialContent(false);
    setShowWaves(true);
    let count = 0;

    if (!isMuted) {
      playBackgroundMusic();
    }

    const interval = setInterval(() => {
      setWaveCount((prev) => prev + 1);
      count++;

      if (count === 5) {
        clearInterval(interval);
        setTimeout(() => {
          router.replace("/intro")
        }, 1500) // Reduced wait time to 1.5 seconds before navigating
      }
    }, 600) // Increased wave count every 600ms (faster than before)

    if (typeof window !== 'undefined') {
      sessionStorage.setItem("isLoggedIn", "true")
      sessionStorage.setItem("currentUser", JSON.stringify(userData))
    }
  }

  return (
    <main className="min-h-screen relative overflow-auto">
      <AnimatedBackground />
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 py-6">
        {showInitialContent && (
          <motion.div
            className="max-w-md w-full bg-white bg-opacity-30 backdrop-blur-lg rounded-xl p-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl font-semibold text-white mb-6 text-center">Login</h2>
            <Login onLogin={handleLogin} />
          </motion.div>
        )}

        {/* Wave animation after click */}
        <AnimatePresence>
          {showWaves && (
            <motion.div
              className="flex flex-col items-center justify-center text-white text-2xl font-semibold"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              transition={{ duration: 0.5 }}
            >
              {/* <AudioPlayer/> */}
              <div className="whitespace-nowrap">{"🌀".repeat(waveCount)}</div>
              {waveCount <= 5 && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} className="mt-2">
                  Adventure awaits...
                </motion.div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </main>
  )
}
