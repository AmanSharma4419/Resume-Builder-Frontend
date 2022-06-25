import React, { useEffect, useState } from "react";
import "../assets/style/card.css";
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
    <div className="card-p-d">
      <p
        className="logout"
        onClick={() => {
          handleLogout();
        }}
      >
        Logout
      </p>
      <h5 className="dshboard-title">
        {`Hello below are cv created by you.`}{" "}
      </h5>
      <div className="parent-card-box">
        {cvData &&
          cvData.map((cv) => {
            return <CvCard userInfo={cv} />;
          })}
      </div>
    </div>
  );
};
