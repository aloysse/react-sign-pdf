import React, { useEffect } from "react";
import logo from "../assets/img/Logo.svg";
import { Nav, Form, Button } from "react-bootstrap";
import { TbMail, TbLock } from "react-icons/tb";
import { IconContext } from "react-icons";
import { colors } from "../common/colors.js";
import facebookBlue from "../assets/img/facebook-blue.svg";
import googleBlue from "../assets/img/google-blue.svg";
import loginBG from "../assets/img/undraw_contract_re_ves91.svg";
import { useNavigate } from "react-router-dom";
import { auth, provide } from "../config/firebase";
import { signInWithPopup } from "firebase/auth";
import { UserAuth } from "../context/AuthContext";

const Login = () => {
  const navigate = useNavigate();
  const { googleSignIn, user } = UserAuth();

  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (user != null) {
      navigate("/files");
    }
  }, [user]);

  return (
    <div className="position-relative bg-P2 vw-100 min-vh-100 p-32">
      <img
        className="position-absolute bottom-0 end-5"
        style={{ zIndex: "0" }}
        src={loginBG}
        alt=""
      />
      <div className="p-80  text-center">
        <img src={logo} alt="點點簽logo" />
      </div>
      <div
        className="rounded bg-N1 m-auto"
        style={{ maxWidth: "527px", zIndex: "3" }}
      >
        <Nav
          activeKey="/home"
          onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
          className="border-bottom justify-content-center border-N2"
        >
          <Nav.Item>
            <Nav.Link eventKey="link-2">登入</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="disabled" disabled>
              註冊
            </Nav.Link>
          </Nav.Item>
        </Nav>
        <div className="px-60 py-40">
          <div className="d-flex justify-content-center mb-32">
            <img
              className="me-32"
              src={facebookBlue}
              alt="login with facebook"
            />
            <img
              src={googleBlue}
              alt="login with booble"
              onClick={handleGoogleSignIn}
            />
          </div>
          <div className="d-flex align-items-center mb-32">
            <span className="border-top  border-N2 h-50 flex-fill" />
            <span className="text-N5 fs-P2">或使用電子信箱登入</span>
            <span className="border-top  border-N2 h-50 flex-fill" />
          </div>
          <Form className="d-grid gap-24">
            <Form.Group
              className="mb-3 position-relative"
              controlId="formBasicEmail"
            >
              <Form.Control
                type="email"
                placeholder="請輸入您的電子信箱"
                className="ps-40"
              />
              <IconContext.Provider
                value={{
                  color: colors.P1,
                  size: "1.2em",
                  className:
                    "position-absolute top-50 translate-middle-y ms-12",
                }}
              >
                <TbMail />
              </IconContext.Provider>
            </Form.Group>

            <Form.Group
              className="mb-3 position-relative"
              controlId="formBasicPassword"
            >
              <Form.Control
                type="password"
                placeholder="請輸入您的密碼"
                className="ps-40"
              />
              <IconContext.Provider
                value={{
                  color: colors.P1,
                  size: "1.2em",
                  className:
                    "position-absolute top-50 translate-middle-y ms-12",
                }}
              >
                <TbLock />
              </IconContext.Provider>
            </Form.Group>
            <Button className="mt-8 text-N5" variant="N2" type="submit">
              登入
            </Button>
          </Form>
          <div className="fs-P2 mt-32 text-center text-N6">
            還沒有帳號？ <span className="text-P1">註冊</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
