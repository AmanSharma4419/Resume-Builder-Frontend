import React, { useState, useEffect } from "react";
import { postRequest } from "../api/Axios";
import "../assets/style/signIn.css";

export const CreateCv = (props) => {
  const [userFeilds, setuserFeilds] = useState({
    name: "",
    email: "",
    city: "",
    phoneNumber: "",
    highestEducationQal: "",
    collegeName: "",
    percentage: "",
    orgName: "",
    location: "",
    designation: "",
    ctc: "",
    skills: [],
    projectLinks: [],
    socialProfiles: [],
    userid: props.match.params.id,
  });

  const handleuserFeilds = (e) => {
    setuserFeilds({ ...userFeilds, [e.target.name]: e.target.value });
  };

  const handleApiCall = () => {
    postRequest(`createCv/${props.match.params.id}/`, userFeilds).then(
      (response) => {
        if (response.data.statusCode === 200) {
          window.location.reload();
        }
      }
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const {
      name,
      email,
      phone,
      highestEducationQal,
      collegeName,
      designation,
      ctc,
      orgName,
      location,
    } = userFeilds;
    // if (
    //   !name ||
    //   !email ||
    //   !phone ||
    //   !orgName ||
    //   !highestEducationQal ||
    //   !collegeName ||
    //   !designation ||
    //   !ctc ||
    //   !location ||
    //   !designation
    // ) {
    //   return alert("Please fill all feilds before submiting");
    // } else {
    handleApiCall();
    // }
  };

  return (
    <div className="fome-parent-container">
      <div className="edit">
        <h3 className="title">Create User Resume</h3>
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
            value={userFeilds.phoneNumber}
            onChange={(e) => {
              handleuserFeilds(e);
            }}
            name="phoneNumber"
          />
          <input
            type="text"
            placeholder="highesteducationqal..."
            value={userFeilds.highestEducationQal}
            onChange={(e) => {
              handleuserFeilds(e);
            }}
            name="highestEducationQal"
          />
          <input
            type="text"
            placeholder="collegeName..."
            value={userFeilds.collegeName}
            onChange={(e) => {
              handleuserFeilds(e);
            }}
            name="collegeName"
          />
          <input
            type="text"
            placeholder="orgName..."
            value={userFeilds.orgName}
            onChange={(e) => {
              handleuserFeilds(e);
            }}
            name="orgName"
          />
          <input
            type="text"
            placeholder="ctc..."
            value={userFeilds.ctc}
            onChange={(e) => {
              handleuserFeilds(e);
            }}
            name="ctc"
          />
          <input
            type="text"
            placeholder="location..."
            value={userFeilds.location}
            onChange={(e) => {
              handleuserFeilds(e);
            }}
            name="location"
          />
          <input
            type="text"
            placeholder="designation..."
            value={userFeilds.designation}
            onChange={(e) => {
              handleuserFeilds(e);
            }}
            name="designation"
          />
          <button type="submit">submit</button>
        </form>
      </div>
    </div>
  );
};
