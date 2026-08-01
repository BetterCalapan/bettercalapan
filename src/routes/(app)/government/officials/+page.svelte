<script>
	import { officials, executive, legislative } from '$lib/data/government.data';
	import { info } from '$lib/snippets/info.snippet.svelte';
	import { source } from '$lib/snippets/source.snippet.svelte';
	import Clock from '@lucide/svelte/icons/clock';
	import Email from '@lucide/svelte/icons/mail';
	import Phone from '@lucide/svelte/icons/phone';
	import Shield from '@lucide/svelte/icons/shield';
	import User from '@lucide/svelte/icons/user';
</script>

<div class="wrapper">
	{@render info(officials.heading, officials.description)}
	<div class="branch executive-branch">
		<h2 class="heading">Executive Branch</h2>
		<div class="officials">
			{#each executive as official (official.name)}
				<div class="official">
					<h3 class="title">{official.title}</h3>
					<p class="name">
						<User />
						{official.name}
					</p>
					<p class="email">
						<Email />
						{official.email}
					</p>
					<p class="phone-number">
						<Phone />
						{official.phoneNumber}
					</p>
					<p class="working-hours">
						<Clock />
						{official.workingHours}
					</p>
				</div>
			{/each}
		</div>
	</div>
	<div class="branch legislative-branch">
		<h2 class="heading">Legislative Branch</h2>
		<div class="officials">
			{#each legislative as official (official.name)}
				<div class="official">
					<h3 class="title">{official.title}</h3>
					<p class="name">
						<User />
						{official.name}
					</p>
					<p class="description">
						<Shield />
						{official.description}
					</p>
				</div>
			{/each}
		</div>
	</div>
	{@render source(
		officials.source.description,
		officials.source.linkLabel,
		officials.source.linkURL
	)}
</div>

<style>
	.wrapper {
		display: flex;
		flex-direction: column;
		gap: 2rem;

		.branch {
			margin-top: -0.25rem;

			h2 {
				margin-bottom: 0.75rem;
			}
			.officials {
				display: grid;
				grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
				gap: 1rem;

				.official {
					padding: 1.5rem 1.75rem;
					display: flex;
					flex-direction: column;
					gap: 0.25rem;
					background-color: var(--neutral-1);
					border-radius: 2rem;

					.title {
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
	}

	@media (min-width: 900px) {
		.wrapper {
			.branch {
				h2 {
					font-size: 2rem;
				}
				.officials {
					gap: 1.5rem;
				}
			}
		}
	}
</style>
