<script>
	import { resolve } from '$app/paths';
	import { certificates } from '$lib/data/services.data';
	import { info } from '$lib/snippets/info.snippet.svelte';
	import { listItem } from '$lib/snippets/list-item.snippet.svelte';
</script>

<div class="wrapper">
	{@render info(certificates.heading, certificates.description)}
	<ul class="certificates-list">
		{#each certificates.data as certificate (certificate.name)}
			{@render listItem(certificate.name, certificate.url)}
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
