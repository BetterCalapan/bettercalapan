<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { RouteId } from '$app/types';
	import { resolve } from '$app/paths';
	import Accordion from '$lib/components/macro/accordion.svelte';
	import { info } from '$lib/snippets/info.snippet.svelte';
	import { listItem } from '$lib/snippets/list-item.snippet.svelte';

	type QnA = {
		question: string;
		answer: string;
	};
	type Service = {
		name: string;
		url: RouteId;
	};
	type Props = {
		title: string;
		description: string;
		faq: QnA[];
		relatedServices: Service[];
		requirements: Snippet;
		steps: Snippet;
		officeInfo?: Snippet;
	};

	let { title, description, faq, relatedServices, requirements, steps, officeInfo }: Props =
		$props();
</script>

<div class="wrapper">
	{@render info(title, description)}
	<div class="content">
		<div class="left">
			<div class="requirements">
				{@render requirements()}
			</div>
			<div class="steps">
				{@render steps()}
			</div>
			<div class="faq">
				<h2>Frequently asked questions</h2>
				<Accordion {faq} />
			</div>
			{#if officeInfo}
				<div class="office-info">
					<h2>Office information</h2>
					{@render officeInfo()}
				</div>
			{/if}
		</div>
		<div class="right">
			<div class="related-services">
				<h2>Related services</h2>
				<ul>
					{#each relatedServices as service (service.url)}
						{@render listItem(service.name, service.url)}
					{/each}
				</ul>
			</div>
			<div class="contact">
				<p>Need help? <a href={resolve('/(app)/contact')}>Contact us</a>.</p>
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

			:global(h3) {
				font-size: 1.25rem;
				font-weight: 700;
			}
			:global(h4) {
				font-size: 1.125rem;
				font-weight: 600;
			}

			.left,
			.right {
				display: flex;
				flex-direction: column;
				gap: 2rem;
			}
			.left {
				.requirements,
				.steps {
					display: flex;
					flex-direction: column;
					gap: 1.5rem;

					:global(div) {
						display: flex;
						flex-direction: column;
						gap: 0.5rem;
					}
				}

				.requirements {
					:global(ul) {
						padding-left: 2rem;
						list-style-type: disc;
					}
				}
				.steps {
					:global(ol) {
						padding-left: 2rem;
						display: flex;
						flex-direction: column;
						gap: 1rem;
					}
					:global(li p) {
						margin-top: 0.25rem;
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

					:global(ul) {
						margin-top: 0.5rem;
						display: flex;
						flex-direction: column;
						gap: 0.5rem;
					}
					:global(li) {
						display: grid;
						grid-template-columns: 18px 1fr;
						align-items: start;
						gap: 0.75rem;
					}
					:global(.icon) {
						margin-top: 0.25rem;
					}
				}
			}

			.right {
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
	}

	@media (min-width: 900px) {
		.wrapper {
			.content {
				display: grid;
				grid-template-columns: 1fr max-content;
				gap: 10rem;
			}
		}
	}
</style>
