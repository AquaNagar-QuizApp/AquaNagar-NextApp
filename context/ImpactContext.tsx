"use client"
import React, { createContext, useContext, useState, ReactNode } from 'react';

interface ImpactContextType {
  wrongAnswer: number;
  updateWrongAnswer: (wrongAnswers: number) => void;
}

const defaultContextValue: ImpactContextType = {
  wrongAnswer: 0,
  updateWrongAnswer: () => {},
};

const ImpactContext = createContext<ImpactContextType>(defaultContextValue);

export const useImpact = () => useContext(ImpactContext);

interface ImpactProviderProps {
  children: ReactNode;
}

export const ImpactProvider = ({ children }: ImpactProviderProps) => {
  const [wrongAnswer, setWrongAnswer] = useState(0);

  const updateWrongAnswer = (wrongAnswers: number ) => {
    setWrongAnswer(wrongAnswers);
  };

  return (
    <ImpactContext.Provider value={{ wrongAnswer, updateWrongAnswer }}>
      {children}
    </ImpactContext.Provider>
  );
};
