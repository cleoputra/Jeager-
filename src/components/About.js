import React from 'react';
import Navigation from "./Navigation";

class About extends React.Component {
    render() {
        return (
            <div>
                <Navigation backgroundColor="#112F4B"/>
                <section className="px-5">
                    <div className="row d-flex justify-content-center align-items-center">
                        <div className="col-md-6 pt-5">
                            <img src={require('../assets/aboutbg.png')} width="100%" alt="Gambar bagian tentang."/>
                        </div>
                        <div className="col-md-6">
                            <div>
                                <h1 className="about-cover">
                                    Jeager membantu perusahaan<br/>manufaktur untuk mendapatkan<br/>data mesin produksi
                                    secara<br/><span className="jeager-text-color"> realtime dan valid</span> serta<br/>membuat
                                    sistem pemeliharaan<br/>dan perawatan mesin berbasis prediktif.
                                </h1>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default About;