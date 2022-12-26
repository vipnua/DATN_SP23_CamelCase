import React from 'react'
import Footer from './layoutComponent/Footer'
import Header from './layoutComponent/Header'
import Sidebar from './layoutComponent/Sidebar'
import { Outlet } from 'react-router-dom'

type Props = {}

const LayoutWebsite = (props: Props) => {
    return (
        <div>
            <Header />
            <div className="row g-0">
                <Sidebar />
                <Outlet />
            </div>
            <Footer />
        </div>
    )
}

export default LayoutWebsite