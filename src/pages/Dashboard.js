import React, { useState, useEffect } from "react";
import { colors } from "../common/colors.js";
import {
  Nav,
  Button,
  Form,
  ToggleButtonGroup,
  ToggleButton,
} from "react-bootstrap";
import { TbPlus, TbList, TbLayoutGrid, TbDotsVertical } from "react-icons/tb";
import { IconContext } from "react-icons";
import emptyState from "../assets/img/empty_state.svg";
import DashboardNavbar from "../components/DashboardNavbar.js";
import FileCard from "../components/FileCard.js";

const Dashboard = () => {
  const [radioValue, setRadioValue] = useState("1");
  const [file, setFile] = useState(true);

  useEffect(() => {
    console.log(radioValue);
  }, [radioValue]);

  return (
    <div className="bg-N2 min-vh-100 min-vw-100">
      <DashboardNavbar />
      <div className="p-32 h-100">
        {/* 檔案篩選bar start */}
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
        {/* 檔案篩選bar end */}

        <div className="py-24 px-16">
          {file ? (
            <FileCard />
          ) : (
            <div className="max-vh-100 py-80 text-center">
              <img src={emptyState} alt="" />
              <div className="fs-P1 text-N6 mt-24">目前尚無需簽署的文件</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
