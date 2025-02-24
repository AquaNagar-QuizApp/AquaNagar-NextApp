"use client"



import { JSX, Suspense } from "react"
import { AnimatedBackground } from "@/components/AnimatedBackground"
import { QuizContent } from "@/components/QuizContent"
import { useState, useEffect } from "react";
import { FaStar } from "react-icons/fa"; // Import star icon for scores
import { SidebarVariation1 } from "@/app/side-bar-page/sidebar3"
import { useRouter, useSearchParams } from "next/navigation"


interface Stage {
  name: string
  score: number
  maxScore: number
  unit: string
  isCompleted: boolean
}

const stages: Stage[] = [
  { name: "Plan A Water Supply System", score: 0, maxScore: 6100, unit: "million cubic feet", isCompleted: false },
  { name: "Design the Water Supply System", score: 0, maxScore: 150, unit: "crores", isCompleted: false },
  { name: "Building the Infrastructure", score: 0, maxScore: 24, unit: "month delay", isCompleted: false },
  { name: "Water Treatment", score: 0, maxScore: 100, unit: "cases", isCompleted: false },
  { name: "Smart Water Networks", score: 0, maxScore: 13700, unit: "cubic feet", isCompleted: false },
  { name: "Metering, Billing, and Collection", score: 0, maxScore: 500, unit: "kWh", isCompleted: false },
  { name: "Non-Revenue Water Management", score: 0, maxScore: 13000, unit: "cubic feet", isCompleted: false },
  { name: "Performance Assessment & Operational Excellence", score: 0, maxScore: 0, unit: "dissatisfied", isCompleted: false },
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
  const [currentStageIndex, setCurrentStageIndex] = useState(2);
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
      <div className="relative z-10 min-h-screen flex items-center justify-center">
        <div className="flex w-full max-w-6xl h-full">
          
          {stageName &&
            <SidebarVariation1 stages={stagesData} currentStageName={stageName} />}

          {/* Right Side Content */}
          <div className="w-3/4 p-6">

            <div className="bg-white bg-opacity-20 backdrop-blur-lg rounded-xl p-4 mt-6">
              <Suspense fallback={<div className="text-center text-white">Loading quiz...</div>}>
                <QuizContent />
              </Suspense>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
