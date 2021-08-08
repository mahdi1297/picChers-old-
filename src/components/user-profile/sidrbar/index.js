import React from "react";
import Image from "../../../shared/elements/image";
import PropTypes from "prop-types";
import SmallSpinner from "../../../shared/elements/loaders/small-spinner";
import {
  Body,
  TopProfile,
  Description,
  Scales,
  List,
  ButtonContainer,
} from "./style";
import { Col, Row } from "./../../../shared/elements/layout";
import { FiAward, FiCamera, FiHeart, FiPhoneIncoming } from "react-icons/fi";
import { Button } from "./../../../shared/elements/button";
import { colors } from "./../../../shared/theme/color";

const UserProfileSidebar = ({
  data,
  user,
  name,
  lastname,
  profilePicture,
  role,
  total_likes,
  imageCount,
  description,
  userId,
  isFetching,
  isLoading,
  theme
}) => {
  return (
    <Body theme={theme}>
      {isFetching || isLoading ? (
        <SmallSpinner />
      ) : (
        <TopProfile theme={theme}>
          <Row justify="center">
            <Col justify="center" align={true}>
              <Image
                width="60"
                height="60"
                radius="50%"
                padding="3"
                src={data && profilePicture}
                alt="x"
                border="1px solid #ccc"
              />
              <p>{data && user}</p>
              <span>{data && name}{" "}{data && lastname}</span>
              <Description>{data && description}</Description>
            </Col>
            <Scales theme={theme}>
              <Row justify="space-between">
                <List>
                  <FiHeart size={14} /> {data && total_likes}
                </List>
                <List>
                  <FiAward size={14} /> {data && role}
                </List>
                <List>
                  <FiCamera size={14} /> {data && imageCount}
                </List>
                <List>
                  <FiPhoneIncoming size={14} /> 12
                </List>
              </Row>
            </Scales>
            <ButtonContainer>
              <Button
                size={"md"}
                block={true}
                background={colors.default.SUPPORT_THEME}
                color={colors.default.WHITE_THEME}
                radius={"5px"}
              >
                Message
              </Button>
            </ButtonContainer>
            <ButtonContainer>
              <Button
                size={"md"}
                block={true}
                background={colors.default.LIGHT_BLUE_THEME}
                color={colors.default.BLACK}
                radius={"5px"}
              >
                Suggest Job
              </Button>
            </ButtonContainer>
          </Row>
        </TopProfile>
      )}
    </Body>
  );
};

UserProfileSidebar.propTypes = {
  data: PropTypes.bool,
  user: PropTypes.string,
  profilePicture: PropTypes.string,
  role: PropTypes.string,
  total_likes: PropTypes.number,
  imageCount: PropTypes.number,
  description: PropTypes.string,
  userId: PropTypes.string,
  isFetching: PropTypes.bool,
  isLoading: PropTypes.bool,
};

export default UserProfileSidebar;
