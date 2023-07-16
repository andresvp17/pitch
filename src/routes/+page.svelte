<script>
	import GridCard from '../components/GridCard.svelte';
	import PlaylistComponent from '../components/PlaylistComponent.svelte';
	export let data;

	const playlists = Object.values(data).flatMap((element) => element);

	const blackpinkSection = playlists.slice(0, 5);
	const TaylorSection = playlists.slice(5, 10);
	const popSection = playlists.slice(10, 15);
	const kpopSection = playlists.slice(15, 20);
	const hipHopSection = playlists.slice(20, 25);
</script>

<GridCard gridTitle="Discover BLACKPINK">
	{#each blackpinkSection as blackpinkElement}
		<PlaylistComponent
			coverArt={blackpinkElement?.data?.images?.items[0]?.sources[0]?.url}
			description={blackpinkElement?.data?.description}
			playlistName={blackpinkElement?.data?.name}
			uri={blackpinkElement?.data?.uri}
		/>
	{/each}
</GridCard>

<GridCard gridTitle="Sing Along With Taylor">
	{#each TaylorSection as taylorElement}
		<PlaylistComponent
			coverArt={taylorElement?.data?.images?.items[0]?.sources[0]?.url}
			description={taylorElement?.data?.description}
			playlistName={taylorElement?.data?.name}
			uri={taylorElement?.data?.uri}
		/>
	{/each}
</GridCard>

<GridCard gridTitle="Vibe With the Biggest Pop Playlist">
	{#each popSection as popElement}
		<PlaylistComponent
			coverArt={popElement?.data?.images?.items[0]?.sources[0]?.url}
			description={popElement?.data?.description}
			playlistName={popElement?.data?.name}
			uri={popElement?.data?.uri}
		/>
	{/each}
</GridCard>

<GridCard gridTitle="You Can't Avoid Dancing to This Bops">
	{#each kpopSection as kpopElement}
		<PlaylistComponent
			coverArt={kpopElement?.data?.images?.items[0]?.sources[0]?.url}
			description={kpopElement?.data?.description}
			playlistName={kpopElement?.data?.name}
			uri={kpopElement?.data?.uri}
		/>
	{/each}
</GridCard>

<GridCard gridTitle="Rap as a Start">
	{#each hipHopSection as hipHopElement}
		<PlaylistComponent
			coverArt={hipHopElement?.data?.images?.items[0]?.sources[0]?.url}
			description={hipHopElement?.data?.description}
			playlistName={hipHopElement?.data?.name}
			uri={hipHopElement?.data?.uri}
		/>
	{/each}
</GridCard>
