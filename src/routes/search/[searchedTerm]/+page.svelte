<script>
	import TypeOfSearch from '../../../components/TypeOfSearch.svelte';
	import { searchOptions } from '../../../utils/usefulData';
	export let data;
	let searchOption = 'all';

	console.log(data);
</script>

<div class="flex md:justify-center gap-3 md:pl-9 overflow-y-hidden snap-x mb-5">
	{#each searchOptions as option}
		<button
			class={`${
				option === searchOption ? 'bg-davy text-mint' : 'dark:bg-mint dark:text-davy'
			} capitalize px-5 py-1 border-2 border-davy rounded-full md:hover:bg-davy md:hover:text-mint transition-colors`}
			on:click={() => {
				searchOption = option;
			}}
			>{option}
		</button>
	{/each}
</div>
<TypeOfSearch typeOfSearch={searchOption} componentData={data} />
