
import React from 'react'

const CustomCard = (props) => {
    const {children, className} = props

    return (
        <div className={`card ${className}`} >
            {children}
        </div>
    )
}

export default CustomCard