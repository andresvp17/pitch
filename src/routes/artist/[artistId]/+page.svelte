<script>
	import GridCard from '../../../components/GridCard.svelte';
	import RelatedArtist from '../../../components/RelatedArtist.svelte';
	import Heart from '../../../components/Icons/Heart.svelte';
	import {
		convertToSongTime,
		getNumberOfStreams,
		uriParameter,
		saveOnLocalStorage,
		getItemsInLocalStorage
	} from '../../../utils/UtilityFunctions.js';
	export let data;
	let discographyFilter = 'Popular Releases';
	let isLiked;
	let popularTopics = 'popularReleases';
	let savedIds;

	const DISCOGRAPHY_FILTERS = {
		popularReleases: 'Popular Releases',
		albums: 'Albums',
		singles: 'Singles',
		compilations: 'Compilations'
	};

	const handleDiscography = (filterOption) => {
		popularTopics = filterOption;
	};

	console.log(data);
	$: topTracks = data?.artist?.discography?.[popularTopics]?.items;

	$: if (typeof localStorage !== 'undefined' && localStorage.length > 0) {
		savedIds = getItemsInLocalStorage('savedIds');
		isLiked = savedIds.includes(uriParameter(data?.artist?.uri)) ? 'liked' : '';
	}
</script>

<section>
	<article class="sticky top-0 mb-5">
		<div
			class="bg-gradient-to-b from-cream to-[#fff] dark:from-davy dark:to-[#111] absolute h-[40vh] w-full z-30 opacity-80"
		/>
		<img
			class="aspect-video top-0 h-[40vh] w-full object-cover object-top"
			src={`${data?.artist?.visuals?.headerImage?.sources[0]?.url}`}
			alt={`Header image of ${data?.artist?.profile?.name}`}
		/>
		<div class="absolute z-30 bottom-6">
			<h1 class="text-5xl ml-4 mb-2 font-semibold text-mint tracking-tight md:text-6xl lg:text-8xl">
				{data?.artist?.profile?.name}
			</h1>
			<h4 class="text-xl ml-4 font-thin text-mint tracking-tight">
				Monthly Listeners {getNumberOfStreams(data?.artist?.stats?.monthlyListeners)}
			</h4>
		</div>
	</article>

	<div class="relative bg-[#fff] dark:bg-[#111]">
		<button
			on:click={() => {
				saveOnLocalStorage(uriParameter(data?.artist?.uri));
				savedIds = getItemsInLocalStorage('savedIds');
			}}
			class={`w-[40px] h-[40px] ml-1 bg-mint rounded-full flex justify-center items-center ${isLiked}`}
		>
			<Heart />
		</button>
		<article class="flex flex-col gap-2 lg:h-screen mb-8">
			<h5 class="ml-2 my-5 text-3xl font-bold text-davy dark:text-mint">Popular</h5>
			{#each data?.artist?.discography?.topTracks?.items as trackElement}
				<article
					class="flex gap-3 p-2 rounded-md items-center md:hover:bg-ivory dark:md:hover:bg-[#222] transition-colors duration-300 cursor-pointer"
				>
					<div>
						<img
							class="min-w-[40px] h-[40px] aspect-square object-cover"
							src={trackElement?.track?.album.coverArt.sources[0].url}
							alt={`track image of ${trackElement?.track?.name}`}
						/>
					</div>
					<div class="flex flex-col grow leading-tight">
						<h3 class="font-bold text-davy dark:text-mint line-clamp-1">
							{trackElement?.track?.name}
						</h3>
					</div>
					<div class="hidden sm:block sm:mr-28">
						<p class="text-davy dark:text-mint text-left">
							{getNumberOfStreams(trackElement?.track?.playcount)}
						</p>
					</div>
					<div class="mr-3">
						<h5 class="text-[#888] font-semibold">
							{`${convertToSongTime(trackElement?.track?.duration?.totalMilliseconds)[0]}:${
								convertToSongTime(trackElement?.track?.duration?.totalMilliseconds)[1]
							}`}
						</h5>
					</div>
				</article>
			{/each}
		</article>

		<div class="w-[95%] mx-auto mb-8">
			<h2 class="text-3xl text-davy dark:text-mint ml-3 font-bold mb-5">Discography</h2>
			<article class="flex gap-3 md:pl-9 overflow-y-hidden mb-5 snap-x snap-mandatory">
				{#each Object.entries(DISCOGRAPHY_FILTERS) as filter}
					<button
						on:click={() => {
							discographyFilter = filter[1];
							handleDiscography(filter[0]);
						}}
						class={`${
							discographyFilter === filter[1] ? 'bg-davy text-mint' : 'dark:bg-mint dark:text-davy'
						} px-5 border-2 border-davy rounded-full md:hover:bg-davy md:hover:text-mint transition-colors`}
					>
						{filter[1]}
					</button>
				{/each}
			</article>
			<GridCard>
				{#each topTracks as release}
					<div class="relative">
						<a href={`/albums/${uriParameter(release?.releases?.items[0]?.uri)}`}>
							<article
								class="w-min flex flex-col leading-tight bg-ivory md:hover:bg-cream dark:bg-davy dark:md:hover:bg-[#222] transition-all duration-300 mx-auto p-5 rounded-md shadow-md snap-center"
							>
								<div>
									<img
										class="w-auto rounded-md max-w-[180px]"
										src={release?.releases?.items[0]?.coverArt?.sources[0]?.url}
										alt={``}
									/>
								</div>
								<p class="text-lg font-bold text-davy dark:text-mint line-clamp-1">
									{release?.releases?.items[0]?.name}
								</p>
							</article>
						</a>
					</div>
				{/each}
			</GridCard>
		</div>

		<RelatedArtist relatedAritst={data?.artist?.relatedContent?.relatedArtists?.items} />

		<article class="pb-8">
			<h4 class="text-3xl text-davy dark:text-mint ml-6 font-bold mb-5">About</h4>
			<div class="w-[90%] mx-auto md:ml-5 relative">
				<div class="gradient absolute w-full h-full max-w-[800px] z-10 rounded-3xl" />
				<div class="absolute bottom-10 left-5 z-20 text-mint">
					<p class="font-semibold mb-2 text-lg">
						Monthly Listeners {getNumberOfStreams(data?.artist?.stats?.monthlyListeners)}
					</p>
					<p class="line-clamp-3 leading-5 lg:w-[50%]">
						{@html data?.artist?.profile?.biography?.text}
					</p>
				</div>
				<img
					class="w-full max-w-[800px] max-h-[500px] object-cover rounded-3xl"
					src={data?.artist?.visuals?.gallery?.items[0]?.sources[0]?.url}
					alt={`About image of ${data?.aritst?.profile?.name}`}
				/>
			</div>
		</article>
	</div>
</section>

<style lang="postcss">
	.liked {
		color: #ff1010;
	}
</style>
