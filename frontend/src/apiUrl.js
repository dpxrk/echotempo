const CLIENT_ID = " db94dfea5cd244d4bb118a066b9ec20b";
const ENDPOINT = "https://api.spotify.com";
const LIMIT = 25;

// `${ENDPOINT}

const apiFetchingParams = {
  urlParams: {
    base: "https://accounts.spotify.com.authorize",
    clientId: CLIENT_ID,
  },
  urls: {
    user: `${ENDPOINT}/v1/me`,
    userInfo: `${ENDPOINT}/v1/users/`,
    newReleases: `${ENDPOINT}/v1/browse/new-releases`,
    userPlaylist: `${ENDPOINT}/v1/me/playlists`,
    search: `${ENDPOINT}/v1/search`,
    player: `${ENDPOINT}/v1/me/player`,
    currentlyPlaying: `${ENDPOINT}/v1/me/player/currently-playing`,
    pause: `${ENDPOINT}/v1/me/player/pause`,
    play: `${ENDPOINT}/v1/me/player/play`,
    volume: `${ENDPOINT}/v1/me/plyaer/volume`,
    artists: `${ENDPOINT}/v1/artists/`,
    album: `${ENDPOINT}/v1/albums/`,
  },
};

export default apiFetchingParams;
