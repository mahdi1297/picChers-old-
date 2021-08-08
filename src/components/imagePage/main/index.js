import React, { useState, useEffect } from "react";
import Masonry from "react-masonry-css";
import { getCall } from "../../../api/methods";
import GridCard from "./../../grid";

const breakpointColumnsObj = {
  default: 3,
  2500: 4,
  1700: 3,
  1500: 3,
  1300: 2,
  900: 2,
  700: 1,
  500: 1,
};
const ImagePageMain = ({ tags }) => {
  const [data, setData] = useState("");

  useEffect(() => {
    const fetchedData = async (tags) => {
      const response = await getCall(`images/categories/${tags}`);
      setData(response);
    };
    fetchedData(tags);
  }, [tags]);

  return (
    <Masonry
      breakpointCols={breakpointColumnsObj}
      className="my-masonry-grid"
      columnClassName="my-masonry-grid_column"
      style={{ display: "flex" }}
    >
      {data &&
        data.data.relatedImages.map((item) => (
          <div key={item._id} style={{ margin: "8px" }}>
            <GridCard
              key={item._id}
              id={item._id}
              image={item.path}
              user={item.user}
              likes={item.likes}
              ownerId={item.ownerId}
              userProfile={item.userProfile}
              description={item.description}
              imageCount={item.imageCount}
              role={item.role}
              profilePicture={item.profilePicture}
            />
          </div>
        ))}
    </Masonry>
  );
};

export default ImagePageMain;
