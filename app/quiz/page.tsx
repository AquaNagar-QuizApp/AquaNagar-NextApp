"use client"

import { JSX, Suspense } from "react"
import { AnimatedBackground } from "@/components/AnimatedBackground"
import { QuizContent } from "@/components/QuizContent"
import LeftSidebarVariation from "@/components/LeftSideBar"
import ImpactCard from "@/components/ImpactCard"
import { ImpactProvider } from "@/context/ImpactContext"

export default function QuizPage(): JSX.Element {
  return (
    <main className="min-h-screen relative overflow-auto">
      <AnimatedBackground />
      <ImpactProvider>
        <div className="relative z-10 min-h-screen flex items-center">
          <div className="flex w-full max-w-full h-full justify-between">

            {/* Left Sidebar (25%) */}
            <div className="w-[23%] p-4 flex items-center justify-center min-h-screen">
              <div className="bg-blue-200 bg-opacity-20 backdrop-blur-lg rounded-xl p-4 h-auto">
                <Suspense fallback={<div className="text-center text-white">Loading Side Bar...</div>}>
                  <LeftSidebarVariation />
                </Suspense>
              </div>
            </div>

            {/* Middle Content (50%) - Vertically Centered */}
            <div className="w-[54%] p-4 flex items-center justify-center min-h-screen">
              <div className="bg-white bg-opacity-20 backdrop-blur-lg rounded-xl p-4 h-auto">
                <Suspense fallback={<div className="text-center text-white">Loading Quiz...</div>}>
                  <QuizContent />
                </Suspense>
              </div>
            </div>

            {/* Right Sidebar (25%) */}
            <div className="w-[23%] p-4 flex items-center justify-center min-h-screen">
              <div className="bg-white bg-opacity-20 backdrop-blur-lg rounded-xl p-4">
                <Suspense fallback={<div className="text-center text-white">Loading Impact...</div>}>
                  <ImpactCard />
                </Suspense>
              </div>
            </div>
          </div>
        </div>
      </ImpactProvider>
    </main>
  )
}
