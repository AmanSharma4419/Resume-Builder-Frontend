import React, { useEffect } from "react";

import { getRequest } from "../api/Axios";

export const DashBoard = () => {
  useEffect(() => {
    getRequest("listCv/62b32d90d8a749231fbb8367").then((z) => {
      console.log(z.data, "in the zzz");
    });
  });
  return (
    <>
      <h1>Hello welcome to dashboard</h1>
    </>
  );
};
