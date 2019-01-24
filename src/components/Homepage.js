import React from 'react';
import Navigation from "./Navigation";

export default () => {
    return (
        <div>
            <section style={{
                backgroundImage: `url(${require('../assets/homepgbg1.png')})`, backgroundSize: '100% auto',
                backgroundRepeat: 'no-repeat', backgroundPosition: 'center top', height: '765px'
            }}>
                <div className="container">
                    <Navigation/>
                    <div className="row d-flex align-items-center" style={{height: '80vh'}}>
                        <div className="col-6 text-white justify-content-center align-items-center"
                             style={{marginTop: '-11.5%'}}>
                            <div className="ml-5">
                                <h2 style={{fontSize: '33px'}}>PANDANGAN BARU UNTUK<br/>INDUSTRI MANUFAKTUR</h2>
                                <p>Dari tumpukan data menjadi perbaikan performansi</p>
                                <button type="button" className="btn btn-raised btn-info text-capitalize">Pelajari
                                    Selengkapnya
                                </button>
                            </div>
                        </div>
                        <div className="col-6 d-flex justify-content-center align-items-center">
                            <img
                                src={require('../assets/homepgbgdt1.png')}
                                width="90%" alt="Jos"/>
                        </div>
                    </div>
                </div>
            </section>
            <section style={{
                backgroundImage: `url(${require('../assets/homepgbg2.png')})`, backgroundSize: '100% auto',
                backgroundRepeat: 'no-repeat', backgroundPosition: 'center top', height: '800px', marginTop: '-5%'
            }}>
                <div className="container" style={{paddingTop: '8%'}}>
                    <div className="line mb-3" style={{marginLeft: '27%'}}/>
                    <div className="row pt-4 pb-4 d-flex align-items-center">
                        <div className="col-6 d-flex justify-content-end">
                            <iframe width="610" height="425" src="https://www.youtube.com/embed/DzWHKNMwrIM"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen/>
                        </div>
                        <div className="col-6 ">
                            <div style={{
                                background: 'linear-gradient(90deg, #112F4B 0%, #25A4D9 100%)',
                                height: '425px',
                                width: '610px'
                            }} className="text-white text-center d-flex justify-content-center align-items-center">
                                <h2 style={{fontSize: '35px', fontWeight: 500}}>
                                    JEAGER MEMBANTU INDUSTRI<br/>MANUFAKTUR UNTUK<br/>MENINGKATKAN PERFORMA<br/>PRODUKSI
                                    MELALUI<br/>"INDUSTRIAL INTERNET OF THINGS"
                                </h2>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="mt-5">
                <div className="container">
                    <div className="line m-auto"/>
                    <div className="row mt-4">
                        <div className="col-12 text-center">
                            <h2 style={{color: '#072f4c', fontWeight: 600}} className="mb-2">SOLUSI KAMI</h2>
                            <p style={{color: '#072f4c', fontWeight: 600}}>Kami menyediakan perangkat atau sensor IoT
                                dan sistem pemantauan berbasis web<br/>untuk
                                mendapatkan lebih banyak wawasan tentang lantai pabrik.</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <div id="myCarousel" className="carousel slide" data-interval="false" data-ride="carousel">
                                <div className="row d-flex justify-content-center align-items-center">
                                    <div className="col-1 d-flex justify-content-end">
                                        <div className="prev-arrow prev"/>
                                    </div>
                                    <div className="col-10">
                                        <div className="carousel-inner row ml-2" style={{padding: '10px'}}>
                                            <div className="carousel-item col-4 active">
                                                <div className="card solution-card">
                                                    <div className="card d-flex align-items-center solution">
                                                        <img className="mt-3" src={require('../assets/Solusi1.png')}
                                                             height="200" width="auto" alt="Card image cap"/>
                                                        <div className="mb-4">
                                                            <h4 className="text-center text-uppercase"
                                                                style={{fontWeight: 500, color: '#072f4c'}}>OEE<br/>Monitoring
                                                            </h4>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="carousel-item col-4">
                                                <div className="card solution-card">
                                                    <div className="card d-flex align-items-center solution">
                                                        <img className="mt-3" src={require('../assets/Solusi2.png')}
                                                             height="200" width="auto" alt="Card image cap"/>
                                                        <div className="mb-4">
                                                            <h4 className="text-center text-uppercase"
                                                                style={{
                                                                    fontWeight: 500,
                                                                    color: '#072f4c'
                                                                }}>Production<br/>Traceability
                                                                System
                                                            </h4>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="carousel-item col-4">
                                                <div className="card solution-card">
                                                    <div className="card d-flex align-items-center solution">
                                                        <img className="mt-3" src={require('../assets/Solusi3.png')}
                                                             height="200" width="auto" alt="Card image cap"/>
                                                        <div className="mb-4">
                                                            <h4 className="text-center text-uppercase"
                                                                style={{
                                                                    fontWeight: 500,
                                                                    color: '#072f4c'
                                                                }}>Environment<br/>Management
                                                                System
                                                            </h4>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="carousel-item col-4">
                                                <div className="card solution-card">
                                                    <div className="card d-flex align-items-center solution">
                                                        <img className="mt-3" src={require('../assets/Solusi4.png')}
                                                             height="200" width="auto" alt="Card image cap"/>
                                                        <div className="mb-4">
                                                            <h4 className="text-center text-uppercase"
                                                                style={{
                                                                    fontWeight: 500,
                                                                    color: '#072f4c'
                                                                }}>Maintenance<br/>System
                                                            </h4>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="carousel-item col-4">
                                                <div className="card solution-card">
                                                    <div className="card d-flex align-items-center solution">
                                                        <img className="mt-3" src={require('../assets/Solusi5.png')}
                                                             height="200" width="auto" alt="Card image cap"/>
                                                        <div className="mb-4">
                                                            <h4 className="text-center text-uppercase"
                                                                style={{
                                                                    fontWeight: 500,
                                                                    color: '#072f4c'
                                                                }}>Warehouse<br/>Management System
                                                            </h4>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-1">
                                        <div className="next-arrow next"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section style={{marginTop: '5%'}}>
                <div className="container">
                    <div className="line m-auto"/>
                    <div className="row">
                        <div className="col-12 text-center mt-4 text-uppercase mb-4">
                            <h2 style={{
                                fontWeight: 600,
                                color: '#072f4c'
                            }}>Berkolaborasi Bersama Jeager</h2>
                        </div>
                        <div className="container" style={{width: '95%'}}>
                            <div className="row">
                                <div className="col-3 d-flex justify-content-center pl-4 pr-4">
                                    <div className="card solution-card" style={{width: '90%'}}>
                                        <div className="card d-flex align-items-center solution">
                                            <img className="mt-3" src={require('../assets/Value1.png')} height="175"
                                                 width="auto" alt="Card image cap"/>
                                            <div className="mb-4">
                                                <h5 className="text-center text-capitalize"
                                                    style={{
                                                        fontWeight: 500,
                                                        color: '#072f4c'
                                                    }}>No Upfront<br/>Investment
                                                </h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-3 d-flex justify-content-center pl-4 pr-4">
                                    <div className="card solution-card" style={{width: '90%'}}>
                                        <div className="card d-flex align-items-center solution">
                                            <img className="mt-3" src={require('../assets/Value2.png')} height="175"
                                                 width="auto" alt="Card image cap"/>
                                            <div className="mb-4">
                                                <h5 className="text-center text-capitalize"
                                                    style={{
                                                        fontWeight: 500,
                                                        color: '#072f4c'
                                                    }}>Tailor Made<br/>Solution Delivery
                                                </h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-3 d-flex justify-content-center pl-4 pr-4">
                                    <div className="card solution-card" style={{width: '90%'}}>
                                        <div className="card d-flex align-items-center solution">
                                            <img className="mt-3" src={require('../assets/Value3.png')} height="175"
                                                 width="auto" alt="Card image cap"/>
                                            <div className="mb-4">
                                                <h5 className="text-center text-capitalize"
                                                    style={{
                                                        fontWeight: 500,
                                                        color: '#072f4c'
                                                    }}>Digitizing to Create<br/>Business Outcomes
                                                </h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-3 d-flex justify-content-center pl-4 pr-4">
                                    <div className="card solution-card" style={{width: '90%'}}>
                                        <div className="card d-flex align-items-center solution">
                                            <img className="mt-3" src={require('../assets/Value4.png')} height="175"
                                                 width="auto" alt="Card image cap"/>
                                            <div className="mb-4">
                                                <h5 className="text-center text-capitalize"
                                                    style={{
                                                        fontWeight: 500,
                                                        color: '#072f4c'
                                                    }}>New Insight<br/>For Improving
                                                </h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section style={{
                backgroundImage: `url(${require('../assets/homepgbg3.png')})`, backgroundSize: '100% auto',
                backgroundRepeat: 'no-repeat', backgroundPosition: 'center top', height: '800px'
            }} className="mt-5">
                <div className="container" style={{paddingTop: '15%'}}>
                    <div className="row">
                        <div className="line-white m-auto"/>
                        <div className="col-12 text-center text-white mt-4">
                            <h1 style={{
                                fontWeight: 525
                            }} className="text-uppercase">JEAGER, BEST PARTNER<br/>For Manufacturing Solution</h1>
                            <p style={{fontSize: '24px', lineHeight: 'normal'}} className="mt-5">Kami membantu mesin
                                Anda bekerja lebih cepat, lebih pintar dan lebih baik. Hubungi kami, dan<br/>kami akan
                                menghemat waktu uang anda.</p>
                        </div>
                        <div className="col-12 d-flex justify-content-center text-white mt-5">
                            <div className="hubungi-kami text-center d-flex align-items-center justify-content-center"
                                 style={{fontWeight: '500'}}>
                                Siap Untuk Industri 4.0
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className="container">
                {/*<div className="row mt-5" style={{height: '80vh'}}>
                    <div className="line m-auto"/>
                    <div className="col-12 text-center text-white">
                        <h1>SOLUSI KAMI</h1>
                        <p>Kami menyediakan perangkat / sensor IoT dan sistem pemantauan berbasis
                            <br/>web untuk mendapatkan lebih banyak wawasan tentang lantai pabrik.
                        </p>
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
                        <h5>Kami membantu mesin Anda bekerja lebih cepat, lebih pintar, dan lebih baik. Hubungi kami,
                            dan
                            kami akan menghemat waktu dan uang anda.</h5>
                    </div>
                    <div className="col-12 d-flex align-items-center justify-content-center">
                        <button type="button" className="btn btn-raised btn-info text-capitalize">
                            Siap untuk Industri 4.0
                        </button>
                    </div>
                </div>
                <div className="row bg-dark d-flex align-items-center justify-content-center mt-5"
                     style={{height: '40vh'}}>
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
                </div>*/}
            </div>
        </div>
    );
}