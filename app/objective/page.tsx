"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { AnimatedBackground } from "@/components/AnimatedBackground";
import { LogIn } from "lucide-react";

export default function Objective() {
    return (
        <main className="min-h-screen relative overflow-hidden">
            <AnimatedBackground />
            <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 pt-12">
                <motion.div
                    className="relative max-w-3xl text-center pb-8"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="text-3xl font-semibold text-white mb-4">
                        Objective and Outcome of the Game
                    </h2>
                    <motion.div
                        className="bg-white bg-opacity-20 backdrop-blur-lg rounded-xl p-6 relative z-10 mt-16"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        {/* Character positioned at the top-left */}
                        <motion.img
                            src="./characters/Explainer.png" // Replace with your character image path
                            alt="Character"
                            className="absolute w-32 h-32 z-20"
                            style={{ top: "-1.5rem", right: "-5.2rem" }}
                            initial={false} // Disable initial animation on server
                            animate={{ x: -50, y: -50 }} // Animate only on client
                            transition={{ type: "spring", stiffness: 50 }}
                        />
                        <div className="space-y-6 text-white">
                            {/* Objective of the Game */}
                            <section className="space-y-3 text-left mb-12">
                                <h3 className="text-xl font-semibold">Objective of the Game</h3>
                                <div className="pl-4 list-circle space-y-2">
                                    <p className="mb-4">The game introduces players to key aspects of urban water management.</p>
                                    <p className="list-item ml-4">Learn about system design, cost optimization, and water quality management.</p>
                                    <p className="list-item ml-4">Understand Non-Revenue Water (NRW) reduction and smart water networks.</p>
                                    <p className="list-item ml-4">Gain insights into infrastructure development and financial sustainability.</p>
                                    <p className="list-item ml-4">Improve decision-making skills through real-world challenge simulations.</p>
                                </div>
                            </section>

                            {/* Outcome of the Game */}
                            <section className="space-y-3 text-left">
                                <h3 className="text-xl font-semibold">Outcome of the Game</h3>
                                <div className="pl-4 list-circle space-y-2">
                                    <p className="list-item ml-4">Analyze, design, and manage urban water supply systems effectively.</p>
                                    <p className="list-item ml-4">Enhance strategic thinking and problem-solving skills to optimize operations.</p>
                                    <p className="list-item ml-4">Identify inefficiencies, reduce water loss, and implement cost-effective solutions.</p>
                                    <p className="list-item ml-4">Utilize technical knowledge to integrate smart technologies in infrastructure.</p>
                                    <p className="list-item ml-4">Improve operational performance and long-term sustainability.</p>
                                </div>
                            </section>
                        </div>
                    </motion.div>
                    <div className="flex justify-center">
                        <Link href="/login">
                            <motion.button
                                className="mt-6 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold flex items-center"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Continue to Login
                                <LogIn className="h-5 w-5 ml-2" />
                            </motion.button>
                        </Link>
                    </div>
                </motion.div>
            </div>
        </main>
    );
}
