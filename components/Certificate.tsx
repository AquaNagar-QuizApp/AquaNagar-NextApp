import { jsPDF } from "jspdf";
import { User } from "@/types"

const getCertificateLevel = (marksObtained: number): string => {
  const percentage = (marksObtained / 80) * 100;

  if (percentage >= 80) return "Gold";
  else if (percentage >= 65) return "Silver";
  else if (percentage >= 50) return "Bronze";
  return "Participation";
};

const getDefaultUser = (): User => ({
  name: "",
  department: "",
  designation: "",
  email: "",
  mobile: "",
  title: "",
});

export const generateCertificate = (score: number): void => {

  const level = getCertificateLevel(score);
  // URLs of the font files to fetch
  const fontUrl1 = "/fonts/open-sans.ttf"; // First font file
  const fontUrl2 = "/fonts/noto-sans.ttf";

  const getUserData = (): User => {
    if (typeof window !== "undefined") {
      const storedData = sessionStorage.getItem("currentUser");
      return storedData ? JSON.parse(storedData) : getDefaultUser();
    }
    return getDefaultUser(); // Default values for SSR or undefined sessionStorage
  };

  // const isClient = typeof window !== 'undefined';
  const userData: User = getUserData();

  // Fetch both font files and convert them to Base64
  Promise.all([
    fetch(fontUrl1).then((response) => response.blob()),
    fetch(fontUrl2).then((response) => response.blob()),
  ])
    .then(([fontBlob1, fontBlob2]) => {
      // Convert the first font blob to Base64
      const fontReader1 = new FileReader();
      fontReader1.onloadend = () => {

        if (!fontReader1.result) {
          console.error("Failed to read the first font file.");
          return;
        }
        //const base64Font1 = fontReader1.result.toString().split(",")[1]; // Extract the Base64 part

        // Convert the second font blob to Base64
        const fontReader2 = new FileReader();
        fontReader2.onloadend = () => {

          if (!fontReader2.result) {
            console.error("Failed to read the second font file.");
            return;
          }
          //const base64Font2 = fontReader2.result.toString().split(",")[1]; // Extract the Base64 part

          // Initialize jsPDF
          const doc = new jsPDF({
            orientation: "landscape",
            unit: "px",
            format: [800, 600],
          });

          // // Add the first custom font to jsPDF
          // doc.addFileToVFS("open-sans.ttf", base64Font1);
          // doc.addFont("open-sans.ttf", "open-sans", "normal", 'Identity-H');

          // // Add the second custom font to jsPDF
          // doc.addFileToVFS("noto-sans.ttf", base64Font2);
          // doc.addFont("noto-sans.ttf", "noto-sans", "normal", 'Identity-H');

          const img = new Image();

          if (level == "Gold")
            img.src = "./certificates/GoldCertificate.png";
          else if (level == "Silver")
            img.src = "./certificates/SilverCertificate.png";
          else if (level == "Bronze")
            img.src = "./certificates/BronzeCertificate.png";

          img.onload = function () {
            doc.addImage(img, "JPEG", 0, 0, 800, 600);

            const capitalizeName = (name: string) =>
              name.toLowerCase().replace(/\b\w/g, char => char.toUpperCase());

            // Set the first font and add text
            // doc.setFont("open-sans");
            doc.setFont('helvetica', 'bold');
            doc.setFontSize(30);
            doc.text(`${userData.title}` + ". " + `${capitalizeName(userData.name)}`, 400, 240, { align: "center" });

            // Set the second font and add text
            // doc.setFont("noto-sans");
            doc.setFont('times', 'normal');
            doc.setFontSize(17);
            doc.text(`(${userData.designation} - ${userData.department})`, 400, 272, { align: "center" });

            // Add the date
            const today = new Date();
            const day = String(today.getDate()).padStart(2, "0");
            const month = String(today.getMonth() + 1).padStart(2, "0");
            const year = today.getFullYear();
            const formattedDate = `${day}/${month}/${year}`;

            // doc.setFont("noto-sans");
            doc.setFont('times', 'normal');
            doc.setFontSize(19);
            doc.text(`${formattedDate}`, 672, 448, { align: "center" });

            // Save the PDF
            doc.save(`${level}_Certificate.pdf`);
          }

        };
        fontReader2.readAsDataURL(fontBlob2); // Convert the second font blob to a data URL
      };
      fontReader1.readAsDataURL(fontBlob1); // Convert the first font blob to a data URL
    })
    .catch((error) => {
      console.error("Error loading font files:", error);
    });
};
