import React, { useEffect, useState } from "react";
import "../assets/style/card.css";
import { getRequest } from "../api/Axios";
import { CvCard } from "./CvCard";
import { postRequest } from "../api/Axios";
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
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          padding: "8px 0",
        }}
      >
        <i
          class="fas create fa-plus-circle"
          onClick={() => {
            window.location.href = `/create/${props.match.params.id}`;
          }}
        ></i>
        <span
          className="logout"
          onClick={() => {
            handleLogout();
          }}
        >
          Logout
        </span>
      </div>
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
