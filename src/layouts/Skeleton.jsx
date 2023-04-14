import React from 'react'

export const Skeleton = ({ children }) => {
    return (
        <div className="container px-4 mx-auto">
            {children}
        </div>
    )
}
