"use client"

import { useState, useEffect } from "react"
import Confetti from "react-confetti"
import { useRouter, useSearchParams } from "next/navigation"
import { QuizSetName } from "@/types"

export default function Complete() {
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 })
  const router = useRouter();
  const searchParams = useSearchParams();
  const stage = searchParams.get("stage");
  const score = searchParams.get("score");

  const onSelect = (set: QuizSetName) => {
    setTimeout(() => {
      router.push(`/game-map?set=${encodeURIComponent(set)}`)
    }, 100)
  };

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight })
    }

    handleResize()

    window.addEventListener("resize", handleResize)

    // Clean up
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <main className="min-h-screen relative overflow-hidden">
      <div className="min-h-screen bg-gradient-to-br from-teal-500 to-blue-700 flex flex-col items-center justify-center">
        <Confetti width={windowSize.width} height={windowSize.height} />
        <div className="flex flex-col items-center justify-center min-h-screen">
          <h1 className="text-4xl sm:text-6xl font-bold text-white-300 mb-8 animate-bounce text-center">Congratulations!</h1>

          {/* <div className="bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg rounded-lg p-8 mb-8 text-center">
            <p className="text-4xl font-semibold text-white mb-4">Your Score:</p>
            <p className="text-6xl font-bold text-yellow-300 animate-pulse">{score}</p>
          </div> */}

          <div className="bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg rounded-lg p-8 mb-8 text-center">
            <p className="text-3xl text-white mb-4">You have successfully completed </p>
            <p className="text-4xl text-white mb-4"><strong>{stage} Stage</strong> </p>
            <p className="text-3xl text-white mb-4"> with a score of</p>
            <p className="text-6xl font-bold text-blue-800 animate-pulse">{score}</p>
          </div>

          <button
            className="px-6 py-2 bg-blue-700 text-white rounded-lg font-semibold backdrop-blur-lg text-lg transition duration-300 ease-in-out transform hover:bg-blue-800 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50"
            onClick={() => onSelect("Set 1")}
          >
            Return to Stages Page
          </button>
        </div>
      </div>
    </main>
  )
}
