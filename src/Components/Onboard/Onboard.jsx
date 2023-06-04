import React from 'react';
import {RightOutlined} from '@ant-design/icons';
import OverImg from '../../assets/onboarding.svg';
import VoiceCall from '../../assets/voicecall.svg';
import './Onboard.css';

export default function Onboard() {
  return (
    <div className="App">
      <div className="container-large">
        <div className="onboard-cont">
            <div className="container-medium onboard">
                <div className="onboard-left" data-aos="slide-right" data-aos-duration="2000">
                    <img src={OverImg} alt="" className="onboard-img" />
                </div>
                <div className="onboard-right">
                  <div className="onboard-text-cont" data-aos="slide-left" data-aos-duration="2000">
                      <div className="onboard-text-1">
                        We don't just think
                        outside the box, we live
                        outside the box
                      </div>
                      <div className="onboard-text-2">
                        Lorem ipsum dolor sit amet, consectetur adipi elit, sed do eiusmod
                        tempor incididu dolore magna aliqua. Sit amet purus g
                      </div>
                      <div className="try-now">
                          Try Axium Now
                          <RightOutlined style={{marginLeft:'20px'}}/>
                      </div>
                  </div>
                </div>
            </div>
            <img src={OverImg} alt="" className="onboard-small-img" />
        </div>

        <div className="onboard-cont" style={{background:'white',color:'black'}}>
            <div className="container-medium onboard">
                <div className="onboard-left-new" data-aos="slide-right" data-aos-duration="2000">
                  <div className="onboard-text-cont">
                      <div className="onboard-text-1">
                      Choose us and watch
                      your worries evaporate
                      like ice cream on a hot
                      summer day.
                      </div>
                      <div className="onboard-text-2">
                        Lorem ipsum dolor sit amet, consectetur adipi elit, sed do eiusmod
                        tempor incididu dolore magna aliqua. Sit amet purus g
                      </div>
                      <div className="try-now">
                          Try Axium Now
                          <RightOutlined style={{marginLeft:'20px'}}/>
                      </div>
                    </div>
                </div>
                <div className="onboard-right-new" data-aos="slide-left" data-aos-duration="2000">
                    <img src={VoiceCall} className="onboard-img" />
                </div>
            </div>
            <img src={VoiceCall} alt="" className="voicecall-small-img" />
        </div>
      </div>
    </div>
  )
}
