import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { GrCircleQuestion } from "react-icons/gr";
import { IconContext } from "react-icons";
import { colors } from "../common/colors.js";
import Notifications from "./Notifications.js";
import { Link } from "react-router-dom";

const StepsBar = ({ currentStep }) => {
  const [step, setStep] = useState(currentStep);
  const [modalShow, setModalShow] = useState(false);

  const StepItem = ({ num, text, current, lastItem }) => (
    <div className="fs-P2 d-inline-flex align-items-center me-16">
      <span
        className={`${
          current ? "bg-P1" : "bg-N5"
        } text-N1 d-inline-flex justify-content-center rounded-pill me-lg-8`}
        style={{ width: "1.5em", height: "1.5em" }}
      >
        {num}
      </span>
      <span className={`${current ? "" : "text-N5"} d-none d-lg-inline`}>
        {text}
      </span>
      <span
        className={`border-top border-N4 ms-16 w-lg-40px w-20px ${
          lastItem ? "d-none" : "d-inline-block"
        }`}
      />
    </div>
  );

  const ButtonGroup = ({ preButton, nextButton, current, setStep }) => {
    let preStep = "";
    let nextStep = "";
    switch (current) {
      case "upload": {
        nextStep = "name";
        break;
      }
      case "name": {
        preStep = "upload";
        nextStep = "sign";
        break;
      }
      case "sign": {
        preStep = "name";
        nextStep = "download";
        break;
      }
      case "download": {
        preStep = "sign";
        break;
      }
      default: {
        break;
      }
    }
    return (
      <>
        <Link to={step === "upload" ? {} : { pathname: `/${preStep}` }}>
          <Button
            variant="outline-P1"
            className="fs-P1 d-flex align-items-center  ms-32"
            onClick={
              current === "upload"
                ? () => setModalShow(true)
                : () => setStep(preStep)
            }
          >
            {preButton}
          </Button>
        </Link>
        <Link to={{ pathname: `/${nextStep}` }}>
          <Button
            variant="P1"
            className="text-N1 ms-16"
            onClick={
              current === "download" ? () => {} : () => setStep(nextStep)
            }
          >
            {nextButton}
          </Button>
        </Link>
      </>
    );
  };

  return (
    <div
      className="bg-N1 d-flex flex-md-row flex-column px-32 py-16 shadow-sm align-items-md-center"
      style={{ zIndex: "6" }}
    >
      <div className="d-flex align-items-center flex-fill">
        <StepItem
          num={"1"}
          text={"上傳檔案"}
          current={step === "upload" ? true : false}
        />
        <StepItem
          num={"2"}
          text={"確認上傳檔案"}
          current={step === "name" ? true : false}
        />
        <StepItem
          num={"3"}
          text={"製作簽署檔案"}
          current={step === "sign" ? true : false}
        />
        <StepItem
          num={"4"}
          text={"下載簽署檔案"}
          current={step === "download" ? true : false}
          lastItem={true}
        />
        <IconContext.Provider
          value={{
            color: colors.N6,
          }}
        >
          <GrCircleQuestion className="ms-auto" />
        </IconContext.Provider>
      </div>
      <div className="d-flex align-items-center mt-md-0 mt-40">
        <span className="me-auto text-N7 fs-H5 d-block d-md-none">
          上傳檔案
        </span>
        <ButtonGroup
          preButton={"取消"}
          nextButton={step !== "download" ? "下一步" : "下載檔案"}
          current={step}
          setStep={setStep}
        />
      </div>
      <Notifications show={modalShow} onHide={() => setModalShow(false)} />
    </div>
  );
};

export default StepsBar;
