import React, { Component } from 'react';

class Footer extends Component {

    render() {
        return (

            <footer>
                <div class="container">
                    <div class="row">
                        <div class="col-md-12 col-sm-12">
                            <div class="clearfix">
                                <ul id="footer-links">
                                    <li><a href="">Home</a> |
							</li>
                                    <li><a href="#"> Cars</a> |
							</li>
                                    <li><a href="#"> Boats</a> |
							</li>
                                    <li><a href="#"> About</a> |
							</li>
                                    <li><a href="#"> Contact</a>
                                    </li>
                                </ul>
                                <div id="footer-right">© 2019 BUYANYCARONLINE</div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>


        )
    }
}
export default Footer;