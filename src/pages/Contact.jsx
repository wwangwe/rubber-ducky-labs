import React from 'react'

import { Fade } from 'react-awesome-reveal'

import { Header, Solid } from '../components'
import { internet } from "../assets"

export const Contact = () => {
    return (
        <>
            <Header title="Contact Us" image={internet} />
            <section className='py-12'>
                <div className="container mx-auto flex justify-between gap-y-2 px-30">
                    <div className="w-1/2">
                        <Fade triggerOnce cascade damping={0.5} direction="up">
                            <h3 className="pb-4">We Are Social</h3>
                        </Fade>
                        <div className="uppercase">
                            <Fade triggerOnce cascade damping={0.5} direction="up">
                                <p className="mb-4">
                                    <i className='fa-brands fa-linkedin fa-lg mr-2' />
                                    <small>LinkedIn / <a href="https://www.linkedin.com/company/rubber-ducky-labs/" className="underline hover:text-primary">Rubber Ducky Labs (YC W23)</a> </small>
                                </p>
                                <p className="mb-4">
                                    <i className="fa-solid fa-envelope fa-lg mr-2" />
                                    <small>Email / <a href="mailto:hello@rubberduckylabs.io" className="underline hover:text-primary">hello@rubberduckylabs.io</a> </small>
                                </p>
                                <p className="mb-4">
                                    <i className="fa-brands fa-twitter fa-lg mr-2" />
                                    <small>Twitter / <a href="https://twitter.com/RubberDuckyLabs" className="underline hover:text-primary">Rubber Ducky Labs</a> </small>
                                </p>
                                <p className="mb-4">
                                    <i className="fa-solid fa-location-dot fa-lg mr-2" />
                                    <small>San Francisco, California, United States</small>
                                </p>
                            </Fade>
                        </div>
                    </div>
                    <div className="w-1/2">
                        <Fade triggerOnce cascade damping={0.5} direction="up">
                            <h3 className="pb-6">Duck Quack and Reach Out!</h3>
                        </Fade>
                        <form className='uppercase'>
                            <Fade triggerOnce cascade damping={0.5} direction="up">
                                <div className="grid md:grid-cols-2 md:gap-6">
                                    <div className="relative z-0 w-full mb-8 group">
                                        <input type="text" name="first_name" id="first_name" className="block py-2.5 w-full text-sm uppercase bg-transparent border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-accent peer" placeholder=" " required />
                                        <label htmlFor="first_name" className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-accent peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">First name</label>
                                    </div>
                                    <div className="relative z-0 w-full mb-8 group">
                                        <input type="text" name="last_name" id="last_name" className="block py-2.5 w-full text-sm uppercase bg-transparent border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-accent peer" placeholder=" " required />
                                        <label htmlFor="last_name" className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-accent peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Last name</label>
                                    </div>
                                </div>
                                <div className="grid md:grid-cols-2 md:gap-6">
                                    <div className="relative z-0 w-full mb-8 group">
                                        <input type="email" name="email" id="email" className="block py-2.5 w-full text-sm uppercase bg-transparent border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-accent peer" placeholder=" " required />
                                        <label htmlFor="email" className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-accent peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
                                    </div>
                                    <div className="relative z-0 w-full mb-8 group">
                                        <input type="text" name="company" id="company" className="block py-2.5 w-full text-sm uppercase bg-transparent border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-accent peer" placeholder=" " required />
                                        <label htmlFor="company" className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-accent peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Company</label>
                                    </div>
                                </div>
                                <div className="relative z-0 w-full mb-8 group">
                                    <input type="email" name="message" id="message" className="block py-2.5 w-full text-sm uppercase bg-transparent border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-accent peer" placeholder=" " required />
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
            </section>
        </>
    )
}
