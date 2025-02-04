import { QuizSet, QuizSetName } from "@/types";

// This would typically come from an API or database
export const quizSets: Record<QuizSetName, QuizSet> = {
  "Set 1": {
    name: "Set 1",
    sections: [
      [
        {
          type: "text",
          question: "What is the primary objective of considering population growth projections in the planning phase of a WSS?",
          options: ["Reducing construction costs", "Ensuring water demand is sustainably met over the system's life cycle", "Increasing urbanization", "Encouraging groundwater usage"],
          correctAnswer: "Ensuring water demand is sustainably met over the system's life cycle",
        },
        {
          type: "text",
          question: "Which of the following is NOT a typical component of a hydrological study in WSS planning?",
          options: ["Measuring recharge rates", "Analyzing seasonal variations", "Examining social behaviour patterns", "Measuring flow rates"],
          correctAnswer: "Examining social behaviour patterns",
        },
        {
          type: "text",
          question: "What is the purpose of conducting water quality analysis during the planning phase?",
          options: ["To reduce the cost of treatment plants", "To identify contaminants and assess treatment needs", "To avoid the use of surface water sources", "To increase water usage"],
          correctAnswer: "To identify contaminants and assess treatment needs",
        },
        {
          type: "text",
          question: "Which of the following is a key risk to consider during water resource assessment?",
          options: ["Increased birth rates", "Seasonal variations in demand", "Climate change impacts and over-extraction", "Urban expansion planning"],
          correctAnswer: "Climate change impacts and over-extraction",
        },
        {
          type: "text",
          question: "What is a primary consideration when evaluating mitigation strategies during an Environmental Impact Assessment (EIA)?",
          options: ["Cost minimization", "Stakeholder approval without public input", "Minimizing negative environmental impacts such as pollution", "Ignoring habitat disruption during construction"],
          correctAnswer: "Minimizing negative environmental impacts such as pollution",
        },
        // {
        //   type: "text",
        //   question: "What is the purpose of conducting water quality analysis during the planning phase?",
        //   options: ["Oceans", "Rivers", "Groundwater", "Glaciers"],
        //   correctAnswer: "Groundwater",
        // },
        // {
        //   type: "text",
        //   question: "What is the purpose of conducting water quality analysis during the planning phase?",
        //   options: ["Oceans", "Rivers", "Groundwater", "Glaciers"],
        //   correctAnswer: "Groundwater",
        // },
        // {
        //   type: "text",
        //   question: "What is the purpose of conducting water quality analysis during the planning phase?",
        //   options: ["Oceans", "Rivers", "Groundwater", "Glaciers"],
        //   correctAnswer: "Groundwater",
        // },
        // {
        //   type: "text",
        //   question: "What is the purpose of conducting water quality analysis during the planning phase?",
        //   options: ["Oceans", "Rivers", "Groundwater", "Glaciers"],
        //   correctAnswer: "Groundwater",
        // },
        // {
        //   type: "text",
        //   question: "What is the purpose of conducting water quality analysis during the planning phase?",
        //   options: ["Oceans", "Rivers", "Groundwater", "Glaciers"],
        //   correctAnswer: "Groundwater",
        // }
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
