import React from 'react';
import Astro from '../../assets/2astro.png';
import {RightOutlined} from '@ant-design/icons';
import Safe from '../../assets/safepay.svg';
import Multi from '../../assets/multi.svg';
import Sowlow from '../../assets/sowlow.svg';
import Jungle from '../../assets/jungle.svg';
import './Reach.css';

export default function Reach() {
  return (
    <div className="App">
      <div className="container-large">
        <div className="reach-cont">
            <div className="container-medium reach">
                <div className="reach-logo-cont">
                    <img src={Safe} alt="" className="reach-logo" data-aos="fade-up-right" data-aos-duration="3000"/>
                    <img src={Multi} alt="" className="reach-logo" data-aos="fade-up-right" data-aos-duration="3000"/>
                    <img src={Sowlow} alt="" className="reach-logo" data-aos="fade-up-left" data-aos-duration="3000"/>
                    <img src={Jungle} alt="" className="reach-logo" data-aos="fade-up-left" data-aos-duration="3000"/>
                </div>
                <div className="reach-left" data-aos="slide-right" data-aos-duration="3000">
                    <img src={Astro} alt="" className="reach-img" />
                </div>
                <div className="reach-right">
                  <div className="reach-text-cont" data-aos="slide-left" data-aos-duration="3000">
                      <div className="reach-text-1">
                        Got queries? We promise to respond faster than a cheetah on roller skates!
                      </div>
                      <div className="reach-input-cont">
                        <input placeholder='your email' className="reach-input" />
                      </div>
                      <div className="reach-text-2">
                      Send us an email, and we promise it won't get lost in the Bermuda Triangle!
                      </div>
                      <div className="reach-try-now">
                        Let’s Go !
                          <RightOutlined style={{marginLeft:'20px'}}/>
                      </div>
                  </div>
                </div>
            </div>
            {/* <img src={OverImg} alt="" className="reach-small-img" /> */}
        </div>
      </div>
    </div>
  )
}
