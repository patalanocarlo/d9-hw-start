import React from "react";
import { Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { removeFromFavorites, removeAllCompanyJobs } from "../redux/actions";

const Job = ({ data }) => {
  const dispatch = useDispatch();
  const favorites = useSelector(state => state.favorites);

  const removeFromFavoritesHandler = () => {
    dispatch(removeFromFavorites(data._id));
  };

  const removeAllCompanyJobsHandler = () => {
    if (window.confirm(`Sei sicuro di voler rimuovere tutte le offerte di ${data.company_name} dalla tua lista?`)) {
      dispatch(removeAllCompanyJobs(data.company_name));
    }
  };

  return (
    <Row className="mx-0 mt-3 p-3" style={{ border: '1px solid #00000033', borderRadius: 4 }}>
      <Col xs={3}>
        <Link to={`/${data.company_name}`}>{data.company_name}</Link>
      </Col>
      <Col xs={6}>
        <Link to={`/details/${data._id}`} target="_blank">{data.title}</Link>
      </Col>
     
    </Row>
  );
};

export default Job;