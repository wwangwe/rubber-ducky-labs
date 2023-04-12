import React from 'react'

export const Outline = ({ children, alt = false }) => {
    return (
        <button className={`border ${alt ? "border-accent " : "bg-accent"} rounded-full px-8 p-4 hover:opacity-70 transition-colors duration-300`}>
            <div className="flex justify-between space-x-2 tracking-wide">
                <h6 className={`${alt ? "text-gray-700" : "text-white"}`}>{children || "Solid"}</h6>
            </div>
        </button>
    )
}
