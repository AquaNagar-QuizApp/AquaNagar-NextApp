"use client"

import { useImpact } from '@/context/ImpactContext';
import { useSearchParams } from 'next/navigation';
import React, { ReactElement } from 'react';
import { Droplet, Gauge, Building2, FlaskRoundIcon as Flask, Wifi, CreditCard, BarChart2, LineChart, CheckCircle2, Clock } from "lucide-react"

interface Stage {
    name: string;
    startValue: number;
    unit: string;
    icon: React.ReactNode;
    decrease: boolean; // Flag to indicate if value should decrease
    incOrDecValue: number;
    description: string;
    wrongAnswerComment: string;
    goal: string;
}

const stages: Stage[] = [
    {
        name: "Plan a Water Supply System",
        startValue: 6100,
        unit: "Million Cubic Feet",
        icon: <Droplet className="h-7 w-7" />,
        decrease: true, incOrDecValue: 307,
        description: "The system is designed to store 6,100 million cubic feet of water.",
        wrongAnswerComment: "For each wrong answer, the storage capacity decreases by 307 million cubic feet.",
        goal: "Ensure full storage capacity is maintained for a reliable water supply."
    },
    {
        name: "Design the Water Supply System",
        startValue: 150,
        unit: "Crores",
        icon: <Gauge className="h-7 w-7" />,
        decrease: false,
        incOrDecValue: 5,
        description: "The baseline lifecycle cost is 150 crores.",
        wrongAnswerComment: "For each wrong answer, an extra 5 crores is added.",
        goal: "Minimize costs while ensuring a robust design."
    },
    {
        name: "Building the Infrastructure",
        startValue: 24,
        unit: "Months",
        icon: <Building2 className="h-7 w-7" />,
        decrease: false,
        incOrDecValue: 1,
        description: "The project is planned to be completed in 24 months.",
        wrongAnswerComment: "Every wrong answer results in a one-month delay.",
        goal: "Complete the infrastructure on schedule without delays."
    },
    {
        name: "Water Treatment",
        startValue: 0,
        unit: "Cases",
        icon: <Flask className="h-7 w-7" />,
        decrease: false,
        incOrDecValue: 100,
        description: "The system is optimized to deliver safe, pathogen-free water.",
        wrongAnswerComment: "For each wrong answer, an additional 100 cases of waterborne disease may occur.",
        goal: "Ensure 100% safe water supply with zero contamination."
    },
    {
        name: "Smart Water Networks",
        startValue: 0,
        unit: "Cubic Feet",
        icon: <Wifi className="h-7 w-7" />,
        decrease: false,
        incOrDecValue: 13700,
        description: "Initially, 0 cubic feet of water is lost in the system.",
        wrongAnswerComment: "For each wrong answer, an additional 13,700 cubic feet of water is lost per day due to defects in the SCADA system.",
        goal: "Maintain a zero-loss smart water network."
    },
    {
        name: "Metering, Billing, and Collection",
        startValue: 0,
        unit: "kWh",
        icon: <CreditCard className="h-7 w-7" />,
        decrease: false,
        incOrDecValue: 500,
        description: "Initially, 0 kWh of energy is consumed for operational efficiency.",
        wrongAnswerComment: "For each wrong answer, an additional 500 kWh of energy is consumed per month.",
        goal: "Optimize energy use to maintain efficiency and sustainability."
    },
    {
        name: "Non-Revenue Water Management",
        startValue: 0,
        unit: "Cubic Feet",
        icon: <BarChart2 className="h-7 w-7" />,
        decrease: false,
        incOrDecValue: 13000,
        description: "With zero leaks, the full capacity of the dam is utilized.",
        wrongAnswerComment: "Every wrong decision results in an additional loss of 13,000 cubic feet of water per day.",
        goal: "Eliminate leaks and maximize water conservation."
    },
    {
        name: "Performance Assessment & Operational Excellence",
        startValue: 100,
        unit: "Satisfied %",
        icon: <LineChart className="h-7 w-7" />,
        decrease: true,
        incOrDecValue: 2.5,
        description: "In an optimally designed system, 100% of customers are satisfied.",
        wrongAnswerComment: "For every wrong answer, an additional 2.5% of customers become dissatisfied.",
        goal: "Maintain 100% customer satisfaction by ensuring system efficiency."
    }
];

export default function ImpactCard() {
    const searchParams = useSearchParams();
    const stageName = searchParams.get("stage");
    const currentStage = stages.find((s) => s.name === stageName);

    // Get the current impact value from context
    const { wrongAnswer } = useImpact();

    const currentScore = currentStage
        ? (currentStage.decrease
            ? currentStage.startValue - wrongAnswer * (currentStage.incOrDecValue) // Decreasing impact scenario
            : currentStage.startValue + wrongAnswer * (currentStage.incOrDecValue) // Increasing impact scenario
        )
        : 0;

    return (
        <>
            <h2 className="text-white text-xl font-semibold text-center mb-4">Impact</h2>
            <div className="bg-sky-500 rounded-lg p-4 mb-4">
                <div className="flex items-center mb-2">
                    <div className="bg-amber-400 p-1 rounded mr-2">
                        {/* <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <rect x="2" y="5" width="20" height="14" rx="2" ry="2"></rect>
                            <line x1="2" y1="10" x2="22" y2="10"></line>
                        </svg> */}
                        {currentStage?.icon}
                    </div>
                    <h3 className="text-white font-medium">{currentStage?.name}</h3>
                </div>
                {stageName && (
                    <div className="flex justify-between items-center">
                        <span className="text-white font-semibold">{currentScore}</span>
                        <span className="text-white">{currentStage?.unit}</span>
                    </div>
                )}
            </div>

            {/* Add a progress bar to visualize the impact */}
            <div className="mt-4">
                <div className="w-full bg-gray-300 rounded-full h-2.5">
                    <div
                        className={`h-2.5 rounded-full transition-all duration-500 ease-in-out ${currentStage?.startValue === 0 || currentStage?.decrease == false && currentStage?.startValue > 0 ? "bg-red-600" : "bg-green-600"
                            }`}
                        style={{
                            width: `${currentStage
                                ? currentStage?.decrease == false && currentStage?.startValue > 0
                                    ? ((currentScore - currentStage.startValue) / currentStage.startValue) * 100 : currentStage.startValue === 0
                                        ? (currentScore / (10 * currentStage.incOrDecValue)) * 100
                                        : (currentScore / currentStage.startValue) * 100
                                : 0}%`
                        }}
                    ></div>
                </div>
                <div className="flex justify-between mt-1 text-xs text-white">
                    <span>{currentStage?.decrease == false && currentStage?.startValue > 0 ? currentStage?.startValue : 0}</span>
                    <span>{currentStage?.decrease == false && currentStage?.startValue > 0 ? currentStage?.startValue + 10 * currentStage?.incOrDecValue : currentStage?.startValue == 0 ? 10 * currentStage?.incOrDecValue : currentStage?.startValue}</span>
                </div>
            </div>

            {/* Instructions Section */}
            <div className="mt-16 p-4 bg-sky-800 rounded-lg">
                <h3 className="text-white text-lg text-center font-semibold mb-6">Instructions</h3>

                {/* Description */}
                <p className="text-white text-sm mb-2">
                    <strong>Description:</strong>
                </p>
                <p className="text-white text-sm mb-4">
                    {currentStage?.description}
                </p>

                {/* Wrong Answer Warning */}
                <p className="text-red-500 text-sm mb-2">
                    <strong>Warning:</strong>
                </p>
                <p className="text-red-500 text-sm mb-4">
                    {currentStage?.wrongAnswerComment}
                </p>

                {/* Goal */}
                <p className="text-green-500 text-sm mb-2">
                    <strong>Goal:</strong>
                </p>
                <p className="text-green-500 text-sm">
                    {currentStage?.goal}
                </p>
            </div>
        </>
    );
}
