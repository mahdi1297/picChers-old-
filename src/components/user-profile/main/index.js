import React, { useEffect } from "react";
import PropTypes from "prop-types";
import SmallSpinner from "../../../shared/elements/loaders/small-spinner";
import MasonryContainer from "./Masonry";
import useGet from "../../../queries/useGet";
import Image from "./../../../shared/elements/image";
import { Body, Suggestion, SuggestionBody, MasornryBody } from "./style";
import { TitleH2 } from "./../../../shared/elements/title";
import { Link } from "react-router-dom";
import { Col } from "./../../../shared/elements/layout";
import { suggestion } from "../../../DUMM_DATA";
import { useSelector } from "react-redux";
import PerfectScrollbar from "@opuscapita/react-perfect-scrollbar";

const UserProfleMain = ({
  isData,
  ownerId,
  username,
  isFetching,
  isLoading,
  theme,
}) => {
  const { data } = useGet(`http://localhost:5000/user/${username}/${ownerId}`);

  const login = useSelector((store) => store.login);

  useEffect(() => {
    window.scrollTo(0, 0);
  });

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
          <MasonryContainer data={data} theme={theme} login={login} />
        </MasornryBody>
      )}
    </Body>
  );
};

UserProfleMain.propTypes = {
  isData: PropTypes.bool.isRequired,
  ownerId: PropTypes.bool.isRequired,
  username: PropTypes.string.isRequired,
  isFetching: PropTypes.bool.isRequired,
  isLoading: PropTypes.bool.isRequired,
  theme: PropTypes.string.isRequired,
};

export default UserProfleMain;
