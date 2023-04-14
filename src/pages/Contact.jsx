import React from 'react'

import { Fade } from 'react-awesome-reveal'

import { Header, Solid } from '../components'
import { Skeleton } from '../layouts/Skeleton'
import { internet } from "../assets"

export const Contact = () => {
    return (
        <>
            <Header title="Contact Us" image={internet} />
            <section className="py-2 pb-6">
                <Skeleton>
                    <div className="flex flex-wrap justify-between">
                        <div className="w-full sm:w-full">
                            <Fade triggerOnce cascade damping={0.5} direction="up">
                                <h3 className="py-4 text-center sm:text-left">We Are Social</h3>
                            </Fade>
                            <div className="uppercase">
                                <Fade triggerOnce cascade damping={0.5} direction="up">
                                    <p className="flex items-center space-x-4 mb-2">
                                        <i className='hidden sm:block fa-brands fa-linkedin sm:fa-lg' />
                                        <small>LinkedIn / <a href="https://www.linkedin.com/company/rubber-ducky-labs/" className="underline hover:text-primary">Rubber Ducky Labs (YC W23)</a> </small>
                                    </p>
                                    <p className="flex items-center space-x-4 mb-2">
                                        <i className="hidden sm:block fa-solid fa-envelope sm:fa-lg" />
                                        <small>Email / <a href="mailto:hello@rubberduckylabs.io" className="underline hover:text-primary">hello@rubberduckylabs.io</a> </small>
                                    </p>
                                    <p className="flex items-center space-x-4 mb-2">
                                        <i className="hidden sm:block fa-brands fa-twitter sm:fa-lg" />
                                        <small>Twitter / <a href="https://twitter.com/RubberDuckyLabs" className="underline hover:text-primary">Rubber Ducky Labs</a> </small>
                                    </p>
                                    <p className="flex items-center space-x-4 mb-2">
                                        <i className="hidden sm:block fa-solid fa-location-dot sm:fa-lg" />
                                        <small>San Francisco, California, United States</small>
                                    </p>
                                </Fade>
                            </div>
                        </div>
                        <div className="w-full sm:w-full">
                            <Fade triggerOnce cascade damping={0.5} direction="up">
                                <h3 className="py-4 text-center sm:text-left">Quack Us Up! </h3>
                            </Fade>
                            <form className='uppercase'>
                                <Fade triggerOnce cascade damping={0.5} direction="up">
                                    <div className="grid sm:grid-cols-2 sm:gap-6">
                                        <div className="relative z-0 w-full mb-4 group">
                                            <input type="text" name="first_name" id="first_name" className="block py-2.5 w-full text-sm uppercase bg-transparent border-b border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-accent peer" placeholder=" " required />
                                            <label htmlFor="first_name" className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-accent peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">First name</label>
                                        </div>
                                        <div className="relative z-0 w-full mb-4 group">
                                            <input type="text" name="last_name" id="last_name" className="block py-2.5 w-full text-sm uppercase bg-transparent border-b border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-accent peer" placeholder=" " required />
                                            <label htmlFor="last_name" className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-accent peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Last name</label>
                                        </div>
                                    </div>
                                    <div className="grid sm:grid-cols-2 sm:gap-6">
                                        <div className="relative z-0 w-full mb-4 group">
                                            <input type="email" name="email" id="email" className="block py-2.5 w-full text-sm uppercase bg-transparent border-b border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-accent peer" placeholder=" " required />
                                            <label htmlFor="email" className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-accent peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
                                        </div>
                                        <div className="relative z-0 w-full mb-8 group">
                                            <input type="text" name="company" id="company" className="block py-2.5 w-full text-sm uppercase bg-transparent border-b border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-accent peer" placeholder=" " required />
                                            <label htmlFor="company" className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-accent peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Company</label>
                                        </div>
                                    </div>
                                    <div className="relative z-0 w-full mb-4 group">
                                        <input type="email" name="message" id="message" className="block py-2.5 w-full text-sm uppercase bg-transparent border-b border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-accent peer" placeholder=" " required />
                                        <label htmlFor="message" rows="4" className="block peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-accent peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Message</label>
                                    </div>
                                    <div className="text-center">
                                        <Solid alt={true}>
                                            Submit
                                        </Solid>
                                    </div>
                                </Fade>
                            </form>
                        </div>
                    </div>
                </Skeleton>
            </section>
        </>
    )
}
