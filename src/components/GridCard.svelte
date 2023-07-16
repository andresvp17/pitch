<script>
	export let gridTitle = '';
</script>

<section class="mb-12">
	<h2 class="text-davy dark:text-mint text-3xl font-bold ml-4 tracking-tighter m-4">
		{gridTitle}
	</h2>
	<article
		class="flex md:ml-auto md:grid gap-5 md:snap-none overflow-y-hidden snap-proximity snap-x grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5"
	>
		<slot />
	</article>
</section>
