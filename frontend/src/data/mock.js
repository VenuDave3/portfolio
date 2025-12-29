// Mock data for Venu Dave's Portfolio
// Source of truth: Resume + Discovery answers

export const personalInfo = {
  name: "Venu Kunjesh Dave",
  title: "Software Development Engineer",
  tagline: "Software Engineer Who Ships Production-Grade AI Systems",
  subtagline: "Built an agentic NL-to-SQL assistant at Amazon that reduced data access time by 90%. MS CS @ Northeastern | 3.91 GPA",
  email: "venudave333@gmail.com",
  phone: "+1 (617)-963-4238",
  linkedin: "https://www.linkedin.com/in/dave-venu/",
  github: "https://github.com/VenuDave3",
  location: "Boston, MA",
  resumeUrl: "/resume.pdf",
  calendlyUrl: "https://calendly.com/venudave333",
  photo: "https://customer-assets.emergentagent.com/job_hire-me-dev-3/artifacts/w90y4hl5_IMG_1127.jpg"
};

export const impactHighlights = [
  {
    metric: "90%",
    description: "Reduction in data retrieval time via AI-powered automation",
    icon: "Zap"
  },
  {
    metric: "60%",
    description: "Improvement in LLM query reliability through prompt engineering",
    icon: "TrendingUp"
  },
  {
    metric: "60+",
    description: "Table schema pipeline with automated join detection",
    icon: "Database"
  },
  {
    metric: "E2E",
    description: "End-to-end ownership: design → implementation → delivery",
    icon: "Rocket"
  }
];

export const projects = [
  {
    id: "nl-to-sql",
    title: "AI-Powered NL-to-SQL Assistant",
    company: "Amazon",
    period: "May 2024 - Aug 2024",
    shortDescription: "Production-grade agentic system enabling engineers to self-serve database insights without SQL expertise.",
    problem: "Engineers across multiple teams spent days waiting for data analysts to write complex SQL queries, creating bottlenecks in decision-making and reducing team velocity.",
    approach: "Built an agentic natural-language-to-SQL assistant using LangChain + MCP servers with advanced prompt engineering techniques including few-shot prompting, chain-of-thought reasoning, and self-consistency checks.",
    architecture: [
      "Schema ingestion pipeline using Pydantic models for 60+ tables",
      "Automated join detection with cardinality mapping",
      "ReACT-based contextual reasoning with fallback/error recovery",
      "Self-healing loop for query validation and correction",
      "Modular agent workflows with state tracking between agents"
    ],
    impact: [
      "Reduced database query turnaround from days to minutes",
      "Improved LLM-generated query reliability by 60%",
      "Enabled non-SQL engineers to self-serve insights",
      "Piloted across multiple internal engineering teams"
    ],
    techStack: ["Python", "LangChain", "MCP Servers", "Pydantic", "AWS", "Prompt Engineering", "RAG"],
    learnings: "Production AI systems require robust error handling, fallback mechanisms, and continuous evaluation. The gap between demo and production is where engineering rigor matters most.",
    hasDemo: false,
    hasRepo: false,
    isInternal: true,
    featured: true
  },
  {
    id: "bookshelf-reader",
    title: "Bookshelf Reader AI",
    company: "Personal Project",
    period: "Sep 2024 - Nov 2024",
    shortDescription: "AI pipeline for bookshelf image detection and personalized book recommendations with 95% detection accuracy.",
    problem: "Readers struggle to organize their physical book collections and discover new books based on their existing library preferences.",
    approach: "Developed an end-to-end AI pipeline combining computer vision for book detection with NLP for semantic understanding and personalized recommendations.",
    architecture: [
      "Custom CNN neural networks for spine detection",
      "LLaMA 3.2 Vision models for text extraction",
      "BERT semantic embeddings for book understanding",
      "Recommendation engine based on reading patterns",
      "Streamlit interface for real-time scanning"
    ],
    impact: [
      "Achieved 95% book detection accuracy",
      "Real-time scanning and detection capability",
      "Context-aware personalized recommendations",
      "Reduced manual cataloging overhead significantly"
    ],
    techStack: ["PyTorch", "TensorFlow", "LLaMA 3.2", "BERT", "CNNs", "Streamlit", "Python"],
    learnings: "Combining multiple AI modalities (vision + NLP) requires careful pipeline design and consistent data flow between stages.",
    hasRepo: true,
    repoUrl: "https://github.com/VenuDave3/Bookshelf-Reader",
    featured: true
  },
  {
    id: "lms-prototype",
    title: "Full-Stack Learning Management System",
    company: "Personal Project",
    period: "Sep 2025 - Present",
    shortDescription: "Production-ready LMS prototype replicating Canvas functionality with complete auth, CRUD operations, and responsive UI.",
    problem: "Building a comprehensive understanding of full-stack development by tackling the complexity of a real-world LMS application.",
    approach: "Engineered a complete web application from scratch, focusing on clean architecture, proper state management, and production-ready patterns.",
    architecture: [
      "Next.js + React responsive client-side UI",
      "Redux Toolkit for complex state management",
      "Node.js + Express.js RESTful API",
      "MongoDB with Mongoose schemas and DAOs",
      "Complete auth & session management system"
    ],
    impact: [
      "Full CRUD operations for courses, modules, assignments, users",
      "Production-ready authentication flow",
      "Scalable architecture with separation of concerns",
      "Responsive design across all device sizes"
    ],
    techStack: ["Next.js", "React", "Redux Toolkit", "Node.js", "Express.js", "MongoDB", "Mongoose"],
    learnings: "Full-stack development requires careful API contract design and consistent data modeling between frontend and backend.",
    hasRepo: true,
    repoUrl: "https://github.com/VenuDave3/kambaz-next-js",
    repoUrlBackend: "https://github.com/VenuDave3/kambaz-node-server-app",
    featured: true
  },
  {
    id: "fake-news-detection",
    title: "Fake News Detection System",
    company: "Personal Project",
    period: "Aug 2024 - Sep 2024",
    shortDescription: "Deep learning models for fake news classification achieving 25% accuracy improvement over baseline.",
    problem: "Misinformation spreads rapidly online, and automated detection systems are critical for maintaining information integrity.",
    approach: "Built and trained deep learning models on 10,000+ news articles, focusing on feature engineering and model optimization.",
    architecture: [
      "RNN and LSTM architectures for sequence modeling",
      "Custom feature engineering strategies",
      "NLP preprocessing pipeline",
      "15+ visualizations for model analysis",
      "Hyperparameter tuning framework"
    ],
    impact: [
      "25% accuracy improvement over baseline models",
      "20% boost in data efficiency and model performance",
      "Reduced overfitting through careful regularization",
      "Comprehensive analysis with 15+ visualizations"
    ],
    techStack: ["Python", "TensorFlow", "LSTM", "RNN", "NLP", "Pandas", "NumPy"],
    learnings: "Feature engineering and careful data preprocessing often matter more than model architecture complexity.",
    hasDemo: false,
    hasRepo: true,
    repoUrl: "https://github.com/venudave/fake-news-detection",
    featured: false
  },
  {
    id: "stock-simulator",
    title: "Stock Market Investment Simulator",
    company: "Personal Project",
    period: "Jan 2024 - Apr 2024",
    shortDescription: "Java-based stock market simulator with dynamic portfolio management and real-time trend analysis.",
    problem: "New investors need a risk-free environment to practice investment strategies and understand market dynamics.",
    approach: "Developed a comprehensive simulator using MVC architecture with real market data integration via Alpha Vantage API.",
    architecture: [
      "MVC architecture for clean separation",
      "Alpha Vantage API integration for real data",
      "Java Swing UI for interactive experience",
      "Dynamic portfolio management system",
      "Stock trend analysis algorithms"
    ],
    impact: [
      "Processed 500+ transactions for strategy testing",
      "Real-world investment scenario simulation",
      "Interactive portfolio visualization",
      "Scalable architecture for future features"
    ],
    techStack: ["Java", "Java Swing", "Alpha Vantage API", "MVC Architecture"],
    learnings: "Clean architecture patterns like MVC significantly improve maintainability and make feature additions straightforward.",
    hasDemo: false,
    hasRepo: false,
    featured: false
  }
];

export const experience = [
  {
    company: "Amazon",
    role: "Software Development Engineer Intern",
    location: "New York, NY",
    period: "May 2024 - Aug 2024",
    type: "Internship",
    highlights: [
      "Reduced database query turnaround from days to minutes by building an AI-powered NL-to-SQL assistant",
      "Improved reliability of LLM-generated queries by 60% through advanced prompt engineering",
      "Streamlined complex schema access (60+ tables) by engineering a schema-ingestion pipeline",
      "Designed modular agent workflows using LangChain + MCP servers with production-ready reliability",
      "Owned end-to-end delivery while collaborating across teams on use cases",
      "Prototyped RAG extension with vector databases (FAISS, Pinecone)"
    ],
    techUsed: ["Python", "LangChain", "AWS", "Pydantic", "RAG", "FAISS", "Pinecone"]
  },
  {
    company: "Stackcodie",
    role: "Project-Based Intern",
    location: "India",
    period: "Feb 2023 - May 2023",
    type: "Internship",
    highlights: [
      "Delivered web application with 20% improvement in processing speed",
      "Increased code reliability by reducing reported bugs by ~15%",
      "Contributed to API design, testing, and deployment tasks"
    ],
    techUsed: ["Flask", "Python", "REST APIs"]
  },
  {
    company: "InfoLabz",
    role: "Data Science Intern",
    location: "India",
    period: "Jun 2022 - Jul 2022",
    type: "Internship",
    highlights: [
      "Improved data accuracy by cleaning and standardizing large datasets",
      "Reduced manual effort by ~30% through Python automation pipelines",
      "Contributed to 25% increase in project adoption through stakeholder dashboards"
    ],
    techUsed: ["Python", "Pandas", "SQL", "Data Visualization"]
  }
];

export const skills = {
  "Programming & Core CS": [
    "Python", "Java", "Scala", "JavaScript", "SQL", "C", "R",
    "Data Structures & Algorithms", "System Design", "Concurrency"
  ],
  "AI / ML & LLM Stack": [
    "PyTorch", "TensorFlow", "Keras", "Scikit-learn", "Hugging Face",
    "LangChain", "CrewAI", "Strands SDK", "Prompt Engineering",
    "RAG Systems", "Embeddings", "NLP (BERT, LLaMA, NLTK)"
  ],
  "Data Systems & Cloud": [
    "AWS (EC2, S3, IAM)", "Docker", "Kubernetes", "CI/CD",
    "MLflow", "Airflow", "SageMaker", "Vector DBs (FAISS, Pinecone, Weaviate)",
    "SQL Optimization", "NoSQL", "Schema Design"
  ],
  "Backend & Web Development": [
    "Flask", "Django", "REST APIs", "Next.js", "React",
    "Node.js", "Express.js", "MongoDB", "HTML5/CSS"
  ]
};

export const education = [
  {
    institution: "Northeastern University",
    location: "Boston, MA",
    degree: "Master of Science in Computer Science",
    period: "Jan 2024 - Dec 2025",
    gpa: "3.91/4.0",
    highlight: "Focus on AI/ML, Systems, and Software Engineering"
  },
  {
    institution: "Gujarat Technological University",
    location: "Gujarat, India",
    degree: "Bachelor of Technology in Computer Engineering",
    period: "Jul 2019 - Jun 2023",
    gpa: "9.51/10.0",
    highlight: "Strong foundation in CS fundamentals and engineering"
  }
];

export const navigationLinks = [
  { name: "Home", path: "/" },
  { name: "Projects", path: "/projects" },
  { name: "Experience", path: "/experience" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" }
];
