<script>
	import { resolve } from '$app/paths';
	import { services } from '$lib/data/data';
	import ArrowRight from '$lib/icons/arrow-right.svelte';
</script>

<div class="wrapper">
	<div class="brief-info">
		<h1 class="heading">Services</h1>
		<p class="description">See the services offered in Calapan, divided into categories.</p>
	</div>
	<ul class="services-list">
		{#each services as service (service.name)}
			<li class="service-item">
				<a href={resolve(service.url)} class="link">
					<ArrowRight />
					{service.name}</a
				>
			</li>
		{/each}
	</ul>
</div>

<style>
	.wrapper {
		display: flex;
		flex-direction: column;

		.brief-info {
			margin-bottom: 2.5rem;
			.heading {
				margin-bottom: 0.5rem;
				font-size: 3rem;
				line-height: 1.25;
			}
		}
		.services-list {
			display: flex;
			flex-direction: column;
			gap: 0.5rem;

			.service-item {
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
