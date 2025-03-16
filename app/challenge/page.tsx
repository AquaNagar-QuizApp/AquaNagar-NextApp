"use client";

import { motion } from "framer-motion"
import { AnimatedBackground } from "@/components/AnimatedBackground"
import { useEffect, useRef } from "react";
import { useAudio } from "@/context/AudioContext";
import { useRouter } from "next/navigation"

export default function Challenge() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const { isMuted, isPlaying } = useAudio();
  const router = useRouter();

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
        if (!isMuted && !document.hidden && !isPlaying && audio.paused) {
          audio.play();
        } else {
          audio.pause();
          audio.currentTime = 0; // Reset audio to start
        }
      }
    };

    // Stop audio on beforeunload (page refresh/close)
    window.addEventListener("visibilitychange", stopAudio);
    window.addEventListener("beforeunload", stopAudio);

    return () => {
      window.removeEventListener("visibilitychange", stopAudio);
      window.removeEventListener("beforeunload", stopAudio);
    };
  }, []);

  const handleChallengeClick = () => {
    router.replace("/role");
}

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
            Are you prepared to take on the role of WSS Official and tackle the water management challenges of Salem City?
          </p>
          {/* <Link href="/role"> */}
          <motion.button
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold"
            onClick={handleChallengeClick}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Start the Challenge
          </motion.button>
          {/* </Link> */}
        </motion.div>
      </div>

      {/* Hidden Audio Element */}
      <audio ref={audioRef} src="./voiceover/challenge.mp3" preload="auto" />
    </main>
  )
}
