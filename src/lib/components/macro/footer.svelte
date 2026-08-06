<script lang="ts">
	import { resolve } from "$app/paths";
	import { resolveRoute } from "$lib/utils/paths";
	import { resources } from "$lib/data/data";
	import { government } from "$lib/data/government.data";
	import { services } from "$lib/data/services.data";
	import Facebook from "$lib/icons/facebook.svelte";
	import GitHub from "$lib/icons/github.svelte";

	const prefix = "/(app)";
	const others = [
		{
			name: "Terms of Use",
			url: `${prefix}/terms-of-use`
		},
		{
			name: "Privacy Policy",
			url: `${prefix}/privacy-policy`
		},
		{
			name: "Accessibility",
			url: `${prefix}/accessibility`
		}
	];
</script>

<footer>
	<div class="wrapper-top">
		<hr class="separator" />
	</div>
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
				<a
					class="social"
					href="https://facebook.com/bettercalapan.org"
					target="_blank"
					rel="external noopener noreferrer"
					aria-label="Go to Facebook page"
				>
					<Facebook />
				</a>
				<a
					class="social"
					href="https://github.com/BetterCalapan/bettercalapan"
					target="_blank"
					rel="external noopener noreferrer"
					aria-label="Go to GitHub repository"
				>
					<GitHub />
				</a>
			</div>
		</div>
		<div class="footer-sections">
			<div class="footer-section">
				<h1>Services</h1>
				<ul class="footer-section-list">
					{#each services.data as service (service.name)}
						<li class="service">
							<a href={resolveRoute(service.url)} class="link">{service.name}</a>
						</li>
					{/each}
				</ul>
			</div>
			<div class="footer-section">
				<h1>Government</h1>
				<ul class="footer-section-list">
					{#each government.data as gov (gov.name)}
						<li class="government">
							<a href={resolveRoute(gov.url)} class="link">{gov.name}</a>
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
			<div class="footer-section">
				<h1>Others</h1>
				<ul class="footer-section-list">
					{#each others as other (other.name)}
						<li class="other">
							<a class="link" href={resolveRoute(other.url)}>{other.name}</a>
						</li>
					{/each}
				</ul>
			</div>
		</div>
	</div>
	<div class="wrapper-bottom">
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
					GNU GPL v3.0
				</a>
			</p>
			<div class="links">
				<a
					class="link"
					href="https://github.com/BetterCalapan/bettercalapan"
					target="_blank"
					rel="external noopener noreferrer"
				>
					GitHub
				</a>
				<a class="link" href={resolve("/sitemap")}> Sitemap </a>
			</div>
		</div>
	</div>
</footer>

<style>
	footer {
		padding: 1rem;
		display: grid;
		place-items: center;
		gap: 3rem;

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
						color: var(--accent-alt);
					}
					.cost.people {
						color: var(--green);
					}
				}
				.socials {
					display: flex;
					flex: 1;
					gap: 1rem;

					.social {
						align-self: end;
					}
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
					color: var(--fg);

					h1 {
						font-size: 1.125rem;
					}
					.footer-section-list {
						display: flex;
						flex-direction: column;
						gap: 0.25rem;

						li {
							.link {
								color: var(--fg-alt);

								&:hover {
									text-decoration: underline;
								}
							}
						}
					}
				}
			}
		}

		.wrapper-top,
		.wrapper-bottom {
			margin-bottom: 1rem;
			width: 100%;
			max-width: 80rem;
			display: flex;
			flex-direction: column;
			gap: 2rem 0.5rem;

			.info {
				display: flex;
				flex-direction: column;
				align-items: start;
				gap: 0.25rem;

				.links {
					display: flex;
					align-items: center;
					gap: 2rem;
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
		.wrapper-top {
			margin-bottom: 0;
		}
	}

	@media (min-width: 800px) {
		footer {
			.wrapper-bottom {
				.info {
					flex-direction: row;
					justify-content: space-between;
					align-items: start;
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
		}
	}
</style>
