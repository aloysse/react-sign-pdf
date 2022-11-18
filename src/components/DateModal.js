import React from "react";
import { Modal, Button, Container, Row, Col } from "react-bootstrap";

const todayYear = new Date().getFullYear();
const todayMonth = new Date().getMonth();
const todayDate = new Date().getDate();

const DateModal = (props) => {
  return (
    <Modal {...props}>
      <Modal.Header closeButton className="p-19 flex-row-reverse">
        <Button variant="P1 text-nowrap text-N1">使用</Button>
        <div className="text-center w-100">創建簽名</div>
      </Modal.Header>
      <Modal.Body className="py-32 px-60 text-center">
        <Container>
          <Row className="gx-40 gy-32">
            <Col xs={6}>
              <div className="border border-N4 text-N6 rounded py-8 px-16">
                {todayYear}/{todayMonth}/{todayDate}
              </div>
            </Col>
            <Col xs={6}>
              <div className="border border-N4 text-N6 rounded py-8 px-16">
                {todayDate}/{todayMonth}/{todayYear}
              </div>
            </Col>
            <Col xs={6}>
              <div className="border border-N4 text-N6 rounded py-8 px-16">
                {todayYear}-{todayMonth}-{todayDate}
              </div>
            </Col>
            <Col xs={6}>
              <div className="border border-N4 text-N6 rounded py-8 px-16">
                {todayMonth}-{todayDate}-{todayYear}
              </div>
            </Col>
          </Row>
        </Container>
      </Modal.Body>
    </Modal>
  );
};

export default DateModal;
