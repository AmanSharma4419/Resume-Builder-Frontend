import jsPDF from "jspdf";
import React, { useState, useEffect } from "react";
import { getRequest } from "../api/Axios";
import "../assets/style/signIn.css";

export const ViewCv = (props) => {
  const [color, setColor] = useState("bg-resumedefault");
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

  const generatePdf = () => {
    var doc = new jsPDF("p", "pt", "a4");
    doc.html(document.querySelector("#content"), {
      callback: function (pdf) {
        pdf.save("mydf.pdf");
      },
    });
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

  const setBgColor = (color) => {
    if (color) {
      setColor(color);
    }
  };
  const {
    name,
    email,
    highestEducationQal,
    orgName,
    designation,
    collegeName,
    city,
    skills,
    percentage,
    location,
    ctc,
    phoneNumber,
  } = userFeilds;
  return (
    <>
      <div className={color}>
        <div className="color-btn">
          <p
            className="color-bt"
            onClick={() => {
              setBgColor("bg-resume2");
            }}
          >
            Layout1
          </p>
          <p
            className="color-bt"
            onClick={() => {
              setBgColor("bg-resume1");
            }}
          >
            Layout2
          </p>
          <p
            className="downloud-btn"
            onClick={() => {
              generatePdf();
            }}
          >
            Download
          </p>
        </div>

        <div id="content" className="fome-parent-resume">
          <div className="view-result-resume">
            <h3 className="title">{userFeilds.name} Resume</h3>
            <div>
              <p>
                My Name is
                {name}. I'am from {city}
                {location} and iam working as {designation} for
                {orgName} from last few years. I have done my
                {highestEducationQal} from {collegeName} with {percentage}. i
                have skills as defined {skills}
                My last ctc is {ctc}.
              </p>
              Contact Details
              <p>
                <span>Email : </span>
                {email}
              </p>
              <p>
                <span>Phone :</span>
                {phoneNumber}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
