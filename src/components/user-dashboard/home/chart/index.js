import React from "react";
import PropTypes from "prop-types";
import { Currentlysale } from "./../../../../data/apex";
import ApexCharts from "react-apexcharts";
import { Footer } from "./style";
import { Row, Col } from "./../../../../shared/elements/layout";
import { colors } from "./../../../../shared/theme/color";
import { FiCamera, FiHeart } from "react-icons/fi";
import { Button } from "../../../../shared/elements/button";
import { LoaderSmallSpinner } from "../../../../shared/elements/loaders/style";

const HomeChart = ({ apexData, isLoading, isFetching, totalLikes, totalPosts }) => {
  const sery = [
    {
      name: "posts",
      data: [0, totalPosts],
    },
    {
      name: "likes",
      data: [0, totalLikes],
    },
  ];
  return (
    <Row>
      {isLoading && isFetching ? (
        <LoaderSmallSpinner />
      ) : (
        <Col width="100%">
          <Row>
            <ApexCharts
              id="chart-currently"
              options={Currentlysale.options}
              series={sery}
              type="area"
              height={240}
              style={{ width: "80%" }}
            />
            <Col width="20%;">
              <Button size={"md"} color={colors.bg.PRIMARY} radius="3px">
                Posts
                <FiCamera size={14} />
              </Button>
              <Button size={"md"} color={colors.bg.SECENDORY} radius="3px">
                Likes
                <FiHeart size={14} />
              </Button>
            </Col>
          </Row>
          <Row>
            <Footer>
              <p>Your Likes: {totalLikes}</p>
              <p>Your Posts: {totalPosts}</p>
            </Footer>
          </Row>
        </Col>
      )}
    </Row>
  );
};

HomeChart.propTypes = {
  apexData: PropTypes.array,
  isLoading: PropTypes.bool,
  isFetching: PropTypes.bool,
};

export default HomeChart;
