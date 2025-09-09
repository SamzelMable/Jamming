import React, { useState } from 'react';
import './App.css';
import Spotify from './Spotify';
import SearchBar from './components/SearchBar';
import TrackList from './components/TrackList';
import Playlist from './components/Playlist';

function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [playlistTracks, setPlaylistTracks] = useState([]);
  const [playlistName, setPlaylistName] = useState('New Playlist');

  // Search function using Spotify API
  const search = async (term) => {
    const results = await Spotify.search(term);
    setSearchResults(results);
  };

  // Add a track to the playlist
  const addTrack = (track) => {
    if (!playlistTracks.find(savedTrack => savedTrack.id === track.id)) {
      setPlaylistTracks(prevTracks => [...prevTracks, track]);
    }
  };

  // Remove a track from the playlist
  const removeTrack = (track) => {
    setPlaylistTracks(prevTracks => prevTracks.filter(currentTrack => currentTrack.id !== track.id));
  };

  // Update playlist name
  const updatePlaylistName = (name) => {
    setPlaylistName(name);
  };

  // Save playlist to Spotify
  const savePlaylist = () => {
    const trackUris = playlistTracks.map(track => track.uri);
    Spotify.savePlaylist(playlistName, trackUris).then(() => {
      setPlaylistName('New Playlist');
      setPlaylistTracks([]);
    });
  };

  return (
    <div className="App">
      <h1>Jammming</h1>
      <SearchBar onSearch={search} />
      <div className="App-playlist">
        <TrackList 
          tracks={searchResults} 
          onAdd={addTrack} 
          isRemoval={false} 
        />
        <Playlist 
          playlistName={playlistName}
          playlistTracks={playlistTracks} 
          onRemove={removeTrack} 
          onNameChange={updatePlaylistName} 
          onSave={savePlaylist} 
        />
      </div>
    </div>
  );
}

export default App;
