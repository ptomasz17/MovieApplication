import React from "react";
import { Jumbotron, Row, Col } from "reactstrap";
import styles from "./MovieElement.module.css";

function MovieElement(props) {
  const { data } = props;

  return (
    <Jumbotron className={styles.movieElement}>
      <Row>
        <Col xs="5">
          <img src={data.poster} />
        </Col>
        <Col xs="7">
          <h2>
            {data.title}, {data.date}
          </h2>
        </Col>
      </Row>
    </Jumbotron>
  );
}

export default MovieElement;
