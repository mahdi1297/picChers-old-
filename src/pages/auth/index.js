import React, { useState } from "react";
import Head from "../../components/head";
import Login from "./login";
import Register from "./register";
import { Col, MarginTop, Row } from "../../shared/elements/layout";
import { TitleH1 } from "../../shared/elements/title";
import { size } from "../../shared/theme/size";
import { colors } from "../../shared/theme/color";
import { P } from "./style";
import "./style.css";

const Auth = () => {
  const [page, setPage] = useState("login");
  const setLoginHandler = () => setPage("login");
  const setRegisterHandler = () => setPage("register");
  return (
    <>
      <Head title="auth | Pictures" />
      <MarginTop margin="100">
        <Row justify="center">
          <Col style={{ width: "380px" }}>
            <TitleH1 fontSize={size.default.x_lg} color={colors.default.BLACK}>
              <P
                onClick={setLoginHandler}
                className={page === "login" && "active"}
              >
                Login
              </P>{" "}
              <P>/</P>{" "}
              <P
                onClick={setRegisterHandler}
                className={page === "register" && "active"}
              >
                register
              </P>
            </TitleH1>
            {page === "login" ? <Login /> : <Register />}
          </Col>
        </Row>
      </MarginTop>
    </>
  );
};

export default Auth;