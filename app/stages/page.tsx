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
  "Construction is a crucial step in the development of Salem City’s water supply system. You must stay within budget, meet deadlines, and ensure the infrastructure is of the highest quality. You’ll oversee the building of pipelines, reservoirs, and the treatment plant.",
  "The city’s water source must be protected and treated properly. You’ll oversee the construction of a new treatment plant and implement processes to maintain high water quality at every stage of the system.",
  "In this phase, you’ll integrate advanced technology into your water supply system, including smart water meters and remote monitoring systems.",
  "To ensure the financial sustainability of the system, you’ll need to ensure that meters are accurate, billing systems are efficient, and customers pay on time.",
  "Water loss through leaks and theft is a major problem in Salem City. In this phase, you will address Non-Revenue Water (NRW) by implementing a four-pronged approach: leak detection, better metering, tackling unauthorized water use, and improving billing and collection systems.",
  "Once the system is operational, you’ll monitor its performance. Use data from smart meters and sensors to assess water production, energy consumption, and system efficiency."
];

// Array of warning instructions
const warningInstructions = [
  {
      description: "The system is designed to store 6,100 million cubic feet of water.",
      wrongAnswerComment: "For each wrong answer, the storage capacity decreases by 307 million cubic feet.",
      goal: "Ensure full storage capacity is maintained for a reliable water supply."
  },
  {
      description: "The baseline lifecycle cost is 150 crores.",
      wrongAnswerComment: "For each wrong answer, an extra 5 crores is added.",
      goal: "Minimize costs while ensuring a robust design."
  },
  {
      description: "The project is planned to be completed in 24 months.",
      wrongAnswerComment: "Every wrong answer results in a one-month delay.",
      goal: "Complete the infrastructure on schedule without delays."
  },
  {
      description: "The system is optimized to deliver safe, pathogen-free water.",
      wrongAnswerComment: "For each wrong answer, an additional 100 cases of waterborne disease may occur.",
      goal: "Ensure 100% safe water supply with zero contamination."
  },
  {
      description: "Initially, 0 cubic feet of water is lost in the system.",
      wrongAnswerComment: "For each wrong answer, an additional 13,700 cubic feet of water is lost per day due to defects in the SCADA system.",
      goal: "Maintain a zero-loss smart water network."
  },
  {
      description: "Initially, 0 kWh of energy is consumed for operational efficiency.",
      wrongAnswerComment: "For each wrong answer, an additional 500 kWh of energy is consumed per month.",
      goal: "Optimize energy use to maintain efficiency and sustainability."
  },
  {
      description: "With zero leaks, the full capacity of the dam is utilized.",
      wrongAnswerComment: "Every wrong decision results in an additional loss of 13,000 cubic feet of water per day.",
      goal: "Eliminate leaks and maximize water conservation."
  },
  {
      description: "In an optimally designed system, 100% of customers are satisfied.",
      wrongAnswerComment: "For every wrong answer, an additional 2.5% of customers become dissatisfied.",
      goal: "Maintain 100% customer satisfaction by ensuring system efficiency."
  }
];

// Array of audio files corresponding to each case study stage
const stageAudioFiles = [
  "./stages/stage1.mp3",
  "./stages/stage2.mp3",
  "./stages/stage3.mp3",
  "./stages/stage4.mp3",
  "./stages/stage5.mp3",
  "./stages/stage6.mp3",
  "./stages/stage7.mp3",
  "./stages/stage8.mp3"
];

// Array of audio files corresponding to each warning instruction
const warningInstructionAudioFiles = [
  "./wronginstructions/stage1.mp3",
  "./wronginstructions/stage2.mp3",
  "./wronginstructions/stage3.mp3",
  "./wronginstructions/stage4.mp3",
  "./wronginstructions/stage5.mp3",
  "./wronginstructions/stage6.mp3",
  "./wronginstructions/stage7.mp3",
  "./wronginstructions/stage8.mp3"
];

function StagesResult() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [currentPart, setCurrentPart] = useState(0);
  const [stageTitle, setStageTitle] = useState("");
  const [showAdditionalContent, setShowAdditionalContent] = useState(false);
  const [playNextAudio, setPlayNextAudio] = useState(false); // To trigger the second audio
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

  const playAudio = (src: string, onEnd: () => void) => {
    if (!stageAudioRef.current) {
      stageAudioRef.current = new Audio();
      stageAudioRef.current.preload = "auto";
    }

    const audio = stageAudioRef.current;
    audio.src = src;
    audio.muted = isMuted;

    audio.play().catch((error) => console.error("Audio play failed:", error));
    audio.onended = onEnd;
  };

  // Handle muting/unmuting when isMuted changes
  useEffect(() => {
    if (stageAudioRef.current) {
      stageAudioRef.current.muted = isMuted;
    }
  }, [isMuted]);

  useEffect(() => {
    // Play the first audio
    playAudio(stageAudioFiles[currentPart], () => {
      setShowAdditionalContent(true);
      setPlayNextAudio(true);
    });

    const stopAudio = () => {
      if (stageAudioRef.current) {
        stageAudioRef.current.pause();
        stageAudioRef.current.currentTime = 0;
        stageAudioRef.current = null;
      }
    };

    window.addEventListener("beforeunload", stopAudio);

    return () => {
      stopAudio();
      window.removeEventListener("beforeunload", stopAudio);
    };
  }, [currentPart]);

  useEffect(() => {
    if (playNextAudio) {
      playAudio(warningInstructionAudioFiles[currentPart], () => {
        navigateToQuiz();
      });
    }
  }, [playNextAudio]);

  function navigateToQuiz() {
    const set = searchParams.get("set");
    const stage = searchParams.get("stage");
    if (stage && set) {
      router.replace(`/quiz?stage=${encodeURIComponent(stage)}&set=${encodeURIComponent(set)}`);
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
                  {/* {caseStudies[currentPart].split("").map((char, index) => ( */}
                    {/* <motion.span
                      // key={index}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{
                        delay: 2 + index * 0.05,
                        duration: 0.5,
                      }}
                    >
                      {char}
                    </motion.span> */}
                  {/* ))} */}
                  {caseStudies[currentPart]}
                </motion.p>
              </motion.div>
            </motion.div>
          </AnimatePresence>

          {/* Warning Instructions div */}
          {showAdditionalContent && (
            // <motion.div
            //   className="mt-20 p-4 bg-sky-800 text-white rounded-lg"
            //   initial={{ opacity: 0, y: 10 }}
            //   animate={{ opacity: 1, y: 0 }}
            //   transition={{ duration: 0.5 }}
            // >
            //   {warningInstructions[currentPart]}
            // </motion.div>
            <div className="mt-20 p-4 bg-sky-800 rounded-lg">
                {/* Description */}
                {/* <p className="text-white text-sm mb-2">
                    <strong>Description:</strong>
                </p> */}
                <p className="text-white text-lg mb-4 flex justify-center text-center w-full">
                    {warningInstructions[currentPart].description}
                </p>

                {/* Wrong Answer Warning */}
                {/* <p className="text-orange-500 text-sm mb-2">
                    <strong>Warning:</strong>
                </p> */}
                <p className="text-orange-500 text-lg mb-4 flex justify-center text-center w-full">
                    {warningInstructions[currentPart].wrongAnswerComment}
                </p>

                {/* Goal */}
                {/* <p className="text-green-500 text-sm mb-2">
                    <strong>Goal:</strong>
                </p> */}
                <p className="text-green-500 text-lg flex justify-center text-center w-full">
                    {warningInstructions[currentPart].goal}
                </p>
            </div>
          )}
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