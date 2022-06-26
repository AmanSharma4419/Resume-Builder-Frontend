import ReactDOMServer from "react-dom/server";
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
        </div>
        <div id="content" className="fome-parent-resume">
          <div className="view-result-resume">
            <h3 className="title">{userFeilds.name} Resume</h3>
            <div>
              <p>
                My Name is
                {userFeilds.name}. I'am from {userFeilds.location} and iam
                working as {userFeilds.designation} for
                {userFeilds.orgName} from last few years. I have done my
                {userFeilds.highestEducationQal} from {userFeilds.collegeName}.
                My last ctc is {userFeilds.ctc}.
              </p>
              Contact Details
              <p>
                <span>Email : </span>
                {userFeilds.email}
              </p>
              <p>
                <span>Phone :</span>
                {userFeilds.phoneNumber}
              </p>
            </div>
          </div>
        </div>
        <button
          className="downloud-btn"
          onClick={() => {
            generatePdf();
          }}
        >
          Download
        </button>
      </div>
    </>
  );
};
