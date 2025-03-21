import { Stage, Question } from "@/types";

// Stage 1 - Plan a Water Supply System
const getQuestionsForStage1 = (): Question[] => [
    {
        type: "image",
        question: "What sustainable practice is depicted in the image for urban water management?",
        options: [
            "Desalination system",
            "Rainwater harvesting",
            "Sewage treatment",
            "Groundwater depletion",
        ],
        correctAnswer: "Rainwater harvesting",
        imageUrl: "./imagequestions/planning.jpg",
    },
    {
        type: "text",
        question: "What is the primary objective of considering population growth projections in the planning phase of a WSS?",
        options: [
            "Ensuring water demand is sustainably met over the system's life cycle",
            "Reducing construction costs",
            "Increasing urbanization",
            "Encouraging groundwater usage",
        ],
        correctAnswer: "Ensuring water demand is sustainably met over the system's life cycle",
    },
    {
        type: "text",
        question: "Which of the following is NOT a typical component of a hydrological study in WSS planning?",
        options: [
            "Measuring recharge rates",
            "Analyzing seasonal variations",
            "Examining social behaviour patterns",
            "Measuring flow rates",
        ],
        correctAnswer: "Examining social behaviour patterns",
    },
    {
        type: "text",
        question: "What is the purpose of conducting water quality analysis during the planning phase?",
        options: [
            "To reduce the cost of treatment plants",
            "To identify contaminants and assess treatment needs",
            "To avoid the use of surface water sources",
            "To increase water usage",
        ],
        correctAnswer: "To identify contaminants and assess treatment needs",
    },
    {
        type: "text",
        question: "Which of the following is a key risk to consider during water resource assessment?",
        options: [
            "Increased birth rates",
            "Seasonal variations in demand",
            "Climate change impacts and over-extraction",
            "Urban expansion planning",
        ],
        correctAnswer: "Climate change impacts and over-extraction",
    },
    {
        type: "text",
        question: "What is a primary consideration when evaluating mitigation strategies during an Environmental Impact Assessment (EIA)?",
        options: [
            "Cost minimization",
            "Stakeholder approval without public input",
            "Ignoring habitat disruption during construction",
            "Minimizing negative environmental impacts such as pollution",
        ],
        correctAnswer: "Minimizing negative environmental impacts such as pollution",
    },
    {
        type: "text",
        question: "What is the main goal of developing scenarios like high growth and low growth in water demand projections?",
        options: [
            "Avoiding population density analysis",
            "Predicting potential water demand under different conditions",
            "Reducing per capita water usage",
            "Promoting desalination",
        ],
        correctAnswer: "Predicting potential water demand under different conditions",
    },
    // {
    //   type: "text",
    //   question: "In the context of a WSS, what does 'source identification' primarily involve?",
    //   options: [
    //     "Measuring flow rates of rivers",
    //     "Identifying all potential water sources",
    //     "Testing aquifer pollution levels",
    //     "Increasing treatment plant capacity",
    //   ],
    //   correctAnswer: "Identifying all potential water sources",
    // },
    {
        type: "text",
        question: "Which of these is a critical factor in ensuring sustainable water quality management?",
        options: [
            "Testing for contaminants like heavy metals and pathogens",
            "Ignoring seasonal variations",
            "Prioritizing groundwater use only",
            "Reducing water treatment requirements",
        ],
        correctAnswer: "Testing for contaminants like heavy metals and pathogens",
    },
    {
        type: "text",
        question: "What is the importance of involving public participation in an Environmental Impact Assessment (EIA)?",
        options: [
            "Reducing the complexity of the assessment",
            "Avoiding legal requirements",
            "Gathering input and addressing community concerns",
            "Preventing NGO involvement",
        ],
        correctAnswer: "Gathering input and addressing community concerns",
    },
    {
        type: "text",
        question: "What is the role of a cost-benefit analysis in planning a sustainable WSS?",
        options: [
            "To assess only the construction costs",
            "To prioritize operational speed",
            "To reduce the need for monitoring plans",
            "To compare economic benefits against environmental and social costs",
        ],
        correctAnswer: "To compare economic benefits against environmental and social costs",
    },
];


// Stage 2 - Design the Water Supply System
const getQuestionsForStage2 = (): Question[] => [
    {
        type: "text",
        question: "What does value engineering primarily aim to achieve in the design of a Water Supply System (WSS)?",
        options: [
            "Minimizing upfront construction costs",
            "Identifying design alternatives that offer similar performance at lower costs",
            "Focusing on long-term operational expenses",
            "Standardizing components",
        ],
        correctAnswer: "Identifying design alternatives that offer similar performance at lower costs",
    },
    {
        type: "text",
        question: "What is the primary goal of Life Cycle Cost Analysis in the design of a WSS?",
        options: [
            "To analyze the total cost of ownership over the entire lifespan of the system",
            "To evaluate upfront construction costs only",
            "To minimize the cost of materials used",
            "To focus only on operational costs",
        ],
        correctAnswer: "To analyze the total cost of ownership over the entire lifespan of the system",
    },
    {
        type: "text",
        question: "Which of the following is a key benefit of standardization in a WSS design?",
        options: [
            "Higher capital investment",
            "Reduced material compatibility",
            "Lower maintenance and operational costs",
            "Decreased system reliability",
        ],
        correctAnswer: "Lower maintenance and operational costs",
    },
    {
        type: "text",
        question: "How does efficient resource allocation contribute to minimizing costs in a WSS project?",
        options: [
            "By speeding up the construction process",
            "By ensuring that resources are used effectively without waste",
            "By limiting the number of personnel involved",
            "By increasing the number of contractors",
        ],
        correctAnswer: "By ensuring that resources are used effectively without waste",
    },
    {
        type: "text",
        question: "What is a key consideration when conducting a Life Cycle Cost Analysis for a WSS project?",
        options: [
            "Only the initial construction cost",
            "Only the cost of raw materials",
            "Only the energy efficiency of the system",
            "Initial construction, maintenance, operational, and disposal costs",
        ],
        correctAnswer: "Initial construction, maintenance, operational, and disposal costs",
    },
    {
        type: "text",
        question: "Which of the following is an advantage of standardized components in a WSS?",
        options: [
            "Increased supply chain complexity",
            "Higher material costs",
            "Simplified maintenance and repairs",
            "Decreased operational efficiency",
        ],
        correctAnswer: "Simplified maintenance and repairs",
    },
    {
        type: "text",
        question: "What is the purpose of risk management in WSS project design?",
        options: [
            "To increase construction costs",
            "To address potential risks and uncertainties in the project",
            "To delay project implementation",
            "To reduce the quality of materials",
        ],
        correctAnswer: "To address potential risks and uncertainties in the project",
    },
    {
        type: "text",
        question: "Which strategy can help minimize energy loss in a WSS?",
        options: [
            "Use of energy-efficient pumps and equipment",
            "Reducing the use of automated control systems",
            "Using high-cost materials",
            "Increasing system capacity",
        ],
        correctAnswer: "Use of energy-efficient pumps and equipment",
    },
    {
        type: "text",
        question: "Which of the following is a benefit of efficient supply chain management in a WSS project?",
        options: [
            "Reduced delivery schedules",
            "Increased construction delays",
            "Higher inventory costs",
            "Cost savings through competitive sourcing and strategic supplier relationships",
        ],
        correctAnswer: "Cost savings through competitive sourcing and strategic supplier relationships",
    },
    {
        type: "text",
        question: "What is the impact of resilience in a WSS design?",
        options: [
            "Increased vulnerability to disasters",
            "Improved system capacity to withstand unexpected disruptions",
            "Lower construction costs",
            "Reduced system reliability",
        ],
        correctAnswer: "Improved system capacity to withstand unexpected disruptions",
    },
];


// Stage 4 - Water Treatment
const getQuestionsForStage4 = (): Question[] => [
    {
        type: "image",
        question: "What is the primary use of NaCl (sodium chloride) in urban water treatment?",
        options: [
            "Water filtration",
            "Disinfection",
            "Regenerating ion exchange resins in water softening",
            "Reducing water pressure",
        ],
        correctAnswer: "Regenerating ion exchange resins in water softening",
        imageUrl: "./imagequestions/watertreatment1.png",
    },
    {
        type: "image",
        question: "What is the primary advantage of using magnetic alginate composite beads in water treatment?",
        options: [
            "Enhance chemical reactions in water",
            "Facilitate easy separation of adsorbed pollutants using a magnet",
            "Increase water flow velocity",
            "Directly neutralize pathogens",
        ],
        correctAnswer: "Facilitate easy separation of adsorbed pollutants using a magnet",
        imageUrl: "./imagequestions/watertreatment2.png",
    },
    {
        type: "text",
        question: "Which of the following parameters is NOT typically assessed during a source water assessment?",
        options: [
            "Physical parameters",
            "Chemical parameters",
            "Biological parameters",
            "Financial parameters",
        ],
        correctAnswer: "Financial parameters",
    },
    //   {
    //     type: "text",
    //     question: "Which physical characteristic of water can indicate pollution or natural variations?",
    //     options: [
    //       "Temperature",
    //       "Nutrient levels",
    //       "Heavy metal content",
    //       "Presence of algae",
    //     ],
    //     correctAnswer: "Temperature",
    //   },
    {
        type: "text",
        question: "What is the primary consequence of elevated nutrient levels in water sources?",
        options: [
            "Increased water temperature",
            "Eutrophication and algal blooms",
            "Enhanced microbial activity",
            "Reduced chemical contamination",
        ],
        correctAnswer: "Eutrophication and algal blooms",
    },
    {
        type: "text",
        question: "Continuous monitoring programs for water quality often use:",
        options: [
            "Sensors and automated systems",
            "Traditional lab analysis methods",
            "Manual water sampling only",
            "None of the above",
        ],
        correctAnswer: "Sensors and automated systems",
    },
    {
        type: "text",
        question: "What is a key benefit of contour bunding in watershed management?",
        options: [
            "Increases industrial runoff",
            "Eliminates biological contaminants",
            "Increases rainfall patterns",
            "Reduces soil erosion and enhances groundwater recharge",
        ],
        correctAnswer: "Reduces soil erosion and enhances groundwater recharge",
    },
    {
        type: "text",
        question: "Which regulatory approach is essential for safeguarding water sources?",
        options: [
            "Land use planning and zoning regulations",
            "Building additional treatment plants",
            "Chlorination at the source",
            "Increasing agricultural runoff",
        ],
        correctAnswer: "Land use planning and zoning regulations",
    },
    //   {
    //     type: "text",
    //     question: "How does over-abstraction of aquifers affect water quality?",
    //     options: [
    //       "Reduces salinity levels",
    //       "Causes eutrophication",
    //       "Leads to intrusion of saline or polluted water",
    //       "Enhances water clarity",
    //     ],
    //     correctAnswer: "Leads to intrusion of saline or polluted water",
    //   },
    {
        type: "text",
        question: "What role does community engagement play in source water protection?",
        options: [
            "Discourages local involvement",
            "Fosters responsibility and resilience against threats",
            "Replaces technical monitoring systems",
            "Increases contamination risks",
        ],
        correctAnswer: "Fosters responsibility and resilience against threats",
    },
    {
        type: "text",
        question: "Climate change can influence water quality at the source by:",
        options: [
            "Changing precipitation patterns and causing extreme events",
            "Increasing chemical treatment costs",
            "Eliminating biological contaminants",
            "Reducing the need for monitoring",
        ],
        correctAnswer: "Changing precipitation patterns and causing extreme events",
    },
    {
        type: "text",
        question: "Why is continuous monitoring of raw water quality important in a treatment plant?",
        options: [
            "To determine the cost of treatment",
            "To ensure the water temperature is within the optimal range",
            "To measure the water flow rate",
            "To assess the characteristics of incoming water and adjust treatment processes",
        ],
        correctAnswer: "To assess the characteristics of incoming water and adjust treatment processes",
    },
];


// Stage 7 - Non-Revenue Water Management
const getQuestionsForStage7 = (): Question[] => [
    {
        type: "text",
        question: "What is the primary cause of physical losses in water distribution systems?",
        options: [
            "Poor quality of underground assets",
            "Data-handling errors",
            "Theft of water",
            "Water used for firefighting",
        ],
        correctAnswer: "Poor quality of underground assets",
    },
    {
        type: "text",
        question: "Which of the following is NOT a component of Non-Revenue Water (NRW)?",
        options: [
            "Physical losses",
            "Commercial losses",
            "Unbilled authorized consumption",
            "Metering and billing errors",
        ],
        correctAnswer: "Metering and billing errors",
    },
    {
      type: "text",
      question: "What is the desired target for NRW in urban cities as per the Ministry of Jal Shakti?",
      options: [
        "Less than 30%",
        "Less than 25%",
        "Less than 20%",
        "Less than 15%",
      ],
      correctAnswer: "Less than 20%",
    },
    {
        type: "text",
        question: "What is one of the key objectives of the NRW reduction strategy in urban cities?",
        options: [
            "Enhance system efficiency and consumer satisfaction",
            "Reduce water production costs",
            "Increase water wastage",
            "Increase the size of distribution pipelines",
        ],
        correctAnswer: "Enhance system efficiency and consumer satisfaction",
    },
    {
        type: "text",
        question: "Which technology is essential for detecting leakage hotspots in the water distribution system?",
        options: [
            "GIS-based asset mapping",
            "Manual inspection",
            "Pressure gauges",
            "Water metering systems",
        ],
        correctAnswer: "GIS-based asset mapping",
    },
    {
        type: "text",
        question: "What does commercial loss in the water distribution system refer to?",
        options: [
            "Leaks in distribution pipes",
            "Unauthorized connections",
            "Water used for operational purposes",
            "Incorrect customer meter readings or data errors",
        ],
        correctAnswer: "Incorrect customer meter readings or data errors",
    },
    {
        type: "text",
        question: "Which of the following is a key challenge in managing water supply systems?",
        options: [
            "Inadequate metering and billing systems",
            "Overproduction of water",
            "Underutilization of distribution systems",
            "Lack of water wastage",
        ],
        correctAnswer: "Inadequate metering and billing systems",
    },
    {
        type: "text",
        question: "Which of the following will directly help in reducing real water losses in the system?",
        options: [
            "Reducing water tariffs",
            "Regular pipeline condition assessment and replacement",
            "Installing new water meters",
            "Increasing the storage capacity of tanks",
        ],
        correctAnswer: "Regular pipeline condition assessment and replacement",
    },
    {
        type: "text",
        question: "Which is a necessary measure for reducing the ingress of pollution in the water supply system?",
        options: [
            "Improving revenue generation",
            "Enhancing consumer surveys",
            "Arresting leakages in faulty pipelines",
            "Increasing the amount of water supplied",
        ],
        correctAnswer: "Arresting leakages in faulty pipelines",
    },
    {
        type: "text",
        question: "What does the acronym CPHEEO stand for in the context of water management?",
        options: [
            "Central Public Health and Environmental Engineering Organization",
            "Central Planning Health and Engineering Environmental Office",
            "Collaborative Planning for Hydraulic Engineering Optimization",
            "Community Planning for Health Engineering and Outreach",
        ],
        correctAnswer: "Central Public Health and Environmental Engineering Organization",
    },
];


// Stage 3 - Building the Infrastructure
const getQuestionsForStage3 = (): Question[] => [
    {
        type: "text",
        question: "What is the primary goal of balancing time, cost, and quality in construction projects?",
        options: [
            "Minimizing project duration and cost while maximizing quality",
            "Maximizing profits",
            "Reducing stakeholder involvement",
            "Focusing only on quality",
        ],
        correctAnswer: "Minimizing project duration and cost while maximizing quality",
    },
    {
        type: "text",
        question: "Which of the following is NOT a key factor in the Time, Cost, and Quality Trade-off (TCQT) problem?",
        options: [
            "Time",
            "Cost",
            "Quality",
            "Stakeholder satisfaction",
        ],
        correctAnswer: "Stakeholder satisfaction",
    },
    {
        type: "text",
        question: "What is a common challenge in urban construction projects?",
        options: [
            "Low complexity",
            "Tight deadlines and high financial investments",
            "Minimal regulatory requirements",
            "Limited stakeholder involvement",
        ],
        correctAnswer: "Tight deadlines and high financial investments",
    },
    {
      type: "text",
      question: "Which technique is used to optimize scheduling and identify bottlenecks in construction projects?",
      options: [
        "Critical Path Method (CPM)",
        "Life Cycle Cost Analysis (LCCA)",
        "Six Sigma",
        "Cost-Benefit Analysis (CBA)",
      ],
      correctAnswer: "Critical Path Method (CPM)",
    },
    {
        type: "text",
        question: "What does PERT stand for in project management?",
        options: [
            "Project Evaluation and Review Technique",
            "Project Efficiency and Risk Technique",
            "Program Efficiency and Risk Technique",
            "Program Evaluation and Review Technique",
        ],
        correctAnswer: "Program Evaluation and Review Technique",
    },
    {
        type: "text",
        question: "Which tool is used for visualizing project timelines and tracking progress?",
        options: [
            "Gantt Charts",
            "EVM",
            "LCCA",
            "TQM",
        ],
        correctAnswer: "Gantt Charts",
    },
    {
        type: "text",
        question: "What is the purpose of Earned Value Management (EVM)?",
        options: [
            "To evaluate the environmental impact of a project",
            "To minimize waste in construction processes",
            "To ensure compliance with ISO 9001 standards",
            "To integrate scope, schedule, and cost for performance assessment",
        ],
        correctAnswer: "To integrate scope, schedule, and cost for performance assessment",
    },
    {
        type: "text",
        question: "Which method evaluates the total cost of ownership, including operation and maintenance costs?",
        options: [
            "Life Cycle Cost Analysis (LCCA)",
            "Cost-Benefit Analysis (CBA)",
            "Earned Value Management (EVM)",
            "Six Sigma",
        ],
        correctAnswer: "Life Cycle Cost Analysis (LCCA)",
    },
    {
        type: "text",
        question: "What is the primary focus of Total Quality Management (TQM)?",
        options: [
            "Reducing project timelines",
            "Continuous improvement and customer satisfaction",
            "Minimizing financial costs",
            "Increasing stakeholder conflicts",
        ],
        correctAnswer: "Continuous improvement and customer satisfaction",
    },
    {
      type: "text",
      question: "Which methodology uses DMAIC (Define, Measure, Analyze, Improve, Control) to reduce defects?",
      options: [
        "TQM",
        "ISO 9001",        
        "Six Sigma",
        "Lean Construction",
      ],
      correctAnswer: "Six Sigma",
    },
];


// Stage 8 - Performance Assessment & Operational Excellence
const getQuestionsForStage8 = (): Question[] => [
    {
        type: "image",
        question: "Which of the following processes contributes the most to the carbon footprint in urban water management systems?",
        options: [
            "Wastewater treatment",
            "Water distribution",
            "Rainwater harvesting",
            "Manual water meter readings"
        ],
        correctAnswer: "Wastewater treatment",
        imageUrl: "./imagequestions/performanceassessment.png",
    },
    {
        type: "text",
        question: "What does operational performance in a water supply system primarily focus on?",
        options: [
            "Aesthetic design of pipelines",
            "Efficient delivery of safe, adequate, and reliable water",
            "Reduction of consumer complaints",
            "Increasing water tariffs",
        ],
        correctAnswer: "Efficient delivery of safe, adequate, and reliable water",
    },
    // {
    //     type: "text",
    //     question: "Which of the following is a key metric for assessing operational performance in water supply systems?",
    //     options: [
    //         "Frequency of water coloring",
    //         "Non-Revenue Water (NRW) percentage",
    //         "Number of employees in water utilities",
    //         "Pipe diameter size",
    //     ],
    //     correctAnswer: "Non-Revenue Water (NRW) percentage",
    // },
    {
        type: "text",
        question: "What is the importance of continuous monitoring in water supply systems?",
        options: [
            "To reduce regulatory compliance",
            "To delay upgrades",
            "To increase water tariffs",
            "To identify and address inefficiencies",
        ],
        correctAnswer: "To identify and address inefficiencies",
    },
    {
        type: "text",
        question: "Which major component of a water supply system ensures storage and distribution to consumers?",
        options: [
            "Treatment plant",
            "Conveying pipes",
            "Consumer supply services",
            "Service reservoirs",
        ],
        correctAnswer: "Service reservoirs",
    },
    {
        type: "text",
        question: "Why is pressure management critical in a water supply system?",
        options: [
            "To maintain adequate pressure for consumer needs",
            "To prevent pipeline discoloration",
            "To avoid pipe material corrosion",
            "To reduce water taste complaints",
        ],
        correctAnswer: "To maintain adequate pressure for consumer needs",
    },
    {
        type: "text",
        question: "What is the primary purpose of maintaining water quality standards?",
        options: [
            "To reduce energy costs",
            "To ensure consumer safety and regulatory compliance",
            "To maximize water loss",
            "To prevent pipeline wear and tear",
        ],
        correctAnswer: "To ensure consumer safety and regulatory compliance",
    },
    {
        type: "text",
        question: "Which operational efficiency metric focuses on optimizing energy consumption?",
        options: [
            "Hydraulic modeling",
            "Gantt chart analysis",
            "Energy use in pumping and treatment",
            "Stakeholder satisfaction",
        ],
        correctAnswer: "Energy use in pumping and treatment",
    },
    {
        type: "text",
        question: "What aspect of customer service reflects the responsiveness of water utilities?",
        options: [
            "Frequency of billing",
            "Water reservoir size",
            "Pipe installation speed",
            "Response time to complaints",
        ],
        correctAnswer: "Response time to complaints",
    },
    {
        type: "text",
        question: "How can efficient maintenance practices improve infrastructure efficiency?",
        options: [
            "By reducing leaks and deterioration",
            "By increasing pipeline bursts",
            "By delaying upgrades",
            "By adding unnecessary valves",
        ],
        correctAnswer: "By reducing leaks and deterioration",
    },
    {
        type: "text",
        question: "What is the role of automation in operational performance?",
        options: [
            "To replace regulatory bodies",
            "To monitor and improve system efficiency",
            "To increase water wastage",
            "To eliminate maintenance needs",
        ],
        correctAnswer: "To monitor and improve system efficiency",
    },
];


// Stage 5 - Smart Water Networks
const getQuestionsForStage5 = (): Question[] => [
    {
        type: "image",
        question: "Which type of flow meter is most suitable for measuring flow in a closed pipeline system?",
        options: [
            "Open Channel Flow Meters",
            "Rain Gauges",
            "Pipe Flow Meters",
            "Level Transmitters",
        ],
        correctAnswer: "Pipe Flow Meters",
        imageUrl: "./imagequestions/smartwaternetwork1.jpg",
    },
    {
        type: "image",
        question: "Which infrastructure component depicted in the image is critical for energy recovery in urban water systems?",
        options: [
            "Water treatment plant with power infrastructure",
            "Residential buildings",
            "Natural water bodies",
            "Office buildings",
        ],
        correctAnswer: "Water treatment plant with power infrastructure",
        imageUrl: "./imagequestions/smartwaternetwork2.jpg",
    },
    {
        type: "text",
        question: "What is the main objective of a Smart Water Network (SWAN)?",
        options: [
            "To monitor customer complaints",
            "To reduce the operational costs of municipal utilities",
            "To improve water conservation and reduce system losses",
            "To increase water prices",
        ],
        correctAnswer: "To improve water conservation and reduce system losses",
    },
    {
        type: "text",
        question: "Which layer of the Smart Water Network (SWAN) involves technologies responsible for storage and transmission of information?",
        options: [
            "Collection and Communication Layer",
            "Sensing and Control Layer",
            "Data Management and Display Layer",
            "Physical Assets Layer",
        ],
        correctAnswer: "Collection and Communication Layer",
    },
    {
        type: "text",
        question: "Which of the following is a key feature of the 'Sensing and Control' layer in SWAN?",
        options: [
            "Data aggregation and reporting",
            "Remote-controlled actuators like pressure-reducing valves (PRVs)",
            "Monitoring water quality and pressure",
            "Communication via cellular networks",
        ],
        correctAnswer: "Monitoring water quality and pressure",
    },
    {
        type: "text",
        question: "What is the primary goal of reducing Non-Revenue Water (NRW) in a Smart Water Network?",
        options: [
            "To increase water wastage",
            "To reduce real and apparent water losses",
            "To reduce water tariffs",
            "To enhance customer complaints",
        ],
        correctAnswer: "To reduce real and apparent water losses",
    },
    // {
    //     type: "text",
    //     question: "What technology is commonly used in the 'Collection and Communication' layer of SWAN for data transmission?",
    //     options: [
    //         "SCADA systems",
    //         "Cellular, radio, and Wi-Fi networks",
    //         "Pressure-reducing valves",
    //         "Geographic Information System (GIS)",
    //     ],
    //     correctAnswer: "Cellular, radio, and Wi-Fi networks",
    // },
    // {
    //     type: "text",
    //     question: "In a Smart Water Network, which system integrates data and helps municipal engineers with real-time network management?",
    //     options: [
    //         "SCADA",
    //         "GIS",
    //         "Consumer billing systems",
    //         "Data Fusion and Analysis systems",
    //     ],
    //     correctAnswer: "SCADA",
    // },
    {
        type: "text",
        question: "Which layer in a Smart Water Network handles data fusion and real-time analysis for decision-making?",
        options: [
            "Collection and Communication Layer",
            "Data Management and Display Layer",
            "Sensing and Control Layer",
            "Data Fusion and Analysis Layer",
        ],
        correctAnswer: "Data Fusion and Analysis Layer",
    },
    {
        type: "text",
        question: "What is the main role of pressure-reducing valves (PRVs) in a Smart Water Network?",
        options: [
            "To monitor water quality",
            "To reduce energy consumption",
            "To control and maintain pressure levels in the distribution system",
            "To store water for future use",
        ],
        correctAnswer: "To control and maintain pressure levels in the distribution system",
    },
    {
        type: "text",
        question: "Which component is NOT typically covered in conventional water supply contracts but is essential for performance assessment in a Smart Water Network?",
        options: [
            "Pressure management devices",
            "Water treatment plants",
            "Distribution mains",
            "Raw water intake",
        ],
        correctAnswer: "Pressure management devices",
    },
    {
        type: "text",
        question: "What is one of the key benefits of implementing machine learning and AI in a Smart Water Network?",
        options: [
            "Increased manual labour requirements",
            "Enhanced predictive maintenance and leak detection",
            "Reduced water usage",
            "Reduced customer engagement",
        ],
        correctAnswer: "Enhanced predictive maintenance and leak detection",
    },
];


// Stage 6 - Metering, Billing, and Collection
const getQuestionsForStage6 = (): Question[] => [
    {
        type: "text",
        question: "What is the primary benefit of implementing smart water meters in urban water systems?",
        options: [
            "Increased water usage",
            "Improved billing accuracy and leak detection",
            "Reduced consumer awareness",
            "Higher water prices",
        ],
        correctAnswer: "Improved billing accuracy and leak detection",
    },
    {
        type: "text",
        question: "What is a significant challenge in implementing smart water metering in rural or remote locations?",
        options: [
            "Lack of infrastructure to support smart metering",
            "High water demand",
            "Easy access to communication signals",
            "Overly qualified staff",
        ],
        correctAnswer: "Lack of infrastructure to support smart metering",
    },
    {
        type: "text",
        question: "Which of the following technologies is commonly used in smart water meters for accurate data collection?",
        options: [
            "Ultrasonic and Electromagnetic meters",
            "Mechanical rotary meters",
            "Manual reading systems",
            "Analog meters",
        ],
        correctAnswer: "Ultrasonic and Electromagnetic meters",
    },
    {
        type: "text",
        question: "What is the impact of poor water meter maintenance on the water utility?",
        options: [
            "Increased system efficiency",
            "Reduction in energy consumption",
            "Improved service delivery",
            "Loss of water revenue due to inaccurate readings",
        ],
        correctAnswer: "Loss of water revenue due to inaccurate readings",
    },
    {
        type: "text",
        question: "Which of the following is a primary concern in billing and collection systems for water utilities?",
        options: [
            "Accurate measurement and timely billing",
            "Excessive water supply",
            "High rate of non-revenue water",
            "Redundant pipe infrastructure",
        ],
        correctAnswer: "Accurate measurement and timely billing",
    },
    {
        type: "text",
        question: "In the context of water metering, what does AMR stand for?",
        options: [
            "Automated Management of Resources",
            "Active Meter Reading",
            "Automated Meter Reading",
            "Advanced Meter Regulation",
        ],
        correctAnswer: "Automated Meter Reading",
    },
    {
        type: "text",
        question: "What type of meter would be most suitable for detecting small changes in water flow in a modern smart water metering system?",
        options: [
            "Multi-jet non-AMR meter",
            "Mechanical dial meter",
            "Step-test meter",
            "Ultrasonic or electromagnetic meter",
        ],
        correctAnswer: "Ultrasonic or electromagnetic meter",
    },
    {
        type: "text",
        question: "What is a significant economic benefit of accurate water metering and billing systems for water utilities?",
        options: [
            "Higher water production costs",
            "Reduced operational costs through leak detection",
            "Increased water wastage",
            "Lower capital expenditure",
        ],
        correctAnswer: "Reduced operational costs through leak detection",
    },
    {
      type: "text",
      question: "Which factor can negatively impact the success of smart water metering systems?",
      options: [
        "Lack of interoperable technology",
        "Availability of skilled labor",
        "Reduced consumer engagement",
        "High regulatory support",
      ],
      correctAnswer: "Lack of interoperable technology",
    },
    {
        type: "text",
        question: "How does the introduction of smart water meters help in water conservation?",
        options: [
            "By increasing water prices to reduce usage",
            "By directly reducing the number of water sources",
            "By providing real-time data on consumption patterns",
            "By increasing water supply to all areas",
        ],
        correctAnswer: "By providing real-time data on consumption patterns",
    },
];


// Generate stages for each set
export const engineerSet1Stages: Stage[] = [
    { stageName: "Plan a Water Supply System", questions: getQuestionsForStage1() },
    { stageName: "Design the Water Supply System", questions: getQuestionsForStage2() },
    { stageName: "Building the Infrastructure", questions: getQuestionsForStage3() }, //5
    { stageName: "Water Treatment", questions: getQuestionsForStage4() }, //3
    { stageName: "Smart Water Networks", questions: getQuestionsForStage5() }, //7
    { stageName: "Metering, Billing, and Collection", questions: getQuestionsForStage6() }, //8
    { stageName: "Non-Revenue Water Management", questions: getQuestionsForStage7() }, //4
    { stageName: "Performance Assessment & Operational Excellence", questions: getQuestionsForStage8() } //6
];
