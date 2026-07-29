<script lang="ts">
	import favicon from '$lib/assets/favicon.svg';
	import NavigationMenu from './navigation-menu.svelte';
	import NavigationMenuMobile from './navigation-menu-mobile.svelte';
</script>

<header>
	<div class="wrapper">
		<img src={favicon} alt="BetterCalapan logo" width="32" height="32" />
		<NavigationMenuMobile />
		<NavigationMenu />
	</div>
</header>

<style>
	header {
		padding: 1rem;
		position: relative;
		background-color: var(--bg);
		display: grid;
		place-items: center;

		.wrapper {
			width: 100%;
			max-width: 80rem;
			display: flex;
			align-items: center;
			justify-content: space-between;
		}
	}
</style>
