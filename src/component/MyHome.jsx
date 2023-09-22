import { useEffect, useState } from "react";
import { Card, Col, Container, ListGroup, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { rockSearch, popSearch, jazzSearch } from "../redux/actions";

const MyHome = () => {
  const searchedMusic = useSelector((state) => state.search?.content);
  const rock = useSelector((state) => state.rock?.content);
  const jazz = useSelector((state) => state.jazz?.content);
  const pop = useSelector((state) => state.pop?.content);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(rockSearch());
    dispatch(popSearch());
    dispatch(jazzSearch());
  }, []);

  return (
    <Container fluid style={{ height: "calc(100vh - 84px)", overflowY: "auto" }}>
      <Row className="my-5">
        <Col xs={12} md={9} className="offset-md-3 mainPage">
          <Row>
            <Col xs={9} lg={11} className="mainLinks d-none d-md-flex text-decoration-none">
              <Link className="text-decoration-none">TRENDING</Link>
              <Link className="text-decoration-none">PODCAST</Link>
              <Link className="text-decoration-none">MOODS AND GENRES</Link>
              <Link className="text-decoration-none">NEW RELEASES</Link>
              <Link className="text-decoration-none">DISCOVER</Link>
            </Col>
          </Row>
          <Row>
            <Col xs={10}>
              <Row>
                {searchedMusic &&
                  searchedMusic.map((songInfo) => {
                    return (
                      <Col xs={12} md={6} lg={3} className="my-3">
                        <Card>
                          <Link to={`/album/${songInfo.album.id}`}>
                            <Card.Img variant="top" src={songInfo.album.cover_medium} />
                          </Link>
                          <Card.Body>
                            <Link to={`/album/${songInfo.album.id}`}>
                              <Card.Title>{songInfo.album.title}</Card.Title>
                            </Link>
                          </Card.Body>
                          <ListGroup className="list-group-flush">
                            <ListGroup.Item>
                              <Link to={`/artist/${songInfo.artist.id}`}>artist:{songInfo.artist.name}</Link>{" "}
                            </ListGroup.Item>
                          </ListGroup>
                        </Card>
                      </Col>
                    );
                  })}
              </Row>

              <div id="rock">
                <h2>rock</h2>
                <Row>
                  {rock &&
                    rock.slice(0, 4).map((songInfo) => {
                      return (
                        <Col xs={12} md={6} lg={3}>
                          <Card>
                            <Link to={`/album/${songInfo.album.id}`}>
                              <Card.Img variant="top" src={songInfo.album.cover_medium} />
                            </Link>
                            <Card.Body>
                              <Link to={`/album/${songInfo.album.id}`}>
                                <Card.Title>{songInfo.album.title}</Card.Title>
                              </Link>
                            </Card.Body>
                            <ListGroup className="list-group-flush">
                              <ListGroup.Item>
                                <Link to={`/artist/${songInfo.artist.id}`}>artist:{songInfo.artist.name}</Link>{" "}
                              </ListGroup.Item>
                            </ListGroup>
                          </Card>
                        </Col>
                      );
                    })}
                </Row>
              </div>
            </Col>
          </Row>
          <Row>
            <Col xs={10}>
              <div id="pop">
                <h2>pop</h2>
                <Row>
                  {pop &&
                    pop.slice(4, 8).map((songInfo) => {
                      return (
                        <Col xs={12} md={6} lg={3}>
                          <Card>
                            <Link to={`/album/${songInfo.album.id}`}>
                              <Card.Img variant="top" src={songInfo.album.cover_medium} />
                            </Link>
                            <Card.Body>
                              <Link to={`/album/${songInfo.album.id}`}>
                                <Card.Title>{songInfo.album.title}</Card.Title>
                              </Link>
                            </Card.Body>
                            <ListGroup className="list-group-flush">
                              <ListGroup.Item>
                                <p className="text-light d-inline">artist:</p>
                                <Link to={`/artist/${songInfo.artist.id}`}> {songInfo.artist.name}</Link>{" "}
                              </ListGroup.Item>
                            </ListGroup>
                          </Card>
                        </Col>
                      );
                    })}
                </Row>
              </div>
            </Col>
          </Row>
          <Row>
            <Col xs={10}>
              <div id="hiphop">
                <h2>jazz</h2>
                <Row>
                  {jazz &&
                    jazz.slice(8, 12).map((songInfo) => {
                      return (
                        <Col xs={12} md={6} lg={3}>
                          <Card>
                            <Link to={`/album/${songInfo.album.id}`}>
                              <Card.Img variant="top" src={songInfo.album.cover_medium} />
                            </Link>
                            <Card.Body>
                              <Link to={`/album/${songInfo.album.id}`}>
                                <Card.Title>{songInfo.album.title}</Card.Title>
                              </Link>
                            </Card.Body>
                            <ListGroup className="list-group-flush">
                              <ListGroup.Item>
                                <Link to={`/artist/${songInfo.artist.id}`}>artist:{songInfo.artist.name}</Link>{" "}
                              </ListGroup.Item>
                            </ListGroup>
                          </Card>
                        </Col>
                      );
                    })}
                </Row>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default MyHome;
