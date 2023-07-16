<script>
	import PlaylistComponent from './PlaylistComponent.svelte';
	import GridCard from './GridCard.svelte';
	export let playlistData;
</script>

<GridCard>
	{#each playlistData as playlist}
		<PlaylistComponent
			playlistName={playlist?.data?.name}
			coverArt={playlist?.data?.images?.items[0]?.sources[0]?.url}
			description={playlist?.data?.description}
			uri={playlist?.data?.uri}
		/>
	{/each}
</GridCard>
