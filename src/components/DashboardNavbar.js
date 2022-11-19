import React from "react";
import { Nav, Button, Popover, OverlayTrigger } from "react-bootstrap";
import logo from "../assets/img/Logo.svg";
import { GrCircleQuestion } from "react-icons/gr";
import { FaCaretDown } from "react-icons/fa";
import { TbPlus } from "react-icons/tb";
import { Link } from "react-router-dom";

const DashboardNavbar = ({ userName, userPhoto, logOut }) => {
  const userPopover = (
    <Popover id="popover-basic">
      <Popover.Body className="p-12 fw-bold pointer" onClick={logOut}>
        登出
      </Popover.Body>
    </Popover>
  );

  return (
    <>
      <div
        className="bg-N1 d-flex justify-content-between px-32 py-16 shadow-sm"
        style={{ zIndex: "6" }}
      >
        {/* 上排
        除了載入會員資料及登出功能外，其餘尚無作用 */}
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
          <OverlayTrigger
            trigger="click"
            placement="bottom"
            overlay={userPopover}
          >
            <div>
              <FaCaretDown />
            </div>
          </OverlayTrigger>
        </div>
      </div>

      {/* 下排 */}
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
