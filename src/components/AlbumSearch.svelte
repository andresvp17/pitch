<script>
	import GridCard from './GridCard.svelte';
	import CardComponent from './CardComponent.svelte';
	export let albumsData;
</script>

<GridCard>
	{#each albumsData.items as album (album?.data?.uri)}
		<CardComponent
			albumName={album?.data?.name}
			artist={album?.data?.artists?.items[0]?.profile?.name}
			coverArt={album?.data?.coverArt?.sources[0]?.url}
			uri={album?.data?.uri}
		/>
	{/each}
</GridCard>
