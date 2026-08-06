<script lang="ts">
	import { info } from "$lib/snippets/info.snippet.svelte";
	import { listItem } from "$lib/snippets/list-item.snippet.svelte";
	import Info from "@lucide/svelte/icons/info";

	const relatedContent = [
		{
			name: "Terms of Use",
			url: "/(app)/terms-of-use"
		},
		{
			name: "Privacy Policy",
			url: "/(app)/privacy-policy"
		}
	];
</script>

<div class="page-wrapper">
	{@render info(
		"Accessibility",
		"This statement explains how BetterCalapan works to make bettercalapan.org usable by as many people as possible."
	)}

	<div class="content">
		<div class="left">
			<section>
				<h2>Our commitment</h2>
				<p>
					BetterCalapan is an independent, open-source initiative that helps people find and
					understand information about Calapan services, government, legislation, and public data.
					We want that information to be accessible to people with disabilities and to people using
					different devices, browsers, and assistive technologies.
				</p>
				<!-- NOTE: update conformity if accessibility has been reliably assessed -->
				<p>
					We aim to make the website clear, usable, and inclusive as it changes. We use the Web
					Content Accessibility Guidelines (WCAG) 2.2 AA as our target, but BetterCalapan has not
					been independently assessed or certified as conformant.
				</p>
			</section>

			<section>
				<h2>Using this website</h2>
				<p>We aim for you to be able to:</p>
				<ul>
					<li>change text size, colours, contrast, and fonts through browser or device settings</li>
					<li>zoom in up to 400% without the text spilling off the screen</li>
					<li>navigate the website with a keyboard</li>
					<li>use the website with screen readers and other assistive technology</li>
					<li>use the website on a phone, tablet, or desktop screen</li>
					<li>reduce interface motion through your device's reduced-motion setting</li>
				</ul>
				<p>
					We also try to write in plain language and use headings, labels, and links that make
					content easier to understand and navigate.
				</p>
			</section>

			<section>
				<h2>Accessibility features</h2>
				<p>BetterCalapan currently includes:</p>
				<ul>
					<li>semantic header, main-content, and footer regions</li>
					<li>labels for navigation menus, search controls, and social-media links</li>
					<li>text alternatives for the BetterCalapan logo</li>
					<li>responsive layouts for smaller screens</li>
					<li>reduced-motion support for navigation and search animations</li>
					<li>text summaries for the statistics charts</li>
				</ul>
			</section>

			<section>
				<h2>Known limitations</h2>
				<p>Some parts of BetterCalapan may not yet be fully accessible. In particular:</p>
				<ul>
					<li>
						statistics charts provide concise text summaries, but do not yet provide every data
						point in an accessible table
					</li>
					<li>
						external government websites, services, and resources linked from BetterCalapan are
						managed by other organisations and may have their own accessibility limitations
					</li>
					<li>
						we have not yet completed a formal, independent accessibility assessment of the website
					</li>
				</ul>
			</section>

			<section>
				<h2>Report an accessibility problem</h2>
				<p>
					Please email <a href="mailto:contact@bettercalapan.org">contact@bettercalapan.org</a> if you
					find a problem not listed on this page or have trouble using any part of the website. Include
					the page address, what you were trying to do, and any assistive technology or browser details
					that may help us investigate.
				</p>
				<p>
					You can also report a public technical issue by
					<a
						href="https://github.com/BetterCalapan/bettercalapan/issues"
						target="_blank"
						rel="external noopener noreferrer">opening an issue on GitHub</a
					>. Do not include personal, financial, health, or other sensitive information in a public
					issue.
				</p>
			</section>

			<section>
				<h2>Scope and review</h2>
				<p>
					This statement applies to bettercalapan.org. BetterCalapan is not operated by, affiliated
					with, or endorsed by the City Government of Calapan or another government agency. Official
					government services and external websites linked from BetterCalapan have their own
					accessibility arrangements.
				</p>
				<p>
					We will review this statement when the website changes significantly, when we complete an
					accessibility assessment, or when feedback identifies a need to update it.
				</p>
			</section>
		</div>
		<div class="right">
			<div class="related-content">
				<h2>Related content</h2>
				<ul>
					{#each relatedContent as content (content.url)}
						{@render listItem(content.name, content.url)}
					{/each}
				</ul>
			</div>
		</div>
	</div>

	<div class="last-updated">
		<Info />
		<p>Last updated <time datetime="2026-08-05">August 5, 2026</time></p>
	</div>
</div>

<style>
	.page-wrapper {
		display: flex;
		flex-direction: column;
		gap: 2rem;

		.content {
			max-width: 48rem;
			display: flex;
			flex-direction: column;
			gap: 2rem;

			.left {
				display: flex;
				flex-direction: column;
				gap: 2rem;

				section {
					display: flex;
					flex-direction: column;
					gap: 0.75rem;
				}

				h2 {
					font-size: 1.5rem;
					line-height: 1.25;
				}

				ul {
					padding-left: 1.5rem;
					list-style-type: disc;

					li + li {
						margin-top: 0.5rem;
					}
				}

				a {
					text-decoration: underline;

					&:hover {
						text-decoration: none;
					}
				}
			}
			.right {
				.related-content {
					display: flex;
					flex-direction: column;
					gap: 0.5rem;

					ul {
						display: flex;
						flex-direction: column;
						gap: 0.5rem;
					}
				}
			}
		}

		.last-updated {
			display: grid;
			grid-template-columns: 18px 1fr;
			align-items: center;
			gap: 0.75rem;
		}
	}

	@media (min-width: 900px) {
		.page-wrapper .content {
			max-width: 100%;
			display: grid;
			grid-template-columns: 1fr max-content;
			gap: 10rem;
		}
		.page-wrapper .content .left h2,
		.page-wrapper .content .right h2 {
			font-size: 2rem;
		}
	}
</style>
