import React from "react";
import { Card } from "react-bootstrap";
import { TbDotsVertical } from "react-icons/tb";
import pdfIcon from "../assets/img/pdf-icon.svg";

const FileCard = () => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Body className="py-24 px-16 d-flex">
        <div className="flex-grow-1">
          <div className="d-flex justify-content-between">
            <div>
              <Card.Title className="mb-8">產品測試文件</Card.Title>
              <Card.Text className="mb-2 text-muted fs-P2">
                <span className="rounded bg-P2 py-2 px-4">產品教學</span>
              </Card.Text>
            </div>
            <img src={pdfIcon} alt="" />
          </div>

          <Card.Text className="my-24 text-N6 fs-P2">
            最後修改時間：2022-10-26
          </Card.Text>
        </div>
        <TbDotsVertical className="ms-24" />
      </Card.Body>
      <Card.Footer className="p-16 bg-N1">
        <Card.Text>
          <span className="text-N6">簽署者：</span>Jenny We
        </Card.Text>
      </Card.Footer>
    </Card>
  );
};

export default FileCard;
