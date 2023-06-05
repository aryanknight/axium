import React from 'react';
import Logo from '../../assets/nav-logo.svg';
import { Link } from 'react-router-dom';
import { RightOutlined ,MenuOutlined} from "@ant-design/icons";

export default function NavbarSmall() {

    React.useEffect(()=>{
        window.addEventListener("scroll",function(){
            const nav=document.getElementById("sm-nav");
            if(window.scrollY>0){
                if(nav?.style){
                    nav.style.boxShadow="0 7px 13px 0 rgb(0 0 0 / 10%)";
                    nav.style.backgroundColor="#ffffff";
                }
            }else{
                if(nav?.style){
                    nav.style.boxShadow="none";
                    nav.style.backgroundColor="#ffffff00";
                }
            }
        });
    },[])
    function expand(){
        const a=document.getElementById("bn");
        if (a.style.maxHeight){
            a.style.maxHeight = null;
          } else {
            a.style.maxHeight = a.scrollHeight + "px";
          } 
    }
    
    return (
        <div className="navbar-cont-sm" id="sm-nav">
            <div className="container-medium">
                <div className="navbar">
                    <div className="navbar-logo">
                        <Link to="/">
                            <img src={Logo} id="nav-logo"/>
                        </Link>
                    </div>
                    <MenuOutlined style={{color:'white'}}onClick={expand}/>
                </div>
                <div className="sm-navbar-menu" id="bn">
                        <div className="sm-nav-item"><a style={{color:'white',textDecoration:'none'}} href='#'>Home</a></div>
                        <div className="sm-nav-item"><a style={{color:'white',textDecoration:'none'}} href='#'>About</a></div>
                        <div className="sm-nav-item"><a style={{color:'white',textDecoration:'none'}} href="#">Portfolio</a></div>
                        <div className="sm-nav-item"><a href="/login"style={{color:'white',textDecoration:'none'}} >Login</a></div>
                        <div className="sm-nav-item"><a href="/signup"style={{color:'white',textDecoration:'none'}} >Signup</a></div>
                </div>
            </div>
        </div>    
    )
}