import React from 'react'

export const SolutionCard = ({ solution }) => {
    return (
        <>
            <div className="border border-gray-300">
                <div className="flex space-x-2 justify-start items-center">
                    <div className="p-6 bg-gradient-to-b from-primary to-secondary shadow-2xl">
                    <i className={`fa ${solution.icon} fa-lg text-white`}></i>
                    </div>
                    <p className="uppercase px-2 text-[14px] text-left">{solution.text}</p>
                </div>
            </div>
        </>
    )
}
