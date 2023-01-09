import React from 'react'
import Footer from '../layoutComponent/Footer'
import Header from '../layoutComponent/Header'
import Sidebar from '../layoutComponent/Sidebar'
import { Outlet } from 'react-router-dom'

type Props = {}

const LayoutEmployer = (props: Props) => {
    return (
        <div>
            <Header />
            <div className="row g-0">
                <Sidebar />
                {/* Content */}
                <div className="col-sm-6 col-xl-8">
                    <Outlet />
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default LayoutEmployer