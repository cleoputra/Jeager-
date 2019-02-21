import React from 'react';
import {Link} from 'react-router-dom';

class Navigation extends React.Component {
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
                    <img src={require('../assets/logoputih.png')} height="70"
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
                            <Link className="nav-link font-weight-bold text-capitalize" to="/tentang"><b>Tentang
                                Kami</b></Link>
                        </li>
                        <li className="nav-item dropdown ml-5 active">
                            <Link className="nav-link dropdown-toggle text-capitalize" to="#" id="navbarDropdown"
                                  role="button"
                                  data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Solusi
                            </Link>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown" style={{fontSize: '13px'}}>
                                <Link className="dropdown-item jeager-text-color font-weight-bold text-uppercase"
                                      to="#">OEE
                                    Monitoring System</Link>
                                <Link className="dropdown-item jeager-text-color font-weight-bold text-uppercase"
                                      to="#">Environment
                                    Monitoring System</Link>
                                <Link className="dropdown-item jeager-text-color font-weight-bold text-uppercase"
                                      to="#">Maintenance
                                    System</Link>
                            </div>
                        </li>
                        <li className="nav-item ml-5 active">
                            <Link className="nav-link font-weight-bold text-capitalize" to="#">Berita</Link>
                        </li>
                        <li className="nav-item ml-5 mr-4 active">
                            <Link className="nav-link font-weight-bold text-capitalize" to="/kontak"
                                  style={{
                                      padding: '3px',
                                      border: '3px solid',
                                      boxSizing: 'border-box',
                                      borderRadius: '5px'
                                  }}>Hubungi Kami</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default Navigation;