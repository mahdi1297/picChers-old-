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
  const [data, setData] = useState("");
  const [searchedVal, setSearchedVal] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        setTimeout(async () => {
          const response = await getCall(`images/categories/${searchedVal}`);
          setData(response.data.relatedImages);
        }, 1500);
      } catch (err) {
        console.log(err);
      }
    };

    if (searchedVal.length !== 0) {
      fetchData();
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
          {searchedVal.length !== 0 && <SearchSuggestion data={data} />}
        </Insider>
      </InnerBox>
    </Body>
  );
};

export default Hero;
