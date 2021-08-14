import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Container } from "../style";
import { Body, Section } from "./style";
import { Row } from "../../../shared/elements/layout";
import HomeChart from "./chart";
import Activity from "./activity";
import useGet from "../../../queries/useGet";
import SmallSpinner from "./../../../shared/elements/loaders/small-spinner";
import Alert from "../../../shared/elements/alert";

const UserDashboardHome = ({ currentUser }) => {
  const [userData, setUserData] = useState("");
  const { data, error, isLoading, isFetching } = useGet(
    `http://localhost:5000/user/${currentUser._id}`
  );

  useEffect(() => {
    if (data) {
      setUserData(data);
    }
  }, [data]);

  return (
    <>
      <Container background={"#fff"}>
        {error ? (
          <Alert type={"warning"}>
            please upload your first image to access this page
          </Alert>
        ) : !userData ? (
          <SmallSpinner />
        ) : (
          <div style={{ padding: "30px" }}>
            <Body>
              <Row justify="space-between">
                <Section>
                  {error ? (
                    <p>Something Wrong Happend</p>
                  ) : (
                    <HomeChart
                      apexData={data && [12, 38]}
                      isLoading={isLoading ? true : false}
                      isFetching={isFetching ? true : false}
                      totalLikes={userData && userData.data.user.totallikes}
                      totalPosts={userData && userData.data.user.totalposts}
                    />
                  )}
                </Section>
                <Section>
                  <Activity currentUser={userData && userData.data.user} />
                </Section>
              </Row>
            </Body>
          </div>
        )}
      </Container>
    </>
  );
};

UserDashboardHome.propTypes = {
  currentUser: PropTypes.object.isRequired,
};

export default UserDashboardHome;
