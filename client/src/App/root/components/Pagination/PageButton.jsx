import React, { useContext } from "react";
import { RootContext } from "../../context/RootProvider";

function PageButton(props) {
  const rootContext = useContext(RootContext);

  const { page } = props;

  return (
    <li
      className={page == rootContext.page ? "active page-item" : "page-item"}
      onClick={() => rootContext.setPage(page)}
    >
      <a className="page-link">{page}</a>
    </li>
  );
}

export default PageButton;
