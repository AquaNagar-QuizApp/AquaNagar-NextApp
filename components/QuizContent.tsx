"use client"

import { useRouter, useSearchParams } from "next/navigation"
import { Quiz } from "@/components/Quiz"
import type { QuizSetName, Role, Set, Stage } from "@/types"
import { quizDataByRole } from "@/components/data/quizData"
import { JSX, useEffect, useState } from "react"

export function QuizContent(): JSX.Element {
  const router = useRouter()
  const searchParams = useSearchParams()
  const stageName = searchParams.get("stage")
  const stageNameText = searchParams.get("stageNameText")
  const quizSetName = searchParams.get("set") as QuizSetName | null

  const [selectedStage, setSelectedStage] = useState<Stage | undefined>(undefined)
  const apiBaseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

  const fetchQuestions = async (setId: number, sectionId: number) => {
    try {
      const roleId = sessionStorage.getItem("roleID") ?? 0;
      const response = await fetch(apiBaseUrl +`/api/questions/set/${setId}/section/${sectionId}/role/${roleId}`);
      
      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }
  
      const data = await response.json();
      console.log("Fetched Questions:", data);
      if(stageNameText)
      {
        setSelectedStage(transformDataToStage(stageNameText, data));
      }
    } catch (error) {
      console.error("Failed to fetch questions:", error);
      return null;
    }
  };

  useEffect(() => {
    if (!stageName || !quizSetName) {
      console.error("Missing stage or quiz set name");
      return; // Prevent execution if values are missing
    }
    const sectionId = parseInt(stageName, 10);
    const setId = parseInt(quizSetName, 10);
  
    fetchQuestions(setId, sectionId)
  }, []);

  const transformDataToStage = (stageName: string, apiData: any[]): Stage => {
    return {
      stageName,
      questions: apiData.map((item) => ({
        type: item.imageUrl ? "image" : "text",
        question: item.questionText,
        options: item.options.map((opt: { optionText: string }) => opt.optionText),
        correctAnswer: item.correctOption.optionText,
        imageUrl: item.imageUrl || undefined,
      })),
    };
  };

  if (typeof window !== "undefined") {
    const storedRole = sessionStorage.getItem("selectedRole");
    if (storedRole) {
      const roleName = JSON.parse(storedRole);
      const selectedRole: Role | undefined = quizDataByRole.find(role => role.roleName === roleName);

      // if (!selectedRole) {
      //   console.error(`Role "${roleName}" not found.`);
      // }

      // Find the quiz set within the selected role
      // selectedQuizSet = selectedRole?.quizSets.find(set => set.setName === quizSetName);

      // if (!selectedQuizSet) {
      //   console.error(`Quiz Set "${quizSetName}" not found for role "${roleName}".`);
      // }

      // Find the specific stage within the selected quiz set
      //selectedStage = selectedQuizSet?.stages.find(s => s.stageName === stageName);

      // if (!selectedStage) {
      //   console.error(`Stage "${stageName}" not found in Quiz Set "${quizSetName}" for role "${roleName}".`);
      // }
    }
  }

  // // Find the quiz set
  // const selectedQuizSet: Set | undefined = quizDataByRole.find(set => set.setName === quizSetName);
  // // const selectedQuizSet = quizData.find(set => set.setName === quizSetName);

  // // Find the specific stage within the selected quiz set
  // const selectedStage: Stage | undefined = selectedQuizSet?.stages.find(s => s.stageName === stageName);

  const handleQuizCompletion = (score: number): void => {
    // router.push(
    //   `/certificate?stage=${encodeURIComponent(stage ?? "")}&set=${encodeURIComponent(quizSetName ?? "")}&score=${score}`,
    // )

    router.replace(`/complete?set=${encodeURIComponent(quizSetName ?? "")}&stage=${encodeURIComponent(stageNameText ?? "")}&score=${score}`);
  }

  // if (!stage || !quizSetName || !(quizSetName in quizData)) {
  //   return <div className="text-white">Error: Missing or invalid stage or quiz set information</div>
  // }
  if (!stageName || !selectedStage || !stageNameText) {
    return <div className="text-white">Error: Missing or invalid stage or quiz set information</div>;
  }

  return (
    <>
      <h2 className="text-2xl font-semibold text-white mb-6 text-center">
        {stageNameText}
        {/* - {quizSetName} */}
      </h2>
      <Quiz quizSet={selectedStage} stage={stageNameText} onComplete={handleQuizCompletion} />
    </>
  )
}
