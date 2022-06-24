import React from "react";

export const CvCard = () => {
  return (
    <>
      <div className="card">
        <img className="img" src="../avtar.jpeg" alt="Avatar" />
        <div className="container">
          <h4>
            <b>John Doe</b>
          </h4>
          <p>Architect & Engineer</p>
        </div>
      </div>
    </>
  );
};
