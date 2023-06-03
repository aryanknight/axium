import React from 'react';
import Logo from '../../assets/brandmark.svg';
import './Footer.css';

export default function Footer() {
  return (
    <div className="App">
      <div className="container-large">
        <div className="footer-cont">
            <div className="container-medium footer">
                <div className="footer-cont-1">
                    <div className="footer-up">
                        <img src={Logo} alt="" className="footer-logo" />
                        <div className="footer-text-cont">
                        So why settle for ordinary when you can have extraordinary? Embrace the superhero of cost efficiency and let Axium be your financial sidekick. Together, we'll conquer the budget hurdles and transform your business into a laughing, success-filled adventure! 
                        </div>
                    </div>
                    <div className="footer-down">

                    </div>
                </div>
                <div className="footer-cont-2">
                    <div className="footer-head">
                        Primary Pages
                    </div>
                    <div className="footer-item">
                    Home
                    </div>
                    <div className="footer-item">
                    About Us
                    </div>
                    <div className="footer-item">
                    Services
                    </div>
                    <div className="footer-item">
                    Pages
                    </div>
                    <div className="footer-item">
                    Contact 
                    </div>
                </div>
                <div className="footer-cont-2">
                    <div className="footer-head">
                    Utility Pages 
                    </div>
                    <div className="footer-item">
                    Instruction
                    </div>
                    <div className="footer-item">
                    Instruction
                    </div>
                    <div className="footer-item">
                    Licenses
                    </div>
                    <div className="footer-item">
                    404 Not found
                    </div>
                    <div className="footer-item">
                    Password protected
                    </div>
                </div>
                <div className="footer-cont-2">
                    <div className="footer-head">
                    Resources
                    </div>
                    <div className="footer-item">
                    Support
                    </div>
                    <div className="footer-item">
                    Privacy policy
                    </div>
                    <div className="footer-item">
                    Terms & Conditions
                    </div>
                    <div className="footer-item">
                    Strategic finance
                    </div>
                    <div className="footer-item">
                    Video guide
                    </div>
                </div>
            </div>
            <div className="footer-last">
                @ Copyright 2023 , All Right Reserved by Axium DIgital
            </div>
        </div>
      </div>
    </div>
  )
}
