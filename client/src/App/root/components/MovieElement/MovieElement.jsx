import React from "react";
import { Jumbotron, Row, Col, Button } from "reactstrap";
import { Link } from "react-router-dom";
import styles from "./MovieElement.module.css";

function MovieElement(props) {
  const { data, id } = props;

  return (
    <Jumbotron className={styles.movieElement}>
      <Row>
        <Col xs="5">
          <img src={data.poster} alt={data.title} />
        </Col>
        <Col xs="5">
          <h2>
            {data.title}, {data.date}
          </h2>
          <div className={styles.details}>
            {data.director === "N/A" ? null : data.director + ", "}
            {data.country === "N/A" ? null : data.country + ", "}
            {data.type === "N/A" ? null : data.type + ", "}
          </div>
          <h4 className={styles.plot}>
            {data.plot === "N/A" ? null : data.plot}
          </h4>
        </Col>
        <Col xs="2">
          <h2 className={styles.rating}>{data.rating} / 10</h2>
          <Link
            to={`/movie/${id}`}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <Button className={styles.button}>See more</Button>
          </Link>
        </Col>
      </Row>
    </Jumbotron>
  );
}

export default MovieElement;
