<script lang="ts">
	import { resolve } from '$app/paths';
	import { services, bettergovProjects, governments, resources } from '$lib/data/data';
	import Facebook from '$lib/icons/facebook.svelte';
	import GitHub from '$lib/icons/github.svelte';
</script>

<footer>
	<div class="wrapper">
		<div class="info">
			<h1>BetterCalapan</h1>
			<p class="description">
				An open-source initiative providing transparent access to municipal services, local
				legislation, and public data for the people of Calapan.
			</p>
			<div class="costs">
				<p>Cost to host this site = <span class="cost build">₱ 700</span></p>
				<p>Cost to the people of Calapan = <span class="cost people">₱ 0</span></p>
			</div>
			<div class="socials">
				<Facebook />
				<GitHub />
			</div>
		</div>
		<div class="footer-sections">
			<div class="footer-section">
				<h1>Services</h1>
				<ul class="footer-section-list">
					{#each services as service (service.name)}
						<li class="service">
							<a href={resolve(service.url)} class="link">{service.name}</a>
						</li>
					{/each}
				</ul>
			</div>
			<div class="footer-section">
				<h1>BetterGov</h1>
				<ul class="footer-section-list">
					{#each bettergovProjects as bettergovProject (bettergovProject.name)}
						<li class="bettergov">
							<a
								class="link"
								href={bettergovProject.url}
								target="_blank"
								rel="external noopener noreferrer">{bettergovProject.name}</a
							>
						</li>
					{/each}
				</ul>
			</div>
			<div class="footer-section">
				<h1>Government</h1>
				<ul class="footer-section-list">
					{#each governments as government (government.name)}
						<li class="government">
							<a href={resolve(government.url)} class="link">{government.name}</a>
						</li>
					{/each}
				</ul>
			</div>
			<div class="footer-section">
				<h1>Resources</h1>
				<ul class="footer-section-list">
					{#each resources as resource (resource.name)}
						<li class="resource">
							<a class="link" href={resource.url} target="_blank" rel="external noopener noreferrer"
								>{resource.name}</a
							>
						</li>
					{/each}
				</ul>
			</div>
		</div>
	</div>
	<div class="wrapper-additional">
		<hr class="separator" />
		<div class="info">
			<p>
				Licensed under
				<a
					class="link"
					href="https://www.gnu.org/licenses/gpl-3.0.en.html"
					target="_blank"
					rel="external noopener noreferrer"
				>
					GNU General Public License Version 3
				</a>.
			</p>
			<div class="links">
				<a
					class="link"
					href="https://github.com/arvingarciabtw/bettercalapan"
					target="_blank"
					rel="external noopener noreferrer"
				>
					GitHub
				</a>
				<a class="link" href={resolve('/sitemap')}> Sitemap </a>
				<p>v0.0.0</p>
			</div>
		</div>
	</div>
</footer>

<style>
	footer {
		padding: 1rem;
		display: grid;
		place-items: center;
		gap: 4rem;

		.wrapper {
			width: 100%;
			max-width: 80rem;

			display: flex;
			flex-direction: column;
			gap: 2rem;

			.info {
				display: flex;
				flex-direction: column;
				gap: 1rem;

				h1 {
					font-size: 1.125rem;
				}
				.description {
					max-width: 635px;
				}
				.costs {
					.cost {
						font-weight: 600;
					}
					.cost.build {
						color: var(--accent);
					}
					.cost.people {
						color: var(--green);
					}
				}
				.socials {
					display: flex;
					gap: 1rem;
				}
			}
			.footer-sections {
				display: grid;
				grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
				gap: 2rem;

				.footer-section {
					display: flex;
					flex-direction: column;
					gap: 1rem;
					color: var(--fg-alt);

					h1 {
						font-size: 1.125rem;
					}
					.footer-section-list {
						display: flex;
						flex-direction: column;
						gap: 0.25rem;

						li {
							color: var(--fg-alt);
						}
					}
				}
			}
		}

		.wrapper-additional {
			width: 100%;
			max-width: 80rem;
			display: flex;
			flex-direction: column;
			gap: 1rem;

			.info {
				display: flex;
				flex-direction: column;
				align-items: start;
				gap: 1.25rem;

				.links {
					display: flex;
					align-items: center;
					gap: 1rem;
				}
				.link {
					font-size: 1.125rem;
					text-decoration: underline;

					&:hover {
						text-decoration: none;
					}
				}
			}
		}
	}

	@media (min-width: 1300px) {
		footer {
			.wrapper {
				display: grid;
				grid-template-columns: 24rem 1fr;
				gap: 6rem;
			}

			.wrapper-additional {
				.info {
					flex-direction: row;
					justify-content: space-between;
					align-items: start;
				}
			}
		}
	}
</style>
