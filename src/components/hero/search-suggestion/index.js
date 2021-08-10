import React from "react";
import { SearchSuggestionBody } from "./../style";
import SmallSpinner from "./../../../shared/elements/loaders/small-spinner";
import { Col, Row } from "../../../shared/elements/layout";
import { Link } from "react-router-dom";

const SearchSuggestion = ({ data }) => {
  return (
    <SearchSuggestionBody>
      {!data && data.length === 0 ? (
        <SmallSpinner />
      ) : (
        data &&
        data.map((item) => (
          <Link
            to={`/photos/${item._id}`}
            key={item._id}
            style={{ width: "100%" }}
          >
            <Row style={{ height: "auto", margin: "10px" }}>
              <Col style={{ width: "50%" }}>
                <img src={item.path} alt={item.title} width="200" />
              </Col>
              <Col style={{ width: "50%" }}>
                <p>{item.title}</p>
              </Col>
            </Row>
          </Link>
        ))
      )}
    </SearchSuggestionBody>
  );
};

export default SearchSuggestion;