"use client"
import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { AnimatedBackground } from "@/components/AnimatedBackground"

export default function Home() {
  const [hasMounted, setHasMounted] = useState(false)
  const router = useRouter()

  useEffect(() => {
    setHasMounted(true)
  }, [])

  const handleStartButtonClick = () => {
    router.replace("/login")
  }

  if (!hasMounted) return null

  return (
    <main className="min-h-screen relative overflow-hidden">
      <AnimatedBackground />
      <div className="relative z-10 h-screen flex flex-col items-center justify-center">
        <motion.div
          className="relative bg-white bg-opacity-70 backdrop-blur-lg rounded-xl p-6 mb-4"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.h1
            className="title text-5xl md:text-7xl text-blue-800 mb-12 text-center w-full"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            The Urban Water Challenge
          </motion.h1>
          <div className="flex space-x-16 p-8 mb-4 justify-center items-center">
            <motion.img
              src="./logos/TNGov_Logo.png"
              alt="TN Govt Logo"
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="w-28 h-28"
            />
            <motion.img
              src="./logos/TNUIFSL_Logo.png"
              alt="TNUIFSL Logo"
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="w-64 h-16"
            />
            <motion.img
              src="./logos/KFW_Logo.png"
              alt="KFW Logo"
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="w-32 h-12"
            />
            <motion.img
              src="./logos/CED_Logo.png"
              alt="CED Logo"
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="w-28 h-28"
            />
          </div>
          <motion.div
            className="flex justify-center text-sm mt-8 text-white cursor-pointer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <motion.button
              className="px-6 py-3 bg-blue-700 hover:bg-blue-800 text-white font-semibold rounded-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleStartButtonClick}
            >
              Start Journey
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </main>
  )
}
