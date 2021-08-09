import React from "react";
import { MarginTop, Row } from "./../../../shared/elements/layout";
import { Link } from "react-router-dom";
import { Body, SideHeader, ImageTitle, Section, Socials } from "./style";
import {
  FiDribbble,
  FiFacebook,
  FiHeart,
  FiInstagram,
  FiLinkedin,
  FiShare2,
} from "react-icons/fi";
import PropTypes from "prop-types";
import Tag from "../../tag";
import SmallSpinner from "../../../shared/elements/loaders/small-spinner";


const RightSideImagePage = ({
  data,
  owner,
  likes,
  title,
  tags,
  isFetching,
  isLoading,
  theme,
}) => {
  return (
    <>
      <Body theme={theme}>
        {isFetching && isLoading ? (
          <SmallSpinner />
        ) : (
          <SideHeader>
            <Row align={true}>
              <Link to={`/user-profile/${data && owner._id}`}>
                <Row>
                  <img
                    width="45"
                    height="45"
                    alt={data && owner.username}
                    src={data && owner && owner.profileimage}
                  />
                  <p>
                    {data && owner && owner.name}{" "}
                    {data && owner && owner.lastname}
                  </p>
                </Row>
              </Link>
            </Row>
            <ImageTitle theme={theme}>{data && title}</ImageTitle>
            <Row>
              <Section>
                <Row align={true}>
                  <FiHeart size={14} color={"red"} /> {likes}
                </Row>
              </Section>
              <Section>
                <Row align={true}>
                  <FiShare2 size={14} /> Share
                </Row>
              </Section>
            </Row>
            <MarginTop margin={"10"}>
              {tags !== undefined && <Tag tags={tags} />}
            </MarginTop>
            <Socials>
              <Row>
                <li>
                  <Link to="/">
                    <FiInstagram size={20} />
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <FiFacebook size={20} />
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <FiLinkedin size={20} />
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <FiDribbble size={20} />
                  </Link>
                </li>
              </Row>
            </Socials>
          </SideHeader>
        )}
      </Body>
    </>
  );
};


RightSideImagePage.propTypes = {
  data: PropTypes.bool,
  owner: PropTypes.object,
  likes: PropTypes.number,
  title: PropTypes.string,
  tags: PropTypes.array,
  isFetching: PropTypes.bool,
  isLoading: PropTypes.bool,
  theme: PropTypes.string,
};


export default RightSideImagePage;
