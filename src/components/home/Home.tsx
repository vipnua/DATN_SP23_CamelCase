import React from 'react'

type Props = {}

const Home = (props: Props) => {
    return (
        <>
            {/* Content */}
            <div className="col-sm-6 col-xl-8">
                <div className="container " style={{ marginTop: '45px' }}>
                    <div className="row gx-5">
                        <div className="col">
                            <div className="col  rounded px-0">
                                <div className="col rounded" id="meo" style={{ backgroundImage: 'url("./src/assets/img/3.jpg")' }}>
                                    <div style={{ paddingTop: '25px', paddingLeft: '25px' }}>
                                        <h2>Chào mừng,</h2>
                                        <h2 style={{ color: 'orange' }}>Tên nhà tuyển dụng</h2>
                                        <p style={{ marginTop: '40px' }}>Đây là một số mẹo để bạn bắt đầu:</p>
                                        <a href="#"><img src="./src/assets/img/icon1.png" style={{ maxWidth: '20px' }} /> Câu hỏi thường
                                            gặp/Hướng dẫn</a>
                                        <p style={{ marginTop: '10px' }}><a href="#"><img src="./src/assets/img/icon1.png" style={{ maxWidth: '20px' }} /> Khám phá sản phẩm của chúng tôi</a></p>
                                    </div>
                                </div>
                                <div className="col rounded px-0" id="sodu">
                                    <h3 className="p-4">Số dư tín dụng</h3>
                                    <div className="row row-cols-4 mx-auto">
                                        <div className="col-xl-5 rounded" style={{ padding: 0, height: '150px', marginLeft: '24px', textAlign: 'center', backgroundColor: '#f5f5f5' }}>
                                            <p style={{ paddingTop: '45px' }}>0</p>
                                            <p>Đăng tin tín dụng công việc</p>
                                        </div>
                                        <div className="col-xl-5 rounded" style={{ marginLeft: '40px', textAlign: 'center', backgroundColor: '#f5f5f5' }}>
                                            <p style={{ paddingTop: '45px' }}>0</p>
                                            <p>Tiếp tục tín dụng</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col" id="tinhtrang" style={{ backgroundImage: 'url("./src/assets/img/12.jpg")' }}>
                            <div className="px-3 pt-3  rounded bg-white ">
                                <p>Tình trạng hiện tại</p>
                                <img src="./src/assets/img/tinhtrang1.jpg" style={{ textAlign: 'center' }} />
                            </div>
                        </div>
                        <div style={{ backgroundColor: 'white', marginTop: '20px', height: '250px' }} className=" rounded">
                            <h3 className="m-3">Quản lý công việc</h3>
                            <div id="qlvl">
                                <a href="#"><img src="./src/assets/img/qlcv.jpg" style={{ textAlign: 'center' }} /></a>
                            </div>
                        </div>
                        <div className=" rounded" id="tinhtrangcongviec">
                            <div className="row g-0">
                                <div className="col-6 col-md-5">
                                    <h3 className="m-3">Tình trạng công việc</h3>
                                    <div className="container">
                                        <div className="row row-cols-2 row-cols-lg-3 g-2 g-lg-3" id="ttcv">
                                            <div className="col">
                                                <div className="p-3 rounded" style={{ backgroundColor: '#d1e0f9' }}>
                                                    <p>0</p>
                                                    Tích cực
                                                </div>
                                            </div>
                                            <div className="col">
                                                <div className="p-3 rounded" style={{ backgroundColor: '#fef7e5' }}>
                                                    <p>0</p>
                                                    Không hoạt động
                                                </div>
                                            </div>
                                            <div className="col">
                                                <div className="p-3 rounded" style={{ backgroundColor: '#e5f6ec' }}>
                                                    <p>0</p>
                                                    Bản nháp
                                                </div>
                                            </div>
                                            <div className="col">
                                                <div className="p-3 rounded" style={{ backgroundColor: '#fcecec' }}>
                                                    <p>0</p>
                                                    Công việc ảo
                                                </div>
                                            </div>
                                            <div className="col">
                                                <div className="p-3 rounded" style={{ backgroundColor: '#ead9fb' }}>
                                                    <p>0</p>
                                                    Hết hạn
                                                </div>
                                            </div>
                                            <div className="col">
                                                <div className="p-3 rounded" style={{ backgroundColor: '#dcd6e2' }}>
                                                    <p>0</p>
                                                    Hết hạn 7 ngày
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6 col-md-7">
                                    <h3 className="m-3">Ứng viên mới cập nhật</h3>
                                    <div>
                                        <div className="row g-0 m-3">
                                            <div className="col-6 col-md-4 "><img className="rounded-circle" width="200px" src="./src/assets/img/1112.jpg" alt="" /></div>
                                            <div className="col-sm-6 col-md-8 ml-3">
                                                <p>Tên: <b>Nguyễn Văn A</b></p>
                                                <p>Chức danh công việc: giám đốc kinh doanh khu vực</p>
                                                <p>Kinh nghiệm: 10 năm</p>
                                                <p>Vị trí: Hà Nội</p>
                                                <p>Mức lương: $3500</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div style={{ backgroundColor: 'white', marginTop: '20px', height: '250px' }} className=" rounded">
                            <h3 className="m-3">Quản lý công việc</h3>
                            <div id="nkcv">
                                <a href="#"><img src="./src/assets/img/nhatkyhoatdong.jpg" style={{ textAlign: 'center' }} /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home