"use client"

import { JSX, Suspense } from "react"
import { AnimatedBackground } from "@/components/AnimatedBackground"
import { QuizContent } from "@/components/QuizContent"
import { useState, useEffect } from "react";
import { LeftSidebarVariation } from "@/app/left-side-bar/page"
import { useRouter, useSearchParams } from "next/navigation"


interface Stage {
  name: string
  score: number
  maxScore: number
  unit: string
  isCompleted: boolean
}

const stages: Stage[] = [
  { name: "Plan a Water Supply System", score: 0, maxScore: 6100, unit: "Million Cubic Feet", isCompleted: false },
  { name: "Design the Water Supply System", score: 0, maxScore: 150, unit: "Crores", isCompleted: false },
  { name: "Building the Infrastructure", score: 0, maxScore: 24, unit: "Months", isCompleted: false },
  { name: "Water Treatment", score: 0, maxScore: 100, unit: "Cases", isCompleted: false },
  { name: "Smart Water Networks", score: 0, maxScore: 13700, unit: "Cubic Feet", isCompleted: false },
  { name: "Metering, Billing, and Collection", score: 0, maxScore: 500, unit: "kWh", isCompleted: false },
  { name: "Non-Revenue Water Management", score: 0, maxScore: 13000, unit: "Cubic Feet", isCompleted: false },
  { name: "Performance Assessment & Operational Excellence", score: 0, maxScore: 0, unit: "Satisfaction", isCompleted: false },
]

function getStagesFromSession(): Stage[] {
  // Retrieve completed sections from sessionStorage
  let completedSections: Record<string, number> = {};

  if (typeof window !== 'undefined') {
    completedSections = JSON.parse(sessionStorage.getItem('completedSections') || '{}');
  }

  // Prepare the stages list by merging session data
  return stages.map((stage) => ({
    ...stage,
    isCompleted: stage.name in completedSections, // Check if stage exists in session
    score: completedSections[stage.name] ?? stage.score, // Use session score if present, else original score
  }));

}
export default function QuizPage(): JSX.Element {
  const [stagesData, setStagesData] = useState<Stage[]>([]);
  const searchParams = useSearchParams()
  const stageName = searchParams.get("stage")
  // Load data when the component mounts
  useEffect(() => {
    setStagesData(getStagesFromSession());
  }, []);

  return (
    <main className="min-h-screen relative overflow-auto">
      <AnimatedBackground />
      <div className="relative z-10 min-h-screen flex items-center">
        <div className="flex w-full max-w-full h-full justify-between">

          {/* Left Sidebar (25%) */}
          {stageName && (
            <div className="w-1/4 p-4 flex items-center justify-center min-h-screen">
              <div className="bg-blue-200 bg-opacity-20 backdrop-blur-lg rounded-xl p-4 h-auto">
                <LeftSidebarVariation stages={stagesData} currentStageName={stageName} />
              </div>
            </div>
          )}

          {/* Middle Content (50%) - Vertically Centered */}
          <div className="w-[52%] p-4 flex items-center justify-center min-h-screen">
            <div className="bg-white bg-opacity-20 backdrop-blur-lg rounded-xl p-4 h-auto">
              <Suspense fallback={<div className="text-center text-white">Loading quiz...</div>}>
                <QuizContent />
              </Suspense>
            </div>
          </div>

          {/* Right Sidebar (25%) */}
          <div className="w-1/5 min-h-screen p-4">
            <div className="bg-white bg-opacity-20 backdrop-blur-lg rounded-xl p-4">

            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
