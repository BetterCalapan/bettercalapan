<script lang="ts">
	import { resolve } from '$app/paths';
	import ArrowRight from '$lib/icons/arrow-right.svelte';
	import Search from '$lib/icons/search.svelte';
	import { services, governments, legislatives } from '$lib/data/data';
	import { pageSections } from '$lib/data/header.data';
</script>

<section class="hero">
	<div class="wrapper">
		<h1 class="heading">
			The better portal to find
			<span class="city marked accent-mark">Calapan</span>
			services and information
		</h1>
		<div class="search">
			<label for="search">Search</label>
			<div class="search-input">
				<input type="text" name="search" id="search" />
				<button class="search-button" aria-label="Search button">
					<Search />
				</button>
			</div>
		</div>
	</div>
</section>
<!-- TODO: make this dynamic -->
<section class="popular">
	<h1 class="heading">Most searched</h1>
	<div class="most-searched-resources">
		<div class="resource">
			<ArrowRight />
			<a href={resolve('/services/certificates/birth-certificate')}>Birth certificate</a>
		</div>
		<div class="resource">
			<ArrowRight />
			<a href={resolve('/services/business/business-permit')}>Business permit</a>
		</div>
		<div class="resource">
			<ArrowRight />
			<a href={resolve('/services/tax-payments/real-property-tax')}>Real property tax</a>
		</div>
		<div class="resource">
			<ArrowRight />
			<a href={resolve('/services/certificates/barangay-clearance')}>Barangay clearance</a>
		</div>
		<div class="resource">
			<ArrowRight />
			<a href={resolve('/services/certificates/barangay-id')}>Barangay ID</a>
		</div>
		<div class="resource">
			<ArrowRight />
			<a href={resolve('/services/certificates/drivers-license')}>Driver's license</a>
		</div>
	</div>
</section>

<section class="general">
	<div class="services">
		<h1 class="heading">Services</h1>
		<ul class="services-list">
			{#each services as service (service.name)}
				<li class="service">
					<a class="link" href={resolve(service.url)}>
						{service.name}
					</a>
				</li>
			{/each}
		</ul>
	</div>
	<div class="multi-wrapper">
		<div class="governments">
			<h1 class="heading">Government</h1>
			<ul class="government-list">
				{#each governments as government (government.name)}
					<li class="government">
						<a class="link" href={resolve(government.url)}>
							{government.name}
						</a>
					</li>
				{/each}
			</ul>
		</div>
		<div class="legislatives">
			<h1 class="heading">Legislatives</h1>
			<ul class="legislative-list">
				{#each legislatives as legislative (legislative.name)}
					<li class="legislative">
						<a class="link" href={resolve(legislative.url)}>
							{legislative.name}
						</a>
					</li>
				{/each}
			</ul>
		</div>
	</div>
	<div class="others">
		<h1 class="heading">Others</h1>
		<ul class="others-list">
			{#each pageSections.slice(3) as other (other.name)}
				<li class="other">
					<a class="link" href={resolve(other.url)}>
						{other.name[0].toUpperCase() + other.name.slice(1)}
					</a>
				</li>
			{/each}
		</ul>
	</div>
</section>

<style>
	.marked {
		width: fit-content;
		padding: 0px 12px;
		position: relative;
		z-index: 0;
		user-select: none;
		text-align: center;
		white-space: nowrap;
	}
	.marked:before {
		content: '';
		position: absolute;
		inset: 0;
		z-index: -1;
		border-radius: 3px 5px 3px 5px;
		background: var(--accent);
	}
	.marked.accent-mark:before {
		rotate: 1.1deg;
		scale: 1.05;
		transform: skew(-5deg);
		--mark-color: 255 85 0;
		--mark-bg-angle: 150deg;
	}

	.hero {
		padding: 0rem 0 3rem;
		display: grid;
		place-items: center;
		background-color: var(--bg);

		.wrapper {
			width: 100%;
			max-width: 80rem;
			display: flex;
			flex-direction: column;
			gap: 2rem;

			.heading {
				max-width: 50rem;
				color: var(--fg);
				font-weight: 700;
				font-size: 2.5rem;
				line-height: 1.25;
			}
			.search {
				display: flex;
				flex-direction: column;
				gap: 0.75rem;
				max-width: 36rem;

				label {
					color: var(--fg);
					font-size: 1.125rem;
					font-weight: 600;
				}
				.search-input {
					display: grid;
					grid-template-columns: 1fr 3.25rem;

					input {
						padding: 0 1.25rem;
						background-color: var(--neutral-3);
						border: none;
						border-radius: 2rem 0 0 2rem;
						font-size: 1.125rem;
					}
					.search-button {
						display: grid;
						place-items: center;
						aspect-ratio: 1 / 1;
						background-color: var(--neutral-1);
						border: none;
						border-radius: 0 2rem 2rem 0;
						transition: background-color 0.3s ease;

						&:hover {
							background-color: var(--neutral-2);
						}
					}
				}
			}
		}
	}

	.popular {
		display: flex;
		flex-direction: column;
		gap: 1rem;

		.most-searched-resources {
			display: flex;
			flex-wrap: wrap;
			gap: 1rem;
			max-width: 50rem;

			.resource {
				padding: 0.75rem 1.5rem 0.75rem 1.25rem;
				width: max-content;
				display: flex;
				align-items: center;
				gap: 0.5rem;
				background-color: var(--neutral-3);
				border-radius: 2rem;
				transition: background-color 0.3s ease;

				&:hover {
					background-color: var(--neutral-1);
				}
			}
		}
	}

	.general {
		margin-top: 2.75rem;
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
		gap: 3rem;

		.multi-wrapper {
			display: flex;
			flex-direction: column;
			gap: 3rem;
		}

		div {
			display: flex;
			flex-direction: column;
			gap: 1rem;
		}

		ul {
			display: flex;
			flex-direction: column;
			gap: 1rem;
		}

		li {
			display: flex;
			align-items: center;
			justify-content: space-between;
			border-bottom: 1px dotted var(--fg);
			transition:
				font-weight 0.3s ease,
				border-bottom 0.3s ease;

			&:hover {
				/* background-color: var(--accent); */
				font-weight: 600;
				border-bottom: 1px solid;
			}

			a {
				width: 100%;
			}
		}
	}

	@media (min-width: 800px) {
		.hero {
			.wrapper {
				.heading {
					font-size: 3.5rem;
				}
			}
		}
	}
</style>
