import React from "react";
import { Body, Container, TagItem } from "./style";
import { Link } from "react-router-dom";
import urlSlug from "url-slug";

const Tag = ({ tags }) => {
  return (
    <Body>
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
