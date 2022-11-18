import React, { useState } from "react";
import { Nav, Button, ButtonGroup } from "react-bootstrap";
import {
  TbEdit,
  TbEye,
  TbTag,
  TbPencil,
  TbCalendar,
  TbTextResize,
  TbPlus,
  TbMinus,
  TbMinimize,
  TbX,
} from "react-icons/tb";
import { IconContext } from "react-icons";
import { colors } from "../common/colors";
import SignatureModal from "./SignatureModal";
import DateModal from "./DateModal";
import InputTextModal from "./InputTextModal";

const SignFile = () => {
  const [previewOpen, setPreviewOpen] = useState(true);
  const [SignatureModalShow, setSignatureModalShow] = useState(false);
  const [DateModalShow, setDateModalShow] = useState(false);
  const [TextModalShow, setTextModalShow] = useState(false);

  // 側選單
  const SideBar = () => (
    <div
      className=" d-md-block d-none shadow-sm bg-N1"
      style={{ width: "240px" }}
    >
      <div
        className={`${
          SignatureModalShow ? "bg-P2" : ""
        } py-16 px-24 text-N6 d-flex align-items-center`}
        style={{ cursor: "pointer" }}
        onClick={() => setSignatureModalShow(true)}
      >
        <IconContext.Provider value={{ size: "1.5em", color: colors.N6 }}>
          <TbPencil className="me-12" />
        </IconContext.Provider>
        簽名
      </div>
      <div
        className={`${
          DateModalShow ? "bg-P2" : ""
        } py-16 px-24 text-N6 d-flex align-items-center`}
        style={{ cursor: "pointer" }}
        onClick={() => setDateModalShow(true)}
      >
        <IconContext.Provider value={{ size: "1.5em", color: colors.N6 }}>
          <TbCalendar className="me-12" />
        </IconContext.Provider>
        日期
      </div>

      <div
        className={`${
          TextModalShow ? "bg-P2" : ""
        } py-16 px-24 text-N6 d-flex align-items-center`}
        style={{ cursor: "pointer" }}
        onClick={() => setTextModalShow(true)}
      >
        <IconContext.Provider value={{ size: "1.5em", color: colors.N6 }}>
          <TbTextResize className="me-12" />
        </IconContext.Provider>
        文字
      </div>
      <SignatureModal
        show={SignatureModalShow}
        onHide={() => setSignatureModalShow(false)}
      />
      <DateModal show={DateModalShow} onHide={() => setDateModalShow(false)} />
      <InputTextModal
        show={TextModalShow}
        onHide={() => setTextModalShow(false)}
      />
    </div>
  );

  //   縮圖item
  const PreviewItem = () => (
    <div className="text-center mb-19">
      <div className="p-16 bg-P2 mb-8">
        <div className="bg-N1 w-100" style={{ height: "100px" }}>
          123
        </div>
      </div>
      <div
        className="bg-P1 d-inline-block m-auto text-N1 rounded-pill fs-P2"
        style={{ width: "1.5em" }}
      >
        1
      </div>
    </div>
  );

  const NavBar = () => (
    <div
      className="shadow-sm bg-N1 d-flex justify-content-between px-32 py-19 align-items-center position-relative"
      style={{ zIndex: "2" }}
    >
      <div className="me-md-48 me-24 fs-mb-H5 text-N7">
        <IconContext.Provider value={{ size: "1.5em" }}>
          <TbEdit className="me-md-16 me-12" />
        </IconContext.Provider>
        <span>產品測試文件</span>
      </div>
      <div className="me-auto fs-md-P2">
        <IconContext.Provider value={{ size: "1.5em" }}>
          <TbTag className="me-md-16 me-8" />
        </IconContext.Provider>
        <span className=" rounded bg-P2 py-2 px-4">產品教學</span>
      </div>
      <Nav.Item>
        <Nav.Link onClick={() => setPreviewOpen(!previewOpen)}>
          <IconContext.Provider value={{ color: colors.N6 }}>
            <TbEye />
          </IconContext.Provider>
          <span className="ms-6 text-N6">預覽</span>
        </Nav.Link>
      </Nav.Item>

      {/* 縮圖區塊 */}
      <div
        className={`${
          previewOpen ? "d-block" : "d-none"
        } position-absolute end-0 top-100 bg-N1 py-24 px-16`}
        style={{ width: "224px" }}
      >
        <div className="d-flex justify-content-between mb-19">
          <TbX />
          <span className="text-N5 fs-P2">1頁</span>
        </div>
        <PreviewItem />
        <PreviewItem />
      </div>
    </div>
  );

  return (
    <div className="h-100 d-flex flex-column flex-fill">
      <NavBar />
      <div className="d-flex flex-fill">
        <SideBar />

        {/* 右側文件區塊 */}
        <div className="flex-fill bg-N2 py-md-24 px-md-32 p-16">
          <div className="d-flex">
            <ButtonGroup aria-label="Basic example" className="mb-24">
              <Button variant="N1">
                <TbPlus />
              </Button>
              <Button variant="N1">
                <TbMinus />
              </Button>
              <Button variant="N1">
                <TbMinimize />
              </Button>
            </ButtonGroup>
            <div className="d-md-none ms-auto">
              <Button
                variant={SignatureModalShow ? "P2" : "N1"}
                className={`${SignatureModalShow ? "text-P1" : ""} me-8`}
                onClick={() => setSignatureModalShow(true)}
              >
                <TbPencil />
              </Button>
              <Button
                variant={DateModalShow ? "P2" : "N1"}
                className={`${DateModalShow ? "text-P1" : ""} me-8`}
                onClick={() => setDateModalShow(true)}
              >
                <TbCalendar />
              </Button>
              <Button
                variant={TextModalShow ? "P2" : "N1"}
                className={`${TextModalShow ? "text-P1" : ""} me-8`}
                onClick={() => setTextModalShow(true)}
              >
                <TbTextResize />
              </Button>
            </div>
          </div>
          <div className="bg-N1 w-75 h-75"></div>
        </div>
      </div>
    </div>
  );
};

export default SignFile;
