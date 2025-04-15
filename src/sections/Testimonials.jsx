import React from 'react'
import TitleHeader from '../components/TitleHeader.jsx'
import { testimonials } from '../constants/index.js'
import GlowCard from '../components/GlowCard.jsx'

const Testimonials = () => {
  return (
    <section id='testimonials' className='flex-center section-padding'>
        <div className='w-full h-full md:px-10 px-5'>
            <TitleHeader 
                title = "Behind the Code"
                sub = "A Journey of Learning and Building"                
            />

            <div className='lg:columns-3 md:columns-2 columns-1 mt-16'>
                {testimonials.map((testimonial) => (
                    <GlowCard card={testimonial}>
                        <div className='flex items-center gap-3'>
                            <div>
                                <p className='font-bold'>{testimonial.name}</p>
                                <p className='text-white-50'>{testimonial.mentions}</p>
                            </div>
                        </div>
                    </GlowCard>
                ))}
            </div>
        </div>
    </section>
  )
}

export default Testimonials