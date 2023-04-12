import React from 'react'

export const Solid = ({ children, alt = false }) => {
    return (
        <button className={`bg-${ alt ? "primary" : "white"} rounded-full px-8 p-4 hover:bg-primary hover:opacity-90 transition-colors duration-300`}>
            <div className="flex justify-between space-x-2 tracking-wide">
                <h6>{children || "Solid"}</h6>
            </div>
        </button>
    )
}
