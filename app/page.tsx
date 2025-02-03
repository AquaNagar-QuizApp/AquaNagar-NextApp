"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { AnimatedBackground } from "@/components/AnimatedBackground";
import AudioPlayer from "@/components/AudioPlayer";

export default function Home() {
  const [hasMounted, setHasMounted] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const [showWaves, setShowWaves] = useState(false);
  const [waveCount, setWaveCount] = useState(0);
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

  useEffect(() => {
    setHasMounted(true);
  }, []);

  const handleClickAnywhere = () => {
    if (isClicked) return; // Prevent multiple activations
    setIsClicked(true);
    setShowWaves(true);

    // Show waves one by one
    let count = 0;
    const waveInterval = setInterval(() => {
      setWaveCount((prev) => prev + 1);
      count++;
      if (count === 5) {
        clearInterval(waveInterval);
        setTimeout(() => {
          setShowContent(true);
          setShowWaves(false);
        }, 1000); // Short pause before revealing the content
      }
    }, 500);
  };

  if (!hasMounted) return null;

  return (
    <main className="min-h-screen relative overflow-hidden" onClick={handleClickAnywhere}>
      <AnimatedBackground />
      <AudioPlayer />
      <div className="relative z-10 h-screen flex flex-col items-center justify-center">
        {/* Logos before clicking */}
        {!isClicked && (
          <div className="flex space-x-4 mb-8">
            <motion.img
              src="/.logos/logo1.png"
              alt="Logo 1"
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="w-16 h-16"
            />
            <motion.img
              src="./logos/logo2.png"
              alt="Logo 2"
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="w-16 h-16"
            />
            <motion.img
              src="./logos/logo3.png"
              alt="Logo 3"
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="w-16 h-16"
            />
          </div>
        )}

        {/* "Click anywhere to start" prompt */}
        {!isClicked && (
          <motion.div
            className="text-sm text-white cursor-pointer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <span role="img" aria-label="Click here" className="text-xl font-semibold">
              👆 Click anywhere to start
            </span>
          </motion.div>
        )}

        {/* Wave animation after click */}
        {showWaves && (
          <motion.div
            className="flex items-center justify-center space-x-2 text-white text-xl font-semibold"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {"🌀".repeat(waveCount)} {waveCount < 6 && "Adventure awaits..."}
          </motion.div>
        )}

        {/* Game title and "Start Journey" button */}
        {isClicked && showContent && (
          <>
            <motion.h1
              className="title text-6xl text-white mb-8"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              Aqua Nagar - The Urban Water Challenge
            </motion.h1>
            <Link href="/about">
              <motion.button
                className="px-6 py-3 bg-blue-500 text-white font-semibold"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Start Journey
              </motion.button>
            </Link>
          </>
        )}
      </div>
    </main>
  );
}
