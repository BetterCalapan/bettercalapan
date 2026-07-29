<script>
	import { resolve } from '$app/paths';
	import { governments } from '$lib/data/data';
	import ArrowRight from '$lib/icons/arrow-right.svelte';
</script>

<div class="wrapper">
	<div class="brief-info">
		<h1 class="heading">Government</h1>
		<p class="description">
			See information on elected officials, municipal departments, and the 62 barangays of Calapan.
		</p>
	</div>
	<ul class="government-list">
		{#each governments as government (government.name)}
			<li class="government-item">
				<a href={resolve(government.url)} class="link">
					<ArrowRight />
					{government.name}</a
				>
			</li>
		{/each}
	</ul>
</div>

<style>
	.wrapper {
		display: flex;
		flex-direction: column;
		gap: 2.5rem;

		.brief-info {
			.heading {
				font-size: 3rem;
			}
		}
		.government-list {
			display: flex;
			flex-direction: column;
			gap: 0.5rem;

			.government-item {
				width: max-content;
				border-bottom: 1px dotted var(--fg);
				transition: font-weight 0.3s ease;

				&:hover {
					border-bottom: 1px solid;
					font-weight: 600;
				}

				.link {
					display: flex;
					align-items: center;
					gap: 0.5rem;
				}
			}
		}
	}
</style>
