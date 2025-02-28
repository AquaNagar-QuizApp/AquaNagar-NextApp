import { Stage, Question } from "@/types";

// Stage 1 - Plan a Water Supply System
const getQuestionsForStage1 = (): Question[] => [
    {
        type: "image",
        question: "How can integrating smart sensors with this system optimize its performance?",
        options: [
            "By automating water level monitoring",
            "By reducing roof temperatures",
            "By converting rainwater into electricity",
            "By increasing building height",
        ],
        correctAnswer: "By automating water level monitoring",
        imageUrl: "./imagequestions/planning.jpg",
    },
    {
        type: "text",
        question:
            "What is the primary objective of preventive maintenance in a Water Supply System (WSS)?",
        options: [
            "To increase the frequency of equipment replacement",
            "To avoid unexpected breakdowns and extend equipment life",
            "To eliminate the need for routine inspections",
            "To reduce the quality of water delivered",
        ],
        correctAnswer:
            "To avoid unexpected breakdowns and extend equipment life",
    },
    {
        type: "text",
        question:
            "Which of the following is NOT part of preventive maintenance activities?",
        options: [
            "Routine servicing of equipment",
            "Regular inspections for wear or leaks",
            "Replacing components only after a breakdown",
            "Keeping detailed maintenance records",
        ],
        correctAnswer: "Replacing components only after a breakdown",
    },
    {
        type: "text",
        question:
            "What role do advanced leak detection technologies, such as acoustic sensors, play in managing non-revenue water?",
        options: [
            "They help identify and locate leaks quickly and accurately.",
            "They increase system downtime during repairs.",
            "They reduce the need for metering and billing systems.",
            "They are only useful for monitoring water quality.",
        ],
        correctAnswer:
            "They help identify and locate leaks quickly and accurately.",
    },
    {
        type: "text",
        question:
            "Why is it important to regularly calibrate water meters in a WSS?",
        options: [
            "To reduce customer complaints about water quality",
            "To maintain accuracy in measuring water consumption",
            "To simplify maintenance planning",
            "To eliminate the need for billing systems",
        ],
        correctAnswer: "To maintain accuracy in measuring water consumption",
    },
    // {
    //   type: "text",
    //   question: "What is a key benefit of conducting water audits?",
    //   options: [
    //     "It reduces operational transparency.",
    //     "It identifies sources of water loss and suggests corrective actions.",
    //     "It eliminates the need for preventive maintenance.",
    //     "It simplifies customer engagement efforts.",
    //   ],
    //   correctAnswer:
    //     "It identifies sources of water loss and suggests corrective actions.",
    // },
    {
        type: "text",
        question:
            "What is the primary goal of predictive maintenance in a WSS?",
        options: [
            "To replace equipment based solely on manufacturer recommendations",
            "To forecast equipment failures and plan proactive maintenance",
            "To reduce the use of IoT devices in the system",
            "To eliminate the need for routine inspections",
        ],
        correctAnswer:
            "To forecast equipment failures and plan proactive maintenance",
    },
    {
        type: "text",
        question:
            "How does real-time monitoring contribute to efficient WSS operation?",
        options: [
            "By replacing preventive maintenance entirely",
            "By collecting and transmitting real-time data for informed decision-making",
            "By reducing the need for customer engagement",
            "By increasing manual intervention in system operations",
        ],
        correctAnswer:
            "By collecting and transmitting real-time data for informed decision-making",
    },
    {
        type: "text",
        question:
            "What is the purpose of decision support systems in WSS management?",
        options: [
            "To reduce system transparency",
            "To provide actionable insights and recommendations based on data analysis",
            "To eliminate the need for maintenance personnel training",
            "To increase water loss rates",
        ],
        correctAnswer:
            "To provide actionable insights and recommendations based on data analysis",
    },
    {
        type: "text",
        question:
            "What is the role of performance dashboards in WSS operations?",
        options: [
            "To display KPIs and enhance transparency among operators and stakeholders",
            "To reduce the visibility of water loss rates",
            "To replace predictive maintenance entirely",
            "To simplify leak detection without real-time monitoring",
        ],
        correctAnswer:
            "To display KPIs and enhance transparency among operators and stakeholders",
    },
    {
        type: "text",
        question:
            "Why is customer engagement important in non-revenue water management?",
        options: [
            "To reduce the need for accurate metering systems",
            "To educate users about leak reporting and water conservation practices",
            "To eliminate water audits entirely",
            "To limit public awareness of water-saving programs",
        ],
        correctAnswer:
            "To educate users about leak reporting and water conservation practices",
    },
];


// // Stage 2 - Design the Water Supply System
const getQuestionsForStage2 = (): Question[] => [
    {
        type: "text",
        question:
            "Which of the following is an effective strategy to prevent water loss due to infrastructure deterioration?",
        options: [
            "Regular preventive maintenance and inspections",
            "Reducing system pressure",
            "Increasing water supply",
            "Installing more pumps",
        ],
        correctAnswer: "Regular preventive maintenance and inspections",
    },
    {
        type: "text",
        question: "What is the role of pressure reducing valves (PRVs) in a Water Supply System?",
        options: [
            "To increase the water flow rate",
            "To maintain optimal pressure and prevent excessive stress on the pipes",
            "To detect water leaks",
            "To treat water for consumption",
        ],
        correctAnswer: "To maintain optimal pressure and prevent excessive stress on the pipes",
    },
    {
        type: "text",
        question: "How do leak repair programs help reduce water loss?",
        options: [
            "By increasing water pressure",
            "By ensuring timely detection and repair of leaks",
            "By reducing system capacity",
            "By increasing water consumption",
        ],
        correctAnswer: "By ensuring timely detection and repair of leaks",
    },
    {
        type: "text",
        question: "Which of the following is a key benefit of smart meters in water supply systems?",
        options: [
            "Reduced accuracy of water billing",
            "Improved monitoring and detection of leaks and unauthorized connections",
            "Reduced customer engagement",
            "Increased pressure in the system",
        ],
        correctAnswer: "Improved monitoring and detection of leaks and unauthorized connections",
    },
    {
        type: "text",
        question: "What is one of the risks of high water pressure in a distribution network?",
        options: [
            "Increased efficiency of the system",
            "Higher likelihood of pipe bursts and leaks",
            "Reduced water flow",
            "Decreased water consumption",
        ],
        correctAnswer: "Higher likelihood of pipe bursts and leaks",
    },
    {
        type: "text",
        question: "How do pressure relief valves help in a Water Supply System?",
        options: [
            "By increasing water loss",
            "By preventing damage to infrastructure from high pressure",
            "By reducing meter tampering",
            "By increasing the cost of water supply",
        ],
        correctAnswer: "By preventing damage to infrastructure from high pressure",
    },
    {
        type: "text",
        question: "Why is it important to detect unauthorized connections in a water supply system?",
        options: [
            "To reduce water wastage and improve revenue collection",
            "To increase pressure",
            "To improve water treatment processes",
            "To lower operational costs",
        ],
        correctAnswer: "To reduce water wastage and improve revenue collection",
    },
    {
        type: "text",
        question: "What is a consequence of inadequate leak detection in a WSS?",
        options: [
            "Increased water pressure",
            "Reduced customer satisfaction",
            "Increased water loss and operational costs",
            "Improved system efficiency",
        ],
        correctAnswer: "Increased water loss and operational costs",
    },
    {
        type: "text",
        question: "How can regular leak detection programs impact the sustainability of a WSS?",
        options: [
            "They can reduce water wastage and ensure long-term operational efficiency",
            "They increase water demand",
            "They cause pressure fluctuations",
            "They make the system more complex",
        ],
        correctAnswer: "They can reduce water wastage and ensure long-term operational efficiency",
    },
    {
        type: "text",
        question: "What is one way to optimize the performance of a Water Supply System’s distribution network?",
        options: [
            "By reducing water supply",
            "By optimizing pressure levels and detecting leaks early",
            "By increasing pipe sizes without analysis",
            "By limiting the use of advanced technologies",
        ],
        correctAnswer: "By optimizing pressure levels and detecting leaks early",
    },
];


// Stage 4 - Water Treatment
const getQuestionsForStage4 = (): Question[] => [
    {
        type: "image",
        question: "Excessive use of NaCl in water treatment can lead to:",
        options: [
            "Increased heavy metal contamination",
            "Elevated salinity in wastewater discharge",
            "Reduction in water hardness",
            "Enhanced coagulation",
        ],
        correctAnswer: "Elevated salinity in wastewater discharge",
        imageUrl: "./imagequestions/watertreatment1.png",
    },
    {
        type: "image",
        question: "Why is the use of magnets beneficial in the process illustrated?",
        options: [
            "To enhance adsorption capacity",
            "To prevent bead dissolution",
            "To recover and reuse the beads efficiently",
            "To increase the reaction temperature",
        ],
        correctAnswer: "To recover and reuse the beads efficiently",
        imageUrl: "./imagequestions/watertreatment2.png",
    },
    {
        type: "text",
        question:
            "Which of the following is NOT a method for removing turbidity in water treatment?",
        options: ["Coagulation", "Reverse osmosis", "Sedimentation", "Aeration"],
        correctAnswer: "Aeration",
    },
    {
        type: "text",
        question: "High levels of total dissolved solids (TDS) in water can result in:",
        options: [
            "Poor taste and scaling in pipelines",
            "Increased microbial activity",
            "Reduced chlorine demand",
            "Enhanced water softness",
        ],
        correctAnswer: "Poor taste and scaling in pipelines",
    },
    // {
    //   type: "text",
    //   question: "What is the primary purpose of aeration in water treatment?",
    //   options: [
    //     "To add nutrients to water",
    //     "To remove dissolved gases like CO₂ and H₂S",
    //     "To kill bacteria and viruses",
    //     "To reduce water hardness",
    //   ],
    //   correctAnswer: "To remove dissolved gases like CO₂ and H₂S",
    // },
    // {
    //   type: "text",
    //   question: "Which stage of water treatment is designed to remove fine particles and pathogens?",
    //   options: ["Sedimentation", "Coagulation", "Filtration", "Chlorination"],
    //   correctAnswer: "Filtration",
    // },
    {
        type: "text",
        question: "What is a common cause of taste and odor issues in water distribution systems?",
        options: [
            "High calcium levels",
            "Biofilm growth and organic matter decay",
            "Elevated chlorine levels",
            "Turbidity above 10 NTU",
        ],
        correctAnswer: "Biofilm growth and organic matter decay",
    },
    {
        type: "text",
        question: "Which chemical is commonly used for pH adjustment in water treatment?",
        options: [
            "Sodium hypochlorite",
            "Lime (calcium hydroxide)",
            "Ferric chloride",
            "Potassium permanganate",
        ],
        correctAnswer: "Lime (calcium hydroxide)",
    },
    {
        type: "text",
        question: "Which of the following is an effective method to control corrosion in distribution systems?",
        options: [
            "Adding chlorine",
            "Adjusting pH and adding corrosion inhibitors",
            "Reducing water velocity",
            "Replacing pipes regularly",
        ],
        correctAnswer: "Adjusting pH and adding corrosion inhibitors",
    },
    {
        type: "text",
        question: "What does the presence of nitrates in drinking water indicate?",
        options: [
            "Industrial contamination",
            "Agricultural runoff or sewage contamination",
            "Naturally occurring minerals",
            "Microbial growth",
        ],
        correctAnswer: "Agricultural runoff or sewage contamination",
    },
    {
        type: "text",
        question: "Which advanced treatment method is most effective for removing dissolved salts from water?",
        options: ["Ultraviolet disinfection", "Reverse osmosis", "Coagulation", "Aeration"],
        correctAnswer: "Reverse osmosis",
    },
    {
        type: "text",
        question: "What is the primary role of activated carbon in water treatment?",
        options: [
            "Removal of suspended solids",
            "Adsorption of organic contaminants and odor-causing substances",
            "Disinfection of water",
            "Adjusting pH levels",
        ],
        correctAnswer: "Adsorption of organic contaminants and odor-causing substances",
    },
];


// Stage 7 - Non-Revenue Water Management
const getQuestionsForStage7 = (): Question[] => [
    {
        type: "text",
        question: "What is the first step in an NRW reduction strategy?",
        options: [
            "Repairing all visible leaks",
            "Installing new customer meters",
            "Calculating the water balance and understanding sources of NRW",
            "Increasing water pressure in pipelines",
        ],
        correctAnswer: "Calculating the water balance and understanding sources of NRW",
    },
    {
        type: "text",
        question: "What does Active Leakage Control (ALC) involve?",
        options: [
            "Regular monitoring of network flows to identify new leaks early",
            "Increasing pressure in the network to detect leaks",
            "Conducting random checks for illegal connections",
            "Replacing all old pipes",
        ],
        correctAnswer: "Regular monitoring of network flows to identify new leaks early",
    },
    {
        type: "text",
        question: "What is the purpose of a Minimum Night Flow (MNF) test?",
        options: [
            "To determine the average water consumption at night",
            "To calculate NRW levels and identify potential leaks in a DMA",
            "To increase pressure during nighttime for leak detection",
            "To monitor customer consumption patterns",
        ],
        correctAnswer: "To calculate NRW levels and identify potential leaks in a DMA",
    },
    {
        type: "text",
        question: "What is the relationship between network pressure and leakage?",
        options: [
            "Higher pressure results in reduced leakage",
            "Higher pressure increases leakage",
            "Pressure has no effect on leakage",
            "Leakage only occurs in low-pressure zones",
        ],
        correctAnswer: "Higher pressure increases leakage",
    },
    {
        type: "text",
        question: "What does the Net Night Flow (NNF) represent?",
        options: [
            "The total customer night consumption",
            "The legitimate customer night consumption",
            "The sum of burst and background leakages",
            "The total inflow to a DMA",
        ],
        correctAnswer: "The sum of burst and background leakages",
    },
    {
        type: "text",
        question: "Why is pressure management important in leakage reduction?",
        options: [
            "It eliminates the need for pipeline repairs",
            "It reduces water demand during peak hours",
            "It minimizes leakage by regulating excessive pressure",
            "It ensures customers receive higher pressure at all times",
        ],
        correctAnswer: "It minimizes leakage by regulating excessive pressure",
    },
    {
        type: "text",
        question: "What is the purpose of a Step Test in leak detection?",
        options: [
            "To measure the pressure across the entire network",
            "To systematically isolate smaller sections of a DMA to identify leaks",
            "To increase flow to identify hidden leaks",
            "To monitor customer consumption patterns",
        ],
        correctAnswer: "To systematically isolate smaller sections of a DMA to identify leaks",
    },
    {
        type: "text",
        question: "What is considered a legitimate customer night consumption rate for residential properties?",
        options: [
            "2.0–2.5 litres/connection/hour",
            "5.0–7.0 litres/connection/hour",
            "1.0–1.5 litres/connection/hour",
            "3.0–4.0 litres/connection/hour",
        ],
        correctAnswer: "2.0–2.5 litres/connection/hour",
    },
    {
        type: "text",
        question: "What is the key benefit of using pressure-reducing valves in a network?",
        options: [
            "They increase the flow rate in pipes",
            "They reduce the occurrence of leaks by managing pressure",
            "They eliminate the need for regular pipeline maintenance",
            "They help detect illegal connections",
        ],
        correctAnswer: "They reduce the occurrence of leaks by managing pressure",
    },
    {
        type: "text",
        question: "What should be done after identifying high MNF levels in a DMA?",
        options: [
            "Increase network pressure",
            "Perform a Step Test to locate leaks",
            "Replace all customer meters in the DMA",
            "Install additional boundary valves",
        ],
        correctAnswer: "Perform a Step Test to locate leaks",
    },
];


// Stage 3 - Building the Infrastructure
const getQuestionsForStage3 = (): Question[] => [
    {
        type: "text",
        question: "Which cost type remains constant regardless of project progress?",
        options: [
            "Variable cost",
            "Fixed cost",
            "Indirect cost",
            "Direct cost",
        ],
        correctAnswer: "Fixed cost",
    },
    {
        type: "text",
        question: "What does 'resource leveling' in construction projects aim to achieve?",
        options: [
            "Optimal use of resources to prevent over-allocation",
            "Maximizing project costs",
            "Increasing complexity in scheduling",
            "Eliminating stakeholder involvement",
        ],
        correctAnswer: "Optimal use of resources to prevent over-allocation",
    },
    {
        type: "text",
        question: "Which concept focuses on designing buildings with minimal environmental impact?",
        options: [
            "Lean Construction",
            "Green Building",
            "Total Quality Management (TQM)",
            "Building Information Modeling (BIM)",
        ],
        correctAnswer: "Green Building",
    },
    {
        type: "text",
        question: "Which process evaluates construction progress against planned performance?",
        options: [
            "Scheduling",
            "Monitoring and Control",
            "Initiation",
            "Closing",
        ],
        correctAnswer: "Monitoring and Control",
    },
    {
        type: "text",
        question: "What does a construction contract typically outline?",
        options: [
            "Project objectives",
            "Roles and responsibilities of stakeholders",
            "Payment terms and conditions",
            "All of the above",
        ],
        correctAnswer: "All of the above",
    },
    {
        type: "text",
        question: "Which scheduling tool allows for overlapping tasks?",
        options: [
            "Gantt Chart",
            "Critical Path Method (CPM)",
            "Program Evaluation and Review Technique (PERT)",
            "Fast Tracking",
        ],
        correctAnswer: "Fast Tracking",
    },
    {
        type: "text",
        question: "Which phase involves formal acceptance and project handover?",
        options: [
            "Execution",
            "Closing",
            "Monitoring",
            "Initiation",
        ],
        correctAnswer: "Closing",
    },
    {
        type: "text",
        question: "What is a primary benefit of construction automation technologies like SCADA?",
        options: [
            "Enhanced project visualization",
            "Improved efficiency and monitoring",
            "Reduced regulatory requirements",
            "Elimination of stakeholder communication",
        ],
        correctAnswer: "Improved efficiency and monitoring",
    },
    {
        type: "text",
        question: "Which project delivery method promotes early contractor involvement?",
        options: [
            "Design-Build",
            "Construction Management at Risk (CMAR)",
            "Lump Sum Contract",
            "Public-Private Partnership (PPP)",
        ],
        correctAnswer: "Construction Management at Risk (CMAR)",
    },
    {
        type: "text",
        question: "What does 'Earned Value' in EVM represent?",
        options: [
            "The budget allocated for a project",
            "The completed work’s monetary value",
            "The cost of future tasks",
            "The project timeline",
        ],
        correctAnswer: "The completed work’s monetary value",
    },
];


// Stage 8 - Performance Assessment & Operational Excellence
const getQuestionsForStage8 = (): Question[] => [
    {
        type: "image",
        question: "How does leakage in water distribution networks impact the carbon footprint?",
        options: [
            "Reduces carbon footprint due to less water processing",
            "Increases carbon footprint due to wasted energy in pumping and treatment",
            "Has no impact on the carbon footprint",
            "Only affects the water bill, not the carbon emissions"
        ],
        correctAnswer: "Increases carbon footprint due to wasted energy in pumping and treatment",
        imageUrl: "./imagequestions/performanceassessment.png",
    },
    // {
    //   type: "text",
    //   question: "What is the benefit of integrating GIS with water utility management?",
    //   options: [
    //     "It slows down decision-making processes",
    //     "It supports infrastructure mapping and leak detection",
    //     "It increases the risk of water loss",
    //     "It minimizes consumer communication",
    //   ],
    //   correctAnswer: "It supports infrastructure mapping and leak detection",
    // },
    {
        type: "text",
        question: "Which key metric indicates the level of customer satisfaction in water utilities?",
        options: [
            "Leakage rate",
            "Complaint resolution time",
            "Length of pipelines",
            "Service reservoir capacity",
        ],
        correctAnswer: "Complaint resolution time",
    },
    {
        type: "text",
        question: "What is the purpose of real-time monitoring in water supply systems?",
        options: [
            "To increase operational delays",
            "To detect faults and inefficiencies immediately",
            "To eliminate the need for maintenance",
            "To increase energy usage",
        ],
        correctAnswer: "To detect faults and inefficiencies immediately",
    },
    {
        type: "text",
        question: "Which technology helps in tracking water losses in real time?",
        options: [
            "Advanced Metering Infrastructure (AMI)",
            "Conventional meters",
            "Manual inspections",
            "Pipeline reinforcements",
        ],
        correctAnswer: "Advanced Metering Infrastructure (AMI)",
    },
    {
        type: "text",
        question: "What is the primary benefit of demand forecasting in water utilities?",
        options: [
            "Minimizing future investments",
            "Predicting future water needs and planning resources accordingly",
            "Reducing system efficiency",
            "Avoiding consumer interactions",
        ],
        correctAnswer: "Predicting future water needs and planning resources accordingly",
    },
    {
        type: "text",
        question: "What does a high rate of pipe bursts in a water system indicate?",
        options: [
            "Proper pressure management",
            "Lack of maintenance and aging infrastructure",
            "Optimized operational performance",
            "Effective asset management",
        ],
        correctAnswer: "Lack of maintenance and aging infrastructure",
    },
    {
        type: "text",
        question: "What role do SCADA systems play in operational performance?",
        options: [
            "They automate and control water supply operations remotely",
            "They slow down system responses",
            "They focus on manual inspections",
            "They increase operational risks",
        ],
        correctAnswer: "They automate and control water supply operations remotely",
    },
    {
        type: "text",
        question: "Why is energy efficiency important in pump operations?",
        options: [
            "It ensures faster pump degradation",
            "It reduces operational costs and environmental impact",
            "It increases water losses",
            "It slows down water distribution",
        ],
        correctAnswer: "It reduces operational costs and environmental impact",
    },
    {
        type: "text",
        question: "What does pump head refer to in water systems?",
        options: [
            "Height of the pump motor",
            "Pressure or height to which water is lifted by the pump",
            "Length of the pump shaft",
            "Weight of the pump components",
        ],
        correctAnswer: "Pressure or height to which water is lifted by the pump",
    },
    {
        type: "text",
        question: "What is the primary goal of water audit processes?",
        options: [
            "Identifying inefficiencies and improving water management",
            "Reducing regulatory compliance",
            "Delaying infrastructure upgrades",
            "Increasing NRW percentages",
        ],
        correctAnswer: "Identifying inefficiencies and improving water management",
    },
];


// Stage 5 - Smart Water Networks
const getQuestionsForStage5 = (): Question[] => [
    {
        type: "image",
        question: "Radar Area Velocity Flow Meters are most effective for:",
        options: [
            "Measuring rainfall intensity",
            "Monitoring fluid levels in tanks",
            "Determining flow velocity in open channels",
            "Measuring pressure variations in pipelines",
        ],
        correctAnswer: "Determining flow velocity in open channels",
        imageUrl: "./imagequestions/smartwaternetwork1.jpg",
    },
    {
        type: "image",
        question: "The integration of industrial facilities within the water system, as shown, primarily focuses on:",
        options: [
            "Enhancing residential aesthetics",
            "Wastewater treatment and water reuse",
            "Reducing the need for water pipelines",
            "Increasing water storage capacity only",
        ],
        correctAnswer: "Wastewater treatment and water reuse",
        imageUrl: "./imagequestions/smartwaternetwork2.jpg",
    },
    {
        type: "text",
        question: "What is the role of an Advanced Metering Infrastructure (AMI) system in a Smart Water Network?",
        options: [
            "To monitor water quality",
            "To detect system leaks",
            "To automatically collect water usage data for billing",
            "To control water flow in pipelines",
        ],
        correctAnswer: "To automatically collect water usage data for billing",
    },
    {
        type: "text",
        question: "Which of the following is a major benefit of integrating Smart Water Networks with Internet of Things (IoT) technologies?",
        options: [
            "Reduced reliance on manual data collection",
            "Higher operational costs",
            "Increased customer complaints",
            "Decreased system monitoring efficiency",
        ],
        correctAnswer: "Reduced reliance on manual data collection",
    },
    {
        type: "text",
        question: 'What does the term "Smart Meter" refer to in the context of a Smart Water Network?',
        options: [
            "A device that reduces water pressure",
            "A sensor used to monitor water quality",
            "A meter that automatically records and transmits water usage data",
            "A tool used to measure air quality in water treatment plants",
        ],
        correctAnswer: "A meter that automatically records and transmits water usage data",
    },
    {
        type: "text",
        question: "How does predictive maintenance enhance the efficiency of a Smart Water Network?",
        options: [
            "By improving water quality control",
            "By predicting and preventing system failures",
            "By increasing water production",
            "By reducing the need for customer complaints",
        ],
        correctAnswer: "By predicting and preventing system failures",
    },
    {
        type: "text",
        question: "What does SCADA stand for in the context of Smart Water Networks?",
        options: [
            "System for Control and Data Analysis",
            "Supervisory Control and Data Acquisition",
            "Smart Communication and Data Automation",
            "Standardized Control and Data Analysis",
        ],
        correctAnswer: "Supervisory Control and Data Acquisition",
    },
    {
        type: "text",
        question: "Which of the following can be considered a major component of the Data Management and Display Layer in a Smart Water Network?",
        options: [
            "Water quality sensors",
            "Flow meters",
            "Data visualization dashboards",
            "Pressure-reducing valves",
        ],
        correctAnswer: "Data visualization dashboards",
    },
    {
        type: "text",
        question: "What is the primary advantage of using Geographic Information System (GIS) in Smart Water Networks?",
        options: [
            "To store water usage data",
            "To track real-time water flow and network performance geographically",
            "To monitor customer satisfaction",
            "To improve customer billing accuracy",
        ],
        correctAnswer: "To track real-time water flow and network performance geographically",
    },
    {
        type: "text",
        question: "How does a Smart Water Network help in improving customer service?",
        options: [
            "By increasing the water price",
            "By providing real-time information and faster response to customer complaints",
            "By limiting water usage during peak times",
            "By controlling water quality manually",
        ],
        correctAnswer: "By providing real-time information and faster response to customer complaints",
    },
    {
        type: "text",
        question: "Which of the following is used to detect leaks in a Smart Water Network?",
        options: [
            "Flow meters",
            "Acoustic sensors",
            "Chlorine sensors",
            "Water pressure sensors",
        ],
        correctAnswer: "Acoustic sensors",
    },
    {
        type: "text",
        question: 'What is the purpose of creating a "Smart Pressure Zone" within a Smart Water Network?',
        options: [
            "To reduce the water pressure throughout the entire network",
            "To optimize pressure distribution for efficient water delivery and reduced leakage",
            "To install more pressure-reducing valves",
            "To monitor and control water consumption",
        ],
        correctAnswer: "To optimize pressure distribution for efficient water delivery and reduced leakage",
    },
];


// Stage 6 - Metering, Billing, and Collection
const getQuestionsForStage6 = (): Question[] => [
    {
        type: "text",
        question: "What is the primary purpose of issuing water bills according to the prevailing Water Tariff Notification?",
        options: [
            "To monitor the installation of water meters",
            "To ensure consumers are charged based on their water consumption",
            "To control water wastage in households",
            "To encourage consumers to reduce their water usage",
        ],
        correctAnswer: "To ensure consumers are charged based on their water consumption",
    },
    {
        type: "text",
        question: "How does the operator help consumers with repairs to internal plumbing to minimize water wastage?",
        options: [
            "By sending plumbers to repair the consumer's plumbing",
            "By providing a grace period of two billing cycles for repairs",
            "By waiving the water charges for consumers with plumbing issues",
            "By installing new pipes in the consumer's property",
        ],
        correctAnswer: "By providing a grace period of two billing cycles for repairs",
    },
    {
        type: "text",
        question: "What happens if a consumer does not make the payment by the disconnection date?",
        options: [
            "The operator will increase the water charges for that consumer",
            "The operator will send reminders to the consumer every week",
            "The operator submits a list of defaulter consumers to the client",
            "The operator will cut off the water supply immediately",
        ],
        correctAnswer: "The operator submits a list of defaulter consumers to the client",
    },
    {
        type: "text",
        question: "What is the role of the operator in collecting one-time connection charges for new connections?",
        options: [
            "The operator raises the connection charges but does not collect them",
            "The operator collects the one-time connection charges and deposits them along with the consumer payments",
            "The operator helps the consumers pay the charges over multiple installments",
            "The operator assists in the setup of the new connections, but not in collecting charges",
        ],
        correctAnswer: "The operator collects the one-time connection charges and deposits them along with the consumer payments",
    },
    {
        type: "text",
        question: "Which of the following is an important component of the Consumer Awareness Program?",
        options: [
            "Monitoring and controlling water usage via smart meters",
            "Providing customers with water-saving devices free of charge",
            "Organizing seminars, workshops, and outreach activities to educate consumers",
            "Limiting the water supply to encourage conservation",
        ],
        correctAnswer: "Organizing seminars, workshops, and outreach activities to educate consumers",
    },
    {
        type: "text",
        question: "Why is the willingness to pay important in consumer awareness programs?",
        options: [
            "It helps in determining the cost of water production",
            "It affects the water utility’s ability to cover production and distribution costs",
            "It helps in deciding the water tariff",
            "It reduces water wastage among consumers",
        ],
        correctAnswer: "It affects the water utility’s ability to cover production and distribution costs",
    },
    {
        type: "text",
        question: "How will the effectiveness of the consumer awareness program be measured?",
        options: [
            "By analyzing water consumption data",
            "By using tailored questionnaires to measure consumer perceptions and willingness to pay",
            "By monitoring water quality improvements",
            "By evaluating the number of new connections established",
        ],
        correctAnswer: "By using tailored questionnaires to measure consumer perceptions and willingness to pay",
    },
    {
        type: "text",
        question: "Which of the following is NOT typically part of a consumer awareness program?",
        options: [
            "Road shows and street plays",
            "Organizing social events to reward consumers for low water usage",
            "Regional TV advertisements",
            "Activities in schools, colleges, and public places",
        ],
        correctAnswer: "Organizing social events to reward consumers for low water usage",
    },
    {
        type: "text",
        question: "What is a limitation of Meter Data Management Systems (MDMS)?",
        options: [
            "It requires minimal initial investment",
            "Meters can lose accuracy over time and require routine maintenance",
            "It guarantees 100% accuracy in water billing",
            "It does not require any infrastructure changes",
        ],
        correctAnswer: "Meters can lose accuracy over time and require routine maintenance",
    },
    {
        type: "text",
        question: "What can the consumer awareness program provide information about to help consumers appreciate water costs?",
        options: [
            "The cost of maintaining water pipelines",
            "The cost of pumping, treatment, and supply of water and its relation to water tariffs",
            "The cost of land acquisition for water sources",
            "The cost of replacing old meters",
        ],
        correctAnswer: "The cost of pumping, treatment, and supply of water and its relation to water tariffs",
    },
];


// Generate stages for each set
export const engineerSet4Stages: Stage[] = [
    { stageName: "Plan a Water Supply System", questions: getQuestionsForStage1() },
    { stageName: "Design the Water Supply System", questions: getQuestionsForStage2() },
    { stageName: "Building the Infrastructure", questions: getQuestionsForStage3() }, //5
    { stageName: "Water Treatment", questions: getQuestionsForStage4() }, //3
    { stageName: "Smart Water Networks", questions: getQuestionsForStage5() }, //7
    { stageName: "Metering, Billing, and Collection", questions: getQuestionsForStage6() }, //8
    { stageName: "Non-Revenue Water Management", questions: getQuestionsForStage7() }, //4
    { stageName: "Performance Assessment & Operational Excellence", questions: getQuestionsForStage8() } //6
];
