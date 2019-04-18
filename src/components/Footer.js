import React from 'react';
import {Link} from "react-router-dom";
import sweetalert from 'sweetalert2';
import {validateEmail} from "../helper";

export default class Footer extends React.Component {
    static subscribe() {
        const $ = window.$;
        const email = $('#email').val();
        const valid = validateEmail(email);
        if (valid)
            $.ajax({
                url: 'https://apijeager.codeasteroid.com/subscriber',
                type: 'POST',
                data: {email},
                success: () => {
                    $('#email').val('');
                    sweetalert.fire('Sukses!', 'Sukses subscribe', 'success').finally();
                },
                error: () => {
                    $('#email').val('');
                    sweetalert.fire('Gagal!', 'Gagal subscribe', 'error').finally();
                }
            });
        else
            sweetalert.fire('Gagal!', 'Format Email tidak sesuai', 'error').finally();
    }

    render() {
        return (
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
                                        Jakarta Digital Valley,<br/>Telkom Multimedia Tower<br/>Jl. Kebon Sirih No.10,
                                        Gambir,
                                        Jakarta</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-3 pt-4">
                        <div className="d-flex justify-content-center" style={{fontSize: '15px', lineHeight: '36px'}}>
                            <div>
                                <Link className="d-block text-white" to="/tentang">Tentang Kami</Link>
                                {/*<Link className="d-block text-white" to="/oee-monitoring-system">Solusi</Link>*/}
                                <Link className="d-block text-white" to="/berita">Berita</Link>
                                <Link className="d-block text-white" to="/kontak">Hubungi Kami</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-3" style={{paddingLeft: '2.5%', paddingTop: '2.5%'}}>
                        <div className="container d-flex justify-content-center">
                            <div className="row">
                                <div className="col-12 pl-0" style={{fontSize: '15px'}}>
                                    <a href="https://wa.me/6282232419113" className="text-white" target="_blank"
                                       rel="noopener noreferrer">
                                        <img src={require('../assets/wa.png')} width="24px" alt="Kontak whatsapp"/>
                                        &nbsp;&nbsp;+62-822-3241-9113
                                    </a>
                                </div>
                                <div className="col-12 pl-0 mt-3" style={{fontSize: '15px'}}>
                                    <a href="mailto:info@jeager.io" className="text-white" target="_blank"
                                       rel="noopener noreferrer">
                                        <img src={require('../assets/email.png')} width="29px" alt="Email Jeager"/>
                                        &nbsp;info@jeager.io
                                    </a>
                                </div>
                                <div className="col-12 pl-0 mt-3">
                                    <a href="https://www.facebook.com/jeager.iiot">
                                        <img src={require('../assets/fb.png')} width="32px" alt="icon facebook"/>
                                    </a>
                                    <a href="https://www.linkedin.com/company/jeager-iiot/">
                                        <img src={require('../assets/linkedin.png')} width="32px" alt="icon linkedin"
                                             className="ml-4"/>
                                    </a>
                                    <a href="https://medium.com/@jeageriiot">
                                        <img src={require('../assets/medium.png')} width="32px" alt="icon medium"
                                             className="ml-4"/>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-3 pt-4">
                        <p style={{fontSize: '15px'}}>Lebih dekat dengan kami</p>
                        <div className="shadow-subscribe input-group" style={{height: '19%', width: '100%'}}>
                            <input className="email" placeholder="Email" id="email"
                                   style={{border: 'none', width: '62%'}}/>
                            <button className="button-subscribe" onClick={Footer.subscribe}
                                    style={{width: '38%', border: '1px solid white', fontSize: '15px'}}>Subscribe
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}