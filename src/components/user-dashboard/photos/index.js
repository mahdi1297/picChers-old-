import React, { useEffect, useState } from "react";
import GridCard from "./../../grid";
import Masonry from "react-masonry-css";
import { Row } from "../../../shared/elements/layout";
import { H1, H3 } from "../../../shared/elements/title/style";
import { Container } from "../style";
import { Body, Sidebar, List, P } from "./style";
import { Button } from "../../../shared/elements/button";
import { colors } from "../../../shared/theme/color";
import { FiEdit } from "react-icons/fi";
import { getUserByIdAndUsernameAction } from "../../../actions/usersAction";
import { useDispatch, useSelector } from "react-redux";
import { getCall } from "../../../api/methods";
import SmallSpinner from "./../../../shared/elements/loaders/small-spinner";

const breakpointColumnsObj = {
  default: 3,
  1600: 3,
  1500: 2,
  900: 1,
  700: 1,
  500: 1,
};

const UserDashboardPhotos = ({ currentUser }) => {
  const [tags, setTags] = useState();
  const data = useSelector((store) => store.userByUsernameAndId);
  const theme = useSelector((store) => store.darkMode);
  const dispatch = useDispatch();

  useEffect(() => {
    if (currentUser) {
      dispatch(
        getUserByIdAndUsernameAction(currentUser.username, currentUser._id)
      );
    }
    const fetchTags = async () => {
      const response = await getCall("image-category/all");
      setTags(response);
    };
    fetchTags();  
  }, [currentUser, dispatch]);

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
              color={"#808080"}
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
              {tags ? (
                tags.data.imageCategories.map((item) => (
                  <List key={item._id}>{item.title}</List>
                ))
              ) : (
                <SmallSpinner />
              )}
            </ul>
          </Sidebar>
          <Body>
            <H1 color="#404040" fontSize="22px">
              You Have About {currentUser.totalposts} Photos
            </H1>

            {data.length !== 0 && (
              <Masonry
                breakpointCols={breakpointColumnsObj}
                className="my-masonry-grid"
                columnClassName="my-masonry-grid_column"
                style={{ display: "flex" }}
              >
                {data.length !== 0 &&
                  data.userImages.map((item) => (
                    <div key={item._id} style={{ margin: "8px" }}>
                      <GridCard
                        key={item._id}
                        id={item._id}
                        image={item.path}
                        likes={item.likes}
                        tags={item.tags}
                        title={item.title}
                        alt={item.alt}
                        ownerId={item.ownerId}
                        isShownInUserDashboard={true}
                        theme={theme}
                        currentUser={currentUser && currentUser._id}
                      />
                    </div>
                  ))}
              </Masonry>
            )}
          </Body>
        </Row>
      </Container>
    </>
  );
};

export default UserDashboardPhotos;
