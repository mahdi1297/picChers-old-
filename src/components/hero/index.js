/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import SearchSuggestion from "./search-suggestion";
import {
  Body,
  InnerBox,
  MainTitle,
  Insider,
  SupportTitle,
  Input,
  Button,
} from "./style";
import { Row } from "./../../shared/elements/style";
import { FiSearch } from "react-icons/fi";
import { getCall } from "../../api/methods";

const Hero = () => {
  const [searchedVal, setSearchedVal] = useState("");
  const [data, setData] = useState("");

  const fetchData = async (value) => {
    const res = await getCall(`image-category/${value}`);
    setData(res.data);
  };

  useEffect(() => {
    let isActive = true;
    if (isActive) {
      if (searchedVal.length !== 0) {
        fetchData(searchedVal);
      }
    }
  }, [searchedVal]);


  return (
    <Body>
      <InnerBox>
        <Insider>
          <MainTitle>PicChers</MainTitle>
          <SupportTitle>
            The world biggest media to share stock image
          </SupportTitle>
          <Row align={true} justify="space-between">
            <Input
              placeholder="Search Photos..."
              value={searchedVal}
              onChange={(e) => setSearchedVal(e.target.value)}
            />
            <Button type="submit">
              <FiSearch size={25} color="#606060" />
            </Button>
          </Row>
          {searchedVal.length !== 0 && data.length !== 0 && (
            <SearchSuggestion data={data.categories} />
          )}
        </Insider>
      </InnerBox>
    </Body>
  );
};

export default Hero;
