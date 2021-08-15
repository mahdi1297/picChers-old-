import React from "react";
import { SearchSuggestionBody } from "./../style";
import SmallSpinner from "./../../../shared/elements/loaders/small-spinner";
import { Col, Row } from "../../../shared/elements/layout";
import { Link } from "react-router-dom";
import urlSlug from 'url-slug'

const SearchSuggestion = ({ data }) => {
  return (
    <SearchSuggestionBody>
      {data === undefined ? (
        <SmallSpinner />
      ) : (
        data !== undefined &&
        data.map((item) => (
          <Link
          to={`/category/${urlSlug(item)}`}
            key={item._id}
            style={{ width: "100%" }}
          >
            <Row style={{ height: "auto", margin: "0" }}>
              <Col style={{ width: "100%" }}>
                <p style={{ padding: "0" }}>{item.title}</p>
              </Col>
            </Row>
          </Link>
        ))
      )}
    </SearchSuggestionBody>
  );
};

export default SearchSuggestion;
