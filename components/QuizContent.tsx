"use client"

import { useRouter, useSearchParams } from "next/navigation"
import { Quiz } from "@/components/Quiz"
import type { QuizSet, QuizSetName, Stage } from "@/types"
import { quizData } from "@/components/data/quizData"
import { JSX } from "react"

export function QuizContent(): JSX.Element {
  const router = useRouter()
  const searchParams = useSearchParams()
  const stageName = searchParams.get("stage")
  const quizSetName = searchParams.get("set") as QuizSetName | null

  // Find the quiz set
  const selectedQuizSet: QuizSet | undefined = quizData.find(set => set.setName === quizSetName);
  // const selectedQuizSet = quizData.find(set => set.setName === quizSetName);

  // Find the specific stage within the selected quiz set
  const selectedStage: Stage | undefined = selectedQuizSet?.stages.find(s => s.stageName === stageName);

  const handleQuizCompletion = (score: number): void => {
    // router.push(
    //   `/certificate?stage=${encodeURIComponent(stage ?? "")}&set=${encodeURIComponent(quizSetName ?? "")}&score=${score}`,
    // )

    router.push(`/complete?set=${encodeURIComponent(quizSetName ?? "")}&stage=${encodeURIComponent(stageName ?? "")}&score=${score}`);
  }

  // if (!stage || !quizSetName || !(quizSetName in quizData)) {
  //   return <div className="text-white">Error: Missing or invalid stage or quiz set information</div>
  // }
  if (!stageName || !selectedQuizSet || !selectedStage) {
    return <div className="text-white">Error: Missing or invalid stage or quiz set information</div>;
  }

  return (
    <>
      <h2 className="text-2xl font-semibold text-white mb-6 text-center">
        {stageName} - {quizSetName}
      </h2>
      <Quiz quizSet={selectedStage} stage={stageName} onComplete={handleQuizCompletion} />
    </>
  )
}
