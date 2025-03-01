import { Droplets } from "lucide-react"

interface ScoreBoardProps {
  score: number
  level: number
}

export default function ScoreBoard({ score, level }: ScoreBoardProps) {
  return (
    <div className="bg-blue-800/50 p-4 rounded-lg backdrop-blur-sm border border-blue-400/30 text-white shadow-lg">
      <div className="flex items-center gap-2 mb-2">
        <Droplets className="text-blue-200" />
        <h2 className="font-bold text-lg">Water Resources</h2>
      </div>

      <div className="space-y-2">
        <div className="flex justify-between">
          <span>Score:</span>
          <span className="font-bold">{score}</span>
        </div>

        <div className="w-full bg-blue-900/50 h-2 rounded-full overflow-hidden">
          <div
            className="bg-gradient-to-r from-blue-400 to-blue-300 h-full rounded-full"
            style={{ width: `${Math.min(100, (score % (level * 500)) / (level * 5))}%` }}
          />
        </div>

        <div className="flex justify-between text-sm text-blue-200">
          <span>Level {level}</span>
          <span>Level {level + 1}</span>
        </div>
      </div>
    </div>
  )
}

