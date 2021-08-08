import React from "react";
import BlogContainer from "./blog-container";
import BlogSearch from "./search";
import { Body, Container } from "./style";
import { TitleH1 } from "./../../shared/elements/title";
import { size } from "./../../shared/theme/size";
import { Row } from "./../../shared/elements/layout";

const BlogHome = ({ theme }) => {
  return (
    <Body>
      <>
        <Row justify="space-between" align={true}>
          <TitleH1
            theme={theme}
            size={size.default.lg}
          >
            Blog
          </TitleH1>
          <BlogSearch theme={theme} />
        </Row>
      </>
      <Container>
        <BlogContainer theme={theme} path="all-blogs" />
      </Container>
    </Body>
  );
};

export default BlogHome;