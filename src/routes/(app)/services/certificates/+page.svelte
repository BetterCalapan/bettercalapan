<script>
	import { resolve } from '$app/paths';
	import { certificates } from '$lib/data/services.data';
	import ArrowRight from '$lib/icons/arrow-right.svelte';
</script>

<div class="wrapper">
	<div class="brief-info">
		<h1 class="heading">Certificates</h1>
		<p class="description">
			Official documents for birth, death, marriage, and other vital records.
		</p>
	</div>
	<ul class="certificates-list">
		{#each certificates as certificate (certificate.name)}
			<li class="certificate-item">
				<a href={resolve(certificate.url)} class="link">
					<ArrowRight />
					{certificate.name}</a
				>
			</li>
		{/each}
	</ul>
	<p class="office">
		If you need any of these, head to the
		<a class="link" href={resolve('/services/certificates/city-civil-registry')}
			>City Civil Registry</a
		>
		and ask for what you need.
	</p>
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
		.certificates-list {
			margin-bottom: 2.5rem;
			display: flex;
			flex-direction: column;
			gap: 0.5rem;

			.certificate-item {
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
		.office {
			.link {
				text-decoration: underline;

				&:hover {
					text-decoration: none;
				}
			}
		}
	}
</style>
