import React from 'react'

import { Fade } from 'react-awesome-reveal'
import { Link } from 'react-router-dom'

import { Solid } from '../components'
import { duck } from '../assets'

export const Header = () => {
    const headerStyle = {
        backgroundImage: `url(${duck})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
    }
    return (
        <header className="relative flex justify-center items-center h-[100vh] -mt-20" style={headerStyle}>
            <div className="absolute inset-0 bg-gradient-to-b from-black via-secondary to-accent opacity-20"></div>
            <div className="relative flex flex-col justify-center items-center space-y-8 px-0 text-center">
                <Fade cascade triggerOnce damping={0.5} direction="up">
                    <h2 className="text-white uppercase leading-[1.5] text-sm sm:text-2xl tracking-[5px]">Discover the Potential <br className="" /> of Your Recommendations</h2>
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
