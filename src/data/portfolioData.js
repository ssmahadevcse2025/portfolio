export const portfolioData = {
  personalInfo: {
    name: "Shenbaga Maha Devan S",
    primaryIdentity: "Data Science & AI/ML Enthusiast",
    secondaryIdentity: "CSE Student | Data Analyst | Full-Stack Developer",
    tagline: "Turning Data into Insights. Building Intelligent Solutions.",
    positioning: "Computer Science & Engineering student passionate about Data Science, Artificial Intelligence, Machine Learning, Data Analysis, Data Visualization, and building real-world technology solutions.",
    email: "ssmahadev007@gmail.com",
    phone: "9488290875",
    location: "Tenkasi, Tamil Nadu, India",
    institution: "Chennai Institute of Technology",
    degree: "Bachelor of Engineering – Computer Science & Engineering",
    academicYears: "2025 – 2029",
    linkedin: "https://www.linkedin.com/in/shenbaga-maha-devan-s",
    github: "https://github.com/ssmahadevcse2025",
    leetcode: "https://leetcode.com/Ssmahadev_CSE_2529",
    resumeUrl: "/Shenbaga_maha_devan_S_Professional_Portfolio.pdf",
    shortDescription: "I am a Computer Science Engineering student passionate about Data Science, Artificial Intelligence, Data Analysis, Data Visualization, and software development. I enjoy learning emerging technologies and building real-world projects that solve practical problems."
  },

  aboutSummary: `I am a Computer Science Engineering student at Chennai Institute of Technology with a strong interest in Artificial Intelligence, Data Science, and software development. I am passionate about learning emerging technologies and building real-world projects that solve practical problems.

I continuously improve my skills in Python, web development, databases, AI technologies, data analysis, and visualization. I am interested in Data Science & AI, Full Stack and App Development, Agriculture-based Technology Solutions, Problem Solving, and Innovation.`,

  aboutHighlights: [
    { title: "Data Science", subtitle: "Data Analysis & Insights", icon: "FaChartBar" },
    { title: "AI / ML", subtitle: "Intelligent Solutions", icon: "FaBrain" },
    { title: "Data Visualization", subtitle: "Interactive Analytics", icon: "FaChartPie" },
    { title: "Development", subtitle: "Practical Applications", icon: "FaLaptopCode" }
  ],

  education: [
    {
      institution: "Chennai Institute of Technology",
      degree: "Bachelor of Engineering – Computer Science & Engineering",
      years: "2025 – 2029",
      status: "Currently Pursuing",
      details: "Focusing on core computer science, algorithm design, data analytics, artificial intelligence, machine learning, database management systems, and software engineering."
    },
    {
      institution: "VRC HSS School, Tenkasi",
      degree: "12th Grade — Science & Computer Stream",
      years: "Completed",
      status: "Completed",
      details: "Specialized in Mathematics, Physics, Chemistry, and Computer Science. Built foundational quantitative, logical, and programming problem-solving skills."
    }
  ],

  whatIDo: [
    {
      title: "Data Analysis",
      description: "Explore datasets, identify hidden patterns, clean raw metrics, and extract meaningful business insights.",
      icon: "FaSearch"
    },
    {
      title: "Machine Learning",
      description: "Build predictive and intelligent models using classification, regression, and clustering techniques.",
      icon: "FaCpu"
    },
    {
      title: "Data Visualization",
      description: "Transform complex data into intuitive, interactive dashboards and visual statistical reports.",
      icon: "FaChartLine"
    },
    {
      title: "Software Development",
      description: "Build practical, responsive web and application-based solutions using modern full-stack web technologies.",
      icon: "FaCode"
    }
  ],

  workflow: [
    { step: "01", name: "Problem", label: "Define Objectives", icon: "FaLightbulb" },
    { step: "02", name: "Data", label: "Collect & Ingest", icon: "FaDatabase" },
    { step: "03", name: "Cleaning", label: "Preprocess & Sanitize", icon: "FaBroom" },
    { step: "04", name: "Analysis", label: "EDA & Insights", icon: "FaChartBar" },
    { step: "05", name: "Model", label: "Train & Validate ML", icon: "FaBrain" },
    { step: "06", name: "Visualization", label: "Dashboards & Maps", icon: "FaEye" },
    { step: "07", name: "Solution", label: "Deploy Software", icon: "FaRocket" }
  ],

  skillCategories: [
    {
      category: "Programming",
      skills: ["Python", "C", "C++", "JavaScript", "HTML", "CSS"]
    },
    {
      category: "Data Science & AI/ML",
      skills: ["Pandas", "NumPy", "Scikit-learn", "TensorFlow", "Lightkurve", "Kaggle"]
    },
    {
      category: "Data Analysis",
      skills: ["Data Analysis", "Data Cleaning", "Exploratory Data Analysis (EDA)"]
    },
    {
      category: "Data Visualization",
      skills: ["Matplotlib", "Seaborn", "Plotly", "Folium"]
    },
    {
      category: "Database",
      skills: ["MySQL", "SQL", "MongoDB"]
    },
    {
      category: "Network Analysis",
      skills: ["NetworkX"]
    },
    {
      category: "Tools & Platforms",
      skills: ["VS Code", "Git", "GitHub", "Google Colab", "LeetCode"]
    }
  ],

  projects: [
    {
      id: "datahawks",
      title: "DataHawks – KSP Crime Analytics",
      category: "Data Science",
      categoryDisplay: "Data Science • AI • Analytics",
      description: "AI-powered crime analytics dashboard built to process and visualize Karnataka State Police crime datasets.",
      overview: "DataHawks is an intelligent analytics platform that analyzes spatial and temporal crime trends. It uses machine learning algorithms for crime prediction, hotspot identification, and interactive geographic density mapping.",
      problem: "Law enforcement decision-makers often struggle to identify crime patterns and high-risk hotspots manually from large unstructured incident records.",
      solution: "Developed an interactive Streamlit dashboard using Python, Scikit-learn, and Pandas to perform crime prediction, clustering, and automated hotspot detection.",
      features: [
        "Crime Prediction & Analytics",
        "Crime Hotspot Detection & Risk Mapping",
        "Spatial Clustering Algorithms",
        "Interactive Data Visualizations",
        "AI-Driven Crime & Safety Insights"
      ],
      technologies: ["Python", "Streamlit", "Scikit-learn", "Pandas", "Data Visualization"],
      liveUrl: "https://datahawks-crime-analytics-re48oyzfwpzcmznc7rxfgw.streamlit.app/",
      buttonText: "View Live Project ↗",
      featured: true
    },
    {
      id: "queue-cure",
      title: "Queue Cure – Healthcare Queue Management",
      category: "Full Stack",
      categoryDisplay: "Full Stack Development",
      description: "Healthcare queue management system for managing patients, doctors, appointments, and digital token tracking.",
      overview: "Queue Cure is a multi-user healthcare administration portal engineered to streamline outpatient hospital workflows. It eliminates physical crowding by managing digital appointment tokens and real-time doctor availability.",
      problem: "Unmanaged patient crowding and manual appointment scheduling lead to excessive wait times and operational inefficiency in medical clinics.",
      solution: "Built a full-stack web application using React, Node.js, Express, and MongoDB with real-time queue tracking, token generation, and doctor schedule dashboards.",
      features: [
        "Patient & Doctor Management Modules",
        "Appointment Scheduling & Token Issuance",
        "Real-Time Hospital Queue Tracking",
        "Live Appointment Status Monitoring",
        "Centralized Medical Staff Interface"
      ],
      technologies: ["React", "Node.js", "Express", "MongoDB"],
      liveUrl: "https://sparkling-heliotrope-509795.netlify.app/login",
      buttonText: "View Live Project ↗",
      featured: false
    },
    {
      id: "darshan-ai",
      title: "DarshanAI – Smart Temple AI Management System",
      category: "AI/ML",
      categoryDisplay: "AI • Smart Management",
      description: "AI-powered temple management platform designed to manage crowds, queues, facilities, and pilgrim services.",
      overview: "DarshanAI is an AI-driven smart venue management system built to manage mass crowds and pilgrim services at high-footfall religious destinations. It provides real-time crowd density metrics, automated queue flow monitoring, and emergency alerts.",
      problem: "Massive pilgrim crowds during festivals create high safety risks, queue bottlenecks, and facility management overhead without real-time tracking.",
      solution: "Created a centralized AI analytics dashboard connected with spatial maps, crowd density alert triggers, facility status monitors, and pilgrim service modules.",
      features: [
        "Crowd Density Monitoring & Analytics",
        "Queue Flow & Waiting Time Tracking",
        "Facility & Pilgrim Services Management",
        "Real-Time Security & Overflow Alerts",
        "Interactive Spatial Maps & Dashboards"
      ],
      technologies: ["AI", "Maps", "Real-Time Monitoring", "Dashboards"],
      liveUrl: "https://darshanai-frontend.onrender.com/dashboard",
      backendUrl: "https://darshanai-backend.onrender.com",
      buttonText: "View Live Dashboard ↗",
      featured: false
    }
  ],

  achievements: {
    platform: "LeetCode",
    username: "Ssmahadev_CSE_2529",
    solved: "440+ Problems Solved",
    badge: "100 Day Badge",
    url: "https://leetcode.com/Ssmahadev_CSE_2529",
    categories: [
      { label: "Data Structures", count: "180+" },
      { label: "Algorithms", count: "160+" },
      { label: "Arrays & Strings", count: "100+" }
    ]
  },

  certifications: [
    {
      title: "Python Beginner's Course",
      issuer: "Cisco Networking Academy",
      category: "Programming",
      verified: true
    },
    {
      title: "Data Fundamentals",
      issuer: "IBM SkillsBuild",
      category: "Data Science & AI",
      verified: true
    },
    {
      title: "MongoDB Basics for Students",
      issuer: "MongoDB",
      category: "Databases",
      verified: true
    },
    {
      title: "Data Science Learning",
      issuer: "Kaggle",
      category: "Data Science Platform",
      verified: true
    }
  ],

  currentlyExploring: [
    "Data Science",
    "Artificial Intelligence",
    "Machine Learning",
    "Data Visualization",
    "Full Stack Development",
    "Agriculture Technology",
    "Problem Solving",
    "Innovation"
  ]
};
