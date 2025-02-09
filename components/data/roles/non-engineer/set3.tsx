import { Stage, Question } from "@/types";

// Stage 1 - Plan A Water Supply System
const getQuestionsForStage1 = (): Question[] => [
    {
        type: "image",
        question: "Why is storing rainwater as shown in the image helpful for homes?",
        options: [
            "It helps save water during dry periods",
            "It keeps roofs clean",
            "It increases house bills",
            "It stops plants from growing",
        ],
        correctAnswer: "It helps save water during dry periods",
        imageUrl: "./imagequestions/planning.jpg",
    },
    {
        type: "text",
        question: "What is the primary benefit of maintaining detailed maintenance records?",
        options: [
            "Simplifies compliance with labor laws",
            "Tracks equipment performance and plans future maintenance",
            "Eliminates the need for routine inspections",
            "Reduces transparency in system operations",
        ],
        correctAnswer: "Tracks equipment performance and plans future maintenance",
    },
    {
        type: "text",
        question: "How do efficient billing systems contribute to water conservation?",
        options: [
            "By encouraging timely payments based on accurate water usage",
            "By simplifying equipment replacement planning",
            "By reducing the need for leak detection technologies",
            "By discouraging water-saving practices among users",
        ],
        correctAnswer: "By encouraging timely payments based on accurate water usage",
    },
    {
        type: "text",
        question: "What is the purpose of water audits in managing a WSS?",
        options: [
            "To measure public awareness of the WSS",
            "To assess water loss and identify opportunities for improvement",
            "To simplify customer billing systems",
            "To reduce real-time monitoring efforts",
        ],
        correctAnswer: "To assess water loss and identify opportunities for improvement",
    },
    {
        type: "text",
        question: "Which activity does NOT support non-revenue water management?",
        options: [
            "Regular leak detection",
            "Accurate metering of water consumption",
            "Delaying repairs for cost-saving purposes",
            "Educating customers on water conservation",
        ],
        correctAnswer: "Delaying repairs for cost-saving purposes",
    },
    {
        type: "text",
        question: "What is the key objective of customer engagement in WSS operation?",
        options: [
            "To delay maintenance schedules",
            "To promote active participation in water conservation",
            "To increase customer complaints about billing systems",
            "To reduce the accuracy of metering systems",
        ],
        correctAnswer: "To promote active participation in water conservation",
    },
    {
        type: "text",
        question: "How does data analytics optimize WSS operations?",
        options: [
            "By replacing preventive maintenance schedules",
            "By identifying patterns, trends, and anomalies in system data",
            "By reducing the need for IoT devices and sensors",
            "By limiting system transparency to key stakeholders",
        ],
        correctAnswer: "By identifying patterns, trends, and anomalies in system data",
    },
    // {
    //   type: "text",
    //   question: "Why is predictive maintenance valuable in WSS management?",
    //   options: [
    //     "It forecasts maintenance needs, reducing system downtime and costs.",
    //     "It replaces the need for data-driven decision-making entirely.",
    //     "It limits the lifespan of equipment for easier replacements.",
    //     "It reduces the need for accurate record-keeping.",
    //   ],
    //   correctAnswer: "It forecasts maintenance needs, reducing system downtime and costs.",
    // },
    {
        type: "text",
        question: "What is the purpose of training maintenance personnel?",
        options: [
            "To avoid adopting new technologies",
            "To ensure knowledge of the latest best practices and technologies",
            "To reduce transparency in operational planning",
            "To delay addressing equipment failures",
        ],
        correctAnswer: "To ensure knowledge of the latest best practices and technologies",
    },
    {
        type: "text",
        question: "What is a key benefit of using real-time data for operational optimization?",
        options: [
            "It reduces energy consumption and improves efficiency.",
            "It increases the reliance on manual intervention.",
            "It eliminates the need for system dashboards.",
            "It delays the implementation of preventive maintenance.",
        ],
        correctAnswer: "It reduces energy consumption and improves efficiency.",
    },
    {
        type: "text",
        question: "How does public awareness contribute to non-revenue water management?",
        options: [
            "By encouraging users to report leaks and use water efficiently",
            "By reducing transparency in the billing system",
            "By discouraging customer participation in conservation efforts",
            "By increasing water loss rates intentionally",
        ],
        correctAnswer: "By encouraging users to report leaks and use water efficiently",
    },
];


// Stage 2 - Design the Water Supply System
const getQuestionsForStage2 = (): Question[] => [
    {
        type: "text",
        question: "Why is it important to detect and repair leaks in a Water Supply System?",
        options: [
            "To prevent water wastage and ensure efficient distribution",
            "To increase water pressure",
            "To reduce customer complaints",
            "To decrease water demand",
        ],
        correctAnswer: "To prevent water wastage and ensure efficient distribution",
    },
    {
        type: "text",
        question: "Which of the following is a tool that can help detect water leaks in a distribution network?",
        options: [
            "Water meters",
            "Acoustic sensors",
            "Chlorine testers",
            "Water filters",
        ],
        correctAnswer: "Acoustic sensors",
    },
    {
        type: "text",
        question: "What is the main benefit of pressure regulation devices in a Water Supply System?",
        options: [
            "To increase water flow rates",
            "To ensure optimal pressure and reduce the risk of pipe damage",
            "To reduce the need for repairs",
            "To increase water demand",
        ],
        correctAnswer: "To ensure optimal pressure and reduce the risk of pipe damage",
    },
    {
        type: "text",
        question: "What can happen if the water pressure in a distribution network is too high?",
        options: [
            "It can cause pipes to burst and increase water loss",
            "It can reduce water flow",
            "It can improve water quality",
            "It can reduce energy costs",
        ],
        correctAnswer: "It can cause pipes to burst and increase water loss",
    },
    {
        type: "text",
        question: "What is the role of Advanced Metering Infrastructure (AMI) in reducing water loss?",
        options: [
            "It helps detect unauthorized connections and improves billing accuracy",
            "It increases water consumption",
            "It reduces water pressure",
            "It eliminates the need for water filtration",
        ],
        correctAnswer: "It helps detect unauthorized connections and improves billing accuracy",
    },
    {
        type: "text",
        question: "How can regular maintenance programs help minimize water loss in a WSS?",
        options: [
            "By addressing potential problems before they escalate into major issues",
            "By increasing water consumption",
            "By reducing system pressure",
            "By adding more water pumps",
        ],
        correctAnswer: "By addressing potential problems before they escalate into major issues",
    },
    {
        type: "text",
        question: "What is the consequence of not maintaining water meters regularly?",
        options: [
            "Inaccurate water consumption readings leading to revenue loss",
            "Increased water pressure",
            "Reduced customer complaints",
            "Decreased water supply",
        ],
        correctAnswer: "Inaccurate water consumption readings leading to revenue loss",
    },
    {
        type: "text",
        question: "What is one of the key functions of leak detection programs in urban water management?",
        options: [
            "To reduce water usage",
            "To identify leaks early and prevent large-scale water loss",
            "To monitor customer satisfaction",
            "To increase water treatment costs",
        ],
        correctAnswer: "To identify leaks early and prevent large-scale water loss",
    },
    {
        type: "text",
        question: "Why is it important to maintain optimal water pressure in the distribution system?",
        options: [
            "To prevent damage to infrastructure and reduce water loss",
            "To increase system complexity",
            "To lower operational costs",
            "To increase customer complaints",
        ],
        correctAnswer: "To prevent damage to infrastructure and reduce water loss",
    },
    {
        type: "text",
        question: "What is one of the main goals of water meter calibration?",
        options: [
            "To ensure accurate billing and prevent revenue loss",
            "To increase customer demand",
            "To increase water supply",
            "To reduce system efficiency",
        ],
        correctAnswer: "To ensure accurate billing and prevent revenue loss",
    },
];


// Stage 3 - Building the Infrastructure
const getQuestionsForStage3 = (): Question[] => [
    {
        type: "text",
        question: "What is the primary purpose of urban water infrastructure?",
        options: [
            "To store rainwater",
            "To ensure a continuous and safe water supply for residents",
            "To increase water tariffs",
            "To supply water only for commercial use",
        ],
        correctAnswer: "To ensure a continuous and safe water supply for residents",
    },
    {
        type: "text",
        question: "What is the main factor to consider while selecting materials for water pipelines?",
        options: [
            "Cost only",
            "Strength and durability",
            "Availability in the local market",
            "The colour of the material",
        ],
        correctAnswer: "Strength and durability",
    },
    {
        type: "text",
        question: "Which component is essential for distributing water from treatment plants to households?",
        options: [
            "Reservoirs",
            "Dams",
            "Pipes and pumps",
            "Canals",
        ],
        correctAnswer: "Pipes and pumps",
    },
    {
        type: "text",
        question: "What is the role of storage tanks in an urban water supply system?",
        options: [
            "To store excess rainwater",
            "To balance water supply and demand",
            "To increase water pressure beyond safe limits",
            "To filter water",
        ],
        correctAnswer: "To balance water supply and demand",
    },
    {
        type: "text",
        question: "What should be done to prevent leaks in water distribution pipelines?",
        options: [
            "Frequent inspections and maintenance",
            "Using cheaper materials",
            "Increasing water pressure",
            "Ignoring minor leaks",
        ],
        correctAnswer: "Frequent inspections and maintenance",
    },
    {
        type: "text",
        question: "Why is it important to have a separate system for stormwater drainage?",
        options: [
            "To increase the cost of infrastructure",
            "To prevent flooding and waterlogging",
            "To mix it with drinking water",
            "To reduce water supply",
        ],
        correctAnswer: "To prevent flooding and waterlogging",
    },
    {
        type: "text",
        question: "What is the purpose of installing valves in a water distribution network?",
        options: [
            "To allow controlled water flow and prevent backflow",
            "To speed up water movement",
            "To increase water pressure without regulation",
            "To block the pipeline permanently",
        ],
        correctAnswer: "To allow controlled water flow and prevent backflow",
    },
    {
        type: "text",
        question: "Why should water pipelines be buried underground?",
        options: [
            "To keep them safe from weather and accidental damage",
            "To make them difficult to repair",
            "To reduce the cost of water supply",
            "To avoid using metal pipes",
        ],
        correctAnswer: "To keep them safe from weather and accidental damage",
    },
    {
        type: "text",
        question: "What is the main challenge in upgrading old water supply infrastructure in cities?",
        options: [
            "Lack of skilled workers",
            "High cost and disruption to daily life",
            "Difficulty in getting approvals",
            "Lack of public awareness",
        ],
        correctAnswer: "High cost and disruption to daily life",
    },
    {
        type: "text",
        question: "What is the benefit of using smart water meters in urban water supply systems?",
        options: [
            "To increase water usage",
            "To detect leaks and promote water conservation",
            "To reduce the number of water connections",
            "To increase water bills without reason",
        ],
        correctAnswer: "To detect leaks and promote water conservation",
    },
];


// Stage 4 - Water Treatment
const getQuestionsForStage4 = (): Question[] => [
    {
        type: "image",
        question: "When NaCl is used in water treatment, what is its main effect?",
        options: [
            "Softening water by removing minerals",
            "Increasing water pressure",
            "Eliminating bacteria directly",
            "Filtering out solid particles",
        ],
        correctAnswer: "Softening water by removing minerals",
        imageUrl: "./imagequestions/watertreatment1.png",
    },
    {
        type: "image",
        question: "What is the benefit of using magnetic beads in water treatment?",
        options: [
            "They reduce the time needed for filtration",
            "They improve the taste of water",
            "They allow for easy removal and reuse",
            "They neutralize harmful bacteria",
        ],
        correctAnswer: "They allow for easy removal and reuse",
        imageUrl: "./imagequestions/watertreatment2.png",
    },
    // {
    //   type: "text",
    //   question: "What is the primary goal of monitoring water quality at distribution points?",
    //   options: [
    //     "To save operational costs",
    //     "To ensure safe drinking water for consumers",
    //     "To improve water taste",
    //     "To prevent water wastage",
    //   ],
    //   correctAnswer: "To ensure safe drinking water for consumers",
    // },
    {
        type: "text",
        question: "What does residual chlorine indicate in a water supply system?",
        options: [
            "The presence of heavy metals",
            "The effectiveness of disinfection",
            "The hardness of water",
            "The turbidity of water",
        ],
        correctAnswer: "The effectiveness of disinfection",
    },
    // {
    //   type: "text",
    //   question: "Why is public awareness important in water quality management?",
    //   options: [
    //     "To ensure compliance with local regulations",
    //     "To educate consumers about water safety and conservation",
    //     "To minimize operational costs",
    //     "To promote government initiatives",
    //   ],
    //   correctAnswer: "To educate consumers about water safety and conservation",
    // },
    {
        type: "text",
        question: "What action should be taken if microbial contamination is detected in a distribution system?",
        options: [
            "Increase water pressure",
            "Flush the system and increase chlorination",
            "Ignore it if levels are low",
            "Focus on chemical testing only",
        ],
        correctAnswer: "Flush the system and increase chlorination",
    },
    {
        type: "text",
        question: "Which of the following is NOT a microbial indicator used in water testing?",
        options: [
            "Total coliforms",
            "Escherichia coli (E. coli)",
            "Enterococci",
            "Lead",
        ],
        correctAnswer: "Lead",
    },
    {
        type: "text",
        question: "What is the most common cause of cross-contamination in water systems?",
        options: [
            "Pipe leaks and backflow",
            "Poor water treatment processes",
            "High water pressure",
            "Inadequate storage capacity",
        ],
        correctAnswer: "Pipe leaks and backflow",
    },
    {
        type: "text",
        question: "Which type of contamination is a major concern for public health in drinking water?",
        options: [
            "Thermal contamination",
            "Microbial contamination",
            "Physical contamination",
            "Organic contamination",
        ],
        correctAnswer: "Microbial contamination",
    },
    {
        type: "text",
        question: "What is the role of emergency response plans in water management?",
        options: [
            "To predict rainfall patterns",
            "To address water quality issues during emergencies",
            "To reduce consumer complaints",
            "To manage water billing systems",
        ],
        correctAnswer: "To address water quality issues during emergencies",
    },
    {
        type: "text",
        question: "Why is it necessary to inspect pipes and storage tanks regularly?",
        options: [
            "To reduce water usage",
            "To identify leaks and prevent contamination",
            "To ensure faster water distribution",
            "To increase water temperature",
        ],
        correctAnswer: "To identify leaks and prevent contamination",
    },
    {
        type: "text",
        question: "What should residents do if they notice unusual water quality issues?",
        options: [
            "Contact the water utility immediately",
            "Use more water to flush the system",
            "Ignore the issue unless it persists",
            "Wait for an official notification",
        ],
        correctAnswer: "Contact the water utility immediately",
    },
];


// Stage 5 - Smart Water Networks
const getQuestionsForStage5 = (): Question[] => [
    {
        type: "image",
        question: "Which device helps measure water flow without cutting the pipe?",
        options: [
            "Insertion Type Flow Meter",
            "Ultrasonic Clamp-on Flow Meter",
            "Open Channel Flow Meter",
            "Rain Gauge",
        ],
        correctAnswer: "Ultrasonic Clamp-on Flow Meter",
        imageUrl: "./imagequestions/smartwaternetwork1.jpg",
    },
    {
        type: "image",
        question: "What is the purpose of the red industrial facility connected to the water system?",
        options: [
            "It produces drinking water directly",
            "It helps clean and treat used water",
            "It stores food supplies",
            "It generates wind energy",
        ],
        correctAnswer: "It helps clean and treat used water",
        imageUrl: "./imagequestions/smartwaternetwork2.jpg",
    },
    {
        type: "text",
        question: "What is the purpose of online water quality monitoring in the distribution network?",
        options: [
            "To improve customer satisfaction",
            "To monitor real-time water quality and prevent contamination",
            "To detect illegal water connections",
            "To measure water consumption",
        ],
        correctAnswer: "To monitor real-time water quality and prevent contamination",
    },
    {
        type: "text",
        question: "Which water quality parameter indicates the presence of bacteria or harmful microorganisms in the water?",
        options: [
            "Chlorine residual",
            "pH level",
            "Biochemical Oxygen Demand (BOD)",
            "Turbidity",
        ],
        correctAnswer: "Biochemical Oxygen Demand (BOD)",
    },
    {
        type: "text",
        question: "What type of monitoring system is used to continuously collect water quality data in the distribution system?",
        options: [
            "Acoustic sensors",
            "Online water quality sensors",
            "Manual sampling",
            "Pressure monitoring systems",
        ],
        correctAnswer: "Online water quality sensors",
    },
    {
        type: "text",
        question: "Why is it important to monitor water quality in the distribution network?",
        options: [
            "To reduce water wastage",
            "To ensure that contaminants do not reach consumers",
            "To improve water pressure",
            "To track water usage patterns",
        ],
        correctAnswer: "To ensure that contaminants do not reach consumers",
    },
    {
        type: "text",
        question: "What is the Minimum Night Consumption (MNC) test used for?",
        options: [
            "To measure the amount of chlorine in the water",
            "To identify leaks or unauthorized water use in the system",
            "To test water quality at different times of day",
            "To measure consumer satisfaction",
        ],
        correctAnswer: "To identify leaks or unauthorized water use in the system",
    },
    // {
    //   type: "text",
    //   question: "How does an acoustic leak detection system work?",
    //   options: [
    //     "By listening for sounds generated by leaks in the pipes",
    //     "By measuring water temperature changes",
    //     "By recording customer complaints about leaks",
    //     "By monitoring water pressure levels",
    //   ],
    //   correctAnswer: "By listening for sounds generated by leaks in the pipes",
    // },
    // {
    //   type: "text",
    //   question: "Why is leakage management important in urban water systems?",
    //   options: [
    //     "To reduce water loss and improve system efficiency",
    //     "To increase water consumption",
    //     "To detect illegal connections",
    //     "To improve the appearance of the water pipes",
    //   ],
    //   correctAnswer: "To reduce water loss and improve system efficiency",
    // },
    {
        type: "text",
        question: "What is Non-Revenue Water (NRW)?",
        options: [
            "Water that is sold to customers",
            "Water that is lost due to leakage or theft, and not billed to customers",
            "Water used for industrial purposes",
            "Water treated at the WTP but not consumed",
        ],
        correctAnswer: "Water that is lost due to leakage or theft, and not billed to customers",
    },
    {
        type: "text",
        question: "What tool is commonly used by water utilities to manage and reduce leakage in the distribution network?",
        options: [
            "Acoustic noise loggers",
            "Chlorine testers",
            "AMR meters",
            "Water pressure regulators",
        ],
        correctAnswer: "Acoustic noise loggers",
    },
    {
        type: "text",
        question: "What action is typically taken when a water leak is detected in the distribution network?",
        options: [
            "Increase the pressure in the affected area",
            "Repair or replace the affected pipe",
            "Turn off water supply to all customers",
            "Monitor the leak without any action",
        ],
        correctAnswer: "Repair or replace the affected pipe",
    },
];


// Stage 6 - Metering, Billing, and Collection
const getQuestionsForStage6 = (): Question[] => [
    {
        type: "text",
        question: "What does AMI stand for in the context of water metering?",
        options: [
            "Automated Meter Information",
            "Advanced Metering Infrastructure",
            "Automatic Meter Installation",
            "Automated Meter Installation",
        ],
        correctAnswer: "Advanced Metering Infrastructure",
    },
    {
        type: "text",
        question: "Why is two-way communication important in AMI systems?",
        options: [
            "It allows meters to be read manually.",
            "It enables real-time data transmission and allows utilities to send commands to meters.",
            "It reduces the cost of installation.",
            "It only allows data to be transferred in one direction.",
        ],
        correctAnswer: "It enables real-time data transmission and allows utilities to send commands to meters.",
    },
    {
        type: "text",
        question: "What is a typical feature of the meter data reading and billing software?",
        options: [
            "It only generates manual bills once a year.",
            "It allows for online payments through an integrated payment gateway.",
            "It can only work with water meters of a single brand.",
            "It generates bills without reading water meters.",
        ],
        correctAnswer: "It allows for online payments through an integrated payment gateway.",
    },
    {
        type: "text",
        question: "Which type of communication is commonly used for transferring data from meters in AMI systems?",
        options: [
            "Satellite communication",
            "Wireless and wired communication (e.g., cellular, Wi-Fi, PLC)",
            "Only wired communication",
            "Telephone lines",
        ],
        correctAnswer: "Wireless and wired communication (e.g., cellular, Wi-Fi, PLC)",
    },
    {
        type: "text",
        question: "Which of the following would typically NOT be a part of the Metering, Billing, and Collection system?",
        options: [
            "Disconnection/Reconnection process",
            "Consumer grievance and redressal process",
            "Water source pollution monitoring",
            "Supplementary bill generation",
        ],
        correctAnswer: "Water source pollution monitoring",
    },
    {
        type: "text",
        question: 'What is the purpose of the "Go Live and Stabilization/Warranty Support" phase in implementing billing software?',
        options: [
            "To prepare the system for public release",
            "To fix any issues that arise during the initial usage phase",
            "To test new billing features before implementation",
            "To track customer complaints only",
        ],
        correctAnswer: "To fix any issues that arise during the initial usage phase",
    },
    {
        type: "text",
        question: "What does the integration of a payment gateway in the billing software allow consumers to do?",
        options: [
            "Pay their water bills using cash only",
            "Automatically deduct the payment from their bank account",
            "Make online payments for their water consumption",
            "Make payments by sending money through postal service",
        ],
        correctAnswer: "Make online payments for their water consumption",
    },
    {
        type: "text",
        question: 'What is the role of "gap analysis" during the implementation of new billing software?',
        options: [
            "To identify potential upgrades for the hardware used in the system",
            "To compare the existing system with the new software and highlight any differences",
            "To train end users on the system",
            "To generate initial meter readings for water consumption",
        ],
        correctAnswer: "To compare the existing system with the new software and highlight any differences",
    },
    {
        type: "text",
        question: 'What is the function of "bill amendment" in the water billing software?',
        options: [
            "To add new features to the billing software",
            "To modify a previously generated bill due to errors or changes",
            "To cancel the entire billing system",
            "To track payments made by consumers",
        ],
        correctAnswer: "To modify a previously generated bill due to errors or changes",
    },
    {
        type: "text",
        question: "What is typically included in the training provided after the implementation of the billing software?",
        options: [
            "General technical support for hardware issues",
            "Role-based training for system administrators and end users",
            "Payment processing training for banks",
            "System installation for network providers",
        ],
        correctAnswer: "Role-based training for system administrators and end users",
    },
];


// Stage 7 - Non-Revenue Water Management
const getQuestionsForStage7 = (): Question[] => [
    {
        type: "text",
        question: "What is a District Metered Area (DMA)?",
        options: [
            "A large water storage tank",
            "A discrete area of the water network monitored for inflow and consumption",
            "A testing lab for water quality",
            "A customer service office",
        ],
        correctAnswer: "A discrete area of the water network monitored for inflow and consumption",
    },
    {
        type: "text",
        question: "What is the purpose of a Pressure Zero Test (PZT)?",
        options: [
            "To monitor water quality in a DMA",
            "To confirm the hydraulic isolation of a DMA",
            "To increase water tariffs for a DMA",
            "To identify customer complaints in the DMA",
        ],
        correctAnswer: "To confirm the hydraulic isolation of a DMA",
    },
    {
        type: "text",
        question: "Why are boundary valves closed during a PZT?",
        options: [
            "To increase water flow into the DMA",
            "To ensure no water enters the DMA except through metered points",
            "To reduce pressure inside the DMA",
            "To improve the quality of water in the DMA",
        ],
        correctAnswer: "To ensure no water enters the DMA except through metered points",
    },
    {
        type: "text",
        question: "What does NRW stand for in water management?",
        options: [
            "Natural Resource Water",
            "Non-Revenue Water",
            "National Reservoir Water",
            "Network Regional Water",
        ],
        correctAnswer: "Non-Revenue Water",
    },
    {
        type: "text",
        question: "What happens if the pressure inside a DMA does not drop to zero during a PZT?",
        options: [
            "The DMA is operational",
            "There is an unaccounted inflow pipe to the DMA",
            "The test is complete and successful",
            "The pressure meters are defective",
        ],
        correctAnswer: "There is an unaccounted inflow pipe to the DMA",
    },
    {
        type: "text",
        question: "Why is the elevation of an ELSR/OHT important for a DMA?",
        options: [
            "It improves water quality",
            "It ensures adequate pressure within the DMA",
            "It reduces the number of required meters",
            "It increases water storage capacity",
        ],
        correctAnswer: "It ensures adequate pressure within the DMA",
    },
    {
        type: "text",
        question: "What is the role of flow meters in a DMA?",
        options: [
            "To monitor water leakage",
            "To measure inflow and consumption accurately",
            "To increase the pressure in the network",
            "To detect unauthorized connections",
        ],
        correctAnswer: "To measure inflow and consumption accurately",
    },
    {
        type: "text",
        question: "What is one of the main challenges of PZT preparation?",
        options: [
            "Mapping the network if updated plans are unavailable",
            "Reducing customer complaints during the test",
            "Increasing water flow for customers",
            "Measuring water quality during the test",
        ],
        correctAnswer: "Mapping the network if updated plans are unavailable",
    },
    {
        type: "text",
        question: 'What does the term "hydraulic isolation" mean?',
        options: [
            "Isolation of water treatment plants",
            "Separation of an area from water inflow except through designated points",
            "Increasing water storage in isolated areas",
            "Stopping water flow to all customers in an area",
        ],
        correctAnswer: "Separation of an area from water inflow except through designated points",
    },
    {
        type: "text",
        question: "What should happen to pressure points outside the DMA during PZT if the DMA is isolated correctly?",
        options: [
            "Pressure should decrease",
            "Pressure should increase or remain the same",
            "Pressure should drop to zero",
            "Pressure should fluctuate continuously",
        ],
        correctAnswer: "Pressure should increase or remain the same",
    },
];


// Stage 8 - Performance Assessment & Operational Excellence
const getQuestionsForStage8 = (): Question[] => [
    {
        type: "image",
        question: "Why is reducing water waste important for lowering the carbon footprint?",
        options: [
            "It saves money only",
            "It reduces the energy needed to treat and pump water",
            "It helps water taste better",
            "It makes water meters more accurate"
        ],
        correctAnswer: "It reduces the energy needed to treat and pump water",
        imageUrl: "./imagequestions/performanceassessment.png",
    },
    {
        type: "text",
        question: "What is the primary goal of performance assessment in water supply systems?",
        options: [
            "To optimize operations and improve efficiency",
            "To increase maintenance costs",
            "To reduce water quality standards",
            "To avoid regulatory compliance",
        ],
        correctAnswer: "To optimize operations and improve efficiency",
    },
    {
        type: "text",
        question: "Which of the following is a key indicator of operational excellence in water supply systems?",
        options: [
            "Frequent pipeline bursts",
            "High levels of non-revenue water (NRW)",
            "Consistent water pressure and quality",
            "Increased customer complaints",
        ],
        correctAnswer: "Consistent water pressure and quality",
    },
    {
        type: "text",
        question: "What is the primary reason for monitoring water pressure in a distribution system?",
        options: [
            "To detect leaks and prevent pipe bursts",
            "To increase energy consumption",
            "To reduce customer communication",
            "To decrease maintenance efforts",
        ],
        correctAnswer: "To detect leaks and prevent pipe bursts",
    },
    // {
    //   type: "text",
    //   question: "How does regular equipment inspection benefit the water supply system?",
    //   options: [
    //     "It prevents unexpected breakdowns",
    //     "It increases operational downtime",
    //     "It raises repair costs",
    //     "It reduces the lifespan of pumps",
    //   ],
    //   correctAnswer: "It prevents unexpected breakdowns",
    // },
    {
        type: "text",
        question: "What is the impact of inadequate pipeline maintenance?",
        options: [
            "Increased service life of infrastructure",
            "Reduced water quality and frequent leaks",
            "Enhanced customer satisfaction",
            "Improved water pressure",
        ],
        correctAnswer: "Reduced water quality and frequent leaks",
    },
    {
        type: "text",
        question: "What does SCADA technology help achieve in a water supply system?",
        options: [
            "Automated monitoring and control of operations",
            "Increased manual labor",
            "Reduced system reliability",
            "Higher customer complaints",
        ],
        correctAnswer: "Automated monitoring and control of operations",
    },
    {
        type: "text",
        question: "Why is energy efficiency important in water supply systems?",
        options: [
            "It helps reduce operational costs",
            "It increases energy consumption",
            "It decreases customer satisfaction",
            "It leads to increased service disruptions",
        ],
        correctAnswer: "It helps reduce operational costs",
    },
    {
        type: "text",
        question: "What is one way to reduce non-revenue water (NRW) in a water supply system?",
        options: [
            "Identifying and repairing leaks",
            "Ignoring meter inaccuracies",
            "Increasing pumping pressure unnecessarily",
            "Reducing the number of performance assessments",
        ],
        correctAnswer: "Identifying and repairing leaks",
    },
    {
        type: "text",
        question: "How does customer feedback contribute to operational excellence?",
        options: [
            "It helps identify service issues and areas for improvement",
            "It increases maintenance costs",
            "It reduces regulatory compliance",
            "It leads to lower water quality",
        ],
        correctAnswer: "It helps identify service issues and areas for improvement",
    },
    {
        type: "text",
        question: "What does proactive maintenance of water supply infrastructure aim to achieve?",
        options: [
            "Reducing unexpected failures and service interruptions",
            "Increasing system failures",
            "Decreasing operational efficiency",
            "Limiting customer satisfaction",
        ],
        correctAnswer: "Reducing unexpected failures and service interruptions",
    },
];


// Generate stages for each set
export const nonEngineerSet3Stages: Stage[] = [
    { stageName: "Plan A Water Supply System", questions: getQuestionsForStage1() },
    { stageName: "Design the Water Supply System", questions: getQuestionsForStage2() },
    { stageName: "Building the Infrastructure", questions: getQuestionsForStage3() }, //5
    { stageName: "Water Treatment", questions: getQuestionsForStage4() }, //3
    { stageName: "Smart Water Networks", questions: getQuestionsForStage5() }, //7
    { stageName: "Metering, Billing, and Collection", questions: getQuestionsForStage6() }, //8
    { stageName: "Non-Revenue Water Management", questions: getQuestionsForStage7() }, //4
    { stageName: "Performance Assessment & Operational Excellence", questions: getQuestionsForStage8() } //6
];
