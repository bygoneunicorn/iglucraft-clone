import React, { Component } from 'react';
import './Nav.css';

export default class Nav extends Component{
    constructor(){
        super()

        this.state = {
            mobileNavScroll: null,
            mobileMenuOpen: false,
            mobileMenuOpeningClass: null,
            burgerMenuTop: null,
            burgerMenuMiddle: null,
            burgerMenuBottom: null,
        }
        this.handleScroll = this.handleScroll.bind( this )
        this.handleMobileMenuClick = this.handleMobileMenuClick.bind( this )
    }
    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }
    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }
    handleScroll(event) {        
        let scrollPosition = window.pageYOffset;
        if(scrollPosition === 0 && this.state.mobileMenuOpen === false){
            this.setState({
                mobileNavScroll: null
            });     
        } else{
            this.setState({
                mobileNavScroll: "scrolled"
            })
        }        
    }
    handleMobileMenuClick(){
        console.log(this.state);
        
        if(this.state.mobileMenuOpen === false) {
            if(this.mobileNavScroll === 'scrolled') {
                this.setState({
                    mobileMenuOpen: true,
                    mobileMenuOpeningClass: "menu-open",
                    burgerMenuTop: 'burger-animate-top',
                    burgerMenuMiddle: 'burger-animate-middle',
                    burgerMenuBottom: 'burger-animate-bottom'
                })                
            } else {
                this.setState({
                    mobileMenuOpen: true,
                    mobileMenuOpeningClass: "menu-open",
                    burgerMenuTop: 'burger-animate-top',
                    burgerMenuMiddle: 'burger-animate-middle',
                    burgerMenuBottom: 'burger-animate-bottom',
                    mobileNavScroll: "scrolled"
                })
                
            }
        } else {
            if(window.pageYOffset === 0){
                this.setState({
                    mobileMenuOpen: false,
                    mobileMenuOpeningClass: null,
                    mobileNavScroll: null,
                    burgerMenuTop: null,
                    burgerMenuMiddle: null,
                    burgerMenuBottom: null
                })
            } else {
                this.setState({
                    mobileMenuOpen: false,
                    mobileMenuOpeningClass: null,
                    burgerMenuTop: null,
                    burgerMenuMiddle: null,
                    burgerMenuBottom: null
                })
            }
        }
    }
    render(){
        return(
            <div>
                <div className="transparent-nav fixed-menu">
                    <div className="row">
                        <a href="#" className="logo-link">
                            <img src="https://iglucraft.com/wp-content/themes/iglucraft/dist/assets/img/iglucraft_light.svg" height="40" alt="logo"/>
                        </a>
                        <div className="menu-mobile">
                            <div className="toggle" onClick={this.handleMobileMenuClick}>
                                <span className={`top ${this.state.burgerMenuTop}`}></span>
                                <span className={`middle ${this.state.burgerMenuMiddle}`}></span>
                                <span className={`bottom ${this.state.burgerMenuBottom}`}></span>                                
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`fixed-menu white-nav ${this.state.mobileNavScroll}`}>
                    <div className="row">
                            <a href="#" className="logo-link">
                                <img src="https://iglucraft.com/wp-content/themes/iglucraft/dist/assets/img/iglucraft_dark.svg" height="40" alt="logo"/>
                            </a>
                            <div className="menu-mobile">
                                <div className="toggle black-span" onClick={this.handleMobileMenuClick}>
                                    <span className={`top ${this.state.burgerMenuTop}`}></span>
                                    <span className={`middle ${this.state.burgerMenuMiddle}`}></span>
                                    <span className={`bottom ${this.state.burgerMenuBottom}`}></span>
                                </div>
                            </div>
                    </div>
                </div>
                <div className={`mobile-nav-items ${this.state.mobileMenuOpeningClass}`}><span>Hi There</span></div>
            </div>
        )
    }
}