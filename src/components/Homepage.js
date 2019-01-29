import React from 'react';
import Navigation from "./Navigation";
import Footer from "./Footer";

export default () => {
    return (
        <div>
            <section style={{
                backgroundImage: `url(${require('../assets/homepgbg1.png')})`, backgroundSize: '100% auto',
                backgroundRepeat: 'no-repeat', backgroundPosition: 'center top', height: '773px'
            }}>
                <div className="container">
                    <Navigation/>
                    <div className="row d-flex align-items-center">
                        <div className="col-6 text-white justify-content-center align-items-center mt-5">
                            <div className="ml-5 mt-5 pt-5">
                                <h2 className="homepage-text mt-4">PANDANGAN BARU UNTUK<br/>INDUSTRI
                                    MANUFAKTUR</h2>
                                <p className="mt-3" style={{fontSize: '20px'}}>Dari tumpukan data menjadi perbaikan
                                    performansi</p>
                                <div
                                    className="btn-pelajari text-center d-flex align-items-center justify-content-center">
                                    Pelajari Selengkapnya
                                </div>
                            </div>
                        </div>
                        <div className="col-6 d-flex justify-content-center align-items-center">
                            <img
                                src={require('../assets/homepgbgdt1.png')} alt="Jos" className="homepage-cover"/>
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
                            }} className="text-white d-flex justify-content-center align-items-center">
                                <h2 className="jeager-membantu-industri">
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
                            <h2 className="mb-3 jeager-text-color font-weight-bold section-title">SOLUSI KAMI</h2>
                            <p className="jeager-text-color font-weight-bold" style={{fontSize: '21px'}}>
                                Kami menyediakan perangkat / sensor IoT dan sistem pemantauan berbasis<br/>web untuk
                                mendapatkan lebih banyak wawasan tentang lantai pabrik.</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <div id="myCarousel" className="carousel slide" data-ride="carousel">
                                <div className="row d-flex justify-content-center align-items-center">
                                    <div className="col-1 d-flex justify-content-end">
                                        <div className="prev-arrow prev"/>
                                    </div>
                                    <div className="col-10">
                                        <div className="carousel-inner row ml-3" style={{padding: '15px'}}>
                                            <div className="carousel-item col-4 active">
                                                <div className="card solution-card">
                                                    <div className="card d-flex align-items-center solution">
                                                        <img className="mt-3" src={require('../assets/Solusi1.png')}
                                                             height="200" width="auto" alt="Card image cap"/>
                                                        <div className="mb-4">
                                                            <h4 className="text-center text-uppercase jeager-text-color font-weight-bold">OEE<br/>Monitoring
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
                                                            <h4 className="text-center text-uppercase jeager-text-color font-weight-bold">Production<br/>Traceability
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
                                                            <h4 className="text-center text-uppercase jeager-text-color font-weight-bold">Environment<br/>Management
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
                                                            <h4 className="text-center text-uppercase jeager-text-color font-weight-bold">Maintenance<br/>System
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
                                                            <h4 className="text-center text-uppercase jeager-text-color font-weight-bold">Warehouse<br/>Management
                                                                System
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
                        <div className="col-12 text-center mt-4 text-uppercase">
                            <h2 className="jeager-text-color font-weight-bold section-title">Berkolaborasi Bersama
                                Jeager</h2>
                        </div>
                        <div className="container" style={{width: '95%'}}>
                            <div className="row" style={{padding: '2%'}}>
                                <div className="col-3 d-flex justify-content-center pl-4 pr-4">
                                    <div className="card solution-card" style={{width: '90%'}}>
                                        <div className="card d-flex align-items-center solution">
                                            <img className="mt-3" src={require('../assets/Value1.png')} height="175"
                                                 width="auto" alt="Card image cap"/>
                                            <div className="mb-4">
                                                <h5 className="text-center text-capitalize jeager-text-color font-weight-bold">No
                                                    Upfront<br/>Investment
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
                                                <h5 className="text-center text-capitalize jeager-text-color font-weight-bold">Tailor
                                                    Made<br/>Solution Delivery
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
                                                <h5 className="text-center text-capitalize jeager-text-color font-weight-bold">Digitizing
                                                    to Create<br/>Business Outcomes
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
                                                <h5 className="text-center text-capitalize jeager-text-color font-weight-bold">New
                                                    Insight<br/>For Improving
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
                backgroundRepeat: 'no-repeat', backgroundPosition: 'center top', height: '900px'
            }} className="mt-4">
                <div className="container" style={{paddingTop: '12%'}}>
                    <div className="row">
                        <div className="line-white m-auto"/>
                        <div className="col-12 text-center text-white mt-5">
                            <h1 className="text-uppercase font-weight-bold" style={{fontSize: '55px'}}>JEAGER, BEST
                                PARTNER<br/>For
                                Manufacturing Solution</h1>
                            <p style={{fontSize: '25px', lineHeight: 'normal'}} className="mt-5 font-weight-bold">
                                Ubah Industri Manufaktur Anda menjadi lebih produktif bersama kami.
                            </p>
                        </div>
                        <div className="col-12 d-flex justify-content-center text-white mt-5">
                            <div
                                className="hubungi-kami text-center d-flex align-items-center justify-content-center font-weight-bold">
                                Hubungi Kami
                            </div>
                        </div>
                    </div>
                </div>
                <div style={{marginTop: '7%'}} className="pl-3">
                    <Footer/>
                </div>
            </section>
        </div>
    );
}