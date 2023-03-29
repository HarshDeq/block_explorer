import { AppBar, Container } from '@mui/material'
import React from 'react'
import { Outlet } from 'react-router-dom'

const Header = () => {
    return (
        <>
            <AppBar className='header'>
                <Container maxWidth='xl'className='header__container'>

                    <div>
                        <div className='header__container__logo-logo '>LOGO</div>
                    </div>

                </Container>
            </AppBar>
            <div className='body__container'>
                <Outlet />
            </div>
        </>
    )
}

export default Header