import React from 'react'
import { NavLink } from 'react-router-dom'

const Link = (props) => {
    const {to, label} = props
    return (
        <NavLink to={to}>
            {label}
        </NavLink>
    )
}

export default Link