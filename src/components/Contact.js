import React from 'react';
import Navigation from "./Navigation";
import Footer from "./Footer";
import swal from 'sweetalert2';
import {ERROR_BASIC} from "../constant";
import {scrollToTop} from "../helper";

export default class Contact extends React.Component {
    componentDidMount() {
        scrollToTop();
    }

    static handleFormSubmit() {
        const $ = window.$;
        const nama = $('#nama').val();
        const email = $('#email').val();
        const nama_perusahaan = $('#nama_perusahaan').val();
        const industri = $('#industri').val();
        const profesi = $('#profesi').val();
        const negara = $('#negara').val();
        const no_hp = $('#no_hp').val();
        const pesan_pertanyaan = $('#pesan_pertanyaan').val();
        const error = Contact.validate(nama, email, nama_perusahaan, industri, profesi, negara, no_hp, pesan_pertanyaan);

        if (error.length > 0) {
            let alert = swal.fire('Error', error[0], "error");
            alert.finally();
        } else {
            let alert = swal.fire('Success', null, "success");
            alert.finally();
        }
    }

    static validate(nama, email, nama_perusahaan, industri, profesi, negara, no_hp, pesan_pertanyaan) {
        let error = [];

        if (nama === '' || nama.length < 3)
            error.push('Nama ' + ERROR_BASIC);
        if (email === '' || email.length < 3)
            error.push('Email ' + ERROR_BASIC);
        if (!Contact.validateEmail(email))
            error.push('Format email tidak sesuai');
        if (nama_perusahaan === '' || nama_perusahaan.length < 3)
            error.push('Nama Perusahaan ' + ERROR_BASIC);
        if (industri === '' || industri.length < 3)
            error.push('Industri ' + ERROR_BASIC);
        if (profesi === '' || profesi.length < 3)
            error.push('Profesi ' + ERROR_BASIC);
        if (negara === '' || negara.length < 3)
            error.push('Negara ' + ERROR_BASIC);
        if (no_hp === '' || no_hp.length < 3)
            error.push('No HP ' + ERROR_BASIC);
        if (pesan_pertanyaan === '' || pesan_pertanyaan.length < 3)
            error.push('Pesan/Pertanyaan ' + ERROR_BASIC);

        return error
    };

    static validateEmail(email) {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    render() {
        return (
            <div>
                <Navigation backgroundColor="#112F4B"/>
                <section style={{
                    backgroundImage: `url(${require('../assets/hubungikamibg.png')})`,
                    backgroundSize: '100% auto',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center top',
                    height: '698px'
                }}>
                    <div className="container text-white pt-5">
                        <div className="row d-flex justify-content-end pt-2">
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
                        <div className="row d-flex justify-content-end pt-2">
                            <div className="col-6">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-4 px-0">
                                            Nama*
                                        </div>
                                        <div className="col-8 px-0" style={{marginLeft: '-5%'}}>
                                            <input className="custom-input-form" id="nama"/>
                                        </div>
                                    </div>
                                    <div className="row mt-3">
                                        <div className="col-4 px-0">
                                            Email*
                                        </div>
                                        <div className="col-8 px-0" style={{marginLeft: '-5%'}}>
                                            <input className="custom-input-form" id="email"/>
                                        </div>
                                    </div>
                                    <div className="row mt-3">
                                        <div className="col-4 px-0">
                                            Nama Perusahaan*
                                        </div>
                                        <div className="col-8 px-0" style={{marginLeft: '-5%'}}>
                                            <input className="custom-input-form" id="nama_perusahaan"/>
                                        </div>
                                    </div>
                                    <div className="row mt-3">
                                        <div className="col-4 px-0">
                                            Industri*
                                        </div>
                                        <div className="col-8 px-0" style={{marginLeft: '-5%'}}>
                                            <input className="custom-input-form" id="industri"/>
                                        </div>
                                    </div>
                                    <div className="row mt-3">
                                        <div className="col-4 px-0">
                                            Profesi*
                                        </div>
                                        <div className="col-8 px-0" style={{marginLeft: '-5%'}}>
                                            <input className="custom-input-form" id="profesi"/>
                                        </div>
                                    </div>
                                    <div className="row mt-3">
                                        <div className="col-4 px-0">
                                            Negara*
                                        </div>
                                        <div className="col-8 px-0" style={{marginLeft: '-5%'}}>
                                            <input className="custom-input-form" id="negara"/>
                                        </div>
                                    </div>
                                    <div className="row mt-3">
                                        <div className="col-4 px-0">
                                            No. HP*
                                        </div>
                                        <div className="col-8 px-0" style={{marginLeft: '-5%'}}>
                                            <input className="custom-input-form" id="no_hp"/>
                                        </div>
                                    </div>
                                    <div className="row mt-3">
                                        <div className="col-4 px-0">
                                            Pesan / Pertanyaan*
                                        </div>
                                        <div className="col-8 px-0" style={{marginLeft: '-5%'}}>
                                            <textarea className="custom-input-form" rows="3" id="pesan_pertanyaan"
                                                      style={{width: '43.5%'}}/>
                                        </div>
                                    </div>
                                    <div className="row mt-3">
                                        <div className="col-4 px-0">

                                        </div>
                                        <div className="col-8 px-0" style={{marginLeft: '-5%'}}>
                                            <div
                                                onClick={Contact.handleFormSubmit}
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