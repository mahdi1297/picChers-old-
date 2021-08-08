import React from "react";
import GridCard from './../../grid'
import Masonry from "react-masonry-css";
import { allDatas } from "../../../DUMM_DATA";
import { Row } from "../../../shared/elements/layout";
import { H1, H3 } from "../../../shared/elements/title/style";
import { Container } from "../style";
import { Body, Sidebar, List, P } from "./style";
import { Button } from "../../../shared/elements/button";
import { colors } from "../../../shared/theme/color";
import { FiEdit } from "react-icons/fi";

const breakpointColumnsObj = {
  default: 3,
  1600: 3,
  1500: 2,
  900: 1,
  700: 1,
  500: 1,
};

const UserDashboardPhotos = () => {
  return (
    <>
      <Container background="#f5f5f5" padding="20px">
        <Row justify="space-between">
          <Sidebar>
            <H3 fontSize="18px" color="#606060">
              Discover Posts
            </H3>
            <Button
              block={"block"}
              color={'#808080'}
              background={colors.default.LIGHT_BLUE_THEME}
              size={"md"}
            >
              <FiEdit size={14} />
              Add new photo
            </Button>
            <P>Align By</P>
            <ul>
              <List>Likes</List>
              <List>Views</List>
              <List>Messages</List>
            </ul>
            <P>Tags</P>
            <ul>
              <List>Nature</List>
              <List>Famiy</List>
              <List>Home</List>
              <List>Book</List>
            </ul>
          </Sidebar>
          <Body>
            <H1 color="#404040" fontSize="22px">
              You Have About 158 Photos
            </H1>
            <Masonry
              breakpointCols={breakpointColumnsObj}
              className="my-masonry-grid"
              columnClassName="my-masonry-grid_column"
            >
              {allDatas.map((item) => (
                <GridCard
                  key={item.id}
                  id={item.id}
                  image={item.image}
                  user={item.user}
                  likes={item.likes}
                  userProfile={item.userProfile}
                  description={item.description}
                  imageCount={item.imageCount}
                  role={item.role}
                  isShownInUserDashboard={true}
                />
              ))}
            </Masonry>
          </Body>
        </Row>
      </Container>
    </>
  );
};

export default UserDashboardPhotos;
