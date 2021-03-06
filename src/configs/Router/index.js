import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Blog, Home, Portofolio } from '../../components/pages'
import Authenticated from '../../components/templates/Authenticated'
import Guest from '../../components/templates/Guest'
const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Guest />}>
                    <Route path='/' element={<Home />} />
                    <Route path='/blog' element={<Blog />} />
                    <Route path='/portofolio' element={<Portofolio />} />
                </Route>
                <Route path='admin' element={<Authenticated />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router
