import React from "react";
import { Modal, Button, Form } from "react-bootstrap";

const InputTextModal = (props) => {
  return (
    <Modal {...props}>
      <Modal.Header closeButton className="p-19 flex-row-reverse">
        <Button variant="P1 text-nowrap text-N1">使用</Button>
        <div className="text-center w-100">文字</div>
      </Modal.Header>
      <Modal.Body className="p-32 text-center">
        <Form>
          <Form.Control type="text" placeholder="請輸入檔案名稱" autoFocus />
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default InputTextModal;
