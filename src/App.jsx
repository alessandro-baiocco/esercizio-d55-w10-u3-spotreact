import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MySideBar from "./component/MySideBar";
import MyPlayer from "./component/MyPlayer";
import MyHome from "./component/MyHome";
import MyAlbum from "./component/MyAlbum";
import MyArtist from "./component/MyArtist";

function App() {
  return (
    <BrowserRouter>
      <MySideBar />
      <Routes>
        <Route path="/" element={<MyHome />} />
        <Route path="/album/:albumId" element={<MyAlbum />} />
        <Route path="/artist/:artistId" element={<MyArtist />} />
      </Routes>
      <MyPlayer />
    </BrowserRouter>
  );
}

export default App;
