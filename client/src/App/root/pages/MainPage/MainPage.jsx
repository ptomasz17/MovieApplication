import React from "react";
import cx from "classnames";
import styles from "./MainPage.module.css";
import { Jumbotron, Input } from "reactstrap";
import { DebounceInput } from "react-debounce-input";

function MainPage(props) {
  return (
    <div className={cx("container", styles.mainPage)}>
      <Jumbotron className={styles.searchBox}>
        <h4>Type title of movie: </h4>
        <DebounceInput
          autoComplete="off"
          minLength={2}
          debounceTimeout={300}
          id="searchBox"
          className={cx(styles.input, "form-control")}
          placeholder="Search..."
        />
      </Jumbotron>
    </div>
  );
}

export default MainPage;
