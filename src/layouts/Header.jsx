import React from 'react'

import { Fade } from 'react-awesome-reveal'

import { Solid } from '../components'

export const Header = () => {
    return (
        <header className="relative flex justify-center items-center h-[102vh] -mt-20 bg-gradient-to-b from-secondary to-accent">
            <div className="relative flex flex-col justify-center items-center space-y-8 md:space-y-10 px-0 md:px-80 text-center">
                <Fade cascade triggerOnce damping={0.5} direction="up">
                    <h2 className="text-white uppercase leading-[1.5] text-sm md:text-4xl">Discover the Potential of Your Recommendations</h2>
                    <div className="flex justify-between space-x-4">
                        <Solid>
                            Get Started <i className="fa-solid fa-arrow-right ml-2"></i>
                        </Solid>
                    </div>
                </Fade>
            </div>
        </header>
    )
}
