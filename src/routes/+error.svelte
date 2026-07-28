<script>
	import '../global.css';
	import favicon from '$lib/assets/favicon.svg';
	import { resolve } from '$app/paths';
</script>

<svelte:head>
	<!-- FIX: replace with custom favicon eventually -->
	<link rel="icon" href={favicon} />
</svelte:head>

<div class="wrapper">
	<div class="content">
		<p class="status-code">404</p>
		<h1 class="status-msg">Page not found</h1>
		<p class="description">The page doesn't exist or it might have been moved.</p>
		<a class="go-back" href={resolve('/')}>Back to home</a>
	</div>
</div>

<style>
	.wrapper {
		min-height: 100dvh;
		display: grid;
		place-items: center;
		padding: 1rem;
		text-align: center;

		.status-code {
			color: var(--accent);
			font-weight: 600;
		}
		.status-msg {
			font-size: 3.75rem;
		}
		a {
			display: inline-block;
			margin-top: 2rem;
			padding: 1rem 2rem;
			background-color: var(--accent);
			color: var(--fg);
			font-weight: 600;
			border-radius: 2rem;
			transition: opacity 0.3s ease;

			&:hover {
				opacity: 0.8;
			}
		}
	}
</style>
