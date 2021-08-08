import React from "react";
import { Body, TopHeader, Logo, HeaderMenu, Container } from "./style";
import {
  ContainerFluid,
  Row,
  RowAlignCenter,
} from "../../shared/elements/style";
import HeaderMenuNav from "./menu";
import { FiSlack } from "react-icons/fi";
import { Link } from "react-router-dom";
import { colors } from "./../../shared/theme/color";
import { useSelector } from "react-redux";
import "./../../shared/elements/style.css";

const Header = ({ currentUser }) => {
  const theme = useSelector((store) => store.darkMode);

  return (
    <Body theme={theme}>
      <Container>
        <TopHeader>
          <ContainerFluid>
            <Row type="space-between" align="center">
              <div className="padding-top__5">
                <Link to="/">
                  <Logo>
                    <RowAlignCenter>
                      <FiSlack size={40} color={colors.default.MAIN_THEME} />
                    </RowAlignCenter>
                  </Logo>
                </Link>
              </div>
              <HeaderMenu className="padding-top__5">
                <Row type="space-between" align="center">
                  <></>
                  <HeaderMenuNav currentUser={currentUser} />
                </Row>
              </HeaderMenu>
            </Row>
          </ContainerFluid>
        </TopHeader>
      </Container>
    </Body>
  );
};

export default Header;