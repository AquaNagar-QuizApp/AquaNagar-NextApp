"use client"

import { Trophy, CheckCircle, PlayCircle, PauseCircle } from "lucide-react"
import { useSearchParams } from "next/navigation"
import { useEffect, useState } from "react"

interface Stage {
  name: string;
  score: number;
  maxScore: number;
  unit: string;
  decrease: boolean;
  incOrDecValue: number;
  isCompleted: boolean;
}

const stages: Stage[] = [
  { name: "Plan a Water Supply System", score: 0, maxScore: 6100, unit: "Million Cubic Feet", decrease: true, incOrDecValue: 307, isCompleted: false },
  { name: "Design the Water Supply System", score: 0, maxScore: 150, unit: "Crores", decrease: false, incOrDecValue: 5, isCompleted: false },
  { name: "Building the Infrastructure", score: 0, maxScore: 24, unit: "Months", decrease: false, incOrDecValue: 1, isCompleted: false },
  { name: "Water Treatment", score: 0, maxScore: 0, unit: "Cases", decrease: false, incOrDecValue: 100, isCompleted: false },
  { name: "Smart Water Networks", score: 0, maxScore: 0, unit: "Cubic Feet", decrease: false, incOrDecValue: 13700, isCompleted: false },
  { name: "Metering, Billing, and Collection", score: 0, maxScore: 0, unit: "kWh", decrease: false, incOrDecValue: 500, isCompleted: false },
  { name: "Non-Revenue Water Management", score: 0, maxScore: 0, unit: "Cubic Feet", decrease: false, incOrDecValue: 13000, isCompleted: false },
  { name: "Performance Assessment & Operational Excellence", score: 0, maxScore: 100, unit: "% Satisfied", decrease: true, incOrDecValue: 2.5, isCompleted: false }
];

function getStagesFromSession(): Stage[] {
  // Retrieve completed sections from sessionStorage
  let completedSections: Record<string, number> = {};

  if (typeof window !== 'undefined') {
    completedSections = JSON.parse(sessionStorage.getItem('completedSections') || '{}');
  }

  // Prepare the stages list by merging session data
  return stages.map((stage) => {
    const completedValue = completedSections[stage.name];

    return {
      ...stage,
      isCompleted: stage.name in completedSections,
      score: completedValue !== undefined // Ensure we process even if the value is 0
        ? (stage.decrease
            ? stage.maxScore - (10 - completedValue) * stage.incOrDecValue // Decreasing impact scenario
            : stage.maxScore + (10 - completedValue) * stage.incOrDecValue) // Increasing impact scenario
        : stage.score
    };
  });
}

export default function LeftSidebarVariation() {
  const searchParams = useSearchParams();
  const stageName = searchParams.get("stage");

  const [stages, setStagesData] = useState<Stage[]>([]);
  // Load data when the component mounts
  useEffect(() => {
    setStagesData(getStagesFromSession());
  }, []);

  const completedStages = stages.filter((stage) => stage.isCompleted);
  const currentStage = stages.find((stage) => stage.name === stageName);
  const pendingStages = stages.filter((stage) => !stage.isCompleted && stage.name !== stageName);

  const sortedStages = [
    ...completedStages, // ✅ Completed Stages First
    currentStage, // 🎯 Current Stage in Middle
    ...pendingStages, // ⏳ Pending Stages Last
  ].filter(Boolean); // Remove undefined values if `currentStageName` is incorrect

  return (
    <div className="rounded-xl text-white">
      <div className="relative flex items-center justify-center mb-4">
        <h2 className="text-lg font-bold absolute left-1/2 transform -translate-x-1/2">Stages</h2>
        <div className="flex items-center gap-2 ml-auto">
          <Trophy className="w-5 h-5 text-yellow-400" />
        </div>
      </div>

      <div className="space-y-4">
        {sortedStages.map((stage, index) => {
          const isCurrent = stage?.name === stageName
          const isCompleted = stage?.isCompleted
          const isPlayable = !isCompleted && stage?.name === stageName // Next stage is playable

          return (
            <div
              key={index}
              className={`relative p-3 rounded-lg transition-all duration-300 ${isCompleted
                ? "bg-sky-700 text-white-300" // ✅ Completed: Gray color
                : isCurrent
                  ? "bg-green-600 text-white" // 🎯 Current: Green color
                  : isPlayable
                    ? "bg-blue-600 text-white hover:bg-blue-500 cursor-pointer" // 🔵 Playable: Blue with hover effect
                    : "bg-sky-800 text-gray-400 cursor-not-allowed" // 🔒 Locked: Gray
                }`}
            >
              {/* Stage Header */}
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  {isCompleted ? (
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" /> // ✅ Completed Icon
                  ) : isCurrent ? (
                    <PauseCircle className="w-5 h-5 text-yellow-400 flex-shrink-0" /> // 👑 Current Stage
                  ) : isPlayable ? (
                    <PauseCircle className="w-5 h-5 text-yellow-400 flex-shrink-0" /> // ▶️ Playable Next Stage
                  ) : (
                    <PlayCircle className="w-5 h-5 text-white-400 flex-shrink-0" /> // ▶️ Playable Next Stage
                  )}
                  <span className="text-sm font-medium">{stage?.name}</span>
                </div>
              </div>

              {/* Show Progress Bar Only for Completed and Current Stage */}
              {(isCompleted) && (
                <>
                  {/* Score Display */}
                  <div className="flex justify-end text-xs mt-2">
                    {/* <span className="text-white-300">{stage.unit}</span> */}
                    <span className="text-white-300">{stage.score} {stage.unit}</span>
                  </div>
                </>
              )}

              {/* Current Stage Indicator */}
              {isCurrent && <div className="absolute -right-1 -top-1 w-3 h-3 bg-green-400 rounded-full animate-pulse" />}
            </div>
          )
        })}
      </div>
    </div>
  )
}
