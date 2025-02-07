import { Question, QuizSet, Stage } from "@/types";

// Stage 1 - Plan A Water Supply System
// const getQuestionsForStage1 = (): Question[] => [
//   {
//     type: "text",
//     question: "What is the primary objective of considering population growth projections in the planning phase of a WSS?",
//     options: [
//       "Reducing construction costs",
//       "Ensuring water demand is sustainably met over the system's life cycle",
//       "Increasing urbanization",
//       "Encouraging groundwater usage",
//     ],
//     correctAnswer: "Ensuring water demand is sustainably met over the system's life cycle",
//   },
//   {
//     type: "text",
//     question: "Which of the following is NOT a typical component of a hydrological study in WSS planning?",
//     options: [
//       "Measuring recharge rates",
//       "Analyzing seasonal variations",
//       "Examining social behaviour patterns",
//       "Measuring flow rates",
//     ],
//     correctAnswer: "Examining social behaviour patterns",
//   },
//   {
//     type: "text",
//     question: "What is the purpose of conducting water quality analysis during the planning phase?",
//     options: [
//       "To reduce the cost of treatment plants",
//       "To identify contaminants and assess treatment needs",
//       "To avoid the use of surface water sources",
//       "To increase water usage",
//     ],
//     correctAnswer: "To identify contaminants and assess treatment needs",
//   },
//   {
//     type: "text",
//     question: "Which of the following is a key risk to consider during water resource assessment?",
//     options: [
//       "Increased birth rates",
//       "Seasonal variations in demand",
//       "Climate change impacts and over-extraction",
//       "Urban expansion planning",
//     ],
//     correctAnswer: "Climate change impacts and over-extraction",
//   },
//   {
//     type: "text",
//     question: "What is a primary consideration when evaluating mitigation strategies during an Environmental Impact Assessment (EIA)?",
//     options: [
//       "Cost minimization",
//       "Stakeholder approval without public input",
//       "Minimizing negative environmental impacts such as pollution",
//       "Ignoring habitat disruption during construction",
//     ],
//     correctAnswer: "Minimizing negative environmental impacts such as pollution",
//   },
//   {
//     type: "text",
//     question: "What is the main goal of developing scenarios like high growth and low growth in water demand projections?",
//     options: [
//       "Avoiding population density analysis",
//       "Predicting potential water demand under different conditions",
//       "Reducing per capita water usage",
//       "Promoting desalination",
//     ],
//     correctAnswer: "Predicting potential water demand under different conditions",
//   },
//   {
//     type: "text",
//     question: "In the context of a WSS, what does 'source identification' primarily involve?",
//     options: [
//       "Measuring flow rates of rivers",
//       "Identifying all potential water sources",
//       "Testing aquifer pollution levels",
//       "Increasing treatment plant capacity",
//     ],
//     correctAnswer: "Identifying all potential water sources",
//   },
//   {
//     type: "text",
//     question: "Which of these is a critical factor in ensuring sustainable water quality management?",
//     options: [
//       "Ignoring seasonal variations",
//       "Testing for contaminants like heavy metals and pathogens",
//       "Prioritizing groundwater use only",
//       "Reducing water treatment requirements",
//     ],
//     correctAnswer: "Testing for contaminants like heavy metals and pathogens",
//   },
//   {
//     type: "text",
//     question: "What is the importance of involving public participation in an Environmental Impact Assessment (EIA)?",
//     options: [
//       "Reducing the complexity of the assessment",
//       "Avoiding legal requirements",
//       "Gathering input and addressing community concerns",
//       "Preventing NGO involvement",
//     ],
//     correctAnswer: "Gathering input and addressing community concerns",
//   },
//   {
//     type: "text",
//     question: "What is the role of a cost-benefit analysis in planning a sustainable WSS?",
//     options: [
//       "To assess only the construction costs",
//       "To compare economic benefits against environmental and social costs",
//       "To prioritize operational speed",
//       "To reduce the need for monitoring plans",
//     ],
//     correctAnswer: "To compare economic benefits against environmental and social costs",
//   },
// ];


// // Satge 2 - Design the Water Supply System
// const getQuestionsForStage2 = (): Question[] => [
//   {
//     type: "text",
//     question: "What does value engineering primarily aim to achieve in the design of a Water Supply System (WSS)?",
//     options: [
//       "Minimizing upfront construction costs",
//       "Identifying design alternatives that offer similar performance at lower costs",
//       "Focusing on long-term operational expenses",
//       "Standardizing components",
//     ],
//     correctAnswer: "Identifying design alternatives that offer similar performance at lower costs",
//   },
//   {
//     type: "text",
//     question: "What is the primary goal of Life Cycle Cost Analysis in the design of a WSS?",
//     options: [
//       "To evaluate upfront construction costs only",
//       "To analyze the total cost of ownership over the entire lifespan of the system",
//       "To minimize the cost of materials used",
//       "To focus only on operational costs",
//     ],
//     correctAnswer: "To analyze the total cost of ownership over the entire lifespan of the system",
//   },
//   {
//     type: "text",
//     question: "Which of the following is a key benefit of standardization in a WSS design?",
//     options: [
//       "Higher capital investment",
//       "Reduced material compatibility",
//       "Lower maintenance and operational costs",
//       "Decreased system reliability",
//     ],
//     correctAnswer: "Lower maintenance and operational costs",
//   },
//   {
//     type: "text",
//     question: "How does efficient resource allocation contribute to minimizing costs in a WSS project?",
//     options: [
//       "By speeding up the construction process",
//       "By ensuring that resources are used effectively without waste",
//       "By limiting the number of personnel involved",
//       "By increasing the number of contractors",
//     ],
//     correctAnswer: "By ensuring that resources are used effectively without waste",
//   },
//   {
//     type: "text",
//     question: "What is a key consideration when conducting a Life Cycle Cost Analysis for a WSS project?",
//     options: [
//       "Only the initial construction cost",
//       "Only the cost of raw materials",
//       "Initial construction, maintenance, operational, and disposal costs",
//       "Only the energy efficiency of the system",
//     ],
//     correctAnswer: "Initial construction, maintenance, operational, and disposal costs",
//   },
//   {
//     type: "text",
//     question: "Which of the following is an advantage of standardized components in a WSS?",
//     options: [
//       "Increased supply chain complexity",
//       "Higher material costs",
//       "Simplified maintenance and repairs",
//       "Decreased operational efficiency",
//     ],
//     correctAnswer: "Simplified maintenance and repairs",
//   },
//   {
//     type: "text",
//     question: "What is the purpose of risk management in WSS project design?",
//     options: [
//       "To increase construction costs",
//       "To address potential risks and uncertainties in the project",
//       "To delay project implementation",
//       "To reduce the quality of materials",
//     ],
//     correctAnswer: "To address potential risks and uncertainties in the project",
//   },
//   {
//     type: "text",
//     question: "Which strategy can help minimize energy loss in a WSS?",
//     options: [
//       "Use of energy-efficient pumps and equipment",
//       "Reducing the use of automated control systems",
//       "Using high-cost materials",
//       "Increasing system capacity",
//     ],
//     correctAnswer: "Use of energy-efficient pumps and equipment",
//   },
//   {
//     type: "text",
//     question: "Which of the following is a benefit of efficient supply chain management in a WSS project?",
//     options: [
//       "Reduced delivery schedules",
//       "Increased construction delays",
//       "Cost savings through competitive sourcing and strategic supplier relationships",
//       "Higher inventory costs",
//     ],
//     correctAnswer: "Cost savings through competitive sourcing and strategic supplier relationships",
//   },
//   {
//     type: "text",
//     question: "What is the impact of resilience in a WSS design?",
//     options: [
//       "Increased vulnerability to disasters",
//       "Improved system capacity to withstand unexpected disruptions",
//       "Lower construction costs",
//       "Reduced system reliability",
//     ],
//     correctAnswer: "Improved system capacity to withstand unexpected disruptions",
//   },
// ];


// // Stage 3 - Building the Infrastructure
// const getQuestionsForStage3 = (): Question[] => [
//   {
//     type: "text",
//     question: "Which of the following parameters is NOT typically assessed during a source water assessment?",
//     options: [
//       "Physical parameters",
//       "Chemical parameters",
//       "Biological parameters",
//       "Financial parameters",
//     ],
//     correctAnswer: "Financial parameters",
//   },
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
//   {
//     type: "text",
//     question: "What is the primary consequence of elevated nutrient levels in water sources?",
//     options: [
//       "Increased water temperature",
//       "Eutrophication and algal blooms",
//       "Enhanced microbial activity",
//       "Reduced chemical contamination",
//     ],
//     correctAnswer: "Eutrophication and algal blooms",
//   },
//   {
//     type: "text",
//     question: "Continuous monitoring programs for water quality often use:",
//     options: [
//       "Traditional lab analysis methods",
//       "Sensors and automated systems",
//       "Manual water sampling only",
//       "None of the above",
//     ],
//     correctAnswer: "Sensors and automated systems",
//   },
//   {
//     type: "text",
//     question: "What is a key benefit of contour bunding in watershed management?",
//     options: [
//       "Increases industrial runoff",
//       "Reduces soil erosion and enhances groundwater recharge",
//       "Eliminates biological contaminants",
//       "Increases rainfall patterns",
//     ],
//     correctAnswer: "Reduces soil erosion and enhances groundwater recharge",
//   },
//   {
//     type: "text",
//     question: "Which regulatory approach is essential for safeguarding water sources?",
//     options: [
//       "Building additional treatment plants",
//       "Land use planning and zoning regulations",
//       "Chlorination at the source",
//       "Increasing agricultural runoff",
//     ],
//     correctAnswer: "Land use planning and zoning regulations",
//   },
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
//   {
//     type: "text",
//     question: "What role does community engagement play in source water protection?",
//     options: [
//       "Discourages local involvement",
//       "Fosters responsibility and resilience against threats",
//       "Replaces technical monitoring systems",
//       "Increases contamination risks",
//     ],
//     correctAnswer: "Fosters responsibility and resilience against threats",
//   },
//   {
//     type: "text",
//     question: "Climate change can influence water quality at the source by:",
//     options: [
//       "Increasing chemical treatment costs",
//       "Changing precipitation patterns and causing extreme events",
//       "Eliminating biological contaminants",
//       "Reducing the need for monitoring",
//     ],
//     correctAnswer: "Changing precipitation patterns and causing extreme events",
//   },
//   {
//     type: "text",
//     question: "Why is continuous monitoring of raw water quality important in a treatment plant?",
//     options: [
//       "To determine the cost of treatment",
//       "To assess the characteristics of incoming water and adjust treatment processes",
//       "To ensure the water temperature is within the optimal range",
//       "To measure the water flow rate",
//     ],
//     correctAnswer: "To assess the characteristics of incoming water and adjust treatment processes",
//   },
// ];

// // Stage 4 - Water Treatment
// const getQuestionsForStage4 = (): Question[] => [
//   {
//     type: "text",
//     question: "What is the primary cause of physical losses in water distribution systems?",
//     options: [
//       "Poor quality of underground assets",
//       "Data-handling errors",
//       "Theft of water",
//       "Water used for firefighting",
//     ],
//     correctAnswer: "Poor quality of underground assets",
//   },
//   {
//     type: "text",
//     question: "Which of the following is NOT a component of Non-Revenue Water (NRW)?",
//     options: [
//       "Physical losses",
//       "Commercial losses",
//       "Unbilled authorized consumption",
//       "Metering and billing errors",
//     ],
//     correctAnswer: "Metering and billing errors",
//   },
//   {
//     type: "text",
//     question: "What is the desired target for NRW in urban cities as per the Ministry of Jal Shakti?",
//     options: [
//       "Less than 30%",
//       "Less than 25%",
//       "Less than 20%",
//       "Less than 15%",
//     ],
//     correctAnswer: "Less than 20%",
//   },
//   {
//     type: "text",
//     question: "What is one of the key objectives of the NRW reduction strategy in urban cities?",
//     options: [
//       "Reduce water production costs",
//       "Increase water wastage",
//       "Enhance system efficiency and consumer satisfaction",
//       "Increase the size of distribution pipelines",
//     ],
//     correctAnswer: "Enhance system efficiency and consumer satisfaction",
//   },
//   {
//     type: "text",
//     question: "Which technology is essential for detecting leakage hotspots in the water distribution system?",
//     options: [
//       "GIS-based asset mapping",
//       "Manual inspection",
//       "Pressure gauges",
//       "Water metering systems",
//     ],
//     correctAnswer: "GIS-based asset mapping",
//   },
//   {
//     type: "text",
//     question: "What does commercial loss in the water distribution system refer to?",
//     options: [
//       "Leaks in distribution pipes",
//       "Incorrect customer meter readings or data errors",
//       "Unauthorized connections",
//       "Water used for operational purposes",
//     ],
//     correctAnswer: "Incorrect customer meter readings or data errors",
//   },
//   {
//     type: "text",
//     question: "Which of the following is a key challenge in managing water supply systems?",
//     options: [
//       "Inadequate metering and billing systems",
//       "Overproduction of water",
//       "Underutilization of distribution systems",
//       "Lack of water wastage",
//     ],
//     correctAnswer: "Inadequate metering and billing systems",
//   },
//   {
//     type: "text",
//     question: "Which of the following will directly help in reducing real water losses in the system?",
//     options: [
//       "Reducing water tariffs",
//       "Regular pipeline condition assessment and replacement",
//       "Installing new water meters",
//       "Increasing the storage capacity of tanks",
//     ],
//     correctAnswer: "Regular pipeline condition assessment and replacement",
//   },
//   {
//     type: "text",
//     question: "Which is a necessary measure for reducing the ingress of pollution in the water supply system?",
//     options: [
//       "Improving revenue generation",
//       "Arresting leakages in faulty pipelines",
//       "Enhancing consumer surveys",
//       "Increasing the amount of water supplied",
//     ],
//     correctAnswer: "Arresting leakages in faulty pipelines",
//   },
//   {
//     type: "text",
//     question: "What does the acronym CPHEEO stand for in the context of water management?",
//     options: [
//       "Central Public Health and Engineering Organization",
//       "Central Planning and Engineering Environmental Office",
//       "Collaborative Planning for Hydraulic Engineering Optimization",
//       "Community Planning for Health Engineering and Outreach",
//     ],
//     correctAnswer: "Central Public Health and Engineering Organization",
//   },
// ];


// // Stage 5 - Smart Water Networks
// const getQuestionsForStage5 = (): Question[] => [
//   {
//     type: "text",
//     question: "What is the primary goal of balancing time, cost, and quality in construction projects?",
//     options: [
//       "Maximizing profits",
//       "Minimizing project duration and cost while maximizing quality",
//       "Reducing stakeholder involvement",
//       "Focusing only on quality",
//     ],
//     correctAnswer: "Minimizing project duration and cost while maximizing quality",
//   },
//   {
//     type: "text",
//     question: "Which of the following is NOT a key factor in the Time, Cost, and Quality Trade-off (TCQT) problem?",
//     options: [
//       "Time",
//       "Cost",
//       "Quality",
//       "Stakeholder satisfaction",
//     ],
//     correctAnswer: "Stakeholder satisfaction",
//   },
//   {
//     type: "text",
//     question: "What is a common challenge in urban construction projects?",
//     options: [
//       "Low complexity",
//       "Tight deadlines and high financial investments",
//       "Minimal regulatory requirements",
//       "Limited stakeholder involvement",
//     ],
//     correctAnswer: "Tight deadlines and high financial investments",
//   },
//   {
//     type: "text",
//     question: "Which technique is used to optimize scheduling and identify bottlenecks in construction projects?",
//     options: [
//       "Life Cycle Cost Analysis (LCCA)",
//       "Critical Path Method (CPM)",
//       "Six Sigma",
//       "Cost-Benefit Analysis (CBA)",
//     ],
//     correctAnswer: "Critical Path Method (CPM)",
//   },
//   {
//     type: "text",
//     question: "What does PERT stand for in project management?",
//     options: [
//       "Project Evaluation and Review Technique",
//       "Program Evaluation and Review Technique",
//       "Project Efficiency and Risk Technique",
//       "Program Efficiency and Risk Technique",
//     ],
//     correctAnswer: "Program Evaluation and Review Technique",
//   },
//   {
//     type: "text",
//     question: "Which tool is used for visualizing project timelines and tracking progress?",
//     options: [
//       "Gantt Charts",
//       "EVM",
//       "LCCA",
//       "TQM",
//     ],
//     correctAnswer: "Gantt Charts",
//   },
//   {
//     type: "text",
//     question: "What is the purpose of Earned Value Management (EVM)?",
//     options: [
//       "To evaluate the environmental impact of a project",
//       "To integrate scope, schedule, and cost for performance assessment",
//       "To minimize waste in construction processes",
//       "To ensure compliance with ISO 9001 standards",
//     ],
//     correctAnswer: "To integrate scope, schedule, and cost for performance assessment",
//   },
//   {
//     type: "text",
//     question: "Which method evaluates the total cost of ownership, including operation and maintenance costs?",
//     options: [
//       "Cost-Benefit Analysis (CBA)",
//       "Life Cycle Cost Analysis (LCCA)",
//       "Earned Value Management (EVM)",
//       "Six Sigma",
//     ],
//     correctAnswer: "Life Cycle Cost Analysis (LCCA)",
//   },
//   {
//     type: "text",
//     question: "What is the primary focus of Total Quality Management (TQM)?",
//     options: [
//       "Reducing project timelines",
//       "Continuous improvement and customer satisfaction",
//       "Minimizing financial costs",
//       "Increasing stakeholder conflicts",
//     ],
//     correctAnswer: "Continuous improvement and customer satisfaction",
//   },
//   {
//     type: "text",
//     question: "Which methodology uses DMAIC (Define, Measure, Analyze, Improve, Control) to reduce defects?",
//     options: [
//       "TQM",
//       "Six Sigma",
//       "ISO 9001",
//       "Lean Construction",
//     ],
//     correctAnswer: "Six Sigma",
//   },
// ];


// // Stage 6 - Metering, Billing, and Collection
// const getQuestionsForStage6 = (): Question[] => [
//   {
//     type: "text",
//     question: "What does operational performance in a water supply system primarily focus on?",
//     options: [
//       "Aesthetic design of pipelines",
//       "Efficient delivery of safe, adequate, and reliable water",
//       "Reduction of consumer complaints",
//       "Increasing water tariffs",
//     ],
//     correctAnswer: "Efficient delivery of safe, adequate, and reliable water",
//   },
//   {
//     type: "text",
//     question: "Which of the following is a key metric for assessing operational performance in water supply systems?",
//     options: [
//       "Frequency of water coloring",
//       "Non-Revenue Water (NRW) percentage",
//       "Number of employees in water utilities",
//       "Pipe diameter size",
//     ],
//     correctAnswer: "Non-Revenue Water (NRW) percentage",
//   },
//   {
//     type: "text",
//     question: "What is the importance of continuous monitoring in water supply systems?",
//     options: [
//       "To reduce regulatory compliance",
//       "To identify and address inefficiencies",
//       "To delay upgrades",
//       "To increase water tariffs",
//     ],
//     correctAnswer: "To identify and address inefficiencies",
//   },
//   {
//     type: "text",
//     question: "Which major component of a water supply system ensures storage and distribution to consumers?",
//     options: [
//       "Treatment plant",
//       "Service reservoirs",
//       "Conveying pipes",
//       "Consumer supply services",
//     ],
//     correctAnswer: "Service reservoirs",
//   },
//   {
//     type: "text",
//     question: "Why is pressure management critical in a water supply system?",
//     options: [
//       "To prevent pipeline discoloration",
//       "To maintain adequate pressure for consumer needs",
//       "To avoid pipe material corrosion",
//       "To reduce water taste complaints",
//     ],
//     correctAnswer: "To maintain adequate pressure for consumer needs",
//   },
//   {
//     type: "text",
//     question: "What is the primary purpose of maintaining water quality standards?",
//     options: [
//       "To reduce energy costs",
//       "To ensure consumer safety and regulatory compliance",
//       "To maximize water loss",
//       "To prevent pipeline wear and tear",
//     ],
//     correctAnswer: "To ensure consumer safety and regulatory compliance",
//   },
//   {
//     type: "text",
//     question: "Which operational efficiency metric focuses on optimizing energy consumption?",
//     options: [
//       "Hydraulic modeling",
//       "Energy use in pumping and treatment",
//       "Gantt chart analysis",
//       "Stakeholder satisfaction",
//     ],
//     correctAnswer: "Energy use in pumping and treatment",
//   },
//   {
//     type: "text",
//     question: "What aspect of customer service reflects the responsiveness of water utilities?",
//     options: [
//       "Frequency of billing",
//       "Response time to complaints",
//       "Water reservoir size",
//       "Pipe installation speed",
//     ],
//     correctAnswer: "Response time to complaints",
//   },
//   {
//     type: "text",
//     question: "How can efficient maintenance practices improve infrastructure efficiency?",
//     options: [
//       "By increasing pipeline bursts",
//       "By reducing leaks and deterioration",
//       "By delaying upgrades",
//       "By adding unnecessary valves",
//     ],
//     correctAnswer: "By reducing leaks and deterioration",
//   },
//   {
//     type: "text",
//     question: "What is the role of automation in operational performance?",
//     options: [
//       "To replace regulatory bodies",
//       "To monitor and improve system efficiency",
//       "To increase water wastage",
//       "To eliminate maintenance needs",
//     ],
//     correctAnswer: "To monitor and improve system efficiency",
//   },
// ];


// // Stage 7 - Non-Revenue Water Management
// const getQuestionsForStage7 = (): Question[] => [
//   {
//     type: "text",
//     question: "What is the main objective of a Smart Water Network (SWAN)?",
//     options: [
//       "To monitor customer complaints",
//       "To reduce the operational costs of municipal utilities",
//       "To improve water conservation and reduce system losses",
//       "To increase water prices",
//     ],
//     correctAnswer: "To improve water conservation and reduce system losses",
//   },
//   {
//     type: "text",
//     question: "Which layer of the Smart Water Network (SWAN) involves technologies responsible for storage and transmission of information?",
//     options: [
//       "Sensing and Control Layer",
//       "Data Management and Display Layer",
//       "Collection and Communication Layer",
//       "Physical Assets Layer",
//     ],
//     correctAnswer: "Collection and Communication Layer",
//   },
//   {
//     type: "text",
//     question: "Which of the following is a key feature of the 'Sensing and Control' layer in SWAN?",
//     options: [
//       "Monitoring water quality and pressure",
//       "Data aggregation and reporting",
//       "Remote-controlled actuators like pressure-reducing valves (PRVs)",
//       "Communication via cellular networks",
//     ],
//     correctAnswer: "Monitoring water quality and pressure",
//   },
//   {
//     type: "text",
//     question: "What is the primary goal of reducing Non-Revenue Water (NRW) in a Smart Water Network?",
//     options: [
//       "To increase water wastage",
//       "To reduce real and apparent water losses",
//       "To reduce water tariffs",
//       "To enhance customer complaints",
//     ],
//     correctAnswer: "To reduce real and apparent water losses",
//   },
//   {
//     type: "text",
//     question: "What technology is commonly used in the 'Collection and Communication' layer of SWAN for data transmission?",
//     options: [
//       "SCADA systems",
//       "Cellular, radio, and Wi-Fi networks",
//       "Pressure-reducing valves",
//       "Geographic Information System (GIS)",
//     ],
//     correctAnswer: "Cellular, radio, and Wi-Fi networks",
//   },
//   {
//     type: "text",
//     question: "In a Smart Water Network, which system integrates data and helps municipal engineers with real-time network management?",
//     options: [
//       "SCADA",
//       "GIS",
//       "Consumer billing systems",
//       "Data Fusion and Analysis systems",
//     ],
//     correctAnswer: "SCADA",
//   },
//   {
//     type: "text",
//     question: "Which layer in a Smart Water Network handles data fusion and real-time analysis for decision-making?",
//     options: [
//       "Collection and Communication Layer",
//       "Data Management and Display Layer",
//       "Data Fusion and Analysis Layer",
//       "Sensing and Control Layer",
//     ],
//     correctAnswer: "Data Fusion and Analysis Layer",
//   },
//   {
//     type: "text",
//     question: "What is the main role of pressure-reducing valves (PRVs) in a Smart Water Network?",
//     options: [
//       "To monitor water quality",
//       "To reduce energy consumption",
//       "To control and maintain pressure levels in the distribution system",
//       "To store water for future use",
//     ],
//     correctAnswer: "To control and maintain pressure levels in the distribution system",
//   },
//   {
//     type: "text",
//     question: "Which component is NOT typically covered in conventional water supply contracts but is essential for performance assessment in a Smart Water Network?",
//     options: [
//       "Pressure management devices",
//       "Water treatment plants",
//       "Distribution mains",
//       "Raw water intake",
//     ],
//     correctAnswer: "Pressure management devices",
//   },
//   {
//     type: "text",
//     question: "What is one of the key benefits of implementing machine learning and AI in a Smart Water Network?",
//     options: [
//       "Increased manual labour requirements",
//       "Enhanced predictive maintenance and leak detection",
//       "Reduced water usage",
//       "Reduced customer engagement",
//     ],
//     correctAnswer: "Enhanced predictive maintenance and leak detection",
//   },
// ];


// // Stage 8 - Performance Assessment & Operational Excellence
// const getQuestionsForStage8 = (): Question[] => [
//   {
//     type: "text",
//     question: "What is the primary benefit of implementing smart water meters in urban water systems?",
//     options: [
//       "Increased water usage",
//       "Improved billing accuracy and leak detection",
//       "Reduced consumer awareness",
//       "Higher water prices",
//     ],
//     correctAnswer: "Improved billing accuracy and leak detection",
//   },
//   {
//     type: "text",
//     question: "What is a significant challenge in implementing smart water metering in rural or remote locations?",
//     options: [
//       "High water demand",
//       "Lack of infrastructure to support smart metering",
//       "Easy access to communication signals",
//       "Overly qualified staff",
//     ],
//     correctAnswer: "Lack of infrastructure to support smart metering",
//   },
//   {
//     type: "text",
//     question: "Which of the following technologies is commonly used in smart water meters for accurate data collection?",
//     options: [
//       "Ultrasonic and Electromagnetic meters",
//       "Mechanical rotary meters",
//       "Manual reading systems",
//       "Analog meters",
//     ],
//     correctAnswer: "Ultrasonic and Electromagnetic meters",
//   },
//   {
//     type: "text",
//     question: "What is the impact of poor water meter maintenance on the water utility?",
//     options: [
//       "Increased system efficiency",
//       "Loss of water revenue due to inaccurate readings",
//       "Reduction in energy consumption",
//       "Improved service delivery",
//     ],
//     correctAnswer: "Loss of water revenue due to inaccurate readings",
//   },
//   {
//     type: "text",
//     question: "Which of the following is a primary concern in billing and collection systems for water utilities?",
//     options: [
//       "Excessive water supply",
//       "Accurate measurement and timely billing",
//       "High rate of non-revenue water",
//       "Redundant pipe infrastructure",
//     ],
//     correctAnswer: "Accurate measurement and timely billing",
//   },
//   {
//     type: "text",
//     question: "In the context of water metering, what does AMR stand for?",
//     options: [
//       "Automated Meter Reading",
//       "Automated Management of Resources",
//       "Active Meter Reading",
//       "Advanced Meter Regulation",
//     ],
//     correctAnswer: "Automated Meter Reading",
//   },
//   {
//     type: "text",
//     question: "What type of meter would be most suitable for detecting small changes in water flow in a modern smart water metering system?",
//     options: [
//       "Multi-jet non-AMR meter",
//       "Mechanical dial meter",
//       "Ultrasonic or electromagnetic meter",
//       "Step-test meter",
//     ],
//     correctAnswer: "Ultrasonic or electromagnetic meter",
//   },
//   {
//     type: "text",
//     question: "What is a significant economic benefit of accurate water metering and billing systems for water utilities?",
//     options: [
//       "Higher water production costs",
//       "Reduced operational costs through leak detection",
//       "Increased water wastage",
//       "Lower capital expenditure",
//     ],
//     correctAnswer: "Reduced operational costs through leak detection",
//   },
//   {
//     type: "text",
//     question: "Which factor can negatively impact the success of smart water metering systems?",
//     options: [
//       "Availability of skilled labor",
//       "Lack of interoperable technology",
//       "Reduced consumer engagement",
//       "High regulatory support",
//     ],
//     correctAnswer: "Lack of interoperable technology",
//   },
//   {
//     type: "text",
//     question: "How does the introduction of smart water meters help in water conservation?",
//     options: [
//       "By providing real-time data on consumption patterns",
//       "By increasing water prices to reduce usage",
//       "By directly reducing the number of water sources",
//       "By increasing water supply to all areas",
//     ],
//     correctAnswer: "By providing real-time data on consumption patterns",
//   },
// ];





  // {
  //   type: "image",
  //   question: "Which of these is a water conservation method?",
  //   options: ["Drip irrigation", "Flood irrigation", "Sprinkler system", "Manual watering"],
  //   correctAnswer: "Drip irrigation",
  //   imageUrl: "/placeholder.svg?height=200&width=300",
  // },

  const getQuestionsForSampleStage = (): Question[] => [
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
  }];

// Generate stages for each set
const stages: Stage[] = [
  { stageName: "Plan A Water Supply System", questions: getQuestionsForSampleStage() },
  { stageName: "Design the Water Supply System", questions: getQuestionsForSampleStage() },
  { stageName: "Building the Infrastructure", questions: getQuestionsForSampleStage() },
  { stageName: "Water Treatment", questions: getQuestionsForSampleStage() },
  { stageName: "Smart Water Networks", questions: getQuestionsForSampleStage() },
  { stageName: "Metering, Billing, and Collection", questions: getQuestionsForSampleStage() },
  { stageName: "Non-Revenue Water Management", questions: getQuestionsForSampleStage() },
  { stageName: "Performance Assessment & Operational Excellence", questions: getQuestionsForSampleStage() },
];

// Define all quiz sets
export const quizData: QuizSet[] = [
  { setName: "Set 1", stages },
  { setName: "Set 2", stages },
  { setName: "Set 3", stages },
  { setName: "Set 4", stages },
];
