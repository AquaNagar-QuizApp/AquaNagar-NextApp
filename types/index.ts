export type QuizSetName = "Set 1" | "Set 2" | "Set 3" | "Set 4"
// export type TitleOption = "Mr" | "Mrs" | "Ms" | "Dr"
export enum Title {
  Mr = 0,
  Mrs = 1,
  Ms = 2,
  Dr = 3
}


export interface Question {
  type: "text" | "image"
  question: string
  options: string[]
  correctAnswer: string
  imageUrl?: string
}

export type Stage = {
  stageName: string;
  questions: Question[];
};

export type Set = {
  setName: string;
  stages: Stage[];
};

export type Role = {
  roleName: string;
  quizSets: Set[];
};

// export interface QuizSet {
//   setName: QuizSetName
//   sections: Question[][]
// }

export interface User {
  name: string
  department: string
  designation: string
  email: string
  mobile: string
  title: Title | ""
}

export interface LoginError {
  name: string
  department: string
  designation: string
  email: string
  mobile: string
  title: string
  mobileAndEmail: string
}

export interface QuizProps {
  quizSet: Set
  onComplete: (score: number) => void
}

export interface LoginProps {
  onLogin: (user: User) => void
}

export interface QuizSelectionProps {
  onSelect: (quizSetName: QuizSetName) => void
}

export interface CertificateProps {
  user: User
  score: number
}

