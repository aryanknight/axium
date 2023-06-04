import React from 'react';
import Logo from '../../assets/brandmark.svg';
import WhiteLogo from '../../assets/brandmark-white.svg';
import './Footer.css';

export default function Footer({color}) {
  return (
    <div className="App">
      <div className="container-large">
        <div className={`footer-cont ${color=='black'?'footer-black':''}`}>
            <div className="container-medium footer">
                <div className="footer-cont-1">
                    <div className="footer-up">
                        <img src={color=='black'?WhiteLogo:Logo} alt="" className="footer-logo" />
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
                    <a href='#' className={` ${color=='black'?'footer-link-white':'footer-link'}`}>Home</a>
                    </div>
                    <div className="footer-item">
                    <a href='#' className={` ${color=='black'?'footer-link-white':'footer-link'}`}>About Us</a>
                    </div>
                    <div className="footer-item">
                    <a href='#' className={` ${color=='black'?'footer-link-white':'footer-link'}`}>Services</a>
                    </div>
                    <div className="footer-item">
                    <a href='#' className={` ${color=='black'?'footer-link-white':'footer-link'}`}>Pages</a>
                    </div>
                    <div className="footer-item">
                    <a href='#' className={` ${color=='black'?'footer-link-white':'footer-link'}`}>Contact</a> 
                    </div>
                </div>
                <div className="footer-cont-2">
                    <div className="footer-head">
                    Utility Pages 
                    </div>
                    <div className="footer-item">
                    <a href='#' className={` ${color=='black'?'footer-link-white':'footer-link'}`}>Instruction</a>
                    </div>
                    <div className="footer-item">
                    <a href='#' className={` ${color=='black'?'footer-link-white':'footer-link'}`}>Instruction</a>
                    </div>
                    <div className="footer-item">
                    <a href='#' className={` ${color=='black'?'footer-link-white':'footer-link'}`}>Licenses</a>
                    </div>
                    <div className="footer-item">
                    <a href='#' className={` ${color=='black'?'footer-link-white':'footer-link'}`}>404 Not found</a>
                    </div>
                    <div className="footer-item">
                    <a href='#' className={` ${color=='black'?'footer-link-white':'footer-link'}`}>Password protected</a>
                    </div>
                </div>
                <div className="footer-cont-2">
                    <div className="footer-head">
                    Resources
                    </div>
                    <div className="footer-item">
                    <a href='#' className={` ${color=='black'?'footer-link-white':'footer-link'}`}>Support</a>
                    </div>
                    <div className="footer-item">
                    <a href='#' className={` ${color=='black'?'footer-link-white':'footer-link'}`}>Privacy policy</a>
                    </div>
                    <div className="footer-item">
                    <a href='#' className={` ${color=='black'?'footer-link-white':'footer-link'}`}>Terms & Conditions</a>
                    </div>
                    <div className="footer-item">
                    <a href='#' className={` ${color=='black'?'footer-link-white':'footer-link'}`}>Strategic finance</a>
                    </div>
                    <div className="footer-item">
                    <a href='#' className={` ${color=='black'?'footer-link-white':'footer-link'}`}>Video guide</a>
                    </div>
                </div>
            </div>
            <div className="footer-last" style={{backgroundColor:`${color=='black'?'#223140':''}`}}>
                @ Copyright 2023 , All Right Reserved by Axium DIgital
            </div>
        </div>
      </div>
    </div>
  )
}
