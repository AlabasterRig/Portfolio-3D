import { useRef } from 'react'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger)

const ShowcaseSection = () => {

    const sectionRef = useRef(null);
    const project1Ref = useRef(null);
    const project2Ref = useRef(null);
    const project3Ref = useRef(null);

    useGSAP(() => {
        gsap.fromTo(sectionRef.current,
            { opacity: 0 },
            { opacity: 1, duration: 1.5 }
        );

        const projects = [project1Ref.current, project2Ref.current, project3Ref.current];

        projects.forEach((card, index) => {
            gsap.fromTo(
                card,
                {
                    y: 50,
                    opacity: 0
                },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    delay: 0.3 * (index + 1),
                    scrollTrigger: {
                        trigger: card,
                        start: 'top bottom-=100',
                    }
                }
            );
        });
    }, []);

    return (
        <section id='projects' ref={sectionRef} className='app-showcase'>
            <div className='w-full'>
                <div className='showcaselayout'>
                    {/* LEFT */}
                    <div className='first-project-wrapper' ref={project1Ref}>
                        <a href='https://github.com/AlabasterRig/FallGuySurvival' target='_blank'>
                            <div className='image-wrapper'>
                                <img
                                    src='/assets/public/images/project1.png'
                                    alt='Test Image 1'
                                />
                            </div>
                            <div className='text-content'>
                                <h2>Fall Guy Survival</h2>
                                <p className='text-white-50 md:text-xl'>
                                    This is paragraph of Project 1 that is to be changed later.
                                </p>
                            </div>
                        </a>
                    </div>

                    {/* RIGHT */}
                    <div className='project-list-wrapper overflow-hidden'>
                        <div className='project' ref={project2Ref}>
                            <a href='https://github.com/AlabasterRig/Pokemon/tree/Feature_10_Interfaces'>
                                <div className='image-wrapper bg-[#ffefdb]'>
                                    <img
                                        src='/assets/public/images/project2.png'
                                        alt='Test Image 2'
                                    />
                                </div>
                                <h2>Pokemon Turn-Based RPG</h2>
                            </a>
                        </div>

                        <div className='project' ref={project3Ref}>
                            <a href='https://github.com/AlabasterRig/Subscription-Tracker' target='_blank'>
                                <div className='image-wrapper bg-[#ffe7eb]'>
                                    <img
                                        src='/assets/public/images/project3.png'
                                        alt='Test Image 3'
                                    />
                                </div>
                                <h2>Subscription Tracker API</h2>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ShowcaseSection