import { useEffect } from "react";
import { Button, Col, Container, Row, Card, ListGroup } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { artistsearch } from "../redux/actions";

const MyArtist = () => {
  const { artistId } = useParams();
  const dispatch = useDispatch();

  const artistInfo = useSelector((state) => state.artist.content);

  useEffect(() => {
    dispatch(artistsearch(artistId));
  }, []);
  const searchedMusic = useSelector((state) => state.search?.content);
  return (
    <Container fluid style={{ height: "calc(100vh - 84px)", overflowY: "auto" }}>
      <Row>
        <Col xs={12} md={9} className="offset-md-3 mainPage">
          <Row className="mb-3">
            <Col xs={9} lg={11} className="mainLinks d-none d-md-flex">
              <Link to="/">TRENDING</Link>
              <Link to="/">PODCAST</Link>
              <Link to="/">MOODS AND GENRES</Link>
              <Link to="/">NEW RELEASES</Link>
              <Link to="/">DISCOVER</Link>
            </Col>
          </Row>

          <Row>
            <Col xs={12} md={10} lg={10} className="mt-5">
              {artistInfo && (
                <>
                  <img src={artistInfo.picture_medium} alt={artistInfo.name} />
                  <h2>{artistInfo.name}</h2>
                  <div id="followers">
                    <p> album : {artistInfo.nb_album}</p>
                    <p> fan : {artistInfo.nb_fan}</p>
                  </div>
                </>
              )}
              <div className="d-flex justify-content-center" id="button-container">
                <Button className="btn btn-success mr-2 mainButton d-none" id="playButton">
                  PLAY
                </Button>
                <Button className="btn btn-outline-light mainButton d-none" id="followButton">
                  FOLLOW
                </Button>
              </div>
            </Col>
          </Row>
          <Row className="mb-3">
            <Col xs={10} className="offset-1 p-0">
              <div className="mt-4 d-flex justify-content-start">
                <h2 className="text-white font-weight-bold">Tracks</h2>
              </div>
              <div className="pt-5 mb-5">
                <Row id="apiLoaded">
                  {searchedMusic &&
                    artistInfo &&
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

export default MyArtist;
