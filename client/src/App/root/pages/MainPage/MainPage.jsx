import React, { useContext } from "react";
import cx from "classnames";
import styles from "./MainPage.module.css";
import { Jumbotron, Spinner, Row } from "reactstrap";
import { DebounceInput } from "react-debounce-input";
import { RootContext } from "../../context/RootProvider";
import { FaTimes } from "react-icons/fa";

function MainPage(props) {
  const rootContext = useContext(RootContext);

  return (
    <div className={cx("container", styles.mainPage)}>
      <Jumbotron className={styles.searchBox}>
        <h4>Type title of movie: </h4>
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
      ) : rootContext.searchPhrase === "" ? null : rootContext.searchList
          .Response === "False" ? (
        <div>
          <Row className={styles.noResultIcon}>
            <FaTimes className={styles.icon} />
          </Row>
          <Row className={styles.noResult}>
            <h5>We couldn't find that movie :/</h5>
          </Row>
        </div>
      ) : (
        <>
          <Jumbotron className={styles.searchBox}>
            {rootContext.searchList.Search[0].Title}
          </Jumbotron>
          <Jumbotron className={styles.searchBox}>
            {rootContext.searchList.Search[1].Title}
          </Jumbotron>
        </>
      )}
    </div>
  );
}

export default MainPage;
