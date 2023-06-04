import React from 'react';
import LoginLogo from '../../assets/login-logo.svg';
import './Authentication.css';
import { Link } from 'react-router-dom';

export default function Login() {
  return (
    <div className='login'>
            <div className="login-cont">
                <div className="login-left">
                    <div className="login-cont-1">
                        <div className='login-new-cont'>
                            <div className="login-head">Login to your account</div>
                            <div className="login-para">Put on your superhero cape and get ready to achieve something epic!</div>
                            
                            <div className="login-subhead">Email*</div>
                            <div className="cred-cont">
                                <input className='login-input' required placeholder="eg : johndoe@gmail.com"/>
                            </div>
                            <div className="login-subhead">
                                <div className="login-subhead-1">Password*</div>
                                <Link to="/reset" style={{textDecoration:'none'}}>
                                    <div className="login-subhead-2">Forgot Password?</div>
                                </Link>
                            </div>
                            <div className="cred-cont">
                                <input className='login-input' required placeholder="your secret key"/>
                            </div>
                            
                            
                                <div className="login-btn">
                                Continue
                                </div>
                            

                            <div className="login-para" style={{color:'#6C7485'}}>New on our platform? 
                                <Link to="/signup" style={{textDecoration:'none'}}>
                                    <span style={{color:'white',cursor:'pointer'}}> Create an account</span>
                                </Link>
                            </div>

                        </div>
                    </div>

                   
                </div>
                <div className="login-right">
                   <div className="login-right-cont">
                        <img src={LoginLogo} alt="" className="login-logo" />
                        <div className="login-right-text">
                            Ready to unleash your business's inner rockstar? Join forces with Axium, the superhero of design, frontend, and backend development! We'll rescue your time and money, and deliver results so extraordinary, you'll think we've been sprinkling pixie dust!
                        </div>
                   </div>
                </div>
            </div>
        </div>
  )
}
