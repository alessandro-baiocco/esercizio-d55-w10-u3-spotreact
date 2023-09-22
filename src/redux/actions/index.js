//---------------------action

export const SEARCH = "SEARCH";
export const ARTIST_QUERY = "ARTIST_QUERY";
export const ALBUM_QUERY = "ALBUM_QUERY";
export const TRACKS_QUERY = "TRACKS_QUERY";
export const PLAYER = "PLAYER";
export const PUT_LIKE = "PUT_LIKE";
export const REMOVE_LIKE = "REMOVE_LIKE";

//------------------header
let headers = new Headers({
  "X-RapidAPI-Key": "c39ea51001msh0b48f18ff7528dfp178bb6jsnbcb227f7b0fe",
  "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
});

//-----------------fun fun function

export const search = (query = "rock") => {
  return async (dispatch, getState) => {
    try {
      let response = await fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=" + query, {
        method: "GET",
        headers,
      });

      if (response.ok) {
        let result = await response.json(); // transforms the response to json
        let songs = result.data; // gets the songs info
        dispatch({ type: SEARCH, payload: songs });
      } else {
        console.log("error");
      }
    } catch (err) {
      console.log(err);
    }
  };
};

export const artistsearch = (artistId) => {
  return async (dispatch, getState) => {
    try {
      let artistResponse = await fetch("https://striveschool-api.herokuapp.com/api/deezer/artist/" + artistId, {
        method: "GET",
        headers,
      }); // gets the information

      if (artistResponse.ok) {
        let result = await artistResponse.json(); // transforms the response to json
        let artist = await result; // gets the songs info
        dispatch({ type: ARTIST_QUERY, payload: artist });

        try {
          let searchTrack = await fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=" + artist.name, {
            method: "GET",
            headers,
          });
          if (searchTrack.ok) {
            let result = await searchTrack.json(); // transforms the response to json
            let songs = result.data; // gets the songs info
            dispatch({ type: SEARCH, payload: songs });
          }
        } catch (err) {
          console.log(err);
        }
      } else {
        console.log("error");
      }
    } catch (err) {
      console.log(err);
    }
  };
};

export const albumSearch = (albumId) => {
  return async (dispatch, getState) => {
    try {
      let response = await fetch("https://striveschool-api.herokuapp.com/api/deezer/album/" + albumId, {
        method: "GET",
        headers,
      });

      if (response.ok) {
        let album = await response.json();

        dispatch({ type: ALBUM_QUERY, payload: album });
        dispatch({ type: TRACKS_QUERY, payload: album.tracks.data });
      } else {
        console.log(response.status);
      }
    } catch (err) {}
  };
};

export const playerInfo = (track) => {
  return (dispatch, getState) => {
    dispatch({ type: PLAYER, payload: track });
  };
};

export const putLike = (track) => {
  return async (dispatch, getState) => {
    dispatch({ type: PUT_LIKE, payload: track.id });
  };
};
export const removeLike = (track) => {
  return async (dispatch, getState) => {
    dispatch({ type: REMOVE_LIKE, payload: track.id });
  };
};
