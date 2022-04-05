import React from 'react'
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom'
import { Blog } from '../pages'
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
