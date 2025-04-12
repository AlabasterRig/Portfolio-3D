const navLinks = [
    {
      name: "Work",
      link: "#work",
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
      imgPath: "/assets/public/images/logos/company-logo-1.png",
    },
    {
      imgPath: "/assets/public/images/logos/company-logo-2.png",
    },
    {
      imgPath: "/assets/public/images/logos/company-logo-3.png",
    },
    {
      imgPath: "/assets/public/images/logos/company-logo-4.png",
    },
    {
      imgPath: "/assets/public/images/logos/company-logo-5.png",
    },
    {
      imgPath: "/assets/public/images/logos/company-logo-6.png",
    },
    {
      imgPath: "/assets/public/images/logos/company-logo-7.png",
    },
    {
      imgPath: "/assets/public/images/logos/company-logo-8.png",
    },
    {
      imgPath: "/assets/public/images/logos/company-logo-9.png",
    },
    {
      imgPath: "/assets/public/images/logos/company-logo-10.png",
    },
    {
      imgPath: "/assets/public/images/logos/company-logo-11.png",
    },
  ];
  
  const abilities = [
    {
      imgPath: "/assets/public/images/seo.png",
      title: "Quality Focus",
      desc: "Delivering high-quality results while maintaining attention to every detail.",
    },
    {
      imgPath: "/assets/public/images/chat.png",
      title: "Reliable Communication",
      desc: "Keeping you updated at every step to ensure transparency and clarity.",
    },
    {
      imgPath: "/assets/public/images/time.png",
      title: "On-Time Delivery",
      desc: "Making sure projects are completed on schedule, with quality & attention to detail.",
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
      review: "Adrian brought creativity and technical expertise to the team, significantly improving our frontend performance. His work has been invaluable in delivering faster experiences.",
      imgPath: "/assets/public/images/exp1.png",
      logoPath: "/assets/public/images/logo1.png",
      title: "Frontend Developer",
      date: "January 2023 - Present",
      responsibilities: [
        "Developed and maintained user-facing features for the Hostinger website.",
        "Collaborated closely with UI/UX designers to ensure seamless user experiences.",
        "Optimized web applications for maximum speed and scalability.",
      ],
    },
    {
      review: "Adrian’s contributions to Docker's web applications have been outstanding. He approaches challenges with a problem-solving mindset.",
      imgPath: "/assets/public/images/exp2.png",
      logoPath: "/assets/public/images/logo2.png",
      title: "Full Stack Developer",
      date: "June 2020 - December 2023",
      responsibilities: [
        "Led the development of Docker's web applications, focusing on scalability.",
        "Worked with backend engineers to integrate APIs seamlessly with the frontend.",
        "Contributed to open-source projects that were used with the Docker ecosystem.",
      ],
    },
    {
      review: "Adrian’s work on Appwrite’s mobile app brought a high level of quality and efficiency. He delivered solutions that enhanced our mobile experience & meet our product goals.",
      imgPath: "/assets/public/images/exp3.png",
      logoPath: "/assets/public/images/logo3.png",
      title: "React Native Developer",
      date: "March 2019 - May 2020",
      responsibilities: [
        "Built cross-platform mobile apps using React Native, integrating with Appwrite's backend services.",
        "Improved app performance and user experience through code optimization and testing.",
        "Coordinated with the product team to implement features based on feedback.",
      ],
    },
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
    },
    {
      name: "fb",
      imgPath: "/assets/public/images/fb.png",
    },
    {
      name: "x",
      imgPath: "/assets/public/images/x.png",
    },
    {
      name: "linkedin",
      imgPath: "/assets/public/images/linkedin.png",
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