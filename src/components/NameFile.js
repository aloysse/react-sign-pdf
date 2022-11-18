import React from "react";
import { Link } from "react-router-dom";
import { TbChevronLeft } from "react-icons/tb";
import { Form } from "react-bootstrap";

const NameFile = (setStep) => {
  return (
    <div className="vw-100 py-32 pt-md-80 ">
      {/* inner */}
      <div className="bg-N1 w-md-75 px-16 py-24 m-auto rounded">
        {/* body */}
        <Link
          to="/"
          className="fw-normal text-decoration-none d-flex align-items-center mb-24 fw-bold"
          onClick={() => setStep("upload")}
        >
          <TbChevronLeft />
          上一步
        </Link>
        <Form>
          <Form.Group className="mb-32" controlId="">
            <Form.Label>
              文件名稱 <span className="text-error">*</span>
            </Form.Label>
            <Form.Control type="text" placeholder="請輸入文件名稱" />
          </Form.Group>
          <Form.Group className="mb-32" controlId="formBasicPassword">
            <Form.Label>
              上傳文件 <span className="text-error">*</span>
            </Form.Label>
            <Form.Text className="d-block border rounded py-8 px-12 fs-P1 fw-bold text-N7">
              檔案名稱
              <div className="fw-normal fs-P2 text-N6 mt-12">單頁</div>
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-32" controlId="">
            <Form.Label>建立標籤</Form.Label>
            <Form.Control type="text" placeholder="請輸入標籤名稱" />
          </Form.Group>
        </Form>
      </div>
    </div>
  );
};

export default NameFile;
