import React, { Component } from "react";
import "./Home.css"

export default class Home extends Component{
    constructor(){
        super()

        this.state = {
            mobileNavScroll: null,
            mobileMenuOpen: false,
            mobileMenuOpeningClass: null,
            burgerMenu: null
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
        if(scrollPosition > 0){
            this.setState({
                mobileNavScroll: "scrolled"
            });     
        } else{
            this.setState({
                mobileNavScroll: null
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
                    burgerMenu: 'burger-animate'
                })                
            } else {
                this.setState({
                    mobileMenuOpen: true,
                    mobileMenuOpeningClass: "menu-open",
                    burgerMenu: 'burger-animate',
                    mobileNavScroll: "scrolled"
                })
                
            }
        } else {
            if(window.pageYOffset === 0){
                this.setState({
                    mobileMenuOpen: false,
                    mobileMenuOpeningClass: null,
                    mobileNavScroll: null
                })
            } else {
                this.setState({
                    mobileMenuOpen: false,
                    mobileMenuOpeningClass: null,
                })
            }
        }
    }
    render() {
        return(
            <div>
                <div className="transparent-nav fixed-menu">
                    <div className="container-fluid">
                        <div className="row">
                            <a href="#" className="logo-link">
                                <img src="https://iglucraft.com/wp-content/themes/iglucraft/dist/assets/img/iglucraft_light.svg" height="40" alt="logo"/>
                            </a>
                            <div className="menu-mobile">
                                <div className="toggle" onClick={this.handleMobileMenuClick}>
                                    <span className={this.state.burgerMenu}></span>
                                </div>
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
                                    <span className={this.state.burgerMenu}></span>
                                </div>
                            </div>
                    </div>
                </div>
                <div className={`mobile-nav-items ${this.state.mobileMenuOpeningClass}`}><span>Hi There</span></div>
                <div className="top-image"></div>
                <div className="spacing-box"></div>
            </div>
        )
    }
}