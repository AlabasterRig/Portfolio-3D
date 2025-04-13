const navLinks = [
    {
      name: "Projects",
      link: "#projects",
    },
    {
      name: "Experience",
      link: "#experience",
    },
    {
      name: "Skills",
      link: "#skills",
    },
    
  ];
  
  const words = [
    { text: "Ideas", imgPath: "/assets/public/images/ideas.svg" },
    { text: "Concepts", imgPath: "/assets/public/images/concepts.svg" },
    { text: "Designs", imgPath: "/assets/public/images/designs.svg" },
    { text: "Code", imgPath: "/assets/public/images/code.svg" },
    { text: "Ideas", imgPath: "/assets/public/images/ideas.svg" },
    { text: "Concepts", imgPath: "/assets/public/images/concepts.svg" },
    { text: "Designs", imgPath: "/assets/public/images/designs.svg" },
    { text: "Code", imgPath: "/assets/public/images/code.svg" },
  ];
  
  const counterItems = [
    { value: 1, suffix: "+", label: "Years of Experience" },
    { value: 28, suffix: "+", label: "Completed Projects (Non Work)" },
  ];
  
  const logoIconsList = [ 
    {
      imgPath: "/assets/public/images/logos/UE5.png",
    },
    {
      imgPath: "/assets/public/images/logos/Unity.png",
    },
    {
      imgPath: "/assets/public/images/logos/Blender.png",
    },
    {
      imgPath: "/assets/public/images/logos/C++.png",
    },
    {
      imgPath: "/assets/public/images/logos/Cs.png",
    },
    {
      imgPath: "/assets/public/images/logos/Git.png",
    },
    {
      imgPath: "/assets/public/images/logos/Docker.png",
    },
    {
      imgPath: "/assets/public/images/logos/Aws.png",
    },
    {
      imgPath: "/assets/public/images/logos/MS-Office.png",
    },
    {
      imgPath: "/assets/public/images/logos/NodeJS.png",
    },
  ];
  
  const abilities = [
    {
      imgPath: "/assets/public/images/seo.png",
      title: "Strong Foundational Skills",
      desc: "Solid understanding of core concepts with hands-on practice through projects and learning.",
    },
    {
      imgPath: "/assets/public/images/chat.png",
      title: "Clear Communicator",
      desc: "Able to explain ideas clearly and collaborate effectively in team environments.",
    },
    {
      imgPath: "/assets/public/images/time.png",
      title: "Self-Driven & Reliable",
      desc: "Capable of managing time well and staying committed to completing tasks independently.",
    },
  ];
  
  const techStackImgs = [
    {
      name: "React Developer",
      imgPath: "/assets/public/images/logos/react.png",
    },
    {
      name: "Python Developer",
      imgPath: "/assets/public/images/logos/python.svg",
    },
    {
      name: "Backend Developer",
      imgPath: "/assets/public/images/logos/node.png",
    },
    {
      name: "Interactive Developer",
      imgPath: "/assets/public/images/logos/three.png",
    },
    {
      name: "Project Manager",
      imgPath: "/assets/public/images/logos/git.svg",
    },
  ];
  
  const techStackIcons = [
    {
      name: "React Developer",
      modelPath: "/assets/public/models/react_logo-transformed.glb",
      scale: 1,
      rotation: [0, 0, 0],
    },
    {
      name: "Python Developer",
      modelPath: "/assets/public/models/python-transformed.glb",
      scale: 0.8,
      rotation: [0, 0, 0],
    },
    {
      name: "Backend Developer",
      modelPath: "/assets/public/models/node-transformed.glb",
      scale: 5,
      rotation: [0, -Math.PI / 2, 0],
    },
    {
      name: "Interactive Developer",
      modelPath: "/assets/public/models/three.js-transformed.glb",
      scale: 0.05,
      rotation: [0, 0, 0],
    },
    {
      name: "Project Manager",
      modelPath: "/assets/public/models/git-svg-transformed.glb",
      scale: 0.05,
      rotation: [0, -Math.PI / 4, 0],
    },
  ];
  
  const expCards = [
    {
      review: "A survival game built using Unreal Engine 5, showcasing the core game logic and coding aspects. This project emphasizes C++ and Blueprint integration, with detailed explanations and a focus on game mechanics.",
      // imgPath: "/assets/public/images/exp4.png",
      logoPath: "/assets/public/images/logo1.svg",
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
      review: "A command-line Pokemon battle simulator in C++ featuring turn-based combat, multiple Pokemon species with unique moves, status effects, and environment-specific encounters. Experience Pokemon battles through this OOP showcase with inheritance, polymorphism, and Strategy pattern for extensible game mechanics. ",
      // imgPath: "/assets/public/images/exp6.png",
      logoPath: "/assets/public/images/logo2.svg",
      title: "C++ – Pokemon Console Game (Personal Project)",
      date: "April 2025",
      responsibilities: [
        "Built a battle system using OOP principles, with 8+ unique species and diverse abilities.",
        "Developed a dynamic combat system with state management, damage calculation, and move selection.",
        "Created an environment-specific encounter system using probability-based mechanics.",
        "Implemented a flexible status effect system using the Strategy pattern.",
      ],
    },
    {
      review: "A RESTful API service for managing subscription data, built with Node.js, C++, and MongoDB. The project includes secure authentication, thorough testing, and performance optimizations to ensure reliable and scalable backend functionality.",
      // imgPath: "/assets/public/images/exp7.png",
      logoPath: "/assets/public/images/logo3.svg",
      title: "C++/Node.js – Subscription Tracker API (Personal Project)",
      date: "January 2025 - February 2025",
      responsibilities: [
        "Designed and developed the system with secure authentication and source code version control practices.",
        "Implemented comprehensive test cases covering API endpoints, data validation, and security checks.",
        "Improved performance by applying request rate limiting and optimizing database queries, resulting in 40% faster response times.",
      ],
    }
  ];
  
  const expLogos = [
    {
      name: "logo1",
      imgPath: "//assets/publicimages/logo1.png",
    },
    {
      name: "logo2",
      imgPath: "/assets/public/images/logo2.png",
    },
    {
      name: "logo3",
      imgPath: "/assets/public/images/logo3.png",
    },
  ];
  
  const testimonials = [
    {
      name: "Esther Howard",
      mentions: "@estherhoward",
      review:
        "I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.",
      imgPath: "/assets/public/images/client1.png",
    },
    {
      name: "Wade Warren",
      mentions: "@wadewarren",
      review:
        "Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.",
      imgPath: "/assets/public/images/client3.png",
    },
    {
      name: "Guy Hawkins",
      mentions: "@guyhawkins",
      review:
        "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
      imgPath: "/assets/public/images/client2.png",
    },
    {
      name: "Marvin McKinney",
      mentions: "@marvinmckinney",
      review:
        "Adrian was a pleasure to work with. He turned our outdated website into a fresh, intuitive platform that’s both modern and easy to navigate. Fantastic work overall.",
      imgPath: "/assets/public/images/client5.png",
    },
    {
      name: "Floyd Miles",
      mentions: "@floydmiles",
      review:
        "Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional!",
      imgPath: "/assets/public/images/client4.png",
    },
    {
      name: "Albert Flores",
      mentions: "@albertflores",
      review:
        "Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend and backend dev are top-notch.",
      imgPath: "/assets/public/images/client6.png",
    },
  ];
  
  const socialImgs = [
    {
      name: "insta",
      imgPath: "/assets/public/images/insta.png",
      url: "https://www.instagram.com/utkrist2/"
    },
    {
      name: "linkedin",
      imgPath: "/assets/public/images/linkedin.png",
      url: "https://www.linkedin.com/in/utkrist-jaiswal/"
    },
    {
      name: "GitHub",
      imgPath: "/assets/public/images/github.png",
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