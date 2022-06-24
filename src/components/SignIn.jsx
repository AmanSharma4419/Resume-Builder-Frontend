import React, { useState } from "react";
import { postRequest } from "../api/Axios";

export const SignIn = (props) => {
  const [userFeilds, setuserFeilds] = useState({
    email: "",
    password: "",
  });

  const handleuserFeilds = (e) => {
    setuserFeilds({ ...userFeilds, [e.target.name]: e.target.value });
  };

  const handleApiCall = () => {
    postRequest("signIn/", userFeilds).then((response) => {
      if (response.data.statusCode === 200) {
        const { _id } = response.data.data;
        localStorage.setItem("token", response.data.token);
        props.history.push(`/dashboard/${_id}`);
        window.location.reload();
      }
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = userFeilds;
    if (!email || !password) {
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
