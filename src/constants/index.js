const navLinks = [
    {
      name: "Projects",
      link: "#projects",
    },
    {
      name: "Overview",
      link: "#experience",
    },
    {
      name: "Skills",
      link: "#skills",
    },
    
  ];
  
  const words = [
    { text: "Ideas", imgPath: "/images/ideas.svg" },
    { text: "Concepts", imgPath: "/images/concepts.svg" },
    { text: "Designs", imgPath: "/images/designs.svg" },
    { text: "Code", imgPath: "/images/code.svg" },
    { text: "Ideas", imgPath: "/images/ideas.svg" },
    { text: "Concepts", imgPath: "/images/concepts.svg" },
    { text: "Designs", imgPath: "/images/designs.svg" },
    { text: "Code", imgPath: "/images/code.svg" },
  ];
  
  const counterItems = [
    { value: 24, suffix: "+", label: "Projects & Personal Builds" },
    { value: 4, suffix: "+", label: "Technologies Mastered" },
    { value: 3, suffix: "+", label: "Major Game Projects" },
    { value: 300, suffix: "+", label: "Hours of C++/Unreal Practice" },
  ];
  
  const logoIconsList = [ 
    {
      imgPath: "/images/logos/UE5.png",
    },
    {
      imgPath: "/images/logos/Unity.png",
    },
    {
      imgPath: "/images/logos/Blender.png",
    },
    {
      imgPath: "/images/logos/C++.png",
    },
    {
      imgPath: "/images/logos/Cs.png",
    },
    {
      imgPath: "/images/logos/Python.png",
    },
    {
      imgPath: "/images/logos/Git.png",
    },
    {
      imgPath: "/images/logos/Docker.png",
    },
    {
      imgPath: "/images/logos/Aws.png",
    },
    {
      imgPath: "/images/logos/MS-Office.png",
    },
    {
      imgPath: "/images/logos/NodeJS.png",
    },
    {
      imgPath: "/images/logos/GitLab.png",
    },
  ];
  
  const abilities = [
    {
      imgPath: "/images/seo.png",
      title: "Strong Foundational Skills",
      desc: "Solid understanding of core concepts with hands-on practice through projects and learning.",
    },
    {
      imgPath: "/images/chat.png",
      title: "Clear Communicator",
      desc: "Able to explain ideas clearly and collaborate effectively in team environments.",
    },
    {
      imgPath: "/images/time.png",
      title: "Self-Driven & Reliable",
      desc: "Capable of managing time well and staying committed to completing tasks independently.",
    },
  ];
  
  const techStackImgs = [
    {
      name: "React Developer",
      imgPath: "/images/logos/react.png",
    },
    {
      name: "Python Developer",
      imgPath: "/images/logos/python.svg",
    },
    {
      name: "Backend Developer",
      imgPath: "/images/logos/node.png",
    },
    {
      name: "Interactive Developer",
      imgPath: "/images/logos/three.png",
    },
    {
      name: "Project Manager",
      imgPath: "/images/logos/git.svg",
    },
  ];
  
  const techStackIcons = [
    {
      name: "Unreal Developer",
      modelPath: "/models/UE-Logo.glb",
      scale: 1.3,
      rotation: [0, 5, 0],
    },
    {
      name: "C++ Developer",
      modelPath: "/models/cpp.glb",
      scale: 0.09,
      rotation: [0, 0, 0],
    },
    {
      name: "Backend Developer",
      modelPath: "/models/node-transformed.glb",
      scale: 6,
      rotation: [0, -Math.PI / 2, 0],
    },
    {
      name: "Unity Developer",
      modelPath: "/models/unity.glb",
      scale: 0.9,
      rotation: [1.5, 2, 0],
    },
    {
      name: "Project Management",
      modelPath: "/models/git-svg-transformed.glb",
      scale: 0.05,
      rotation: [0, -Math.PI / 4, 0],
    },
  ];
  
  const expCards = [
    {
      review: "This project aims to predict whether a person has heart disease based on features such as age, sex, cholesterol level, resting blood pressure, and more. We use a combination of exploratory data analysis (EDA) and machine learning algorithms to evaluate the prediction accuracy.",
      imgPath: "/images/exp8.png",
      logoPath: "/images/logo4.png",
      title: "Python, ML – Heart Disease Prediction (Personal Project)",
      date: "April 2024 - April 2024",
      responsibilities: [
        "Developed a Random Forest classifier achieving 84.87% accuracy, with a precision of 0.85, recall of 0.84, and an F1-score of 0.84, effectively identifying heart disease risks.",
        "Preprocessed a dataset of 303 records by handling 5% missing values, normalizing 6 numerical features, and encoding 3 categorical variables, improving model reliability.",
        "Implemented feature importance analysis to identify key health indicators, improving model interpretability and decision-making.",
      ],
    },
    {
      review: "A survival game built using Unreal Engine 5, showcasing the core game logic and coding aspects. This project emphasizes C++ and Blueprint integration, with detailed explanations and a focus on game mechanics.",
      imgPath: "/images/exp4.png",
      logoPath: "/images/logo1.svg",
      title: "Unreal Engine, C++ – Fall Guy Survival (Personal Project)",
      date: "August 2024 - Present",
      responsibilities: [
        "Developed a modular save/load system in Unreal Engine using C++ to ensure persistent player progress and world state.",
        "Implemented a dynamic inventory system supporting collection, usage, and management of in-game items.",
        "Created an interactive gameplay framework for object interaction, resource harvesting, and environment mechanics.",
        "Optimized performance using procedural content generation and efficient resource management techniques.",
      ],
    },
    {
      review: "A 3D rendering engine built in C++ with matrix transformation capabilities, 3D model loading, camera controls, and lighting effects. The project features efficient triangle clipping, depth sorting, and vector mathematics implementations for smooth real-time rendering.",
      imgPath: "/images/exp8.png",
      logoPath: "/images/logo2.svg",
      title: "C++ – 3D Game Engine (Personal Project)",
      date: "August 2024 - September 2024",
      responsibilities: [
        "Developed a complete 3D rendering pipeline with matrix-based transformations, projection, and camera systems.",
        "Implemented efficient algorithms for triangle clipping, depth sorting, and lighting calculations.",
        "Created a custom vector math library with cross products, dot products, and matrix operations for 3D transformations.",
      ],
    },
    {
      review: "A RESTful API service for managing subscription data, built with Node.js, C++, and MongoDB. The project includes secure authentication, thorough testing, and performance optimizations to ensure reliable and scalable backend functionality.",
      imgPath: "/images/exp7.png",
      logoPath: "/images/logo3.svg",
      title: "Node.js – Subscription Tracker API (Personal Project)",
      date: "February 2025 - March 2025",
      responsibilities: [
        "Designed and developed the system with secure authentication and source code version control practices.",
        "Implemented comprehensive test cases covering API endpoints, data validation, and security checks.",
        "Improved performance by applying request rate limiting and optimizing database queries, resulting in 40% faster response times.",
      ],
    },
    {
      review: "A command-line Pokemon battle simulator in C++ featuring turn-based combat, multiple Pokemon species with unique moves, status effects, and environment-specific encounters. Experience Pokemon battles through this OOP showcase with inheritance, polymorphism, and Strategy pattern for extensible game mechanics. ",
      imgPath: "/images/exp6.png",
      logoPath: "/images/logo2.svg",
      title: "C++ – Pokemon Turn-Based RPG (Personal Project)",
      date: "April 2025 - Present",
      responsibilities: [
        "Built a battle system using OOP principles, with 8+ unique species and diverse abilities.",
        "Developed a dynamic combat system with state management, damage calculation, and move selection.",
        "Created an environment-specific encounter system using probability-based mechanics.",
        "Implemented a flexible status effect system using the Strategy pattern.",
      ],
    },
  ];
  
  const expLogos = [
    {
      name: "logo1",
      imgPath: "/images/logo1.png",
    },
    {
      name: "logo2",
      imgPath: "/images/logo2.png",
    },
    {
      name: "logo3",
      imgPath: "/images/logo3.png",
    },
  ];
  
  const testimonials = [
    {
      name: "Kalinga Institute of Industrial Technology",
      mentions: "2021 - 2025",
      review:
        "Completed my B.Tech degree in Computer Science and Engineering from KIIT University, Bhubaneswar, Odisha. The university provided a strong foundation in computer science principles and hands-on experience with various technologies.",
      imgPath: "/images/client1.png",
    },
    {
      name: "Sri Bhagawan Mahavir Jain College",
      mentions: "2019 - 2021",
      review:
        "Completed my Pre-University education in Science from Sri Bhagawan Mahavir Jain College, Bangalore, Karnataka. I took PCMB (Physics, Chemistry, Mathematics, Biology) as my subjects. This experience solidified my interest in technology and computer science.",
      imgPath: "/images/client3.png",
    },
    {
      name: "St. Joseph's Boys' High School",
      mentions: "2007 - 2018",
      review:
        "Completed my schooling from one of the most prestigious schools in Bangalore, Karnataka. The school provided a strong foundation in academics and extracurricular activities, shaping my overall personality.",
      imgPath: "/images/client2.png",
    },
  ];
  
  const socialImgs = [
    {
      name: "insta",
      imgPath: "/images/insta.png",
      url: "https://www.instagram.com/utkrist2/"
    },
    {
      name: "linkedin",
      imgPath: "/images/linkedin.png",
      url: "https://www.linkedin.com/in/utkrist-jaiswal/"
    },
    {
      name: "GitHub",
      imgPath: "/images/github.png",
      url: "https://github.com/AlabasterRig"
    },
  ];
  
  export {
    words,
    abilities,
    logoIconsList,
    counterItems,
    expCards,
    expLogos,
    testimonials,
    socialImgs,
    techStackIcons,
    techStackImgs,
    navLinks,
  };