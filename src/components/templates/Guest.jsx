import React from 'react'
import { Outlet } from 'react-router-dom'
import { Home } from '../pages'
import Header from '../ui/organisms/Header'

const Guest = () => {
    return (
        <div>
            <Header />
            <Outlet />
        </div>
    )
}

export default Guest
