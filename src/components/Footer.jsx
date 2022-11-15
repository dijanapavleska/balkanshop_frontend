import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='footer'>
            <div className='row'>
                {/* Column1 */}
                <div className="col-12 col-md-3">
                    LOGO
                </div>
                <div className='col-12 col-md-3'>
                    <h4>Company</h4>
                    <ul className='footer-box ps-2'>
                        <li><Link to="/about-us">About Us</Link></li>
                        <li><a href="#">General Terms and Conditions</a></li>
                        <li><Link to="/contact-us">Contact Form</Link></li>
                    </ul>
                </div>
                {/* COlumn2 */}
                <div className='col-12 col-md-3'>
                    <h4>Contact</h4>
                    <ul className='footer-box ps-2'>
                        <li>Address:</li>
                        <li>Branická 44</li>
                        <li>147 00 Praha 4</li>
                        <li>Česká republika</li>
                        <li>+420 773 322 779</li>
                        <li>info@balkanshop.cz</li>
                    </ul>
                </div>
                {/* COlumn2 */}
                <div className='col-12 col-md-3'>
                    <h4>Follow us</h4>
                    <div className='d-flex justify-content-around'>

                        <a href="#"><i class='bi bi-facebook'></i></a>
                        <a href="#"><i class='bi bi-twitter'></i></a>
                        <a href="/#"><i class='bi bi-instagram'></i></a>

                    </div>

                </div>


            </div>
            <hr />
            <div className='row'>
                <div className='col-12'>
                    <p>&copy;{new Date().getFullYear() + ' '}
                        <span>Balkan Discount Market | All rights reserved</span></p>
                </div>
            </div>
        </div>
    )
}
export default Footer;


