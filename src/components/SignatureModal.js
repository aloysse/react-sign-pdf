import React, { useState, useRef } from "react";
import { Modal, Button, Tab, Nav } from "react-bootstrap";
import { TbPlus } from "react-icons/tb";
import { GrCircleQuestion } from "react-icons/gr";
import SignatureCanvas from "react-signature-canvas";

const SignatureModal = (props) => {
  const sigCanvas = useRef({});
  const [IsSign, setIsSign] = useState(false);
  const [penColor, setPenColor] = useState("black");

  // 清除簽名
  const clearSignature = () => sigCanvas.current.clear();
  // const applySignature = () => {
  //   setImageURL(sigCanvas.current.getTrimmedCanvas().toDataURL("image/ong"));
  // console.log(imageURL);
  // localStorage.setItem("img", showImg.src);
  // };

  //   彈窗首頁
  const ModalMain = () => (
    <Tab.Container id="left-tabs-example" defaultActiveKey="first">
      <Modal.Header closeButton className="p-19 flex-row-reverse">
        <Nav variant="pills" className="justify-content-center w-100">
          <Nav.Item>
            <Nav.Link eventKey="first">簽名</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="second">圖片</Nav.Link>
          </Nav.Item>
        </Nav>
      </Modal.Header>
      <Modal.Body className="p-32">
        <Tab.Content>
          <Tab.Pane eventKey="first">
            <Button
              variant="outline-N4"
              className="py-16 w-100 text-P1"
              onClick={() => {
                setIsSign(true);
              }}
            >
              創建簽名 <TbPlus />
            </Button>
          </Tab.Pane>
          <Tab.Pane eventKey="second" className="text-center">
            功能製作中
          </Tab.Pane>
        </Tab.Content>
      </Modal.Body>
    </Tab.Container>
  );

  // 創建簽名
  const CreateSignature = () => (
    <>
      <Modal.Header closeButton className="p-19 flex-row-reverse">
        <Button variant="P1 text-nowrap text-N1">使用</Button>
        <div className="text-center w-100">創建簽名</div>
      </Modal.Header>
      <Modal.Body className="p-32 text-end">
        <GrCircleQuestion className="mb-16" />

        {/* 簽名區 */}
        <SignatureCanvas
          ref={sigCanvas}
          penColor={penColor}
          canvasProps={{
            height: 200,
            className: "sigCanvas w-100 rounded border border-N4 bg-N2",
          }}
        />
      </Modal.Body>
      <Modal.Footer className="p-24 justify-content-start">
        <div className="text-P1 me-32 pointer" onClick={clearSignature}>
          清除
        </div>
        <div
          className={`p-2 ${
            penColor === "black" ? "border-S1" : "border-N1"
          } border-2 border rounded-pill me-8`}
        >
          <div
            className="bg-N7 rounded-pill"
            style={{ width: "21px", height: "21px", cursor: "pointer" }}
            onClick={() => {
              setPenColor("black");
            }}
          ></div>
        </div>
        <div
          className={`p-2 ${
            penColor === "blue" ? "border-S1" : "border-N1"
          } border-2 border rounded-pill me-8`}
        >
          <div
            className="bg-information rounded-pill"
            style={{ width: "21px", height: "21px", cursor: "pointer" }}
            onClick={() => {
              setPenColor("blue");
            }}
          ></div>
        </div>
        <div
          className={`p-2 ${
            penColor === "red" ? "border-S1" : "border-N1"
          } border-2 border rounded-pill me-8`}
        >
          <div
            className="bg-error rounded-pill"
            style={{ width: "21px", height: "21px", cursor: "pointer" }}
            onClick={() => {
              setPenColor("red");
            }}
          ></div>
        </div>
      </Modal.Footer>
    </>
  );

  return (
    <Modal {...props}>{IsSign ? <CreateSignature /> : <ModalMain />}</Modal>
  );
};

export default SignatureModal;
