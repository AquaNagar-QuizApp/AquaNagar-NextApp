import { Stage, Question } from "@/types";

// Stage 1 - Plan a Water Supply System
const getQuestionsForStage1 = (): Question[] => [
    {
        type: "image",
        question: "What does the image suggest about using rainwater near homes?",
        options: [
            "It should be stored and reused",
            "It damages houses",
            "It makes gardens dry",
            "It increases pollution",
        ],
        correctAnswer: "It should be stored and reused",
        imageUrl: "./imagequestions/planning.jpg",
    },
    {
        type: "text",
        question: "What is the primary goal of a long-term sustainable Water Supply System (WSS)?",
        options: [
            "Ensuring water availability and quality over the system’s life cycle",
            "Reducing public involvement",
            "Limiting urban development",
            "Maximizing short-term gains",
        ],
        correctAnswer: "Ensuring water availability and quality over the system’s life cycle",
    },
    {
        type: "text",
        question: "Why is population growth projection essential for planning a WSS?",
        options: [
            "To understand future water needs",
            "To reduce operational costs",
            "To restrict urban migration",
            "To improve environmental impacts",
        ],
        correctAnswer: "To understand future water needs",
    },
    // {
    //     type: "text",
    //     question: "What role do stakeholders play in the planning phase of a WSS?",
    //     options: [
    //         "They design the construction plans.",
    //         "They provide local insights and influence development plans.",
    //         "They focus only on technical issues.",
    //         "They oversee water quality testing.",
    //     ],
    //     correctAnswer: "They provide local insights and influence development plans.",
    // },
    {
        type: "text",
        question: "Which factor is NOT typically considered in a water resource assessment?",
        options: [
            "Seasonal availability of water sources",
            "Per capita income of the population",
            "Sustainability of water extraction",
            "Legal and regulatory restrictions",
        ],
        correctAnswer: "Per capita income of the population",
    },
    {
        type: "text",
        question: "What is a key benefit of involving communities in the Environmental Impact Assessment process?",
        options: [
            "Simplifying regulatory requirements",
            "Addressing public concerns and gaining support for the project",
            "Reducing technical complexity",
            "Avoiding stakeholder criticism",
        ],
        correctAnswer: "Addressing public concerns and gaining support for the project",
    },
    {
        type: "text",
        question: "What is the significance of identifying risks such as climate change in water resource assessment?",
        options: [
            "To encourage rapid urbanization",
            "To develop strategies for sustainable water management",
            "To reduce project costs",
            "To increase reliance on groundwater",
        ],
        correctAnswer: "To develop strategies for sustainable water management",
    },
    {
        type: "text",
        question: "Why is a cost-benefit analysis critical in the WSS planning process?",
        options: [
            "To evaluate financial feasibility compared to environmental costs",
            "To determine the fastest project implementation strategy",
            "To simplify the monitoring process",
            "To maximize water tariffs",
        ],
        correctAnswer: "To evaluate financial feasibility compared to environmental costs",
    },
    {
        type: "text",
        question: "Which of the following is NOT a potential source of water for urban WSS?",
        options: [
            "Surface water",
            "Groundwater",
            "Rainwater harvesting",
            "Underground oil reserves",
        ],
        correctAnswer: "Underground oil reserves",
    },
    {
        type: "text",
        question: "How can urban water officials help ensure long-term sustainability of WSS operations?",
        options: [
            "By reducing public participation",
            "By prioritizing community engagement and efficient resource allocation",
            "By eliminating stakeholder input",
            "By avoiding environmental assessments",
        ],
        correctAnswer: "By prioritizing community engagement and efficient resource allocation",
    },
    {
        type: "text",
        question: "What is the purpose of creating a monitoring plan for WSS?",
        options: [
            "To ensure long-term compliance with environmental regulations",
            "To reduce the role of water operators",
            "To avoid accountability",
            "To minimize operational oversight",
        ],
        correctAnswer: "To ensure long-term compliance with environmental regulations",
    },
];


// Stage 2 - Design the Water Supply System
const getQuestionsForStage2 = (): Question[] => [
    {
        type: "text",
        question: "What is the main goal of minimizing costs in the design of a Water Supply System (WSS)?",
        options: [
            "To ensure the system remains affordable and financially sustainable",
            "To increase water supply capacity",
            "To ensure the system is aesthetically pleasing",
            "To maximize energy consumption",
        ],
        correctAnswer: "To ensure the system remains affordable and financially sustainable",
    },
    {
        type: "text",
        question: "How does standardization help in a Water Supply System project?",
        options: [
            "It increases the complexity of the system",
            "It reduces costs and improves system efficiency",
            "It decreases system capacity",
            "It reduces the lifespan of the system",
        ],
        correctAnswer: "It reduces costs and improves system efficiency",
    },
    {
        type: "text",
        question: "Why is it important to consider life cycle costs in a Water Supply System design?",
        options: [
            "To focus only on immediate expenses",
            "To consider both the initial and long-term operational and maintenance costs",
            "To increase operational complexity",
            "To reduce water quality",
        ],
        correctAnswer: "To consider both the initial and long-term operational and maintenance costs",
    },
    {
        type: "text",
        question: "What does resilience in a WSS design mean?",
        options: [
            "The ability to increase system complexity",
            "The capacity to handle unexpected events and disruptions",
            "The ability to reduce water demand",
            "The ability to minimize energy usage",
        ],
        correctAnswer: "The capacity to handle unexpected events and disruptions",
    },
    {
        type: "text",
        question: "Which of the following is a benefit of minimizing energy loss in a WSS?",
        options: [
            "Reduced energy costs and more sustainable operations",
            "Increased water supply reliability",
            "Reduced system capacity",
            "Increased water demand",
        ],
        correctAnswer: "Reduced energy costs and more sustainable operations",
    },
    {
        type: "text",
        question: "What is the main objective of minimizing water loss in a WSS?",
        options: [
            "To increase water supply",
            "To reduce water wastage and ensure efficient use",
            "To lower water prices",
            "To reduce system energy usage",
        ],
        correctAnswer: "To reduce water wastage and ensure efficient use",
    },
    {
        type: "text",
        question: "What is one of the safety considerations in designing a Water Supply System?",
        options: [
            "To ensure the water is safe to drink",
            "To prioritize aesthetic design over functionality",
            "To reduce the number of components used",
            "To reduce energy usage",
        ],
        correctAnswer: "To ensure the water is safe to drink",
    },
    {
        type: "text",
        question: "What does the concept of reliability refer to in a Water Supply System design?",
        options: [
            "The ability of the system to deliver water consistently without failure",
            "The aesthetics of the system",
            "The use of inexpensive materials",
            "The reduction of system size",
        ],
        correctAnswer: "The ability of the system to deliver water consistently without failure",
    },
    {
        type: "text",
        question: "Why is it essential to consider lifecycle costs rather than just upfront costs in WSS design?",
        options: [
            "It helps ensure that long-term operational and maintenance expenses are accounted for",
            "It allows for more expensive materials to be used",
            "It eliminates the need for ongoing maintenance",
            "It reduces the system's water supply capacity",
        ],
        correctAnswer: "It helps ensure that long-term operational and maintenance expenses are accounted for",
    },
    {
        type: "text",
        question: "Which strategy can help achieve cost savings in a Water Supply System design?",
        options: [
            "Reducing system capacity",
            "Standardizing components for easier procurement and maintenance",
            "Focusing on aesthetic designs",
            "Increasing water usage",
        ],
        correctAnswer: "Standardizing components for easier procurement and maintenance",
    },
];


// Stage 3 - Building the Infrastructure
const getQuestionsForStage3 = (): Question[] => [
    {
        type: "text",
        question: "What are the three crucial factors in planning and managing construction projects?",
        options: [
            "Labor, materials, and safety",
            "Time, cost, and quality",
            "Stakeholders, location, and budget",
            "Risk, regulations, and funding",
        ],
        correctAnswer: "Time, cost, and quality",
    },
    {
        type: "text",
        question: "What is the primary challenge in urban construction projects located in densely populated areas?",
        options: [
            "Lack of skilled labor",
            "High financial investments",
            "Logistical challenges and coordination",
            "Insufficient raw materials",
        ],
        correctAnswer: "Logistical challenges and coordination",
    },
    {
        type: "text",
        question: "Which technique is commonly used to optimize scheduling in construction projects?",
        options: [
            "Lean Construction",
            "Earned Value Management (EVM)",
            "Critical Path Method (CPM)",
            "Total Quality Management (TQM)",
        ],
        correctAnswer: "Critical Path Method (CPM)",
    },
    {
        type: "text",
        question: "What does Earned Value Management (EVM) help to monitor in a construction project?",
        options: [
            "Stakeholder communication",
            "Quality of materials",
            "Project expenditures and financial performance",
            "Labor efficiency",
        ],
        correctAnswer: "Project expenditures and financial performance",
    },
    {
        type: "text",
        question: "How does Lean Construction contribute to managing time, cost, and quality in projects?",
        options: [
            "By reducing waste and maximizing value",
            "By increasing the use of low-cost materials",
            "By accelerating project timelines",
            "By focusing solely on quality improvement",
        ],
        correctAnswer: "By reducing waste and maximizing value",
    },
    {
        type: "text",
        question: "What is the significance of stakeholder engagement in urban construction projects?",
        options: [
            "To reduce construction costs",
            "To ensure alignment of diverse interests and project buy-in",
            "To minimize regulatory requirements",
            "To focus on labor efficiency",
        ],
        correctAnswer: "To ensure alignment of diverse interests and project buy-in",
    },
    {
        type: "text",
        question: 'What is the "project management triangle" in construction projects?',
        options: [
            "A method for calculating project duration",
            "The interdependence of time, cost, and quality",
            "A stakeholder communication strategy",
            "A budgeting tool for urban projects",
        ],
        correctAnswer: "The interdependence of time, cost, and quality",
    },
    {
        type: "text",
        question: "What could happen if a project timeline is accelerated without proper planning?",
        options: [
            "Improved project quality",
            "Decreased stakeholder involvement",
            "Increased costs and potential quality compromise",
            "Enhanced resource utilization",
        ],
        correctAnswer: "Increased costs and potential quality compromise",
    },
    {
        type: "text",
        question: "Which of the following methodologies focuses on collaboration among stakeholders from the beginning of a project?",
        options: [
            "Program Evaluation and Review Technique (PERT)",
            "Integrated Project Delivery (IPD)",
            "Six Sigma",
            "Life Cycle Cost Analysis (LCCA)",
        ],
        correctAnswer: "Integrated Project Delivery (IPD)",
    },
    {
        type: "text",
        question: "What is a critical component of risk management in urban construction projects?",
        options: [
            "Increasing labor resources",
            "Regularly updating building codes",
            "Identifying potential risks and implementing mitigation strategies",
            "Ensuring faster construction timelines",
        ],
        correctAnswer: "Identifying potential risks and implementing mitigation strategies",
    },
];


// Stage 4 - Water Treatment
const getQuestionsForStage4 = (): Question[] => [
    {
        type: "image",
        question: "What does NaCl (sodium chloride) commonly represent in water treatment?",
        options: [
            "Salt used for flavoring",
            "A chemical for softening water",
            "A water disinfectant",
            "A pH stabilizer",
        ],
        correctAnswer: "A chemical for softening water",
        imageUrl: "./imagequestions/watertreatment1.png",
    },
    {
        type: "image",
        question: "What is the purpose of the beads in this water treatment process?",
        options: [
            "To add minerals to the water",
            "To capture pollutants in the water",
            "To change the water’s pH",
            "To disinfect the water",
        ],
        correctAnswer: "To capture pollutants in the water",
        imageUrl: "./imagequestions/watertreatment2.png",
    },
    {
        type: "text",
        question: "What is the primary goal of source water assessment?",
        options: [
            "To locate new water treatment facilities",
            "To understand water quality and risks at the source",
            "To increase water consumption",
            "To reduce financial costs",
        ],
        correctAnswer: "To understand water quality and risks at the source",
    },
    // {
    //   type: "text",
    //   question: "Which of these physical parameters is a common indicator of water quality?",
    //   options: [
    //     "Odour",
    //     "Heavy metals",
    //     "Nutrient levels",
    //     "Pesticides",
    //   ],
    //   correctAnswer: "Odour",
    // },
    {
        type: "text",
        question: "What does eutrophication result from?",
        options: [
            "Lack of rainfall",
            "High levels of nutrients like nitrogen and phosphorus",
            "Overuse of groundwater",
            "Low biological activity",
        ],
        correctAnswer: "High levels of nutrients like nitrogen and phosphorus",
    },
    {
        type: "text",
        question: "Why is monitoring biological parameters important?",
        options: [
            "To assess oxygen levels in water",
            "To detect harmful microorganisms like bacteria and viruses",
            "To track chemical contamination",
            "To analyze soil erosion",
        ],
        correctAnswer: "To detect harmful microorganisms like bacteria and viruses",
    },
    {
        type: "text",
        question: "Which practice can help prevent contamination in watershed areas?",
        options: [
            "Intensive agricultural practices",
            "Implementing land use management practices",
            "Reducing water storage",
            "Increasing groundwater abstraction",
        ],
        correctAnswer: "Implementing land use management practices",
    },
    {
        type: "text",
        question: "How can communities help protect water sources?",
        options: [
            "By ignoring contamination risks",
            "By engaging in monitoring and protective measures",
            "By avoiding environmental regulations",
            "By using more industrial chemicals",
        ],
        correctAnswer: "By engaging in monitoring and protective measures",
    },
    {
        type: "text",
        question: "What is a key benefit of automated monitoring systems for water quality?",
        options: [
            "Eliminates the need for manual testing",
            "Provides real-time data on water conditions",
            "Reduces the cost of water distribution",
            "Ensures unlimited water supply",
        ],
        correctAnswer: "Provides real-time data on water conditions",
    },
    // {
    //   type: "text",
    //   question: "Why is storage capacity of aquifers important in the context of climate change?",
    //   options: [
    //     "To prevent rainfall",
    //     "To ensure a reliable water supply during periods of uncertainty",
    //     "To reduce treatment plant efficiency",
    //     "To eliminate the need for watershed management",
    //   ],
    //   correctAnswer: "To ensure a reliable water supply during periods of uncertainty",
    // },
    {
        type: "text",
        question: "What does source protection typically involve?",
        options: [
            "Reducing community involvement",
            "Developing zoning regulations and land use plans",
            "Increasing urbanization near water sources",
            "Removing natural vegetation",
        ],
        correctAnswer: "Developing zoning regulations and land use plans",
    },
    {
        type: "text",
        question: "What happens when over-abstraction of groundwater occurs?",
        options: [
            "Groundwater quality improves",
            "Aquifers recharge faster",
            "Pollutants or saline water may enter the aquifer",
            "Water storage capacity increases",
        ],
        correctAnswer: "Pollutants or saline water may enter the aquifer",
    },
];


// Stage 5 - Smart Water Networks
const getQuestionsForStage5 = (): Question[] => [
    {
        type: "image",
        question: "What does a Rain Gauge measure?",
        options: [
            "Wind speed",
            "Air pressure",
            "Amount of rainfall",
            "Water flow in pipes",
        ],
        correctAnswer: "Amount of rainfall",
        imageUrl: "./imagequestions/smartwaternetwork1.jpg",
    },
    {
        type: "image",
        question: "What do the blue pipelines in the image most likely carry?",
        options: [
            "Natural gas",
            "Freshwater and wastewater",
            "Air for ventilation",
            "Electricity",
        ],
        correctAnswer: "Freshwater and wastewater",
        imageUrl: "./imagequestions/smartwaternetwork2.jpg",
    },
    {
        type: "text",
        question: "What is one of the key objectives of a Smart Water Network (SWAN)?",
        options: [
            "To eliminate customer service centers",
            "To reduce water losses and ensure continuous supply",
            "To increase water treatment costs",
            "To increase the frequency of service interruptions",
        ],
        correctAnswer: "To reduce water losses and ensure continuous supply",
    },
    {
        type: "text",
        question: "Which of the following components is part of the 'Sensing and Control' layer in a Smart Water Network?",
        options: [
            "Water treatment plants",
            "Automatic meter reading (AMR) systems",
            "Reservoirs and storage tanks",
            "Customer billing systems",
        ],
        correctAnswer: "Automatic meter reading (AMR) systems",
    },
    // {
    //   type: "text",
    //   question: "What role does the 'Collection and Communication' layer of SWAN play?",
    //   options: [
    //     "It manages data analytics",
    //     "It aggregates and processes data for decision-making",
    //     "It transmits information from sensors to the upper layers for analysis",
    //     "It measures water flow and pressure",
    //   ],
    //   correctAnswer: "It transmits information from sensors to the upper layers for analysis",
    // },
    {
        type: "text",
        question: "What is the role of SCADA systems in a Smart Water Network?",
        options: [
            "To store water",
            "To monitor and manage network performance remotely",
            "To increase energy consumption",
            "To maintain physical infrastructure",
        ],
        correctAnswer: "To monitor and manage network performance remotely",
    },
    // {
    //   type: "text",
    //   question: "Why is the rehabilitation of old distribution pipelines important in a Smart Water Network?",
    //   options: [
    //     "To increase water leakage",
    //     "To reduce water losses and improve service delivery",
    //     "To increase water wastage",
    //     "To increase contamination in water supply",
    //   ],
    //   correctAnswer: "To reduce water losses and improve service delivery",
    // },
    {
        type: "text",
        question: "What does NRW (Non-Revenue Water) reduction help achieve in a Smart Water Network?",
        options: [
            "Increase water wastage",
            "Minimize the unaccounted water losses",
            "Reduce customer satisfaction",
            "Decrease the amount of water treated",
        ],
        correctAnswer: "Minimize the unaccounted water losses",
    },
    {
        type: "text",
        question: "How does a Smart Water Network help in meeting future water demand?",
        options: [
            "By increasing the cost of water",
            "By improving water supply efficiency and replacing aging infrastructure",
            "By reducing water supply quality",
            "By limiting water distribution to only large consumers",
        ],
        correctAnswer: "By improving water supply efficiency and replacing aging infrastructure",
    },
    {
        type: "text",
        question: "Which of the following is a benefit of using real-time data in a Smart Water Network?",
        options: [
            "Increased water contamination",
            "Improved leak detection and reduced response time",
            "Increased water wastage",
            "Reduced customer feedback",
        ],
        correctAnswer: "Improved leak detection and reduced response time",
    },
    {
        type: "text",
        question: "What can be managed remotely in a Smart Water Network to ensure effective operation?",
        options: [
            "Customer complaints",
            "Real-time water quality and distribution parameters",
            "Billing statements",
            "Pump station staff schedules",
        ],
        correctAnswer: "Real-time water quality and distribution parameters",
    },
    {
        type: "text",
        question: "How does a Smart Water Network contribute to customer satisfaction?",
        options: [
            "By increasing service interruptions",
            "By ensuring continuous and efficient water supply with minimal disruptions",
            "By reducing the amount of water delivered",
            "By ignoring water quality standards",
        ],
        correctAnswer: "By ensuring continuous and efficient water supply with minimal disruptions",
    },
];


// Stage 6 - Metering, Billing, and Collection
const getQuestionsForStage6 = (): Question[] => [
    {
        type: "text",
        question: "What is the purpose of using a water meter in urban areas?",
        options: [
            "To detect water leaks",
            "To charge consumers based on water consumption",
            "To increase water supply",
            "To regulate water flow in pipelines",
        ],
        correctAnswer: "To charge consumers based on water consumption",
    },
    {
        type: "text",
        question: "What is the benefit of switching from flat-rate billing to volumetric-based billing in water services?",
        options: [
            "Uniform pricing for all consumers",
            "Encouragement of water conservation and fair billing",
            "Increased water consumption",
            "Reduced system monitoring",
        ],
        correctAnswer: "Encouragement of water conservation and fair billing",
    },
    {
        type: "text",
        question: "Which technology is commonly used to monitor water flow and consumption in smart water meters?",
        options: [
            "Radio frequency",
            "Ultrasonic or electromagnetic sensors",
            "Manual readings",
            "Water pumps",
        ],
        correctAnswer: "Ultrasonic or electromagnetic sensors",
    },
    {
        type: "text",
        question: "Why is it important for a water utility to maintain accurate billing systems?",
        options: [
            "To improve customer satisfaction and financial sustainability",
            "To increase the complexity of the billing process",
            "To reduce water usage",
            "To increase infrastructure costs",
        ],
        correctAnswer: "To improve customer satisfaction and financial sustainability",
    },
    {
        type: "text",
        question: "What challenge may affect water metering in some areas?",
        options: [
            "Easy access to communication technology",
            "Political resistance to metering implementation",
            "Lack of interest in water conservation",
            "Overuse of water by consumers",
        ],
        correctAnswer: "Political resistance to metering implementation",
    },
    {
        type: "text",
        question: "What role do consumer meters play in water management?",
        options: [
            "They measure the total water supply to a city",
            "They monitor household water usage for billing purposes",
            "They regulate the pressure in the water system",
            "They detect illegal connections",
        ],
        correctAnswer: "They monitor household water usage for billing purposes",
    },
    {
        type: "text",
        question: "Which factor contributes to water wastage in urban water systems?",
        options: [
            "Accurate billing",
            "Increased water supply to consumers",
            "Lack of meter readings and billing errors",
            "Proper leak detection systems",
        ],
        correctAnswer: "Lack of meter readings and billing errors",
    },
    {
        type: "text",
        question: "What is one of the key objectives of smart water metering in urban areas?",
        options: [
            "To increase water usage",
            "To reduce the costs of water extraction",
            "To collect data for efficient water management and conservation",
            "To increase the number of water sources",
        ],
        correctAnswer: "To collect data for efficient water management and conservation",
    },
    {
        type: "text",
        question: "What is a common obstacle in implementing water metering systems in urban areas?",
        options: [
            "High energy costs for water supply",
            "Lack of consumer awareness about billing",
            "Insufficient technology infrastructure",
            "Increased water availability",
        ],
        correctAnswer: "Insufficient technology infrastructure",
    },
    {
        type: "text",
        question: "How do smart water meters assist consumers in managing their water usage?",
        options: [
            "By notifying them of usage trends and potential leaks",
            "By reducing water pressure",
            "By increasing their water bills",
            "By controlling their water supply automatically",
        ],
        correctAnswer: "By notifying them of usage trends and potential leaks",
    },
];


// Stage 7 - Non-Revenue Water Management
const getQuestionsForStage7 = (): Question[] => [
    {
        type: "text",
        question: "What is the primary aim of the Har Gar Nal Yojana under the Jal Jeevan Mission?",
        options: [
            "Provide free water connections",
            "Reduce non-revenue water to below 20%",
            "Increase water tariffs",
            "Establish new water sources",
        ],
        correctAnswer: "Reduce non-revenue water to below 20%",
    },
    {
        type: "text",
        question: "Which of the following is NOT considered a factor contributing to Non-Revenue Water?",
        options: [
            "Physical water losses",
            "Commercial losses",
            "Unbilled authorized consumption",
            "New pipeline installation",
        ],
        correctAnswer: "New pipeline installation",
    },
    {
        type: "text",
        question: "Why is it important to reduce Non-Revenue Water (NRW) in urban water systems?",
        options: [
            "To save on water tariffs",
            "To improve service delivery and consumer satisfaction",
            "To increase the number of water connections",
            "To decrease the operational costs of utilities",
        ],
        correctAnswer: "To improve service delivery and consumer satisfaction",
    },
    {
        type: "text",
        question: "What does the term 'unbilled authorized consumption' include?",
        options: [
            "Water used for firefighting and operational purposes",
            "Water lost due to leakage",
            "Water consumed by unauthorized users",
            "Water supplied for free to consumers",
        ],
        correctAnswer: "Water used for firefighting and operational purposes",
    },
    {
        type: "text",
        question: "What role does GIS-based asset mapping play in water distribution management?",
        options: [
            "Reduces the cost of water production",
            "Helps in detecting leakage hotspots",
            "Increases water tariffs",
            "Provides a new water supply source",
        ],
        correctAnswer: "Helps in detecting leakage hotspots",
    },
    {
        type: "text",
        question: "What percentage of NRW is considered acceptable as per the guidelines by CPHEEO?",
        options: [
            "10%",
            "20%",
            "30%",
            "40%",
        ],
        correctAnswer: "20%",
    },
    {
        type: "text",
        question: "Which of the following is a significant benefit of improving NRW management?",
        options: [
            "Reducing capital expenditure on new water sources",
            "Increasing water consumption rates",
            "Expanding water distribution systems unnecessarily",
            "Wasting more water resources",
        ],
        correctAnswer: "Reducing capital expenditure on new water sources",
    },
    {
        type: "text",
        question: "What is the primary focus of leak detection in urban water systems?",
        options: [
            "Reducing the water tariff for consumers",
            "Identifying and repairing leaks to reduce water losses",
            "Increasing the flow rate of water pipelines",
            "Installing more water meters",
        ],
        correctAnswer: "Identifying and repairing leaks to reduce water losses",
    },
    {
        type: "text",
        question: "What can be a direct consequence of not reducing NRW in urban water systems?",
        options: [
            "Improvement in revenue generation",
            "Increased consumer satisfaction",
            "Higher operational costs and wasteful resource use",
            "Higher water pressure for consumers",
        ],
        correctAnswer: "Higher operational costs and wasteful resource use",
    },
    {
        type: "text",
        question: "Why is monitoring and maintaining water supply pressure important in reducing NRW?",
        options: [
            "To increase water wastage",
            "To ensure equitable supply and reduce losses due to leaks",
            "To reduce the cost of water production",
            "To increase revenue through metering",
        ],
        correctAnswer: "To ensure equitable supply and reduce losses due to leaks",
    },
];


// Stage 8 - Performance Assessment & Operational Excellence
const getQuestionsForStage8 = (): Question[] => [
    {
        type: "image",
        question: "What does the term “carbon footprint” refer to in water management?",
        options: [
            "The amount of water wasted during distribution",
            "The total greenhouse gases produced during water treatment and supply",
            "The size of the water pipelines",
            "The number of people using water services"
        ],
        correctAnswer: "The total greenhouse gases produced during water treatment and supply",
        imageUrl: "./imagequestions/performanceassessment.png",
    },
    {
        type: "text",
        question: "What does performance assessment in a water supply system primarily aim to ensure?",
        options: [
            "Minimizing operational downtime and interruptions",
            "Increasing energy consumption",
            "Raising customer complaints",
            "Decreasing water quality",
        ],
        correctAnswer: "Minimizing operational downtime and interruptions",
    },
    {
        type: "text",
        question: "Which of the following factors is monitored during performance assessment to ensure water quality?",
        options: [
            "Pump speed",
            "Compliance with health and regulatory standards",
            "Frequency of customer complaints",
            "Energy cost management",
        ],
        correctAnswer: "Compliance with health and regulatory standards",
    },
    {
        type: "text",
        question: "What role does infrastructure maintenance play in water supply system performance?",
        options: [
            "Ensures continuous operation by preventing leaks and bursts",
            "Increases water wastage",
            "Limits customer engagement",
            "Decreases system reliability",
        ],
        correctAnswer: "Ensures continuous operation by preventing leaks and bursts",
    },
    // {
    //   type: "text",
    //   question: "How can regular performance assessments benefit the water supply system in the midterm?",
    //   options: [
    //     "By aligning performance with existing infrastructure upgrades",
    //     "By reducing customer service hours",
    //     "By ignoring equipment wear and tear",
    //     "By reducing the number of employees",
    //   ],
    //   correctAnswer: "By aligning performance with existing infrastructure upgrades",
    // },
    {
        type: "text",
        question: "Which of the following is NOT a common early warning sign for pump failure?",
        options: [
            "Decreased performance",
            "Unusual noises",
            "Increased energy consumption",
            "Increased water demand",
        ],
        correctAnswer: "Increased water demand",
    },
    {
        type: "text",
        question: "What is a benefit of having effective communication with customers in water supply systems?",
        options: [
            "Timely notifications about water quality, service interruptions, and conservation measures",
            "Increased customer complaints",
            "Reduced operational efficiency",
            "Inaccurate billing processes",
        ],
        correctAnswer: "Timely notifications about water quality, service interruptions, and conservation measures",
    },
    {
        type: "text",
        question: "Why is proper maintenance of pumps crucial in the performance of a water supply system?",
        options: [
            "To ensure the pumps operate efficiently and meet demand",
            "To increase the cost of operation",
            "To reduce customer satisfaction",
            "To eliminate energy use",
        ],
        correctAnswer: "To ensure the pumps operate efficiently and meet demand",
    },
    {
        type: "text",
        question: "What is one of the key factors that affect the performance of pumps in water supply systems?",
        options: [
            "Water quality",
            "Customer feedback",
            "Marketing strategies",
            "Pump aesthetics",
        ],
        correctAnswer: "Water quality",
    },
    {
        type: "text",
        question: "What is a direct consequence of poor performance assessment practices in water supply systems?",
        options: [
            "Increased risk of service disruptions and breakdowns",
            "Decreased customer service",
            "Better energy efficiency",
            "Reduced revenue generation",
        ],
        correctAnswer: "Increased risk of service disruptions and breakdowns",
    },
    {
        type: "text",
        question: "What is one of the goals of performance assessments for pumps in water supply systems?",
        options: [
            "To predict potential issues before they lead to failure",
            "To increase the number of pumps in use",
            "To ignore minor faults to reduce maintenance costs",
            "To prevent customer engagement",
        ],
        correctAnswer: "To predict potential issues before they lead to failure",
    },
];



// Generate stages for each set
export const nonEngineerSet1Stages: Stage[] = [
    { stageName: "Plan a Water Supply System", questions: getQuestionsForStage1() },
    { stageName: "Design the Water Supply System", questions: getQuestionsForStage2() },
    { stageName: "Building the Infrastructure", questions: getQuestionsForStage3() }, //5
    { stageName: "Water Treatment", questions: getQuestionsForStage4() }, //3
    { stageName: "Smart Water Networks", questions: getQuestionsForStage5() }, //7
    { stageName: "Metering, Billing, and Collection", questions: getQuestionsForStage6() }, //8
    { stageName: "Non-Revenue Water Management", questions: getQuestionsForStage7() }, //4
    { stageName: "Performance Assessment & Operational Excellence", questions: getQuestionsForStage8() } //6
];
