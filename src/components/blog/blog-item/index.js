import React from "react";
import PropTypes from "prop-types";
import { Card, CardHeader, CardBody, Category } from "./../style";
import Image from "./../../../shared/elements/image";
import { Link } from "react-router-dom";
import { Row } from "./../../../shared/elements/layout";
import { TitleH2 } from "./../../../shared/elements/title";
import { colors } from "../../../shared/theme/color";
import { size } from "../../../shared/theme/size";

const BlogItem = ({ title, slug, thumbnail, category, theme }) => {
  return (
    <Card>
      <CardHeader>
        <Link to={`/blog/${slug}`}>
          <Image src={thumbnail} alt={title} />
        </Link>
      </CardHeader>
      <CardBody>
        <Category theme={theme}>
          <Row>
            <Link to={`/blog/${slug}`}>{category}</Link>
          </Row>
        </Category>
        <Row>
          <Link to={`/blog/${slug}`}>
            <TitleH2
              theme={theme}
              color={colors.default.BLACK}
              fontSize={size.default.md}
            >
              {title}
            </TitleH2>
          </Link>
        </Row>
      </CardBody>
    </Card>
  );
};

BlogItem.propTypes = {
  title: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  theme: PropTypes.string.isRequired,
};

export default BlogItem;
