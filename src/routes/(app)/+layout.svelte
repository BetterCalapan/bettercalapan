<script lang="ts">
	import '../../global.css';
	import favicon from '$lib/assets/logo.png';
	import Header from '$lib/components/macro/header.svelte';
	import Footer from '$lib/components/macro/footer.svelte';

	let { children } = $props();
</script>

<svelte:head>
	<!-- FIX: replace with custom favicon eventually -->
	<link rel="icon" href={favicon} />
</svelte:head>

<Header />
<main>
	<div class="main-wrapper">
		{@render children()}
	</div>
</main>
<Footer />

<style>
	main {
		padding: 1rem 1rem 2.5rem;
		flex: 1;
		display: flex;
		flex-direction: column;
		align-items: center;

		.main-wrapper {
			width: 100%;
			max-width: 80rem;
		}
	}
</style>
