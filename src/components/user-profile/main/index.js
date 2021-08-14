import React, { useEffect, useState } from "react";
import SmallSpinner from "../../../shared/elements/loaders/small-spinner";
import MasonryContainer from "./Masonry";
import Image from "./../../../shared/elements/image";
import { Body, Suggestion, SuggestionBody, MasornryBody } from "./style";
import { TitleH2 } from "./../../../shared/elements/title";
import { Link } from "react-router-dom";
import { Col } from "./../../../shared/elements/layout";
import { suggestion } from "../../../DUMM_DATA";
import { useSelector } from "react-redux";
import PerfectScrollbar from "@opuscapita/react-perfect-scrollbar";
import axios from "axios";

const UserProfleMain = ({
  ownerId,
  username,
  isFetching,
  isLoading,
  theme,
}) => {
  const [data, setData] = useState("");

  const login = useSelector((store) => store.login);

  let isMounted = false;
  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    isMounted = true;
    if (isMounted) {
      const fetchData = async (username, ownerId) => {
        const request = await axios.get(
          `http://localhost:5000/user/${username}/${ownerId}`
        );
        setData(request);
      };
      fetchData(username, ownerId);
      window.scrollTo(0, 0);
    }
    return () => {
      isMounted = false;
    };
  }, [username, ownerId]);

  return (
    <Body>
      <Suggestion>
        <TitleH2 theme={theme} fontSize={"20px"}>
          Suggestion
        </TitleH2>
        <PerfectScrollbar>
          <SuggestionBody theme={theme}>
            {suggestion &&
              suggestion.map((item) => (
                <div key={item.id}>
                  <Link to="/">
                    <Col width="100%" justify="center" align={true}>
                      <Image
                        width="50"
                        src={item.profile}
                        alt={item.alt}
                        padding="2"
                        border="1px solid #ccc"
                        radius="50%"
                      />
                      <p>{item.userId}</p>
                    </Col>
                  </Link>
                </div>
              ))}
          </SuggestionBody>
        </PerfectScrollbar>
      </Suggestion>
      {isFetching || isLoading ? (
        <SmallSpinner />
      ) : (
        <MasornryBody>
          {data.length !== 0 && (
            <MasonryContainer data={data} ownerId={ownerId} theme={theme} login={login} />
          )}
        </MasornryBody>
      )}
    </Body>
  );
};

export default UserProfleMain;
