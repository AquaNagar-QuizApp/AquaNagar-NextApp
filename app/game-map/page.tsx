"use client"
import { motion } from "framer-motion"
import { AnimatedBackground } from "@/components/AnimatedBackground"
import { Button } from "@/components/ui/button"
import { useRouter, useSearchParams } from "next/navigation"
import { Droplet, PenTool, Building2, FlaskRoundIcon as Flask, Cloud, Receipt, Banknote, BarChart3 } from "lucide-react"
import React, { Suspense, useEffect, useMemo, useState } from "react"

// const stages = [
//   "Plan A Water Supply System",
//   "Design the Water Supply System",
//   "Building the Infrastructure",
//   "Water Treatment",
//   "Smart Water Networks",
//   "Metering, Billing, and Collection",
//   "Non-Revenue Water Management",
//   "Performance Assessment & Operational Excellence",
// ];

const icons = [
  Droplet, PenTool, Building2, Flask, Cloud, Receipt, Banknote, BarChart3
];

export default function GameMap() {

  return (
    <main className="min-h-screen relative overflow-auto">
      <AnimatedBackground />
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 py-6">
        <Suspense fallback={<div className="text-lg text-gray-700">Loading...</div>}>
          <GameMapContent />
        </Suspense>
      </div>
    </main>
  );
}

function GameMapContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [completedSections, setCompletedSections] = useState<Record<string, number>>({});
  // const [stages, setQuizStages] = useState<string[]>([]);
  const [stages, setQuizStages] = useState<{ sectionId: number; sectionName: string; isCompleted: boolean }[]>([]);

  // Memoizing searchParams to avoid unnecessary re-renders
  const set = useMemo(() => searchParams.get("set"), [searchParams]);
  const apiBaseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
  // Retrieve sessionStorage data on mount
  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedData = sessionStorage.getItem("completedSections");
      if (storedData) {
        setCompletedSections(JSON.parse(storedData));
      }
    }

    const fetchSections = async () => {
      try {
        let responseUri: string = "";
        if (typeof window !== "undefined") {
          const userId = sessionStorage.getItem("userID");
          const roleId = sessionStorage.getItem("roleID");
          const setId = sessionStorage.getItem("currentSet");
          responseUri = `${apiBaseUrl}/api/Sections/set/${setId}/user/${userId}/role/${roleId}`
        }
        const response = await fetch(responseUri);
        const stages: { sectionId: number; sectionName: string; isCompleted: boolean }[] = await response.json();

        // Extract only `sectionName`
        // const names = data.map((section) => section.sectionName);
        setQuizStages(stages);
      } catch (error) {
        console.error("Error fetching quiz stages:", error);
      }
    };
    fetchSections();
  }, []);

  const handleStageClick = (stage: string, stageNumber: number) => {
    if (typeof window !== "undefined") {
      sessionStorage.setItem("currentStage", JSON.stringify(stageNumber));
    }
    if (set) {
      router.push(`/stages?set=${encodeURIComponent(set)}&stageIndex=${encodeURIComponent(stageNumber)}&stage=${encodeURIComponent(stage)}`);
    } else {
      console.error("Set is missing");
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <motion.div
      className="relative bg-white bg-opacity-70 backdrop-blur-lg rounded-xl p-6 mb-4 w-full max-w-3xl"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.h2 className="text-4xl font-bold text-center text-gray-800 mb-4" variants={itemVariants}>
        Game Stages
      </motion.h2>
      <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-6" variants={containerVariants}>
        {stages.map((stage) => {
          // const isCompleted = completedSections.hasOwnProperty(stage); // Check if stage is completed
          return (
            <motion.div key={stage.sectionId} variants={itemVariants}>
              <motion.div
                // className={`px-6 py-4 ${isCompleted ? 'bg-gray-500' : 'bg-blue-700'} text-white rounded-lg font-semibold backdrop-blur-lg`}
                className={`px-6 py-4 rounded-lg font-semibold backdrop-blur-lg ${stage.isCompleted
                  ? "bg-gray-400 text-gray-700 cursor-not-allowed" // Disabled state
                  : "bg-blue-700 text-white"
                  }`}
                whileHover={stage.isCompleted ? {} : { scale: 1.05, transition: { duration: 0.2 } }} // Disable hover effect when completed
                whileTap={stage.isCompleted ? {} : { scale: 0.95 }} // Disable tap effect when completed
              >
                <Button
                  onClick={() => handleStageClick(stage.sectionName, stage.sectionId)}
                  disabled={stage.isCompleted} // Disable button
                  className="w-full h-full py-4 px-1 text-lg font-semibold text-center break-words whitespace-normal flex items-center justify-between md:w-64 md:h-20"
                >
                  {React.createElement(icons[stage.sectionId - 1], {
                    style: { width: '32px', height: '32px', }
                  })}
                  <span className="ml-2">{stage.sectionName}</span>
                </Button>
              </motion.div>
            </motion.div>
          );
        })}
      </motion.div>
    </motion.div>
  );
}
