import React from "react";
import { Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToFavorites } from "../redux/actions";

const Job = ({ data }) => {
  const dispatch = useDispatch();

  const addToFavoritesHandler = () => {
    dispatch(addToFavorites(data));
  };

  return (
    <Row
      className="mx-0 mt-3 p-3"
      style={{ border: "1px solid #00000033", borderRadius: 4 }}
    >
      <Col xs={3}>
        {/* Link al percorso della società */}
        <Link to={`/${data.company_name}`}>{data.company_name}</Link>
      </Col>
      <Col xs={6}>
        <Link to={`/${data._id}`} target="_blank">
          {data.title}
        </Link>
      </Col>
      <Col xs={3} className="text-right">
        <Button variant="primary" onClick={addToFavoritesHandler}>
          Add to Favorites
        </Button>
      </Col>
    </Row>
  );
};

export default Job;
