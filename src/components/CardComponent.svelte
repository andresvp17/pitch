<script>
	import Heart from './Icons/Heart.svelte';
	import {
		uriParameter,
		saveOnLocalStorage,
		getItemsInLocalStorage
	} from '../utils/UtilityFunctions';
	export let artist;
	export let albumName;
	export let coverArt;
	export let uri;
	let savedIds;
	let isLiked;
	$: if (typeof localStorage !== 'undefined') {
		savedIds = getItemsInLocalStorage('savedIds');
		isLiked = savedIds.includes(uriParameter(uri)) ? 'liked' : '';
	}
</script>

<div class="relative w-fit h-[280px] md:mx-auto">
	<div class="absolute card_cta top-2 right-2 z-10">
		<button
			on:click={() => {
				saveOnLocalStorage(uriParameter(uri));
				savedIds = getItemsInLocalStorage('savedIds');
			}}
			class={`w-[40px] h-[40px] bg-mint rounded-full flex justify-center items-center ${isLiked}`}
		>
			<Heart />
		</button>
	</div>
	<a href={`/albums/${uriParameter(uri)}`}>
		<article
			class="flex flex-col leading-tight bg-ivory md:hover:bg-cream dark:bg-davy dark:md:hover:bg-[#222] transition-all duration-300 mx-auto p-5 rounded-md shadow-md snap-center"
		>
			<div>
				<img class="w-auto rounded-md max-w-[180px]" src={coverArt} alt="" />
			</div>
			<p class="text-lg font-bold text-davy dark:text-mint line-clamp-1 max-w-[180px]">
				{albumName}
			</p>
			<p class="text-sm text-[#888]">{artist}</p>
		</article>
	</a>
</div>

<style lang="postcss">
	.liked {
		color: #ff1010;
	}
</style>
