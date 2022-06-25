import ReactDOMServer from "react-dom/server";
import jsPDF from "jspdf";
import React, { useState, useEffect } from "react";
import { getRequest } from "../api/Axios";
import "../assets/style/signIn.css";

export const ViewCv = (props) => {
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

  return (
    <div className="fome-parent-container">
      <div className="edit">
        <h3 className="title"> User Resume</h3>
        <form>
          Name
          <input
            type="text"
            placeholder="name..."
            value={userFeilds.name}
            name="name"
          />
          <input
            type="email"
            placeholder="email..."
            value={userFeilds.email}
            name="email"
          />
          <input
            type="text"
            placeholder="phone..."
            value={userFeilds.phoneNumber}
            name="phoneNumber"
          />
          <input
            type="text"
            placeholder="highesteducationqal..."
            value={userFeilds.highestEducationQal}
            name="highestEducationQal"
          />
          <input
            type="text"
            placeholder="collegeName..."
            value={userFeilds.collegeName}
            name="collegeName"
          />
          <input
            type="text"
            placeholder="orgName..."
            value={userFeilds.orgName}
            name="orgName"
          />
          <input
            type="text"
            placeholder="highesteducationqal..."
            value={userFeilds.highestEducationQal}
            name="highestEducationQal"
          />
          <input
            type="text"
            placeholder="ctc..."
            value={userFeilds.ctc}
            name="ctc"
          />
          <input
            type="text"
            placeholder="location..."
            value={userFeilds.location}
            name="location"
          />
          <input
            type="text"
            placeholder="designation..."
            value={userFeilds.designation}
            name="designation"
          />
          <button type="submit">submit</button>
        </form>
        <View />
      </div>
    </div>
  );
};

export const View = () => {
  const doc = new jsPDF();
  const Foo = <ViewCv />;
  const save = () => {
    doc.html(ReactDOMServer.renderToStaticMarkup(Foo), {
      callback: () => {
        doc.save("myDocument.pdf");
      },
    });
  };

  return (
    <div>
      <button onClick={save}>save</button>
    </div>
  );
};
