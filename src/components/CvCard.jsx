import React from "react";

export const CvCard = (props) => {
  const { name, designation, _id } = props.userInfo;
  return (
    <>
      <div className="card">
        <img className="img" src="../avtar.jpeg" alt="Avatar" />
        <div className="container">
          <h4>
            <b>{name}</b>
          </h4>
          <p>{designation}</p>
        </div>
      </div>
      <button
        onClick={() => {
          window.location.href = `/editCv/${_id}`;
        }}
      >
        edit
      </button>
    </>
  );
};
