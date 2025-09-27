import React, { useState } from 'react'
import { assets } from '../assets/assets'

export const Navbar = () => {
    const [showMobileMenu, setShowMobileMenu] = useState(false)

    return (
        <div className='absolute top-0 left-0 w-full z-10'>
            <div className='container mx-auto flex justify-between items-center py-4 px-6 md:px-20 lg:px-32 bg-transparent'>
                {/* Logo */}
                <img src={assets.logo} alt="Logo" className='h-8 z-10' />

                {/* Desktop Navigation */}
                <ul className='hidden md:flex space-x-8 text-white'>
                    <li><a href="#Header" className='cursor-pointer hover:text-gray-300 transition-colors duration-300'>Home</a></li>
                    <li><a href="#About" className='cursor-pointer hover:text-gray-300 transition-colors duration-300'>About</a></li>
                    <li><a href="#Projects" className='cursor-pointer hover:text-gray-300 transition-colors duration-300'>Projects</a></li>
                    <li><a href="#Testimonials" className='cursor-pointer hover:text-gray-300 transition-colors duration-300'>Testimonials</a></li>
                </ul>

                {/* Desktop Sign Up Button */}
                <button className='hidden md:block bg-white text-black px-8 py-2 rounded-full hover:bg-gray-100 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:scale-105'>
                    Sign Up
                </button>
                {/* Mobile Menu Button */}
                <button
                    className='md:hidden z-10 w-7 h-7 relative'
                    onClick={() => setShowMobileMenu(!showMobileMenu)}
                >
                    <img
                        src={showMobileMenu ? assets.cross_icon : assets.menu_icon}
                        alt={showMobileMenu ? "Close Menu" : "Open Menu"}
                        className='w-full h-full transition-transform duration-300'
                    />
                </button>

                {/* Mobile Navigation */}
                <div className={`md:hidden fixed top-0 right-0 bottom-0 w-full bg-white transform transition-transform duration-300 ease-in-out ${showMobileMenu ? 'translate-x-0' : 'translate-x-full'
                    }`}>
                    <div className='flex flex-col items-center justify-center h-full space-y-8'>
                        <a
                            href="#Header"
                            className='text-black text-xl font-medium hover:text-gray-600 transition-colors duration-300'
                            onClick={() => setShowMobileMenu(false)}
                        >
                            Home
                        </a>
                        <a
                            href="#About"
                            className='text-black text-xl font-medium hover:text-gray-600 transition-colors duration-300'
                            onClick={() => setShowMobileMenu(false)}
                        >
                            About
                        </a>
                        <a
                            href="#Projects"
                            className='text-black text-xl font-medium hover:text-gray-600 transition-colors duration-300'
                            onClick={() => setShowMobileMenu(false)}
                        >
                            Projects
                        </a>
                        <a
                            href="#Testimonials"
                            className='text-black text-xl font-medium hover:text-gray-600 transition-colors duration-300'
                            onClick={() => setShowMobileMenu(false)}
                        >
                            Testimonials
                        </a>
                        <button
                            className='bg-black text-white px-8 py-3 rounded-full font-semibold hover:bg-gray-800 transition-all duration-300 shadow-lg transform hover:scale-105'
                            onClick={() => setShowMobileMenu(false)}
                        >
                            Sign Up
                        </button>
                    </div>
                </div>

                {/* Mobile Menu Overlay */}
                {showMobileMenu && (
                    <div
                        className='md:hidden fixed inset-0 bg-black bg-opacity-50 z-[-1]'
                        onClick={() => setShowMobileMenu(false)}
                    ></div>
                )}
            </div>
        </div>
    )
}
