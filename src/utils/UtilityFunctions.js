export const uriParameter = (uri) => {
    const uriPossibilities = ['album', 'track', 'artist', 'playlist'];
    const replacingTerm = uriPossibilities.find((category) => uri.includes(category));

    return uri.replace(`spotify:${replacingTerm}:`, '');
}

export const convertToSongTime = (milliseconds) => {
    const minutes = Math.floor(milliseconds / 60000);
    const seconds = Math.floor(((milliseconds % 3600000) % 60000) / 1000);

    const formattedSeconds = seconds < 10 ? `${seconds}0` : seconds

    return [minutes, formattedSeconds]
}

export const saveOnLocalStorage = (id) => {
    const currentIds = JSON.parse(localStorage.getItem('savedIds'));
    if (currentIds && currentIds.includes(id))
        return localStorage.setItem(
            'savedIds',
            JSON.stringify(currentIds.filter((ids) => ids !== id))
        );

    return currentIds?.length
        ? localStorage.setItem('savedIds', JSON.stringify([...currentIds, id]))
        : localStorage.setItem('savedIds', JSON.stringify([id]));
};

export const getItemsInLocalStorage = (key) => JSON.parse(localStorage.getItem(key))

export const getNumberOfStreams = (numberOfStreams) => {
    if (typeof window !== 'undefined') {
        const parsedNumber = Number(numberOfStreams);
        const formatter = new Intl.NumberFormat('en');
        const formattedNumber = formatter.format(parsedNumber);

        return formattedNumber;
    }
}