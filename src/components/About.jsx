import React from 'react'
import { assets } from '../assets/assets'

export const About = () => {
    return (
        <div className='flex flex-col items-center justify-center container mx-auto p-14 md:px-20 lg:px-32 w-full overflow-hidden' id='About'>
            <h1 className='text-2xl sm:text-4xl font-bold mb-2 text-center'>
                About <span className='underline underline-offset-4 decoration-blue-500'>Our Brand</span>
            </h1>
            <p className='text-gray-700 max-w-2xl text-center mb-4 leading-relaxed'>
                Passionate about helping people find their dream home, we specialize in connecting clients with the perfect property.
            </p>
            <p className='text-gray-500 max-w-2xl text-center mb-8 leading-relaxed'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Nulla facilisi mauris sit amet massa vitae tortor condimentum lacinia.
            </p>

            <div className='flex flex-col md:flex-row items-center md:items-start md:gap-20 mt-12'>
                <img src={assets.brand_img} alt="Brand" className='w-full sm:w-1/2 max-w-lg rounded-lg shadow-lg' />
                <div className='flex flex-col mt-8 md:mt-0'>
                    <div className='grid grid-cols-2 gap-8 text-center'>
                        <div>
                            <div className='text-3xl font-bold text-blue-600 mb-2'>10+</div>
                            <p className='text-gray-600 font-medium'>Years Experience</p>
                        </div>
                        <div>
                            <div className='text-3xl font-bold text-blue-600 mb-2'>12+</div>
                            <p className='text-gray-600 font-medium'>Projects Completed</p>
                        </div>
                        <div>
                            <div className='text-3xl font-bold text-blue-600 mb-2'>20+</div>
                            <p className='text-gray-600 font-medium'>Min. Sq Ft Delivered</p>
                        </div>
                        <div>
                            <div className='text-3xl font-bold text-blue-600 mb-2'>25+</div>
                            <p className='text-gray-600 font-medium'>Awards Won</p>
                        </div>
                    </div>
                    <p className='my-10 max-w-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus accusamus perspiciatis, aliquid molestias suscipit earum, facere, reiciendis voluptatum consectetur omnis quidem delectus dolores possimus velit repudiandae autem quaerat! Accusantium, laborum?</p>
                    <button className='bg-blue-600 text-white px-8 py-2 rounded'>Read More</button>
                </div>
            </div>
        </div>
    )
}
