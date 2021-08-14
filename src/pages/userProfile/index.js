import React, { useEffect } from "react";
import { Body } from "./style";
import { Row } from "./../../shared/elements/layout";
import UserProfileSidebar from "../../components/user-profile/sidrbar";
import UserProfleMain from "../../components/user-profile/main";
import { useParams } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import Head from "./../../components/head";
import SmallSpinner from "../../shared/elements/loaders/small-spinner";
import { getUserByIdAction } from "../../actions/usersAction";

const UserProfile = () => {
  const { id } = useParams();

  const theme = useSelector((store) => store.darkMode);
  const data = useSelector((store) => store.userById);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserByIdAction(id));
  }, [dispatch, id]);

  if (theme) {
    if (theme === "no")
      document.getElementById("body").style.background = "none";
    if (theme === "yes")
      document.getElementById("body").style.background = "#404040";
  }

  return (
    <>
      <Head title="user profile | pickchers" />
      <Body>
        <Row justify="space-between">
          <UserProfileSidebar
            data={data.length !== 0 && true}
            id={data.length !== 0 && data.user._id}
            user={data.length !== 0 && data.user.username}
            name={data.length !== 0 && data.user.name}
            lastname={data.length !== 0 && data.user.lastname}
            description={data.length !== 0 && data.user.description}
            imageCount={data.length !== 0 && data.user.totalposts}
            profilePicture={data.length !== 0 && data.user.profileimage}
            role={data.length !== 0 && data.user.role}
            total_likes={data.length !== 0 && data.user.totallikes}
            userId={data.length !== 0 && data._id}
            isLoading={data.length === 0 ? true : false}
            isFetching={data.length === 0 ? true : false}
            theme={theme}
          />
          {data.length ===  0 ? (
            <SmallSpinner />
          ) : (
            <UserProfleMain
              isData={true}
              username={data.length !== 0 && data.user.username}
              ownerId={data.length !== 0 && data.user._id}
              userData={data}
              theme={theme}
            />
          )} 
          <div>1</div>
        </Row>
      </Body>
      {data === null | (data === undefined) && (
        <p
          style={{
            position: "relative",
            top: "200px",
            margin: "auto",
            width: "100%",
            textAlign: "center",
          }}
        >
          Sorry Something wrog happened
        </p>
      )}
    </>
  );
};

export default UserProfile;
