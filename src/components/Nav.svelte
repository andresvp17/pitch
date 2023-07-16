<script>
	import FaAlignJustify from 'svelte-icons/fa/FaAlignJustify.svelte';
	import TiHomeOutline from 'svelte-icons/ti/TiHomeOutline.svelte';
	import IoMdSearch from 'svelte-icons/io/IoMdSearch.svelte';
	import FaRegBookmark from 'svelte-icons/fa/FaRegBookmark.svelte';
	import LittleIcon from './LittleIcon.svelte';
	import IoIosClose from 'svelte-icons/io/IoIosClose.svelte';

	let showing = false;

	function handleShowing() {
		return !showing ? (showing = true) : (showing = false);
	}
</script>

<button on:click={handleShowing} class="fixed z-30 w-6 right-0 top-5 mr-4 md:hidden">
	<LittleIcon IconComponent={FaAlignJustify} />
</button>

<nav
	class={`${
		showing ? 'show' : 'hide'
	} fixed z-40 top-0 left-0 flex md:w-[30%] lg:w-[15%] w-full h-screen bg-davy transition duration-300`}
>
	<button
		on:click={handleShowing}
		class="absolute md:hidden w-6 right-0 top-5 mr-4 cursor-pointer text-ivory"
	>
		<LittleIcon IconComponent={IoIosClose} />
	</button>
	<ul class="ml-4 mt-14 font-semibold text-ivory h-[50%] flex flex-col item gap-6">
		<h1 class="ml-auto text-ivory font-bold text-6xl">Pitch</h1>
		<p class="text-sm text-[#bcbcbc]">Menu</p>
		<li>
			<a
				on:click={handleShowing}
				class="flex gap-2 md:hover:text-cream md:[&_svg]:hover:text-cream"
				href="/"
			>
				<LittleIcon IconComponent={TiHomeOutline} />
				Home
			</a>
		</li>
		<li>
			<a
				on:click={handleShowing}
				class="flex gap-2 md:hover:text-cream md:[&_svg]:hover:text-cream"
				href="/search"
			>
				<LittleIcon IconComponent={IoMdSearch} />
				Search
			</a>
		</li>
		<li>
			<a
				on:click={handleShowing}
				class="flex gap-2 md:hover:text-cream md:[&_svg]:hover:text-cream"
				href="/saved"
			>
				<LittleIcon IconComponent={FaRegBookmark} />
				Saved
			</a>
		</li>
		<p class="text-[#bcbcbc]">Playlists</p>
	</ul>
</nav>

<style lang="potscss">
	.show {
		transform: translateX(0);
	}

	.hide {
		transform: translateX(0);
	}

	@media screen and (max-width: 768px) {
		.show {
			transform: translateX(0);
		}

		.hide {
			transform: translateX(-100%);
		}
	}
</style>
