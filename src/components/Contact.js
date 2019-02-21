import React from 'react';
import Navigation from "./Navigation";
import Footer from "./Footer";

class Contact extends React.Component {
    render() {
        return (
            <div>
                <section>
                    <Navigation backgroundColor="#112F4B"/>
                </section>
                <section style={{
                    backgroundImage: `url(${require('../assets/hubungikamibg.png')})`,
                    backgroundSize: '100% auto',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center top',
                    height: '744px'
                }}>
                    <div className="container pt-5 text-white">
                        <div className="row d-flex justify-content-end pt-3">
                            <div className="col-6">
                                <h1 className="font-weight-bold" style={{fontSize: '50px'}}>Hubungi Kami</h1>
                            </div>
                        </div>
                        <div className="row d-flex justify-content-end pt-2">
                            <div className="col-6">
                                <p style={{fontFamily: 'Georgia', fontSize: '19px'}}>Jika anda ingin kami mendukung
                                    bisnis anda<br/>Isi data dibawah ini untuk kami hubungi lebih lanjut.</p>
                            </div>
                        </div>
                        <div className="row d-flex justify-content-end">
                            <div className="col-6">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-4 px-0">
                                            Nama*
                                        </div>
                                        <div className="col-8 px-0" style={{marginLeft: '-5%'}}>
                                            <input className="custom-input-form"/>
                                        </div>
                                    </div>
                                    <div className="row mt-3">
                                        <div className="col-4 px-0">
                                            Email*
                                        </div>
                                        <div className="col-8 px-0" style={{marginLeft: '-5%'}}>
                                            <input className="custom-input-form"/>
                                        </div>
                                    </div>
                                    <div className="row mt-3">
                                        <div className="col-4 px-0">
                                            Nama Perusahaan*
                                        </div>
                                        <div className="col-8 px-0" style={{marginLeft: '-5%'}}>
                                            <input className="custom-input-form"/>
                                        </div>
                                    </div>
                                    <div className="row mt-3">
                                        <div className="col-4 px-0">
                                            Industri*
                                        </div>
                                        <div className="col-8 px-0" style={{marginLeft: '-5%'}}>
                                            <input className="custom-input-form"/>
                                        </div>
                                    </div>
                                    <div className="row mt-3">
                                        <div className="col-4 px-0">
                                            Profesi*
                                        </div>
                                        <div className="col-8 px-0" style={{marginLeft: '-5%'}}>
                                            <input className="custom-input-form"/>
                                        </div>
                                    </div>
                                    <div className="row mt-3">
                                        <div className="col-4 px-0">
                                            Negara*
                                        </div>
                                        <div className="col-8 px-0" style={{marginLeft: '-5%'}}>
                                            <input className="custom-input-form"/>
                                        </div>
                                    </div>
                                    <div className="row mt-3">
                                        <div className="col-4 px-0">
                                            No. HP*
                                        </div>
                                        <div className="col-8 px-0" style={{marginLeft: '-5%'}}>
                                            <input className="custom-input-form"/>
                                        </div>
                                    </div>
                                    <div className="row mt-3">
                                        <div className="col-4 px-0">
                                            Pesan / Pertanyaan*
                                        </div>
                                        <div className="col-8 px-0" style={{marginLeft: '-5%'}}>
                                            <textarea className="custom-input-form" cols="19" rows="3"
                                                      style={{width: '41%'}}/>
                                        </div>
                                    </div>
                                    <div className="row mt-3">
                                        <div className="col-4 px-0">

                                        </div>
                                        <div className="col-8 px-0" style={{marginLeft: '-5%'}}>
                                            <div
                                                className="button-form text-uppercase text-center d-flex align-items-center justify-content-center">
                                                Kirim
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

export default Contact;