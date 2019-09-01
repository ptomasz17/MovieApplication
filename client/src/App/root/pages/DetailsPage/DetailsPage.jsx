import React, { useContext, useState, useEffect } from "react";
import { Jumbotron, Row, Col } from "reactstrap";
import cx from "classnames";
import styles from "./DetailsPage.module.css";
import { RootContext } from "../../context/RootProvider";

function DetailsPage(props) {
  const rootContext = useContext(RootContext);

  const [data, setData] = useState({});

  useEffect(() => {
    rootContext.getMovie(props.match.params.movieId, setData);
  }, [props.match.params.movieId]);

  return (
    <div className={styles.detailsPage}>
      <Jumbotron className={cx(styles.movieElement, "container")}>
        <Row>
          <Col xs="5">
            <img src={data.Poster} alt={data.Title} />
          </Col>
          <Col xs="5">
            <h2>
              {data.Title}, {data.Date}
            </h2>
            <h4 className={styles.plot}>
              {data.Plot === "N/A" ? null : data.Plot}
            </h4>
            <div className={styles.details}>Director: {data.Director}</div>
            <div className={styles.details}>Actors: {data.Actors}</div>
            <div className={styles.details}>Country: {data.Country}</div>
            <div className={styles.details}>Type: {data.Genre}</div>
            <div className={styles.details}>Box Office: {data.BoxOffice}</div>
            <div className={styles.details}>Language: {data.Language}</div>
            <div className={styles.details}>Released: {data.Released}</div>
            <div className={styles.details}>Runtime: {data.Runtime}</div>
            <div className={styles.details}>Writer: {data.Writer}</div>
          </Col>
          <Col xs="2">
            <h2 className={styles.rating}>{data.imdbRating} / 10</h2>
          </Col>
        </Row>
      </Jumbotron>
    </div>
  );
}

export default DetailsPage;
