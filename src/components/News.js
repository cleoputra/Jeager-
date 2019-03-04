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
                <Footer/>
            </div>
        );
    }
}