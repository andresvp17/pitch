<script>
	import Heart from '../../../components/Icons/Heart.svelte';
	import {
		convertToSongTime,
		saveOnLocalStorage,
		getItemsInLocalStorage,
		uriParameter
	} from '../../../utils/UtilityFunctions';
	import Observer from '../../../components/Observer.svelte';
	export let data;
	let savedIds;
	let isLiked;
	$: if (typeof localStorage !== 'undefined' && localStorage.length > 0) {
		savedIds = getItemsInLocalStorage('savedIds');
		isLiked = savedIds.includes(uriParameter(data?.albums[0]?.uri)) ? 'liked' : '';
	}
</script>

<section class="flex flex-col lg:items-start items-center gap-3 ml-auto relative">
	<div
		class="bg-gradient-to-b from-cream to-[#fff] dark:from-davy dark:to-[#111] w-full pt-4 lg:pt-0 mb-6"
	>
		<Observer let:intersecting>
			<picture class="flex flex-col lg:flex-row lg:items-center">
				<img
					class="self-center rounded-sm lg:self-start lg:ml-7 lg:w-[300px] aspect-square mb-6 p-3"
					src={data.albums[0].images[1].url}
					alt={data.albums[0].artists[0].name}
				/>
				<div class="flex flex-col ml-11 lg:ml-0">
					<h2 class="text-3xl lg:text-8xl text-davy dark:text-mint font-bold tracking-tight">
						{data.albums[0].name}
					</h2>
					<div class="flex gap-2 mb-8">
						<h4 class="after:content-['.'] after:text-4xl after:ml-2 text-md text-[#888]">
							{data.albums[0].artists[0].name}
						</h4>
						<h5 class="text-[#888] self-end font-thin">{data.albums[0].total_tracks} Tracks</h5>
					</div>
					<button
						on:click={() => {
							saveOnLocalStorage(uriParameter(data?.albums[0]?.uri));
							savedIds = getItemsInLocalStorage('savedIds');
						}}
						class={`w-[40px] h-[40px] bg-mint rounded-full flex justify-center items-center ${isLiked}`}
					>
						<Heart />
					</button>
				</div>
			</picture>
			{#if !intersecting}
				<div
					class="fixed z-20 top-0 flex items-center w-full md:w-[70%] lg:w-[85%] mx-auto h-[60px] delayedAppear"
				>
					<h2
						class="text-4xl ml-28 lg:ml-32 lg:text-6xl text-davy dark:text-mint font-bold tracking-tight line-clamp-1"
					>
						{data.albums[0].name}
					</h2>
				</div>
			{/if}
		</Observer>
	</div>
	<div class="flex flex-col gap-2 pb-4 w-[90%] mx-auto lg:h-screen">
		{#each data.albums[0].tracks.items as track (track.id)}
			<article
				class="flex gap-3 p-2 rounded-md items-center md:hover:bg-ivory dark:md:hover:bg-[#222] transition-colors duration-300 cursor-pointer"
			>
				<div class="w-5 text-center">
					<span class="font-semibold text-[#888]">{track?.track_number}</span>
				</div>
				<div class="flex flex-col grow leading-tight">
					<h3 class="font-bold text-davy dark:text-mint">{track?.name}</h3>
					<h5 class="text-sm text-[#888]">{data.albums[0].artists[0].name}</h5>
				</div>
				<div>
					<h5 class="text-[#888] font-semibold">
						{`${convertToSongTime(track?.duration_ms)[0]}:${
							convertToSongTime(track?.duration_ms)[1]
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

	@keyframes appear {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}
</style>
