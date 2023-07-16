<script>
	import {
		convertToSongTime,
		saveOnLocalStorage,
		getItemsInLocalStorage,
		uriParameter
	} from '../../../utils/UtilityFunctions';
	import Heart from '../../../components/Icons/Heart.svelte';
	export let data;
	let savedIds;
	let isLiked;
	$: if (typeof localStorage !== 'undefined') {
		savedIds = getItemsInLocalStorage('savedIds');
		isLiked = savedIds.includes(uriParameter(data?.playlist?.uri)) ? 'liked' : '';
	}
</script>

<section class="flex flex-col lg:items-start items-center gap-3">
	<div
		class="bg-gradient-to-b from-cream to-[#fff] dark:from-davy dark:to-[#111] w-full pt-4 lg:pt-0 mb-6"
	>
		<picture class="flex flex-col lg:flex-row lg:items-center">
			<img
				class="self-center rounded-sm lg:self-start lg:ml-7 lg:w-[300px] max-w-[324px] aspect-square mb-6 p-3"
				src={data.playlist.images[0].url}
				alt={data.playlist.images[0].url}
			/>
			<div class="flex flex-col w-[90%] mx-auto lg:ml-0">
				<h2 class="text-3xl lg:text-8xl text-davy dark:text-mint font-bold tracking-tight">
					{data.playlist.name}
				</h2>
				<div class="flex gap-2">
					<h4 class="after:content-['.'] after:text-4xl after:ml-2 text-md text-[#888]">
						{data.playlist.owner.display_name}
					</h4>
					<h5 class="self-end font-thin dark:text-[#888]">{data.playlist.tracks.total} Tracks</h5>
				</div>
			</div>
		</picture>
		<button
			on:click={() => {
				saveOnLocalStorage(uriParameter(data?.playlist?.uri));
				savedIds = getItemsInLocalStorage('savedIds');
			}}
			class={`w-[40px] h-[40px] bg-mint rounded-full ml-8 mt-5 flex justify-center items-center ${isLiked}`}
		>
			<Heart />
		</button>
	</div>
	<div class="flex flex-col gap-2 pb-4 w-[90%] mx-auto">
		{#each data.tracks.items as playlistTrack, i (playlistTrack.track.id)}
			<article
				class="flex gap-3 p-2 rounded-md items-center md:hover:bg-ivory dark:md:hover:bg-davy transition-colors duration-300 cursor-pointer"
			>
				<div class="w-5 hidden md:block text-center">
					<span class="font-semibold text-[#888]">{i + 1}</span>
				</div>
				<div class="flex min-w-[40px]">
					<img
						class="w-10 h-10 aspect-square grow"
						src={playlistTrack?.track?.album?.images[2].url}
						alt={`image of ${playlistTrack?.track?.name}`}
					/>
				</div>
				<div class="flex flex-col grow leading-tight line-clamp-1">
					<h3 class="font-bold text-davy dark:text-mint">{playlistTrack?.track?.name}</h3>
					<h5 class="text-sm text-[#888]">{playlistTrack?.track?.artists[0]?.name}</h5>
				</div>
				<div>
					<h5 class="text-[#888] font-semibold">
						{`${convertToSongTime(playlistTrack?.track?.duration_ms)[0]}:${
							convertToSongTime(playlistTrack?.track?.duration_ms)[1]
						}`}
					</h5>
				</div>
			</article>
		{/each}
	</div>
</section>

<style lang="postcss">
	.liked {
		color: #ff1010;
	}
</style>
