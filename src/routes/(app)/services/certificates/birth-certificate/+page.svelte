<script>
	import { resolve } from '$app/paths';
	import Accordion from '$lib/components/macro/accordion.svelte';
	import Clock from '$lib/icons/clock.svelte';
	import Landmark from '$lib/icons/landmark.svelte';
	import MapPin from '$lib/icons/map-pin.svelte';
	import Phone from '$lib/icons/phone.svelte';
	import { info } from '$lib/snippets/info.snippet.svelte';
	import { listItem } from '$lib/snippets/list-item.snippet.svelte';
</script>

<div class="wrapper">
	{@render info(
		'Birth Certificate',
		'Official certified copy of birth certificate registered in Calapan.'
	)}
	<div class="content">
		<div class="left">
			<div class="requirements">
				<div class="info">
					<h2>Requirements</h2>
					<p class="description">
						The documents for your application will depend on whether you are an owner or a
						representative.
					</p>
				</div>
				<div class="owner">
					<h3>If you are the owner</h3>
					<ul>
						<li>Valid government-issued ID (original + photocopy)</li>
						<li>₱150 cash per copy</li>
					</ul>
				</div>
				<div class="representative">
					<h3>If you are a representative</h3>
					<ul>
						<li>Authorization letter signed by the owner</li>
						<li>Valid ID of the owner (photocopy)</li>
						<li>Valid ID of the representative (original + photocopy)</li>
						<li>₱150 cash per copy</li>
					</ul>
				</div>
			</div>
			<div class="steps">
				<div class="info">
					<h2>Step-by-step process</h2>
					<p>Follow these steps to request your birth certificate.</p>
				</div>
				<ol>
					<li>
						<h3>Check eligibility</h3>
						<p>
							You can request if you are the owner, parent/guardian, or authorized representative
							with proper authorization letter.
						</p>
					</li>
					<li>
						<h3>Prepare documents</h3>
						<p>
							Bring valid government-issued ID. If representative: authorization letter and IDs of
							both owner and representative.
						</p>
					</li>
					<li>
						<h3>Visit Civil Registrar</h3>
						<p>
							Go to the Civil Registry Department in the Calapan City Hall. Office hours: Mon-Fri, 8
							AM - 5 PM.
						</p>
					</li>
					<li>
						<h3>Fill out request form</h3>
						<p>
							Complete the request form with full name, date of birth, place of birth, parents'
							names, and purpose.
						</p>
					</li>
					<li>
						<h3>Pay the fee</h3>
						<p>Pay ₱150 per certified copy at the Municipal Treasurer's Office (same building).</p>
					</li>
					<li>
						<h3>Claim certificate</h3>
						<p>
							Return to Civil Registrar with official receipt. Certificate released within 15-30
							minutes if record is available.
						</p>
					</li>
				</ol>
			</div>
			<div class="faq">
				<h2>Frequently asked questions</h2>
				<Accordion />
			</div>
			<div class="office-info">
				<h2>Office information</h2>
				<ul>
					<li>
						<div class="icon">
							<Landmark />
						</div>
						City Civil Registry Department
					</li>
					<li>
						<div class="icon">
							<MapPin />
						</div>
						95HM+H9J Calapan City Hall, Roxas Dr, Calapan City, 5200 Oriental Mindoro
					</li>
					<li>
						<div class="icon">
							<Phone />
						</div>
						(043) 288-2412
					</li>
					<li>
						<div class="icon">
							<Clock />
						</div>
						Mon-Fri: 8AM - 5PM
					</li>
				</ul>
			</div>
		</div>
		<div class="right">
			<div class="related-services">
				<h2>Related services</h2>
				<ul>
					{@render listItem('Marriage Certificate', '/(app)/services/certificates')}
					{@render listItem('Death Certificate', '/(app)/services/certificates')}
					{@render listItem('Barangay Clearance', '/(app)/services/certificates')}
				</ul>
			</div>
			<div class="contact">
				<p>
					Need help?
					<a href={resolve('/(app)/contact')}>Contact us</a>.
				</p>
			</div>
		</div>
	</div>
</div>

<style>
	.wrapper {
		display: flex;
		flex-direction: column;
		gap: 2rem;

		.content {
			display: flex;
			flex-direction: column;
			gap: 2rem;

			.left,
			.right {
				display: flex;
				flex-direction: column;
				gap: 2rem;
			}

			h3 {
				font-size: 1.25rem;
				font-weight: 700;
			}

			.requirements,
			.steps {
				display: flex;
				flex-direction: column;
				gap: 1.5rem;

				div {
					display: flex;
					flex-direction: column;
					gap: 0.5rem;

					ul {
						padding-left: 2rem;
						list-style-type: disc;
					}
				}
			}
			.steps {
				ol {
					padding-left: 2rem;
					display: flex;
					flex-direction: column;
					gap: 1rem;

					li p {
						margin-top: 0.25rem;
					}
				}
			}
			.faq {
				display: flex;
				flex-direction: column;
				gap: 0.25rem;
			}
			.office-info {
				display: flex;
				flex-direction: column;
				gap: 0.75rem;

				ul {
					margin-top: 0.5rem;
					display: flex;
					flex-direction: column;
					gap: 0.25rem;

					li {
						display: grid;
						grid-template-columns: 18px 1fr;
						align-items: start;
						gap: 0.75rem;

						.icon {
							margin-top: 0.25rem;
						}
					}
				}
			}
			.related-services {
				display: flex;
				flex-direction: column;
				gap: 0.75rem;

				ul {
					margin-top: 0.5rem;
					display: flex;
					flex-direction: column;
					gap: 0.5rem;
				}
			}
			.contact {
				a {
					text-decoration: underline;

					&:hover {
						text-decoration: none;
					}
				}
			}
		}
	}

	@media (min-width: 900px) {
		.wrapper {
			.content {
				display: grid;
				grid-template-columns: 1fr max-content;
				gap: 6rem;
			}
		}
	}
</style>
