<script lang="ts">
	import logo from '$lib/assets/logo.svg';
	import NavigationMenu from './nav-menu.svelte';
	import NavigationMenuMobile from './nav-menu-mobile.svelte';
</script>

<header>
	<div class="wrapper">
		<div class="left">
			<img src={logo} alt="BetterCalapan logo" width="32" height="32" />
			<h1>BetterCalapan</h1>
		</div>
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
			.left {
				display: grid;
				grid-template-columns: 40px 1fr;
				align-items: center;
				gap: 0.5rem;

				img {
					width: 36px;
					height: 36px;
					border-radius: 0.75rem;
				}
				h1 {
					font-size: 1.25rem;
				}
			}

		}
	}
</style>
