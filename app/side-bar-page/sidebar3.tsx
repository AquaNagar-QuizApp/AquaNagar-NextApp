"use client"
import { Trophy, CheckCircle, PlayCircle, PauseCircle} from "lucide-react"

interface Stage {
  name: string
  score: number
  maxScore: number
  unit: string
  isCompleted: boolean
}

export function SidebarVariation1({ stages, currentStageName }: { stages: Stage[]; currentStageName: string }) {

    const completedStages = stages.filter((stage) => stage.isCompleted);
    const currentStage = stages.find((stage) => stage.name === currentStageName);
    const pendingStages = stages.filter((stage) => !stage.isCompleted && stage.name !== currentStageName);

    const sortedStages = [
    ...completedStages, // ✅ Completed Stages First
    currentStage, // 🎯 Current Stage in Middle
    ...pendingStages, // ⏳ Pending Stages Last
    ].filter(Boolean); // Remove undefined values if `currentStageName` is incorrect

  return (
    <div className="w-1/3 bg-gray-800 p-6 rounded-xl mr-10 ml-[-50px] text-white shadow-lg">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-bold">Stages</h2>
        <div className="flex items-center gap-2">
          <Trophy className="w-5 h-5 text-yellow-400" />
          {/* <span className="text-yellow-400 font-bold">620</span> */}
        </div>
      </div>

      <div className="space-y-4">
        {sortedStages.map((stage, index) => {
          const isCurrent = stage?.name === currentStageName
          const isCompleted = stage?.isCompleted
          const isPlayable = !isCompleted && stage?.name === currentStageName // Next stage is playable
          
          return (
            <div
              key={index}
              className={`relative p-4 rounded-lg transition-all duration-300 ${
                isCompleted
                  ? "bg-gray-600 text-gray-300" // ✅ Completed: Gray color
                  : isCurrent
                  ? "bg-green-600 text-white" // 🎯 Current: Green color
                  : isPlayable
                  ? "bg-blue-600 text-white hover:bg-blue-500 cursor-pointer" // 🔵 Playable: Blue with hover effect
                  : "bg-gray-700 text-gray-400 cursor-not-allowed" // 🔒 Locked: Gray
              }`}
            >
              {/* Stage Header */}
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  {isCompleted ? (
                    <CheckCircle className="w-5 h-5 text-green-400" /> // ✅ Completed Icon
                  ) : isCurrent ? (
                    <PauseCircle className="w-5 h-5 text-yellow-400" /> // 👑 Current Stage
                  ) : isPlayable ? (
                    <PauseCircle className="w-5 h-5 text-yellow-400" /> // ▶️ Playable Next Stage
                  ) : (
                    <PlayCircle className="w-5 h-5 text-white" /> // ▶️ Playable Next Stage
                  )}
                  <span className="text-sm font-medium">{stage?.name}</span>
                </div>
              </div>

              {/* Show Progress Bar Only for Completed and Current Stage */}
              {(isCompleted) && (
                <>
                  <div className="w-full bg-gray-600 rounded-full h-2">
                    <div
                      className={`h-2 rounded-full transition-all duration-500 ${
                        isCompleted ? "bg-green-500" : "bg-yellow-400"
                      }`}
                      style={{ width: `${(stage.score / stage.maxScore) * 100}%` }}
                    />
                  </div>

                  {/* Score Display */}
                  <div className="flex justify-between text-xs mt-2">
                    <span className="text-gray-300">{stage.unit}</span>
                    <span className="text-gray-300">{stage.score}/{stage.maxScore}</span>
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
