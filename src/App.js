import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Navbar";
import DetailSong from "./Components/DetailSong";
import ListSongs from "./Components/ListSongs";
import { Songs } from "./Context";
import DataSongs from "./data/songs.json";
import PlayingAudio from "./Components/PlayingAudio";
import { useState } from "react";
function App() {
    const [song, setSong] = useState(DataSongs[0]);

    const handleSetSong = (idSong) => {
        const song = DataSongs.find((song) => song.id === idSong);
        if (!song) setSong(DataSongs[0]);
        else setSong(song);
    };
    return (
        <div className="App">
            <Songs.Provider value={{ DataSongs, song, handleSetSong }}>
                <Navbar />
                <div className="grid grid-cols-3 bg-slate-700 h-screen-navbar-player overflow-hidden">
                    <DetailSong />
                    <ListSongs />
                </div>
                <PlayingAudio />
            </Songs.Provider>
        </div>
    );
}
export default App;
