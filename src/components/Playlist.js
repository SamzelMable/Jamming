import React from 'react';
import TrackList from './TrackList';

function Playlist({ playlistName, playlistTracks, onRemove, onNameChange, onSave }) {

  const handleNameChange = (e) => {
    onNameChange(e.target.value);
  };

  return (
    <div className="Playlist">
      <input
        className="playlist-name"
        value={playlistName}
        onChange={(e) => onNameChange(e.target.value)}
      />
      <TrackList
        tracks={playlistTracks}
        onRemove={onRemove}
        isRemoval={true}
      />
      <button className="save-playlist" onClick={onSave}>
        SAVE TO SPOTIFY
      </button>
    </div>
  );
}

export default Playlist;
