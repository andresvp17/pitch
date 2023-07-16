<script>
	import { convertToSongTime } from '../utils/UtilityFunctions';
	export let trackInfo;
</script>

<div class="flex flex-col gap-2 pb-4 w-[90%] mx-auto lg:h-screen">
	{#each trackInfo as track (track?.data?.id)}
		<article
			class="flex gap-3 p-2 rounded-md items-center md:hover:bg-ivory md:dark:hover:bg-[#222] transition-colors duration-300 cursor-pointer"
		>
			<div>
				<img
					class="w-[40px] h-[40px] aspect-square object-cover"
					src={track?.data.albumOfTrack.coverArt.sources[1].url}
					alt={`track image of ${track?.data?.name}`}
				/>
			</div>
			<div class="flex flex-col grow leading-tight">
				<h3 class="font-bold text-davy dark:text-mint">{track?.data?.name}</h3>
				<h5 class="text-sm text-[#888]">{track?.data?.artists.items[0].profile.name}</h5>
			</div>
			<div>
				<h5 class="text-[#888] font-semibold">
					{`${convertToSongTime(track?.data.duration.totalMilliseconds)[0]}:${
						convertToSongTime(track?.data.duration.totalMilliseconds)[1]
					}`}
				</h5>
			</div>
		</article>
	{/each}
</div>
