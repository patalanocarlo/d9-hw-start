import React from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setJobs, addToFavorites } from "../redux/actions";
import Job from "../redux/jobs";

const MainSearch = () => {
  const [query, setQuery] = React.useState("");
  const dispatch = useDispatch();
  const jobs = useSelector(state => state.jobs);
  const favorites = useSelector(state => state.favorites);

  const baseEndpoint = "https://strive-benchmark.herokuapp.com/api/jobs?search=";

  const handleChange = e => {
    setQuery(e.target.value);
  };

  const handleSubmit = async e => {
    e.preventDefault();

    try {
      const response = await fetch(baseEndpoint + query + "&limit=20");
      if (response.ok) {
        const { data } = await response.json();
        dispatch(setJobs(data));
      } else {
        alert("Error fetching results");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const addToFavoritesHandler = jobData => {
    dispatch(addToFavorites(jobData));
  };

  return (
    <Container>
      <Row className="align-items-center">
        <Col xs={8} className="mx-auto my-3">
          <h1 className="display-1">Remote Jobs Search</h1>
        </Col>
        <Col xs={4} className="mx-auto my-3 text-right">
          <Link to="/favorites" className="text-decoration-none text-dark">
            <FaShoppingCart /> <span className="text-dark">Favorites ({favorites.length})</span>
          </Link>
        </Col>
      </Row>
      <Row className="align-items-center">
        <Col xs={12} className="mx-auto">
          <Form onSubmit={handleSubmit}>
            <Form.Control
              type="search"
              value={query}
              onChange={handleChange}
              placeholder="Type and press Enter"
              className="bg-black text-white border-0"
            />
          </Form>
        </Col>
      </Row>
      <Row>
        <Col xs={12} className="mx-auto mb-5">
          {jobs.map(jobData => (
            <Job key={jobData._id} data={jobData} addToFavorites={addToFavoritesHandler} />
          ))}
        </Col>
      </Row>
    </Container>
  );
};

export default MainSearch;