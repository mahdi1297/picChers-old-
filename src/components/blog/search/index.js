import React, { useState, useEffect } from "react";
import {
  SearchBody,
  Form,
  Span,
  SearchSuggestBody,
  SearchBoxRow,
} from "./style";
import { Button } from "../../../shared/elements/button";
import { InputGroup } from "../../../shared/elements/inputGroup";
import { size } from "../../../shared/theme/size";
import { colors } from "../../../shared/theme/color";
import { FiSearch } from "react-icons/fi";
import useGet from "../../../queries/useGet";
import { Col } from "../../../shared/elements/layout";
import SmallSpinner from "../../../shared/elements/loaders/small-spinner";
import { Link } from "react-router-dom";

const BlogSearch = ({ onclick, searchedVal }) => {
  const [searchValue, setSearchValue] = useState("");
  const [showSearch, setShowSearch] = useState(false);

  const { data, isFetching, isLoading, error } = useGet(
    `http://localhost:5000/blog/all-blogs`
  );

  useEffect(() => {
    if (searchValue.length !== 0) {
      setShowSearch(true);
    }
    if (searchValue.length === 0) {
      setShowSearch(false);
    }
  }, [searchValue.length]);

  return (
    <SearchBody>
      <Form onClick={onclick}>
        <Span>
          <FiSearch color={colors.default.BLACK} size={size.default.md} />
        </Span>
        <InputGroup
          placeholder="Search via blog"
          defaultvalue={searchValue}
          oninput={(e) => setSearchValue(e.target.value)}
        />
        <Button
          size={size.default.md}
          color={colors.default.BLACK}
          background={colors.default.LIGHT_BLUE_THEME}
        >
          search
        </Button>
      </Form>
      {showSearch && (
        <SearchSuggestBody>
          {isFetching && isLoading ? (
            <SmallSpinner />
          ) : (
            data &&
            data.data.blogs.map((item) => (
              <Link to={`/blog/${item.slug}`}  key={item._id}>
              <SearchBoxRow>
                <Col>{item.title}</Col>
                <Col>
                  <img width="110" src={item.thumbnail} alt={item.title} />
                </Col>
              </SearchBoxRow>
              </Link>
            ))
          )}
        </SearchSuggestBody>
      )}
      {error && <p>Something wrong happened</p>}
    </SearchBody>
  );
};

export default BlogSearch;
