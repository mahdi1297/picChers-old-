import React from "react";
import { Row } from "./../../../shared/elements/layout";
import { Link } from "react-router-dom";
import { Body, Section, SideHeader, Socials } from "./style";
import SmallSpinner from "../../../shared/elements/loaders/small-spinner";
import {
  FiDribbble,
  FiFacebook,
  FiHeart,
  FiInstagram,
  FiLinkedin,
} from "react-icons/fi";

const RightSideImagePage = ({
  data,
  owner,
  likes,
  title,
  tags,
  isFetching = true,
  isLoading = true,
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
                <Section>
                  <Row align={true}>
                    <FiHeart size={14} color={"red"} /> {data && likes}
                  </Row>
                </Section>
              </Row>
            </Row>
          </SideHeader>
        )}
      </Body>
    </>
  );
};

export default RightSideImagePage;
