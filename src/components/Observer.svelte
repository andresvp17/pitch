<script>
	import { onMount } from 'svelte';
	let intersecting = false;
	let container;

	onMount(() => {
		if (typeof IntersectionObserver !== 'undefined') {
			const callback = (entries) => {
				intersecting = entries[0].isIntersecting;
			};

			const observer = new IntersectionObserver(callback, { rootMargin: '0px' });

			observer.observe(container);
			return () => observer.unobserve(container);
		}

		function handler() {
			if (intersecting) {
				console.log(intersecting);
				window.removeEventListener('scroll', handler);
			}
		}

		window.addEventListener('scroll', handler);
	});
</script>

<div bind:this={container}>
	<slot {intersecting} />
</div>

<style>
	div {
		width: 100%;
		height: 100%;
	}
</style>
