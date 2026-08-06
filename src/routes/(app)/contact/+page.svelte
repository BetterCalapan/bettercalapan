<script lang="ts">
	import { info } from "$lib/snippets/info.snippet.svelte";
	import Email from "@lucide/svelte/icons/mail";
	import Phone from "@lucide/svelte/icons/phone";
	import Smartphone from "@lucide/svelte/icons/smartphone";

	const general = [
		{
			name: "mbscalapanofficial@gmail.com",
			type: "email"
		},
		{
			name: "043-288-7508",
			type: "landline"
		}
	];

	const emergencyHotlines = [
		{
			name: "City Health and Sanitation Department",
			contact: [
				{
					name: "(043) 288-7408",
					type: "landline"
				},
				{
					name: "0908-366-1556",
					type: "mobile"
				}
			]
		},
		{
			name: "CDRRMD (Rescue/Fire)",
			contact: [
				{
					name: "0999-735-6447",
					type: "mobile"
				},
				{
					name: "0915-744-9698",
					type: "mobile"
				},
				{
					name: "0966-029-9777",
					type: "mobile"
				},
				{
					name: "(043) 288-6111",
					type: "landline"
				},
				{
					name: "(043) 288-7521",
					type: "landline"
				}
			]
		},
		{
			name: "Calapan City Police Station (PNP)",
			contact: [
				{
					name: "0998-598-5813",
					type: "mobile"
				},
				{
					name: "0906-179-1105",
					type: "mobile"
				}
			]
		},
		{
			name: "Calapan City Fire Station (BFP)",
			contact: [
				{
					name: "0915-603-1561",
					type: "mobile"
				},
				{
					name: "(043) 288-7777",
					type: "landline"
				}
			]
		},
		{
			name: "Tamaraw Fire Volunteer",
			contact: [
				{
					name: "0917-534-2419",
					type: "mobile"
				},
				{
					name: "0917-136-4603",
					type: "mobile"
				},
				{
					name: "0925-812-9639",
					type: "mobile"
				}
			]
		},
		{
			name: "PNP EOD K9 Unit (Explosives Related Incident)",
			contact: [
				{
					name: "0916-695-0155",
					type: "mobile"
				}
			]
		}
	];

	const medicalEmergencyHotlines = [
		{
			name: "Oriental Mindoro Provincial Hospital",
			contact: [
				{
					name: "0963-783-2169",
					type: "mobile"
				},
				{
					name: "(043) 288-3077",
					type: "landline"
				},
				{
					name: "(043) 288-7193",
					type: "landline"
				}
			]
		},
		{
			name: "MMG Hospital",
			contact: [
				{
					name: "0923-709-5439",
					type: "mobile"
				},
				{
					name: "(043) 288-2275",
					type: "landline"
				}
			]
		},
		{
			name: "Maria Estrella General Hospital",
			contact: [
				{
					name: "0917-702-5210",
					type: "mobile"
				},
				{
					name: "(043) 286-7386 / 88",
					type: "landline"
				}
			]
		},
		{
			name: "Luna Goco Medical Center",
			contact: [
				{
					name: "0919-097-9155",
					type: "mobile"
				},
				{
					name: "0947-897-0588",
					type: "mobile"
				},
				{
					name: "(043) 286-7208",
					type: "landline"
				}
			]
		},
		{
			name: "Mindoro Medical Center",
			contact: [
				{
					name: "0917-567-8102",
					type: "mobile"
				}
			]
		},
		{
			name: "Hospital of the Holy Cross",
			contact: [
				{
					name: "(043) 288-4470",
					type: "landline"
				}
			]
		},
		{
			name: "Sta. Maria Village Hospital",
			contact: [
				{
					name: "0908-374-9505",
					type: "mobile"
				}
			]
		}
	];
</script>

<div class="page-wrapper">
	{@render info("Contact", "We're here to help. Reach out to us through any of these channels.")}
	<ul class="general">
		{#each general as contact (contact.name)}
			<li>
				{#if contact.type == "email"}
					<Email />
				{:else if contact.type == "landline"}
					<Phone />
				{/if}
				<p>{contact.name}</p>
			</li>
		{/each}
	</ul>
	<div class="section office-hours">
		<h2>Office Hours</h2>
		<div class="content">
			<div class="open">
				<p class="name">Monday - Friday</p>
				<p class="time">8:00 AM - 5:00 PM</p>
			</div>
			<div class="break">
				<p class="name">Lunch Break</p>
				<p class="time">12:00 AM - 1:00 PM</p>
			</div>
			<div class="open">
				<p class="name">Saturday & Sunday</p>
				<p class="time">Closed</p>
			</div>
			<div class="open">
				<p class="name">National & Local Holidays</p>
				<p class="time">Closed</p>
			</div>
		</div>
	</div>
	<div class="hotlines">
		<div class="section hotline-section emergency-hotlines">
			<h2>Emergency Hotlines</h2>
			<ul class="content">
				{#each emergencyHotlines as eh, i (eh.name)}
					<li>
						<div>
							<h3>{eh.name}</h3>
							<ul class="contacts">
								{#each emergencyHotlines[i].contact as contact (contact.name)}
									<li>
										{#if contact.type == "landline"}
											<Phone />
										{:else if contact.type == "mobile"}
											<Smartphone />
										{/if}
										{contact.name}
									</li>
								{/each}
							</ul>
						</div>
					</li>
				{/each}
			</ul>
		</div>
		<div class="section hotline-section medical-emergency-hotlines">
			<h2>Medical Emergency Hotlines</h2>
			<ul class="content">
				{#each medicalEmergencyHotlines as eh, i (eh.name)}
					<li>
						<div>
							<h3>{eh.name}</h3>
							<ul class="contacts">
								{#each medicalEmergencyHotlines[i].contact as contact (contact.name)}
									<li>
										{#if contact.type == "landline"}
											<Phone />
										{:else if contact.type == "mobile"}
											<Smartphone />
										{/if}
										{contact.name}
									</li>
								{/each}
							</ul>
						</div>
					</li>
				{/each}
			</ul>
		</div>
	</div>
</div>

<style>
	.page-wrapper {
		display: flex;
		flex-direction: column;
		gap: 2rem;

		.hotlines {
			display: flex;
			flex-direction: column;
			gap: 2rem;
		}

		.general {
			display: flex;
			flex-direction: column;
			gap: 0.25rem;

			li {
				display: grid;
				grid-template-columns: 18px 1fr;
				align-items: center;
				gap: 0.75rem;
			}
		}

		.office-hours {
			display: flex;
			flex-direction: column;
			gap: 0.5rem;

			.content {
				display: grid;
				grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
				gap: 1rem;

				div {
					padding: 1.5rem;
					background-color: var(--neutral-1);
					border-radius: 2rem;
				}
			}
		}

		.hotline-section {
			.content {
				padding-left: 1.25rem;
				margin-top: 1rem;
				display: flex;
				flex-direction: column;
				gap: 1rem;
				list-style-type: disc;

				h3 {
					font-weight: 400;
					font-size: 1.125rem;
					line-height: 1.25;
					margin-bottom: 0.5rem;
				}

				.contacts {
					padding-left: 0.5rem;
					display: flex;
					flex-direction: column;
					gap: 0.25rem;

					li {
						padding: 0;
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
		.page-wrapper {
			.hotlines {
				grid-template-columns: 1fr 1fr;
				display: grid;
				align-items: start;
			}
		}

		h2 {
			font-size: 2rem;
		}
	}
</style>
