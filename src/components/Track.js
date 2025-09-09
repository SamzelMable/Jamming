import React from 'react';
import './Track.css'; // optional if you have a separate CSS file

function Track({ track, onAdd, onRemove, isRemoval }) {
  const addTrack = () => onAdd(track);
  const removeTrack = () => onRemove(track);

  return (
    <div className="Track">
      {/* Album Cover */}
      {track.albumImage && (
        <img
          src={track.albumImage}
          alt={`${track.name} album cover`}
          className="Track-image"
        />
      )}

      <div className="Track-information">
        <h3>{track.name}</h3>
        <p>{track.artist} | {track.album}</p>

        {/* Audio Preview */}
        {track.previewUrl && (
          <audio controls src={track.previewUrl} className="Track-preview">
            Your browser does not support audio playback.
          </audio>
        )}
      </div>

      {isRemoval ? (
        <button onClick={removeTrack}>-</button>
      ) : (
        <button onClick={addTrack}>+</button>
      )}
    </div>
  );
}

export default Track;
