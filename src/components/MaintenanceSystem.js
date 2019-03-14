import React from 'react';
import {scrollToTop} from "../helper";
import Navigation from "./Navigation";
import {Link} from "react-router-dom";
import Footer from "./Footer";

export default class MaintenanceSystem extends React.Component {
    componentDidMount() {
        scrollToTop();
    }

    render() {
        return (
            <div>
                <Navigation backgroundColor="#112F4B"/>
                <section style={{
                    backgroundImage: `url(${require('../assets/bgmaintenace.png')})`,
                    backgroundSize: '100% auto',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center top',
                    height: '291px'
                }}>
                    <div className="container" style={{
                        paddingTop: '4%',
                        paddingLeft: '6%'
                    }}>
                        <div className="row">
                            <div className="col-12 text-white">
                                <div style={{borderBottom: '1px solid white', width: '10%', fontSize: '20px'}}>
                                    <Link className="text-white" to="/">Home</Link>&nbsp;>&nbsp;
                                    <Link className="text-white" to="/maintenance-system">Solusi</Link>
                                </div>
                            </div>
                            <div className="col-12 text-white pt-2">
                                <h1 className="font-weight-bold" style={{fontSize: '60px'}}>MAINTENANCE
                                    SYSTEM</h1>
                            </div>
                        </div>
                    </div>
                </section>
                <section style={{
                    backgroundImage: `url(${require('../assets/painproblem.png')})`,
                    backgroundSize: '100% auto',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center top',
                    height: '545px'
                }}>
                    <div className="container pt-5">
                        <div className="row">
                            <div className="col-6" style={{
                                paddingTop: '8.5%',
                                paddingLeft: '7.25%',
                            }}>
                                <h1 className="jeager-text-color" style={{
                                    fontSize: '50px',
                                    lineHeight: '77px',
                                }}>PAIN<br/>PROBLEM</h1>
                            </div>
                            <div className="col-6" style={{
                                paddingTop: '9%',
                                fontSize: '20px'
                            }}>
                                <div style={{fontFamily: 'Georgia'}}><b>01</b>&emsp;Lorem ipsum dolor sit amet,
                                    consectetur adipiscing elit
                                </div>
                                <div className="mt-2" style={{fontFamily: 'Georgia'}}><b>02</b>&emsp;Lorem ipsum dolor
                                    sit amet, consectetur adipiscing elit
                                </div>
                                <div className="mt-2" style={{fontFamily: 'Georgia'}}><b>03</b>&emsp;Lorem ipsum dolor
                                    sit amet, consectetur adipiscing elit
                                </div>
                                <div className="mt-2" style={{fontFamily: 'Georgia'}}><b>04</b>&emsp;Lorem ipsum dolor
                                    sit amet, consectetur adipiscing elit
                                </div>
                                <div className="mt-2" style={{fontFamily: 'Georgia'}}><b>05</b>&emsp;Lorem ipsum dolor
                                    sit amet, consectetur adipiscing elit
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section style={{
                    backgroundImage: `url(${require('../assets/solusi.png')})`,
                    backgroundSize: '100% auto',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center top',
                    height: '545px'
                }}>
                    <div className="container">
                        <div className="row text-white">
                            <div className="col-6" style={{
                                paddingTop: '12%',
                                paddingLeft: '7.85%',
                            }}>
                                <h1 style={{
                                    fontSize: '50px',
                                    lineHeight: '77px',
                                }}>SOLUSI</h1>
                            </div>
                            <div className="col-6" style={{
                                paddingTop: '10.25%'
                            }}>
                                <div style={{
                                    fontFamily: 'Georgia',
                                    fontSize: '20px',
                                    width: '90%',
                                    lineHeight: '34px'
                                }}>Lorem ipsum dolor sit
                                    amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                                    dolore
                                    magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                                    nisi ut
                                    aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                                    voluptate
                                    velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                                    cupidatat
                                    non
                                    proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section style={{
                    backgroundImage: `url(${require('../assets/bgmod.png')})`,
                    backgroundSize: '100% auto',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center top',
                    height: '453px'
                }}>
                    <div className="container">
                        <div className="row">
                            <div className="col-6" style={{
                                paddingTop: '9%',
                                paddingLeft: '7.85%',
                            }}>
                                <h1 style={{
                                    fontSize: '50px',
                                    lineHeight: '77px',
                                }}>MODUL</h1>
                            </div>
                            <div className="col-6" style={{
                                paddingTop: '6.6%'
                            }}>
                                <div className="container">
                                    <div className="row">
                                        <div className="col-4 jeager-text-color">
                                            <ul>
                                                <li style={{fontFamily: 'Georgia', fontSize: '20px'}}>Report</li>
                                                <li className="mt-4"
                                                    style={{fontFamily: 'Georgia', fontSize: '20px'}}>Manpower
                                                </li>
                                                <li className="mt-4"
                                                    style={{fontFamily: 'Georgia', fontSize: '20px'}}>Asset
                                                </li>
                                                <li className="mt-4"
                                                    style={{fontFamily: 'Georgia', fontSize: '20px'}}>Sparepart
                                                </li>
                                                <li className="mt-4"
                                                    style={{fontFamily: 'Georgia', fontSize: '20px'}}>Notification
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="col-8 jeager-text-color">
                                            <ul>
                                                <li style={{fontFamily: 'Georgia', fontSize: '20px'}}>History</li>
                                                <li className="mt-4"
                                                    style={{fontFamily: 'Georgia', fontSize: '20px'}}>Inspection
                                                </li>
                                                <li className="mt-4"
                                                    style={{fontFamily: 'Georgia', fontSize: '20px'}}>Maintenance Plan
                                                </li>
                                                <li className="mt-4"
                                                    style={{fontFamily: 'Georgia', fontSize: '20px'}}>Analytics
                                                    Dashboard
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section style={{padding: '2.1%'}}>
                    <div className="container" style={{
                        backgroundImage: `url(${require('../assets/diagramflow.png')})`,
                        backgroundSize: '100% auto',
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center top',
                        height: '868px'
                    }}>
                        <div className="row text-white">
                            <div className="col-6" style={{
                                paddingTop: '8%',
                                paddingLeft: '6.5%',
                            }}>
                                <h1 style={{
                                    fontSize: '50px',
                                    lineHeight: '77px',
                                }}>DIAGRAM FLOW</h1>
                            </div>
                        </div>
                    </div>
                </section>
                <section style={{marginTop: '7%', marginBottom: '7%'}}>
                    <h1 style={{fontSize: '29px', fontFamily: 'Ubuntu'}}
                        className="font-weight-bold text-center">Dapatkan demo produk dengan menghubungi kami</h1>
                    <div className="w-100 d-flex justify-content-center mt-5">
                        <Link to="/kontak">
                            <div
                                className="hubungi-kami text-white text-center d-flex align-items-center justify-content-center"
                                style={{width: '241px', height: '63px'}}>
                                Hubungi Kami
                            </div>
                        </Link>
                    </div>
                </section>
                <section>
                    <Footer/>
                </section>
            </div>
        );
    }
}