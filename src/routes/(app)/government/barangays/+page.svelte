<script>
	import { barangays } from '$lib/data/government.data';
	import { info } from '$lib/snippets/info.snippet.svelte';
	import { source } from '$lib/snippets/source.snippet.svelte';
	import Phone from '@lucide/svelte/icons/phone';
	import User from '@lucide/svelte/icons/user';
</script>

<div class="wrapper">
	{@render info(barangays.heading, barangays.description)}
	<ul class="barangays">
		{#each barangays.data as barangay (barangay.name)}
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
	{@render source(
		barangays.source.description,
		barangays.source.linkLabel,
		barangays.source.linkURL
	)}
</div>

<style>
	.wrapper {
		display: flex;
		flex-direction: column;
		gap: 2rem;

		.barangays {
			margin-top: -0.5rem;
			display: flex;
			flex-direction: column;
			gap: 0.5rem;

			.barangay {
				padding: 1.5rem 1.75rem;
				background-color: var(--neutral-1);
				border-radius: 2rem;

				h1 {
					margin-bottom: 0.5rem;
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
