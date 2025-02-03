export interface User {
    name: string
    department: string
    designation: string
    email: string
    phone: string
  }
  
  //export type QuizSet = "Set 1" | "Set 2" | "Set 3" | "Set 4"

  
export interface QuizSet {
    sections: Question[][]
  }
  
  export interface Question {
    type: "text" | "image"
    question: string
    options: string[]
    correctAnswer: string
    imageUrl?: string
  }
  
  export interface QuizProps {
    quizSet: QuizSet
    onComplete: (score: number) => void
  }
  
  export interface LoginProps {
    onLogin: (user: User) => void
  }
  
  export interface QuizSelectionProps {
    onSelect: (quizSet: QuizSet) => void
  }
  
  export interface CertificateProps {
    user: User
    score: number
  }
  
  