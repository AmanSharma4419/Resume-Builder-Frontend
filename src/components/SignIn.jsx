import React, { useState } from "react";
import { postRequest } from "../api/Axios";

export const SignIn = () => {
  const [userFeilds, setuserFeilds] = useState({
    email: "",
    password: "",
  });
  const handleuserFeilds = (e) => {
    setuserFeilds({ ...userFeilds, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = userFeilds;
    if (!email || !password) {
      alert("Please fill all feilds before submiting");
    }
    postRequest("signIn/", userFeilds).then((response) => {
      console.log(response.data.statusCode, "in the response");
      if (response.data.statusCode === 200) {
        alert("SignIn successfull");
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
          type="email"
          placeholder="email..."
          value={userFeilds.email}
          onChange={(e) => {
            handleuserFeilds(e);
          }}
          name="email"
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
