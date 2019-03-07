import React from 'react';
import {scrollToTop} from "../helper";
import Navigation from "./Navigation";
import Footer from "./Footer";

export default class News extends React.Component {
    componentDidMount() {
        scrollToTop();
    }

    render() {
        return (
            <div>
                <Navigation backgroundColor="#112F4B"/>
                <section className="pl-3 pr-5 mt-5 mb-5">
                    <div className="container">
                        <div className="row">
                            <div className="col-9">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-8 d-flex">
                                            <div style={{width: '596px', height: '370px'}}>
                                                <img src={require('../assets/news1.png')} width="596px" height="370px"
                                                     alt="News 1"/>
                                                <div style={{
                                                    background: '#112F4B',
                                                    width: '596px',
                                                    height: '185px',
                                                    mixBlendMode: 'normal',
                                                    opacity: '0.7',
                                                    marginTop: '-59%'
                                                }}/>
                                                <h1 className="text-white" style={{
                                                    position: 'absolute',
                                                    fontSize: '41px',
                                                    marginTop: '-25%',
                                                    marginLeft: '4%',
                                                    zIndex: 1
                                                }}>
                                                    Perkembangan<br/>
                                                    Dunia Industri 4.0<br/>
                                                    Di Indonesia
                                                </h1>
                                            </div>
                                        </div>
                                        <div className="col-4 d-flex justify-content-start" style={{marginLeft: '-3%'}}>
                                            <div className="container">
                                                <div className="row">
                                                    <div className="col-12 px-0">
                                                        <div style={{width: '350px', height: '173px'}}>
                                                            <img src={require('../assets/news2.png')} width="350"
                                                                 height="173"
                                                                 alt="News 2"/>
                                                            <div style={{
                                                                background: '#112F4B',
                                                                width: '350px',
                                                                height: '65px',
                                                                mixBlendMode: 'normal',
                                                                opacity: '0.7',
                                                                marginTop: '-45%'
                                                            }}/>
                                                            <h1 className="text-white" style={{
                                                                position: 'absolute',
                                                                fontSize: '20px',
                                                                marginTop: '-19%',
                                                                marginLeft: '4%',
                                                                zIndex: 1
                                                            }}>
                                                                Perkembangan Dunia<br/>
                                                                Industri 4.0 di Indonesia
                                                            </h1>
                                                        </div>
                                                    </div>
                                                    <div className="col-12 px-0 mt-4">
                                                        <div style={{width: '350px', height: '173px'}}>
                                                            <img src={require('../assets/news3.png')} width="350"
                                                                 height="173"
                                                                 alt="News 2"/>
                                                            <div style={{
                                                                background: '#112F4B',
                                                                width: '350px',
                                                                height: '65px',
                                                                mixBlendMode: 'normal',
                                                                opacity: '0.7',
                                                                marginTop: '-45%'
                                                            }}/>
                                                            <h1 className="text-white" style={{
                                                                position: 'absolute',
                                                                fontSize: '20px',
                                                                marginTop: '-19%',
                                                                marginLeft: '4%',
                                                                zIndex: 1
                                                            }}>
                                                                Perkembangan Dunia<br/>
                                                                Industri 4.0 di Indonesia
                                                            </h1>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 mt-4">
                                            <div style={{background: '#112F4B', width: '104%'}}
                                                 className="pl-4 pt-3 pb-1">
                                                <h1 className="text-white" style={{fontSize: '20px'}}>Perkembangan Dunia
                                                    Industri 4.0 di Indonesia</h1>
                                                <p className="text-white"
                                                   style={{fontSize: '14px', fontFamily: 'Georgia'}}>
                                                    Perkembangan industri 4.0 tidak ada secara instan namun bertahap
                                                    mulai dari Jerman yang pertama kali mengemukakan untuk menggunakan
                                                    konsep serba teknologi dalam industrinya.
                                                </p>
                                            </div>
                                        </div>
                                        <div className="col-12 mt-3">
                                            <div style={{background: '#112F4B', width: '104%'}}
                                                 className="pl-4 pt-3 pb-1">
                                                <h1 className="text-white" style={{fontSize: '20px'}}>Perkembangan Dunia
                                                    Industri 4.0 di Indonesia</h1>
                                                <p className="text-white"
                                                   style={{fontSize: '14px', fontFamily: 'Georgia'}}>
                                                    Perkembangan industri 4.0 tidak ada secara instan namun bertahap
                                                    mulai dari Jerman yang pertama kali mengemukakan untuk menggunakan
                                                    konsep serba teknologi dalam industrinya.
                                                </p>
                                            </div>
                                        </div>
                                        <div className="col-12 mt-3">
                                            <div style={{background: '#112F4B', width: '104%'}}
                                                 className="pl-4 pt-3 pb-1">
                                                <h1 className="text-white" style={{fontSize: '20px'}}>Perkembangan Dunia
                                                    Industri 4.0 di Indonesia</h1>
                                                <p className="text-white"
                                                   style={{fontSize: '14px', fontFamily: 'Georgia'}}>
                                                    Perkembangan industri 4.0 tidak ada secara instan namun bertahap
                                                    mulai dari Jerman yang pertama kali mengemukakan untuk menggunakan
                                                    konsep serba teknologi dalam industrinya.
                                                </p>
                                            </div>
                                        </div>
                                        <div className="col-12 mt-5 text-center jeager-text-color"
                                             style={{fontSize: '20px'}}>
                                            Lihat Selengkapnya >
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-3 pl-5">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-12">
                                            <img src={require('../assets/arrnews.png')} width="20" alt="arrow"/>
                                            <div className="font-weight-bold d-inline"
                                                 style={{fontSize: '20px'}}> 2018
                                            </div>
                                        </div>
                                        <div className="col-12 mt-3">
                                            <img src={require('../assets/arrnews.png')} width="20" alt="arrow"/>
                                            <div className="font-weight-bold d-inline"
                                                 style={{fontSize: '20px'}}> 2017
                                            </div>
                                        </div>
                                        <div className="col-12 mt-3">
                                            <img src={require('../assets/arrnews.png')} width="20" alt="arrow"/>
                                            <div className="font-weight-bold d-inline"
                                                 style={{fontSize: '20px'}}> 2016
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