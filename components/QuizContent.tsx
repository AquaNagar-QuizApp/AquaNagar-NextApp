"use client"

import { useRouter, useSearchParams } from "next/navigation"
import { Quiz } from "@/components/Quiz"
import type { QuizSetName } from "@/types"
import { quizSets } from "@/components/data/quizData"
import { JSX } from "react"

export function QuizContent(): JSX.Element {
  const router = useRouter()
  const searchParams = useSearchParams()
  const stage = searchParams.get("stage")
  const quizSetName = searchParams.get("set") as QuizSetName | null

  const handleQuizCompletion = (score: number): void => {
    router.push(
      `/certificate?stage=${encodeURIComponent(stage ?? "")}&set=${encodeURIComponent(quizSetName ?? "")}&score=${score}`,
    )
  }

  if (!stage || !quizSetName || !(quizSetName in quizSets)) {
    return <div className="text-white">Error: Missing or invalid stage or quiz set information</div>
  }

  return (
    <>
      <h2 className="text-2xl font-semibold text-white mb-6 text-center">
        {stage} - {quizSetName}
      </h2>
      <Quiz quizSet={quizSets[quizSetName]} onComplete={handleQuizCompletion} />
    </>
  )
}

