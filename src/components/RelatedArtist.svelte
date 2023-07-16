<script>
	import { uriParameter } from '../utils/UtilityFunctions';
	export let relatedAritst;
</script>

<h2 class="text-3xl text-davy dark:text-mint font-bold ml-10 mb-5">Related Artists</h2>
<section
	class="w-[95%] mx-auto flex gap-8 items-center overflow-y-hidden snap-x snap-mandatory mb-8"
>
	{#each relatedAritst as artist}
		<a href={`/artist/${uriParameter(artist?.uri)}`}>
			<div class="w-[212px] h-[280px] relative">
				<article
					class=" h-full flex flex-col justify-between leading-tight bg-ivory md:hover:bg-cream dark:bg-davy dark:md:hover:bg-[#222] transition-all duration-300 mx-auto p-5 rounded-md shadow-md snap-center"
				>
					<div>
						<img
							class="rounded-full aspect-square w-[180px]"
							src={artist?.visuals?.avatarImage?.sources[0]?.url}
							alt=""
						/>
					</div>
					<p class="text-lg text-center font-bold text-davy dark:text-mint line-clamp-1">
						{artist?.profile?.name}
					</p>
					<p class="text-davy dark:text-mint font-thin text-center">Aritst</p>
				</article>
			</div>
		</a>
	{/each}
</section>
