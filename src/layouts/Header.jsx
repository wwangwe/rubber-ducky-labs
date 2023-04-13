import React from 'react'

import { Fade } from 'react-awesome-reveal'
import { Link } from 'react-router-dom'

import { Solid } from '../components'
import { duck } from '../assets'

export const Header = () => {
    const headerStyle = { backgroundImage: `url(${duck})` }
    return (
        <header className="relative flex justify-center items-center h-[100vh] md:h-[105vh] -mt-20" style={headerStyle}>
            <div className="absolute inset-0 bg-gradient-to-b from-secondary to-accent opacity-20 md:opacity-40"></div>
            <div className="relative flex flex-col justify-center items-center space-y-8 md:space-y-10 px-0 md:px-80 text-center">
                <Fade cascade triggerOnce damping={0.5} direction="up">
                    <h2 className="text-white uppercase leading-[1.5] text-sm md:text-4xl tracking-[3px] md:tracking-[8px]">Discover the Potential of Your Recommendations</h2>
                    <div className="flex justify-between space-x-4">
                        <Solid>
                            <Link to="/contact/">
                                Get Started <i className="fa-solid fa-arrow-right ml-2"></i>
                            </Link>
                        </Solid>
                    </div>
                </Fade>
            </div>
        </header>
    )
}
