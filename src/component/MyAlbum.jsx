import { Button, Col, Container, Row, Card, ListGroup, ListGroupItem } from "react-bootstrap";

import { Link, useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { albumSearch, playerInfo, putLike, removeLike } from "../redux/actions";

const MyAlbum = () => {
  const { albumId } = useParams();
  const dispatch = useDispatch();

  const albumResult = useSelector((state) => state.album.content);
  const tracksResult = useSelector((state) => state.tracks.content);
  const likeArr = useSelector((state) => state.like?.content);

  useEffect(() => {
    dispatch(albumSearch(albumId));
  }, []);

  return (
    <Container fluid className="d-flex justify-content-end">
      <Col xs={12} md={9} className="offset-md-3 mainPage">
        <Row className="mb-3">
          <Col xs={9} lg={11} className="mainLinks d-none d-md-flex text-center">
            <Link>TRENDING</Link>
            <Link>PODCAST</Link>
            <Link>MOODS AND GENRES</Link>
            <Link>NEW RELEASES</Link>
            <Link>DISCOVER</Link>
          </Col>
        </Row>
        <Row>
          {tracksResult && (
            <>
              <Container md={3} className="pt-5 text-center" id="img-container">
                <img src={albumResult.cover_medium} alt={albumResult.title} />
                <h2 className="text-light">{albumResult.title}</h2>
                <p className="text-light">{albumResult.artist.name}</p>
              </Container>
              <Container>
                <ListGroup className="bg-transparent">
                  {tracksResult &&
                    tracksResult.map((track, i) => (
                      <ListGroupItem
                        onClick={() => {
                          dispatch(playerInfo(track));
                        }}
                        className="bg-transparent  fw-bold text-light border border-info border-4 p-0 my-2"
                        key={`track-${i}`}
                      >
                        <Container className="d-flex justify-content-between">
                          <p className="me-auto">{track.title}</p>
                          <p>
                            {Math.floor(track.duration / 60)}:
                            {track.duration % 60 >= 9
                              ? Math.floor(track.duration % 60)
                              : `0${Math.floor(track.duration % 60)}`}
                          </p>
                          {likeArr?.includes(track.id) ? (
                            <Button className="ms-3" onClick={() => dispatch(removeLike(track))}>
                              <i className="bi bi-star-fill"></i>
                            </Button>
                          ) : (
                            <Button className="ms-3" onClick={() => dispatch(putLike(track))}>
                              <i className="bi bi-star"></i>
                            </Button>
                          )}
                        </Container>
                      </ListGroupItem>
                    ))}
                </ListGroup>
              </Container>
            </>
          )}
        </Row>
      </Col>
    </Container>
  );
};
// className="mb-5" id="trackList"
export default MyAlbum;
