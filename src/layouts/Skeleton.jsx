import React from 'react'

export const Skeleton = ({ children }) => {
    return (
        <div className="container px-4 sm:px-10 lg:py-10 mx-auto">
            {children}
        </div>
    )
}
