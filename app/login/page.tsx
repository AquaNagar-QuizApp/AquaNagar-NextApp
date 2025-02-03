"use client"
import { useRouter } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { AnimatedBackground } from "@/components/AnimatedBackground"
import { Login } from "@/components/Login"
import { User } from "@/types"
import { useState } from "react"

export default function LoginPage() {
  const [showInitialContent, setShowInitialContent] = useState(true)
  const [showWaves, setShowWaves] = useState(false)
  const [waveCount, setWaveCount] = useState(0)
  const router = useRouter()

  const handleLogin = (userData: User) => {
    setShowInitialContent(false)
    setShowWaves(true)
    let count = 0
 
    const interval = setInterval(() => {
      setWaveCount((prev) => prev + 1)
      count++
 
      if (count === 5) {
        clearInterval(interval)
        setTimeout(() => {
          router.push("/role")
        }, 1500) // Reduced wait time to 1.5 seconds before navigating
      }
    }, 600) // Increased wave count every 600ms (faster than before)

    console.log("User logged in:", userData)
  }

  return (
    <main className="min-h-screen relative overflow-hidden">
      <AnimatedBackground />
      <div className="relative z-10 h-screen flex flex-col items-center justify-center">
        {showInitialContent && (
          <motion.div
            className="max-w-md w-full bg-white bg-opacity-20 backdrop-blur-lg rounded-xl p-8"
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
              className="flex items-center justify-center space-x-4 text-white text-2xl font-semibold"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              transition={{ duration: 0.5 }}
            >
              <div>{"🌀".repeat(waveCount)}</div>
              {waveCount <= 5 && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
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

