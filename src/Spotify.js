// src/Spotify.js
import SpotifyWebApi from 'spotify-web-api-js';

const spotifyApi = new SpotifyWebApi();

const clientId = '11cee0b5382a406f930c84c51920adc4';
const redirectUri = 'https://samzelmable.github.io/Jamming/';
const scopes = ['playlist-modify-public'];

const Spotify = {
  getAccessToken() {
    const params = new URLSearchParams(window.location.hash);
    const token = params.get('access_token');

    if (token) {
      spotifyApi.setAccessToken(token);
      return token;
    } else {
      const authUrl = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=token&redirect_uri=${encodeURIComponent(redirectUri)}&scope=${encodeURIComponent(scopes.join(' '))}`;
      window.location.href = authUrl;
    }
  },

  async search(term) {
    const token = this.getAccessToken();
    if (!token) return [];

    try {
      const response = await spotifyApi.searchTracks(term);
      return response.tracks.items.map(track => ({
        id: track.id,
        name: track.name,
        artist: track.artists[0].name,
        album: track.album.name,
        uri: track.uri
      }));
    } catch (error) {
      console.error('Spotify search error:', error);
      return [];
    }
  },

  // Future: Save playlist etc.
};

export default Spotify;
