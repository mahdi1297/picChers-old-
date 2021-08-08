import React from "react";
import { Container } from "./style";
import { FiCamera, FiAward, FiHeart } from "react-icons/fi";

const PhotographerCardInfo = ({ likes, role, description, imageCount }) => {
  return (
    <>
      <Container>
        <ul>
          <li>
            <FiCamera size={15} /> <small>{imageCount}</small>
          </li>
          <li>
            <FiAward size={15} /> <small>{role}</small>
          </li>
          <li>
            <FiHeart size={15} />
            <small>{likes}</small>
          </li>
        </ul>
        <p>
          Description:
          <br />
          {description}
        </p>
      </Container>
    </>
  );
};
export default PhotographerCardInfo;