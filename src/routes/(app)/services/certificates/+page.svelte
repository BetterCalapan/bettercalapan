<script>
	import { resolve } from '$app/paths';
	import { certificates } from '$lib/data/services.data';
	import ArrowRight from '$lib/icons/arrow-right.svelte';
	import { info } from '$lib/snippets/info.snippet.svelte';
</script>

<div class="wrapper">
	{@render info(certificates.heading, certificates.description)}
	<ul class="certificates-list">
		{#each certificates.data as certificate (certificate.name)}
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
		<a class="link" href={resolve('/(app)/contact')}>City Civil Registry</a>
		and ask for what you need.
	</p>
</div>

<style>
	.wrapper {
		display: flex;
		flex-direction: column;

		.certificates-list {
			margin: 2rem 0;
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
