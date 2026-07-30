<script>
	import { barangays } from '$lib/data/government.data';
	import Info from '$lib/icons/info.svelte';
	import Phone from '$lib/icons/phone.svelte';
	import User from '$lib/icons/user.svelte';
</script>

<div class="wrapper">
	<div class="brief-info">
		<h1 class="heading">Barangays</h1>
		<p class="description">The {barangays.length} barangays serving Calapeños.</p>
	</div>
	<ul class="barangays">
		{#each barangays as barangay (barangay.name)}
			<li class="barangay">
				<h1 class="name">{barangay.name}</h1>
				<p class="captain">
					<User />
					{barangay.captain}
				</p>
				<p class="contact">
					<Phone />
					{barangay.phoneNumber}
				</p>
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
				href="https://cityofcalapan.gov.ph/barangays/"
				target="_blank"
				rel="external noopener noreferrer"
			>
				barangays
			</a> page.
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

		.barangays {
			display: flex;
			flex-direction: column;
			gap: 0.5rem;

			.barangay {
				padding: 1.5rem 1.75rem;
				background-color: var(--neutral-1);
				border-radius: 2rem;

				h1 {
					margin-bottom: 1rem;
					font-size: 1.25rem;
					font-weight: 600;
				}
				p {
					display: grid;
					grid-template-columns: 18px 1fr;
					align-items: center;
					gap: 0.75rem;
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
			.barangays {
				.barangay {
					padding: 0.5rem 0 0.5rem;
					display: grid;
					grid-template-columns: repeat(3, 1fr);
					align-items: center;
					background: none;
					border-bottom: 1px dotted var(--fg);
					border-radius: 0;

					h1 {
						margin: 0;
					}
				}
			}
		}
	}
</style>
