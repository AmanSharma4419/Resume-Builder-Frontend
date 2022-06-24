import React, { useEffect, useState } from "react";

import { getRequest } from "../api/Axios";
import { CvCard } from "./CvCard";

export const DashBoard = (props) => {
  const [cvData, setCvData] = useState([]);

  const handleLogout = () => {
    localStorage.clear();
    props.history.push("/");
    window.location.reload();
  };

  const handleApiCall = () => {
    getRequest(`listCv/${props.match.params.id}`).then((response) => {
      setCvData([...response.data.cv]);
    });
  };

  useEffect(() => {
    handleApiCall();
  }, []);

  return (
    <>
      <button
        onClick={() => {
          handleLogout();
        }}
      >
        Logout
      </button>
      <h5>Hello welcome to dashboard</h5>
      {cvData &&
        cvData.map((cv) => {
          return <CvCard />;
        })}
    </>
  );
};
