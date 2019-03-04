import React from 'react';
import {Link} from 'react-router-dom';

export default class Navigation extends React.Component {
    componentDidMount() {
        const $ = window.$;
        $(() => {
            $(document).scroll(() => {
                const $nav = $(".sticky-top");
                $nav.toggleClass('scrolled', $(window).scrollTop() > $nav.height());
            });
        });
    }

    render() {
        const {backgroundColor} = this.props;

        return (
            <nav className="navbar navbar-expand-lg navbar-dark pl-5 pr-3 sticky-top"
                 style={{boxShadow: 'none', backgroundColor}}>
                <Link className="navbar-brand" to="/">
                    <img src={require('../assets/logoputih.png')} height="38"
                         className="d-inline-block align-top" alt=""/>
                </Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"/>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                            <Link className="nav-link text-capitalize" to="/tentang">Tentang Kami</Link>
                        </li>
                        <li className="nav-item dropdown ml-5 active">
                            <Link className="nav-link dropdown-toggle text-capitalize" to="#" id="navbarDropdown"
                                  role="button"
                                  data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Solusi
                            </Link>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown" style={{fontSize: '15px'}}>
                                <Link className="dropdown-item jeager-text-color"
                                      to="/oee-monitoring-system">OEE
                                    Monitoring System</Link>
                                <Link className="dropdown-item jeager-text-color"
                                      to="/environment-monitoring-system">Environment
                                    Monitoring System</Link>
                                <Link className="dropdown-item jeager-text-color"
                                      to="#">Maintenance
                                    System</Link>
                            </div>
                        </li>
                        <li className="nav-item ml-5 active">
                            <Link className="nav-link text-capitalize" to="/berita">Berita</Link>
                        </li>
                        <li className="nav-item ml-5 mr-4 active">
                            <Link className="nav-link text-capitalize" to="/kontak"
                                  style={{
                                      borderRadius: '5px',
                                      background: 'rgba(255, 255, 255, 0.2)'
                                  }}>Hubungi Kami</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}