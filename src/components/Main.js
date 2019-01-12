import React from 'react';
import Navigation from "./Navigation";

export default () => {
    return (
        <div className="container">
            <Navigation/>
            <div className="row d-flex align-items-center" style={{height: '80vh'}}>
                <div className="col-6 text-white d-flex justify-content-center align-items-center">
                    <div>
                        <h2 style={{fontSize: '33px'}}>PANDANGAN BARU UNTUK INDUSTRI MANUFAKTUR</h2>
                        <p>Dari tumpukan data menjadi perbaikan performansi</p>
                        <button type="button" className="btn btn-raised btn-info text-capitalize">Pelajari
                            Selengkapnya
                        </button>
                    </div>
                </div>
                <div className="col-6 d-flex justify-content-center align-items-center">
                    <img
                        src="https://jeager.io/static/media/denah_manufaktur.4587164f.png"
                        width="90%" alt="Jos"/>
                </div>
            </div>
            <div className="line" style={{marginLeft: '20%'}}/>
            <div className="row pt-4 pb-4">
                <div className="col-6 d-flex justify-content-center align-items-center">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/DzWHKNMwrIM" frameBorder="0"
                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen/>
                </div>
                <div className="col-6 text-white d-flex justify-content-center align-items-center text-center"
                     style={{
                         backgroundImage: 'linear-gradient(141deg, #9fb8ad 0%, #1fc8db 51%, #2cb5e8 75%)',
                         height: '315px'
                     }}>
                    <h2 style={{fontSize: '27px'}}>
                        JEAGER MEMBANTU INDUSTRI MANUFAKTUR UNTUK MENINGKATKAN PERFORMA PRODUKSI MELALUI<br/>"INDUSTRIAL
                        INTERNET OF THINGS"
                    </h2>
                </div>
            </div>
            <div className="line" style={{marginLeft: '38%'}}/>
            <div className="row mt-5" style={{height: '80vh'}}>
                <div className="line m-auto"/>
                <div className="col-12 text-center text-white">
                    <h1>SOLUSI KAMI</h1>
                    <p>Kami menyediakan perangkat / sensor IoT dan sistem pemantauan berbasis
                        <br/>web untuk mendapatkan lebih banyak wawasan tentang lantai pabrik.
                    </p>
                </div>
                <div className="row">
                    <div className="col-12">
                        <div id="myCarousel" className="carousel slide" data-ride="carousel">
                            <div className="row d-flex justify-content-center align-items-center">
                                <div className="col-1 ">
                                    <a className="btn btn-light mx-1 prev" href="javascript:void(0)"
                                       title="Previous">
                                        <i className="fa fa-lg fa-caret-left" style={{fontSize: '165px'}}/>
                                    </a>
                                </div>
                                <div className="col-10">
                                    <div className="carousel-inner row w-100 mx-auto">
                                        <div className="carousel-item col-4 active">
                                            <div className="card custom-shadow">
                                                <img className="card-img-top"
                                                     src="https://jeager.io/static/media/denah_manufaktur.4587164f.png"
                                                     alt="Card image cap"/>
                                                <h3 className="text-center">Utility Management System</h3>
                                            </div>
                                        </div>
                                        <div className="carousel-item col-4">
                                            <div className="card">
                                                <div className="card">
                                                    <img className="card-img-top"
                                                         src="https://jeager.io/static/media/denah_manufaktur.4587164f.png"
                                                         alt="Card image cap"/>
                                                    <h3 className="text-center">Utility Management System</h3>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="carousel-item col-4">
                                            <div className="card">
                                                <div className="card">
                                                    <img className="card-img-top"
                                                         src="https://jeager.io/static/media/denah_manufaktur.4587164f.png"
                                                         alt="Card image cap"/>
                                                    <h3 className="text-center">Utility Management System</h3>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="carousel-item col-4">
                                            <div className="card">
                                                <div className="card">
                                                    <img className="card-img-top"
                                                         src="https://jeager.io/static/media/denah_manufaktur.4587164f.png"
                                                         alt="Card image cap"/>
                                                    <h3 className="text-center">Utility Management System</h3>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-1">
                                    <a className="btn btn-light mx-1 next" href="javascript:void(0)"
                                       title="Next">
                                        <i className="fa fa-lg fa-caret-right" style={{fontSize: '165px'}}/>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="line m-auto"/>
                <div className="col-12 text-white text-center">
                    <h1>BERKOLABORASI BERSAMA JEAGER</h1>
                </div>
                <div className="col-12">
                    <div className="row">
                        <div className="col-3">
                            <div className="card custom-shadow">
                                <img className="card-img-top"
                                     src="https://jeager.io/static/media/denah_manufaktur.4587164f.png"
                                     alt="Card image cap"/>
                                <h3 className="text-center">Utility Management System</h3>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="card custom-shadow">
                                <img className="card-img-top"
                                     src="https://jeager.io/static/media/denah_manufaktur.4587164f.png"
                                     alt="Card image cap"/>
                                <h3 className="text-center">Utility Management System</h3>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="card custom-shadow">
                                <img className="card-img-top"
                                     src="https://jeager.io/static/media/denah_manufaktur.4587164f.png"
                                     alt="Card image cap"/>
                                <h3 className="text-center">Utility Management System</h3>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="card custom-shadow">
                                <img className="card-img-top"
                                     src="https://jeager.io/static/media/denah_manufaktur.4587164f.png"
                                     alt="Card image cap"/>
                                <h3 className="text-center">Utility Management System</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row mt-5">
                <div className="line m-auto"/>
                <div className="col-12 text-white text-center">
                    <h1>JEAGER, BEST PARTNER</h1>
                    <p style={{fontSize: '20px'}}>For Manufacturing Solution</p>
                </div>
                <div className="col-12 text-white text-center">
                    <h5>Kami membantu mesin Anda bekerja lebih cepat, lebih pintar, dan lebih baik. Hubungi kami, dan
                        kami akan menghemat waktu dan uang anda.</h5>
                </div>
                <div className="col-12 d-flex align-items-center justify-content-center">
                    <button type="button" className="btn btn-raised btn-info text-capitalize">
                        Siap untuk Industri 4.0
                    </button>
                </div>
            </div>
            <div className="row bg-dark d-flex align-items-center justify-content-center mt-5" style={{height: '40vh'}}>
                <div className="col-4 text-white mt-1">
                    <img src="https://jeager.io/static/media/white-logo.168e2d24.png" width="100%"
                         className="d-inline-block align-top" alt=""/>
                    <h6 className="mt-3">
                        6th Floor, Jakarta Digital Valley,<br/>Telkom Multimedia Tower<br/>Jl. Kebon Sirih No 10.,
                        Gambir, Jakarta
                    </h6>
                </div>
                <div className="col-3 d-flex align-items-center justify-content-center mt-4">
                    <ul className="list-unstyled text-white" style={{fontSize: '25px'}}>
                        <li className="font-weight-bold">Tentang Kami</li>
                        <li className="font-weight-bold">Solusi</li>
                        <li className="font-weight-bold">Berita</li>
                        <li className="font-weight-bold">Hubungi Kami</li>
                    </ul>
                </div>
                <div className="col-5 mt-4">
                    <div className="row text-white">
                        <div className="col-12">
                            <h4>Lebih dekat dengan kami</h4>
                        </div>
                        <div className="col-12 mt-2">
                            <div className="row">
                                <div className="col-8">
                                    <div className="input-group">
                                        <input className="form-control mr-sm-2 text-light" type="email"
                                               placeholder="Email"
                                               aria-label="Email"/>
                                        <button className="btn btn-outline-info my-2 my-sm-0"
                                                type="submit">Subscribe
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 mt-2">
                            <div className="row d-flex align-items-center">
                                <div className="col-6">
                                    <div className="row">
                                        <div className="col-12">
                                            <div className="input-group">
                                                <img
                                                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Disk_pack1.svg/1200px-Disk_pack1.svg.png"
                                                    height="30" width="30" alt="test"/>
                                                <p className="ml-1 mt-1">+62-812-7329-7777</p>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="input-group">
                                                <img
                                                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Disk_pack1.svg/1200px-Disk_pack1.svg.png"
                                                    height="30" width="30" alt="test"/>
                                                <p className="ml-1 mt-1">+62-812-7329-7777</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <img
                                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Disk_pack1.svg/1200px-Disk_pack1.svg.png"
                                        height="30" width="30" alt="test"/>
                                    <img
                                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Disk_pack1.svg/1200px-Disk_pack1.svg.png"
                                        height="30" width="30" alt="test"/>
                                    <img
                                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Disk_pack1.svg/1200px-Disk_pack1.svg.png"
                                        height="30" width="30" alt="test"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}