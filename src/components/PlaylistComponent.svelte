<script>
	import Heart from './Icons/Heart.svelte';
	import {
		uriParameter,
		saveOnLocalStorage,
		getItemsInLocalStorage
	} from '../utils/UtilityFunctions';
	export let playlistName;
	export let coverArt;
	export let description;
	export let uri;
	let savedIds;
	let isLiked;
	$: if (typeof localStorage !== 'undefined' && localStorage.length > 0) {
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
	<a href={`/playlists/${uriParameter(uri)}`}>
		<article
			class="h-full flex flex-col leading-tight dark:bg-davy bg-ivory md:hover:bg-cream dark:md:hover:bg-[#222] transition-all duration-300 p-5 rounded-md shadow-md max-w-[220px]"
		>
			<div>
				<img
					class="w-[180px] h-[180px] object-cover rounded-md max-w-[220px]"
					src={coverArt}
					alt=""
				/>
			</div>
			<div class="grow align-bottom">
				<p class="text-lg font-bold text-davy dark:text-mint line-clamp-1">{playlistName}</p>
			</div>
			<div class="truncate">
				<p class="text-sm max-w-[100%] text-[#888] dark:text-mint">{@html description}</p>
			</div>
		</article>
	</a>
</div>

<style lang="postcss">
	.truncate {
		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
		overflow: hidden;
	}

	.liked {
		color: #ff1010;
	}
</style>
