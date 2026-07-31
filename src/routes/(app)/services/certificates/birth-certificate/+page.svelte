<script>
	import { resolve } from '$app/paths';
	import { Accordion } from 'bits-ui';
	import { info } from '$lib/snippets/info.snippet.svelte';
	import ArrowRight from '$lib/icons/arrow-right.svelte';
	import ChevronDown from '$lib/icons/chevron-down.svelte';
	import Clock from '$lib/icons/clock.svelte';
	import Landmark from '$lib/icons/landmark.svelte';
	import MapPin from '$lib/icons/map-pin.svelte';
	import Phone from '$lib/icons/phone.svelte';
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
				<Accordion.Root class="root" type="multiple">
					<Accordion.Item class="item" value="item-1">
						<Accordion.Header class="header">
							<Accordion.Trigger class="trigger"
								>Can I get a birth certificate registered in another municipality?
								<ChevronDown />
							</Accordion.Trigger>
						</Accordion.Header>
						<Accordion.Content class="content">
							No. The Calapan Civil Registrar only has records for births registered in Calapan. For
							other municipalities, request from that municipality's Civil Registrar or from PSA.
						</Accordion.Content>
					</Accordion.Item>
					<Accordion.Item class="item" value="item-2">
						<Accordion.Header class="header">
							<Accordion.Trigger class="trigger">
								What if I don't know the exact date of birth?
								<ChevronDown />
							</Accordion.Trigger>
						</Accordion.Header>
						<Accordion.Content class="content">
							Provide an approximate year and month. The staff will help search the records, but
							this may take longer.
						</Accordion.Content>
					</Accordion.Item>

					<Accordion.Item class="item" value="item-3">
						<Accordion.Header class="header">
							<Accordion.Trigger class="trigger">
								Can I request through email or online?
								<ChevronDown />
							</Accordion.Trigger>
						</Accordion.Header>
						<Accordion.Content class="content">
							Currently, requests must be made in person. Online services are being planned for the
							future.
						</Accordion.Content>
					</Accordion.Item>

					<Accordion.Item class="item" value="item-4">
						<Accordion.Header class="header">
							<Accordion.Trigger class="trigger">
								What's the difference between local copy and PSA copy?
								<ChevronDown />
							</Accordion.Trigger>
						</Accordion.Header>
						<Accordion.Content class="content">
							Both are certified true copies. PSA copies are nationally-recognized and required for
							passport/visa applications. Local copies are accepted for most local transactions and
							school enrollment.
						</Accordion.Content>
					</Accordion.Item>
				</Accordion.Root>
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
					<li>
						<a href={resolve('/(app)/services/certificates')}>
							<ArrowRight />
							Marriage Certificate
						</a>
					</li>
					<li>
						<a href={resolve('/(app)/services/certificates')}>
							<ArrowRight />
							Death Certificate
						</a>
					</li>
					<li>
						<a href={resolve('/(app)/services/certificates')}>
							<ArrowRight />
							Barangay Clearance
						</a>
					</li>
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

				:global(.root) {
					margin-top: -0.25rem;

					:global(.item) {
						border-bottom: 1px solid var(--fg-alt);
						font-size: 1.125rem;
					}

					:global(.header) {
						padding: 1.25rem 0;

						:global(.trigger) {
							padding: 0;
							display: grid;
							grid-template-columns: 1fr 18px;
							align-items: center;
							gap: 1rem;
							width: 100%;
							background: none;
							border: none;
							text-align: left;
						}
					}
					:global(.content) {
						padding: 0.5rem 0 1.5rem;
					}
				}
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

					li {
						width: max-content;
						border-bottom: 1px dotted var(--fg);

						&:hover {
							border-bottom-style: solid;
						}

						a {
							display: grid;
							grid-template-columns: 18px 1fr;
							align-items: center;
							gap: 0.75rem;
						}
					}
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
