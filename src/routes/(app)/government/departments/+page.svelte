<script>
	import { departments } from '$lib/data/government.data';
	import ChevronRight from '$lib/icons/chevron-right.svelte';
	import { info } from '$lib/snippets/info.snippet.svelte';
	import { source } from '$lib/snippets/source.snippet.svelte';
</script>

<div class="wrapper">
	{@render info(departments.heading, departments.description)}
	<ul class="departments">
		{#each departments.data as department (department)}
			<li class="department">
				<div class="icon">
					<ChevronRight />
				</div>
				{department}
			</li>
		{/each}
	</ul>
	{@render source(
		departments.source.description,
		departments.source.linkLabel,
		departments.source.linkURL
	)}
</div>

<style>
	.wrapper {
		display: flex;
		flex-direction: column;
		gap: 2.5rem;

		.departments {
			display: flex;
			flex-direction: column;
			gap: 0.5rem;

			.department {
				display: grid;
				grid-template-columns: 18px 1fr;
				align-items: center;
				gap: 0.5rem;

				/* FIX: (minor) dynamically resizing makes some departments look funky */
				.icon {
					margin-top: 0.25rem;
					align-self: start;
				}
			}
		}
	}

	@media (min-width: 900px) {
		.wrapper {
			.departments {
				display: grid;
				grid-template-columns: 1fr 1fr;
				gap: 0.5rem 6rem;
			}
		}
	}
</style>
