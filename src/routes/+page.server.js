export const load = async ({ fetch }) => {
    const queryTerms = ['blackpink', 'taylor%20swift', 'pop', 'kpop', 'hiphop']
    const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'f3ce2aa64amsh3d5d280f94fe792p1bc43ajsn50d4baf6b5de',
        'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
	}
};

    try {
        const promisedArray = queryTerms.map(async (term) => {
            return await fetch(`https://spotify23.p.rapidapi.com/search/?q=${term}&type=playlists&offset=0&limit=5&numberOfTopResults=5`, options)
            .then(response => response.json())
            .then(({ playlists }) => {
                return playlists?.items
            })
        })
        return promisedArray
    } catch (error) {
        console.error(error);
    }
}