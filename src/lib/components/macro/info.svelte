<script>
	import Info from "@lucide/svelte/icons/info";

	let { text } = $props();
</script>

<div class="wrapper">
	<div class="icon">
		<Info />
	</div>
	<p>{text}</p>
</div>

<style>
	.wrapper {
		margin-top: 2rem;
		display: grid;
		grid-template-columns: 20px 1fr;
		gap: 0.75rem;

		.icon {
			margin-top: 0.125rem;
		}
	}
</style>
