<script>
	import { onMount } from 'svelte';
	import IoIosArrowBack from 'svelte-icons/io/IoIosArrowBack.svelte';
	import IoIosArrowForward from 'svelte-icons/io/IoIosArrowForward.svelte';

	let useHistory;

	onMount(() => {
		useHistory = history.length;
	});

	function handleGoBack() {
		console.log(useHistory);
		if (useHistory) return history.back();
	}

	function handleGoForward() {
		if (useHistory) return history.forward();
	}
</script>

<div
	class="dark:bg-[#000] fixed right-0 left-0 top-0 z-20 text-mint md:w-[70%] lg:w-[85%] w-full p-3 md:ml-auto backdrop-blur-md"
>
	<div class="flex gap-3 mt-1 ml-1">
		<button
			on:click={handleGoBack}
			class={`bg-davy rounded-full w-9 h-9 ${useHistory ? 'opacity-100' : 'opacity-75'}`}
		>
			<IoIosArrowBack />
		</button>
		<button
			on:click={handleGoForward}
			class={`bg-davy rounded-full w-9 h-9 ${useHistory ? 'opacity-100' : 'opacity-75'}`}
		>
			<IoIosArrowForward />
		</button>
	</div>
</div>
