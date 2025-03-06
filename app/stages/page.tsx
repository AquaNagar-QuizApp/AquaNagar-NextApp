"use client";

import { Suspense, useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter, useSearchParams } from "next/navigation";
import { AnimatedBackground } from "@/components/AnimatedBackground";
import { useAudio } from "@/context/AudioContext";

// Array of case study stages
const caseStudies = [
  "In the first phase of the game, you’ll work with urban planners to focus on integrated planning that combines technical, environmental, and social dimensions to create a sustainable, efficient, and inclusive Water Supply System.",
  "You are expected to design a Water Supply System (WSS) that minimizes cost, water loss, and energy loss while ensuring resilience, safety, and reliability.",
  "Construction is a crucial step in the development of Maruthu Nagar ‘s water supply system. You must stay within budget, meet deadlines, and ensure the infrastructure is of the highest quality. You’ll oversee the building of pipelines, reservoirs, and the treatment plant.",
  "The city’s water source must be protected and treated properly. You’ll oversee the construction of a new treatment plant and implement processes to maintain high water quality at every stage of the system.",
  "In this phase, you’ll integrate advanced technology into your water supply system, including smart water meters and remote monitoring systems.",
  "To ensure the financial sustainability of the system, you’ll need to ensure that meters are accurate, billing systems are efficient, and customers pay on time.",
  "Water loss through leaks and theft is a major problem in Maruthu Nagar. In this phase, you will address Non-Revenue Water (NRW) by implementing a four-pronged approach: leak detection, better metering, tackling unauthorized water use, and improving billing and collection systems.",
  "Once the system is operational, you’ll monitor its performance. Use data from smart meters and sensors to assess water production, energy consumption, and system efficiency."
];

// Array of audio files corresponding to each case study stage
const audioFiles = [
  "./stages/stage1.mp3",
  "./stages/stage2.mp3",
  "./stages/stage3.mp3",
  "./stages/stage4.mp3",
  "./stages/stage5.mp3",
  "./stages/stage6.mp3",
  "./stages/stage7.mp3",
  "./stages/stage8.mp3"
];

function StagesResult() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [currentPart, setCurrentPart] = useState(0);
  const [stageTitle, setStageTitle] = useState("");
  const stageParam = searchParams.get("stage");
  const stageAudioRef = useRef<HTMLAudioElement | null>(null);
  const { isMuted } = useAudio();

  useEffect(() => {
    const stageIndexParam = searchParams.get("stageIndex");
    const stageName = searchParams.get("stage");

    if (stageIndexParam) {
      const index = parseInt(stageIndexParam, 10);
      if (!isNaN(index) && index >= 0 && index < caseStudies.length) {
        setCurrentPart(index);
        setStageTitle(stageName ? decodeURIComponent(stageName) : "Unknown Stage");
      }
    }
  }, [searchParams.toString()]);

  useEffect(() => {
    if (currentPart === null) return; // Prevent playing when not yet set

    // Reuse the same audio instance
    if (!stageAudioRef.current) {
      stageAudioRef.current = new Audio(audioFiles[currentPart]);
      stageAudioRef.current.preload = "auto"; // Ensure the audio is loaded early
    }

    // Create new audio object when currentPart changes
    // const audio = new Audio(audioFiles[currentPart]);
    // audioRef.current = audio;
    // audio.muted = isMuted; // Set mute/unmute state
    // audio.play();

    const stageAudio = stageAudioRef.current;
    // If audio is already playing, stop it before setting a new source
    if (!stageAudio.paused) {
      stageAudio.pause();
      stageAudio.currentTime = 0;
    }

    // Update source if needed
    if (stageAudio.src !== audioFiles[currentPart]) {
      stageAudio.src = audioFiles[currentPart];
    }

    // Apply mute setting before playing
    stageAudio.muted = isMuted;

    // Attempt to play audio, catching potential errors
    stageAudio.play().catch((error) => console.error("Audio play failed:", error));

    // Navigate to quiz after the audio finishes
    stageAudio.onended = () => {
      navigateToQuiz();
    };

    // Cleanup function to stop audio when leaving the page
    const stopAudio = () => {
      if (stageAudioRef.current) {
        stageAudioRef.current.pause();
        stageAudioRef.current.currentTime = 0; // Reset audio position
        stageAudioRef.current = null;
      }
    };

    // Listen for page unload or tab switch
    window.addEventListener("beforeunload", stopAudio);

    return () => {
      stopAudio(); // Stop audio when unmounting
      window.removeEventListener("beforeunload", stopAudio);
    };

    // return () => {
    //   if (audioRef.current) {
    //     audioRef.current.pause(); // Stop audio when component unmounts
    //     audioRef.current = null;
    //   }
    // };
  }, [currentPart]);

  // Handle muting/unmuting when isMuted changes
  useEffect(() => {
    if (stageAudioRef.current) {
      stageAudioRef.current.muted = isMuted;
    }
  }, [isMuted]);

  function navigateToQuiz() {
    const set = searchParams.get("set");
    if (stageParam && set) {
      router.replace(`/quiz?stage=${encodeURIComponent(stageParam)}&set=${encodeURIComponent(set)}`);
    } else {
      console.error("Stage is missing");
    }
  }

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

              {/* Heading for the current story part */}
              <motion.h2 className="text-2xl font-bold text-white mt-5 text-center w-full">
                {stageTitle}
              </motion.h2>

              {/* Story Part Content */}
              <motion.div className="flex justify-center text-center w-full">
                <motion.p className="text-lg text-white mt-5">
                  {caseStudies[currentPart].split("").map((char, index) => (
                    <motion.span
                      key={index}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{
                        delay: 2 + index * 0.05,
                        duration: 0.5,
                      }}
                    >
                      {char}
                    </motion.span>
                  ))}
                </motion.p>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </main>
  );
}

export default function Stages() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <StagesResult />
    </Suspense>
  );
}