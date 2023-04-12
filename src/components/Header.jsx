import React from "react";

import { Fade } from "react-awesome-reveal";

export const Header = ({ title, image }) => {
    const headerStyle = { backgroundImage: `url(${image})` }
    return (
        <div className="relative bg-center bg-cover h-[66vh] md:h-[50vh] -mt-20 mb-4" style={headerStyle} >
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="relative h-full flex flex-col justify-center items-center space-y-8 md:space-y-10 pt-20 mx-auto px-4 md:px-24 text-center">
                <Fade cascade damping={0.5} direction="up">
                    <h1 className="text-white uppercase leading-[1.5]">{title}</h1>
                </Fade>
            </div>
        </div>
    );
};
