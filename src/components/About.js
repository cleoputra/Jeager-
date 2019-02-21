import React from 'react';
import Navigation from "./Navigation";
import Footer from "./Footer";

class About extends React.Component {
    render() {
        return (
            <div>
                <Navigation backgroundColor="#112F4B"/>
                <section className="px-5 d-flex justify-content-center align-items-center mt-5">
                    <img src={require('../assets/headerabout.png')} width="90%" alt="Header about"/>
                </section>
                <section className="mt-5 pt-5">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 text-center mb-5">
                                <h1 className="font-weight-bold" style={{color: '#112F4B'}}>PROSES</h1>
                            </div>
                            <div className="col-12 d-flex justify-content-center align-items-center">
                                <img src={require('../assets/proses.png')} width="70%" alt="Gambar proses"/>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="mt-5" style={{
                    backgroundImage: `url(${require('../assets/bgaboutsection3.png')})`,
                    backgroundSize: '100% auto',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center top',
                    height: '938px'
                }}>
                    <div className="container pt-5">
                        <div className="row" style={{paddingTop: '13%'}}>
                            <div className="col-12 text-white text-center mt-4 text-uppercase mb-5">
                                <h2 className="font-weight-bold section-title">Value Dari Jeager</h2>
                            </div>
                            <div className="container" style={{width: '95%'}}>
                                <div className="row" style={{padding: '2%'}}>
                                    <div className="col-3 d-flex justify-content-center pl-4 pr-4">
                                        <div className="card solution-card no-shadow" style={{width: '90%'}}>
                                            <div className="card d-flex align-items-center solution">
                                                <img className="mt-3" src={require('../assets/Value1.png')} height="175"
                                                     width="auto" alt="gambar value 1"/>
                                                <div className="mb-4">
                                                    <h5 className="text-center text-capitalize jeager-text-color font-weight-bold">No
                                                        Upfront<br/>Investment
                                                    </h5>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-3 d-flex justify-content-center pl-4 pr-4">
                                        <div className="card solution-card no-shadow" style={{width: '90%'}}>
                                            <div className="card d-flex align-items-center solution">
                                                <img className="mt-3" src={require('../assets/Value2.png')} height="175"
                                                     width="auto" alt="gambar value 2"/>
                                                <div className="mb-4">
                                                    <h5 className="text-center text-capitalize jeager-text-color font-weight-bold">Tailor
                                                        Made<br/>Solution Delivery
                                                    </h5>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-3 d-flex justify-content-center pl-4 pr-4">
                                        <div className="card solution-card no-shadow" style={{width: '90%'}}>
                                            <div className="card d-flex align-items-center solution">
                                                <img className="mt-3" src={require('../assets/Value3.png')} height="175"
                                                     width="auto" alt="gambar value 3"/>
                                                <div className="mb-4">
                                                    <h5 className="text-center text-capitalize jeager-text-color font-weight-bold">Digitizing
                                                        to Create<br/>Business Outcomes
                                                    </h5>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-3 d-flex justify-content-center pl-4 pr-4">
                                        <div className="card solution-card no-shadow" style={{width: '90%'}}>
                                            <div className="card d-flex align-items-center solution">
                                                <img className="mt-3" src={require('../assets/Value4.png')} height="175"
                                                     width="auto" alt="gambar value 4"/>
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
                <section className="mt-5 mb-5">
                    <div className="container pb-5">
                        <div className="row pb-4">
                            <div className="col-12 text-center mt-4 text-uppercase mb-5">
                                <h2 className="jeager-text-color font-weight-bold section-title">Projek Saat Ini</h2>
                            </div>
                            <div className="col-12 d-inline-block px-5">
                                <div style={{width: '20%'}} className="float-left">
                                    <div className="card solution-card no-shadow" style={{width: '90%'}}>
                                        <div className="card d-flex align-items-center solution">
                                            <img className="mt-3" src={require('../assets/cosmetic.png')} height="125"
                                                 width="auto" alt="gambar value 4"/>
                                            <div className="mb-4 mt-4">
                                                <h5 className="text-center text-capitalize jeager-text-color">Cosmetic<br/>Manufacturing
                                                </h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div style={{width: '20%'}} className="float-left">
                                    <div className="card solution-card no-shadow" style={{width: '90%'}}>
                                        <div className="card d-flex align-items-center solution">
                                            <img className="mt-3" src={require('../assets/autoparts.png')} height="125"
                                                 width="auto" alt="gambar value 4"/>
                                            <div className="mb-4 mt-4">
                                                <h5 className="text-center text-capitalize jeager-text-color">Autoparts<br/>Manufacturing
                                                </h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div style={{width: '20%'}} className="float-left">
                                    <div className="card solution-card no-shadow" style={{width: '90%'}}>
                                        <div className="card d-flex align-items-center solution">
                                            <img className="mt-3" src={require('../assets/foodmanufact.png')}
                                                 height="125"
                                                 width="auto" alt="gambar value 4"/>
                                            <div className="mb-4 mt-4">
                                                <h5 className="text-center text-capitalize jeager-text-color">Food<br/>Manufacturing
                                                </h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div style={{width: '20%'}} className="float-left">
                                    <div className="card solution-card no-shadow" style={{width: '90%'}}>
                                        <div className="card d-flex align-items-center solution">
                                            <img className="mt-3" src={require('../assets/msgmanufact.png')}
                                                 height="125"
                                                 width="auto" alt="gambar value 4"/>
                                            <div className="mt-4 mb-4">
                                                <h5 className="text-center text-capitalize jeager-text-color">MSG<br/>Manufacturing
                                                </h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div style={{width: '20%'}} className="float-left">
                                    <div className="card solution-card no-shadow" style={{width: '90%'}}>
                                        <div className="card d-flex align-items-center solution">
                                            <img className="mt-3" src={require('../assets/agribusiness.png')}
                                                 height="125"
                                                 width="auto" alt="gambar value 4"/>
                                            <div className="mt-4 mb-4">
                                                <h5 className="text-center text-capitalize jeager-text-color">Agribusiness<br/>Manufacturing
                                                </h5>
                                            </div>
                                        </div>
                                    </div>
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

export default About;