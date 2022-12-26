import React from 'react'

type Props = {}

const Header = (props: Props) => {
    return (
        <>
            {/* Header */}
            <div className="nav" id="nav">
                <ul>
                    <li><a className="logo" href="#">Bảng điều khiển</a></li>
                    <li><a className="active" href="#">Công việc</a></li>
                    <li><a href="#">Ứng viên</a></li>
                    <li><a href="#">Giới thiệu</a></li>
                    <li><a href="#">Trật tự</a></li>
                    <li><a href="#">Bài viết</a></li>
                    <li className="btn_logout"><a href="#">Đăng xuất</a></li>
                </ul>
            </div>
        </>
    )
}

export default Header