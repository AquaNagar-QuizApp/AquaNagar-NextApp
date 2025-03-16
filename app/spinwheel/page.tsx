"use client"

import { useRouter, useSearchParams } from "next/navigation";
import React, { Suspense, useEffect, useState } from "react";
import { Droplets, Waves, Award, Trophy } from "lucide-react"
import WaterDropAnimation from "@/components/Waterdropbackground"
import PipeSystem from "@/components/pipe-system"
import { Button } from "@/components/ui/button"
import { useAudio } from "@/context/AudioContext";

// const colors = ["#FF5733", "#33FF57", "#3357FF", "#FF33A1", "#FFD700", "#40E0D0", "#FF4500", "#800080"];

const colors = [
  "#FF6B6B", // Red
  "#4ECDC4", // Turquoise
  "#45B7D1", // Light Blue
  "#FFA07A", // Light Salmon
  "#66CDAA", // Medium Aquamarine
  "#FFD700", // Gold
  "#BA55D3", // Medium Orchid
  "#20B2AA" // Light Sea Green
];

export default function GameMap() {
  // const [score, setScore] = useState(0)
  // const [level, setLevel] = useState(1)

  return (
    <main className="relative w-full min-h-screen overflow-hidden bg-gradient-to-b from-blue-500 to-blue-700">
      {/* <AnimatedBackground /> */}
      <div className="absolute inset-0 pointer-events-none">
        <WaterDropAnimation />
      </div>
      <div className="absolute inset-0 pointer-events-none">
        <PipeSystem />
      </div>
      <div className="absolute top-10 left-10 animate-bounce text-blue-200 opacity-70">
        <Droplets size={40} />
      </div>
      <div className="absolute top-20 right-20 animate-pulse text-blue-200 opacity-70">
        <Droplets size={30} />
      </div>
      <div className="absolute bottom-40 left-40 animate-bounce text-blue-200 opacity-70">
        <Droplets size={25} />
      </div>

      <div className="absolute bottom-5 left-5 flex gap-3">
        <div className="bg-yellow-500/80 p-2 rounded-full backdrop-blur-sm border-2 border-yellow-300 shadow-lg">
          <Trophy size={24} className="text-white" />
        </div>
        <div className="bg-blue-600/80 p-2 rounded-full backdrop-blur-sm border-2 border-blue-300 shadow-lg">
          <Award size={24} className="text-white" />
        </div>
        <div className="bg-green-600/80 p-2 rounded-full backdrop-blur-sm border-2 border-green-300 shadow-lg">
          <Waves size={24} className="text-white" />
        </div>
      </div>

      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 py-6">
        <Suspense fallback={<div>Loading...</div>}>
          <SpinWheel />
        </Suspense>
      </div>
    </main>
  );
}

function SpinWheel() {
  const [spinning, setSpinning] = useState(false);
  const [stageResult, setStageResult] = useState<string | null>(null);
  const [stageIndex, setStageIndex] = useState<number>(0);
  const [rotation, setRotation] = useState(0);
  const router = useRouter();
  const searchParams = useSearchParams();
  const set = searchParams.get("set");
  const { backgroundAudioSrc, setBackgroundAudioSrc } = useAudio();
  const apiBaseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
  const [stages, setQuizStages] = useState<{ sectionId: number; sectionName: string; isCompleted: boolean }[]>([]);

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

      setQuizStages(stages);
    } catch (error) {
      console.error("Error fetching quiz stages:", error);
    }
  };
  fetchSections();

  const spinWheel = () => {
    setBackgroundAudioSrc("./songs/spinwheelaudio.mp3");
    
    setSpinning(true);

    let completedSections: Record<string, number> = {};

    if (typeof window !== "undefined") {
      completedSections = JSON.parse(sessionStorage.getItem('completedSections') || '{}');
    }

    // Get a list of completed stage names
    const completedStages = Object.keys(completedSections);

    // Filter out completed stages properly
    const availableStages = stages.filter(stage => !completedStages.includes(stage.sectionName));

    if (availableStages.length === 0) {
      alert("All stages are completed!"); // Handle case when all sections are done
      setSpinning(false);
      return;
    }

    const totalRotations = 1440; // Ensure multiple spins before stopping

    // Select a valid stage directly
    const selectedStage = availableStages[Math.floor(Math.random() * availableStages.length)];
    // const selectedIndex = stages.indexOf(selectedStage); // Get correct index from original array

    // Ensure correct rotation targeting selectedIndex
    const newRotation = rotation + totalRotations + (360 - (selectedStage.sectionId * 45 + 22.5));

    setRotation(newRotation);

    setTimeout(() => {
      setSpinning(false);
      setStageResult(selectedStage.sectionName);
      setStageIndex(selectedStage.sectionId);
      console.log(selectedStage);
    }, 5000);
  };

  useEffect(() => {
    if (stageResult && set) {
      setBackgroundAudioSrc("./songs/bgm.mp3");
      // if (!isMuted) {
      //   playBackgroundMusic(); // Resume background music
      // }
      setTimeout(() => {
        // if (typeof window !== 'undefined') {
        //   const completedSections = JSON.parse(sessionStorage.getItem("completedSections") || "{}");
        //   completedSections[stageResult] = 5;
        //   sessionStorage.setItem("completedSections", JSON.stringify(completedSections));
        // }
        router.replace(`/stages?set=${encodeURIComponent(set)}&stageIndex=${encodeURIComponent(stageIndex)}&stage=${encodeURIComponent(stageResult)}`);
      }, 1000);
    }
  }, [stageResult, router, set, backgroundAudioSrc]);

  const wrapText = (text: string, maxLength: number) => {
    const words = text.split(" ")
    const lines = []
    let currentLine = ""

    words.forEach((word) => {
      if ((currentLine + word).length <= maxLength) {
        currentLine += (currentLine ? " " : "") + word
      } else {
        lines.push(currentLine)
        currentLine = word
      }
    })
    lines.push(currentLine)

    return lines
  };

  return (
    <div className="relative">
      {/* Glow effect behind the wheel */}
      <div className="absolute -inset-4 bg-blue-400/30 rounded-full blur-xl" />

      {/* This is where your existing spin wheel would go */}
      <div
        className={`relative w-[740px] h-[740px] rounded-full overflow-hidden transition-all duration-500 ${spinning ? "animate-spin" : ""}`}
        style={{
          background: "rgba(255, 255, 255, 0.1)",
          backdropFilter: "blur(4px)",
          border: "10px solid rgba(255, 255, 255, 0.2)",
          boxShadow: "0 0 30px rgba(0, 150, 255, 0.3)",
        }}
      >
        <svg
          className={`w-full h-full ${spinning ? "transition-transform duration-5000 ease-in-out" : ""}`}
          viewBox="0 0 100 100"
          style={{ transform: `rotate(${rotation}deg)` }}
        >
          {stages.map((stage, index) => {
            const startAngle = index * 45
            const endAngle = (index + 1) * 45
            const largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1"

            const startX = 50 + 50 * Math.cos(((startAngle - 90) * Math.PI) / 180)
            const startY = 50 + 50 * Math.sin(((startAngle - 90) * Math.PI) / 180)
            const endX = 50 + 50 * Math.cos(((endAngle - 90) * Math.PI) / 180)
            const endY = 50 + 50 * Math.sin(((endAngle - 90) * Math.PI) / 180)

            const midAngle = (startAngle + endAngle) / 2
            const textX = 50 + 35 * Math.cos(((midAngle - 90) * Math.PI) / 180)
            const textY = 50 + 35 * Math.sin(((midAngle - 90) * Math.PI) / 180)

            const wrappedText = wrapText(stage.sectionName, 12)

            return (
              <g key={stage.sectionName}>
                <path
                  d={`M50,50 L${startX},${startY} A50,50 0 ${largeArcFlag},1 ${endX},${endY} Z`}
                  fill={colors[index]}
                />
                <text
                  x={textX}
                  y={textY}
                  fill="white"
                  fontSize="3"
                  fontWeight="bold"
                  textAnchor="middle"
                  dominantBaseline="middle"
                  transform={`rotate(${midAngle}, ${textX}, ${textY})`}
                >
                  {wrappedText.map((line, i) => (
                    <tspan x={textX} dy={i === 0 ? 0 : "1.2em"} key={i}>
                      {line}
                    </tspan>
                  ))}
                </text>
              </g>
            )
          })}
        </svg>

      </div>
      <div className="absolute top-0 left-1/2 -ml-4 w-0 h-0 border-l-[16px] border-l-transparent border-r-[16px] border-r-transparent border-t-[32px] border-t-black"></div>

      {/* Spin button overlay */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <Button
          onClick={spinWheel}
          disabled={spinning}
          className="rounded-full w-20 h-20 bg-blue-600 hover:bg-blue-700 text-white font-bold shadow-lg border-4 border-blue-300"
        >
          Spin
        </Button>
      </div>
    </div>
  );
}
