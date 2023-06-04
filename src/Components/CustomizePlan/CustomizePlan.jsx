import React, { useState } from 'react';
import NavLogo from '../../assets/nav-logo.svg';
import Boxline from '../../assets/boxline.svg';
import Boxbg from '../../assets/boxbg.png';
import './CustomizePlan.css';

export default function CustomizePlan() {

  const [activeBox, setActiveBox] = useState([
    {
        amount:2500,
        activeBox:'1'
    },
    {
        amount:2500,
        activeBox:'1'
    },
    {
        amount:2500,
        activeBox:'1'
    }
  ]);

  const handleBox=(rowNo,boxNo)=>{
    setActiveBox((prevState) => {
        const newArray = [...prevState];
        newArray[rowNo] = { ...newArray[rowNo], activeBox: boxNo };
        return newArray;
    });
  }
  return (
    <div className="App">
      <div className="container-large">
        <div className="custom-plan-cont">
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
                    <div className="nav-cont-item">Login</div>
                    <div className="nav-cont-item">
                        <div className="nav-btn">Sign up free</div>
                    </div>
                </div>
            </div>
            <div className="container-medium">
                <div className="custom-plan-head">
                Customize your development plan based on your needs !
                </div>
                <div className="custom-plan-card-cont">
                    <div className="custom-plan-card-ques">
                        What kind of experience ar you looking for ?
                    </div>
                    <div className={`custom-plan-card ${activeBox[0].activeBox==0?'custom-plan-card-active':''}`} onClick={e=>handleBox(0,0)}>
                        <img src={Boxline} alt="" className="boxline" />
                        <div className='custom-plan-card-head'>Design</div>
                        <div className="custom-plan-card-cost">
                            $ 1500 / mo *
                        </div>
                        <div className="custom-plan-card-desc">
                            Premium Design Services for you !<br/>
                        </div>
                    </div>
                
                    <div className={`custom-plan-card ${activeBox[0].activeBox==1?'custom-plan-card-active':''}`} onClick={e=>handleBox(0,1)}>
                        <img src={Boxline} alt="" className="boxline" />
                        <div className='custom-plan-card-head'>All in one</div>
                        <div className="custom-plan-card-cost">
                            $ 2500 / mo *
                        </div>
                        <div className="custom-plan-card-desc">
                            Premium Design Services for you !<br/>
                        </div>
                    </div>

                    <div className={`custom-plan-card ${activeBox[0].activeBox==2?'custom-plan-card-active':''}`} onClick={e=>handleBox(0,2)}>
                        <img src={Boxline} alt="" className="boxline" />
                        <div className='custom-plan-card-head'>developement</div>
                        <div className="custom-plan-card-cost">
                            $ 1800 / mo *
                        </div>
                        <div className="custom-plan-card-desc">
                            Premium Design Services for you !<br/>
                        </div>
                    </div>

                </div>


                <div className="custom-plan-card-cont">
                    <div className="custom-plan-card-ques">
                    What kind of experience ar you looking for ?
                    </div>
                    <div className={`custom-plan-card ${activeBox[1].activeBox==0?'custom-plan-card-active':''}`} onClick={e=>handleBox(1,0)}>
                        <img src={Boxline} alt="" className="boxline" />
                        <div className='custom-plan-card-head'>Design</div>
                        <div className="custom-plan-card-cost">
                            $ 1500 / mo *
                        </div>
                        <div className="custom-plan-card-desc">
                            Premium Design Services for you !<br/>
                        </div>
                    </div>
                
                    <div className={`custom-plan-card ${activeBox[1].activeBox==1?'custom-plan-card-active':''}`} onClick={e=>handleBox(1,1)}>
                        <img src={Boxline} alt="" className="boxline" />
                        <div className='custom-plan-card-head'>All in one</div>
                        <div className="custom-plan-card-cost">
                            $ 2500 / mo *
                        </div>
                        <div className="custom-plan-card-desc">
                            Premium Design Services for you !<br/>
                        </div>
                    </div>

                    <div className={`custom-plan-card ${activeBox[1].activeBox==2?'custom-plan-card-active':''}`} onClick={e=>handleBox(1,2)}>
                        <img src={Boxline} alt="" className="boxline" />
                        <div className='custom-plan-card-head'>developement</div>
                        <div className="custom-plan-card-cost">
                            $ 1800 / mo *
                        </div>
                        <div className="custom-plan-card-desc">
                            Premium Design Services for you !<br/>
                        </div>
                    </div>

                </div>


                <div className="custom-plan-card-cont">
                    <div className="custom-plan-card-ques">
                    What kind of experience ar you looking for ?
                    </div>
                    <div className={`custom-plan-card ${activeBox[2].activeBox==0?'custom-plan-card-active':''}`} onClick={e=>handleBox(2,0)}>
                        <img src={Boxline} alt="" className="boxline" />
                        <div className='custom-plan-card-head'>Design</div>
                        <div className="custom-plan-card-cost">
                            $ 1500 / mo *
                        </div>
                        <div className="custom-plan-card-desc">
                            Premium Design Services for you !<br/>
                        </div>
                    </div>
                
                    <div className={`custom-plan-card ${activeBox[2].activeBox==1?'custom-plan-card-active':''}`} onClick={e=>handleBox(2,1)}>
                        <img src={Boxline} alt="" className="boxline" />
                        <div className='custom-plan-card-head'>All in one</div>
                        <div className="custom-plan-card-cost">
                            $ 2500 / mo *
                        </div>
                        <div className="custom-plan-card-desc">
                            Premium Design Services for you !<br/>
                        </div>
                    </div>

                    <div className={`custom-plan-card ${activeBox[2].activeBox==2?'custom-plan-card-active':''}`} onClick={e=>handleBox(2,2)}>
                        <img src={Boxline} alt="" className="boxline" />
                        <div className='custom-plan-card-head'>developement</div>
                        <div className="custom-plan-card-cost">
                            $ 1800 / mo *
                        </div>
                        <div className="custom-plan-card-desc">
                            Premium Design Services for you !<br/>
                        </div>
                    </div>

                </div>
                
                <div className="custom-plan-new-box-cont">
                    
                    <div className="custom-plan-new-box">
                        <div className="custom-plan-box-head">
                            TOTAL : $ 2980 / mo
                            <div style={{fontSize:'16px',marginTop:'18px'}}>
                                Premium Design Services for you !
                            </div>
                        </div>
                        
                        <div className="custom-plan-text-cont">
                            
                            <div className="custom-plan-box-btn">
                                Pay Now ! 🚀
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}
