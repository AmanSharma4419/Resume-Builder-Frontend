import React, { useState, useEffect } from "react";
import { postRequest } from "../api/Axios";
import { GoogleLogin } from "./GoogleLogin";
import { Link } from "react-router-dom";
import "../assets/style/signIn.css";

export const SignUp = (props) => {
  const [userFeilds, setuserFeilds] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
  });
  useEffect(() => {
    const userId = localStorage.getItem("_id");
    if (userId) {
      props.history.push(`/dashboard/${userId}`);
      window.location.reload();
    }
  }, []);
  const handleuserFeilds = (e) => {
    setuserFeilds({ ...userFeilds, [e.target.name]: e.target.value });
  };

  const handleApiCall = () => {
    postRequest("signup/", userFeilds).then((response) => {
      if (response.data.statusCode === 200) {
        props.history.push("/login");
        window.location.reload();
      }
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, password, phone } = userFeilds;
    if (!name || !email || !password) {
      return alert("Please fill all feilds before submiting");
    } else {
      handleApiCall();
    }
  };

  return (
    <div className="fome-parent-container">
      <div className="signUp">
        <h3 className="title">SignUp </h3>
        <form
          onSubmit={(e) => {
            handleSubmit(e);
          }}
        >
          <input
            type="text"
            placeholder="name..."
            value={userFeilds.name}
            onChange={(e) => {
              handleuserFeilds(e);
            }}
            name="name"
          />
          <input
            type="email"
            placeholder="email..."
            value={userFeilds.email}
            onChange={(e) => {
              handleuserFeilds(e);
            }}
            name="email"
          />
          <input
            type="phone"
            placeholder="phone..."
            value={userFeilds.phone}
            onChange={(e) => {
              handleuserFeilds(e);
            }}
            name="phone"
          />
          <input
            type="password"
            placeholder="password..."
            value={userFeilds.password}
            onChange={(e) => {
              handleuserFeilds(e);
            }}
            name="password"
          />
          <button type="submit">submit</button>
        </form>
        <div className="title">
          <a href="/login">login</a>
          OR
          <div>
            <GoogleLogin />
          </div>
        </div>
      </div>
    </div>
  );
};
