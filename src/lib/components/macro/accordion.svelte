<script>
	import { Accordion } from 'bits-ui';
	import ChevronDown from '$lib/icons/chevron-down.svelte';
</script>

<Accordion.Root class="accordion-root" type="multiple">
	<Accordion.Item class="accordion-item" value="item-1">
		<Accordion.Header class="accordion-header">
			<Accordion.Trigger class="accordion-trigger"
				>Can I get a birth certificate registered in another municipality?
				<ChevronDown />
			</Accordion.Trigger>
		</Accordion.Header>
		<Accordion.Content class="accordion-content">
			<div class="accordion-content-inner">
				No. The Calapan Civil Registrar only has records for births registered in Calapan. For other
				municipalities, request from that municipality's Civil Registrar or from PSA.
			</div>
		</Accordion.Content>
	</Accordion.Item>
	<Accordion.Item class="accordion-item" value="item-2">
		<Accordion.Header class="accordion-header">
			<Accordion.Trigger class="accordion-trigger">
				What if I don't know the exact date of birth?
				<ChevronDown />
			</Accordion.Trigger>
		</Accordion.Header>
		<Accordion.Content class="accordion-content">
			<div class="accordion-content-inner">
				Provide an approximate year and month. The staff will help search the records, but this may
				take longer.
			</div>
		</Accordion.Content>
	</Accordion.Item>

	<Accordion.Item class="accordion-item" value="item-3">
		<Accordion.Header class="accordion-header">
			<Accordion.Trigger class="accordion-trigger">
				Can I request through email or online?
				<ChevronDown />
			</Accordion.Trigger>
		</Accordion.Header>
		<Accordion.Content class="accordion-content">
			<div class="accordion-content-inner">
				Currently, requests must be made in person. Online services are being planned for the
				future.
			</div>
		</Accordion.Content>
	</Accordion.Item>

	<Accordion.Item class="accordion-item" value="item-4">
		<Accordion.Header class="accordion-header">
			<Accordion.Trigger class="accordion-trigger">
				What's the difference between local copy and PSA copy?
				<ChevronDown />
			</Accordion.Trigger>
		</Accordion.Header>
		<Accordion.Content class="accordion-content">
			<div class="accordion-content-inner">
				Both are certified true copies. PSA copies are nationally-recognized and required for
				passport/visa applications. Local copies are accepted for most local transactions and school
				enrollment.
			</div>
		</Accordion.Content>
	</Accordion.Item>
</Accordion.Root>

<style>
	:global(.accordion-root) {
		margin-top: -0.25rem;

		:global(.accordion-item) {
			border-bottom: 1px solid var(--fg-alt);
			font-size: 1.125rem;
		}

		:global(.accordion-header) {
			padding: 1.25rem 0;

			:global(.accordion-trigger) {
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
		:global(.accordion-content) {
			overflow: hidden;
		}

		.accordion-content-inner {
			padding: 0.5rem 0 1.5rem;
		}

		:global(.accordion-content[data-state='open']) {
			animation: accordion-content-open 200ms ease-out;
		}

		:global(.accordion-content[data-state='closed']) {
			animation: accordion-content-close 200ms ease-out;
		}
	}

	@keyframes accordion-content-open {
		from {
			height: 0;
		}
		to {
			height: var(--bits-accordion-content-height);
		}
	}

	@keyframes accordion-content-close {
		from {
			height: var(--bits-accordion-content-height);
		}
		to {
			height: 0;
		}
	}

	@media (prefers-reduced-motion: reduce) {
		:global(.accordion-content) {
			animation: none;
		}
	}
</style>
