import React from "react";
import {
  BrowserRouter as Router,
  HashRouter,
  Route,
  Routes,
} from "react-router-dom";
import UploadFile from "../components/UploadFile.js";
import StepsBar from "../components/StepsBar.js";
import NameFile from "../components/NameFile.js";
import SignFile from "../components/SignFile.js";

const Flow = () => {
  return (
    <div className="bg-N2 min-vh-100 min-vw-100 d-flex flex-column">
      <StepsBar />

      {/* main section start */}
      <Router>
        <Routes>
          <Route path="/" element={<UploadFile />} />
          <Route path="/name_file" element={<NameFile />} />
          <Route path="sign" element={<SignFile />} />
        </Routes>
      </Router>
      {/* main section end */}
    </div>
  );
};

export default Flow;
