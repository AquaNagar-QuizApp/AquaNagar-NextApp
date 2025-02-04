"use client";

import { Suspense, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter, useSearchParams } from "next/navigation";
import { AnimatedBackground } from "@/components/AnimatedBackground";

const caseStudies = [
  "In the first phase of the game, you’ll work with urban planners to focus on integrated planning that combines technical, environmental, and social dimensions to create a sustainable, efficient, and inclusive Water Supply System.",
  "You are expected to design a Water Supply System (WSS) that minimizes cost, water loss, and energy loss while ensuring resilience, safety, and reliability.",
  "Construction is a crucial step in the development of Aqua Nagar ‘s water supply system. You must stay within budget, meet deadlines, and ensure the infrastructure is of the highest quality. You’ll oversee the building of pipelines, reservoirs, and the treatment plant.",
  "The city’s water source must be protected and treated properly. You’ll oversee the construction of a new treatment plant and implement processes to maintain high water quality at every stage of the system.",
  "In this phase, you’ll integrate advanced technology into your water supply system, including smart water meters and remote monitoring systems.",
  "To ensure the financial sustainability of the system, you’ll need to ensure that meters are accurate, billing systems are efficient, and customers pay on time.",
  "Water loss through leaks and theft is a major problem in Aqua Nagar. In this phase, you will address Non-Revenue Water (NRW) by implementing a four-pronged approach: leak detection, better metering, tackling unauthorized water use, and improving billing and collection systems.",
  "Once the system is operational, you’ll monitor its performance. Use data from smart meters and sensors to assess water production, energy consumption, and system efficiency."
];

function StagesResult() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [currentPart, setCurrentPart] = useState(0);
  const [stageTitle, setStageTitle] = useState("");
  const stageParam = searchParams.get("stage");

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

  // Auto route to next stage after animation completes
  useEffect(() => {
    const timer = setTimeout(() => {
      const set = searchParams.get("set");
      if (stageParam && set) {
        router.push(`/quiz?stage=${encodeURIComponent(stageParam)}&set=${encodeURIComponent(set)}`);
      } else {
        console.error("Stage is missing");
      }
    }, 5000); // Change page after 5 seconds

    return () => clearTimeout(timer); // Cleanup on unmount
  }, [currentPart]);

  // const handlePrevious = () => {
  //   if (currentPart > 0) {
  //     setCurrentPart(currentPart - 1);
  //   }
  // };

  // const handleNext = () => {
  //   if (currentPart < caseStudies.length - 1) {
  //     setCurrentPart(currentPart + 1);
  //   } else {
  //     router.push("/challenge");
  //   }
  // };

  // const handleSkip = () => {
  //   setTimeout(() => {
  //     router.push("/challenge");
  //   }, 100);
  // };

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
                <motion.p className="text-lg text-white mt-5">
                  {caseStudies[currentPart].split("").map((char, index) => (
                    <motion.span
                      key={index}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{
                        delay: index * 0.05,
                        duration: 0.1,
                      }}
                    >
                      {char}
                    </motion.span>
                  ))}
                </motion.p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </main>
  );
}

export default function Stages(){
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <StagesResult />
    </Suspense>
  );
}