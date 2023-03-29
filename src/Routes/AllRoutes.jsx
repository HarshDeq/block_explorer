import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Header from '../Components/Header'
import BlockDetails from '../Layout/BlockDetails'
import Dashboard from '../Layout/Dashboard'
import { PATH } from './Paths'

const AllRoutes = () => {
    return (
        <>
            <Routes>
                <Route path='' element={<Header />}>
                    <Route path={PATH.home} element ={<Dashboard/>} />
                    <Route path={PATH.blockDetails} element ={<BlockDetails/>} />
                </Route>
            </Routes>
        </>
    )
}

export default AllRoutes