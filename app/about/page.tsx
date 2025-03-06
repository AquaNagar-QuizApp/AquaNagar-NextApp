"use client";

import { motion } from "framer-motion";
import { AnimatedBackground } from "@/components/AnimatedBackground";
import { useEffect, useRef } from "react";
import { useAudio } from "@/context/AudioContext";
import { useRouter } from "next/navigation"

export default function About() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const { isMuted } = useAudio();
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

  const handleStoryClick = () => {
    router.replace("/story");
  }

  const certificateInfo = [
    { level: "Gold", threshold: 80, className: "text-yellow-400" },
    { level: "Silver", threshold: 65, className: "text-gray-600" },
    { level: "Bronze", threshold: 50, className: "text-amber-600" },
    // { level: "Participation", threshold: 50, className: "text-black-600" }
  ];

  return (
    <main className="min-h-screen relative overflow-y-auto">
      <AnimatedBackground />
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 pt-12">
        <motion.div
          className="relative max-w-2xl text-center pb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-semibold text-white mb-4">
            About the Game
          </h2>
          <motion.div
            className="bg-white bg-opacity-20 backdrop-blur-lg rounded-xl p-6 relative z-10 mt-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Character positioned at the top-left */}
            <motion.img
              src="./characters/Explainer.png" // Replace with your character image path
              alt="Character"
              className="absolute w-32 h-32 z-20"
              style={{ top: "-2.5rem", right: "-4.5rem" }}
              initial={false} // Disable initial animation on server
              animate={{ x: -50, y: -50 }} // Animate only on client
              transition={{ type: "spring", stiffness: 50 }}
            />
            <div className="space-y-6 text-blue-100">
              <section className="space-y-3 text-left">
                <h3 className="text-xl font-semibold">Game Structure</h3>
                <div className="pl-4 space-y-2">
                  <p>• Choose one of two roles: Engineer or Non-Engineer.</p>
                  <p>• Pick from 4 unique missions to play.</p>
                  <p>• Each mission consists of 8 stages to complete.</p>
                  <p>• Each stage has 10 challenging questions.</p>
                  <p>• You have 30 seconds to answer each question.</p>
                </div>
              </section>

              <section className="space-y-3 text-left">
                <h3 className="text-xl font-semibold">How to Play</h3>
                <div className="pl-4 space-y-2">
                  <p>1. Choose a mission to begin your journey.</p>
                  <p>2. Spin the wheel to select a stage to play.</p>
                  <p>3. Answer each question within the time limit.</p>
                  <p>4. Your choices impact Maruthu Nagar—improving or worsening its condition based on your answers.</p>
                  <p>5. After each stage, you&apos;ll see how your decisions have affected Maruthu Nagar.</p>
                  <p>6. Return to the spin wheel and continue playing until all stages are completed.</p>
                  <p>7. Complete all eight stages to finish the mission.</p>
                  <p>8. Discover your level at the end of the mission based on your performance.</p>
                </div>
              </section>

              <section className="space-y-3 text-left">
                <h3 className="text-xl font-semibold">Certificate Awards</h3>
                <div className="space-y-2">
                  {certificateInfo.map(({ level, threshold, className }) => (
                    <div key={level} className="flex items-center gap-2">
                      <span className={`font-semibold ${className}`}>{level} Certificate:</span>
                      <span>Score greater than {threshold}%.</span>
                    </div>
                  ))}
                </div>
              </section>

              <section className="space-y-3 text-left">
                <h3 className="text-xl font-semibold">If You Score Below 50%</h3>
                <div className="pl-4 space-y-2">
                  {/* <p>You have two options:</p>
                    <p>• Retry the same set to improve your score.</p> */}
                  <p>• Try a different set to earn your certificate.</p>
                </div>
              </section>
            </div>
          </motion.div>
          {/* <Link href="/story">
            <motion.button
              className="mt-6 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Continue to Story 🚀
            </motion.button>
          </Link> */}
          <motion.button
            className="mt-10 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold"
            onClick={handleStoryClick}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Continue to Story 🚀
          </motion.button>
        </motion.div>
      </div>

      {/* Hidden Audio Element */}
      <audio ref={audioRef} src="./voiceover/instructions.mp3" preload="auto" />
    </main>
  );
}
