import React from 'react';
import {scrollToTop} from "../helper";
import Navigation from "./Navigation";
import Footer from "./Footer";

export default class News extends React.Component {
    state = {
        newsData: {},
        fetched: false,
        showAll: false
    };

    static renderBottomNewsItem(newsItemData) {
        return (
            <div className="col-12 mt-4" key={newsItemData.title}>
                <a href={newsItemData.link} target="_blank" rel="noopener noreferrer">
                    <div style={{background: '#112F4B', width: '104%'}}
                         className="pl-4 pt-3 pb-1">
                        <h1 className="text-white" style={{fontSize: '20px'}}>
                            {newsItemData.title}
                        </h1>
                        <p className="text-white"
                           style={{fontSize: '14px', fontFamily: 'Georgia'}}>
                            {News.formatDescription(newsItemData.content)}
                        </p>
                    </div>
                </a>
            </div>
        );
    }

    static formatDescription(description) {
        const rawDescription = description.replace(/(<([^>]+)>)/ig, '');
        const splittedRawDescription = rawDescription.split(' ');
        let finalDescription = '';
        for (let i = 0; i <= 34; i++) {
            if (i < 34)
                finalDescription += splittedRawDescription[i] + ' ';
            else
                return finalDescription + ' ...';
        }
    }

    componentDidMount() {
        scrollToTop();
        this.fetchAndRenderNews();
    }

    fetchAndRenderNews() {
        window.$.ajax({
            url: 'https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@jeageriiot',
            type: 'GET',
            success: data => {
                this.setState({newsData: data, fetched: true})
            },
            error: error => {
                alert('Error fetching data!' + error);
                window.location.replace("http://jeager.io");
            }
        });
    }

    renderBigNews() {
        return (
            <a href={this.state.fetched ? this.state.newsData.items[0].link : '#'} target="_blank"
               rel="noopener noreferrer">
                <div style={{width: '596px', height: '370px'}}>
                    <img
                        src={this.state.fetched ? this.state.newsData.items[0].thumbnail : require('../assets/news1.png')}
                        width="596px" height="370px"
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
                        width: '596px',
                        position: 'absolute',
                        fontSize: '41px',
                        marginTop: '-26%',
                        paddingLeft: '4%',
                        zIndex: 1
                    }}>
                        {this.state.fetched ? this.state.newsData.items[0].title : 'LOADING...'}
                    </h1>
                </div>
            </a>
        )
    }

    renderSideNews() {
        return (
            <div className="row">
                <div className="col-12 px-0">
                    <a href={this.state.fetched ? this.state.newsData.items[1].link : '#'}>
                        <div style={{width: '350px', height: '173px'}}>
                            <img
                                src={this.state.fetched ? this.state.newsData.items[1].thumbnail : require('../assets/news2.png')}
                                width="350"
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
                                fontSize: '19px',
                                marginTop: '-19%',
                                marginLeft: '4%',
                                zIndex: 1
                            }}>
                                {this.state.fetched ? this.state.newsData.items[1].title : 'Loading...'}
                            </h1>
                        </div>
                    </a>
                </div>
                <div className="col-12 px-0 mt-4">
                    <a href={this.state.fetched ? this.state.newsData.items[2].link : '#'}>
                        <div style={{width: '350px', height: '173px'}}>
                            <img
                                src={this.state.fetched ? this.state.newsData.items[2].thumbnail : require('../assets/news3.png')}
                                width="350"
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
                                fontSize: '19px',
                                marginTop: '-19%',
                                marginLeft: '4%',
                                zIndex: 1
                            }}>
                                {this.state.fetched ? this.state.newsData.items[2].title : 'Loading...'}
                            </h1>
                        </div>
                    </a>
                </div>
            </div>
        )
    }

    renderBottomNews() {
        if (this.state.showAll) {
            window.$('#buttonSelengkapnya').hide();
            const data = this.state.newsData.items.slice();
            const dataContent = data.splice(3, this.state.newsData.items.length);
            return dataContent.map(news => {
                return News.renderBottomNewsItem(news);
            });
        } else {
            return (
                <div>
                    {this.state.fetched ? News.renderBottomNewsItem(this.state.newsData.items[3]) : '<h1>LOADING ....</h1>'}
                    {this.state.fetched ? News.renderBottomNewsItem(this.state.newsData.items[4]) : '<h1>LOADING ....</h1>'}
                    {this.state.fetched ? News.renderBottomNewsItem(this.state.newsData.items[5]) : '<h1>LOADING ....</h1>'}
                </div>
            );
        }
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
                                    <div className="row" id="newsRows">
                                        <div className="col-8 d-flex">
                                            {this.renderBigNews()}
                                        </div>
                                        <div className="col-4 d-flex justify-content-start" style={{marginLeft: '-3%'}}>
                                            <div className="container">
                                                {this.renderSideNews()}
                                            </div>
                                        </div>
                                        {this.state.showAll ? this.renderBottomNews() : this.renderBottomNews()}
                                        <div id="buttonSelengkapnya" onClick={() => {
                                            this.setState({showAll: !this.state.showAll})
                                        }} className="col-12 mt-5 text-center jeager-text-color"
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