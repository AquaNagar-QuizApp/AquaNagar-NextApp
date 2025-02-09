import { Stage, Question } from "@/types";

// Stage 1 - Plan A Water Supply System
const getQuestionsForStage1 = (): Question[] => [
    {
        type: "image",
        question: "What type of water does this system collect?",
        options: [
            "River water",
            "Rain water",
            "Ocean water",
            "Tap water",
        ],
        correctAnswer: "Rain water",
        imageUrl: "./imagequestions/planning.jpg",
    },
    {
        type: "text",
        question: "What is the primary benefit of maintaining detailed maintenance records?",
        options: [
            "Simplifies compliance with labour laws",
            "Tracks equipment performance and plans future maintenance",
            "Eliminates the need for routine inspections",
            "Reduces transparency in system operations",
        ],
        correctAnswer: "Tracks equipment performance and plans future maintenance",
    },
    // {
    //   type: "text",
    //   question: "How do efficient billing systems contribute to water conservation?",
    //   options: [
    //     "By encouraging timely payments based on accurate water usage",
    //     "By simplifying equipment replacement planning",
    //     "By reducing the need for leak detection technologies",
    //     "By discouraging water-saving practices among users",
    //   ],
    //   correctAnswer: "By encouraging timely payments based on accurate water usage",
    // },
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
    {
        type: "text",
        question: "Why is predictive maintenance valuable in WSS management?",
        options: [
            "It forecasts maintenance needs, reducing system downtime and costs.",
            "It replaces the need for data-driven decision-making entirely.",
            "It limits the lifespan of equipment for easier replacements.",
            "It reduces the need for accurate record-keeping.",
        ],
        correctAnswer: "It forecasts maintenance needs, reducing system downtime and costs.",
    },
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
        question: "How can unauthorized connections lead to water loss?",
        options: [
            "They can reduce pressure in the system",
            "They can result in unmeasured consumption, causing revenue loss",
            "They can reduce water quality",
            "They can improve water flow",
        ],
        correctAnswer: "They can result in unmeasured consumption, causing revenue loss",
    },
    {
        type: "text",
        question: "What is one of the objectives of implementing a leak repair program?",
        options: [
            "To minimize disruptions and water loss during repairs",
            "To increase water treatment time",
            "To reduce the lifespan of pipes",
            "To increase operational costs",
        ],
        correctAnswer: "To minimize disruptions and water loss during repairs",
    },
    {
        type: "text",
        question: "What is the impact of high-water pressure on the infrastructure?",
        options: [
            "It reduces the risk of leaks and bursts",
            "It causes pipes to burst and increases water loss",
            "It enhances customer satisfaction",
            "It improves the quality of water supply",
        ],
        correctAnswer: "It causes pipes to burst and increases water loss",
    },
    {
        type: "text",
        question: "Why is asset management important for minimizing water loss?",
        options: [
            "It helps track and prioritize maintenance activities based on asset conditions",
            "It reduces system capacity",
            "It increases water demand",
            "It increases water prices",
        ],
        correctAnswer: "It helps track and prioritize maintenance activities based on asset conditions",
    },
    {
        type: "text",
        question: "What is one of the benefits of reducing water loss in a Water Supply System?",
        options: [
            "Increased revenue from accurate billing",
            "Reduced system reliability",
            "Higher water treatment costs",
            "Reduced customer satisfaction",
        ],
        correctAnswer: "Increased revenue from accurate billing",
    },
    {
        type: "text",
        question: "What is the purpose of pressure relief valves in a WSS?",
        options: [
            "To prevent excessive pressure buildup that could cause damage",
            "To increase water pressure",
            "To detect unauthorized connections",
            "To improve water quality",
        ],
        correctAnswer: "To prevent excessive pressure buildup that could cause damage",
    },
    {
        type: "text",
        question: "How do smart water meters help in minimizing water loss?",
        options: [
            "By detecting leaks and unauthorized consumption in real-time",
            "By increasing water demand",
            "By reducing system complexity",
            "By lowering water pressure",
        ],
        correctAnswer: "By detecting leaks and unauthorized consumption in real-time",
    },
    {
        type: "text",
        question: "What is the role of leak detection sensors in water distribution networks?",
        options: [
            "To monitor for unusual pressure or flow variations indicating leaks",
            "To increase water treatment efficiency",
            "To monitor customer complaints",
            "To improve energy efficiency",
        ],
        correctAnswer: "To monitor for unusual pressure or flow variations indicating leaks",
    },
    {
        type: "text",
        question: "Why is early leak detection essential for minimizing water loss?",
        options: [
            "It allows for quick repairs, reducing water wastage and operational costs",
            "It increases water supply capacity",
            "It reduces system pressure",
            "It lowers water consumption",
        ],
        correctAnswer: "It allows for quick repairs, reducing water wastage and operational costs",
    },
    {
        type: "text",
        question: "What does proactive leak detection enable in a Water Supply System?",
        options: [
            "It allows for quicker identification and repair of leaks, minimizing water loss",
            "It increases the complexity of system maintenance",
            "It reduces the quality of water",
            "It reduces the need for preventive maintenance",
        ],
        correctAnswer: "It allows for quicker identification and repair of leaks, minimizing water loss",
    },
];


// Stage 3 - Building the Infrastructure
const getQuestionsForStage3 = (): Question[] => [
    {
        type: "text",
        question: "What is the main advantage of using GIS (Geographic Information Systems) in urban water management?",
        options: [
            "To provide a digital map of the water distribution system",
            "To increase water production",
            "To replace manual labor",
            "To detect underground rivers",
        ],
        correctAnswer: "To provide a digital map of the water distribution system",
    },
    {
        type: "text",
        question: "What is a key step before laying a new water pipeline?",
        options: [
            "Conducting a site survey and soil testing",
            "Digging immediately without planning",
            "Waiting for monsoon season",
            "Checking the price of water",
        ],
        correctAnswer: "Conducting a site survey and soil testing",
    },
    {
        type: "text",
        question: "How can water utilities reduce Non-Revenue Water (NRW)?",
        options: [
            "By reducing leakages and unauthorized connections",
            "By increasing water tariffs",
            "By cutting off supply during peak hours",
            "By increasing the number of water meters",
        ],
        correctAnswer: "By reducing leakages and unauthorized connections",
    },
    {
        type: "text",
        question: "What is the importance of pump stations in water supply infrastructure?",
        options: [
            "They help in transporting water from lower to higher elevations",
            "They only store water temporarily",
            "They increase the speed of natural water flow",
            "They filter out bacteria",
        ],
        correctAnswer: "They help in transporting water from lower to higher elevations",
    },
    {
        type: "text",
        question: "Why should urban water supply systems have emergency backup reservoirs?",
        options: [
            "To provide water in case of pipeline failures or drought",
            "To store water for decoration purposes",
            "To sell water at higher rates in emergencies",
            "To keep water stagnant for a long time",
        ],
        correctAnswer: "To provide water in case of pipeline failures or drought",
    },
    {
        type: "text",
        question: "What is the main role of water treatment plants in an urban infrastructure system?",
        options: [
            "To remove contaminants and ensure safe drinking water",
            "To add color to the water",
            "To increase the water price",
            "To store raw water for future use",
        ],
        correctAnswer: "To remove contaminants and ensure safe drinking water",
    },
    {
        type: "text",
        question: "Why is pressure management important in a water distribution system?",
        options: [
            "To prevent pipe bursts and leakage",
            "To increase water flow at all times",
            "To block water for certain areas",
            "To stop maintenance work",
        ],
        correctAnswer: "To prevent pipe bursts and leakage",
    },
    {
        type: "text",
        question: "How can cities promote sustainable urban water management?",
        options: [
            "By implementing rainwater harvesting and wastewater reuse",
            "By using only groundwater",
            "By increasing water prices for industries",
            "By banning water supply to commercial areas",
        ],
        correctAnswer: "By implementing rainwater harvesting and wastewater reuse",
    },
    {
        type: "text",
        question: "What happens if water pipes are not regularly maintained?",
        options: [
            "Water quality may deteriorate, and leakage may increase",
            "Water supply becomes cheaper",
            "Pipes become stronger over time",
            "Water taste improves",
        ],
        correctAnswer: "Water quality may deteriorate, and leakage may increase",
    },
    {
        type: "text",
        question: "What is one of the major benefits of using smart technology in water infrastructure?",
        options: [
            "It enables real-time monitoring and reduces water losses",
            "It replaces human workers completely",
            "It reduces the cost of materials",
            "It increases power consumption unnecessarily",
        ],
        correctAnswer: "It enables real-time monitoring and reduces water losses",
    },
];


// Stage 4 - Water Treatment
const getQuestionsForStage4 = (): Question[] => [
    {
        type: "image",
        question: "What should be monitored when using NaCl in water systems?",
        options: [
            "Water temperature",
            "Salt concentration levels",
            "Color of the water",
            "Flow speed of water",
        ],
        correctAnswer: "Salt concentration levels",
        imageUrl: "./imagequestions/watertreatment1.png",
    },
    {
        type: "image",
        question: "What does the term &quot;adsorption&quot; mean in this context?",
        options: [
            "Dissolving pollutants in water",
            "Trapping pollutants on the bead&#39;s surface",
            "Mixing the water with magnetic materials",
            "Adding chemicals to remove impurities",
        ],
        correctAnswer: "Trapping pollutants on the bead&#39;s surface",
        imageUrl: "./imagequestions/watertreatment2.png",
    },
    {
        type: "text",
        question: "What is the main purpose of water treatment?",
        options: [
            "To make water taste better",
            "To remove impurities and make water safe to drink",
            "To increase the water supply",
            "To change the color of water",
        ],
        correctAnswer: "To remove impurities and make water safe to drink",
    },
    {
        type: "text",
        question: "Which of the following is a common step in water treatment?",
        options: [
            "Boiling water at high temperatures",
            "Filtering water through cloth",
            "Using processes like sedimentation, filtration, and disinfection",
            "Freezing water to remove bacteria",
        ],
        correctAnswer: "Using processes like sedimentation, filtration, and disinfection",
    },
    // {
    //   type: "text",
    //   question: "Why is chlorine added to drinking water?",
    //   options: [
    //     "To make it taste better",
    //     "To kill harmful bacteria and viruses",
    //     "To change its color",
    //     "To make it more acidic",
    //   ],
    //   correctAnswer: "To kill harmful bacteria and viruses",
    // },
    // {
    //   type: "text",
    //   question: "What is the purpose of filtration in water treatment?",
    //   options: [
    //     "To remove large particles and impurities",
    //     "To add minerals to water",
    //     "To boil water quickly",
    //     "To make water taste salty",
    //   ],
    //   correctAnswer: "To remove large particles and impurities",
    // },
    {
        type: "text",
        question: "Which of the following is NOT a common source of drinking water?",
        options: [
            "Lakes and rivers",
            "Groundwater from wells",
            "Sewage water",
            "Rainwater harvesting systems",
        ],
        correctAnswer: "Sewage water",
    },
    {
        type: "text",
        question: "What does boiling water help remove?",
        options: [
            "Dirt and dust",
            "Harmful bacteria and viruses",
            "Heavy metals",
            "All minerals",
        ],
        correctAnswer: "Harmful bacteria and viruses",
    },
    {
        type: "text",
        question: "Why is it important to store treated water in clean containers?",
        options: [
            "To prevent recontamination by dirt and bacteria",
            "To change the taste of the water",
            "To reduce water temperature",
            "To increase water pressure",
        ],
        correctAnswer: "To prevent recontamination by dirt and bacteria",
    },
    {
        type: "text",
        question: "Which method is commonly used to remove tiny particles from water?",
        options: [
            "Boiling",
            "Filtration",
            "Stirring",
            "Freezing",
        ],
        correctAnswer: "Filtration",
    },
    {
        type: "text",
        question: "What should you do if your tap water appears cloudy or has an unusual smell?",
        options: [
            "Ignore it and drink it",
            "Use more soap to clean it",
            "Report it to the water utility and avoid drinking it",
            "Mix it with juice to hide the smell",
        ],
        correctAnswer: "Report it to the water utility and avoid drinking it",
    },
    {
        type: "text",
        question: "Which of the following household methods can help improve drinking water quality?",
        options: [
            "Using a water filter",
            "Storing water in open containers",
            "Adding food coloring",
            "Mixing it with soda",
        ],
        correctAnswer: "Using a water filter",
    },
];


// Stage 5 - Smart Water Networks
const getQuestionsForStage5 = (): Question[] => [
    {
        type: "image",
        question: "Where is the data from these sensors likely sent for monitoring?",
        options: [
            "Directly to a weather satellite",
            "To a central control system or computer",
            "Only to mobile phones",
            "To paper reports manually filled in",
        ],
        correctAnswer: "To a central control system or computer",
        imageUrl: "./imagequestions/smartwaternetwork1.jpg",
    },
    {
        type: "image",
        question: "Why are buildings shown connected to the pipelines?",
        options: [
            "To supply water for drinking, cleaning, and industrial use",
            "To provide internet service",
            "To deliver packages",
            "To pump air for ventilation",
        ],
        correctAnswer: "To supply water for drinking, cleaning, and industrial use",
        imageUrl: "./imagequestions/smartwaternetwork2.jpg",
    },
    {
        type: "text",
        question: "What is a Smart Water Network designed to improve?",
        options: [
            "Water distribution efficiency and monitoring",
            "Manual water meter readings",
            "Frequent water supply shutdowns",
            "Uncontrolled water losses",
        ],
        correctAnswer: "Water distribution efficiency and monitoring",
    },
    {
        type: "text",
        question: "Which of the following technologies is commonly used in Smart Water Networks to detect leaks?",
        options: [
            "Pressure-reducing valves",
            "Acoustic sensors",
            "Customer complaints",
            "Water storage tanks",
        ],
        correctAnswer: "Acoustic sensors",
    },
    // {
    //   type: "text",
    //   question: "What is one major advantage of using smart water meters?",
    //   options: [
    //     "They help customers monitor their water usage in real time",
    //     "They increase water wastage",
    //     "They eliminate the need for water treatment",
    //     "They reduce water pressure randomly",
    //   ],
    //   correctAnswer: "They help customers monitor their water usage in real time",
    // },
    {
        type: "text",
        question: "What does GIS (Geographic Information System) help with in a Smart Water Network?",
        options: [
            "Mapping pipelines and monitoring leaks",
            "Increasing water consumption",
            "Controlling customer billing",
            "Measuring the chlorine level in water",
        ],
        correctAnswer: "Mapping pipelines and monitoring leaks",
    },
    {
        type: "text",
        question: "Which of the following is NOT a key component of a Smart Water Network?",
        options: [
            "Sensors and meters",
            "SCADA system",
            "Automated valves",
            "Handwritten logbooks",
        ],
        correctAnswer: "Handwritten logbooks",
    },
    // {
    //   type: "text",
    //   question: "What is the main benefit of using remote monitoring in water distribution?",
    //   options: [
    //     "It reduces the need for physical inspections",
    //     "It increases customer complaints",
    //     "It slows down leak detection",
    //     "It makes meter readings more difficult",
    //   ],
    //   correctAnswer: "It reduces the need for physical inspections",
    // },
    {
        type: "text",
        question: 'Which of the following best describes "Water Demand Forecasting" in Smart Water Networks?',
        options: [
            "Predicting future water needs based on data analysis",
            "Storing excess water for emergency use",
            "Increasing the amount of water supplied daily",
            "Reducing the number of water meters in a city",
        ],
        correctAnswer: "Predicting future water needs based on data analysis",
    },
    {
        type: "text",
        question: "What is the purpose of an Automatic Meter Reading (AMR) system?",
        options: [
            "To allow remote water usage monitoring without manual meter readings",
            "To manually record customer water consumption",
            "To increase water leaks",
            "To disconnect water supply frequently",
        ],
        correctAnswer: "To allow remote water usage monitoring without manual meter readings",
    },
    {
        type: "text",
        question: "Why is reducing Non-Revenue Water (NRW) important for a Smart Water Network?",
        options: [
            "It helps prevent water loss and improves efficiency",
            "It makes water bills more expensive",
            "It increases customer complaints",
            "It allows uncontrolled leakage",
        ],
        correctAnswer: "It helps prevent water loss and improves efficiency",
    },
    {
        type: "text",
        question: "Which technology helps automate the operation of pumps and valves in a Smart Water Network?",
        options: [
            "SCADA (Supervisory Control and Data Acquisition)",
            "Hand-operated water meters",
            "Written reports",
            "Customer surveys",
        ],
        correctAnswer: "SCADA (Supervisory Control and Data Acquisition)",
    },
];


// Stage 6 - Metering, Billing, and Collection
const getQuestionsForStage6 = (): Question[] => [
    {
        type: "text",
        question: "What is the purpose of raising water bills based on the volume of treated water consumed?",
        options: [
            "To encourage the installation of water-saving devices",
            "To ensure accurate charging based on actual water usage",
            "To discourage consumers from using too much water",
            "To reward consumers for using less water",
        ],
        correctAnswer: "To ensure accurate charging based on actual water usage",
    },
    {
        type: "text",
        question: "How can consumer awareness activities improve water utility services?",
        options: [
            "By lowering water consumption to reduce operational costs",
            "By increasing consumer satisfaction, leading to better financial sustainability",
            "By allowing utilities to charge consumers more based on their usage",
            "By enabling utilities to eliminate water wastage",
        ],
        correctAnswer: "By increasing consumer satisfaction, leading to better financial sustainability",
    },
    {
        type: "text",
        question: "What type of information is important to gather during consumer awareness activities?",
        options: [
            "Consumer’s household income",
            "Consumers' willingness to pay for water services and their satisfaction with the service",
            "The number of water meters in each household",
            "The geographical location of the consumer’s home",
        ],
        correctAnswer: "Consumers' willingness to pay for water services and their satisfaction with the service",
    },
    {
        type: "text",
        question: "Why is it important to use different communication methods (e.g., workshops, TV, and road shows) in a consumer awareness program?",
        options: [
            "To entertain the consumers while raising awareness",
            "To reach various categories of consumers using the most appropriate communication means",
            "To encourage consumers to use less water",
            "To promote new water tariffs among consumers",
        ],
        correctAnswer: "To reach various categories of consumers using the most appropriate communication means",
    },
    {
        type: "text",
        question: "What is one of the key objectives of conducting a consumer survey before implementing a water management project?",
        options: [
            "To understand consumers' perceptions about the need for water meters and tariffs",
            "To assess the quality of the water supply",
            "To identify areas where water wastage is highest",
            "To analyze the impact of water meters on the local economy",
        ],
        correctAnswer: "To understand consumers' perceptions about the need for water meters and tariffs",
    },
    {
        type: "text",
        question: "What is one challenge associated with the implementation of MDMS?",
        options: [
            "It requires a large number of consumers to participate in awareness activities",
            "It may require high initial investment and modifications to existing infrastructure",
            "It guarantees complete accuracy in water billing",
            "It only works with certain types of water meters",
        ],
        correctAnswer: "It may require high initial investment and modifications to existing infrastructure",
    },
    {
        type: "text",
        question: "Which of the following activities is commonly used to spread consumer awareness?",
        options: [
            "Installing water-saving devices in households",
            "Conducting street plays and road shows",
            "Reducing water tariffs for certain consumer groups",
            "Collecting consumer feedback on water meter performance",
        ],
        correctAnswer: "Conducting street plays and road shows",
    },
    {
        type: "text",
        question: "Why is raising consumer awareness important for improving water conservation behavior?",
        options: [
            "It helps consumers understand the relationship between water usage and water tariffs, promoting efficient use.",
            "It encourages consumers to reduce their water consumption by imposing fines.",
            "It allows consumers to control their water supply independently.",
            "It ensures that all consumers will always pay their bills on time.",
        ],
        correctAnswer: "It helps consumers understand the relationship between water usage and water tariffs, promoting efficient use.",
    },
    {
        type: "text",
        question: "What can the results from consumer awareness programs and surveys help the operator align?",
        options: [
            "The water supply tariffs with the local government",
            "The billing systems with existing consumer expectations",
            "The meter installation process with government regulations",
            "The water quality standards with international organizations",
        ],
        correctAnswer: "The billing systems with existing consumer expectations",
    },
    {
        type: "text",
        question: "Which of the following companies is NOT listed as a reputed meter supplier for municipalities in India?",
        options: [
            "Kamstrup",
            "Itron",
            "Sensus",
            "Siemens",
        ],
        correctAnswer: "Siemens",
    },
];


// Stage 7 - Non-Revenue Water Management
const getQuestionsForStage7 = (): Question[] => [
    {
        type: "text",
        question: "What is the purpose of a Minimum Night Flow (MNF) test?",
        options: [
            "To identify the volume of water lost due to leaks during the night",
            "To monitor nighttime customer water consumption",
            "To test the quality of water in the network",
            "To ensure meters are functioning correctly",
        ],
        correctAnswer: "To identify the volume of water lost due to leaks during the night",
    },
    {
        type: "text",
        question: "What is the most important activity in water management for reducing leaks?",
        options: [
            "Installing new pipelines",
            "Active Leakage Control (ALC)",
            "Improving meter reading practices",
            "Increasing water pressure",
        ],
        correctAnswer: "Active Leakage Control (ALC)",
    },
    {
        type: "text",
        question: "Why is pressure management critical in water networks?",
        options: [
            "It ensures high water flow at all times",
            "It reduces water leakage by regulating excessive pressure",
            "It eliminates the need for leak detection surveys",
            "It increases water consumption for customers",
        ],
        correctAnswer: "It reduces water leakage by regulating excessive pressure",
    },
    {
        type: "text",
        question: "What does Net Night Flow (NNF) indicate?",
        options: [
            "Total customer water consumption during the night",
            "Total water lost due to leakages during the night",
            "Legitimate water consumption in a DMA",
            "Total inflow to a DMA",
        ],
        correctAnswer: "Total water lost due to leakages during the night",
    },
    {
        type: "text",
        question: "What is the role of customer meters in NRW reduction?",
        options: [
            "They help in detecting pipeline bursts",
            "They ensure accurate measurement of customer water usage",
            "They reduce the number of illegal connections",
            "They increase network pressure",
        ],
        correctAnswer: "They ensure accurate measurement of customer water usage",
    },
    {
        type: "text",
        question: "What is the primary objective of a Step Test?",
        options: [
            "To measure water quality in the network",
            "To isolate sections of a DMA to locate leaks",
            "To increase pressure in certain areas of the network",
            "To monitor customer satisfaction",
        ],
        correctAnswer: "To isolate sections of a DMA to locate leaks",
    },
    {
        type: "text",
        question: "What is a common cause of commercial losses in water utilities?",
        options: [
            "High water pressure",
            "Illegal connections and water pilferage",
            "Frequent pipeline bursts",
            "Inadequate water supply",
        ],
        correctAnswer: "Illegal connections and water pilferage",
    },
    {
        type: "text",
        question: "What should utilities do to detect illegal connections?",
        options: [
            "Increase water tariffs",
            "Conduct regular network inspections and audits",
            "Install additional boundary valves",
            "Reduce water pressure in the network",
        ],
        correctAnswer: "Conduct regular network inspections and audits",
    },
    {
        type: "text",
        question: "What does Active Leakage Control (ALC) focus on?",
        options: [
            "Random checks for illegal connections",
            "Monitoring network flows to identify leaks early",
            "Increasing water supply in low-pressure areas",
            "Installing new pipelines in the network",
        ],
        correctAnswer: "Monitoring network flows to identify leaks early",
    },
];


// Stage 8 - Performance Assessment & Operational Excellence
const getQuestionsForStage8 = (): Question[] => [
    {
        type: "image",
        question: "Which of the following actions helps lower your personal carbon footprint related to water usage?",
        options: [
            "Taking long, hot showers regularly",
            "Using less water and fixing leaks promptly",
            "Washing cars frequently with lots of water",
            "Letting taps run while brushing teeth"
        ],
        correctAnswer: "Using less water and fixing leaks promptly",
        imageUrl: "./imagequestions/performanceassessment.png",
    },
    {
        type: "text",
        question: "Which of the following is NOT a Key Performance Indicator (KPI) in water supply system management?",
        options: [
            "Water loss percentage",
            "Number of customer complaints",
            "Fuel consumption of company vehicles",
            "Water pressure consistency",
        ],
        correctAnswer: "Fuel consumption of company vehicles",
    },
    {
        type: "text",
        question: "How can water utilities improve energy efficiency?",
        options: [
            "Using energy-efficient pumps and optimizing operational schedules",
            "Increasing the number of pumps without efficiency analysis",
            "Reducing monitoring activities",
            "Increasing pumping pressure unnecessarily",
        ],
        correctAnswer: "Using energy-efficient pumps and optimizing operational schedules",
    },
    {
        type: "text",
        question: "Why is data analytics useful in performance assessment?",
        options: [
            "It helps predict failures and optimize resource allocation",
            "It increases customer complaints",
            "It reduces regulatory compliance",
            "It complicates decision-making",
        ],
        correctAnswer: "It helps predict failures and optimize resource allocation",
    },
    {
        type: "text",
        question: "What is one disadvantage of not performing regular pipeline inspections?",
        options: [
            "Increased risk of undetected leaks and failures",
            "Improved customer satisfaction",
            "Better water conservation",
            "Lower energy consumption",
        ],
        correctAnswer: "Increased risk of undetected leaks and failures",
    },
    {
        type: "text",
        question: "What is the main purpose of pressure management in a water distribution network?",
        options: [
            "To minimize leakages and prolong infrastructure lifespan",
            "To increase system failures",
            "To reduce maintenance activities",
            "To ignore fluctuations in water pressure",
        ],
        correctAnswer: "To minimize leakages and prolong infrastructure lifespan",
    },
    {
        type: "text",
        question: "How does automation support performance assessment in water supply systems?",
        options: [
            "It provides real-time monitoring and data collection",
            "It reduces operational efficiency",
            "It increases manual intervention",
            "It eliminates the need for maintenance",
        ],
        correctAnswer: "It provides real-time monitoring and data collection",
    },
    {
        type: "text",
        question: "What is the purpose of a water supply system’s Key Performance Indicators (KPIs)?",
        options: [
            "To measure efficiency and ensure continuous improvement",
            "To increase maintenance costs",
            "To decrease customer engagement",
            "To prevent regulatory compliance",
        ],
        correctAnswer: "To measure efficiency and ensure continuous improvement",
    },
    {
        type: "text",
        question: "Why is leak detection critical in a water distribution system?",
        options: [
            "To prevent unnecessary water losses and reduce operational costs",
            "To increase non-revenue water (NRW)",
            "To decrease water conservation efforts",
            "To complicate maintenance efforts",
        ],
        correctAnswer: "To prevent unnecessary water losses and reduce operational costs",
    },
    {
        type: "text",
        question: "Which of the following can negatively impact pump efficiency?",
        options: [
            "Clogged filters and poor maintenance",
            "Regular monitoring and servicing",
            "Use of energy-efficient motors",
            "Proper alignment of pump systems",
        ],
        correctAnswer: "Clogged filters and poor maintenance",
    },
    // {
    //   type: "text",
    //   question: "How does real-time monitoring improve performance assessment?",
    //   options: [
    //     "It helps detect issues before they escalate into major failures",
    //     "It increases manual labour costs",
    //     "It delays maintenance scheduling",
    //     "It increases energy consumption",
    //   ],
    //   correctAnswer: "It helps detect issues before they escalate into major failures",
    // },
];


// Generate stages for each set
export const nonEngineerSet4Stages: Stage[] = [
    { stageName: "Plan A Water Supply System", questions: getQuestionsForStage1() },
    { stageName: "Design the Water Supply System", questions: getQuestionsForStage2() },
    { stageName: "Building the Infrastructure", questions: getQuestionsForStage3() }, //5
    { stageName: "Water Treatment", questions: getQuestionsForStage4() }, //3
    { stageName: "Smart Water Networks", questions: getQuestionsForStage5() }, //7
    { stageName: "Metering, Billing, and Collection", questions: getQuestionsForStage6() }, //8
    { stageName: "Non-Revenue Water Management", questions: getQuestionsForStage7() }, //4
    { stageName: "Performance Assessment & Operational Excellence", questions: getQuestionsForStage8() } //6
];
