import React, { useState } from "react";
import { postRequest } from "../api/Axios";
import { GoogleLogin } from "./GoogleLogin";
import { Link } from "react-router-dom";
export const SignUp = (props) => {
  const [userFeilds, setuserFeilds] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
  });

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
    <>
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
          type="text"
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
      <a href="/login">login</a>
      OR
      <div>
        <GoogleLogin />
      </div>
    </>
  );
};
