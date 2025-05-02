import { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import TitleHeader from '../components/TitleHeader.jsx';

gsap.registerPlugin(ScrollTrigger);

const projects = [
    {
        title: "Fall Guy Survival",
        description: "Developed Fall Guy Survival in Unreal Engine 5, showcasing strong C++ skills. Built core systems like inventory, resource harvesting, game state persistence, and a dynamic day/night cycle. Also optimized workflows, created custom VFX, and designed UI elements.",
        image: "/images/project1.png",
        link: "https://github.com/AlabasterRig/FallGuySurvival",
        height: "tall",
        type: "image"
    },
    {
        title: "3D Portfolio",
        description: "A showcase of my 3D web development skills using Three.js and React Three Fiber. This interactive demo highlights responsive 3D rendering, optimized assets, and smooth animations for an engaging user experience.",
        image: "/images/project5.png",
        link: "https://github.com/AlabasterRig/Portfolio-3D",
        height: "medium",
        type: "image"
    },
    {
        title: "Pokemon Turn-Based RPG",
        description: "A turn-based role-playing game inspired by Pokemon made in C++ featuring multiple Pokemon species with unique moves, status effects, and environment-specific encounters.",
        image: "https://images.pexels.com/photos/1716861/pexels-photo-1716861.jpeg",
        link: "https://github.com/AlabasterRig/Pokemon/tree/Feature_10_Interfaces",
        height: "medium",
        type: "image"
    },
    {
        title: "3D Engine",
        description: "A C++ 3D game engine that renders OBJ models and supports basic transformations, features camera controls and serves as a foundational base for developing 3D applications and games.",
        video: "/images/screen.mp4",
        link: "https://github.com/AlabasterRig/3D-Engine",
        height: "short",
        type: "video"
    },
    {
        title: "Subscription Tracker API",
        description: "A robust, Node.js-based subscription management system that helps users track and manage their recurring payments. Built with Express and MongoDB, this RESTful API includes features like user authentication, subscription management, automated email reminders, and rate limiting.",
        image: "/images/project3.png",
        link: "https://github.com/AlabasterRig/Subscription-Tracker",
        height: "short",
        type: "image"
    },
    {
        title: "2D Platformer Game",
        description: "Creating a 2D platformer game using C# and Unity, featuring player movement, enemy AI, and collectible items. The game includes a variety of levels, each with unique challenges and environments, showcasing my skills in game design and programming.",
        image: "https://unity-connect-prd.storage.googleapis.com/20190220/learn/images/6edb34b3-0156-491b-95fa-cc3b750d4644_Project_and_Tutorials_2D_Game_Kit_1920x1080_Project_Tutorial_1.jpg",
        link: "https://github.com/AlabasterRig/2D-Platformer-Game",
        height: "tall",
        type: "image"
    },
    {
        title: "Heart Disease Prediction",
        description: "Developed a heart disease prediction model that analyzes key health indicators including age, sex, cholesterol levels, and blood pressure. The project combines exploratory data analysis with machine learning algorithms to identify patterns in health data, achieving reliable prediction accuracy for early detection and preventive healthcare.",
        image: "https://images.pexels.com/photos/16450237/pexels-photo-16450237/free-photo-of-an-ecg-paper-on-a-table-with-a-heart-monitor.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        link: "https://github.com/AlabasterRig/Heart-Disease-Prediction",
        height: "medium",
        type: "image"
    },
];

const ShowcaseSection = () => {
    const sectionRef = useRef(null);
    const cardsRef = useRef([]);

    useGSAP(() => {
        if (sectionRef.current) {
            gsap.fromTo(sectionRef.current,
                { opacity: 0 },
                { opacity: 1, duration: 1 }
            );
        }

        cardsRef.current.forEach((card, index) => {
            if (card) {
                gsap.fromTo(
                    card,
                    {
                        opacity: 0,
                        y: 50
                    },
                    {
                        opacity: 1,
                        y: 0,
                        duration: 0.8,
                        delay: 0.2 * (index % 3),
                        scrollTrigger: {
                            trigger: card,
                            start: 'top bottom-=100',
                            toggleActions: 'play none none reverse'
                        }
                    }
                );
            }
        });
    }, []);

    return (
        <section ref={sectionRef} id="projects" className="flex-center section-padding">
            <div className="w-full h-full max-w-auto mx-auto md:px-10 px-5">
                <TitleHeader 
                    title="Featured Projects"
                    sub="Explore my latest work"                
                />
                
                <div className="columns-1 md:columns-2 lg:columns-3 gap-4 md:gap-6 mt-8 sm:mt-12 lg:mt-16">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            ref={el => cardsRef.current[index] = el}
                            className="break-inside-avoid mb-4 md:mb-6 rounded-xl overflow-hidden card-border hover:bg-black-200 transition-colors duration-300 group"
                        >
                            <a href={project.link} target="_blank" rel="noopener noreferrer" className="block">
                                <div className={`relative overflow-hidden ${
                                    project.height === 'tall' ? 'h-[350px] sm:h-[400px] md:h-[450px] lg:h-[500px]' :
                                    project.height === 'medium' ? 'h-[280px] sm:h-[320px] md:h-[360px] lg:h-[400px]' :
                                    'h-[220px] sm:h-[250px] md:h-[280px] lg:h-[300px]'
                                }`}>
                                    {project.type === 'video' ? (
                                        <video 
                                            src={project.video} 
                                            autoPlay 
                                            loop 
                                            muted 
                                            playsInline
                                            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                                        />
                                    ) : (
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                                        />
                                    )}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent">
                                        <div className="absolute bottom-0 p-4 sm:p-6 w-full transition-transform duration-300">
                                            <h3 className="text-lg sm:text-xl font-bold mb-1 sm:mb-2">{project.title}</h3>
                                            <p className="text-white-50 text-xs sm:text-sm transform transition-all duration-300 max-h-0 opacity-0 group-hover:max-h-[80px] group-hover:opacity-100 overflow-hidden">{project.description}</p>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ShowcaseSection;