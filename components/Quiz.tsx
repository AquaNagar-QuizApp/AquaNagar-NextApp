import { useState, useEffect, JSX, useCallback, useRef, useMemo } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { useAudio } from "@/context/AudioContext"
import { Stage } from "@/types"
import { Clock } from "lucide-react"

interface QuizProps {
  quizSet: Stage
  stage: string
  onComplete: (score: number) => void
  updateWrongAnswer: (wrongAnswers: number) => void
}

export function Quiz({ quizSet, stage, onComplete, updateWrongAnswer }: QuizProps): JSX.Element {
  const [currentQuestion, setCurrentQuestion] = useState<number>(0)
  const [score, setScore] = useState<number>(0)
  const [timeLeft, setTimeLeft] = useState<number>(30)
  const [answered, setAnswered] = useState<boolean>(false)
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [correctAnswer, setCorrectAnswer] = useState<string | null>(null);
  const [highlighted, setHighlighted] = useState<boolean>(false);
  const [wrongAnswers, setWrongAnswers] = useState(0); // Track wrong answers

  const { isMuted, playBackgroundMusic, pauseBackgroundMusic, setBackgroundAudioSrc } = useAudio();

  const correctSoundRef = useRef<HTMLAudioElement | null>(null);
  const wrongSoundRef = useRef<HTMLAudioElement | null>(null);
  const buzzerSoundRef = useRef<HTMLAudioElement | null>(null);

  // Play background music after the sound ends
  useEffect(() => {
    const resumeBGM = () => {
      if (!isMuted) {
        playBackgroundMusic();
      }
    };

    if (typeof window !== "undefined") {
      const storedData = sessionStorage.getItem("completedSections");

      if (storedData) {
        const parsedData: Record<string, number>[] = JSON.parse(storedData); // Parse as an array of objects

        const sectionCount = parsedData.length; // Get the number of completed sections

        // Set background audio based on whether the count is even or odd
        setBackgroundAudioSrc(sectionCount % 2 === 0 ? "./songs/quizaudio1.mp3" : "./songs/quizaudio2.mp3");
      }
    }

    // Add event listeners to sound elements
    const correctSound = correctSoundRef.current;
    const wrongSound = wrongSoundRef.current;
    const buzzerSound = buzzerSoundRef.current;

    if (correctSound) {
      correctSound.volume = 0.2;
      correctSound.addEventListener("ended", resumeBGM);
    }
    if (wrongSound) {
      wrongSound.volume = 0.2;
      wrongSound.addEventListener("ended", resumeBGM);
    }
    if (buzzerSound) {
      buzzerSound.volume = 0.2;
      buzzerSound.addEventListener("ended", resumeBGM);
    }

    // Cleanup event listeners
    return () => {
      if (correctSound) {
        correctSound.removeEventListener("ended", resumeBGM);
      }
      if (wrongSound) {
        wrongSound.removeEventListener("ended", resumeBGM);
      }
      if (buzzerSound) {
        buzzerSound.removeEventListener("ended", resumeBGM);
      }
    };
  }, [playBackgroundMusic, setBackgroundAudioSrc, isMuted]);

  const handleNextQuestion = useCallback(() => {
    const currentSectionQuestions = quizSet.questions;

    if (currentQuestion < currentSectionQuestions.length - 1) {
      if (answered && selectedOption === correctAnswer) {
        setScore((prev) => prev + 1);
      }
      setCurrentQuestion((prev) => prev + 1);
      setTimeLeft(30);
      setAnswered(false);
      setSelectedOption(null);
      setCorrectAnswer(null);
      setHighlighted(false);
    } else {
      // Wait for animation before completing the quiz
      setTimeout(() => {
        setScore((prevScore) => {
          const finalScore = answered && selectedOption === correctAnswer ? prevScore + 1 : prevScore;
          if (typeof window !== 'undefined') {
            const completedSections = JSON.parse(sessionStorage.getItem("completedSections") || "{}");
            completedSections[stage] = score + (answered && selectedOption === correctAnswer ? 1 : 0);
            sessionStorage.setItem("completedSections", JSON.stringify(completedSections));
          }
          onComplete(finalScore);
          return finalScore;
        });
      }, 500); // Wait for exit animation (500ms)
    }
  }, [quizSet, currentQuestion, answered, selectedOption, correctAnswer, onComplete]);


  useEffect(() => {
    let timer: NodeJS.Timeout | null = null;
    let isTimeoutTriggered = false;

    if (!answered && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft((prevTime) => {
          if (prevTime === 1 && !isMuted) {
            pauseBackgroundMusic(); // Pauses the background music
            buzzerSoundRef.current?.play(); // Play buzzer sound 1 second before timeout
          }
          return prevTime - 1;
        });
      }, 1000);
    } else if (timeLeft === 0 && !answered && !isTimeoutTriggered) {
      isTimeoutTriggered = true;

      const correct = quizSet.questions[currentQuestion].correctAnswer;
      setCorrectAnswer(correct);
      setHighlighted(true);

      setWrongAnswers((prevWrong) => prevWrong + 1); // Increment wrong answers
      updateWrongAnswer(wrongAnswers + 1);

      setTimeout(() => {
        handleNextQuestion();
      }, 2000);
    }

    return () => {
      if (timer) clearInterval(timer);
    };
  }, [timeLeft, answered, isMuted, currentQuestion, quizSet]);

  const handleAnswer = (selectedAnswer: string) => {
    const currentSectionQuestions = quizSet.questions;
    const correct = currentSectionQuestions[currentQuestion].correctAnswer;

    setSelectedOption(selectedAnswer);
    setCorrectAnswer(correct);
    setAnswered(true);
    setHighlighted(true); // Ensures immediate highlight when user answers

    if (isMuted) {
      // Pause background music before playing the sound effect
      pauseBackgroundMusic();
    }

    if (selectedAnswer === correct) {
      setScore((prevScore) => prevScore + 1);
      updateWrongAnswer(wrongAnswers);

      if (!isMuted) {
        pauseBackgroundMusic();
        correctSoundRef.current?.play(); // Play correct sound
      }
    } else {
      setWrongAnswers((prevWrong) => prevWrong + 1); // Increment wrong answers
      updateWrongAnswer(wrongAnswers + 1);

      if (!isMuted) {
        pauseBackgroundMusic();
        wrongSoundRef.current?.play(); // Play wrong sound
      }
    }

    setTimeout(() => {
      // Ensure last question triggers completion
      if (currentQuestion === currentSectionQuestions.length - 1) {
        const finalScore = score + (selectedAnswer === correct ? 1 : 0);
        // if (finalScore > 0) {
        if (typeof window !== 'undefined') {
          const completedSections = JSON.parse(sessionStorage.getItem("completedSections") || "{}");
          completedSections[stage] = finalScore + (answered && selectedOption === correctAnswer ? 1 : 0);
          sessionStorage.setItem("completedSections", JSON.stringify(completedSections));
          // }
        }
        onComplete(finalScore); // Finalize the score
      } else {
        handleNextQuestion();
      }
    }, 2000); // Wait for animation before moving to next
  };


  // const currentQuestionData = quizSet.questions[currentQuestion];
  const currentQuestionData = useMemo(() => {
    return {
      ...quizSet.questions[currentQuestion],
      options: [...quizSet.questions[currentQuestion].options].sort(() => Math.random() - 0.5)
    };
  }, [currentQuestion]); // Rerun only when currentQuestion changes
  

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
      <>
        <audio ref={correctSoundRef} src="./soundeffects/correctanswer.mp3" />
        <audio ref={wrongSoundRef} src="./soundeffects/wronganswer.mp3" />
        <audio ref={buzzerSoundRef} src="./soundeffects/buzzersound.mp3" />
      </>
      <motion.div
        className="flex justify-between items-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h3 className="text-xl font-semibold">
          {/* Stage {currentSection + 1} -  */}
          Question {currentQuestion + 1}
        </h3>
        <div className="flex items-center gap-2 text-white">
          <Clock className="h-5 w-5" />
          <span className="text-lg font-medium">Time left: {timeLeft}s</span>
        </div>
      </motion.div>

      <AnimatePresence mode="wait">
        <motion.div
          // key={timeLeft} // Re-triggers animation when timeLeft updates
          initial={{ scaleX: 1, opacity: 1 }}
          animate={{
            scaleX: timeLeft > 0 ? timeLeft / 30 : 0, // Shrink width smoothly
            opacity: timeLeft > 0 ? 1 : 0, // Fade out when reaching 0s
            scaleY: timeLeft > 0 ? 1 : 0.2, // Reduce height at the end
          }}
          transition={{ duration: 1, ease: "linear" }} // Smooth animation
          className="w-full" // origin-left class makes the shrinking from right to left
        >
          <Progress
            value={(timeLeft / 30) * 100}
            className={`w-full h-4 transition-all duration-500 ${timeLeft <= 10 ? "bg-red-500" : timeLeft <= 20 ? "bg-blue-500" : "bg-green-500"
              }`}
          />
        </motion.div>
      </AnimatePresence>

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
              className="w-full max-w-2xl mx-auto h-48 aspect-video object-contain rounded-md" // h-auto uses entire height of original image
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            />
          )}
          <p className="text-lg text-center">{currentQuestionData.question}</p>

          <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full" variants={containerVariants}>
            {currentQuestionData.options.map((option) => {
              return (
                <motion.div key={option} variants={itemVariants} className="w-full">
                  <motion.div
                    // className={`px-4 py-2 text-white rounded-lg font-medium backdrop-blur-lg flex items-center justify-center ${bgColor}`}
                    className={`px-4 py-2 rounded-lg font-medium backdrop-blur-lg flex items-center justify-center
                      ${selectedOption || highlighted
                        ? option === correctAnswer
                          ? "bg-green-600 text-white font-bold shadow-lg scale-105" // Correct option
                          : option === selectedOption
                            ? "bg-red-600 text-white font-bold shadow-lg scale-105" // Incorrect option
                            : "opacity-50" // Other options fade out
                        : "bg-blue-600 text-white"
                      }
                    `}
                    whileHover={{
                      scale: selectedOption ? 1 : 1.05,
                      transition: { duration: 0.2 },
                    }}
                    whileTap={{ scale: selectedOption ? 1 : 0.95 }}
                  >
                    <Button
                      onClick={() => handleAnswer(option)}
                      className="w-full min-h-[64px] py-2 px-3 text-sm sm:text-base font-medium text-center break-words whitespace-normal" //flex items-center justify-center md:w-60 md:h-16
                      disabled={!!selectedOption} // Disable after selecting an answer
                    >
                      {option}
                    </Button>
                  </motion.div>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </Card>
  )
}
