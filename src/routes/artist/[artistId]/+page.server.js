export async function load ({ params, fetch }) {
    const url = `https://spotify23.p.rapidapi.com/artist_overview/?id=${params.artistId}`;
    const options = {
        method: 'GET',
         headers: {
            'X-RapidAPI-Key': 'f3ce2aa64amsh3d5d280f94fe792p1bc43ajsn50d4baf6b5de',
            'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
         }
    };

    try {
        const response = await fetch(url, options);
        const { data } = await response.json();
        return data
    } catch (error) {
        console.error(error);
    }
}