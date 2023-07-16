<script>
	import ArtistSearch from './ArtistSearch.svelte';
	import AllSearch from './AllSearch.svelte';
	import AlbumSearch from './AlbumSearch.svelte';
	import PlaylistSearch from './PlaylistSearch.svelte';
	import Tracks from './Tracks.svelte';
	export let componentData;
	export let typeOfSearch;
</script>

{#if typeOfSearch === 'all'}
	<AllSearch allData={componentData} />
{:else if typeOfSearch === 'artists'}
	<ArtistSearch artistsData={componentData?.artists} />
{:else if typeOfSearch === 'albums'}
	<AlbumSearch albumsData={componentData?.albums} />
{:else if typeOfSearch === 'songs'}
	<Tracks trackInfo={componentData?.tracks?.items} />
{:else if typeOfSearch === 'playlists'}
	<PlaylistSearch playlistData={componentData?.playlists?.items} />
{/if}
