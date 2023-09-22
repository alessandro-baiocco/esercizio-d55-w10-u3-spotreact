import { useEffect, useState } from "react";
import { Card, Col, Container, ListGroup, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { search } from "../redux/actions";

const MyHome = () => {
  //     <script>
  //     let rockArtists = ["queen", "u2", "thepolice", "eagles", "thedoors", "oasis", "thewho", "bonjovi"];

  //     let popArtists = ["maroon5", "coldplay", "onerepublic", "jamesblunt", "katyperry", "arianagrande"];

  //     let hipHopArtists = ["eminem", "snoopdogg", "lilwayne", "drake", "kanyewest"];

  //     search = async () => {
  //       let div = document.querySelector("#searchResults .row");
  //       div.innerHTML = "";
  //       let searchQuery = document.querySelector("#searchField").value; // gets the value from the search box

  //       if (searchQuery.length > 2) {
  //         //if there's a value in the search box => fetch the information from rapidapi & display the result
  //         document.querySelector("#searchResults").style.display = "block";

  //         try {
  //           let response = await fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=" + searchQuery, {
  //             method: "GET",
  //             headers,
  //           }); // gets the information

  //           if (response.ok) {
  //             let result = await response.json(); // transforms the response to json
  //             let songs = result.data; // gets the songs info

  //             for (let x = 0; x < result.data.length; x++) {
  //               div.innerHTML += albumCard(result.data[x]);
  //             }
  //           } else {
  //             console.log("error");
  //           }
  //         } catch (err) {
  //           console.log(err);
  //         }
  //       } else {
  //         //else just hide the section!
  //         document.querySelector("#searchResults").style.display = "none";
  //       }
  //     };

  //     function albumCard(songInfo) {
  //       // songInfo represents the info for the current song
  //       // creating the wrapper div
  //       return `
  //         <div class="col text-center" id=${songInfo.id}>
  //           <a href="/album_page.html?id=${songInfo.album.id}">
  //             <img class="img-fluid" src=${songInfo.album.cover_medium} alt="1" />
  //           </a>
  //           <p>
  //             <a href="/album_page.html?id=${songInfo.album.id}">
  //               Album: "${
  //                 songInfo.album.title.length < 16
  //                   ? `${songInfo.album.title}`
  //                   : `${songInfo.album.title.substring(0, 16)}...`
  //               }"<br>
  //             </a>
  //             <a href="/artist_page.html?id=${songInfo.artist.id}">
  //               Artist: ${songInfo.artist.name}
  //             </a>
  //           </p>
  //         </div>`;
  //     }

  // handleArtist = async (artistName, domQuerySelector) => {
  //       // artistName = "eminem", "metallica", etc...
  //       // domQuerySelector = "#rockSection" etc...
  //       try {
  //         let response = await fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=" + artistName, {
  //           method: "GET",
  //           headers,
  //         }); // gets the information
  //         if (response.ok) {
  //           let result = await response.json(); // transforms the response to json
  //           let songInfo = result.data;
  //           let div = document.querySelector(domQuerySelector);
  //           div.innerHTML += albumCard(songInfo[0]); // create a new album tyle
  //         } else {
  //           console.log("error");
  //         }
  //       } catch (err) {
  //         console.log(err);
  //       }
  //     };

  //     window.onload = async () => {
  //       let rockRandomArtists = [];
  //       let popRandomArtists = [];
  //       let hipHopRandomArtists = [];

  //       document.querySelector("#searchField").value = ""; // empties search field on page load

  //       while (rockRandomArtists.length < 4) {
  //         // pushes elements inside the array until it has 4 strings
  //         let artist = rockArtists[Math.floor(Math.random() * rockArtists.length)]; // select an element from the array with an index between 0 and 7
  //         if (!rockRandomArtists.includes(artist)) {
  //           // checks if the artist is not already present in the array
  //           rockRandomArtists.push(artist); // pushes the artist in the array
  //         }
  //       }

  //       while (popRandomArtists.length < 4) {
  //         let artist = popArtists[Math.floor(Math.random() * popArtists.length)];
  //         if (!popRandomArtists.includes(artist)) {
  //           popRandomArtists.push(artist);
  //         }
  //       }

  //       while (hipHopRandomArtists.length < 4) {
  //         let artist = hipHopArtists[Math.floor(Math.random() * hipHopArtists.length)];
  //         if (!hipHopRandomArtists.includes(artist)) {
  //           hipHopRandomArtists.push(artist);
  //         }
  //       }

  //       for (let j = 0; j < rockRandomArtists.length; j++) await handleArtist(rockRandomArtists[j], "#rockSection");

  //       for (let k = 0; k < popRandomArtists.length; k++) await handleArtist(popRandomArtists[k], "#popSection");

  //       for (let l = 0; l < hipHopRandomArtists.length; l++)
  //         await handleArtist(hipHopRandomArtists[l], "#hipHopSection");
  //     };
  //   </script>

  const searchedMusic = useSelector((state) => state.search?.content);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(search("rock"));
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
              <div id="rock">
                <h2>più visti</h2>
                <Row>
                  {searchedMusic &&
                    searchedMusic.slice(0, 4).map((songInfo) => {
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
                <h2>più apprezzati</h2>
                <Row>
                  {searchedMusic &&
                    searchedMusic.slice(4, 8).map((songInfo) => {
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
                <h2>più conosciuti</h2>
                <Row>
                  {searchedMusic &&
                    searchedMusic.slice(8, 12).map((songInfo) => {
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
