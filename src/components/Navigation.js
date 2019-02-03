import React from 'react';
import {Link} from 'react-router-dom';

const Navigation = ({backgroundColor, homePage}) => {
    return (
        <nav className={"navbar navbar-expand-lg navbar-dark pl-5 pr-5" + (homePage ? ' pt-4' : '')}
             style={{boxShadow: 'none', backgroundColor}}>
            <Link className="navbar-brand" to="/">
                <img src={require('../assets/logoputih.png')} height="70"
                     className="d-inline-block align-top" alt=""/>
            </Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse"
                    data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                    aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"/>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item active">
                        <Link className="nav-link font-weight-bold text-capitalize" to="/tentang">Tentang Kami</Link>
                    </li>
                    <li className="nav-item ml-5">
                        <Link className="nav-link font-weight-bold text-capitalize" to="#">Solusi</Link>
                    </li>
                    <li className="nav-item ml-5">
                        <Link className="nav-link font-weight-bold text-capitalize" to="#">Berita</Link>
                    </li>
                    <li className="nav-item ml-5 mr-4">
                        <Link className="nav-link font-weight-bold text-capitalize" to="#">Hubungi Kami</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navigation;