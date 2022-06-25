import React, { useState, useEffect } from "react";
import { getRequest, patchRequest } from "../api/Axios";

export const EditCV = (props) => {
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
  });

  const handleuserFeilds = (e) => {
    setuserFeilds({ ...userFeilds, [e.target.name]: e.target.value });
  };

  const handleApiCallToListCvInfo = () => {
    getRequest(`getCvById/${props.match.params.id}/`).then((response) => {
      if (response.data.statusCode === 200) {
        setuserFeilds({ ...userFeilds, ...response.data.cv });
      }
    });
  };
  useEffect(() => {
    handleApiCallToListCvInfo();
  }, []);

  const handleApiCall = () => {
    patchRequest(`updateCv/${props.match.params.id}/`, userFeilds).then(
      (response) => {
        if (response.data.statusCode === 200) {
          window.location.reload();
        }
      }
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleApiCall();
  };

  return (
    <>
      <h3>Edit User Resume</h3>
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
          placeholder="highesteducationqal..."
          value={userFeilds.highestEducationQal}
          onChange={(e) => {
            handleuserFeilds(e);
          }}
          name="highestEducationQal"
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
    </>
  );
};
