import React from 'react';

const Footer = () => (
    <div className="container">
        <div className="row">
            <div className="col-4">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <img src={require('../assets/logowarna.png')} height="100%" width="80%" alt="Logo Footer"/>
                        </div>
                        <div className="col-12 mt-2 pl-5">
                            <p className="font-weight-bold jeager-text-color" style={{fontSize: '17px'}}>6th Floor,
                                Jakarta Digital Valley,<br/>Telkom Multimedia Tower<br/>Jl. Kebon Sirih No.10, Gambir,
                                Jakarta</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-3 pt-4 mt-4">
                <div className="font-weight-bold ml-4" style={{fontSize: '30px'}}>
                    <a href="#" className="d-block jeager-text-color">Tentang Kami</a>
                    <a href="#" className="d-block jeager-text-color">Solusi</a>
                    <a href="#" className="d-block jeager-text-color">Berita</a>
                    <a href="#" className="d-block jeager-text-color">Hubungi Kami</a>
                </div>
            </div>
            <div className="col-5 pl-5 mt-4">
                <p className="font-weight-bold" style={{fontSize: '30px'}}>Lebih dekat dengan kami</p>
                <div className="shadow-subscribe input-group" style={{width: '80%', height: '21%'}}>
                    <input className="email" placeholder="Email"
                           style={{border: 'none', width: '65%', height: '100%'}}/>
                    <button className="button-subscribe" style={{width: '35%', height: '100%'}}>Subscribe</button>
                </div>
                <div className="container mt-3">
                    <div className="row">
                        <div className="col-6 px-0">
                            <img src={require('../assets/telfon.png')} width="20%" alt="icon telephone"/>
                            <p className="d-inline jeager-text-color font-weight-bold footer-attrib-fontsize ml-3">+62-812-7329-7777</p>
                            <img src={require('../assets/email.png')} width="20%" alt="icon email"/>
                            <p className="d-inline jeager-text-color font-weight-bold footer-attrib-fontsize ml-3">info@jeager.io</p>
                        </div>
                        <div className="col-6 px-0 d-flex align-items-center justify-content-center">
                            <img src={require('../assets/ig.png')} width="20%" alt="icon instagram"/>
                            <img src={require('../assets/fb.png')} width="20%" alt="icon facebook"/>
                            <img src={require('../assets/twitter.png')} width="20%" alt="icon twitter"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default Footer;