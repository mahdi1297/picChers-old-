/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import BlogItem from "../blog-item";
import { ItemContainerBody } from "../style";
import { Row } from "../../../shared/elements/layout";
import "./style.css";

function Pagination({ data, RenderComponent, title, pageLimit, dataLimit }) {
  const [pages] = useState(Math.round(data.length / dataLimit));
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    window.scrollTo({ behavior: "smooth", top: "0px" });
  }, [currentPage]);

  function goToNextPage() {
    setCurrentPage((page) => page + 1);
  }

  function goToPreviousPage() {
    setCurrentPage((page) => page - 1);
  }
  function changePage(event) {
    const pageNumber = Number(event.target.textContent);
    setCurrentPage(pageNumber);
  }

  const getPaginatedData = () => {
    const startIndex = currentPage * dataLimit - dataLimit;
    const endIndex = startIndex + dataLimit;
    return data.slice(startIndex, endIndex);
  };

  const getPaginationGroup = () => {
    let start = Math.floor((currentPage - 1) / pageLimit) * pageLimit;
    return new Array(pageLimit).fill().map((_, idx) => start + idx + 1);
  };
  return (
    <div>
      <ItemContainerBody>
        <Row justify="space-between">
          {getPaginatedData().map((d, idx) => (
            <RenderComponent key={idx} data={d} />
          ))}
        </Row>
      </ItemContainerBody>
      <div className="pagination">
        {/* <button
          onClick={goToPreviousPage}
          className={`prev ${currentPage === 1 ? "disabled" : ""}`}
        >
          prev
        </button> */}
        {getPaginationGroup().map((item, index) => (
          <button
            key={index}
            onClick={changePage}
            className={`paginationItem ${
              currentPage === item ? "active" : null
            }`}
          >
            <span>{item}</span>
          </button>
        ))}

        {/* <button
          onClick={goToNextPage}
          className={`next ${currentPage === pages ? "disabled" : ""}`}
        >
          next
        </button> */}
      </div>
    </div>
  );
}

const Paginate = ({ data }) => {
  function Post(props) {
    const { _id, theme, title, slug, thumbnail, categories } = props.data;
    return (
      <BlogItem
        theme={theme}
        key={_id}
        title={title}
        slug={slug}
        thumbnail={thumbnail}
        category={categories}
      />
    );
  }

  return (
    <div>
      {data.length > 0 ? (
        <>
          <Pagination
            data={data}
            RenderComponent={Post}
            title="Posts"
            pageLimit={data.length / 2}
            dataLimit={3}
          />
        </>
      ) : (
        <h1>No Blog to display</h1>
      )}
    </div>
  );
};

export default Paginate;
