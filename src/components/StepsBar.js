import React, { useState } from "react";
import {
  Nav,
  Button,
  Form,
  ToggleButtonGroup,
  ToggleButton,
  Card,
  Modal,
} from "react-bootstrap";
import { GrCircleQuestion } from "react-icons/gr";
import { IconContext } from "react-icons";
import { colors } from "../common/colors.js";
import Notifications from "./Notifications.js";

const StepsBar = ({ num, text, current }) => {
  const [modalShow, setModalShow] = useState(false);

  const StepItem = ({ num, text, current }) => (
    <div className="fs-P2 d-inline-flex align-items-center me-16">
      <span
        className={`${
          current ? "bg-P1" : "bg-N5"
        } text-N1 d-inline-flex justify-content-center rounded-pill me-8`}
        style={{ width: "1.5em", height: "1.5em" }}
      >
        {num}
      </span>
      <span className={`${current ? "" : "text-N5"} d-none d-md-inline`}>
        {text}
      </span>
      <span
        className="border-top border-N4 d-inline-block ms-16"
        style={{ width: "40px" }}
      />
    </div>
  );

  return (
    <div
      className="bg-N1 d-flex flex-md-row flex-column px-32 py-16 shadow-sm align-items-md-center"
      style={{ zIndex: "6" }}
    >
      <div className="d-flex align-items-center flex-fill">
        <StepItem num={"1"} text={"上傳檔案"} current={true} />
        <StepItem num={"2"} text={"確認上傳檔案"} current={false} />
        <StepItem num={"3"} text={"製作簽署檔案"} current={false} />
        <StepItem num={"4"} text={"下載簽署檔案"} current={false} />
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
        <Button
          variant="outline-P1"
          className="fs-P1 d-flex align-items-center  ms-32"
          onClick={() => setModalShow(true)}
        >
          取消
        </Button>
        <Button variant="P1" className="text-N1 ms-16">
          下一步
        </Button>
      </div>
      <Notifications show={modalShow} onHide={() => setModalShow(false)} />
    </div>
  );
};

export default StepsBar;
