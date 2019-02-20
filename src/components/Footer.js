import React from 'react';

const Footer = () => (
    <div className="container" style={{background: '#112F4B', paddingTop: '2%', paddingBottom: '2%'}}>
        <div className="row text-white">
            <div className="col-4">
                <div className="container">
                    <div className="row">
                        <div className="col-12 pl-5">
                            <img src={require('../assets/logofooter.png')} height="100%" width="60%" alt="Logo Footer"/>
                        </div>
                        <div className="col-12 mt-2 pl-5">
                            <p style={{fontSize: '17px'}}><br/>6th Floor,
                                Jakarta Digital Valley,<br/>Telkom Multimedia Tower<br/>Jl. Kebon Sirih No.10, Gambir,
                                Jakarta</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-3">
                <div className="ml-4" style={{fontSize: '25px', lineHeight: '52px'}}>
                    <div className="d-block">Tentang Kami</div>
                    <div className="d-block">Solusi</div>
                    <div className="d-block">Berita</div>
                    <div className="d-block">Hubungi Kami</div>
                </div>
            </div>
            <div className="col-5 pl-5">
                <p style={{fontSize: '25px'}}>Lebih dekat dengan kami</p>
                <div className="shadow-subscribe input-group" style={{height: '21%', width: '73%'}}>
                    <input className="email" placeholder="Email" style={{border: 'none', width: '62%'}}/>
                    <button className="button-subscribe"
                            style={{width: '38%', border: '1px solid white', fontSize: '20px'}}>Subscribe
                    </button>
                </div>
                <div className="container mt-3">
                    <div className="row">
                        <div className="col-6 pl-0" style={{fontSize: '19px'}}>
                            <img src={require('../assets/wa.png')} width="50px" alt="Kontak whatsapp"/>
                            &nbsp;+62-812-7329-7777
                        </div>
                        <div className="col-6 pl-0" style={{fontSize: '19px'}}>
                            <img src={require('../assets/email.png')} width="50px" alt="Email Jeager"/>
                            &nbsp;info@jeager.io
                        </div>
                        <div className="col-12 pl-0 mt-3">
                            <img src={require('../assets/fb.png')} width="40px" alt="icon facebook"/>
                            <img src={require('../assets/linkedin.png')} width="40px" alt="icon linkedin"
                                 className="ml-4"/>
                            <img src={require('../assets/medium.png')} width="40px" alt="icon medium" className="ml-4"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default Footer;