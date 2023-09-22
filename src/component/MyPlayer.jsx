import { Col, Container, Row } from "react-bootstrap";
import shuffle from "../playerbuttons/Shuffle.png";
import Previous from "../playerbuttons/Previous.png";
import Play from "../playerbuttons/Play.png";
import Next from "../playerbuttons/Next.png";
import Repeat from "../playerbuttons/Repeat.png";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const MyPlayer = () => {
  const track = useSelector((state) => state.player?.content);

  return (
    <Container fluid className="fixed-bottom bg-container pt-1 d-flex justify-content-center">
      <Container className="d-flex">
        <img
          src={track ? track.album.cover_small : ""}
          alt={track ? track.title : ""}
          style={{ width: "80px", marginLeft: "220px" }}
        />
        <Container className="d-flex flex-column">
          <p className=" text-light ms-3">{track ? track.title : ""}</p>
          <p className=" text-light ms-3">{track ? track.artist.name : ""}</p>
        </Container>
      </Container>
      <Container className="d-flex">
        <p className="text-light">0:00</p>
        <Container className="d-flex ">
          <Container className="d-flex flex-column">
            <Container>
              <Link>
                <img src={shuffle} alt="shuffle" height={"10px"} className="mx-2 mt-3" />
              </Link>
              <Link>
                <img src={Previous} alt="shuffle" height={"10px"} className="mx-2 mt-3" />
              </Link>
              <Link>
                <img src={Play} alt="shuffle" height={"10px"} className="mx-2 mt-3" />
              </Link>
              <Link>
                <img src={Next} alt="shuffle" height={"10px"} className="mx-2 mt-3" />
              </Link>
              <Link>
                <img src={Repeat} alt="shuffle" height={"10px"} className="mx-2 mt-3" />
              </Link>
            </Container>

            <div className="progress mt-3">
              <div
                className="progress-bar"
                role="progressbar"
                aria-valuenow="0"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
          </Container>
          <Container>
            {track ? (
              <p className="text-light">
                {Math.floor(track.duration / 60)}:
                {track.duration % 60 >= 9 ? Math.floor(track?.duration % 60) : `0${Math.floor(track?.duration % 60)}`}
              </p>
            ) : (
              ""
            )}
          </Container>
        </Container>
      </Container>
    </Container>
  );
};

export default MyPlayer;
