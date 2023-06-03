import React from 'react';
import Ufo from '../../assets/ufo.svg';
import Rocket from '../../assets/rocket.svg';
import Astro from '../../assets/astro.png';
import './ServiceSection.css'

export default function ServiceSection() {
  return (
    <div className="App">
      <div className="container-large">
        <div className="service-cont">
            <div className="container-medium">
                <div className="service-head">
                    You'll wonder how you ever survived without us.
                    Seriously, it's a mystery.
                </div>
                <div className="service-card-cont">
                    <div className="service-card" id="card-blue">
                        <div className="service-card-img-cont">
                            <img src={Ufo} alt="" className="service-card-img" />
                        </div>
                        <div className="service-card-text-cont">
                            <span className='service-card-head'>Desigining</span>
                            Designing Brilliance: Transforming Ideas
                            into Exquisite Visual Experiences!
                        </div>
                    </div>
                    <div className="service-card" id="card-pink">
                        <div className="service-card-img-cont">
                            <img src={Rocket} alt="" className="service-card-img" />
                        </div>
                        <div className="service-card-text-cont">
                            <span className='service-card-head'>Development</span>
                            Revolutionize Tech Solutions: Fueling
                            Progress through Best Practices and
                            Methodical Mastery!
                        </div>
                    </div>
                </div>
                <div className="service-card-cont">
                    <div className="service-card" id="card-green">
                        <div className="service-card-text-cont">
                            <span className='service-card-head'>Analysis</span>
                            Revolutionize Tech Solutions: Fueling
                            Progress through Best Practices and
                            Methodical Mastery!
                        </div>
                        <div className="service-card-img-cont">
                            <img src={Astro} alt="" className="service-card-img" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}
