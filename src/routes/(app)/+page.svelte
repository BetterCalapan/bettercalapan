<script lang="ts">
	import { resolve } from "$app/paths";
	import { resolveRoute } from "$lib/utils/paths";
	import SearchInput from "$lib/components/macro/search-input.svelte";
	import { government } from "$lib/data/government.data";
	import { services } from "$lib/data/services.data";
	import { pageSections } from "$lib/data/header.data";
	import ArrowRight from "@lucide/svelte/icons/arrow-right";
</script>

<svelte:head>
	<link rel="canonical" href="https://bettercalapan.org/" />
</svelte:head>

<div class="primary-wrapper">
	<div class="left">
		<section class="hero">
			<div class="wrapper">
				<h1 class="heading">
					The better portal to find
					<span class="city marked accent-mark">Calapan</span>
					services and information
				</h1>
				<div class="search">
					<label for="search">Search</label>
					<SearchInput term="" showResults={false} />
				</div>
			</div>
		</section>
		<!-- TODO: make this dynamic -->
		<section class="popular">
			<h1 class="heading">Most searched</h1>
			<div class="most-searched-resources">
				<a class="resource" href={resolve("/(app)/services/certificates/birth-certificate")}>
					<div class="icon">
						<ArrowRight />
					</div>
					<p>Birth certificate</p>
				</a>
				<a class="resource" href={resolve("/(app)/services/business/business-permit")}>
					<div class="icon">
						<ArrowRight />
					</div>
					<p>Business permit</p>
				</a>
				<a class="resource" href={resolve("/(app)/statistics")}>
					<div class="icon">
						<ArrowRight />
					</div>
					<p>Statistics</p>
				</a>
				<a class="resource" href={resolve("/(app)/services/certificates/barangay-clearance")}>
					<div class="icon">
						<ArrowRight />
					</div>
					<p>Barangay clearance</p>
				</a>
				<a class="resource" href={resolve("/(app)/services/certificates/barangay-id")}>
					<div class="icon">
						<ArrowRight />
					</div>
					<p>Barangay ID</p>
				</a>
				<a class="resource" href={resolve("/(app)/services/certificates/drivers-license")}>
					<div class="icon">
						<ArrowRight />
					</div>
					<p>Driver's license</p>
				</a>
			</div>
		</section>
	</div>
	<div class="right">
		<section class="general">
			<div class="services">
				<h1 class="heading">Services</h1>
				<ul class="services-list">
					{#each services.data as service (service.name)}
						<li class="service">
							<a class="link" href={resolveRoute(service.url)}>
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
						{#each government.data as gov (gov.name)}
							<li class="government">
								<a class="link" href={resolveRoute(gov.url)}>
									{gov.name}
								</a>
							</li>
						{/each}
					</ul>
				</div>
			</div>
			<div class="others">
				<h1 class="heading">Others</h1>
				<ul class="others-list">
					{#each pageSections.slice(2) as other (other.name)}
						<li class="other">
							<a class="link" href={resolveRoute(other.url)}>
								{other.name[0].toUpperCase() + other.name.slice(1)}
							</a>
						</li>
					{/each}
				</ul>
			</div>
		</section>
	</div>
</div>

<style>
	.right {
		margin-top: 3rem;
	}
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
		content: "";
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
				max-width: 40rem;

				label {
					color: var(--fg);
					font-size: 1.125rem;
					font-weight: 600;
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

				.icon {
					aspect-ratio: 1 / 1;
					width: 20px;
				}
			}
		}
	}

	.general {
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

			&:hover {
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

	@media (min-width: 1000px) {
		.primary-wrapper {
			display: grid;
			grid-template-columns: 1fr 20rem;
			gap: 10rem;
		}
	}
</style>
