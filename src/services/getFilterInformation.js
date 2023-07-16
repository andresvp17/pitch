export const getFilterInformation = async (query, filterTerm) => {
    const url = `https://spotify23.p.rapidapi.com/search/?q=${query}&type=${filterTerm}&offset=0&limit=10&numberOfTopResults=5`;
		const options = {
			method: 'GET',
			headers: {
				'X-RapidAPI-Key': '2f5b278f55msh739f36ea2fb6afep14d11ajsn2250019326e8',
				'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
			  }
		};

	try {
		const response = await fetch(url, options);
		const result = await response.json();
		return result
	} catch (error) {
		console.error(error);
	}
}
