import React from 'react';

const Navigation = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark" style={{boxShadow: 'none'}}>
            <a className="navbar-brand" href="#">
                <img src="https://jeager.io/static/media/white-logo.168e2d24.png" height="30"
                     className="d-inline-block align-top" alt=""/>
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse"
                    data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                    aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"/>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item active">
                        <a className="nav-link font-weight-bold" href="#">Tentang Kami</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link font-weight-bold" href="#">Solution</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link font-weight-bold" href="#">Berita</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link font-weight-bold" href="#">Hubungi Kami</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navigation;