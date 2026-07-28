<script lang="ts">
	import Search from '$lib/icons/search.svelte';
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
