import React from 'react'

type Props = {}

const Footer = (props: Props) => {
    return (
        <>
            {/* Footer */}
            <div style={{ backgroundColor: '#001744', color: 'white', marginTop: '20px' }}>
                <div className="container px-4 py-5" id="hanging-icons">
                    <h2 className="pb-2 border-bottom">Thông tin</h2>
                    <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
                        <div className="col d-flex align-items-start">
                            <div className="icon-square text-bg-light d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3">
                            </div>
                            <div>
                                <h3 className="fs-2">Công ty</h3>
                                <p style={{ paddingTop: '30px' }}>Ho Chi Minh City: (84 28) 3925 8456</p>
                                <p>Hanoi: (84 24) 3944 0568</p>
                                <p>Jobsupport@vietnamworks.com</p>
                            </div>
                        </div>
                        <div className="col d-flex align-items-start">
                            <div className="icon-square text-bg-light d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3">
                            </div>
                            <div>
                                <h3 className="fs-2">Company</h3>
                                <p style={{ paddingTop: '30px' }}>Về chúng tôi</p>
                                <p>Cam kết bảo mật</p>
                                <p>Điều khoản sử dụng</p>
                                <p>nội bộ nhân sự</p>
                                <p>Câu hỏi thường gặp</p>
                            </div>
                        </div>
                        <div className="col d-flex align-items-start">
                            <div className="icon-square text-bg-light d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3">
                            </div>
                            <h3 className="fs-2">Ứng dụng di động</h3>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer