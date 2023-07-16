<script>
	import { uriParameter } from '../utils/UtilityFunctions';
	import PlaylistComponent from './PlaylistComponent.svelte';
	import Tracks from './Tracks.svelte';
	import GridCard from './GridCard.svelte';
	export let allData;

	$: singleAritst = allData.artists.items[0];
</script>

<section>
	<article class="flex justify-center max-w-[340px] h-[280px] mx-auto mb-8">
		<a
			class="bg-ivory dark:bg-davy dark:md:hover:bg-[#222] md:hover:bg-cream transition-colors"
			href={`/artist/${uriParameter(singleAritst.data.uri)}`}
		>
			<article class="h-full inline-block p-3">
				<div class="inline-block">
					<img
						class="w-[200px] h-[200px] aspect-square rounded-full object-cover"
						src={`${singleAritst.data.visuals.avatarImage.sources[0].url}`}
						alt={`Profile of ${singleAritst.data.profile.name}`}
					/>
				</div>
				<p class="font-bold text-lg text-davy dark:text-mint text-center">
					{singleAritst.data.profile.name}
				</p>
			</article>
		</a>
	</article>

	<article>
		<Tracks trackInfo={allData.tracks.items} />
	</article>

	<article class="w-[90%] mx-auto">
		<GridCard>
			{#each allData?.playlists?.items as element}
				<PlaylistComponent
					playlistName={element?.data?.name}
					coverArt={element?.data?.images?.items[0]?.sources[0]?.url}
					description={element?.data?.description}
					uri={element?.data?.uri}
				/>
			{/each}
		</GridCard>
	</article>
</section>
