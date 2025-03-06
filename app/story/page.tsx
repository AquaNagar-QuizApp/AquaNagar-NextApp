"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import { AnimatedBackground } from "@/components/AnimatedBackground";
import { useAudio } from "@/context/AudioContext";

// Array of story parts
const storyParts = [
  "The city of Maruthu Nagar in Tamil Nadu State is growing rapidly. More residents and businesses are popping up every day, and with this growth comes the increased demand for clean, reliable water.",
  "The city's current water supply infrastructure is outdated, and leaks, poor management, and inefficiencies are beginning to take their toll.",
  "The Government has tasked you to design, implement, and sustain a modern Water Supply System that can support Maruthu Nagar for years to come.",
  "As you take on the role of the WSS Official, you'll begin by designing a water supply system that considers the entire life cycle of the infrastructure.",
  "You need to make key decisions on the system's design, including choosing the right materials, selecting energy-efficient treatment methods, and ensuring that water is treated and delivered in a safe, reliable, and sustainable way.",
  "Your decisions will impact both the financial and environmental sustainability of the system."
];

// Array of audio files corresponding to each story part
const audioFiles = [
  "./story/part1.mp3",
  "./story/part2.mp3",
  "./story/part3.mp3",
  "./story/part4.mp3",
  "./story/part5.mp3",
  "./story/part6.mp3"
];

export default function Story() {
  const [currentPart, setCurrentPart] = useState(0);
  const [firstLetterVisible, setFirstLetterVisible] = useState(false);
  const router = useRouter();
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const { isMuted } = useAudio();

  // Play audio after the first letter becomes visible
  useEffect(() => {
    if (!firstLetterVisible) return;
    // Set up audio when currentPart changes
    const audio = new Audio(audioFiles[currentPart]);
    audioRef.current = audio;
    audio.muted = isMuted; // Set initial mute state
    audio.play();

    // Automatically move to the next story part when the audio ends
    audio.onended = () => {
      if (currentPart < storyParts.length - 1) {
        setCurrentPart((prev) => prev + 1);
        setFirstLetterVisible(false);
      } else {
        router.replace("/challenge");
      }
    };

    // Function to stop audio
    const stopAudio = () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
        audioRef.current = null;
      }
    };

    // Handle page unload or visibility change
    window.addEventListener("beforeunload", stopAudio);

    return () => {
      stopAudio();
      window.removeEventListener("beforeunload", stopAudio);
    };
  }, [firstLetterVisible, currentPart, router]);

  useEffect(() => {
    // Mute/unmute audio when isMuted changes
    if (audioRef.current) {
      audioRef.current.muted = isMuted;
    }
  }, [isMuted]);


  // const handlePrevious = () => {
  //   if (currentPart > 0) {
  //     setCurrentPart(currentPart - 1);
  //   }
  // };

  // const handleNext = () => {
  //   if (currentPart < storyParts.length - 1) {
  //     setCurrentPart(currentPart + 1);
  //   } else {
  //     router.push("/challenge");
  //   }
  // };

  const handleSkip = () => {
    if (audioRef.current) {
      audioRef.current.pause();
    }
    router.replace("/challenge")
  };

  return (
    <main className="min-h-screen relative overflow-hidden">
      <AnimatedBackground />
      <div className="relative z-10 h-screen flex flex-col items-center justify-center p-4">
        <div className="max-w-2xl w-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentPart}
              className="relative bg-white bg-opacity-20 backdrop-blur-lg rounded-xl p-6 mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              {/* Character Positioned at Top Left */}
              <motion.img
                src="./characters/Explainer.png"
                alt="Character"
                className="absolute top-0 left-10 w-24 h-24 z-20 -mt-12 -ml-12"
                initial={{ x: -50, y: -50 }}
                animate={{ x: 0, y: 0 }}
                transition={{ type: "spring", stiffness: 50 }}
              />

              <motion.p className="text-lg text-white mt-5">
                {storyParts[currentPart].split("").map((char, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                      delay: index * 0.05,
                      duration: 0.5,
                    }}
                    onAnimationComplete={() => {
                      if (index === 0) setFirstLetterVisible(true);
                    }}
                  >
                    {char}
                  </motion.span>
                ))}
              </motion.p>
            </motion.div>
          </AnimatePresence>
          <div className="flex justify-end items-center">
            {/* <div className="flex space-x-2">
              <motion.button
                className="px-4 py-2 bg-blue-700 text-white rounded-lg font-semibold"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handlePrevious}
                disabled={currentPart === 0}
              >
                &lt;
                Prev
              </motion.button>
              <motion.button
                className="px-4 py-2 bg-blue-700 text-white rounded-lg font-semibold"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleNext}
              > Next
                &gt;
              </motion.button>
            </div> */}
            <motion.button
              className="px-6 py-2 bg-gray-600/30 text-white rounded-lg font-semibold backdrop-blur-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleSkip}
            >
              Skip
            </motion.button>
          </div>
        </div>
      </div>
    </main>
  );
}
