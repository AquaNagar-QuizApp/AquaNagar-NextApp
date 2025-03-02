"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { AnimatedBackground } from "@/components/AnimatedBackground";
import { useAudio } from "@/context/AudioContext";

export default function About() {
  const [greeted, setGreeted] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
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
    setIsMounted(true);

    // Play audio if not greeted
    if (!greeted && !isMuted && audioRef.current) {
      audioRef.current.play();
    }

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0; // Reset audio on unmount
      }
    };
  }, [greeted]);

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
        {!greeted && (
          <motion.div
            className="absolute flex flex-col items-center justify-center text-center"
            initial={false} // Disable initial animation on server
            animate={isMounted ? { scale: 1 } : { scale: 0 }} // Animate only on client
            transition={{ duration: 0.5 }}
          >
            <motion.img
              src="./characters/Explainer.png" // Replace with your character image path
              alt="Character"
              className="w-32 h-32"
            />
            <motion.p
              className="text-lg font-bold text-white mt-4"
              initial={false} // Disable initial animation on server
              animate={isMounted ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }} // Animate only on client
              transition={{ delay: 0.3 }}
            >
              Hi, I am Bob! I will help you through this game.
            </motion.p>
            <motion.button
              className="mt-12 px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-semibold"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setGreeted(true)}
            >
              Say Hi 👋
            </motion.button>
          </motion.div>
        )}

        {greeted && (
          <motion.div
            className="relative max-w-2xl text-center pb-6"
            initial={false} // Disable initial animation on server
            animate={isMounted ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }} // Animate only on client
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-semibold text-white mb-4">
              About the Game
            </h2>
            <motion.div
              className="bg-white bg-opacity-20 backdrop-blur-lg rounded-xl p-6 relative z-10 mt-16"
              initial={false} // Disable initial animation on server
              animate={isMounted ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }} // Animate only on client
              transition={{ duration: 0.5 }}
            >
              {/* Character positioned at the top-left */}
              <motion.img
                src="./characters/Explainer.png" // Replace with your character image path
                alt="Character"
                className="absolute w-32 h-32 z-20"
                style={{ top: "-5.5rem", right: "-2.2rem" }}
                initial={false} // Disable initial animation on server
                animate={isMounted ? { x: 0, y: 0 } : { x: -50, y: -50 }} // Animate only on client
                transition={{ type: "spring", stiffness: 50 }}
              />
              <div className="space-y-6 text-blue-100">
                <section className="space-y-3 text-left">
                  <h3 className="text-xl font-semibold">Game Structure</h3>
                  <div className="pl-4 space-y-2">
                    <p>• Choose from 4 different question sets.</p>
                    <p>• Each set contains 8 stages.</p>
                    <p>• 10 questions per stage.</p>
                    <p>• 30 seconds time limit per question.</p>
                  </div>
                </section>

                <section className="space-y-3 text-left">
                  <h3 className="text-xl font-semibold">How to Play</h3>
                  <div className="pl-4 space-y-2">
                    <p>1. Select any question set to begin.</p>
                    <p>2. Complete each stage&apos;s questions within the time limit.</p>
                    <p>3. After completing a stage, you&apos;ll return to the spin wheel page to select a stage.</p>
                    <p>4. Continue playing and completing stages until you&apos;ve finished all eight.</p>
                  </div>
                </section>

                <section className="space-y-3 text-left">
                  <h3 className="text-xl font-semibold">Certificate Awards</h3>
                  <div className="space-y-2">
                    {certificateInfo.map(({ level, threshold, className }) => (
                      <div key={level} className="flex items-center gap-2">
                        <span className={`font-semibold ${className}`}>{level} Certificate:</span>
                        <span>Score greater than {threshold}%</span>
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
            <Link href="/story">
              <motion.button
                className="mt-6 px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-semibold"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Continue to Story 🚀
              </motion.button>
            </Link>
          </motion.div>
        )}
      </div>

      {/* Hidden Audio Element */}
      <audio ref={audioRef} src="./voiceover/intro.mp3" preload="auto" />
    </main>
  );
}
