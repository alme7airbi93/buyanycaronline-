import React, { Component } from 'react';
import '../../../../public/style.css';
import logoImage from './logo.jpg';
import langImage from './lang-eng.png'

class Header extends Component {

    render() {
        return (
            <div>
                <div id="header-main">
                    <div class="container clearfix">
                        <div id="header-left">
                            <div class="clearfix">

                                <a class="header-logo" href="#" >
                                    <img src={logoImage} alt="Logo" />
                                </a>
                            </div>
                        </div>
                        <div id="header-right">
                            <div id="header-authentication">
                                <button type="button" data-toggle="modal" data-target="#loginPopup">LOGIN</button>
                                <span>|</span>
                                <button type="button" data-toggle="modal" data-target="#registerPopup">REGISTER</button>
                            </div>
                            <div id="header-select">
                                <div>
                                    <a id="header-language" href="#" data-toggle="dropdown" data-width="100%">
                                        <img src={langImage} />ENGLISH</a>
                                    <ul class="dropdown-menu dropdown-menu-right">
                                        <li><a href="#">Arabic</a></li>
                                        <li><a href="#">French</a></li>
                                    </ul>
                                </div>
                                <div>
                                    <a id="header-currency" href="#" data-toggle="dropdown" data-width="100%">
                                        <i className="fa fa-money" style={{ "marginRight": "3px" }}></i>AED</a>
                                    <ul class="dropdown-menu dropdown-menu-right">
                                        <li><a href="#">USD</a></li>
                                        <li><a href="#">INR</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        )
    }
}
export default Header;