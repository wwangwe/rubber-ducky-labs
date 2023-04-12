import React from 'react'

import { Zoom } from 'react-awesome-reveal'

export const Footer = () => {
    return (
        <footer className="z-50 bg-secondary bg-opacity-20 backdrop-blur text-white uppercase">
            <div className="grid md:grid-cols-3 grid-cols-1 md:gap-20 p-6">
                <div className="md:text-left text-center">
                    <Zoom cascade triggerOnce delay={500} duration={500}>
                        <small className='tracking-[4px] text-[11px]'>
                            Built in San Francisco, CA
                        </small>
                    </Zoom>
                </div>
                <div className="flex justify-center ">
                    <Zoom cascade triggerOnce delay={500} duration={500}>
                        <a href="mailto:hello@rubberduckylabs.io?subject=Hello!" className="mx-4 hover:text-primary">
                            <i className="fa-solid fa-envelope fa-lg"></i>
                        </a>
                        <a href="https://twitter.com/RubberDuckyLabs" className="mx-4 hover:text-primary">
                            <i className="fa-brands fa-twitter fa-lg"></i>
                        </a>
                        <a href="https://www.linkedin.com/company/rubber-ducky-labs/" className="mx-4 hover:text-primary">
                            <i className="fa-brands fa-linkedin fa-lg"></i>
                        </a>
                        <a href="https://www.ycombinator.com/companies/rubber-ducky-labs" className="mx-4 hover:text-primary">
                            <i className="fa-brands fa-y-combinator fa-lg"></i>
                        </a>
                    </Zoom>
                </div>
                <div className="md:text-right text-center">
                    <Zoom cascade triggerOnce delay={500} duration={500}>
                        <small className='tracking-[4px] text-[11px]'>
                            Copyright &copy; 2023 - Rubber Ducky Labs, Inc.
                        </small>
                    </Zoom>
                </div>
            </div>
        </footer>
    )
}