import { QuizSet, QuizSetName } from "@/types";

// This would typically come from an API or database
export const quizSets: Record<QuizSetName, QuizSet> = {
  "Set 1": {
    name: "Set 1",
    sections: [
      [
        {
          type: "text",
          question: "What is the main source of freshwater on Earth?",
          options: ["Oceans", "Rivers", "Groundwater", "Glaciers"],
          correctAnswer: "Groundwater",
        },
        // Add more questions for this section
      ],
      // Add more sections
    ],
  },
  "Set 2": {
    name: "Set 2",
    sections: [
      [
        {
          type: "image",
          question: "Which of these is a water conservation method?",
          imageUrl: "/placeholder.svg?height=200&width=300",
          options: ["Drip irrigation", "Flood irrigation", "Sprinkler system", "Manual watering"],
          correctAnswer: "Drip irrigation",
        },
        // Add more questions for this section
      ],
      // Add more sections
    ],
  },
  "Set 3": { name: "Set 3", sections: [[]] }, // Add actual questions
  "Set 4": { name: "Set 4", sections: [[]] }, // Add actual questions
}
