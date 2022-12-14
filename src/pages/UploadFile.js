import React, { useEffect, useState } from "react";
import errorImg from "../assets/img/error.svg";
import { Nav } from "react-bootstrap";
import { TbX } from "react-icons/tb";
import { useNavigate } from "react-router-dom";
import StepsBar from "../components/StepsBar";
import { PdfFile } from "../context/PdfContext";

const UploadFile = ({ step, setStep }) => {
  const navigate = useNavigate();
  const { pdfURL, setPdfURL } = PdfFile();

  // 上傳檔案
  const handleUploadFile = (e) => {
    if (!e.target.files[0]) return;
    const files = e.target.files;
    setPdfURL(URL.createObjectURL(files[0]));
    console.log(pdfURL);
  };

  //   上傳失敗 Alert
  const UploadFailAlert = () => (
    <div
      className="d-inline-flex py-8 px-12 align-items-start shadow-lg  position-absolute start-50 translate-middle"
      style={{ border: "1px solid #FEC6C1", background: "#FFF4F3" }}
    >
      <img src={errorImg} alt="" />
      <div>
        <div>上傳失敗</div>
        <div className="text-N7 fs-P2 mt-8">
          檔案超過 10 MB，請選擇其他檔案上傳
        </div>
      </div>
      <TbX />
    </div>
  );

  return (
    <div className="bg-N2 min-vh-100 min-vw-100 d-flex flex-column">
      <StepsBar currentStep={"upload"} />

      <div className="vw-100 py-32 pt-md-80 ">
        <UploadFailAlert />

        {/* inner */}
        <div className="bg-N1 w-md-75 m-auto rounded">
          {/* navbar */}
          <Nav
            activeKey="/home"
            onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
            className="border-bottom border-N2 pt-40"
          >
            <Nav.Item>
              <Nav.Link eventKey="link-2">上傳檔案</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="disabled" disabled>
                掃描檔案
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="disabled" disabled>
                歷史上傳
              </Nav.Link>
            </Nav.Item>
          </Nav>
          {/* body */}
          <div className="px-16 py-40">
            <div className="rounded border-2 border-N4 border-dashed py-80 text-center">
              <label id="uploadFile">
                <div className="py-12 px-19 rounded border border-P1 text-P1 d-inline-block pointer">
                  選擇檔案 (PDF / PNG)
                </div>
                <input
                  id="uploadFile"
                  type="file"
                  accept=".pdf"
                  className="d-none"
                  onChange={handleUploadFile}
                />
              </label>
              <div className="text-N6 mt-24 d-none">或直接拖放檔案進來</div>
            </div>
            <div className="mt-16 text-N6 fs-P2">檔案大小不得超過 10 MB</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UploadFile;
