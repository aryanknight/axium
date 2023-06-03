import React from 'react';
import Mobimg from '../../assets/mobimg.png';
import {RightOutlined} from '@ant-design/icons';
import './HomePlans.css';

export default function HomePlans() {
  return (
  <>
    <div className="App">
      <div className="container-large">
        <div className="homeplan-cont">
            <div className="container-medium">
                <div className="homeplan-head">
                    No jokes, just real savings for you<br/>
                    Money doesn't grow on trees, but it does multiply with our incredible plans!
                </div>
                <div className="homeplan-card-cont">

                    <div className="homeplan-card">
                        <div className='homeplan-card-head'>Design</div>
                        <div className="homeplan-card-cost">
                            $ 1500 / mo *
                        </div>
                        <div className="homeplan-card-desc">
                            Premium Design Services for you !<br/>
                            <div style={{marginTop:'10px',}}><u style={{cursor:'pointer'}}> Book a call</u></div>
                        </div>
                        <div className="homeplan-btn">
                            Customise Plan
                        </div>
                    </div>
                
                    <div className="homeplan-card">
                        <div className='homeplan-card-head'>All in one</div>
                        <div className="homeplan-card-cost">
                            $ 2500 / mo *
                        </div>
                        <div className="homeplan-card-desc">
                            Premium Design Services for you !<br/>
                            <div style={{marginTop:'10px',}}><u style={{cursor:'pointer'}}> Book a call</u></div>
                        </div>
                        <div className="homeplan-btn">
                            Customise Plan
                        </div>
                    </div>
                
                    <div className="homeplan-card">
                        <div className='homeplan-card-head'>developement</div>
                        <div className="homeplan-card-cost">
                            $ 1800 / mo *
                        </div>
                        <div className="homeplan-card-desc">
                            Premium Design Services for you !<br/>
                            <div style={{marginTop:'10px',}}><u style={{cursor:'pointer'}}> Book a call</u></div>
                        </div>
                        <div className="homeplan-btn">
                            Customise Plan
                        </div>
                    </div>

                </div>
                <div className="homeplan-new-box-cont">
                    <div className="homeplan-new-box">
                        <div className="homeplan-box-head">
                            From zero to hero: Our custom design & development services have got your back!
                        </div>
                        <div className="homeplan-text-cont">
                            <div className="homeplan-box-left">
                            Prepare to be dazzled by our high fidelity design! It's so polished, it'll shine brighter than the sun. Our seamless applications will leave your users speechless with a resounding 'Wow!' And as for your competitors? They'll be scratching their heads, wondering 'How?' we do it. Get ready to shine in the spotlight with our irresistible design magic!
                            </div>
                            <div className="homeplan-box-right">
                                <div className="homeplan-box-btn">
                                    Customise Plan
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="onboard-cont" style={{background:'white',color:'black'}}>
            <div className="container-medium onboard">
                <div className="onboard-left-new">
                  <div className="onboard-text-cont">
                      <div className="onboard-text-1">
                      Unleash Your Imagination: Immerse Yourself in Our Inspiring Portfolio!
                      </div>
                      <div className="onboard-text-2">
                      Step into our world of imagination and let our inspiring portfolio take you on a magic carpet ride of creativity. Aladdin would be jealous!
                      </div>
                      <div className="try-now">
                          Try Axium Now
                          <RightOutlined style={{marginLeft:'20px'}}/>
                      </div>
                    </div>
                </div>
                <div className="onboard-right-new">
                    <img src={Mobimg} className="onboard-img" />
                </div>
            </div>
            <img src={Mobimg} alt="" className="voicecall-small-img" />
        </div>
      </div>
    </div>
  </>
  )
}
