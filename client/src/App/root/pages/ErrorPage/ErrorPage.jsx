import React from "react";
import styles from "./ErrorPage.module.css";
import { Row } from "reactstrap";
import { FaTimes } from "react-icons/fa";

function ErrorPage(props) {
  return (
    <div>
      <Row className={styles.noResultIcon}>
        <FaTimes className={styles.icon} />
      </Row>
      <Row className={styles.noResult}>
        <h2>
          There is a problem with application. Please visit our website later
        </h2>
      </Row>
    </div>
  );
}

export default ErrorPage;
