import React, { useState } from 'react';
import TrackList from './TrackList';

function Playlist({ playlistTracks, onRemove, onNameChange, onSave }) {
  const [playlistName, setPlaylistName] = useState('New Playlist');

  const handleNameChange = (e) => {
    setPlaylistName(e.target.value);
    onNameChange(e.target.value);
  };

  return (
    <div className="Playlist">
      <input value={playlistName} onChange={handleNameChange} />
      <TrackList tracks={playlistTracks} onRemove={onRemove} isRemoval={true} />
      <button onClick={onSave}>SAVE TO SPOTIFY</button>
    </div>
  );
}

export default Playlist;
