import { useState, useEffect, JSX } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

interface QuizSet {
  sections: Question[][]
}

interface Question {
  type: "text" | "image"
  question: string
  options: string[]
  correctAnswer: string
  imageUrl?: string
}

interface QuizProps {
  quizSet: QuizSet
  onComplete: (score: number) => void
}

// const mockQuestions: Question[] = [
//   {
//     type: "text",
//     question: "What is the main source of freshwater on Earth?",
//     options: ["Oceans", "Rivers", "Groundwater", "Glaciers"],
//     correctAnswer: "Groundwater",
//   },
//   {
//     type: "image",
//     question: "Which of these is a water conservation method?",
//     imageUrl: "/placeholder.svg?height=200&width=300",
//     options: ["Drip irrigation", "Flood irrigation", "Sprinkler system", "Manual watering"],
//     correctAnswer: "Drip irrigation",
//   },
//   // Add more mock questions here
// ]

export function Quiz({ quizSet, onComplete }: QuizProps): JSX.Element {
  // const [currentSection, setCurrentSection] = useState<number>(0)
  const currentSection = 0
  const [currentQuestion, setCurrentQuestion] = useState<number>(0)
  const [score, setScore] = useState<number>(0)
  const [timeLeft, setTimeLeft] = useState<number>(30)
  const [answered, setAnswered] = useState<boolean>(false)

  const handleNextQuestion = () => {
    const currentSectionQuestions = quizSet.sections[currentSection]

    if (currentQuestion < currentSectionQuestions.length - 1) {
      setCurrentQuestion((prev) => prev + 1)
      setTimeLeft(30)
      setAnswered(false)
    }
    // else if (currentSection < quizSet.sections.length - 1) {
    //   setCurrentSection((prev) => prev + 1)
    //   setCurrentQuestion(0)
    //   setTimeLeft(30)
    //   setAnswered(false)
    // }
    else {
      onComplete(score);
    }
  }

  // const handleNextQuestion = () => {
  //   const currentSectionQuestions = quizSet.sections[currentSection]
  //   if (currentQuestion < currentSectionQuestions.length - 1) {
  //     setCurrentQuestion((prev) => prev + 1)
  //     setTimeLeft(30)
  //   } else if (currentSection < quizSet.sections.length - 1) {
  //     setCurrentSection((prev) => prev + 1)
  //     setCurrentQuestion(0)
  //     setTimeLeft(30)
  //   } else {
  //     onComplete(score)
  //   }
  // }

  // useEffect(() => {
  //   const timer = setInterval(() => {
  //     setTimeLeft((prevTime) => {
  //       if (prevTime === 0) {
  //         handleNextQuestion()
  //         return 30
  //       }
  //       return prevTime - 1
  //     })
  //   }, 1000)

  //   return () => clearInterval(timer)
  // }, [handleNextQuestion])

  // useEffect(() => {
  //   const timer = setInterval(() => {
  //     setTimeLeft((prevTime) => {
  //       if (prevTime === 0) {
  //         if (!answered) {
  //           // Proceed to the next question if not answered yet
  //           handleNextQuestion()
  //         }
  //         return 30
  //       }
  //       return prevTime - 1
  //     })
  //   }, 1000)

  //   return () => clearInterval(timer)
  // }, [answered, handleNextQuestion])\

  useEffect(() => {
    let timer: NodeJS.Timeout | null = null

    if (!answered && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1)
      }, 1000)
    } else if (timeLeft === 0 && !answered) {
      console.log("Time Up! Moving to Next Question")
      handleNextQuestion()
    }

    return () => {
      if (timer) clearInterval(timer)
    }
  }, [timeLeft, answered, handleNextQuestion])

  // useEffect(() => {
  //   console.log("Timer Effect Running"); // Debug log

  //   const timer = setInterval(() => {
  //     console.log("Timer Triggered"); // Should print only once per second

  //     setTimeLeft((prevTime) => {
  //       if (prevTime === 0) {
  //         console.log("Time Up! Moving to Next Question");

  //         if (!answered) {
  //           handleNextQuestion();
  //         }
  //         return 30;
  //       }
  //       return prevTime - 1;
  //     });
  //   }, 1000);

  //   return () => {
  //     console.log("Cleaning up Timer");
  //     clearInterval(timer);
  //   };
  // }, [answered]); // Only depends on `answered`


  // const handleAnswer = (selectedAnswer: string) => {
  //   const currentSectionQuestions = quizSet.sections[currentSection]
  //   if (selectedAnswer === currentSectionQuestions[currentQuestion].correctAnswer) {
  //     setScore((prevScore) => prevScore + 1)
  //   }
  //   handleNextQuestion()
  // }

  const handleAnswer = (selectedAnswer: string) => {
    const currentSectionQuestions = quizSet.sections[currentSection]
    if (selectedAnswer === currentSectionQuestions[currentQuestion].correctAnswer) {
      setScore((prevScore) => prevScore + 1)
    }
    setAnswered(true)
    handleNextQuestion()
  }

  const currentQuestionData = quizSet.sections[currentSection][currentQuestion]

  const questionVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
    exit: { opacity: 0, x: 50, transition: { duration: 0.5 } },
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    }
  }

  return (
    <Card className="p-6 space-y-4">
      <motion.div
        className="flex justify-between items-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h3 className="text-xl font-semibold">
          Section {currentSection + 1} - Question {currentQuestion + 1}
        </h3>
        <span className="text-lg font-medium">Time left: {timeLeft}s</span>
      </motion.div>
      <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 0.5 }}>
        <Progress value={(timeLeft / 30) * 100} className="w-full" />
      </motion.div>
      <AnimatePresence mode="wait">
        <motion.div
          key={currentQuestion}
          variants={questionVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="space-y-4"
        >
          {currentQuestionData.type === "image" && (
            <motion.img
              src={currentQuestionData.imageUrl || "/placeholder.svg"}
              alt="Question Image"
              className="w-full h-48 object-cover rounded-md"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            />
          )}
          <p className="text-lg text-center">{currentQuestionData.question}</p>

          <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-8" variants={containerVariants}>
            {currentQuestionData.options.map((option) => (
              <motion.div key={option} variants={itemVariants}>
                <motion.div
                  className="px-4 py-2 bg-blue-700 text-white rounded-lg font-medium backdrop-blur-lg flex items-center justify-center"
                  whileHover={{
                    scale: 1.05,
                    transition: { duration: 0.2 },
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    onClick={() => handleAnswer(option)}
                    className="w-full h-full py-3 px-3 text-base font-medium text-center break-words whitespace-normal flex items-center justify-center md:w-60 md:h-16"
                    >
                    {option}
                  </Button>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
          {/* <motion.div
            className="grid grid-cols-2 gap-4"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.1 },
              },
            }}
            initial="hidden"
            animate="visible"
          >
            {currentQuestionData.options.map((option) => (
              <motion.div
                key={option}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                <Button onClick={() => handleAnswer(option)}
                  className="w-full h-full py-4 px-1 text-lg font-semibold text-center break-words whitespace-normal flex items-center justify-center md:w-64 md:h-20">
                  {option}
                </Button>
              </motion.div>
            ))}
          </motion.div> */}
        </motion.div>
      </AnimatePresence>
    </Card>
  )
}
