import React, { useState, useEffect } from "react";
import { colors } from "../common/colors.js";
import {
  Nav,
  Button,
  Form,
  ToggleButtonGroup,
  ToggleButton,
} from "react-bootstrap";
import logo from "../assets/img/Logo.svg";
import { GrCircleQuestion } from "react-icons/gr";
import { FaCaretDown } from "react-icons/fa";
import { TbPlus, TbList, TbLayoutGrid } from "react-icons/tb";
import { IconContext } from "react-icons";
import emptyState from "../assets/img/empty_state.svg";

const Dashboard = () => {
  const [radioValue, setRadioValue] = useState("1");

  useEffect(() => {
    console.log(radioValue);
  }, [radioValue]);

  return (
    <div className="bg-N2 min-vh-100 min-vw-100">
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
          <img style={{ width: "36px" }} className="me-8" src="" alt="" />
          <div className="me-12">Jenny Wu</div>
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
        <Button
          variant="P1"
          className="text-N1 fs-P1 d-flex align-items-center"
        >
          新增
          <TbPlus className="ms-8" />
        </Button>
      </div>

      <div className="p-32 h-100">
        <div className="border-bottom border-N4 d-flex pb-16">
          <Form.Select
            aria-label="Default select example"
            style={{ width: "180px" }}
            className="me-24"
          >
            <option>全部</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </Form.Select>
          <Form.Select
            aria-label="Default select example"
            style={{ width: "180px" }}
            className="me-auto"
          >
            <option>全部</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </Form.Select>
          <Form.Group
            className="mb-3 me-24"
            controlId="exampleForm.ControlInput1"
          >
            <Form.Control type="email" placeholder="name@example.com" />
          </Form.Group>
          <ToggleButtonGroup
            type="radio"
            name="options"
            defaultValue={1}
            className="bg-N1"
          >
            <ToggleButton
              id="tbg-radio-1"
              value={1}
              type="radio"
              variant="outline-P1"
              onChange={(e) => setRadioValue(e.currentTarget.value)}
            >
              <IconContext.Provider
                value={radioValue === 1 ? { color: colors.N1 } : ""}
              >
                <TbList />
              </IconContext.Provider>
            </ToggleButton>
            <ToggleButton
              id="tbg-radio-2"
              value={2}
              type="radio"
              variant="outline-P1"
              onChange={(e) => setRadioValue(e.currentTarget.value)}
              className={radioValue === 2 ? "text-N1" : ""}
            >
              <TbLayoutGrid />
            </ToggleButton>
          </ToggleButtonGroup>
        </div>
        <div>
          <div className="max-vh-100 py-80 text-center">
            <img src={emptyState} alt="" />
            <div className="fs-P1 text-N6 mt-24">目前尚無需簽署的文件</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
