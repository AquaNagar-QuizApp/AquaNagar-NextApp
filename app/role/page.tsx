"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"
import { AnimatedBackground } from "@/components/AnimatedBackground"

export default function RoleSelection() {
  const router = useRouter()

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  }

  const roles = [
    {
      title: "Engineer",
      emoji: "👨‍💻",
      roleId: 1
    },
    {
      title: "Non-Engineer",
      emoji: "👥",
      roleId: 2
    }
  ]

  const handleRoleSelect = async (role: string) => {
    // setSelectedRole(role)
    let userID = null;
    let roleId = roles.find((r) => r.title === role)?.roleId || 0;

    if (typeof window !== "undefined") {
      sessionStorage.setItem("selectedRole", JSON.stringify(role));
      sessionStorage.setItem("roleID", roleId.toString());
      userID = sessionStorage.getItem("userID");
    }

    try {
      const response = await fetch(`http://localhost:10000/api/users/update-role/${userID}/${role}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" }
      });

      if (!response.ok) {
        throw new Error("Failed to update role.");
      }

      // Redirect after updating role
      setTimeout(() => {
        router.push("/about");
      }, 100);
    } catch (error: any) {
      console.error("Error updating role:", error.message);
      alert(error.message || "Something went wrong.");
    }
  }

  return (
    <main className="min-h-screen relative overflow-hidden">
      <AnimatedBackground />
      <div className="relative z-10 h-screen flex flex-col items-center justify-center">
        <motion.div
          className="relative bg-white bg-opacity-70 backdrop-blur-lg rounded-xl p-6 mb-4"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.h2 className="text-4xl font-bold text-center text-gray-800 mb-8" variants={itemVariants}>What&apos;s Your Role?</motion.h2>
          <motion.p className="text-center text-gray-600 mb-8" variants={itemVariants}>
            Choose the option that best describes you.
          </motion.p>
          <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-6" variants={containerVariants}>
            {roles.map((role) => (
              <motion.div key={role.title} variants={itemVariants}>
                <motion.div
                  whileHover={{
                    scale: 1.03,
                    transition: { duration: 0.2 },
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button
                    onClick={() => handleRoleSelect(role.title)}
                    className="w-full py-8 text-lg font-semibold flex flex-row items-center justify-center space-y-2 bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white transition-all duration-300 ease-in-out transform hover:shadow-lg"
                  >
                    <span className="text-2xl" role="img" aria-label={role.title}>
                      {role.emoji}
                    </span>
                    <span>{role.title}</span>
                  </Button>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </main>
  )
}