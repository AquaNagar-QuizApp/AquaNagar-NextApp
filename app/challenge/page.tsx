"use client";

import Link from "next/link"
import { motion } from "framer-motion"
import { AnimatedBackground } from "@/components/AnimatedBackground"
import { useEffect, useRef } from "react";
import { useAudio } from "@/context/AudioContext";

export default function Challenge() {
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

  useEffect(() => {
    const audio = audioRef.current;

    const stopAudio = () => {
      if (audio) {
        audio.pause();
        audio.currentTime = 0; // Reset audio to start
      }
    };

    // Stop audio on beforeunload (page refresh/close)
    window.addEventListener("beforeunload", stopAudio);

    return () => {
      window.removeEventListener("beforeunload", stopAudio);
    };
  }, []);

  return (
    <main className="min-h-screen relative overflow-hidden">
      <AnimatedBackground />
      <div className="relative z-10 h-screen flex flex-col items-center justify-center">
        <motion.div
          className="max-w-2xl text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-semibold text-white mb-8">Ready for the Challenge?</h2>
          <p className="text-lg text-blue-100 mb-8">
            Are you prepared to take on the role of WSS Engineer and tackle the water management challenges of Maruthu Nagar?
          </p>
          <Link href="/role">
            <motion.button
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Start the Challenge
            </motion.button>
          </Link>
        </motion.div>
      </div>

      {/* Hidden Audio Element */}
      <audio ref={audioRef} src="./voiceover/challenge.mp3" preload="auto" />
    </main>
  )
}
