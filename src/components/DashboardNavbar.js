import React from "react";
import { Nav, Button } from "react-bootstrap";
import logo from "../assets/img/Logo.svg";
import { GrCircleQuestion } from "react-icons/gr";
import { FaCaretDown } from "react-icons/fa";
import { TbPlus } from "react-icons/tb";
import { Link } from "react-router-dom";

const DashboardNavbar = ({ userName, userPhoto }) => {
  return (
    <>
      <div
        className="bg-N1 d-flex justify-content-between px-32 py-16 shadow-sm"
        style={{ zIndex: "6" }}
      >
        <img style={{ width: "89px" }} src={logo} alt="點點簽logo" />
        <Nav className="justify-content-center" activeKey="/home">
          <Nav.Item>
            <Nav.Link href="/home">文件</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="disabled" disabled>
              搜尋
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="disabled" disabled>
              通知
            </Nav.Link>
          </Nav.Item>
        </Nav>
        <div className="d-flex align-items-center">
          <GrCircleQuestion className="me-32" />
          <img
            style={{ width: "36px" }}
            className="me-8 rounded-pill"
            src={userPhoto}
            alt=""
          />
          <div className="me-12">{userName}</div>
          <FaCaretDown />
        </div>
      </div>

      <div
        className="bg-N1 d-flex justify-content-between px-32 py-19"
        style={{ zIndex: "2" }}
      >
        <Nav className="justify-content-center" activeKey="/home">
          <Nav.Item>
            <Nav.Link href="/home">待自己簽署</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="disabled" disabled>
              待他人簽署
              <span
                className="ms-4 bg-N2 d-inline-block rounded-pill text-center"
                style={{ width: "1.5em", height: "1.5em" }}
              >
                2
              </span>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="disabled" disabled>
              已完成
              <span
                className="ms-4 bg-N2 d-inline-block rounded-pill text-center"
                style={{ width: "1.5em", height: "1.5em" }}
              >
                1
              </span>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="disabled" disabled>
              已取消
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="disabled" disabled>
              草稿
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="disabled" disabled>
              已封存
            </Nav.Link>
          </Nav.Item>
        </Nav>
        <Link to="/upload">
          <Button
            variant="P1"
            className="text-N1 fs-P1 d-flex align-items-center"
          >
            新增
            <TbPlus className="ms-8" />
          </Button>
        </Link>
      </div>
    </>
  );
};

export default DashboardNavbar;
