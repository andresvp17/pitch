export async function load({ params, fetch }) {
    const url = `https://spotify23.p.rapidapi.com/search/?q=${params.searchedTerm}&type=multi&offset=0&limit=10&numberOfTopResults=5`;
		const options = {
			method: 'GET',
			headers: {
				'X-RapidAPI-Key': 'f3ce2aa64amsh3d5d280f94fe792p1bc43ajsn50d4baf6b5de',
        'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
			  }
		};

		try {
			const response = await fetch(url, options);
			return await response.json();
		} catch (error) {
			console.error(error);
		}
}