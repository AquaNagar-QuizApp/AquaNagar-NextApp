import { Stage, Question } from "@/types";

// Stage 1 - Plan a Water Supply System
const getQuestionsForStage1 = (): Question[] => [
    {
        type: "image",
        question: "What essential component should accompany the system shown to ensure water quality for reuse?",
        options: [
            "Chlorination units",
            "High-pressure turbines",
            "Biofuel systems",
            "Evaporative coolers",
        ],
        correctAnswer: "Chlorination units",
        imageUrl: "./imagequestions/planning.jpg",
    },
    {
        type: "text",
        question: "What is an advantage of using high-density polyethylene (HDPE) pipes in a water supply system (WSS)?",
        options: [
            "Low cost but frequent replacement requirements",
            "Resistance to chemicals and long service life",
            "High environmental footprint during production",
            "Minimal resistance to corrosion",
        ],
        correctAnswer: "Resistance to chemicals and long service life",
    },
    {
        type: "text",
        question: "Which of the following materials is considered eco-friendly for WSS construction?",
        options: [
            "High-carbon concrete",
            "Lead-coated steel",
            "Sustainably sourced timber",
            "Polyvinyl chloride (PVC)",
        ],
        correctAnswer: "Sustainably sourced timber",
    },
    {
        type: "text",
        question: "What is the purpose of directional drilling in pipeline installation?",
        options: [
            "To eliminate the need for erosion control",
            "To minimize land disturbance and excavation",
            "To reduce the need for durable materials",
            "To install pipelines in high-sediment areas",
        ],
        correctAnswer: "To minimize land disturbance and excavation",
    },
    // {
    //   type: "text",
    //   question: "Why is it essential to use non-toxic materials in a WSS?",
    //   options: [
    //     "To reduce construction costs",
    //     "To avoid contamination of the water supply",
    //     "To increase material durability",
    //     "To eliminate the need for water treatment",
    //   ],
    //   correctAnswer: "To avoid contamination of the water supply",
    // },
    {
        type: "text",
        question: "What role does erosion and sediment control play in sustainable construction practices?",
        options: [
            "Preventing soil erosion and protecting waterways",
            "Reducing energy consumption of construction machinery",
            "Avoiding the use of recycled materials",
            "Simplifying waste management practices",
        ],
        correctAnswer: "Preventing soil erosion and protecting waterways",
    },
    {
        type: "text",
        question: "Which practice is an example of energy-efficient construction?",
        options: [
            "Use of hybrid or electric machinery",
            "Operating machinery at maximum speed regardless of load",
            "Continuous use of diesel-powered equipment",
            "Limiting construction to manual methods",
        ],
        correctAnswer: "Use of hybrid or electric machinery",
    },
    {
        type: "text",
        question: "How can recycled materials be incorporated into WSS construction?",
        options: [
            "By using recycled aggregates in concrete",
            "By avoiding durable materials like HDPE",
            "By prioritizing the use of newly manufactured steel",
            "By increasing non-recyclable waste in the project",
        ],
        correctAnswer: "By using recycled aggregates in concrete",
    },
    {
        type: "text",
        question: "What is the primary purpose of noise and dust control during construction?",
        options: [
            "To enhance material durability",
            "To reduce disruption to the local environment and community",
            "To eliminate the need for sediment control",
            "To decrease overall project costs",
        ],
        correctAnswer: "To reduce disruption to the local environment and community",
    },
    {
        type: "text",
        question: "What is a benefit of sourcing materials locally for WSS construction?",
        options: [
            "Reduces transportation costs and emissions",
            "Increases the overall environmental impact",
            "Avoids compliance with local regulations",
            "Reduces the need for community engagement",
        ],
        correctAnswer: "Reduces transportation costs and emissions",
    },
    {
        type: "text",
        question: "Which construction waste management strategy contributes to sustainability?",
        options: [
            "Recycling materials like metal scraps and concrete",
            "Disposing of all waste in landfills",
            "Avoiding temporary vegetation for erosion control",
            "Increasing the use of disposable materials",
        ],
        correctAnswer: "Recycling materials like metal scraps and concrete",
    },
];


// // Stage 2 - Design the Water Supply System
const getQuestionsForStage2 = (): Question[] => [
    {
        type: "text",
        question: "What is the primary purpose of leak detection technologies in a Water Supply System (WSS)?",
        options: [
            "To increase water pressure",
            "To identify and locate leaks early to minimize water loss",
            "To monitor customer water usage",
            "To track system capacity",
        ],
        correctAnswer: "To identify and locate leaks early to minimize water loss",
    },
    {
        type: "text",
        question: "Which of the following is an example of a proactive leak detection technology?",
        options: [
            "Water treatment chemicals",
            "Pressure relief valves",
            "Acoustic sensors",
            "Chlorine dosing systems",
        ],
        correctAnswer: "Acoustic sensors",
    },
    {
        type: "text",
        question: "What advantage does remote monitoring offer for leak detection?",
        options: [
            "It allows real-time detection of leaks and prioritizes repairs",
            "It reduces water pressure in the system",
            "It increases water consumption",
            "It prevents unauthorized water connections",
        ],
        correctAnswer: "It allows real-time detection of leaks and prioritizes repairs",
    },
    {
        type: "text",
        question: "Which of the following is a key component in managing water pressure to minimize leaks?",
        options: [
            "Installing water filtration systems",
            "Maintaining high water pressure throughout the system",
            "Using pressure regulation devices like pressure reducing valves (PRVs)",
            "Increasing the size of the pipes",
        ],
        correctAnswer: "Using pressure regulation devices like pressure reducing valves (PRVs)",
    },
    {
        type: "text",
        question: "How does hydraulic modeling help in pressure management?",
        options: [
            "It reduces water consumption",
            "It simulates different operating scenarios to optimize pressure settings",
            "It detects water leaks",
            "It tracks customer usage patterns",
        ],
        correctAnswer: "It simulates different operating scenarios to optimize pressure settings",
    },
    {
        type: "text",
        question: "What is the primary benefit of implementing Advanced Metering Infrastructure (AMI) in a WSS?",
        options: [
            "To reduce the system's pressure",
            "To enable real-time monitoring of water consumption and detect leaks or unauthorized usage",
            "To increase water loss",
            "To limit water usage",
        ],
        correctAnswer: "To enable real-time monitoring of water consumption and detect leaks or unauthorized usage",
    },
    {
        type: "text",
        question: "Why is regular calibration and maintenance of water meters crucial for minimizing water loss?",
        options: [
            "To ensure accurate measurement and prevent underbilling or overbilling",
            "To increase water demand",
            "To reduce meter readings",
            "To monitor customer satisfaction",
        ],
        correctAnswer: "To ensure accurate measurement and prevent underbilling or overbilling",
    },
    {
        type: "text",
        question: "What role does meter tamper detection play in a WSS?",
        options: [
            "It prevents customer dissatisfaction",
            "It identifies unauthorized tampering and reduces water theft",
            "It enhances the visual appeal of meters",
            "It increases meter installation costs",
        ],
        correctAnswer: "It identifies unauthorized tampering and reduces water theft",
    },
    {
        type: "text",
        question: "What is the objective of preventive maintenance programs in a Water Supply System?",
        options: [
            "To reduce customer bills",
            "To identify and address potential sources of water loss before they cause significant issues",
            "To increase water demand",
            "To reduce the need for water filtration",
        ],
        correctAnswer: "To identify and address potential sources of water loss before they cause significant issues",
    },
    {
        type: "text",
        question: "How can asset management systems help in minimizing water loss in a WSS?",
        options: [
            "By tracking asset performance and prioritizing maintenance based on condition assessments",
            "By increasing the size of water pipes",
            "By installing more valves",
            "By reducing water consumption",
        ],
        correctAnswer: "By tracking asset performance and prioritizing maintenance based on condition assessments",
    },
];


// Stage 4 - Water Treatment
const getQuestionsForStage4 = (): Question[] => [
    {
        type: "image",
        question: "Which process commonly involves the use of NaCl in managing urban water systems?",
        options: [
            "Reverse osmosis",
            "Ion exchange",
            "Chlorination",
            "Flocculation",
        ],
        correctAnswer: "Ion exchange",
        imageUrl: "./imagequestions/watertreatment1.png",
    },
    {
        type: "image",
        question: "What type of pollutants are magnetic alginate composite beads most effective at removing?",
        options: [
            "Heavy metals",
            "Suspended solids",
            "Bacteria and viruses",
            "Organic compounds only",
        ],
        correctAnswer: "Heavy metals",
        imageUrl: "./imagequestions/watertreatment2.png",
    },
    {
        type: "text",
        question: "What is the purpose of regular flushing in water distribution systems?",
        options: [
            "To increase water pressure",
            "To remove sediment and maintain water flow",
            "To disinfect storage tanks",
            "To reduce operational costs",
        ],
        correctAnswer: "To remove sediment and maintain water flow",
    },
    {
        type: "text",
        question: "Which material is most prone to corrosion in water distribution systems?",
        options: ["PVC", "Copper", "Cast iron", "Stainless steel"],
        correctAnswer: "Cast iron",
    },
    {
        type: "text",
        question: "What is the ideal pH range for drinking water in a distribution system?",
        options: ["4.0–5.0", "6.5–8.5", "8.0–10.0", "7.5–9.5"],
        correctAnswer: "6.5–8.5",
    },
    // {
    //   type: "text",
    //   question: "Which type of contamination is most likely to occur due to backflow in a distribution system?",
    //   options: [
    //     "Physical contamination",
    //     "Chemical contamination",
    //     "Microbial contamination",
    //     "Thermal contamination",
    //   ],
    //   correctAnswer: "Microbial contamination",
    // },
    // {
    //   type: "text",
    //   question: "Which technology is commonly used for real-time monitoring of water quality?",
    //   options: [
    //     "Ultrasonic flow meters",
    //     "SCADA systems",
    //     "Spectrophotometers",
    //     "Thermal sensors",
    //   ],
    //   correctAnswer: "SCADA systems",
    // },
    {
        type: "text",
        question: "Why are total coliforms tested in water distribution systems?",
        options: [
            "To measure water hardness",
            "To check for microbial contamination",
            "To assess turbidity levels",
            "To determine chemical contaminants",
        ],
        correctAnswer: "To check for microbial contamination",
    },
    {
        type: "text",
        question: "Which factor is critical in designing a water distribution system to minimize contamination risks?",
        options: [
            "Pipe material selection",
            "High water velocity",
            "Reduced storage capacity",
            "Centralized disinfection",
        ],
        correctAnswer: "Pipe material selection",
    },
    {
        type: "text",
        question: "What is the recommended maximum turbidity level for drinking water distribution?",
        options: ["1 NTU", "5 NTU", "10 NTU", "15 NTU"],
        correctAnswer: "5 NTU",
    },
    {
        type: "text",
        question: "Which of the following is a primary indicator of organic pollution in water sources?",
        options: [
            "Chloride concentration",
            "Dissolved oxygen levels",
            "Nitrate concentration",
            "pH value",
        ],
        correctAnswer: "Dissolved oxygen levels",
    },
    {
        type: "text",
        question: "What is the main goal of pre-chlorination in water treatment plants?",
        options: [
            "To adjust pH levels",
            "To eliminate algae and control microbial growth",
            "To remove heavy metals",
            "To improve the taste of water",
        ],
        correctAnswer: "To eliminate algae and control microbial growth",
    },
];


// Stage 7 - Non-Revenue Water Management
const getQuestionsForStage7 = (): Question[] => [
    {
        type: "text",
        question: "What is the primary purpose of the Pressure Zero Test (PZT)?",
        options: [
            "To monitor customer water consumption",
            "To test pipeline material durability",
            "To establish and verify the hydraulic isolation of a DMA",
            "To increase water pressure across the network",
        ],
        correctAnswer: "To establish and verify the hydraulic isolation of a DMA",
    },
    {
        type: "text",
        question: "What is the specified test pressure used in a PZT?",
        options: [
            "Equal to the working pressure",
            "Twice the working pressure or 1.5 times the pipe test pressure",
            "Half the working pressure",
            "Equal to the average pressure in the DMA",
        ],
        correctAnswer: "Twice the working pressure or 1.5 times the pipe test pressure",
    },
    {
        type: "text",
        question: "What is the role of boundary valves during the PZT?",
        options: [
            "To increase flow into the DMA",
            "To ensure hydraulic isolation of the DMA",
            "To measure water quality in the DMA",
            "To prevent pressure loss in the surrounding network",
        ],
        correctAnswer: "To ensure hydraulic isolation of the DMA",
    },
    {
        type: "text",
        question: "What does the Total DMA Consumption depend on?",
        options: [
            "The volume of water inflow into the DMA",
            "The percentage of customer meter coverage in the DMA",
            "The number of boundary valves in the DMA",
            "The diameter of the pipelines in the DMA",
        ],
        correctAnswer: "The percentage of customer meter coverage in the DMA",
    },
    {
        type: "text",
        question: "Why is it necessary to install temporary flow points during the PZT?",
        options: [
            "To calibrate permanent meters",
            "To monitor inflow during the test and confirm hydraulic isolation",
            "To reduce installation costs of permanent meters",
            "To increase water supply during the test",
        ],
        correctAnswer: "To monitor inflow during the test and confirm hydraulic isolation",
    },
    {
        type: "text",
        question: "What must occur if the pressure inside the DMA does not drop to zero during the PZT?",
        options: [
            "The test is successful",
            "There is another inflow pipe that needs to be addressed",
            "The DMA boundary valves should be opened immediately",
            "The pipeline diameter is too large for testing",
        ],
        correctAnswer: "There is another inflow pipe that needs to be addressed",
    },
    {
        type: "text",
        question: "What is the primary requirement for finalizing a DMA boundary after a PZT?",
        options: [
            "Installation of additional storage tanks",
            "Permanent meters at all inflow locations",
            "Boundary valves that remain open for increased flow",
            "Relocation of pipelines to higher elevations",
        ],
        correctAnswer: "Permanent meters at all inflow locations",
    },
    {
        type: "text",
        question: "What manpower is typically required for conducting a PZT on a pipe up to 300 mm in diameter?",
        options: [
            "1 Engineer, 1 Fitter, 2 Laborers",
            "2 Engineers, 1 Supervisor",
            "1 Engineer, 3 Fitters, 2 Laborers",
            "1 Engineer, 1 Manager",
        ],
        correctAnswer: "1 Engineer, 1 Fitter, 2 Laborers",
    },
    {
        type: "text",
        question: "Which of the following factors should be prioritized when demarcating a DMA boundary?",
        options: [
            "Proximity to water treatment plants",
            "ELSR/OHT located at a reasonably higher elevation within the DMA",
            "Number of customers in the DMA",
            "Availability of customer complaints",
        ],
        correctAnswer: "ELSR/OHT located at a reasonably higher elevation within the DMA",
    },
    {
        type: "text",
        question: "What is the formula for calculating Non-Revenue Water (NRW) in a DMA?",
        options: [
            "Total DMA Inflow + Total DMA Consumption",
            "Total DMA Inflow - Total DMA Consumption",
            "Total DMA Consumption ÷ Total DMA Inflow",
            "Total DMA Consumption × Total DMA Inflow",
        ],
        correctAnswer: "Total DMA Inflow - Total DMA Consumption",
    },
];


// Stage 3 - Building the Infrastructure
const getQuestionsForStage3 = (): Question[] => [
    {
        type: "text",
        question: "Which project management phase involves defining objectives, scope, and deliverables?",
        options: ["Planning", "Execution", "Initiation", "Closing"],
        correctAnswer: "Initiation",
    },
    {
        type: "text",
        question: "What is a critical element of stakeholder management in construction projects?",
        options: [
            "Ignoring conflicts",
            "Effective communication",
            "Eliminating stakeholder roles",
            "Focusing only on internal teams",
        ],
        correctAnswer: "Effective communication",
    },
    {
        type: "text",
        question: "Which factor contributes most to cost overruns in construction projects?",
        options: [
            "Effective planning",
            "Poor resource allocation",
            "Collaboration among teams",
            "Efficient risk management",
        ],
        correctAnswer: "Poor resource allocation",
    },
    {
        type: "text",
        question: 'What does the term “float” mean in project scheduling?',
        options: [
            "The time taken to complete critical tasks",
            "The additional time available without delaying the project",
            "The cost buffer for emergencies",
            "The idle time between tasks",
        ],
        correctAnswer: "The additional time available without delaying the project",
    },
    {
        type: "text",
        question: "Which tool helps identify project dependencies and constraints?",
        options: ["Work Breakdown Structure (WBS)", "PERT", "CPM", "GIS"],
        correctAnswer: "Work Breakdown Structure (WBS)",
    },
    {
        type: "text",
        question: "What is a key output of the planning phase in construction projects?",
        options: ["Project timeline", "Resource allocation", "Risk analysis", "All of the above"],
        correctAnswer: "All of the above",
    },
    {
        type: "text",
        question: "What is the main purpose of a feasibility study in construction projects?",
        options: [
            "To finalize the project scope",
            "To assess technical and economic viability",
            "To initiate stakeholder meetings",
            "To plan post-construction activities",
        ],
        correctAnswer: "To assess technical and economic viability",
    },
    {
        type: "text",
        question: 'What is “slack” in project management?',
        options: [
            "Extra resources for emergencies",
            "Time delay allowed without impacting the project schedule",
            "Overlapping tasks in a project timeline",
            "Waste in a project process",
        ],
        correctAnswer: "Time delay allowed without impacting the project schedule",
    },
    {
        type: "text",
        question: "Which technique ensures a systematic approach to prioritizing project risks?",
        options: ["Risk Register", "SWOT Analysis", "Monte Carlo Simulation", "Sensitivity Analysis"],
        correctAnswer: "Risk Register",
    },
    {
        type: "text",
        question: "What is the significance of Key Performance Indicators (KPIs) in construction?",
        options: [
            "To evaluate project performance and success",
            "To increase project costs",
            "To reduce stakeholder collaboration",
            "To eliminate project risks",
        ],
        correctAnswer: "To evaluate project performance and success",
    },
];


// Stage 8 - Performance Assessment & Operational Excellence
const getQuestionsForStage8 = (): Question[] => [
    {
        type: "image",
        question: "Which of the following technologies can help reduce the carbon footprint of water treatment plants?",
        options: [
            "Fossil-fuel-powered generators",
            "Membrane bioreactors with renewable energy integration",
            "Traditional chlorination systems without automation",
            "Coal-based heating systems for sludge drying"
        ],
        correctAnswer: "Membrane bioreactors with renewable energy integration",
        imageUrl: "./imagequestions/performanceassessment.png",
    },
    {
        type: "text",
        question: 'What does the term "non-revenue water" (NRW) signify?',
        options: [
            "Water that meets regulatory standards",
            "Water that is lost or unbilled",
            "Excess water in reservoirs",
            "Water used for billing audits",
        ],
        correctAnswer: "Water that is lost or unbilled",
    },
    {
        type: "text",
        question: "How can technology upgradation improve operational performance?",
        options: [
            "By increasing regulatory requirements",
            "By enabling smart monitoring and automation",
            "By reducing energy efficiency",
            "By delaying infrastructure improvements",
        ],
        correctAnswer: "By enabling smart monitoring and automation",
    },
    {
        type: "text",
        question: "What is the significance of service reliability and continuity?",
        options: [
            "To ensure intermittent water supply",
            "To guarantee consistent availability of water without interruptions",
            "To reduce operational monitoring",
            "To minimize consumer feedback",
        ],
        correctAnswer: "To guarantee consistent availability of water without interruptions",
    },
    // {
    //   type: "text",
    //   question: "Which component ensures the treatment of water to meet defined quality standards?",
    //   options: ["Distribution equipment", "Treatment plant", "Conveying pipes", "Service reservoirs"],
    //   correctAnswer: "Treatment plant",
    // },
    {
        type: "text",
        question: "What is the primary objective of customer communication in water utilities?",
        options: [
            "To reduce regulatory oversight",
            "To inform consumers about water quality and service updates",
            "To delay operational processes",
            "To increase water usage",
        ],
        correctAnswer: "To inform consumers about water quality and service updates",
    },
    {
        type: "text",
        question: "Which of the following best describes Non-Revenue Water (NRW)?",
        options: [
            "Water that is stored for emergencies",
            "Water that is lost through leaks, theft, or metering errors",
            "Water provided to industries free of cost",
            "Water used for irrigation purposes",
        ],
        correctAnswer: "Water that is lost through leaks, theft, or metering errors",
    },
    {
        type: "text",
        question: "What is the primary goal of performance benchmarking in water utilities?",
        options: [
            "Increasing operational costs",
            "Comparing and improving system efficiency against standards",
            "Eliminating customer complaints",
            "Increasing the size of reservoirs",
        ],
        correctAnswer: "Comparing and improving system efficiency against standards",
    },
    {
        type: "text",
        question: "Which factor most significantly affects water pumping efficiency?",
        options: [
            "Pump placement",
            "Regular lubrication",
            "Energy input and hydraulic performance",
            "Color of the pump body",
        ],
        correctAnswer: "Energy input and hydraulic performance",
    },
    {
        type: "text",
        question: "What is the impact of unplanned downtime in water supply systems?",
        options: [
            "Increased customer satisfaction",
            "Decreased revenue and operational efficiency",
            "Improved water quality",
            "Enhanced system stability",
        ],
        correctAnswer: "Decreased revenue and operational efficiency",
    },
    {
        type: "text",
        question: "Why is pressure zoning used in urban water supply systems?",
        options: [
            "To increase pipe diameters",
            "To balance and regulate pressure in different areas",
            "To reduce the number of treatment plants",
            "To lower energy usage in all zones",
        ],
        correctAnswer: "To balance and regulate pressure in different areas",
    },
];


// Stage 5 - Smart Water Networks
const getQuestionsForStage5 = (): Question[] => [
    {
        type: "image",
        question: "Which flow measurement device uses sound waves to determine the velocity of fluid flow?",
        options: [
            "Rain Gauges",
            "Acoustic Doppler Flow Meters",
            "Level Transmitters",
            "Insertion Type Flow Meters",
        ],
        correctAnswer: "Acoustic Doppler Flow Meters",
        imageUrl: "./imagequestions/smartwaternetwork1.jpg",
    },
    {
        type: "image",
        question: "In urban water management, the role of natural water bodies as shown is to:",
        options: [
            "Act solely as decorative elements",
            "Serve as natural reservoirs aiding in groundwater recharge",
            "Replace water treatment plants",
            "Generate electricity directly",
        ],
        correctAnswer: "Serve as natural reservoirs aiding in groundwater recharge",
        imageUrl: "./imagequestions/smartwaternetwork2.jpg",
    },
    {
        type: "text",
        question:
            "What is the primary cause of contamination in the water distribution system after it leaves the Water Treatment Plant (WTP)?",
        options: [
            "High chlorine levels",
            "Backflow from industrial, commercial, and residential customers",
            "Reduced water temperature",
            "Over-chlorination during treatment",
        ],
        correctAnswer:
            "Backflow from industrial, commercial, and residential customers",
    },
    // {
    //   type: "text",
    //   question:
    //     "Which of the following water quality parameters is commonly monitored by online systems in water distribution networks?",
    //   options: [
    //     "Turbidity",
    //     "pH, BOD, COD, TSS",
    //     "Chlorine residual only",
    //     "Alkalinity",
    //   ],
    //   correctAnswer: "pH, BOD, COD, TSS",
    // },
    // {
    //   type: "text",
    //   question:
    //     "What is the advantage of implementing an online water quality monitoring system in a water distribution network?",
    //   options: [
    //     "It provides real-time data for quick response to contamination",
    //     "It reduces the need for manual sampling",
    //     "It lowers operational costs and chemical usage",
    //     "All of the above",
    //   ],
    //   correctAnswer: "All of the above",
    // },
    {
        type: "text",
        question:
            "Which of the following sensors is most commonly used in online water quality monitoring systems to detect contaminants?",
        options: [
            "Flow meter sensors",
            "Acoustic sensors",
            "Generic water quality sensors (e.g., pH, DO, chlorine)",
            "Pressure sensors",
        ],
        correctAnswer: "Generic water quality sensors (e.g., pH, DO, chlorine)",
    },
    {
        type: "text",
        question:
            "Which type of water quality monitoring method is considered most effective for continuous monitoring in the distribution network?",
        options: [
            "Manual grab sampling",
            "Fixed-location sensors for real-time data collection",
            "Periodic laboratory testing",
            "Visual inspection of water clarity",
        ],
        correctAnswer: "Fixed-location sensors for real-time data collection",
    },
    {
        type: "text",
        question: "How does leakage in the distribution network impact water quality?",
        options: [
            "It increases the pH levels of the water",
            "It can introduce contaminants like bacteria or chemicals",
            "It reduces water flow to consumers",
            "It decreases chlorine residual levels",
        ],
        correctAnswer: "It can introduce contaminants like bacteria or chemicals",
    },
    {
        type: "text",
        question: "What is the role of acoustic monitoring in water leakage management?",
        options: [
            "To measure water quality parameters",
            "To detect leaks by listening for acoustic signals from leaks",
            "To reduce chemical usage in water treatment",
            "To monitor customer water usage",
        ],
        correctAnswer: "To detect leaks by listening for acoustic signals from leaks",
    },
    {
        type: "text",
        question:
            "What is a significant advantage of using a hydraulic model in water leakage management?",
        options: [
            "It increases water pressure",
            "It simulates water flow and pressure to predict and prevent leaks",
            "It allows for the immediate repair of leaks",
            "It provides real-time water quality data",
        ],
        correctAnswer: "It simulates water flow and pressure to predict and prevent leaks",
    },
    {
        type: "text",
        question: "What does the Minimum Night Consumption (MNC) test help to determine?",
        options: [
            "Water quality issues during peak demand",
            "Non-Revenue Water (NRW) and potential leakage areas",
            "Customer satisfaction with water pressure",
            "Bacterial contamination levels",
        ],
        correctAnswer: "Non-Revenue Water (NRW) and potential leakage areas",
    },
    {
        type: "text",
        question: "How can acoustic noise loggers help in leakage management?",
        options: [
            "By recording and analyzing the acoustic noise generated by leaks",
            "By measuring chlorine residual levels in pipes",
            "By automatically repairing leaks",
            "By monitoring customer complaints about leaks",
        ],
        correctAnswer: "By recording and analyzing the acoustic noise generated by leaks",
    },
];


// Stage 6 - Metering, Billing, and Collection
const getQuestionsForStage6 = (): Question[] => [
    {
        type: "text",
        question:
            "What is the primary difference between AMI (Advanced Metering Infrastructure) and AMR (Automatic Meter Reading)?",
        options: [
            "AMI uses manual readings while AMR uses automated systems",
            "AMI allows two-way communication between meter and supplier, while AMR does not",
            "AMI is used only for electricity meters",
            "AMR requires fixed wired connections for communication",
        ],
        correctAnswer:
            "AMI allows two-way communication between meter and supplier, while AMR does not",
    },
    {
        type: "text",
        question:
            "Which of the following is NOT a common wireless communication method used in AMI systems?",
        options: ["Cellular communications", "Wi-Fi", "Power line carrier (PLC)", "ZigBee"],
        correctAnswer: "Power line carrier (PLC)",
    },
    {
        type: "text",
        question:
            "What is the key feature of AMI compared to traditional metering systems?",
        options: [
            "It enables real-time communication between the meter and the utility.",
            "It requires manual meter readings every month.",
            "It only supports wired communication.",
            "It requires more human resources to operate.",
        ],
        correctAnswer: "It enables real-time communication between the meter and the utility.",
    },
    {
        type: "text",
        question:
            "Which of the following is typically used in the AMI system for reading data from water meters?",
        options: [
            "Satellite communication",
            "Fixed wired connections like power line carrier",
            "Manual data entry by meter readers",
            "Digital signal processing in water meters",
        ],
        correctAnswer: "Fixed wired connections like power line carrier",
    },
    {
        type: "text",
        question:
            "Which of the following is NOT typically part of the Metering, Billing, and Collection (MBC) system?",
        options: [
            "Consumer Information System (CIS)",
            "Grievance and redressal process",
            "Integration with GIS (Geographic Information System)",
            "Real-time water quality monitoring",
        ],
        correctAnswer: "Real-time water quality monitoring",
    },
    {
        type: "text",
        question:
            'What is the role of the "gap analysis" in the implementation of billing software for water metering systems?',
        options: [
            "To test the performance of the meter reading software",
            "To compare the current system with the proposed system and identify any differences",
            "To check the accuracy of meter readings",
            "To develop hardware components for the system",
        ],
        correctAnswer:
            "To compare the current system with the proposed system and identify any differences",
    },
    {
        type: "text",
        question:
            "What is a key feature of the water billing software mentioned in the content?",
        options: [
            "It generates bills based on estimated consumption.",
            "It only supports manual data entry of readings.",
            "It integrates with payment gateways for online transactions.",
            "It requires separate software for each meter type.",
        ],
        correctAnswer: "It integrates with payment gateways for online transactions.",
    },
    {
        type: "text",
        question:
            "Which of the following processes is included in the meter reading and billing software?",
        options: [
            "Water treatment process monitoring",
            "Disconnection/Reconnection Process",
            "Water storage management",
            "Water pressure control",
        ],
        correctAnswer: "Disconnection/Reconnection Process",
    },
    {
        type: "text",
        question:
            "How does the billing software ensure the security of user data during transactions?",
        options: [
            "By using 128/256-bit SSL encryption for secure access over the internet",
            "By manually verifying all transactions",
            "By using basic password protection",
            "By limiting access to only in-house staff",
        ],
        correctAnswer:
            "By using 128/256-bit SSL encryption for secure access over the internet",
    },
    {
        type: "text",
        question:
            "Which of the following is NOT typically a part of the post-implementation support for the billing software?",
        options: [
            "Training for end users and system administrators",
            "Go Live and Stabilization/Warranty Support",
            "Ongoing monitoring of water consumption rates",
            "Post-implementation operation and maintenance support",
        ],
        correctAnswer: "Ongoing monitoring of water consumption rates",
    },
];


// Generate stages for each set
export const engineerSet3Stages: Stage[] = [
    { stageName: "Plan a Water Supply System", questions: getQuestionsForStage1() },
    { stageName: "Design the Water Supply System", questions: getQuestionsForStage2() },
    { stageName: "Building the Infrastructure", questions: getQuestionsForStage3() }, //5
    { stageName: "Water Treatment", questions: getQuestionsForStage4() }, //3
    { stageName: "Smart Water Networks", questions: getQuestionsForStage5() }, //7
    { stageName: "Metering, Billing, and Collection", questions: getQuestionsForStage6() }, //8
    { stageName: "Non-Revenue Water Management", questions: getQuestionsForStage7() }, //4
    { stageName: "Performance Assessment & Operational Excellence", questions: getQuestionsForStage8() } //6
];
