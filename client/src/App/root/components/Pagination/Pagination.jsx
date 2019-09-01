import React, { useContext, useState, useEffect } from "react";
import { RootContext } from "../../context/RootProvider";
import PageButton from "./PageButton";

function Pagination(props) {
  const rootContext = useContext(RootContext);

  const sizePerPage = 10;

  const [pages, setPages] = useState([]);
  const [numberOfPages, setNumberOfPages] = useState(1);

  useEffect(() => {
    calculateHowManyPages();
  }, [rootContext.results, rootContext.page]);

  const calculateHowManyPages = () => {
    var noOfPages =
      rootContext.results % sizePerPage !== 0
        ? Math.floor(rootContext.results / sizePerPage) + 1
        : rootContext.results / sizePerPage;

    var pages = [];

    if (noOfPages > 5) {
      if (rootContext.page <= 3) {
        for (let i = 1; i <= 5; i++) {
          pages.push(i);
        }
      } else {
        if (rootContext.page > 3 && rootContext.page + 2 <= noOfPages) {
          for (let i = rootContext.page - 2; i < rootContext.page + 2; i++) {
            pages.push(i);
          }
        } else {
          if (rootContext.page > 3 && rootContext.page + 2 > noOfPages) {
            for (let i = noOfPages - 4; i <= noOfPages + 2; i++) {
              pages.push(i);
            }
          }
        }
      }
    } else {
      for (let i = 1; i <= noOfPages; i++) {
        pages.push(i);
      }
    }

    setPages(pages);
    setNumberOfPages(noOfPages);
  };

  return (
    <nav>
      <ul className="pagination">
        {pages[0] != 1 ? (
          <li className="page-item" onClick={() => rootContext.setPage(1)}>
            <a className="page-link">&lt;&lt;</a>
          </li>
        ) : null}
        {rootContext.page != 1 ? (
          <li
            className="page-item"
            onClick={() => rootContext.setPage(rootContext.page - 1)}
          >
            <a className="page-link">&lt;</a>
          </li>
        ) : null}
        {pages.map(item => (
          <PageButton key={item} page={item} />
        ))}

        {rootContext.page != pages[pages.length - 1] ? (
          <li
            className="page-item"
            onClick={() => rootContext.setPage(() => rootContext.page + 1)}
          >
            <a className="page-link">&gt;</a>
          </li>
        ) : null}
        {rootContext.page + 2 < numberOfPages ? (
          <li
            className="page-item"
            onClick={() => rootContext.setPage(numberOfPages)}
          >
            <a className="page-link">&gt;&gt;</a>
          </li>
        ) : null}
      </ul>
    </nav>
  );
}

export default Pagination;
