<script>
	import '../app.css';
	import Nav from '../components/Nav.svelte';
	import BackAndForth from '../components/BackAndForth.svelte';
</script>

<Nav />
<BackAndForth />
<section class="dark:bg-[#111] lg:w-[85%] md:w-[70%] mt-16 pb-5 md:ml-auto">
	<slot />
</section>
