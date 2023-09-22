import { Button, Col, ListGroup, ListGroupItem, Nav, Navbar } from "react-bootstrap";
import logo from "../logo/Spotify_Logo.png";
import { Link } from "react-router-dom";
import NavbarCollapse from "react-bootstrap/esm/NavbarCollapse";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { search } from "../redux/actions";

const MySideBar = () => {
  // const dispatch = useDispatch()
  const [querySearch, setQuerySearch] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(search(querySearch));
  };

  return (
    <Col xs={2}>
      <Navbar className="navbar-expand-md navbar-white bg-navbar fixed-left justify-content-between p-2" id="sidebar">
        <Nav.Item>
          <Link to="/" className="navbar-brand">
            <img src={logo} alt="Spotify_Logo" width="131" height="40" />
          </Link>
          <Button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </Button>
          <NavbarCollapse id="navbarNavAltMarkup">
            <Nav>
              <ListGroup>
                <ListGroupItem>
                  <Link className="nav-item nav-link" to="/">
                    <i className="bi bi-house-door-fill"></i>&nbsp; Home{" "}
                  </Link>
                </ListGroupItem>
                <ListGroupItem>
                  <Link className="nav-item nav-link">
                    <i className="bi bi-book-fill"></i>&nbsp; Your Library
                  </Link>
                </ListGroupItem>
                <ListGroupItem>
                  <div className="input-group mt-3">
                    <input
                      type="text"
                      className="form-control mb-2"
                      id="searchField"
                      placeholder="Search"
                      onChange={(e) => setQuerySearch(e.target.value)}
                      aria-label="Search"
                      aria-describedby="basic-addon2"
                    />
                    <div className="input-group-append" style={{ marginBottom: "4%" }}>
                      <Button
                        className="btn btn-outline-secondary btn-sm"
                        type="button"
                        id="button-addon1"
                        onClick={(e) => handleSubmit(e)}
                        style={{ backgroundColor: "black", height: "100%" }}
                      >
                        GO
                      </Button>
                    </div>
                  </div>
                </ListGroupItem>
              </ListGroup>
            </Nav>
          </NavbarCollapse>
        </Nav.Item>

        <Nav.Item>
          <Button className="btn signup-btn ms-3" type="button">
            Sign Up
          </Button>
          <Button className="btn login-btn ms-3" type="button">
            Login
          </Button>
          <p className="text-center">Cookie Policy | Privacy </p>
        </Nav.Item>
      </Navbar>
    </Col>
  );
};

export default MySideBar;
