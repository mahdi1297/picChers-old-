import React from "react";
import { Body } from "./style";
import { Row } from "./../../shared/elements/layout";
import UserProfileSidebar from "../../components/user-profile/sidrbar";
import UserProfleMain from "../../components/user-profile/main";
import useGet from "../../queries/useGet";
import { useParams } from "react-router";
import { useSelector } from "react-redux";
import Head from "./../../components/head";
import SmallSpinner from "../../shared/elements/loaders/small-spinner";

const UserProfile = () => {
  const { id } = useParams();

  const { error, data, isLoading, isFetching } = useGet(
    `http://localhost:5000/user/${id}`
  );

  const theme = useSelector((store) => store.darkMode);

  if (theme) {
    if (theme === "no")
      document.getElementById("body").style.background = "none";
    if (theme === "yes")
      document.getElementById("body").style.background = "#404040";
  }

  if(data) console.log(data)

  return (
    <>
      <Head title="user profile | pickchers" />
      <Body>
        <Row justify="space-between">
          <UserProfileSidebar
            data={data && true}
            id={data && data.data.user._id}
            user={data && data.data.user.username}
            name={data && data.data.user.name}
            lastname={data && data.data.user.lastname}
            description={data && data.data.user.description}
            imageCount={data && data.data.user.totalposts}
            profilePicture={data && data.data.user.profileimage}
            role={data && data.data.user.role}
            total_likes={data && data.data.user.totallikes}
            userId={data && data.data.user._id}
            isLoading={isLoading && isLoading}
            isFetching={isFetching && isFetching}
            theme={theme}
          />
          {isLoading && isFetching ? (
            <SmallSpinner />
          ) : (
            data && (
              <UserProfleMain
                isData={true}
                ownerId={data.data.user._id}
                username={data.data.user.username}
                isFetching={isFetching && isFetching}
                isLoading={isLoading && isLoading}
                theme={theme}
              />
            )
          )}
          <div>1</div>
        </Row>
      </Body>
      {error && (
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
