import React from "react";
import { Button, Modal } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Notifications = (props) => {
  const navigate = useNavigate();

  let text = "";
  switch (props.currentStep) {
    case "upload": {
      text = "確定要放棄上傳文件嗎？";
      break;
    }
    default: {
      text = "確定要放棄編輯文件嗎？";
      break;
    }
  }
  return (
    <Modal {...props}>
      <Modal.Header className="p-16">
        <Modal.Title className="m-auto fs-P1">警告</Modal.Title>
      </Modal.Header>

      <Modal.Body className="py-24 px-16">{text}</Modal.Body>

      <Modal.Footer>
        <Button variant="outline-P1" onClick={props.onHide}>
          取消
        </Button>
        <Button variant="P1" onClick={() => navigate("/")}>
          確定
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default Notifications;
