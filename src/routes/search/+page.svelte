<script>
	import { searchTerms } from '../../utils/usefulData.js';
</script>

<h2 class="font-bold text-3xl tracking-tight text-davy dark:text-mint p-3">
	Explore all you want to
</h2>

<section
	class="w-fit mx-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5 p-3 place-content-center"
>
	{#each searchTerms as genre (genre.id)}
		<a
			style={`background-color: ${genre.color};`}
			class="w-fit rounded-lg lg:hover:opacity-95 lg:hover:-translate-y-1 transition-all"
			href={`/search/${genre.genre}`}
		>
			<article class="w-[150px] h-[120px] lg:w-[200px] lg:h-[170px]">
				<h5 class="text-lg lg:text-2xl text-mint font-semibold p-5">
					{genre.genre}
				</h5>
			</article>
		</a>
	{/each}
</section>
