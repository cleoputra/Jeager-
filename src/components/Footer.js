import React from 'react';

export default () => (
    <div className="container" style={{background: '#112F4B', paddingTop: '2%', paddingBottom: '0%'}}>
        <div className="row text-white">
            <div className="col-3">
                <div className="container">
                    <div className="row">
                        <div className="col-12 pl-5">
                            <img src={require('../assets/logofooter.png')} height="100%" width="100%"
                                 alt="Logo Footer"/>
                        </div>
                        <div className="col-12 mt-2 pl-5">
                            <p style={{fontSize: '15px'}}><br/>6th Floor,
                                Jakarta Digital Valley,<br/>Telkom Multimedia Tower<br/>Jl. Kebon Sirih No.10, Gambir,
                                Jakarta</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-3 pt-4">
                <div className="d-flex justify-content-center" style={{fontSize: '15px', lineHeight: '36px'}}>
                    <div>
                        <div className="d-block">Tentang Kami</div>
                        <div className="d-block">Solusi</div>
                        <div className="d-block">Berita</div>
                        <div className="d-block">Hubungi Kami</div>
                    </div>
                </div>
            </div>
            <div className="col-3" style={{paddingLeft: '2.5%', paddingTop: '2.5%'}}>
                <div className="container d-flex justify-content-center">
                    <div className="row">
                        <div className="col-12 pl-0" style={{fontSize: '15px'}}>
                            <img src={require('../assets/wa.png')} width="24px" alt="Kontak whatsapp"/>
                            &nbsp;&nbsp;+62-812-7329-7777
                        </div>
                        <div className="col-12 pl-0 mt-3" style={{fontSize: '15px'}}>
                            <img src={require('../assets/email.png')} width="29px" alt="Email Jeager"/>
                            &nbsp;info@jeager.io
                        </div>
                        <div className="col-12 pl-0 mt-3">
                            <img src={require('../assets/fb.png')} width="32px" alt="icon facebook"/>
                            <img src={require('../assets/linkedin.png')} width="32px" alt="icon linkedin"
                                 className="ml-4"/>
                            <img src={require('../assets/medium.png')} width="32px" alt="icon medium" className="ml-4"/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-3 pt-4">
                <p style={{fontSize: '15px'}}>Lebih dekat dengan kami</p>
                <div className="shadow-subscribe input-group" style={{height: '19%', width: '100%'}}>
                    <input className="email" placeholder="Email" style={{border: 'none', width: '62%'}}/>
                    <button className="button-subscribe"
                            style={{width: '38%', border: '1px solid white', fontSize: '15px'}}>Subscribe
                    </button>
                </div>
            </div>
        </div>
    </div>
);