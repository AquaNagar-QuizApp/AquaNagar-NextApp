"use client"

import { useRouter, useSearchParams } from "next/navigation"
import { Quiz } from "@/components/Quiz"
import type { QuizSetName, Role, Set, Stage } from "@/types"
import { quizDataByRole } from "@/components/data/quizData"
import { JSX } from "react"
import { useImpact } from "@/context/ImpactContext"

export function QuizContent(): JSX.Element {
  const router = useRouter()
  const searchParams = useSearchParams()
  const stageName = searchParams.get("stage")
  const quizSetName = searchParams.get("set") as QuizSetName | null
  let selectedQuizSet: Set | undefined;
  let selectedStage: Stage | undefined;

  const { updateWrongAnswer } = useImpact();

  if (typeof window !== "undefined") {
    const storedRole = sessionStorage.getItem("selectedRole");
    if (storedRole) {
      const roleName = JSON.parse(storedRole);
      const selectedRole: Role | undefined = quizDataByRole.find(role => role.roleName === roleName);

      if (!selectedRole) {
        console.error(`Role "${roleName}" not found.`);
      }

      // Find the quiz set within the selected role
      selectedQuizSet = selectedRole?.quizSets.find(set => set.setName === quizSetName);

      if (!selectedQuizSet) {
        console.error(`Quiz Set "${quizSetName}" not found for role "${roleName}".`);
      }

      // Find the specific stage within the selected quiz set
      selectedStage = selectedQuizSet?.stages.find(s => s.stageName === stageName);

      if (!selectedStage) {
        console.error(`Stage "${stageName}" not found in Quiz Set "${quizSetName}" for role "${roleName}".`);
      }
    }
  }

  const handleQuizCompletion = (score: number): void => {
    router.push(`/complete?set=${encodeURIComponent(quizSetName ?? "")}&stage=${encodeURIComponent(stageName ?? "")}&score=${score}`);
  }

  if (!stageName || !selectedQuizSet || !selectedStage) {
    return <div className="text-white">Error: Missing or invalid stage or quiz set information</div>;
  }

  return (
    <>
      <Quiz quizSet={selectedStage} stage={stageName} onComplete={handleQuizCompletion} updateWrongAnswer={updateWrongAnswer} />
    </>
  )
}
