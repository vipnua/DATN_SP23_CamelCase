import React from 'react'
import { NavLink } from 'react-router-dom'

type Props = {}

const Sidebar = (props: Props) => {
    return (
        <>
            {/* Sidebar */}
            <div className="col-6 col-xl-2">
                <ul className="nav flex-column" id="navbar">
                    <li style={{ borderBottom: '1px solid #f3f3f3' }}>
                        <a><img src="./src/assets/img/singin.jpg" style={{ margin: '0px 15px 0px 0' }} width="40px" alt="" />
                            <b>Lê Anh Thái</b>
                        </a>
                    </li>
                    <li className="nav-item">
                        <NavLink to={'/'}>
                            <a className=""> Bảng Tin</a>
                        </NavLink>
                    </li>
                    <li className="nav-item" style={{ borderBottom: '1px solid #f3f3f3' }}>
                        <a className="nav">Toppy AI - Đề xuất</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav">Chiến dịch tuyển dụng</a>
                    </li>
                    <li className="nav-item">
                        <NavLink to={'/posts'}>
                            <a className="nav">Quản lý bài viết</a>
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <a className="nav">Quản lý CV</a>
                    </li>
                    <li className="nav-item" style={{ borderBottom: '1px solid #f3f3f3' }}>
                        <a className="nav">Báo cáo tuyển dụng</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav">Dịch vụ của tôi</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav">Mã ưu đãi</a>
                    </li>
                    <li className="nav-item" style={{ borderBottom: '1px solid #f3f3f3' }}>
                        <a className="nav">Theo dõi đơn hàng</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav">Lịch sử hoạt động</a>
                    </li>
                    <li className="nav-item" style={{ borderBottom: '1px solid #f3f3f3' }}>
                        <a className="nav">Cài đặt tài khoản</a>
                    </li>
                    <li className="nav-item" style={{ borderBottom: '1px solid #f3f3f3' }}>
                        <a className="nav">Thông báo hệ thống</a>
                    </li>
                    <li className="nav-item" style={{ borderBottom: '1px solid #f3f3f3' }}>
                        <a className="nav">Hộp thư hộ trợ</a>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default Sidebar