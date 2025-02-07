// "use client"

// import { useRouter, useSearchParams } from "next/navigation"
// import { motion } from "framer-motion"
// import { AnimatedBackground } from "@/components/AnimatedBackground"
// import { Quiz } from "@/components/Quiz"
// import type { QuizSet, QuizSetName } from "@/types"
// import { JSX } from "react"

// // This would typically come from an API or database
// const quizSets: Record<QuizSetName, QuizSet> = {
//   "Set 1": {
//     name: "Set 1",
//     sections: [
//       [
//         {
//           type: "text",
//           question: "What is the main source of freshwater on Earth?",
//           options: ["Oceans", "Rivers", "Groundwater", "Glaciers"],
//           correctAnswer: "Groundwater",
//         },
//         // Add more questions for this section
//       ],
//       // Add more sections
//     ],
//   },
//   "Set 2": {
//     name: "Set 2",
//     sections: [
//       [
//         {
//           type: "image",
//           question: "Which of these is a water conservation method?",
//           imageUrl: "/placeholder.svg?height=200&width=300",
//           options: ["Drip irrigation", "Flood irrigation", "Sprinkler system", "Manual watering"],
//           correctAnswer: "Drip irrigation",
//         },
//         // Add more questions for this section
//       ],
//       // Add more sections
//     ],
//   },
//   "Set 3": { name: "Set 3", sections: [[]] }, // Add actual questions
//   "Set 4": { name: "Set 4", sections: [[]] }, // Add actual questions
// }

// export default function QuizPage(): JSX.Element {
//   const router = useRouter()
//   const searchParams = useSearchParams()
//   const stage = searchParams.get("stage")
//   const quizSetName = searchParams.get("set") as QuizSetName | null

//   const handleQuizCompletion = (score: number): void => {
//     router.push(
//       `/certificate?stage=${encodeURIComponent(stage ?? "")}&set=${encodeURIComponent(quizSetName ?? "")}&score=${score}`,
//     )
//   }

//   if (!stage || !quizSetName || !(quizSetName in quizSets)) {
//     return <div>Error: Missing or invalid stage or quiz set information</div>
//   }

//   const quizSet = quizSets[quizSetName]

//   return (
//     <main className="min-h-screen relative overflow-hidden">
//       <AnimatedBackground />
//       <div className="relative z-10 h-screen flex flex-col items-center justify-center">
//         <motion.div
//           className="max-w-2xl w-full bg-white bg-opacity-20 backdrop-blur-lg rounded-xl p-8"
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//         >
//           <h2 className="text-2xl font-semibold text-white mb-6 text-center">
//             {stage} - {quizSet.name}
//           </h2>
//           <Quiz quizSet={quizSet} onComplete={handleQuizCompletion} />
//         </motion.div>
//       </div>
//     </main>
//   )
// }

import { JSX, Suspense } from "react"
import { AnimatedBackground } from "@/components/AnimatedBackground"
import { QuizContent } from "@/components/QuizContent"

export default function QuizPage(): JSX.Element {
  return (
    <main className="min-h-screen relative overflow-auto">
      <AnimatedBackground />
      {/* <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 py-6">
        <div className="max-w-2xl w-full bg-white bg-opacity-20 backdrop-blur-lg rounded-xl p-8">
          <Suspense fallback={<div className="text-center text-white">Loading quiz...</div>}>
            <QuizContent />
          </Suspense>
        </div>
      </div> */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 py-6 ">
        <div className="max-w-3xl w-full bg-white bg-opacity-20 backdrop-blur-lg rounded-xl p-4 ">
          <Suspense fallback={<div className="text-center text-white">Loading quiz...</div>}>
            <QuizContent />
          </Suspense>
        </div>
      </div>
    </main>
  )
}
