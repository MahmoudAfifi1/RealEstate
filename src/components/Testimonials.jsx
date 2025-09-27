import React from 'react'
import { testimonialsData, assets } from '../assets/assets'

export const Testimonials = () => {
    return (
        <div className='container mx-auto py-20 px-6 md:px-20 lg:px-32 w-full overflow-hidden bg-gray-50' id='Testimonials'>
            <h1 className='text-2xl sm:text-4xl font-bold mb-2 text-center'>
                Customer <span className='underline underline-offset-4 decoration-blue-500'>Testimonials</span>
            </h1>
            <p className='text-center text-gray-500 mb-12 max-w-80 mx-auto'>
                Real Stories from those who Found Their Dream Home
            </p>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                {testimonialsData.map((testimonial, index) => (
                    <div key={index} className='bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300'>
                        <div className='flex items-center mb-4'>
                            <img
                                src={testimonial.image}
                                alt={testimonial.alt}
                                className='w-12 h-12 rounded-full object-cover mr-4'
                            />
                            <div>
                                <h3 className='font-semibold text-gray-800'>{testimonial.name}</h3>
                                <p className='text-sm text-gray-500'>{testimonial.title}</p>
                            </div>
                        </div>

                        <div className='flex mb-3'>
                            {[...Array(testimonial.rating)].map((_, i) => (
                                <img key={i} src={assets.star_icon} alt="star" className='w-4 h-4' />
                            ))}
                        </div>

                        <p className='text-gray-600 leading-relaxed'>
                            "{testimonial.text}"
                        </p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Testimonials