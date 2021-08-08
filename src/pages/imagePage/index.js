import React, { Suspense, lazy } from "react";
import RightSideImagePage from "../../components/imagePage/right-side";
import ImagePageMain from "../../components/imagePage/main";
import SmallSpinner from "../../shared/elements/loaders/small-spinner";
import Message from "../../components/message";
import useGet from "../../queries/useGet";
import Head from "../../components/head";
import { MarginTop, Column, Row } from "../../shared/elements/layout";
import { LeftSide, RightSide, Container } from "./style";
import { useParams } from "react-router";
import { TitleH2 } from "./../../shared/elements/title";
import { size } from "../../shared/theme/size";
import { useSelector } from "react-redux";

const LeftSideImagePage = lazy(() => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(import("../../components/imagePage/left-side")));
  });
});

const ImagePage = () => {
  const { id } = useParams();

  const { data, isLoading, isFetching } = useGet(
    `http://localhost:5000/images/${id}`
  );

  const theme = useSelector((store) => store.darkMode);

  if (theme) {
    if (theme === "no")
      document.getElementById("body").style.background = "none";
    if (theme === "yes")
      document.getElementById("body").style.background = "#404040";
  }

  return (
    <>
    <Head title="image page | pickchers" />
      <MarginTop margin="100">
        <Container>
          <Row justify="space-between">
            <Column size="70">
              <Suspense fallback={<></>}>
                <LeftSide>
                  <LeftSideImagePage
                    data={data && true}
                    image={data && data.data.result.path}
                    isLoading={isLoading && isLoading}
                    isFetching={isFetching && isFetching}
                  />
                </LeftSide>
              </Suspense>
            </Column>
            <Column size="30">
              <RightSide>
                <RightSideImagePage
                  data={data && true}
                  id={data && data.data.result._id}
                  owner={data && data.data.result.owner}
                  userId={data && data.data.result.ownerId}
                  likes={data && data.data.result.likes}
                  title={data && data.data.result.title}
                  tags={data && data.data.result.tags}
                  isLoading={isLoading && isLoading}
                  isFetching={isFetching && isFetching}
                  theme={theme}
                />
              </RightSide>
            </Column>
          </Row>
          <TitleH2 theme={theme} fontSize={size.default.lg}>
            Related Photos
          </TitleH2>
          {data && !isLoading && !isFetching ? (
            <ImagePageMain
              tags={[data.data.result.tags]}
            />
          ) : (
            <SmallSpinner />
          )}
          <Message />
        </Container>
      </MarginTop>
    </>
  );
};

export default ImagePage;
