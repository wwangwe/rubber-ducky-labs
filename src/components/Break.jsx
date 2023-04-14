import React from 'react'
import { Fade } from 'react-awesome-reveal';

export const Break = ({ image, text, children, top = false, bottom = false }) => {
    const headerStyle = { backgroundImage: `url(${image})` };
    return (
        <div className={`relative bg-center bg-cover ${bottom ? "h-[100vh]" : "h-[25vh] sm:h-[33vh]"} ${top ? "mb-4 sm:mb-6" : bottom ? "mt-4 sm:mt-6 -mb-40 sm:-mb-24" : "my-4 sm:my-6"}`} style={headerStyle} >
            <div className="absolute inset-0 bg-black opacity-70"></div>
            <div className="flex justify-center items-center h-full">
                <Fade triggerOnce cascade damping={0.5} direction="up">
                    <h2 className="text-center text-white inline-block">{text}</h2>
                    <div>{children}</div>
                </Fade>
            </div>
        </div>
    )
}
