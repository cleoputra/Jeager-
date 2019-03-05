import React from 'react';
import Navigation from "./Navigation";
import Footer from "./Footer";
import {scrollToTop} from "../helper";

export default class Homepage extends React.Component {
    componentDidMount() {
        scrollToTop();
    }

    render() {
        return (
            <div>
                <Navigation homePage/>
                <section style={{
                    backgroundImage: `url(${require('../assets/Rectangle_2.png')})`, backgroundSize: '100% auto',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center top',
                    height: '726px',
                    marginTop: '-5.146%'
                }}>
                    <div className="container">
                        <div className="row d-flex align-items-center" style={{paddingTop: '8%'}}>
                            <div className="col-8 text-white justify-content-center align-items-center mt-5 ml-5 mb-5">
                                <div className="ml-5 pt-3">
                                    <h1 className="homepage-text mt-5 ml-3"
                                        style={{
                                            fontSize: '47px', fontFamily: 'Rubik', fontWeight: '700'
                                        }}>
                                        PANDANGAN BARU<br/>UNTUK INDUSTRI
                                        <br/>MANUFAKTUR</h1>
                                    <p className="mt-3 ml-3 font-italic font-weight-normal" style={{
                                        fontSize: '19px', fontFamily: 'Georgia'
                                    }}>Dari tumpukan data menjadi perbaikan performansi</p>
                                    <div className="ml-3 mt-4">
                                        <div className="button-diskusi jeager-text-color text-md-center">
                                            <img src={require('../assets/wa-diskusi.png')} width="14" height="14"
                                                 alt="Diskusi bersama kami"/> Diskusikan Bersama Kami
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 d-flex justify-content-center mt-2">
                                <div style={{width: '3%'}} className="mt-5">
                                    <img src={require('../assets/Vector.png')} width="100%" alt="tombol scroll"
                                         className="mt-2"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <div className="container d-flex justify-content-center"
                         style={{paddingTop: '13%', paddingBottom: '5%'}}>
                        <div className="row pt-4 pb-4" style={{backgroundColor: '#FFD401', width: '94%'}}>
                            <div className="col-5 pt-5">
                                <img src={require('../assets/Group.png')} width="80%"
                                     style={{display: 'block', margin: '0 auto'}}
                                     alt="Jeager membantu industri untuk memaksimalkan produksi"/>
                            </div>
                            <div className="col-7 d-flex" style={{marginTop: '-7%', marginBottom: '2.25%'}}>
                                <iframe width="700" height="425" src="https://www.youtube.com/embed/DzWHKNMwrIM"
                                        frameBorder="0"
                                        title="youtube"
                                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen/>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="mt-5 pt-5 pb-5" style={{background: '#112F4B'}}>
                    <div className="container">
                        <div className="row mt-4">
                            <div className="col-12 text-center text-white">
                                <h2 className="mb-3 font-weight-bold section-title" style={{fontSize: '47px'}}>Solusi
                                    Kami</h2>
                                <p style={{fontSize: '19px', fontFamily: 'Georgia'}}>
                                    Kami menyediakan perangkat / sensor IoT dan sistem pemantauan berbasis<br/>web untuk
                                    mendapatkan lebih banyak wawasan tentang lantai pabrik.</p>
                            </div>
                        </div>
                        <div className="row mt-4 mb-5">
                            <div className="col-12">
                                <div id="myCarousel" className="carousel slide" data-ride="carousel"
                                     data-interval="false">
                                    <div className="row d-flex justify-content-center align-items-center">
                                        <div className="col-10">
                                            <div className="carousel-inner row ml-3" style={{padding: '15px'}}>
                                                <div className="carousel-item col-4 active">
                                                    <div className="card solution-card">
                                                        <div className="card d-flex align-items-center solution">
                                                            <img className="mt-3" src={require('../assets/Solusi1.png')}
                                                                 height="166" width="auto" alt="gambar solusi 1"/>
                                                            <div className="mb-4">
                                                                <h4 className="text-center jeager-text-color"
                                                                    style={{fontSize: '17px'}}>OEE<br/>Monitoring
                                                                </h4>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="carousel-item col-4">
                                                    <div className="card solution-card">
                                                        <div className="card d-flex align-items-center solution">
                                                            <img className="mt-3" src={require('../assets/Solusi3.png')}
                                                                 height="166" width="auto" alt="gambar solusi 3"/>
                                                            <div className="mb-4">
                                                                <h4 className="text-center jeager-text-color"
                                                                    style={{fontSize: '17px'}}>Environment<br/>Monitoring
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
                                                                 height="166" width="auto" alt="gambar solusi 5"/>
                                                            <div className="mb-4">
                                                                <h4 className="text-center jeager-text-color"
                                                                    style={{fontSize: '17px'}}>Maintenance<br/>System
                                                                </h4>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section style={{paddingTop: '8%', paddingBottom: '8%'}}>
                    <div className="container">
                        <div className="row">
                            <div className="col-12 text-center mt-4 text-capitalize mb-5">
                                <h2 className="jeager-text-color font-weight-bold section-title"
                                    style={{fontSize: '47px'}}>Berkolaborasi Bersama
                                    Jeager</h2>
                            </div>
                            <div className="container" style={{width: '95%'}}>
                                <div className="row" style={{padding: '2%'}}>
                                    <div className="col-3 d-flex justify-content-center pl-4 pr-4">
                                        <div className="card solution-card no-shadow" style={{width: '90%'}}>
                                            <div className="card d-flex align-items-center solution">
                                                <img className="mt-3" src={require('../assets/Value1.png')} height="166"
                                                     width="auto" alt="gambar value 1"/>
                                                <div className="mb-4">
                                                    <h5 className="text-center text-capitalize jeager-text-color font-weight-bold"
                                                        style={{fontSize: '17px'}}>No
                                                        Upfront<br/>Investment
                                                    </h5>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-3 d-flex justify-content-center pl-4 pr-4">
                                        <div className="card solution-card no-shadow" style={{width: '90%'}}>
                                            <div className="card d-flex align-items-center solution">
                                                <img className="mt-3" src={require('../assets/Value2.png')} height="166"
                                                     width="auto" alt="gambar value 2"/>
                                                <div className="mb-4">
                                                    <h5 className="text-center text-capitalize jeager-text-color font-weight-bold"
                                                        style={{fontSize: '17px'}}>Tailor
                                                        Made<br/>Solution Delivery
                                                    </h5>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-3 d-flex justify-content-center pl-4 pr-4">
                                        <div className="card solution-card no-shadow" style={{width: '90%'}}>
                                            <div className="card d-flex align-items-center solution">
                                                <img className="mt-3" src={require('../assets/Value3.png')} height="166"
                                                     width="auto" alt="gambar value 3"/>
                                                <div className="mb-4">
                                                    <h5 className="text-center text-capitalize jeager-text-color font-weight-bold"
                                                        style={{fontSize: '17px'}}>Digitizing
                                                        to Create<br/>Business Outcomes
                                                    </h5>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-3 d-flex justify-content-center pl-4 pr-4">
                                        <div className="card solution-card no-shadow" style={{width: '90%'}}>
                                            <div className="card d-flex align-items-center solution">
                                                <img className="mt-3" src={require('../assets/Value4.png')} height="166"
                                                     width="auto" alt="gambar value 4"/>
                                                <div className="mb-4">
                                                    <h5 className="text-center text-capitalize jeager-text-color font-weight-bold"
                                                        style={{fontSize: '17px'}}>New
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
                    backgroundImage: `url(${require('../assets/bgjeagerbestpartner.png')})`,
                    backgroundSize: '100% auto',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center top',
                }}>
                    <div className="container"
                         style={{paddingTop: '6%', paddingBottom: '6%', background: 'rgba(89, 117, 135, 0.6)'}}>
                        <div className="row pl-5">
                            <div className="col-12 text-white mt-5 pl-5">
                                <h1 className="font-weight-bold" style={{fontSize: '47px'}}>Jeager, Best
                                    Partner<br/>For Manufacturing<br/>Solution</h1>
                                <p style={{fontSize: '19px', lineHeight: 'normal', fontFamily: 'Georgia'}}
                                   className="mt-4 font-italic">
                                    Ubah Industri Manufaktur Anda menjadi lebih produktif bersama kami.
                                </p>
                            </div>
                            <div className="col-12 text-white mt-4 pl-5">
                                <div
                                    className="hubungi-kami text-center d-flex align-items-center justify-content-center"
                                    style={{fontSize: '14px'}}>
                                    Hubungi Kami
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <Footer/>
                </section>
            </div>
        );
    }
}