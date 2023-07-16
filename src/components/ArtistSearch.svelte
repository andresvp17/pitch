<script>
	import { uriParameter } from '../utils/UtilityFunctions';
	export let artistsData;

	console.log(artistsData);
</script>

<section class="p-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
	{#each artistsData.items as artist}
		<a
			class="h-[280px] bg-ivory dark:bg-davy md:hover:bg-cream md:dark:hover:bg-[#222] rounded-lg transition-colors"
			href={`/artist/${uriParameter(artist?.data?.uri)}`}
		>
			<article class="h-full flex flex-col items-center justify-center">
				<div>
					<img
						class="w-[200px] h-[200px] aspect-square rounded-full object-cover"
						src={`${artist?.data?.visuals?.avatarImage?.sources[0].url}`}
						alt={`Profile of ${artist?.data?.profile?.name}`}
					/>
				</div>
				<p class="font-bold text-lg text-davy dark:text-mint">{artist?.data?.profile?.name}</p>
			</article>
		</a>
	{/each}
</section>
