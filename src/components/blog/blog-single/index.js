import React from "react";
import SkeletonLoader from "./../../../shared/elements/loaders/skeleton";
import SmallSpinner from "./../../../shared/elements/loaders/small-spinner";
import useGet from "./../../../queries/useGet";
import parse from "html-react-parser";
import Image from "./../../../shared/elements/image";
import Sidebar from "./sidebar";
import { TitleH2 } from "./../../../shared/elements/title";
import { useParams } from "react-router";
import { Body, Meta, ContentContainer } from "./style";
import { TitleH1 } from "./../../../shared/elements/title";
import { size } from "./../../../shared/theme/size";
import { MarginTop, Row } from "./../../../shared/elements/layout";
import BlogComments from "./../comments";
import AddComment from "../comments/add-comment";
import { useSelector } from "react-redux";
import "./style.css";

const BlogSingle = () => {
  const { slug } = useParams();
  const currentUser = useSelector((store) => store.login);
  const theme = useSelector((store) => store.darkMode);

  if (theme) {
    if (theme === "no")
      document.getElementById("body").style.background = "none";
    if (theme === "yes")
      document.getElementById("body").style.background = "#404040";
  }

  const { data, isLoading, isFetching } = useGet(
    `http://localhost:5000/blog/${slug}`
  );

  return (
    <>
      <Sidebar theme={theme} title={data && data.data.getSlug[0].title} />
      <Body>
        <>
          <TitleH1 fontSize={size.default.x_lg} theme={theme}>
            {data && data.data.getSlug[0].title}
          </TitleH1>
          <Row align={true}>
            <Image
              src={data && data.data.getSlug[0].profileimgae}
              width="35"
              height="35"
              radius={"50%"}
            />
            <Meta theme={theme}>{data && data.data.getSlug[0].authername}</Meta>
          </Row>
        </>
        <MarginTop margin={"40"}>
          {isLoading && isFetching ? (
            <SkeletonLoader />
          ) : (
            <Image
              src={data && data.data.getSlug[0].mainimage}
              width={"100%"}
            />
          )}
        </MarginTop>
        <ContentContainer theme={theme} className="container">
          {isLoading && isFetching ? (
            <SmallSpinner />
          ) : (
            data && parse(data.data.getSlug[0].content)
          )}
        </ContentContainer>
        <TitleH2 theme={theme}>Comments</TitleH2>
        <AddComment theme={theme} currentUser={currentUser && currentUser} />
        {slug && <BlogComments theme={theme} blogSlug={slug} />}
      </Body>
    </>
  );
};

export default BlogSingle;
