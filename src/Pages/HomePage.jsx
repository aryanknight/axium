import React, { useState } from "react";
import './Common.css';
import HomeComponent from "../Components/HomeComponent/HomeComponent";
import ServiceSection from "../Components/ServiceSection/ServiceSection";
import Onboard from "../Components/Onboard/Onboard";
import HomePlans from "../Components/HomePlans/HomePlans";
import Reach from "../Components/Reach/Reach";
import Footer from "../Components/Footer/Footer";
import NavbarSmall from "../Components/HomeComponent/NavbarSmall";
export default function HomePage() {

  return (<>
  <NavbarSmall/>
    <HomeComponent/>
    <ServiceSection/>
    <Onboard/>
    <HomePlans/>
    <Reach/>
    <Footer/>
    </>
  );
}
