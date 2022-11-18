import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import UploadFile from "../components/UploadFile.js";
import StepsBar from "../components/StepsBar.js";
import NameFile from "../components/NameFile.js";
import SignFile from "../components/SignFile.js";
import DownloadFile from "../components/DownloadFile.js";

const Flow = () => {
  const [step, setStep] = useState("upload");

  return (
    <div className="bg-N2 min-vh-100 min-vw-100 d-flex flex-column">
      <Router>
        <StepsBar step={step} setStep={setStep} />

        {/* main section start */}

        <Routes>
          <Route path="/" element={<UploadFile />} />
          <Route
            path="/name"
            element={<NameFile />}
            step={step}
            setStep={setStep}
          />
          <Route
            path="/sign"
            element={<SignFile />}
            step={step}
            setStep={setStep}
          />
          <Route
            path="/download"
            element={<DownloadFile />}
            step={step}
            setStep={setStep}
          />
        </Routes>
      </Router>
      {/* main section end */}
    </div>
  );
};

export default Flow;
