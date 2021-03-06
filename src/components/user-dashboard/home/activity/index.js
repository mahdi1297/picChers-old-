import React from "react";
import { H2 } from "../../../../shared/elements/title/style";
import { Body } from "./style";
import { colors } from "../../../../shared/theme/color";
import { FiHeart, FiAward, FiCamera } from "react-icons/fi";

const Activity = ({ currentUser }) => {
  return (
    <Body>
      <H2 align="center" color={colors.default.BLACK}>
        Your Activity
      </H2>
      <ul>
        <li>
          <FiHeart size={14} />
          {currentUser && currentUser.totallikes}
        </li>
        <li>
          <FiAward size={14} />
          {currentUser && currentUser.role}
        </li>
        <li>
          <FiCamera size={14} />
          {currentUser && currentUser.totalposts}
        </li>
      </ul>
      {/* <SubData>
        <p>
          <FiEdit3 size={14} />
          Last Post: 12/5/1378
        </p>
        <p>
          <FiActivity size={14} />
          Suggests: 12
        </p>
        <p>
          <FiAward size={14} />
          Next Role: Expert
        </p>
        <p>
          <FiLink size={14} />
          Linked To: Udemy
        </p>
        <p>
          <FiEdit size={14} />
          Last Modify: 12/5/1378
        </p>
      </SubData> */}
    </Body>
  );
};

export default Activity;
