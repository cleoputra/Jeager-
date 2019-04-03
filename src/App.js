import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import 'bootstrap-material-design/dist/css/bootstrap-material-design.min.css';
import './App.css';
import Homepage from "./components/Homepage";
import About from "./components/About";
import Contact from "./components/Contact";
import News from "./components/News";

window.$ = window.jQuery = require('jquery');
window.Popper = require('popper.js').default;
require('bootstrap-material-design/dist/js/bootstrap-material-design');

class App extends Component {
    componentDidMount() {
        window.$('#root').bootstrapMaterialDesign();
        const script = document.createElement("script");
        script.innerHTML = `
        (function () {
        const options = {
                whatsapp: "+6282232419113", // WhatsApp number
                call_to_action: "Hubungi Kami 😊", // Call to action
                position: "right", // Position may be 'right' or 'left'
            };
            const proto = document.location.protocol,
            host = "whatshelp.io",
            url = proto + "//static." + host;
            const s = document.createElement('script');
            s.type = 'text/javascript';
            s.async = true;
            s.src = url + '/widget-send-button/js/init.js';
            s.onload = function () {
                WhWidgetSendButton.init(host, proto, options);
            };
            const x = document.getElementsByTagName('script')[0];
            x.parentNode.insertBefore(s, x);
        })();`;
        document.body.appendChild(script);
    }

    render() {
        return (
            <Router>
                <div style={{backgroundColor: '#fff'}}>
                    <Route path="/" exact component={Homepage}/>
                    <Route path="/tentang" component={About}/>
                    <Route path="/kontak" component={Contact}/>
                    <Route path="/berita" component={News}/>
                    {/*<Route path="/oee-monitoring-system" component={OEEMonitoringSystem}/>
                    <Route path="/environment-monitoring-system" component={EnvironmentMonitoringSystem}/>
                    <Route path="/maintenance-system" component={MaintenanceSystem}/>*/}
                </div>
            </Router>
        );
    }
}

export default App;
