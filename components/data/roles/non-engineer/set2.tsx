import { Stage, Question } from "@/types";

// Stage 1 - Plan A Water Supply System
const getQuestionsForStage1 = (): Question[] => [
    {
        type: "image",
        question: "How does the system shown in the image help during heavy rainfall?",
        options: [
            "It prevents the roof from leaking",
            "It collects and stores rainwater for later use",
            "It increases the water flow on roads",
            "It helps clean household waste",
        ],
        correctAnswer: "It collects and stores rainwater for later use",
        imageUrl: "./imagequestions/planning.jpg",
    },
    {
        type: "text",
        question: "What is the main purpose of leak detection and repair systems in a WSS?",
        options: [
            "To minimize water loss and non-revenue water (NRW)",
            "To increase operational costs",
            "To discourage conservation practices",
            "To avoid renewable energy integration",
        ],
        correctAnswer: "To minimize water loss and non-revenue water (NRW)",
    },
    {
        type: "text",
        question: "How does pressure management contribute to resource efficiency in a WSS?",
        options: [
            "By encouraging higher water consumption",
            "By maintaining optimal pressure levels to reduce pipe bursts",
            "By increasing system complexity",
            "By eliminating the need for demand management",
        ],
        correctAnswer: "By maintaining optimal pressure levels to reduce pipe bursts",
    },
    {
        type: "text",
        question: "Which renewable energy source can be integrated into gravity-fed water systems to generate electricity?",
        options: [
            "Wind power",
            "Hydropower",
            "Solar power",
            "Biomass energy",
        ],
        correctAnswer: "Hydropower",
    },
    {
        type: "text",
        question: "What is the purpose of metering and accurate billing in a sustainable WSS?",
        options: [
            "To encourage water conservation and fair billing practices",
            "To simplify system design",
            "To reduce demand management efforts",
            "To increase public water usage",
        ],
        correctAnswer: "To encourage water conservation and fair billing practices",
    },
    // {
    //   type: "text",
    //   question: "Why is modular design important for urban water officials managing WSS?",
    //   options: [
    //     "It enables gradual expansion as demand grows.",
    //     "It avoids the need for future-proofing.",
    //     "It complicates maintenance efforts.",
    //     "It reduces scalability.",
    //   ],
    //   correctAnswer: "It enables gradual expansion as demand grows.",
    // },
    {
        type: "text",
        question: "What is a benefit of integrating smart meters into a WSS?",
        options: [
            "Reducing public participation in water conservation",
            "Allowing precise monitoring of water consumption",
            "Increasing NRW",
            "Eliminating data collection",
        ],
        correctAnswer: "Allowing precise monitoring of water consumption",
    },
    {
        type: "text",
        question: "How can urban water officials promote energy efficiency in a WSS?",
        options: [
            "By avoiding renewable energy sources",
            "By implementing energy-efficient technologies like VFDs",
            "By encouraging system inefficiencies",
            "By reducing automation",
        ],
        correctAnswer: "By implementing energy-efficient technologies like VFDs",
    },
    {
        type: "text",
        question: "What is the role of IoT devices in a modern WSS?",
        options: [
            "Providing real-time monitoring of system performance",
            "Simplifying system upgrades",
            "Reducing the need for accurate metering",
            "Increasing reliance on manual controls",
        ],
        correctAnswer: "Providing real-time monitoring of system performance",
    },
    {
        type: "text",
        question: "Why should urban water systems integrate renewable energy sources?",
        options: [
            "To reduce dependence on non-renewable energy and lower the carbon footprint",
            "To increase system complexity",
            "To reduce stakeholder engagement",
            "To encourage traditional energy usage",
        ],
        correctAnswer: "To reduce dependence on non-renewable energy and lower the carbon footprint",
    },
    {
        type: "text",
        question: "What is the primary advantage of automated control systems for urban water officials?",
        options: [
            "They reduce decision-making requirements",
            "They adjust operations in real-time to optimize efficiency",
            "They eliminate the need for metering",
            "They increase system costs significantly",
        ],
        correctAnswer: "They adjust operations in real-time to optimize efficiency",
    },
];


// Stage 2 - Design the Water Supply System
const getQuestionsForStage2 = (): Question[] => [
    {
        type: "text",
        question: "What does minimizing energy loss in a WSS lead to?",
        options: [
            "Increased water supply",
            "Reduced environmental impact and lower operating costs",
            "Increased construction time",
            "Increased risk of system failure",
        ],
        correctAnswer: "Reduced environmental impact and lower operating costs",
    },
    {
        type: "text",
        question: "What is a key objective of a Water Supply System that is designed with resilience in mind?",
        options: [
            "To provide a higher volume of water",
            "To withstand unexpected disruptions and continue functioning effectively",
            "To reduce the complexity of the system",
            "To limit the amount of water transported",
        ],
        correctAnswer: "To withstand unexpected disruptions and continue functioning effectively",
    },
    {
        type: "text",
        question: "Which of the following contributes to minimizing water loss in a Water Supply System?",
        options: [
            "Regular leak detection and repair programs",
            "Reducing system capacity",
            "Increasing energy usage",
            "Increasing water demand",
        ],
        correctAnswer: "Regular leak detection and repair programs",
    },
    {
        type: "text",
        question: "Why is reliability important in a Water Supply System?",
        options: [
            "It ensures the system can consistently meet water demand",
            "It increases the system's complexity",
            "It reduces the need for energy",
            "It decreases water consumption",
        ],
        correctAnswer: "It ensures the system can consistently meet water demand",
    },
    {
        type: "text",
        question: "What is one of the cost-saving benefits of value engineering in a Water Supply System design?",
        options: [
            "Increased upfront costs",
            "Finding alternatives that maintain performance at lower costs",
            "Reduced system reliability",
            "Increased water loss",
        ],
        correctAnswer: "Finding alternatives that maintain performance at lower costs",
    },
    {
        type: "text",
        question: "How does efficient resource allocation contribute to minimizing costs in a WSS project?",
        options: [
            "By increasing the number of personnel required",
            "By ensuring that materials and labor are used optimally without waste",
            "By reducing the overall water supply",
            "By increasing the complexity of the project",
        ],
        correctAnswer: "By ensuring that materials and labor are used optimally without waste",
    },
    {
        type: "text",
        question: "What is one of the outcomes of effective supply chain management in a Water Supply System?",
        options: [
            "Increased project delays",
            "Cost savings through better sourcing and timely delivery",
            "Reduced system reliability",
            "Higher energy consumption",
        ],
        correctAnswer: "Cost savings through better sourcing and timely delivery",
    },
    {
        type: "text",
        question: "Which design objective is focused on ensuring that a Water Supply System can recover quickly from disasters or failures?",
        options: [
            "Safety",
            "Reliability",
            "Resilience",
            "Water loss minimization",
        ],
        correctAnswer: "Resilience",
    },
    {
        type: "text",
        question: "What is one safety concern in Water Supply System design?",
        options: [
            "The use of hazardous materials",
            "Ensuring safe water quality for public health",
            "Reducing system efficiency",
            "Increasing water supply pressure",
        ],
        correctAnswer: "Ensuring safe water quality for public health",
    },
    {
        type: "text",
        question: "Why is lifecycle cost analysis essential in designing a Water Supply System?",
        options: [
            "It allows designers to focus only on upfront costs",
            "It helps balance initial expenses with long-term maintenance and operational costs",
            "It eliminates the need for risk management",
            "It reduces the lifespan of system components",
        ],
        correctAnswer: "It helps balance initial expenses with long-term maintenance and operational costs",
    },
];


// Stage 3 - Building the Infrastructure
const getQuestionsForStage3 = (): Question[] => [
    // {
    //     type: "text",
    //     question: "Which project management methodology focuses on continuous improvement and customer satisfaction across all project processes?",
    //     options: [
    //         "Six Sigma",
    //         "Total Quality Management (TQM)",
    //         "ISO 9001 Standards",
    //         "Building Information Modeling (BIM)",
    //     ],
    //     correctAnswer: "Total Quality Management (TQM)",
    // },
    {
        type: "text",
        question: "Which construction practice focuses on reducing waste and maximizing value by improving the efficiency of project resources?",
        options: [
            "Lean Construction",
            "Earned Value Management (EVM)",
            "Integrated Project Delivery (IPD)",
            "Total Quality Management (TQM)",
        ],
        correctAnswer: "Lean Construction",
    },
    {
        type: "text",
        question: "What does the Integrated Project Delivery (IPD) approach emphasize in urban construction projects?",
        options: [
            "Maximizing budget and profit",
            "Collaboration among all key project stakeholders",
            "Minimizing project size",
            "Reducing stakeholder involvement",
        ],
        correctAnswer: "Collaboration among all key project stakeholders",
    },
    {
        type: "text",
        question: "What is the purpose of risk management in urban construction projects?",
        options: [
            "To avoid any form of collaboration among stakeholders",
            "To identify and mitigate potential risks that could affect project delivery",
            "To increase the overall cost of the project",
            "To ensure all decisions are made by a single stakeholder",
        ],
        correctAnswer: "To identify and mitigate potential risks that could affect project delivery",
    },
    {
        type: "text",
        question: "Which of the following techniques helps construction teams improve efficiency by controlling waste and delays?",
        options: [
            "Building Information Modeling (BIM)",
            "Lean Construction",
            "Six Sigma",
            "Program Evaluation and Review Technique (PERT)",
        ],
        correctAnswer: "Lean Construction",
    },
    {
        type: "text",
        question: "What does the concept of waste minimization in Lean Construction primarily aim to achieve?",
        options: [
            "Improved financial outcomes",
            "Faster project completion with fewer resources",
            "Reduced quality control measures",
            "Higher stakeholder involvement",
        ],
        correctAnswer: "Faster project completion with fewer resources",
    },
    {
        type: "text",
        question: "How can risk management practices help urban construction projects?",
        options: [
            "By increasing construction delays",
            "By anticipating potential risks and mitigating their impact",
            "By focusing only on financial risks",
            "By reducing the quality of materials used",
        ],
        correctAnswer: "By anticipating potential risks and mitigating their impact",
    },
    {
        type: "text",
        question: "Which methodology is used to enhance collaboration among all stakeholders involved in a construction project?",
        options: [
            "Risk Management",
            "Lean Construction",
            "Integrated Project Delivery (IPD)",
            "Earned Value Management (EVM)",
        ],
        correctAnswer: "Integrated Project Delivery (IPD)",
    },
    {
        type: "text",
        question: "What is the primary goal of Total Quality Management (TQM) in construction projects?",
        options: [
            "To minimize project costs by reducing quality",
            "To ensure continuous improvement and customer satisfaction",
            "To maximize project completion time",
            "To limit stakeholder involvement in decision-making",
        ],
        correctAnswer: "To ensure continuous improvement and customer satisfaction",
    },
    {
        type: "text",
        question: "How does Lean Construction contribute to a project’s success?",
        options: [
            "By focusing solely on minimizing costs",
            "By eliminating unnecessary processes and ensuring smoother project flow",
            "By increasing project complexity",
            "By delaying decision-making to avoid risks",
        ],
        correctAnswer: "By eliminating unnecessary processes and ensuring smoother project flow",
    },
    {
        type: "text",
        question: "Which method is used to improve construction project efficiency by identifying risks and implementing strategies to mitigate them?",
        options: [
            "Lean Construction",
            "Risk Management",
            "Integrated Project Delivery (IPD)",
            "Program Evaluation and Review Technique (PERT)",
        ],
        correctAnswer: "Risk Management",
    },
];


// Stage 4 - Water Treatment
const getQuestionsForStage4 = (): Question[] => [
    {
        type: "image",
        question: "Why is sodium chloride important for urban water systems?",
        options: [
            "To enhance water flow",
            "To improve taste",
            "To remove hardness from water",
            "To reduce sediment build-up",
        ],
        correctAnswer: "To remove hardness from water",
        imageUrl: "./imagequestions/watertreatment1.png",
    },
    {
        type: "image",
        question: "What happens to the beads after they adsorb pollutants?",
        options: [
            "They dissolve in water",
            "They are filtered out using a strainer",
            "They are collected using a magnet",
            "They remain in the water as residue",
        ],
        correctAnswer: "They are collected using a magnet",
        imageUrl: "./imagequestions/watertreatment2.png",
    },
    // {
    //   type: "text",
    //   question: "Why is raw water quality monitoring crucial at the treatment plant?",
    //   options: [
    //     "To detect taste and odour issues",
    //     "To assess physical, chemical, and biological characteristics of incoming water",
    //     "To measure water volume",
    //     "To manage the budget for chemical dosing",
    //   ],
    //   correctAnswer: "To assess physical, chemical, and biological characteristics of incoming water",
    // },
    {
        type: "text",
        question: "What is the main role of coagulation and flocculation in water treatment?",
        options: [
            "To adjust pH levels",
            "To neutralize harmful bacteria",
            "To remove suspended solids",
            "To balance the taste and odor of water",
        ],
        correctAnswer: "To remove suspended solids",
    },
    {
        type: "text",
        question: "What happens during the sedimentation and clarification process?",
        options: [
            "Water is disinfected",
            "Particles settle out and suspended solids are removed",
            "Water is filtered",
            "Chemical dosing is applied",
        ],
        correctAnswer: "Particles settle out and suspended solids are removed",
    },
    {
        type: "text",
        question: "Which of these is a common method for disinfection in treatment plants?",
        options: [
            "Adding chlorine, chloramine, or using UV light",
            "Filtering through sand",
            "Adjusting water temperature",
            "Adding organic compounds",
        ],
        correctAnswer: "Adding chlorine, chloramine, or using UV light",
    },
    {
      type: "text",
      question: "Why is pH control important in the treatment process?",
      options: [
        "To maintain the aesthetic qualities of water",
        "To optimize the effectiveness of coagulation, flocculation, and disinfection",
        "To reduce the need for chemical dosing",
        "To remove fine particles from the water",
      ],
      correctAnswer: "To optimize the effectiveness of coagulation, flocculation, and disinfection",
    },
    {
        type: "text",
        question: "What is the purpose of monitoring residual disinfectant levels in treated water?",
        options: [
            "To control taste and odor",
            "To ensure pathogens are effectively inactivated",
            "To remove heavy metals",
            "To control pH levels",
        ],
        correctAnswer: "To ensure pathogens are effectively inactivated",
    },
    {
        type: "text",
        question: "What type of issues do taste and odor control processes aim to address?",
        options: [
            "Excessive chlorine levels",
            "Harmful microorganisms",
            "Presence of Algae",
            "Filtration system clogging",
        ],
        correctAnswer: "Presence of Algae",
    },
    {
        type: "text",
        question: "Why is regular infrastructure maintenance important at treatment plants?",
        options: [
            "To reduce chemical usage",
            "To prevent contamination and ensure equipment functions properly",
            "To improve water flavour",
            "To reduce energy consumption",
        ],
        correctAnswer: "To prevent contamination and ensure equipment functions properly",
    },
    // {
    //     type: "text",
    //     question: "What are emerging contaminants, and why should they be monitored?",
    //     options: [
    //         "Old pollutants that have been removed from water",
    //         "Newly identified substances, like pharmaceuticals and chemicals, that pose new water quality concerns",
    //         "Substances that improve water taste",
    //         "Unsolicited substances found in the water supply",
    //     ],
    //     correctAnswer: "Newly identified substances, like pharmaceuticals and chemicals, that pose new water quality concerns",
    // },
    {
        type: "text",
        question: "What role does data management play in a treatment plant?",
        options: [
            "It helps monitor energy consumption",
            "It tracks water quality data and ensures compliance with regulatory standards",
            "It reduces the need for disinfection",
            "It automates chemical dosing",
        ],
        correctAnswer: "It tracks water quality data and ensures compliance with regulatory standards",
    },
];


// Stage 5 - Smart Water Networks
const getQuestionsForStage5 = (): Question[] => [
    {
        type: "image",
        question: "What is the purpose of Level Transmitters?",
        options: [
            "To control water pressure",
            "To measure the height of liquid in a tank",
            "To calculate rainfall speed",
            "To detect earthquakes",
        ],
        correctAnswer: "To measure the height of liquid in a tank",
        imageUrl: "./imagequestions/smartwaternetwork1.jpg",
    },
    {
        type: "image",
        question: "Why is the natural water body included in the water system?",
        options: [
            "To make the city look pretty",
            "To store and manage water naturally",
            "For entertainment purposes",
            "To prevent buildings from sinking",
        ],
        correctAnswer: "To store and manage water naturally",
        imageUrl: "./imagequestions/smartwaternetwork2.jpg",
    },
    // {
    //   type: "text",
    //   question: "What is a District Metered Area (DMA) used for in a water distribution system?",
    //   options: [
    //     "To measure the temperature of water",
    //     "To monitor and control leakage in a specific area",
    //     "To increase water pressure",
    //     "To distribute bills to customers",
    //   ],
    //   correctAnswer: "To monitor and control leakage in a specific area",
    // },
    {
        type: "text",
        question: "What is the purpose of the boundary valves in a DMA?",
        options: [
            "To improve water quality",
            "To control water flow and prevent leakage",
            "To measure customer water usage",
            "To increase water supply during peak hours",
        ],
        correctAnswer: "To control water flow and prevent leakage",
    },
    {
        type: "text",
        question: "In a DMA, what does the Total DMA Inflow represent?",
        options: [
            "Total water treated in the system",
            "Total water consumed by customers",
            "Total volume of water entering the DMA through flow meters",
            "Total water lost in leaks",
        ],
        correctAnswer: "Total volume of water entering the DMA through flow meters",
    },
    // {
    //   type: "text",
    //   question: "How does a Pressure Management Area (PMA) help the water utility?",
    //   options: [
    //     "By increasing water flow to customers",
    //     "By ensuring optimal water pressure in the distribution system",
    //     "By reducing water prices",
    //     "By tracking water quality in real-time",
    //   ],
    //   correctAnswer: "By ensuring optimal water pressure in the distribution system",
    // },
    {
        type: "text",
        question: "Which of the following devices can be used for remotely collecting water usage data in a Smart Water Network?",
        options: [
            "Flow meters",
            "AMR systems",
            "Pressure-reducing valves (PRVs)",
            "Hydraulic models",
        ],
        correctAnswer: "AMR systems",
    },
    {
        type: "text",
        question: "What is the primary function of SCADA in a Smart Water Network?",
        options: [
            "To track customer complaints",
            "To monitor and control the water distribution system remotely",
            "To manage billing systems",
            "To collect demographic data",
        ],
        correctAnswer: "To monitor and control the water distribution system remotely",
    },
    {
        type: "text",
        question: "Why are flow meters important in a Smart Water Network?",
        options: [
            "To reduce water pressure",
            "To measure the amount of water entering and leaving a DMA",
            "To clean the water",
            "To record customer complaints",
        ],
        correctAnswer: "To measure the amount of water entering and leaving a DMA",
    },
    {
        type: "text",
        question: "How does AMI (Advanced Metering Infrastructure) improve water utility operations?",
        options: [
            "By measuring water pressure",
            "By providing real-time usage data to the utility and customers",
            "By improving water treatment efficiency",
            "By reducing customer meter readings",
        ],
        correctAnswer: "By providing real-time usage data to the utility and customers",
    },
    {
        type: "text",
        question: "Which system helps detect leaks and other issues in a water distribution network by providing detailed monitoring?",
        options: [
            "GIS mapping system",
            "AMR system",
            "SCADA system",
            "All of the above",
        ],
        correctAnswer: "All of the above",
    },
    {
        type: "text",
        question: "What is the main benefit of using GIS in conjunction with SCADA in a water distribution system?",
        options: [
            "To optimize water pressure",
            "To track leakage locations and water quality events",
            "To monitor customer billing",
            "To measure water flow in real-time",
        ],
        correctAnswer: "To track leakage locations and water quality events",
    },
];


// Stage 6 - Metering, Billing, and Collection
const getQuestionsForStage6 = (): Question[] => [
    {
        type: "text",
        question: "What is the purpose of developing a program to estimate consumption in cases where metering issues exist?",
        options: [
            "To avoid overcharging consumers",
            "To provide rough estimates of water usage when meters are not functioning",
            "To reduce the complexity of the metering process",
            "To prevent water leakage",
        ],
        correctAnswer: "To provide rough estimates of water usage when meters are not functioning",
    },
    {
        type: "text",
        question: "Why is it important to ensure that all consumer meters are in easily approachable locations?",
        options: [
            "To increase the water pressure at the meter location",
            "To simplify the meter reading and maintenance process",
            "To reduce the overall cost of water production",
            "To prevent consumers from tampering with the meters",
        ],
        correctAnswer: "To simplify the meter reading and maintenance process",
    },
    {
        type: "text",
        question: "Which type of water meter uses the Doppler effect to measure water flow velocity?",
        options: [
            "Electromagnetic meter",
            "Ultrasonic meter (Doppler type)",
            "Single-Jet meter",
            "Mechanical meter",
        ],
        correctAnswer: "Ultrasonic meter (Doppler type)",
    },
    {
        type: "text",
        question: "What does AMR stand for in the context of water metering?",
        options: [
            "Automated Meter Reading",
            "Annual Meter Regulation",
            "Advanced Meter Repair",
            "Automated Management of Resources",
        ],
        correctAnswer: "Automated Meter Reading",
    },
    {
        type: "text",
        question: "Which of the following is a feature of Automated Meter Reading (AMR) water meters?",
        options: [
            "They require manual meter readings by consumers",
            "They can transmit data automatically through radio frequency or GSM",
            "They do not require any maintenance once installed",
            "They are only useful for detecting leaks",
        ],
        correctAnswer: "They can transmit data automatically through radio frequency or GSM",
    },
    {
        type: "text",
        question: "How can AMR systems improve the efficiency of meter reading?",
        options: [
            "By requiring no human intervention for data collection",
            "By allowing meter readings to be collected from large distances",
            "By reducing the cost of installing water meters",
            "By increasing the water supply capacity",
        ],
        correctAnswer: "By allowing meter readings to be collected from large distances",
    },
    {
        type: "text",
        question: "What is a common issue with mechanical water meters that may affect their accuracy?",
        options: [
            "They are too expensive to install",
            "They have no moving parts",
            "Their sensitivity decreases over time",
            "They can detect very small leaks",
        ],
        correctAnswer: "Their sensitivity decreases over time",
    },
    {
        type: "text",
        question: "What is the benefit of using pulse output in AMR-compatible water meters?",
        options: [
            "It reduces water leakage",
            "It allows for wireless communication of readings",
            "It increases the water pressure in the system",
            "It helps in calculating water consumption more accurately",
        ],
        correctAnswer: "It allows for wireless communication of readings",
    },
    {
        type: "text",
        question: "Which method is used in the 'Drive-By' AMR system for collecting meter readings?",
        options: [
            "Using a device that collects readings from meters as the vehicle moves along",
            "Having a technician manually read meters in every household",
            "Sending consumers monthly reports about their water usage",
            "Using drone technology to collect meter data",
        ],
        correctAnswer: "Using a device that collects readings from meters as the vehicle moves along",
    },
    {
        type: "text",
        question: "Why is accurate water meter reading crucial for water utilities?",
        options: [
            "To ensure fair billing and effective water resource management",
            "To increase the speed of water supply in urban areas",
            "To reduce the size of water pipelines needed",
            "To prevent the need for regular maintenance of meters",
        ],
        correctAnswer: "To ensure fair billing and effective water resource management",
    },
];


// Stage 7 - Non-Revenue Water Management
const getQuestionsForStage7 = (): Question[] => [
    {
        type: "text",
        question: "What is Non-Revenue Water (NRW)?",
        options: [
            "Water used for fire-fighting",
            "Water that does not generate revenue due to losses or unbilled usage",
            "Water used for recreational purposes",
            "Water imported from other utilities",
        ],
        correctAnswer: "Water that does not generate revenue due to losses or unbilled usage",
    },
    {
        type: "text",
        question: "Which of the following is a component of water losses?",
        options: [
            "Billed authorized consumption",
            "Leakage in pipelines",
            "Exported water",
            "Imported water",
        ],
        correctAnswer: "Leakage in pipelines",
    },
    {
        type: "text",
        question: "What is the role of a water balance in water supply management?",
        options: [
            "To record customer complaints",
            "To track all water entering and exiting the distribution system",
            "To increase water tariffs",
            "To install additional pipelines",
        ],
        correctAnswer: "To track all water entering and exiting the distribution system",
    },
    {
        type: "text",
        question: "What is the significance of flow meters in a DMA?",
        options: [
            "They detect customer consumption patterns",
            "They measure water inflow and outflow for leakage monitoring",
            "They improve water quality",
            "They prevent unauthorized connections",
        ],
        correctAnswer: "They measure water inflow and outflow for leakage monitoring",
    },
    {
        type: "text",
        question: "What does the term 'apparent losses' refer to?",
        options: [
            "Losses due to leakage in pipelines",
            "Losses caused by inaccurate meter readings and unauthorized consumption",
            "Losses during water treatment",
            "Losses during export to other utilities",
        ],
        correctAnswer: "Losses caused by inaccurate meter readings and unauthorized consumption",
    },
    {
        type: "text",
        question: "Why is it important to close valves when forming a DMA?",
        options: [
            "To reduce water supply to consumers",
            "To isolate a specific area for better monitoring",
            "To increase water pressure in the network",
            "To prevent pipeline corrosion",
        ],
        correctAnswer: "To isolate a specific area for better monitoring",
    },
    {
        type: "text",
        question: "What do 'real losses' in a water distribution system primarily include?",
        options: [
            "Errors in data handling",
            "Leakage and overflow in pipelines and tanks",
            "Unbilled authorized consumption",
            "Unauthorized consumption",
        ],
        correctAnswer: "Leakage and overflow in pipelines and tanks",
    },
    {
        type: "text",
        question: "What is one key criterion for establishing a DMA?",
        options: [
            "Ground-level variations for stable pressure management",
            "Presence of large reservoirs",
            "High customer density",
            "Frequent consumer complaints",
        ],
        correctAnswer: "Ground-level variations for stable pressure management",
    },
    {
        type: "text",
        question: "What is the ultimate goal of water loss reduction strategies?",
        options: [
            "To improve the appearance of the water infrastructure",
            "To ensure sustainable water supply and reduce waste",
            "To eliminate all customer complaints",
            "To reduce the number of water connections",
        ],
        correctAnswer: "To ensure sustainable water supply and reduce waste",
    },
    {
        type: "text",
        question: "Which of the following is NOT a component of Non-Revenue Water (NRW)?",
        options: [
            "Real losses",
            "Apparent losses",
            "Billed authorized consumption",
            "Unbilled authorized consumption",
        ],
        correctAnswer: "Billed authorized consumption",
    },
];


// Stage 8 - Performance Assessment & Operational Excellence
const getQuestionsForStage8 = (): Question[] => [
    {
        type: "image",
        question: "Which simple office practice can help reduce the carbon footprint in a water utility office?",
        options: [
            "Leaving computers on overnight",
            "Using energy-efficient lighting and turning off unused equipment",
            "Printing documents instead of emailing",
            "Increasing air conditioning usage"
        ],
        correctAnswer: "Using energy-efficient lighting and turning off unused equipment",
        imageUrl: "./imagequestions/performanceassessment.png",
    },
    {
        type: "text",
        question: "What is one key factor that performance assessment helps to ensure in a water supply system?",
        options: [
            "High customer complaints",
            "Smooth operation and uninterrupted service",
            "Increased water treatment costs",
            "Reduced water pressure",
        ],
        correctAnswer: "Smooth operation and uninterrupted service",
    },
    // {
    //     type: "text",
    //     question: "Why is customer communication important in a water supply system?",
    //     options: [
    //         "To reduce operational costs",
    //         "To keep customers informed about water quality, service interruptions, and conservation measures",
    //         "To increase energy consumption",
    //         "To ignore customer feedback",
    //     ],
    //     correctAnswer: "To keep customers informed about water quality, service interruptions, and conservation measures",
    // },
    {
        type: "text",
        question: "Which of the following would NOT be part of the performance assessment for water supply systems?",
        options: [
            "Monitoring customer satisfaction levels",
            "Ensuring regulatory compliance for water quality",
            "Optimizing pump speed",
            "Assessing staff training programs",
        ],
        correctAnswer: "Optimizing pump speed",
    },
    {
        type: "text",
        question: "How does performance assessment help improve customer service in water supply systems?",
        options: [
            "By reducing water quality",
            "By identifying areas for improvement in response time and service delivery",
            "By increasing energy costs",
            "By ignoring customer feedback",
        ],
        correctAnswer: "By identifying areas for improvement in response time and service delivery",
    },
    {
        type: "text",
        question: "What is one of the main goals of performance assessment in urban water systems?",
        options: [
            "To increase water wastage",
            "To prevent service disruptions by identifying potential issues early",
            "To ignore customer complaints",
            "To cut down on staff communication",
        ],
        correctAnswer: "To prevent service disruptions by identifying potential issues early",
    },
    {
        type: "text",
        question: "How does effective maintenance contribute to a water supply system’s performance?",
        options: [
            "It increases the chances of service interruptions",
            "It helps maintain a continuous, reliable water supply by preventing equipment failures",
            "It raises operational costs significantly",
            "It reduces customer satisfaction",
        ],
        correctAnswer: "It helps maintain a continuous, reliable water supply by preventing equipment failures",
    },
    {
        type: "text",
        question: "What is the benefit of ensuring compliance with water quality regulations?",
        options: [
            "To ensure customer satisfaction and meet health standards",
            "To reduce energy consumption",
            "To minimize operational costs",
            "To prevent customer complaints",
        ],
        correctAnswer: "To ensure customer satisfaction and meet health standards",
    },
    {
        type: "text",
        question: "What does a performance assessment report help urban water staff to do?",
        options: [
            "Increase water treatment costs",
            "Identify areas that need improvement for more effective service delivery",
            "Ignore customer feedback",
            "Increase energy wastage",
        ],
        correctAnswer: "Identify areas that need improvement for more effective service delivery",
    },
    {
        type: "text",
        question: "How does monitoring water quality benefit the water supply system?",
        options: [
            "It prevents leaks in the distribution network",
            "It ensures water is safe for consumption and complies with health standards",
            "It increases energy costs",
            "It reduces customer satisfaction",
        ],
        correctAnswer: "It ensures water is safe for consumption and complies with health standards",
    },
    {
        type: "text",
        question: "Why is leak detection important in a water supply system?",
        options: [
            "To increase water loss",
            "To reduce energy consumption in the distribution system",
            "To improve customer satisfaction by reducing service interruptions",
            "To create unnecessary maintenance work",
        ],
        correctAnswer: "To improve customer satisfaction by reducing service interruptions",
    },
];


// Generate stages for each set
export const nonEngineerSet2Stages: Stage[] = [
    { stageName: "Plan A Water Supply System", questions: getQuestionsForStage1() },
    { stageName: "Design the Water Supply System", questions: getQuestionsForStage2() },
    { stageName: "Building the Infrastructure", questions: getQuestionsForStage3() }, //5
    { stageName: "Water Treatment", questions: getQuestionsForStage4() }, //3
    { stageName: "Smart Water Networks", questions: getQuestionsForStage5() }, //7
    { stageName: "Metering, Billing, and Collection", questions: getQuestionsForStage6() }, //8
    { stageName: "Non-Revenue Water Management", questions: getQuestionsForStage7() }, //4
    { stageName: "Performance Assessment & Operational Excellence", questions: getQuestionsForStage8() } //6
];
