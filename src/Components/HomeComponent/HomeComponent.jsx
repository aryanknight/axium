import React from 'react';
import NavLogo from '../../assets/nav-logo.svg';
import {RightOutlined} from '@ant-design/icons';
import Overview from '../../assets/Overview.svg';
import { Link } from 'react-router-dom';
import './HomeComponent.css';
export default function HomeComponent() {
  return (
    <div className="App">
      <div className="container-large">
        <div className="home-cont">
            <div className="nav-cont">
                <div className="nav-cont-1">
                    <img src={NavLogo} alt="" className="nav-logo" />
                </div>
                <div className="nav-cont-1">
                    <div className="nav-cont-item">Home</div>
                    <div className="nav-cont-item">About</div>
                    <div className="nav-cont-item">Portfolio</div>
                </div>
                <div className="nav-cont-1">
                    <div className="nav-cont-item">
                        <Link to="/login" className='home-login-btn'>
                            Login
                        </Link>
                    </div>
                    <div className="nav-cont-item">
                        <div className="nav-btn">Sign up free</div>
                    </div>
                </div>
            </div>
            <div className="container-medium" data-aos="fade-up-right" data-aos-duration="2000">
                <div className="home-text-cont">
                    <div className="home-text-1">
                        Don't break the bank, let Axium
                        code your dreams!
                    </div>
                    <div className="home-text-2">
                        Axium is dedicated to cost efficiency, recognizing the difficulties businesses
                        encounter in hiring and managing developers. With our solutions, clients can
                        save up to 60% of their budget, enabling them to redirect resources to
                        essential aspects of their operations.
                    </div>
                    <div className="try-now">
                        Try Axium Now
                        <RightOutlined style={{marginLeft:'20px'}}/>
                    </div>
                </div>
            </div>
            <img src={Overview} alt="" className="overview-img" />
        </div>
      </div>
    </div>
  )
}
