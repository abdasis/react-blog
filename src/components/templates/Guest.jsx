import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../ui/organisms/Header'
import MobileNavigation from '../ui/organisms/MobileNavigation'

const Guest = () => {
    return (
        <div>
            <Header />
            <MobileNavigation />
            <Outlet />
        </div>
    )
}

export default Guest
