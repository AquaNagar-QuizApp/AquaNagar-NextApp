import { Stage, Question } from "@/types";

// Stage 1 - Plan A Water Supply System
const getQuestionsForStage1 = (): Question[] => [
    {
        type: "image",
        question: "What is a likely benefit of the system depicted in the image in terms of urban infrastructure?",
        options: [
            "Reduces the demand on municipal water supply",
            "Increases water pumping requirements",
            "Prevents groundwater recharge",
            "Lowers energy consumption during rainfall",
        ],
        correctAnswer: "Reduces the demand on municipal water supply",
        imageUrl: "./imagequestions/planning.jpg",
    },
    {
        type: "text",
        question: "What is the primary goal of pressure management in a water supply system (WSS)?",
        options: [
            "To reduce water treatment costs",
            "To minimize pipe bursts and water loss",
            "To increase system complexity",
            "To avoid metering and billing",
        ],
        correctAnswer: "To minimize pipe bursts and water loss",
    },
    // {
    //     type: "text",
    //     question: "Which renewable energy source is best suited for powering water pumps in remote, off-grid areas?",
    //     options: ["Wind power", "Solar power", "Hydropower", "Geothermal power"],
    //     correctAnswer: "Solar power",
    // },
    {
        type: "text",
        question: "What is the advantage of designing a WSS with modular components?",
        options: [
            "Reduces maintenance requirements",
            "Allows scalability and flexibility for future upgrades",
            "Eliminates the need for demand management",
            "Increases the initial capital cost",
        ],
        correctAnswer: "Allows scalability and flexibility for future upgrades",
    },
    {
        type: "text",
        question: "How do smart water meters contribute to sustainable WSS operation?",
        options: [
            "By eliminating the need for renewable energy",
            "By providing detailed consumption data for better demand management",
            "By increasing non-revenue water (NRW)",
            "By simplifying water treatment processes",
        ],
        correctAnswer: "By providing detailed consumption data for better demand management",
    },
    {
        type: "text",
        question: "What role does data analytics play in a smart water supply system?",
        options: [
            "Predicting maintenance needs and optimizing operations",
            "Increasing system complexity for operators",
            "Avoiding the need for energy efficiency measures",
            "Replacing IoT devices with manual processes",
        ],
        correctAnswer: "Predicting maintenance needs and optimizing operations",
    },
    {
        type: "text",
        question: "Which of the following is NOT a benefit of integrating renewable energy into a WSS?",
        options: [
            "Reducing the system’s carbon footprint",
            "Increasing reliance on fossil fuels",
            "Lowering operational energy costs",
            "Ensuring sustainability in energy-intensive processes",
        ],
        correctAnswer: "Increasing reliance on fossil fuels",
    },
    {
        type: "text",
        question: "What is the purpose of using variable frequency drives (VFDs) in water treatment processes?",
        options: [
            "To reduce energy consumption of pumps",
            "To automate billing systems",
            "To simplify leak detection",
            "To increase water waste",
        ],
        correctAnswer: "To reduce energy consumption of pumps",
    },
    {
        type: "text",
        question: "Why are sensors and IoT devices critical in a sustainable WSS?",
        options: [
            "They replace the need for human operators.",
            "They provide real-time data for monitoring water quality, flow rates, and energy use.",
            "They increase system downtime for upgrades.",
            "They simplify system design.",
        ],
        correctAnswer: "They provide real-time data for monitoring water quality, flow rates, and energy use.",
    },
    {
        type: "text",
        question: "Which modular design principle allows for future upgrades without major disruptions?",
        options: [
            "Use of non-standardized components",
            "Reserving space for additional units and future technologies",
            "Designing a fixed, inflexible layout",
            "Avoiding scalability considerations",
        ],
        correctAnswer: "Reserving space for additional units and future technologies",
    },
    {
        type: "text",
        question: "What is the key advantage of automated control systems in WSS operations?",
        options: [
            "Reducing the reliance on advanced data analytics",
            "Adjusting operations in real-time based on sensor data",
            "Increasing manual intervention requirements",
            "Reducing flexibility in system management",
        ],
        correctAnswer: "Adjusting operations in real-time based on sensor data",
    },
];


// // Stage 2 - Design the Water Supply System
const getQuestionsForStage2 = (): Question[] => [
    {
        type: "text",
        question: "What is one way to achieve cost savings through value engineering in WSS design?",
        options: [
            "By using expensive, custom-made components",
            "By reducing the lifespan of system components",
            "By exploring alternative materials or technologies",
            "By increasing labor costs",
        ],
        correctAnswer: "By exploring alternative materials or technologies",
    },
    {
        type: "text",
        question: "How does lifecycle cost analysis benefit decision-makers in WSS design?",
        options: [
            "It highlights only the initial investment",
            "It helps to evaluate long-term financial implications, including maintenance and operational costs",
            "It focuses only on capital expenditures",
            "It eliminates the need for contingency planning",
        ],
        correctAnswer: "It helps to evaluate long-term financial implications, including maintenance and operational costs",
    },
    {
        type: "text",
        question: "What does standardization of WSS components ensure regarding operations and maintenance?",
        options: [
            "The use of obsolete components",
            "Greater complexity and higher costs",
            "Easier repairs and training due to consistent components",
            "Reduced system reliability",
        ],
        correctAnswer: "Easier repairs and training due to consistent components",
    },
    {
        type: "text",
        question: "In terms of minimizing water loss in a WSS, which of the following is most effective?",
        options: [
            "Increasing pipe diameters",
            "Regular maintenance and monitoring of leaks",
            "Reducing the amount of water transported",
            "Using cheaper materials",
        ],
        correctAnswer: "Regular maintenance and monitoring of leaks",
    },
    {
        type: "text",
        question: "Which of the following is a cost-benefit consideration when choosing materials for a WSS?",
        options: [
            "Only the aesthetic appeal of materials",
            "Durability and maintenance costs over time",
            "The number of different materials used",
            "The quantity of materials on hand",
        ],
        correctAnswer: "Durability and maintenance costs over time",
    },
    {
        type: "text",
        question: "Why is energy loss minimization a priority in the design of WSS?",
        options: [
            "To reduce the power supply costs for the system",
            "To reduce the volume of water transported",
            "To increase the cost of energy consumption",
            "To improve the aesthetic quality of the system",
        ],
        correctAnswer: "To reduce the power supply costs for the system",
    },
    {
        type: "text",
        question: "How can resilience in a WSS be achieved during the design phase?",
        options: [
            "By using the cheapest available materials",
            "By integrating flexibility to adapt to future demands and unforeseen events",
            "By focusing only on the immediate needs",
            "By reducing the system's capacity",
        ],
        correctAnswer: "By integrating flexibility to adapt to future demands and unforeseen events",
    },
    {
        type: "text",
        question: "What is the role of safety in WSS design?",
        options: [
            "To prioritize speed over quality",
            "To ensure protection of public health and system integrity",
            "To increase construction costs",
            "To minimize energy consumption",
        ],
        correctAnswer: "To ensure protection of public health and system integrity",
    },
    {
        type: "text",
        question: "What strategy can help optimize resource allocation in a WSS design project?",
        options: [
            "Delaying project timelines to reduce costs",
            "Detailed planning and scheduling of tasks",
            "Ignoring potential risks in the project",
            "Relying solely on the lowest-cost suppliers",
        ],
        correctAnswer: "Detailed planning and scheduling of tasks",
    },
    {
        type: "text",
        question: "How does standardization contribute to the resilience of a WSS?",
        options: [
            "By increasing the complexity of the system",
            "By simplifying maintenance and repairs, making the system more adaptable",
            "By reducing the lifespan of system components",
            "By minimizing the use of modern technologies",
        ],
        correctAnswer: "By simplifying maintenance and repairs, making the system more adaptable",
    },
];


// Stage 4 - Water Treatment
const getQuestionsForStage4 = (): Question[] => [
    {
        type: "image",
        question: "In water treatment, the sodium ion (Na+) plays a critical role in:",
        options: [
            "Algae removal",
            "Preventing corrosion",
            "Replacing calcium and magnesium ions in softening",
            "Increasing water pH",
        ],
        correctAnswer: "Replacing calcium and magnesium ions in softening",
        imageUrl: "./imagequestions/watertreatment1.png",
    },
    {
        type: "image",
        question: "In the adsorption process shown, what role does the alginate composite material play?",
        options: [
            "Acts as a disinfectant",
            "Provides structural support for adsorption",
            "Increases water alkalinity",
            "Filters solid particles",
        ],
        correctAnswer: "Provides structural support for adsorption",
        imageUrl: "./imagequestions/watertreatment2.png",
    },
    {
        type: "text",
        question: "What is the purpose of coagulation and flocculation in the water treatment process?",
        options: [
            "To add nutrients to the water",
            "To neutralize toxic chemicals",
            "To destabilize particles and agglomerate them for removal",
            "To adjust the pH of the water",
        ],
        correctAnswer: "To destabilize particles and agglomerate them for removal",
    },
    {
        type: "text",
        question: "Which of the following processes ensures that suspended solids are removed after coagulation and flocculation?",
        options: ["Filtration", "Sedimentation and clarification", "Chemical dosing", "pH adjustment"],
        correctAnswer: "Sedimentation and clarification",
    },
    {
        type: "text",
        question: "In the filtration process, what is typically removed from water?",
        options: ["Heavy metals", "Fine particles and microorganisms", "Nutrients", "Gases"],
        correctAnswer: "Fine particles and microorganisms",
    },
    {
        type: "text",
        question: "What is the main function of the disinfection process in water treatment?",
        options: [
            "To remove suspended solids",
            "To kill or inactivate pathogens",
            "To balance water temperature",
            "To adjust the pH of the water",
        ],
        correctAnswer: "To kill or inactivate pathogens",
    },
    {
        type: "text",
        question: "Why is pH adjustment important in the water treatment process?",
        options: [
            "To control the taste and odor of the water",
            "To optimize coagulation, flocculation, and disinfection",
            "To reduce the need for filtration",
            "To increase the chemical dosing requirement",
        ],
        correctAnswer: "To optimize coagulation, flocculation, and disinfection",
    },
    // {
    //   type: "text",
    //   question: "What is the significance of monitoring residual disinfectant levels in treated water?",
    //   options: [
    //     "To enhance taste and odor",
    //     "To ensure the effectiveness of the disinfection process and prevent microbial regrowth",
    //     "To remove suspended solids",
    //     "To prevent chemical contamination",
    //   ],
    //   correctAnswer: "To ensure the effectiveness of the disinfection process and prevent microbial regrowth",
    // },
    {
        type: "text",
        question: "What is the purpose of monitoring emerging contaminants in water treatment?",
        options: [
            "To detect harmful bacteria",
            "To address evolving water quality concerns like pharmaceuticals and industrial chemicals",
            "To reduce the need for chemical dosing",
            "To adjust the temperature of the water",
        ],
        correctAnswer: "To address evolving water quality concerns like pharmaceuticals and industrial chemicals",
    },
    // {
    //   type: "text",
    //   question: "Why is regular maintenance of treatment plant infrastructure necessary?",
    //   options: [
    //     "To reduce energy consumption",
    //     "To prevent potential contamination and ensure the proper functioning of equipment",
    //     "To decrease the water flow rate",
    //     "To increase the volume of water processed",
    //   ],
    //   correctAnswer: "To prevent potential contamination and ensure the proper functioning of equipment",
    // },
    {
        type: "text",
        question: "Which parameter is most commonly used to indicate effective disinfection in a water distribution system?",
        options: ["pH", "Residual chlorine", "Turbidity", "Total coliforms"],
        correctAnswer: "Residual chlorine",
    },
    {
        type: "text",
        question: "What is the primary concern with prolonged water stagnation in a distribution system?",
        options: [
            "Increased turbidity",
            "Formation of biofilms",
            "Lower pH levels",
            "Decrease in pipe durability",
        ],
        correctAnswer: "Formation of biofilms",
    },
];


// Stage 7 - Non-Revenue Water Management
const getQuestionsForStage7 = (): Question[] => [
    {
        type: "text",
        question: "What is the primary purpose of establishing a water balance in a water supply system?",
        options: [
            "To increase water tariffs",
            "To ensure efficient water loss management",
            "To improve customer service response times",
            "To reduce electricity consumption",
        ],
        correctAnswer: "To ensure efficient water loss management",
    },
    {
        type: "text",
        question: "Which of the following is an example of an apparent water loss?",
        options: [
            "Leakage on transmission mains",
            "Data handling errors",
            "Overflow at storage tanks",
            "Leakage on service connections",
        ],
        correctAnswer: "Data handling errors",
    },
    {
        type: "text",
        question: "What is a District Metered Area (DMA)?",
        options: [
            "A storage facility for treated water",
            "A discrete section of a water distribution network with monitored inflows and outflows",
            "A control room for water distribution",
            "A bypass route for excess water",
        ],
        correctAnswer: "A discrete section of a water distribution network with monitored inflows and outflows",
    },
    {
        type: "text",
        question: "What is the typical range for the number of connections in a DMA?",
        options: ["100 to 500", "500 to 2,500", "2,500 to 5,000", "5,000 to 10,000"],
        correctAnswer: "500 to 2,500",
    },
    {
        type: "text",
        question: "Which component of the water balance summarizes real losses?",
        options: [
            "Billed authorized consumption",
            "Leakage on transmission and distribution mains",
            "Customer metering inaccuracy",
            "Unauthorized consumption",
        ],
        correctAnswer: "Leakage on transmission and distribution mains",
    },
    {
        type: "text",
        question: "Which type of DMA has only one inlet?",
        options: ["Single inlet DMA", "Multiple inlet DMA", "Cascading DMA", "Open DMA"],
        correctAnswer: "Single inlet DMA",
    },
    {
        type: "text",
        question: "What parameter should be minimized to reduce DMA establishment costs?",
        options: [
            "Length of pipeline network",
            "Number of flow meters required",
            "Ground-level variations",
            "Pressure fluctuations",
        ],
        correctAnswer: "Number of flow meters required",
    },
    {
        type: "text",
        question: "What is the main disadvantage of forming DMAs in a water supply system?",
        options: [
            "Increased water losses",
            "Pressure fluctuations",
            "Difficulty in data analysis",
            "Reduced customer satisfaction",
        ],
        correctAnswer: "Pressure fluctuations",
    },
    {
        type: "text",
        question: "Which type of loss includes unauthorized consumption and metering inaccuracies?",
        options: ["Real losses", "Apparent losses", "Non-revenue water", "Revenue water"],
        correctAnswer: "Apparent losses",
    },
    {
        type: "text",
        question: "What is the primary objective of monitoring inflows and outflows in a DMA?",
        options: [
            "To record customer complaints",
            "To monitor the level of leakage",
            "To increase water production",
            "To calculate revenue",
        ],
        correctAnswer: "To monitor the level of leakage",
    },
];


// Stage 3 - Building the Infrastructure
const getQuestionsForStage3 = (): Question[] => [
    {
        type: "text",
        question: "What does ISO 9001 standardize in construction projects?",
        options: [
            "Cost management",
            "Quality management systems",
            "Time management",
            "Risk management",
        ],
        correctAnswer: "Quality management systems",
    },
    {
        type: "text",
        question: "Which technique is used to compare project benefits against costs?",
        options: ["EVM", "CBA", "LCCA", "PERT"],
        correctAnswer: "CBA (Cost-Benefit Analysis)",
    },
    {
        type: "text",
        question: "What is the primary purpose of Building Information Modeling (BIM)?",
        options: [
            "To reduce project costs",
            "To enhance planning and coordination through 3D models",
            "To minimize stakeholder involvement",
            "To accelerate project timelines",
        ],
        correctAnswer: "To enhance planning and coordination through 3D models",
    },
    {
        type: "text",
        question: "Which tool integrates geographical data for decision-making in urban projects?",
        options: ["BIM", "GIS", "EVM", "CPM"],
        correctAnswer: "GIS (Geographic Information Systems)",
    },
    {
        type: "text",
        question: "What is the main goal of Integrated Project Delivery (IPD)?",
        options: [
            "To reduce project quality",
            "To foster collaboration among stakeholders",
            "To increase project costs",
            "To minimize communication",
        ],
        correctAnswer: "To foster collaboration among stakeholders",
    },
    {
        type: "text",
        question: "Which principle is central to Lean Construction?",
        options: [
            "Maximizing waste",
            "Minimizing value",
            "Minimizing waste and maximizing value",
            "Increasing project complexity",
        ],
        correctAnswer: "Minimizing waste and maximizing value",
    },
    {
        type: "text",
        question: "What is the primary focus of risk management in construction projects?",
        options: [
            "Ignoring potential risks",
            "Identifying, analyzing, and responding to risks",
            "Increasing project costs",
            "Reducing stakeholder communication",
        ],
        correctAnswer: "Identifying, analyzing, and responding to risks",
    },
    {
        type: "text",
        question: "Which technique is used to assess the economic justification of a project?",
        options: ["LCCA", "CBA", "EVM", "TQM"],
        correctAnswer: "CBA (Cost-Benefit Analysis)",
    },
    {
        type: "text",
        question: "What is the primary benefit of using Gantt Charts in project management?",
        options: [
            "Reducing project costs",
            "Visualizing project timelines and tracking progress",
            "Minimizing stakeholder involvement",
            "Increasing project complexity",
        ],
        correctAnswer: "Visualizing project timelines and tracking progress",
    },
    {
        type: "text",
        question: "Which methodology emphasizes a process-oriented approach to quality management?",
        options: ["Six Sigma", "ISO 9001", "TQM", "Lean Construction"],
        correctAnswer: "ISO 9001",
    },
];


// Stage 8 - Performance Assessment & Operational Excellence
const getQuestionsForStage8 = (): Question[] => [
    {
        type: "image",
        question: "Optimizing which factor can significantly reduce the carbon footprint of urban water utilities?",
        options: [
            "Increasing chemical dosing",
            "Reducing pipe diameters",
            "Improving pump efficiency and energy management",
            "Using more concrete in pipeline construction"
        ],
        correctAnswer: "Improving pump efficiency and energy management",
        imageUrl: "./imagequestions/performanceassessment.png",
    },
    // {
    //   type: "text",
    //   question: "What is a common sign of impending pump failure?",
    //   options: [
    //     "Steady flow rate",
    //     "Unusual noises and overheating",
    //     "Decrease in water temperature",
    //     "Increase in water taste complaints",
    //   ],
    //   correctAnswer: "Unusual noises and overheating",
    // },
    {
        type: "text",
        question: 'What does the term "cavitation" refer to in pump operation?',
        options: [
            "Corrosion of pump components",
            "Formation and collapse of vapor bubbles causing damage",
            "Increase in water viscosity",
            "Decrease in suction pressure",
        ],
        correctAnswer: "Formation and collapse of vapor bubbles causing damage",
    },
    {
        type: "text",
        question: "How can hydraulic modeling improve operational performance?",
        options: [
            "By reducing the need for customer communication",
            "By optimizing network management and leak detection",
            "By delaying infrastructure upgrades",
            "By adding redundant equipment",
        ],
        correctAnswer: "By optimizing network management and leak detection",
    },
    {
        type: "text",
        question: "What factor is critical for ensuring pump longevity?",
        options: [
            "Ignoring minor issues",
            "Regular maintenance and monitoring",
            "Operating pumps at maximum capacity",
            "Increasing pump speed frequently",
        ],
        correctAnswer: "Regular maintenance and monitoring",
    },
    {
        type: "text",
        question: "What is a key benefit of early fault detection in pumps?",
        options: [
            "Avoiding unplanned expenses",
            "Increasing repair time",
            "Encouraging emergency repairs",
            "Reducing pump lifespan",
        ],
        correctAnswer: "Avoiding unplanned expenses",
    },
    {
        type: "text",
        question: "What role does power factor play in energy cost optimization?",
        options: [
            "It increases copper losses",
            "It reduces energy consumption and costs",
            "It accelerates pump aging",
            "It has no impact on costs",
        ],
        correctAnswer: "It reduces energy consumption and costs",
    },
    {
        type: "text",
        question: "Which environmental factor can significantly impact pump operation?",
        options: [
            "Temperature and humidity",
            "Noise levels",
            "Lighting conditions",
            "Consumer feedback",
        ],
        correctAnswer: "Temperature and humidity",
    },
    {
        type: "text",
        question: "What is the impact of addressing current imbalance in pumps?",
        options: [
            "Reduced efficiency",
            "Improved operational stability",
            "Increased energy costs",
            "Increased equipment wear",
        ],
        correctAnswer: "Improved operational stability",
    },
    {
        type: "text",
        question: "Why is adherence to regulatory compliance important in water supply systems?",
        options: [
            "To avoid penalties and ensure safe operations",
            "To reduce operational costs",
            "To bypass quality standards",
            "To accelerate billing processes",
        ],
        correctAnswer: "To avoid penalties and ensure safe operations",
    },
    {
        type: "text",
        question: "What is the long-term goal of performance assessments in water supply systems?",
        options: [
            "To reduce the number of employees",
            "To support decision-making for infrastructure upgrades",
            "To minimize short-term costs",
            "To eliminate maintenance practices",
        ],
        correctAnswer: "To support decision-making for infrastructure upgrades",
    },
];


// Stage 5 - Smart Water Networks
const getQuestionsForStage5 = (): Question[] => [
    {
        type: "image",
        question: "What is the primary principle of operation for Ultrasonic Clamp-on Flow Meters?",
        options: [
            "Electromagnetic induction",
            "Doppler effect",
            "Differential pressure",
            "Ultrasonic wave transmission and reflection",
        ],
        correctAnswer: "Ultrasonic wave transmission and reflection",
        imageUrl: "./imagequestions/smartwaternetwork1.jpg",
    },
    {
        type: "image",
        question: "The curved pipelines in the image likely represent:",
        options: [
            "Electrical conduits",
            "Water distribution and wastewater collection systems",
            "Stormwater drains only",
            "Internet cable pathways",
        ],
        correctAnswer: "Water distribution and wastewater collection systems",
        imageUrl: "./imagequestions/smartwaternetwork2.jpg",
    },
    {
        type: "text",
        question: "What is the primary purpose of establishing District Metered Areas (DMAs) in a Smart Water Network (SWAN)?",
        options: [
            "To improve customer satisfaction",
            "To monitor and manage leakage in the water distribution system",
            "To control water tariffs",
            "To reduce the number of water meters",
        ],
        correctAnswer: "To monitor and manage leakage in the water distribution system",
    },
    {
        type: "text",
        question: "Which tool is commonly used to simulate and optimize DMA design and boundary demarcation in a water supply system?",
        options: [
            "GIS",
            "SCADA system",
            "Hydraulic network model",
            "AMR system",
        ],
        correctAnswer: "Hydraulic network model",
    },
    {
        type: "text",
        question: "In a DMA, what is the method used to ensure the accurate measurement of water flow into the area?",
        options: [
            "Closing boundary valves and installing flow meters",
            "Increasing the water pressure",
            "Using predictive algorithms",
            "Installing pressure-reducing valves (PRVs)",
        ],
        correctAnswer: "Closing boundary valves and installing flow meters",
    },
    // {
    //   type: "text",
    //   question: "Which of the following is NOT typically a part of DMA formation?",
    //   options: [
    //     "Closing boundary valves",
    //     "Isolating supply zones",
    //     "Installing customer meters",
    //     "Removing all inflows permanently",
    //   ],
    //   correctAnswer: "Removing all inflows permanently",
    // },
    {
        type: "text",
        question: "How is Non-Revenue Water (NRW) calculated within a DMA?",
        options: [
            "Total DMA Inflow - Total DMA Consumption",
            "Total water lost in leaks",
            "Total water distributed minus customer billing",
            "Total water treated minus customer complaints",
        ],
        correctAnswer: "Total DMA Inflow - Total DMA Consumption",
    },
    {
        type: "text",
        question: "What is the role of a Pressure Management Area (PMA) in a Smart Water Network?",
        options: [
            "To monitor customer complaints",
            "To reduce water quality",
            "To control and balance system pressure",
            "To track customer billing",
        ],
        correctAnswer: "To control and balance system pressure",
    },
    // {
    //   type: "text",
    //   question: "Which component is used to monitor and control the pressure in a PMA?",
    //   options: [
    //     "AMR system",
    //     "Pressure-reducing valve (PRV)",
    //     "Flow meter",
    //     "SCADA system",
    //   ],
    //   correctAnswer: "Pressure-reducing valve (PRV)",
    // },
    {
        type: "text",
        question: "What type of DMA is created when multiple inlets are connected to a district meter?",
        options: [
            "Single inlet DMA",
            "Multiple inlet DMA",
            "Cascading DMA",
            "None of the above",
        ],
        correctAnswer: "Multiple inlet DMA",
    },
    {
        type: "text",
        question: "What is the main advantage of integrating SCADA with GIS in a Smart Water Network?",
        options: [
            "To detect water pressure drops",
            "To track water quality and leakage location",
            "To reduce water usage",
            "To increase energy consumption",
        ],
        correctAnswer: "To track water quality and leakage location",
    },
    {
        type: "text",
        question: "Which of the following technologies allows utilities to remotely collect and send water usage data to the billing system?",
        options: [
            "SCADA system",
            "AMR system",
            "Pressure management systems",
            "GIS mapping tools",
        ],
        correctAnswer: "AMR system",
    },
];


// Stage 6 - Metering, Billing, and Collection
const getQuestionsForStage6 = (): Question[] => [
    {
        type: "text",
        question: "What is the primary function of a monitoring program for random spot-checks on water meters?",
        options: [
            "To verify water consumption data and meter accuracy",
            "To monitor water flow rates at random locations",
            "To estimate water consumption during a drought",
            "To upgrade the water meters every year",
        ],
        correctAnswer: "To verify water consumption data and meter accuracy",
    },
    {
        type: "text",
        question: "What is the goal of ensuring that all consumer meters are in suitable locations?",
        options: [
            "To reduce water supply costs",
            "To avoid meter tampering and make reading easier",
            "To increase water wastage",
            "To improve water production rates",
        ],
        correctAnswer: "To avoid meter tampering and make reading easier",
    },
    {
        type: "text",
        question: "Which type of water meter is characterized by the absence of moving parts in the flow path?",
        options: [
            "Mechanical meters",
            "Electromagnetic meters",
            "Ultrasonic meters",
            "Multi-Jet meters",
        ],
        correctAnswer: "Electromagnetic meters",
    },
    {
        type: "text",
        question: "What is the principle behind the operation of electromagnetic water meters?",
        options: [
            "Heat transfer in water",
            "Water pressure measurement",
            "Faraday’s law of electromagnetic induction",
            "Doppler effect in water flow",
        ],
        correctAnswer: "Faraday’s law of electromagnetic induction",
    },
    {
        type: "text",
        question: "Which water meter type is most likely to have higher accuracy and lower flow measurement errors over time?",
        options: [
            "Single-Jet meter",
            "Multi-Jet meter",
            "Electromagnetic meter",
            "Mechanical dial meter",
        ],
        correctAnswer: "Electromagnetic meter",
    },
    {
        type: "text",
        question: "What is the function of the 'pulse output' in AMR-compatible water meters?",
        options: [
            "To calculate the total water usage over time",
            "To communicate readings using a remote sensor",
            "To provide real-time water pressure data",
            "To detect leaks automatically",
        ],
        correctAnswer: "To communicate readings using a remote sensor",
    },
    {
        type: "text",
        question: "What method is used in the 'Walk-By' AMR system for collecting meter readings?",
        options: [
            "Directly reading each meter manually",
            "Using a device that collects readings from meters within 100 meters radius",
            "Installing meters that can send readings automatically every minute",
            "Using vehicles to monitor water usage",
        ],
        correctAnswer: "Using a device that collects readings from meters within 100 meters radius",
    },
    {
        type: "text",
        question: "What is a key challenge in managing consumer water meters in urban areas?",
        options: [
            "High initial installation costs",
            "Insufficient locations for meter installation",
            "Accuracy and reliability of meter readings over time",
            "Low water demand",
        ],
        correctAnswer: "Accuracy and reliability of meter readings over time",
    },
    {
        type: "text",
        question: "Which type of water meter would be most suitable for detecting very small water flows, such as 1 LPH?",
        options: [
            "Single-Jet meter",
            "Multi-Jet meter",
            "Electromagnetic meter",
            "Ultrasonic meter",
        ],
        correctAnswer: "Electromagnetic meter",
    },
    {
        type: "text",
        question: "In which scenario would water consumption need to be estimated due to metering problems?",
        options: [
            "Meters reading accurately but consuming excess power",
            "Meters malfunctioning or providing no readings",
            "All meters being located in hard-to-reach areas",
            "Water usage being exceptionally low",
        ],
        correctAnswer: "Meters malfunctioning or providing no readings",
    },
];


// Generate stages for each set
export const engineerSet2Stages: Stage[] = [
    { stageName: "Plan A Water Supply System", questions: getQuestionsForStage1() },
    { stageName: "Design the Water Supply System", questions: getQuestionsForStage2() },
    { stageName: "Building the Infrastructure", questions: getQuestionsForStage3() }, //5
    { stageName: "Water Treatment", questions: getQuestionsForStage4() }, //3
    { stageName: "Smart Water Networks", questions: getQuestionsForStage5() }, //7
    { stageName: "Metering, Billing, and Collection", questions: getQuestionsForStage6() }, //8
    { stageName: "Non-Revenue Water Management", questions: getQuestionsForStage7() }, //4
    { stageName: "Performance Assessment & Operational Excellence", questions: getQuestionsForStage8() } //6
];
