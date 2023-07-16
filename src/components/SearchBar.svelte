<script>
	import { goto } from '$app/navigation';
	import { updateValue } from '../stores/searchValue';
	import IoIosSearch from 'svelte-icons/io/IoIosSearch.svelte';
	import LittleIcon from './LittleIcon.svelte';

	let searchValue;

	function handleSubmit(event) {
		event.preventDefault();
		updateValue(searchValue);
		goto(`/search/${searchValue}`);
	}
</script>

<form
	on:submit={handleSubmit}
	class="lg:w-[70%] lg:mx-auto flex items-center p-2 my-4 bg-ivory dark:bg-davy text-davy dark:text-mint rounded-md shadow-md"
>
	<LittleIcon IconComponent={IoIosSearch} />
	<input
		class="border-none outline-none w-full bg-ivory dark:bg-davy dark:text-mint pl-2 font-semibold"
		type="text"
		bind:value={searchValue}
		placeholder="What do you want to search?"
	/>
</form>
