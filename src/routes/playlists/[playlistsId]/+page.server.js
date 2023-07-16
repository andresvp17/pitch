export async function load ({ params, fetch }) {
    const playlistInfo = `https://spotify23.p.rapidapi.com/playlist/?id=${params.playlistsId}`;
    const playlistTracks = `https://spotify23.p.rapidapi.com/playlist_tracks/?id=${params.playlistsId}&offset=0&limit=50`;
    const options = {
	method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'f3ce2aa64amsh3d5d280f94fe792p1bc43ajsn50d4baf6b5de',
    'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
      }
};

    try {
        const playlistPromise = await fetch(playlistInfo, options);
        const tracksPromise = await fetch(playlistTracks, options);
        
        const playlist = await playlistPromise.json()
        const tracks = await tracksPromise.json()

        return { playlist, tracks }
    } catch (error) {
        console.error(error);
    }
}