import React, { useContext } from "react";
import cx from "classnames";
import styles from "./MainPage.module.css";
import { Jumbotron, Spinner, Row } from "reactstrap";
import { DebounceInput } from "react-debounce-input";
import { RootContext } from "../../context/RootProvider";
import { FaTimes } from "react-icons/fa";
import MovieElement from "../../components/MovieElement/MovieElement";
import Pagination from "../../components/Pagination/Pagination";

function MainPage(props) {
  const rootContext = useContext(RootContext);

  return (
    <div className={cx("container", styles.mainPage)}>
      <Jumbotron className={styles.searchBox}>
        <h4>Type the title you would like to find: </h4>
        <DebounceInput
          autoComplete="off"
          debounceTimeout={300}
          id="searchBox"
          className={cx(styles.input, "form-control")}
          placeholder="Search..."
          onChange={event => rootContext.search(event.target.value)}
        />
      </Jumbotron>
      {rootContext.isLoading ? (
        <div className={styles.loader}>
          <Spinner color="light" className={styles.spinner} />
        </div>
      ) : rootContext === "" ? null : rootContext.searchList.response ===
        "False" ? (
        <div>
          <Row className={styles.noResultIcon}>
            <FaTimes className={styles.icon} />
          </Row>
          <Row className={styles.noResult}>
            <h5>We couldn't find that movie :/</h5>
          </Row>
        </div>
      ) : (
        Object.keys(rootContext.searchList).map(item => (
          <MovieElement
            key={item}
            data={rootContext.searchList[item]}
            id={item}
          />
        ))
      )}
      {rootContext.results === 0 ? null : (
        <div className={styles.pagination}>
          <Pagination />
        </div>
      )}
    </div>
  );
}

export default MainPage;
