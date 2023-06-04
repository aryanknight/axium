import React, { useState } from "react";
import './Common.css';
import CustomizePlan from "../Components/CustomizePlan/CustomizePlan";
import Footer from "../Components/Footer/Footer";
export default function CustomizePlans() {

  return (
  <>
    <CustomizePlan/>
    <Footer color={'black'}/>
  </>
  );
}
