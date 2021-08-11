import React from "react";
import { Body, Title, Container, TagItem } from "./style";
import { FiTag } from "react-icons/fi";
import { Row } from "../../shared/elements/layout";
import { Link } from "react-router-dom";
import urlSlug from "url-slug";

const Tag = ({ tags }) => {
  return (
    <Body>
      <Row align={true}>
        <Title>
          <FiTag size={15} />
          Tags
        </Title>
      </Row>
      <Container>
        {tags &&
          tags.map((item, i) => (
            <TagItem key={i}>
              <Link to={`categories/${urlSlug(item)}`}>{item}</Link>
            </TagItem>
          ))}
      </Container>
    </Body>
  );
};

export default Tag;
