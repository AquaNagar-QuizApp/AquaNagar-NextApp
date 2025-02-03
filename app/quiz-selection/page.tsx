"use client";

import { Suspense } from "react";
import { QuizSelectionPageContent } from "@/components/QuizSelectionPageContent";

export default function QuizSelectionPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <QuizSelectionPageContent />
    </Suspense>
  );
}
