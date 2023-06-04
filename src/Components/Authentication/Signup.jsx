import React, { useState } from "react";
import Man from "../../assets/man.png";
import Man1 from "../../assets/man1.png";
import Man2 from "../../assets/man2.png";
import Man3 from "../../assets/man3.png";
import "./Authentication.css";
import Logo from "../../assets/signup-logo.svg";
import { LeftCircleFilled } from "@ant-design/icons";
import { Link } from "react-router-dom";
import Username, { Email, Password, Phone } from "./SignupQuestion";

export default function Signup() {
  const [page, setPage] = useState(0);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    phone: "",
    username: "",
  });

  const PageDisplay = () => {
    if (page === 0) {
      return <Username formData={formData} setFormData={setFormData} />;
    } else if (page === 1) {
      return <Email formData={formData} setFormData={setFormData} />;
    } else if (page === 2) {
      return <Password formData={formData} setFormData={setFormData} />;
    } else {
      return <Phone formData={formData} setFormData={setFormData} />;
    }
  };
  return (
    <div className="signup">
      <div className="signup-cont">
        <div className="signup-left">
          <div className="signup-left-head">Sign Up</div>
          <div className="signup-left-text">
            Your first step to achieving something great!. Your first step to
            achieving something great! Your first step to achieving something
            great!
          </div>
          <div className="signup-left-img">
            <img
              src={page == 0 ? Man : page == 1 ? Man1 : page == 2 ? Man2 : Man3}
              alt=""
              className="signup-man-img"
            />
          </div>
        </div>
        <div className="signup-right">
          <div className="signup-right-logo">
            <img src={Logo} alt="" className="signup-logo" />
          </div>
          {PageDisplay()}
          <div className="signup-btn-cont">
            {page == 0 ? (
              " "
            ) : (
              <div className="signup-back-btn">
                <LeftCircleFilled
                  onClick={(e) => setPage(page - 1)}
                  style={{ color: "#476DFF", marginRight: "20px" }}
                />
                <div
                  onClick={(e) => setPage(page - 1)}
                  style={{ cursor: "pointer" }}
                >
                  Back
                </div>
              </div>
            )}

            <u style={{ cursor: "pointer" }} onClick={(e) => setPage(page + 1)}>
              {page<3?'Continue':'Complete Sign Up'}
            </u>
          </div>
        </div>
      </div>
    </div>
  );
}
