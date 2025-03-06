"use client"

import { useState, useEffect } from "react"
import { Star, Award, Droplet, Brain, Lightbulb, Coins, Cpu, Shield } from "lucide-react"
import confetti from "canvas-confetti"

interface ResultsScreenProps {
  score: number // Percentage score (0-100)
  
}

export default function ResultsScreen({
  score = 85, // Default score for preview
  
}: ResultsScreenProps) {
  const [showTraits, setShowTraits] = useState(false)

  // Calculate rating based on score
  const getRating = (score: number) => {
    if (score >= 90) return { stars: 5, level: "Master Water Expert 💧", color: "bg-blue-600" }
    if (score >= 80) return { stars: 4, level: "Advanced Water Expert 🌊", color: "bg-blue-500" }
    if (score >= 60) return { stars: 3, level: "Intermediate Water Expert ⚖️", color: "bg-blue-400" }
    if (score >= 40) return { stars: 2, level: "Basic Water Expert ⚠️", color: "bg-blue-300" }
    return { stars: 1, level: "Emerging Water Expert 💠", color: "bg-blue-200" }
  }

  const rating = getRating(score);

  // Get traits based on rating
  const getTraits = (stars: number) => {
    switch (stars) {
      case 5:
        return [
          { icon: <Brain className="w-5 h-5" />, text: "Visionary Thinker" },
          { icon: <Lightbulb className="w-5 h-5" />, text: "Highly Analytical" },
          { icon: <Droplet className="w-5 h-5" />, text: "Sustainability Champion" },
          { icon: <Coins className="w-5 h-5" />, text: "Smart Financial Strategist" },
          { icon: <Cpu className="w-5 h-5" />, text: "Tech-Savvy Leader" },
          { icon: <Shield className="w-5 h-5" />, text: "Resilient Decision-Maker" },
        ]
      case 4:
        return [
          { icon: <Brain className="w-5 h-5" />, text: "Strategic Thinker" },
          { icon: <Lightbulb className="w-5 h-5" />, text: "Efficient Manager" },
          { icon: <Droplet className="w-5 h-5" />, text: "Problem Solver" },
          { icon: <Shield className="w-5 h-5" />, text: "Collaborative Leader" },
        ]
      case 3:
        return [
          { icon: <Brain className="w-5 h-5" />, text: "Practical Thinker" },
          { icon: <Lightbulb className="w-5 h-5" />, text: "Reactive but Less Proactive" },
          { icon: <Droplet className="w-5 h-5" />, text: "Technically Adequate" },
          { icon: <Shield className="w-5 h-5" />, text: "Moderately Effective Leader" },
          { icon: <Coins className="w-5 h-5" />, text: "Budget-Conscious but Not Optimized" },
        ]
      case 2:
        return [
          { icon: <Brain className="w-5 h-5" />, text: "Short-Term Thinker" },
          { icon: <Lightbulb className="w-5 h-5" />, text: "Limited Technical Knowledge" },
          { icon: <Droplet className="w-5 h-5" />, text: "Less-Effective Resource Manager" },
          { icon: <Coins className="w-5 h-5" />, text: "Inadequate Financial Planner" },
          { icon: <Shield className="w-5 h-5" />, text: "Minimal Public Engagement" },
        ]
      default:
        return [
          { icon: <Brain className="w-5 h-5" />, text: "Room for Growth" },
          { icon: <Lightbulb className="w-5 h-5" />, text: "Learning in Progress" },
          { icon: <Droplet className="w-5 h-5" />, text: "Need to Build a Strong Foundation" },
          { icon: <Coins className="w-5 h-5" />, text: "Can Improve Financial Awareness" },
          { icon: <Shield className="w-5 h-5" />, text: "Future Innovator" },
        ]
    }
  }

  const traits = getTraits(rating.stars);

  // Launch confetti effect on component mount
  useEffect(() => {
    
    // if (typeof window !== 'undefined'){
    //     return
    // }
    const duration = 3 * 1000;
    const animationEnd = Date.now() + duration;
    const colors = ["#0284c7", "#0ea5e9", "#7dd3fc", "#38bdf8"];

    const runConfetti = () => {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) return;

      const particleCount = 50 * (timeLeft / duration);

      confetti({
        particleCount,
        spread: 70,
        origin: { y: 0.6 },
        colors: colors,
        disableForReducedMotion: true,
      });

      requestAnimationFrame(runConfetti);
    }

    runConfetti()

    // Show traits with delay
    const traitsTimer = setTimeout(() => {
      setShowTraits(true)
    }, 1500)

    return () => {
      clearTimeout(traitsTimer)
    }
  }, [score])

  return (
    // <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-gradient-to-br from-teal-500 to-blue-600">
      // <div className="max-w-md w-full bg-white/90 backdrop-blur-sm rounded-xl shadow-2xl p-6 relative overflow-hidden">
      <>
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <Droplet
              key={i}
              className="absolute text-blue-500"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                fontSize: `${Math.random() * 20 + 10}px`,
                transform: `rotate(${Math.random() * 360}deg)`,
              }}
            />
          ))}
        </div>

        <div className="text-center mb-6">
          {/* <h1 className="text-3xl font-bold text-blue-700 mb-2">All Stages Completed!</h1> */}
          <div className="flex justify-center mb-2">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-8 h-8 ${i < rating.stars ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`}
              />
            ))}
          </div>
          <div className="text-lg font-medium text-blue-800">{rating.level}</div>

          <div className="mt-4 mb-2">
            <div className="flex justify-between text-sm mb-1 text-blue-700">
              <span>Your Score</span>
              <span className="font-bold text-blue-700">{Math.round(score)}%</span>
            </div>
            {/* <Progress value={animateProgress} className="w-full h-4 transition-all duration-500" /> */}

            <div className="mt-4">
                <div className="w-full bg-gray-300 rounded-full h-2.5">
                    <div
                        className="h-2.5 rounded-full transition-all duration-500 ease-in-out bg-orange-400"
                        style={{
                            width: `${score}%`
                        }}
                    ></div>
                </div>
                
            </div>
          </div>
        </div>

        <div
          className={`transition-all duration-700 ${showTraits ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
        >
          <h2 className="font-bold text-blue-700 mb-3 flex items-center">
            <Award className="mr-2 h-5 w-5" />
            Your Water Expert Traits
          </h2>

          <div className="space-y-3 mb-6">
            {traits.map((trait, index) => (
              <div
                key={index}
                className="flex items-center p-2 rounded-lg bg-blue-50 border border-blue-100"
                style={{
                  animationDelay: `${index * 200}ms`,
                  animation: "fadeIn 0.5s ease-out forwards",
                }}
              >
                <div className="mr-3 text-blue-600">{trait.icon}</div>
                <div className="text-blue-800">{trait.text}</div>
              </div>
            ))}
          </div>
        </div>

      {/* </div> */}

      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </>
  )
}

