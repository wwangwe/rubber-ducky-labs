import React from 'react'

import { Fade, Slide } from 'react-awesome-reveal'

export const Footer = () => {
    return (
        <>
            <footer className="grid md:grid-cols-3 grid-cols-1 md:gap-20 px-2 border-t bg-secondary text-white">
                <div className="p-2 md:p-4 md:text-left text-center">
                    <small>
                        <Fade cascade delay={500} duration={50}>
                            Built in San Francisco, CA
                        </Fade>
                    </small>
                </div>
                <div className="flex justify-center p-2 md:p-4">
                    <Slide direction={'up'} cascade delay={500} duration={250}>
                        <a href="https://twitter.com/RubberDuckyLabs" className="mx-4">
                            <i className="fa-brands fa-twitter fa-lg"></i>
                        </a>
                        <a href="https://www.linkedin.com/company/rubber-ducky-labs/" className="mx-4">
                            <i className="fa-brands fa-linkedin fa-lg"></i>
                        </a>
                        <a href="https://www.ycombinator.com/companies/rubber-ducky-labs" className="mx-4">
                            <i className="fa-brands fa-y-combinator fa-lg"></i>
                        </a>
                    </Slide>
                </div>
                <div className="p-2 md:p-4 md:text-right text-center">
                    <small>
                        <Fade cascade delay={500} duration={50}>
                            Copyright © 2023 - Robber Ducky Labs
                        </Fade>
                    </small>
                </div>
            </footer>
        </>
    )
}