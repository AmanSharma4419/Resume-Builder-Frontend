import React, { useState } from "react";
import { postRequest } from "../api/Axios";

export const Signup = () => {
  const [userFeilds, setuserFeilds] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
  });
  const handleuserFeilds = (e) => {
    setuserFeilds({ ...userFeilds, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, password, phone } = userFeilds;
    if (!name || !email || !password) {
      alert("Please fill all feilds before submiting");
    }
    postRequest("signup/", userFeilds).then((response) => {
      console.log(response.data.statusCode, "in the response");
      if (response.data.statusCode === 200) {
        alert("Hello world");
      }
    });
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
    </>
  );
};
