import React from "react";
import { Container } from "../style";
import { Body, Section } from "./style";
import { Row } from "../../../shared/elements/layout";
import HomeChart from "./chart";
import Activity from "./activity";
import useGet from "../../../queries/useGet";

const UserDashboardHome = ({ currentUser }) => {
  const { data, error, isLoading, isFetching } = useGet(
    `http://localhost:5000/user-dashborad/${currentUser && currentUser._id}`
  );


  return (
    <>
      <Container background={"#fff"}>
        <div style={{ padding: "30px" }}>
          <Body>
            <Row justify="space-between">
              <Section>
                {error ? (
                  <p>Something Wrong Happend</p>
                ) : (
                  <HomeChart
                    apexData={data && [12, 38]}
                    isLoading={isLoading & isLoading}
                    isFetching={isFetching & isFetching}
                    totalLikes={currentUser && currentUser.totallikes}
                  />
                )}
              </Section>
              <Section>
                <Activity currentUser={currentUser && currentUser}/>
              </Section>
            </Row>
          </Body>
        </div>
      </Container>
    </>
  );
};

export default UserDashboardHome;
