import jsPDF from 'jspdf';
import type { Role, Set } from "@/types"
import { quizDataByRole } from './data/quizData';

export const generateAnswerSheet = (quizSetName: string) => {
  let selectedQuizSet: Set | undefined;
  if (typeof window !== "undefined") {
    const storedRole = sessionStorage.getItem("selectedRole");
    if (storedRole) {
      const roleName = JSON.parse(storedRole);
      const selectedRole: Role | undefined = quizDataByRole.find(role => role.roleName === roleName);

      if (!selectedRole) {
        console.error(`Role "${roleName}" not found.`);
      }

      // Find the quiz set within the selected role
      selectedQuizSet = selectedRole?.quizSets.find(set => set.setName === quizSetName);

      if (!selectedQuizSet) {
        console.error(`Quiz Set "${quizSetName}" not found for role "${roleName}".`);
      }
    }
  }

  const pdf = new jsPDF({
    orientation: 'p',
    unit: 'mm',
    format: 'a4',
  });

  const topMargin = 20;   // Top margin
  const leftMargin = 20;  // Left margin
  const rightMargin = 20; // Right margin
  const bottomMargin = 20; // Bottom margin
  const pageWidth = pdf.internal.pageSize.width - leftMargin - rightMargin;

  let yPos = topMargin;

  // Helper function to calculate text height based on wrapping
  const getTextHeight = (text: string, maxWidth: number) => {
    const lineHeight = 7; // Line height in mm
    const textLines = pdf.splitTextToSize(text, maxWidth);
    return textLines.length * lineHeight;
  };

  // Loop through each stage
  // selectedQuizSet?.stages.forEach((stage, stageIndex) => {
  //   if (stageIndex != 0) {
  //     yPos += 10
  //   }

  //   // Loop through Questions in the Stage
  //   stage.questions.forEach((q, qIndex) => {
  //     // Calculate the height of the current question text
  //     const questionHeight = getTextHeight(`${qIndex + 1}. ${q.question}`, pageWidth);

  //     // Page break if content exceeds page height
  //     // if (qIndex != 0) {
  //     //   if (!q.imageUrl) {
  //     //     if (yPos + questionHeight + 30 > pdf.internal.pageSize.height - bottomMargin) {
  //     //       pdf.addPage();
  //     //       yPos = topMargin;
  //     //     }
  //     //   } else {
  //     //     if (yPos + questionHeight + 30 + 60 > pdf.internal.pageSize.height - bottomMargin) {
  //     //       pdf.addPage();
  //     //       yPos = topMargin;
  //     //     }
  //     //   }
  //     // } else {
  //     //   if (!q.imageUrl) {
  //     //     if (yPos + questionHeight + 40 > pdf.internal.pageSize.height - bottomMargin) {
  //     //       pdf.addPage();
  //     //       yPos = topMargin;
  //     //     }
  //     //   } else {
  //     //     if (yPos + questionHeight + 40 + 60 > pdf.internal.pageSize.height - bottomMargin) {
  //     //       pdf.addPage();
  //     //       yPos = topMargin;
  //     //     }
  //     //   }

  //     //   // Stage Name (Bold)
  //     //   pdf.setFont('helvetica', 'bold');
  //     //   pdf.setFontSize(18);
  //     //   pdf.text(stage.stageName, leftMargin, yPos);
  //     //   yPos += 10;

  //     //   // Switch to Normal Font for Questions
  //     //   pdf.setFont('helvetica', 'normal');
  //     //   pdf.setFontSize(12);
  //     // }

  //     const extraHeight = q.imageUrl ? 60 : 0; // Extra height for image
  //     const additionalHeight = qIndex === 0 ? 40 : 30; // For first question, add 40, others 30

  //     // Page break condition
  //     if ((yPos + questionHeight + additionalHeight + extraHeight) > (pdf.internal.pageSize.height - bottomMargin)) {
  //       pdf.addPage();
  //       yPos = topMargin;
  //     }

  //     // Add Stage Name for the first question after page break
  //     if (qIndex === 0) {
  //       pdf.setFont('helvetica', 'bold');
  //       pdf.setFontSize(18);
  //       pdf.text(stage.stageName, leftMargin, yPos);
  //       yPos += 10;

  //       pdf.setFont('helvetica', 'normal');
  //       pdf.setFontSize(12);
  //     }

  //     // Render Question (with word wrap)
  //     pdf.text(`${qIndex + 1}. ${q.question}`, leftMargin, yPos, { maxWidth: pageWidth });
  //     yPos += questionHeight;

  //     // Add Image if available
  //     if (q.imageUrl) {
  //       const imgWidth = 120; // Image width
  //       const imgHeight = 60; // Image height
  //       const centerX = (pdf.internal.pageSize.width - imgWidth) / 2; // Centering logic

  //       pdf.addImage(q.imageUrl, 'PNG', centerX, yPos - 5, imgWidth, imgHeight);
  //       yPos += 65;
  //     }

  //     // Render Options (with word wrap)
  //     q.options.forEach((option, i) => {
  //       const optionHeight = getTextHeight(`  ${i + 1}) ${option}`, pageWidth - 10);
  //       pdf.text(`  ${i + 1}) ${option}`, leftMargin + 5, yPos, { maxWidth: pageWidth - 10 });
  //       yPos += optionHeight;
  //     });

  //     // Correct Answer
  //     const correctAnswerHeight = getTextHeight(`Answer: ${q.correctAnswer}`, pageWidth);
  //     pdf.text(`Answer: ${q.correctAnswer}`, leftMargin, yPos);
  //     yPos += correctAnswerHeight + 5; // Space between next question
  //   });
  // });

  // Loop through each stage
  selectedQuizSet?.stages.forEach((stage, stageIndex) => {
    if (stageIndex != 0) {
      yPos += 10
    }

    // Loop through Questions in the Stage
    stage.questions.forEach((q, qIndex) => {
      // Calculate the height of the current question text
      const questionHeight = getTextHeight(`${qIndex + 1}. ${q.question}`, pageWidth);

      const extraHeight = q.imageUrl ? 60 : 0; // Extra height for image
      const additionalHeight = qIndex === 0 ? 10 : 0; // For first question, add 40, others 30

      // Page break condition
      if ((yPos + questionHeight + additionalHeight + extraHeight) > (pdf.internal.pageSize.height - bottomMargin)) {
        pdf.addPage();
        yPos = topMargin;
      }

      // Add Stage Name for the first question after page break
      if (qIndex === 0) {
        pdf.setFont('helvetica', 'bold');
        pdf.setFontSize(18);
        pdf.text(stage.stageName, leftMargin, yPos);
        yPos += 10;

        pdf.setFont('helvetica', 'normal');
        pdf.setFontSize(12);
      }

      // Render Question (with word wrap)
      pdf.text(`${qIndex + 1}. ${q.question}`, leftMargin, yPos, { maxWidth: pageWidth });
      yPos += questionHeight;

      // Add Image if available
      if (q.imageUrl) {
        const imgWidth = 120; // Image width
        const imgHeight = 60; // Image height
        const centerX = (pdf.internal.pageSize.width - imgWidth) / 2; // Centering logic

        pdf.addImage(q.imageUrl, 'PNG', centerX, yPos - 5, imgWidth, imgHeight);
        yPos += 65;
      }

      // Correct Answer
      const correctAnswerHeight = getTextHeight(`Answer: ${q.correctAnswer}`, pageWidth);
      pdf.text(`Answer: ${q.correctAnswer}`, leftMargin, yPos);
      yPos += correctAnswerHeight + 5; // Space between next question
    });
  });

  pdf.save('Answer Sheet.pdf');
};
