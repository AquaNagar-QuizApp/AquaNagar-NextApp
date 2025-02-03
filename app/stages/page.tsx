"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import { AnimatedBackground } from "@/components/AnimatedBackground";

const caseStudies = [
  {
    heading: "Stage 1: Plan A Water Supply System",
    content: "In the first phase of the game, you’ll work with urban planners to focus on integrated planning that combines technical, environmental, and social dimensions to create a sustainable, efficient, and inclusive Water Supply System."
  },
  {
    heading: "Stage 2: Design the Water Supply System",
    content: "You are expected to design a Water Supply System (WSS) that minimizes cost, water loss, and energy loss while ensuring resilience, safety, and reliability."
  },
  {
    heading: "Stage 3: Building the Infrastructure",
    content: "Construction is a crucial step in the development of Aqua Nagar ‘s water supply system. You must stay within budget, meet deadlines, and ensure the infrastructure is of the highest quality. You’ll oversee the building of pipelines, reservoirs, and the treatment plant."
  },
  {
    heading: "Stage 4: Water Treatment- Clean Water for All",
    content: "The city’s water source must be protected and treated properly. You’ll oversee the construction of a new treatment plant and implement processes to maintain high water quality at every stage of the system."
  },
  {
    heading: "Stage 5: Smart Water Networks",
    content: "In this phase, you’ll integrate advanced technology into your water supply system, including smart water meters and remote monitoring systems."
  },
  {
    heading: "Stage 6: Metering, Billing, and Collection",
    content: "To ensure the financial sustainability of the system, you’ll need to ensure that meters are accurate, billing systems are efficient, and customers pay on time."
  },
  {
    heading: "Stage 7: Non-Revenue Water Management",
    content: "Water loss through leaks and theft is a major problem in Aqua Nagar. In this phase, you will address Non-Revenue Water (NRW) by implementing a four-pronged approach: leak detection, better metering, tackling unauthorized water use, and improving billing and collection systems."
  },
  {
    heading: "Stage 8: Performance Assessment &amp; Operational Excellence",
    content: "Once the system is operational, you’ll monitor its performance. Use data from smart meters and sensors to assess water production, energy consumption, and system efficiency."
  }
]

export default function Stages() {
  const [currentPart, setCurrentPart] = useState(0);
  const router = useRouter();

  const handlePrevious = () => {
    if (currentPart > 0) {
      setCurrentPart(currentPart - 1);
    }
  };

  const handleNext = () => {
    if (currentPart < caseStudies.length - 1) {
      setCurrentPart(currentPart + 1);
    } else {
      router.push("/challenge");
    }
  };

  const handleSkip = () => {
    setTimeout(() => {
      router.push("/challenge");
    }, 100);
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

              {/* Heading for the current story part */}
              <motion.h2 className="text-2xl font-bold text-white mt-5">
                {caseStudies[currentPart].heading}
              </motion.h2>

              {/* Story Part Content */}
              <motion.p className="text-lg text-white mt-5">
                {caseStudies[currentPart].content.split("").map((char, index) => (
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
          <div className="flex justify-between items-center">
            <div className="flex space-x-2">
              <motion.button
                className="px-4 py-2 bg-blue-700 text-white rounded-lg font-semibold"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handlePrevious}
                disabled={currentPart === 0}
              >
                &lt; Prev
              </motion.button>
              <motion.button
                className="px-4 py-2 bg-blue-700 text-white rounded-lg font-semibold"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleNext}
              >
                Next &gt;
              </motion.button>
            </div>
            <motion.button
              className="px-6 py-2 bg-gray-600/30 text-white rounded-lg font-semibold backdrop-blur-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleSkip}
            >
              Skip Study
            </motion.button>
          </div>
        </div>
      </div>
    </main>
  );
}
