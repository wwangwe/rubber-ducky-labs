import React from "react";

import { Fade } from "react-awesome-reveal";

export const Header = ({ title, image, children }) => {
    const headerStyle = { backgroundImage: `url(${image})` }
    return (
        <div className="relative bg-center bg-cover h-[33vh] sm:h-[50vh] -mt-20" style={headerStyle} >
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="container mx-auto relative h-full flex flex-col justify-center items-center space-y-8 sm:space-y-4 pt-20 text-center">
                <Fade triggerOnce cascade damping={0.5} direction="up">
                    <h1 className="text-white uppercase leading-[1.5]">{title}</h1>
                    {children}
                </Fade>
            </div>
        </div>
    );
};
