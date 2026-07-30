<script>
	import { departments } from '$lib/data/government.data';
	import ChevronRight from '$lib/icons/chevron-right.svelte';
	import Info from '$lib/icons/info.svelte';
</script>

<div class="wrapper">
	<div class="brief-info">
		<h1 class="heading">Departments</h1>
		<p class="description">Municipal offices providing services to citizens.</p>
	</div>
	<ul class="departments">
		{#each departments as department (department)}
			<li class="department">
				<div class="icon">
					<ChevronRight />
				</div>
				{department}
			</li>
		{/each}
	</ul>
	<div class="source">
		<div class="icon">
			<Info />
		</div>
		<p>
			Source from the official website's
			<a
				class="source-link"
				href="https://cityofcalapan.gov.ph/"
				target="_blank"
				rel="external noopener noreferrer"
			>
				directory
			</a>.
		</p>
	</div>
</div>

<style>
	.wrapper {
		display: flex;
		flex-direction: column;
		gap: 2.5rem;

		.brief-info {
			.heading {
				margin-left: -2px; /* for better alignment*/
				margin-bottom: 0.5rem;
				font-size: 3rem;
				line-height: 1.25;
			}
		}

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

		.source {
			display: grid;
			grid-template-columns: 18px 1fr;
			align-items: start;
			gap: 0.75rem;

			.icon {
				margin-top: 0.25rem;
			}

			.source-link {
				text-decoration: underline;

				&:hover {
					text-decoration: none;
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
