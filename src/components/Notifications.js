import React from "react";
import { Button, Modal } from "react-bootstrap";

const Notifications = (props) => {
  return (
    <Modal {...props}>
      <Modal.Header className="p-16">
        <Modal.Title className="m-auto fs-P1">警告</Modal.Title>
      </Modal.Header>

      <Modal.Body className="py-24 px-16">確定放棄編輯文件嗎？</Modal.Body>

      <Modal.Footer>
        <Button variant="outline-P1" onClick={props.onHide}>
          取消
        </Button>
        <Button variant="P1">確定</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default Notifications;
