import React from "react";
import "../assets/style/card.css";
import { deleteRequest } from "../api/Axios";
export const CvCard = (props) => {
  const { name, designation, _id } = props.userInfo;
  const deleteCv = () => {
    deleteRequest(`deleteCv/${_id}/`).then((response) => {
      if (response.data.statusCode === 200) {
        alert("deleted successfully");
        window.location.reload();
      }
    });
  };
  return (
    <div className="card">
      <div className="container">
        <img className="img" src="../avtar.jpeg" alt="Avatar" />
        <h4>
          <b>{name}</b>
        </h4>
        <p>{designation}</p>
      </div>
      <div style={{ textAlign: "center" }}>
        <i
          class="fas fa-edit"
          onClick={() => {
            window.location.href = `/editCv/${_id}`;
          }}
        ></i>
        <i
          class="fas fa-trash"
          onClick={() => {
            deleteCv();
          }}
        ></i>
        <i
          class="fas fa-eye"
          onClick={() => {
            window.location.href = `/view/${_id}`;
          }}
        ></i>
      </div>
    </div>
  );
};
