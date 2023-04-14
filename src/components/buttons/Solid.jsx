import React from 'react'

export const Solid = ({ children, alt = false }) => {
    console.log(alt)
    return (
        <button className={`${ alt ? "bg-primary" : "bg-white"} px-6 py-3 hover:bg-primary hover:opacity-70 transition-all duration-300`}>
            <div className="flex justify-between space-x-2 tracking-wide">
                <h6 className="uppercase text-sm tracking-[3px]" >{children || "Solid"}</h6>
            </div>
        </button>
    )
}
