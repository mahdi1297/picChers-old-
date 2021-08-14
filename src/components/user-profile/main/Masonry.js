import React from "react";
import Masonry from "react-masonry-css";
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

const MasonryContainer = ({ data, theme, login, ownerId }) => {
  return (
    <>
      {data && (
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column"
          style={{ display: "flex" }}
        >
          {data.length !== 0 &&
            data.data.userImages.map((item) => (
              <div key={item._id} style={{ margin: "8px" }}>
                <GridCard
                  key={item._id}
                  id={item._id}
                  image={item.path}
                  likes={item.likes}
                  tags={item.tags}
                  title={item.title}
                  alt={item.alt}
                  ownerId={item.ownerId}
                  isShownInUserDashboard={false}
                  theme={theme}
                  currentUser={login && login && login._id}
                />
              </div>
            ))}
        </Masonry>
      )}
    </>
  );
};

export default MasonryContainer;
