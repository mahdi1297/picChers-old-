import React, { useEffect, useRef, Suspense, lazy } from "react";
import RightSideImagePage from "../../components/imagePage/right-side";
import ImagePageMain from "../../components/imagePage/main";
import SmallSpinner from "../../shared/elements/loaders/small-spinner";
import Head from "../../components/head";
import { MarginTop, Column, Col } from "../../shared/elements/layout";
import Message from "../../components/message";
import { LeftSide, RightSide, Container } from "./style";
import { useParams } from "react-router";
import { TitleH2 } from "./../../shared/elements/title";
import { size } from "../../shared/theme/size";
import { useSelector, useDispatch } from "react-redux";
import { Redirect } from "react-router-dom";
import { getImageById, clearImageAction } from "../../actions/imagesActions";
import {
  ImageTitle,
} from "../../components/imagePage/right-side/style";
import Tag from "../../components/tag";

const LeftSideImagePage = lazy(() => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(import("../../components/imagePage/left-side")));
  });
});

const ImagePage = () => {
  let isMounted = useRef(false);
  let mountComponent = false;

  const { id } = useParams();
  const data = useSelector((store) => store.imageById);
  const theme = useSelector((store) => store.darkMode);
  const dispatch = useDispatch();

  useEffect(() => {
    isMounted.current = true;
    // eslint-disable-next-line react-hooks/exhaustive-deps
    mountComponent = true;
    if (isMounted.current && mountComponent) {
      dispatch(getImageById(id));
    }
    return () => {
      dispatch(clearImageAction());
      isMounted.current = false;
      mountComponent = false;
    };
  }, [dispatch, id]);

  if (theme) {
    if (theme === "no")
      document.getElementById("body").style.background = "none";
    if (theme === "yes")
      document.getElementById("body").style.background = "#404040";
  }

  if (data !== null && data !== undefined && data.status === 400) {
    return <Redirect to="/" />;
  }

  return (
    <>
      <Head title="image page | pickchers" />
      <MarginTop margin="100">
        <Container>
          <Col justify="space-between">
            <Column size="100">
              <Suspense fallback={<></>}>
                <LeftSide>
                  {data !== null && data.length !== 0 ? (
                    <RightSideImagePage
                      data={data !== null && data.length !== 0 && true}
                      id={data.result._id}
                      owner={data.result.owner}
                      userId={data.result.ownerId}
                      likes={data.result.likes}
                      isLoading={false}
                      isFetching={false}
                      theme={theme}
                    />
                  ) : (
                    <SmallSpinner />
                  )}
                </LeftSide>
              </Suspense>
            </Column>
            <Column size="100">
              <RightSide>
                {data !== null && data.length !== 0 ? (
                  <LeftSideImagePage
                    data={true}
                    image={data.result.path}
                    isLoading={false}
                    isFetching={false}
                  />
                ) : (
                  <SmallSpinner />
                )}
              </RightSide>
              <ImageTitle theme={theme}>
                {data.length !== 0 && data.result.title}
              </ImageTitle>
              <MarginTop margin={"10"}>
                {data.length !== 0 && data.result.tags !== undefined && (
                  <Tag tags={data.length !== 0 && data.result.tags} />
                )}
              </MarginTop>
            </Column>
          </Col>

          <MarginTop margin={"40"} />
          <TitleH2 theme={theme} fontSize={size.default.lg}>
            Related Photos
          </TitleH2>
          {data !== null && data !== undefined && data.length !== 0 ? (
            <ImagePageMain category={[data.result.tags]} />
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
