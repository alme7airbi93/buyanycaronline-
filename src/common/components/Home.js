import React, { Component } from 'react';
import Header from './Header/Header'
import Footer from './Footer/Footer'

class Home extends Component {

    render() {
        return (
            <div>
                <Header />
                <nav id="mainMenu">
                    <div class="container">
                        <div id="mainMenu-inner">
                            <a href="javascript:void(0);" id="mainMenu-icon" onClick="menuFunction()">
                                <i class="fa fa-bars"></i>
                            </a>
                            <ul id="mainMenu-links" class="clearfix">
                                <li><a href="#" class="active">Home</a>
                                </li>
                                <li><a href="#">Cars</a>
                                </li>
                                <li><a href="#">Boats</a>
                                </li>
                                <li><a href="#">About</a>
                                </li>
                                <li><a href="#">Contact</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>

                <div id="home-main">
                    <div class="container-fluid" id="home-container">
                        <div id="home-bg">
                            <div id="home-bg-inner">
                                <div id="home-form" class="clearfix">
                                    <a href="#" id="PlaceAd"><i class="fa fa-plus-square" aria-hidden="true"></i> Place Ad</a>
                                    <div style={{ position: "relative" }}>

                                        <h2>FIND VEHICLE</h2>
                                        <form action="#" method="get" style={{ margin: 0 }}>
                                            <div class="row">
                                                <div class="col-md-4 col-sm-12">
                                                    <div class="hf-label" >NAME</div>
                                                    <div class="hf-select">
                                                        <select class="selectpicker" title="SELECT NAME" data-width="100%">
                                                            <option>Hyundai</option>
                                                            <option>Audi</option>
                                                            <option>Lamborghini</option>
                                                        </select>
                                                    </div>

                                                </div>
                                                <div class="col-md-4 col-sm-12">
                                                    <div class="hf-label">MODEL</div>
                                                    <div class="hf-select">
                                                        <select class="selectpicker" title="SELECT MODEL" data-width="100%">
                                                            <option value="1">ONE</option>
                                                            <option value="2">TWO</option>
                                                            <option value="3">THREE</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div class="col-md-4 col-sm-12">
                                                    <div class="hf-label">YEAR</div>
                                                    <div class="hf-select">
                                                        <select class="selectpicker" title="SELECT YEAR" data-width="100%">
                                                            <option value="1">2019</option>
                                                            <option value="2">2018</option>
                                                            <option value="3">2017</option>
                                                            <option value="3">2016</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div class="col-md-4 col-sm-12 advancedf">
                                                    <div class="hf-label">PRICE</div>
                                                    <div class="hf-select half">
                                                        <select class="selectpicker" title="FROM" data-width="100%">
                                                            <option value="1">2019</option>
                                                            <option value="2">2018</option>
                                                            <option value="3">2017</option>
                                                            <option value="3">2016</option>
                                                        </select>
                                                    </div>
                                                    <div class="hf-select half">
                                                        <select class="selectpicker" title="TO" data-width="100%">
                                                            <option value="1">2019</option>
                                                            <option value="2">2018</option>
                                                            <option value="3">2017</option>
                                                            <option value="3">2016</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div class="col-md-4 col-sm-12 advancedf">
                                                    <div class="hf-label">YEAR</div>
                                                    <div class="hf-select half">
                                                        <select class="selectpicker" title="FROM" data-width="100%">
                                                            <option value="1">2019</option>
                                                            <option value="2">2018</option>
                                                            <option value="3">2017</option>
                                                            <option value="3">2016</option>
                                                        </select>
                                                    </div>
                                                    <div class="hf-select half">
                                                        <select class="selectpicker" title="TO" data-width="100%">
                                                            <option value="1">2019</option>
                                                            <option value="2">2018</option>
                                                            <option value="3">2017</option>
                                                            <option value="3">2016</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div class="col-md-4 col-sm-12 advancedf">
                                                    <div class="hf-label">SELLER</div>
                                                    <div class="hf-select">
                                                        <select class="selectpicker" title="SELECT SELLER" data-width="100%">
                                                            <option value="1">ONE</option>
                                                            <option value="2">TWO</option>
                                                            <option value="3">THREE</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div class="col-md-4 col-sm-12 advancedf">
                                                    <div class="hf-label">ENGINE</div>
                                                    <div class="hf-select">
                                                        <select class="selectpicker" title="SELECT ENGINE" data-width="100%">
                                                            <option value="1">ONE</option>
                                                            <option value="2">TWO</option>
                                                            <option value="3">THREE</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div class="col-md-4 col-sm-12 advancedf">
                                                    <div class="hf-label">CITY</div>
                                                    <div class="hf-select">
                                                        <select class="selectpicker" title="SELECT CITY" data-width="100%">
                                                            <option value="1">ONE</option>
                                                            <option value="2">TWO</option>
                                                            <option value="3">THREE</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div class="col-md-4 col-sm-12 advancedf">
                                                    <div class="hf-label">COLOR</div>
                                                    <div class="hf-select">
                                                        <select class="selectpicker" title="SELECT COLOR" data-width="100%">
                                                            <option value="1">ONE</option>
                                                            <option value="2">TWO</option>
                                                            <option value="3">THREE</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div class="col-md-4 col-sm-12 advancedf">
                                                    <div class="hf-label">TRANSMISSION</div>
                                                    <div class="hf-select">
                                                        <select class="selectpicker" title="SELECT TRANSMISSION"
                                                            data-width="100%">
                                                            <option value="1">ONE</option>
                                                            <option value="2">TWO</option>
                                                            <option value="3">THREE</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div class="col-md-4 col-sm-12 advancedf">
                                                    <div class="hf-label">FUEL TYPE</div>
                                                    <div class="hf-select">
                                                        <select class="selectpicker" title="SELECT FUEL TYPE" data-width="100%">
                                                            <option value="1">ONE</option>
                                                            <option value="2">TWO</option>
                                                            <option value="3">THREE</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div class="col-md-4 col-sm-12 advancedf">
                                                    <div class="hf-label">CONDITION
											</div>
                                                    <div class="hf-select">
                                                        <select class="selectpicker" title="SELECT CONDITION" data-width="100%">
                                                            <option value="1">ONE</option>
                                                            <option value="2">TWO</option>
                                                            <option value="3">THREE</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div class="col-md-12 col-sm-12">

                                                    <a href="javascript:void(0);" onclick="homeAdvanced()"
                                                        id="home-advanced">ADVANCED SEARCH <i class="fa fa-angle-double-down"
                                                            aria-hidden="true"></i></a>
                                                    <button type="submit" class="button" id="hf-button"><i class="fa fa-search"
                                                        aria-hidden="true"></i> Search</button>

                                                </div>
                                            </div>
                                        </form>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <Footer />

                <div className="modal fade" id="loginPopup">
                    <div class="modal-dialog" style={{ maxWidth: "350px;" }}>
                        <div class="modal-content popup-form">
                            {/* <!-- Modal Header --> */}
                            <div class="modal-header pf-header">
                                <h4 class="pf-title">Login</h4>
                                <button type="button" class="close pf-close" data-dismiss="modal">
                                    <i class="fa fa-times" aria-hidden="true"></i>
                                </button>
                            </div>
                            <div class="pf-content">
                                <div class="pf-label">Username</div>
                                <input type="text" class="pf-textInput" name="name" value="" aria-required="true"
                                    aria-invalid="false" placeholder="Enter your username" size="40" />
                                <div class="pf-label">Password</div>
                                <input type="password" class="pf-textInput" name="password" value="" size="40" class=""
                                    aria-required="true" aria-invalid="false" placeholder="Enter your password" />
                                <a href="#" class="pf-link">Forgot your password?</a>
                                <input type="submit" value="Login" class="pf-submit" />
                            </div>
                        </div>
                    </div>


                    <div class="modal fade" id="registerPopup">
                        <div class="modal-dialog" style={{ maxWidth: "350px;" }}>
                            <div class="modal-content popup-form">
                                {/* <!-- Modal Header --> */}
                                <div class="modal-header pf-header">
                                    <h4 class="pf-title">Register</h4>
                                    <button type="button" class="close pf-close" data-dismiss="modal">
                                        <i class="fa fa-times" aria-hidden="true"></i>
                                    </button>
                                </div>
                                <div class="pf-content">
                                    <div class="pf-label">Username(email)</div>
                                    <input type="text" class="pf-textInput" name="name" value="" aria-required="true"
                                        aria-invalid="false" placeholder="Enter your username" size="40" />
                                    <div class="pf-label">Password</div>
                                    <input type="password" class="pf-textInput" name="password" value="" size="40" class=""
                                        aria-required="true" aria-invalid="false" placeholder="Enter your password" />
                                    <div class="pf-label">Re-type Password</div>
                                    <input type="password" class="pf-textInput" name="password" value="" size="40" class=""
                                        aria-required="true" aria-invalid="false" placeholder="Enter your password" />
                                    <input type="submit" value="Register" class="pf-submit" />
                                    <div class="pf-social">
                                        <div class="pf-label">OR</div>
                                        <div class="pf-social-buttons">
                                            <a href="#" target="_blank">
                                                <i class="fa fa-facebook"></i>
                                            </a>
                                            <a href="#" target="_blank">
                                                <i class="fa fa-twitter"></i>
                                            </a>
                                            <a href="#" target="_blank">
                                                <i class="fa fa-google"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div >
            </div>


        )
    }
}
export default Home;