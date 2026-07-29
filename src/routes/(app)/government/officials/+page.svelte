<script>
	import User from '$lib/icons/user.svelte';
	import Email from '$lib/icons/email.svelte';
	import Phone from '$lib/icons/phone.svelte';
	import Clock from '$lib/icons/clock.svelte';
	import Shield from '$lib/icons/shield.svelte';
	import Info from '$lib/icons/info.svelte';

	const executive = [
		{
			title: 'Mayor',
			name: 'Doy C. Leachon',
			email: 'lgu.calapancity@gmail.com',
			phoneNumber: '(043) 288-7508',
			workingHours: 'Mon-Fri: 8:00 AM - 5:00 PM'
		},
		{
			title: 'Vice Mayor',
			name: 'Rommel "Bim" Aquino Ignacio',
			email: 'lgu.calapancity@gmail.com',
			phoneNumber: '(043) 288-7508',
			workingHours: 'Mon-Fri: 8:00 AM - 5:00 PM'
		}
	];

	const legislative = [
		{
			title: 'City Councilor',
			name: 'Atty. Bel Tanyag-Panaligan',
			description: 'Laws & Rules'
		},
		{
			title: 'City Councilor',
			name: 'Rius Agua',
			description: 'Education'
		},
		{
			title: 'City Councilor',
			name: 'Mylene De Jesus',
			description: 'Health & Sanitation'
		},
		{
			title: 'City Councilor',
			name: 'Rap Infantado',
			description: 'Commerce & Industry'
		},
		{
			title: 'City Councilor',
			name: 'Joseph Umali',
			description: 'Agriculture'
		},
		{
			title: 'City Councilor',
			name: 'Genie Fortu',
			description: 'Fisheries'
		},
		{
			title: 'City Councilor',
			name: 'Jun Cabailo',
			description: 'Tourism'
		},
		{
			title: 'City Councilor',
			name: 'Atty. Ricka Plata Goco',
			description: 'Human Rights'
		},
		{
			title: 'City Councilor',
			name: 'RC Concepcion',
			description: 'Economic Enterprises'
		},
		{
			title: 'City Councilor',
			name: 'Atty. Jel Magsuci',
			description: 'Women & Family'
		}
	];
</script>

<div class="wrapper">
	<div class="brief-info">
		<h1 class="heading">Officials</h1>
		<p class="description">
			The elected officials of Calapan in the local executive branch and local legislative branch.
		</p>
	</div>
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
	<div class="source">
		<Info />
		<p>
			Source from
			<a
				class="source-link"
				href="https://ph.rappler.com/elections/2025/local-race/oriental-mindoro/calapan-city"
				target="_blank"
				rel="external noopener noreferrer"
			>
				Rappler
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
				margin-bottom: 0.5rem;
				font-size: 3rem;
				line-height: 1.25;
			}
		}

		.branch {
			h2 {
				margin-bottom: 0.75rem;
				font-size: 2rem;
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
					border-radius: 2rem; /* NOTE: unsupported browsers may see some funky stuff */

					.title {
						margin-bottom: 1rem;
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

		.source {
			display: flex;
			align-items: center;
			gap: 0.75rem;

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
			.branch {
				.officials {
					gap: 1.5rem;
				}
			}
		}
	}
</style>
