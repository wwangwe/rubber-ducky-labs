import React from 'react'
import { Fade } from 'react-awesome-reveal';

export const Break = ({ image, text, children, top = false, bottom = false }) => {
    const headerStyle = { backgroundImage: `url(${image})` };
    return (
        <div className={`relative bg-center bg-cover ${bottom ? "h-[100vh]" : "h-[60vh]"} ${top ? "mb-10" : bottom ? "mt-24 -mb-20" : "my-10"}`} style={headerStyle} >
            <div className="absolute inset-0 bg-black opacity-60"></div>
            <div className="flex justify-center items-center h-full">
                <Fade triggerOnce cascade damping={0.5} direction="up">
                    <h2 className="text-center text-white inline-block">{text}</h2>
                    <div>{children}</div>
                </Fade>
            </div>
        </div>
    )
}
