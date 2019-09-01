import React, { useContext } from "react";
import cx from "classnames";
import styles from "./MainPage.module.css";
import { Jumbotron, Spinner } from "reactstrap";
import { DebounceInput } from "react-debounce-input";
import { RootContext } from "../../context/RootProvider";

function MainPage(props) {
  const rootContext = useContext(RootContext);

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
      {rootContext.isLoading ? (
        <div className={styles.loader}>
          <Spinner color="light" className={styles.spinner} />
        </div>
      ) : null}
    </div>
  );
}

export default MainPage;
