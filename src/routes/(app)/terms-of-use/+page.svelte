<script lang="ts">
	import { info } from '$lib/snippets/info.snippet.svelte';
	import { listItem } from '$lib/snippets/list-item.snippet.svelte';
	import Info from '@lucide/svelte/icons/info';

	const relatedContent = [
		{
			name: 'Privacy Policy',
			url: '/(app)/privacy-policy'
		},
		{
			name: 'Accessibility',
			url: '/(app)/accessibility'
		}
	];
</script>

<div class="page-wrapper">
	{@render info(
		'Terms of Use',
		'These terms explain the rules for using BetterCalapan. By using bettercalapan.org, you agree to follow them.'
	)}

	<div class="content">
		<div class="left">
			<section>
				<h2>Who we are</h2>
				<p>
					BetterCalapan is an independent, open-source initiative that makes information about
					Calapan services, government, legislation, and public data easier to find and understand.
				</p>
				<p>
					BetterCalapan is not operated by, affiliated with, or endorsed by the City Government of
					Calapan or any other government agency. In these terms, “we”, “us”, and “our” refer to the
					contributors and maintainers of BetterCalapan.
				</p>
			</section>

			<section>
				<h2>Using BetterCalapan</h2>
				<p>You may use BetterCalapan for lawful purposes. You must not:</p>
				<ul>
					<li>infringe the rights of another person or restrict their use of the website</li>
					<li>misrepresent our content or imply that we or a government agency endorse you</li>
					<li>use the website in a fraudulent, misleading, or unlawful way</li>
					<li>
						use automated tools in a way that disrupts or places an unreasonable load on the website
					</li>
				</ul>
				<p>We may change, suspend, or remove website content or features without notice.</p>
			</section>

			<section>
				<h2>Municipal information and services</h2>
				<p>
					BetterCalapan provides general information and guidance. It does not process applications,
					accept payments, make appointments, issue official documents, or make decisions on behalf
					of any government office.
				</p>
				<p>
					Requirements, fees, office hours, contact details, and procedures can change. Check
					important information with the responsible government office or an official source before
					you travel, pay a fee, submit documents, or make another decision based on this website.
				</p>
				<p>
					A service or transaction provided by another organisation may have its own terms. Those
					terms also apply when you use that service.
				</p>
			</section>

			<section>
				<h2>Linking to BetterCalapan</h2>
				<p>
					You may link to BetterCalapan as long as the link is fair and lawful. You must not suggest
					an affiliation, approval, or endorsement that does not exist, or present our pages in a
					misleading context.
				</p>
			</section>

			<section>
				<h2>Links from BetterCalapan</h2>
				<p>
					We link to government websites and other external resources to help you find relevant
					information. We do not control those websites and a link does not mean that we endorse all
					of their content.
				</p>
				<p>
					External websites have their own terms, privacy practices, and security arrangements. We
					are not responsible for their content, availability, or how they handle information you
					provide.
				</p>
			</section>

			<section>
				<h2>Using our content and source code</h2>
				<p>
					The BetterCalapan source code is available under the
					<a
						href="https://www.gnu.org/licenses/gpl-3.0.en.html"
						target="_blank"
						rel="external noopener noreferrer">GNU General Public License version 3</a
					>.
				</p>
				<p>
					That software licence does not automatically apply to government material, names, logos,
					photographs, datasets, or other third-party content displayed or linked on the website.
					Unless a page says otherwise, you are responsible for checking and following the rights
					and licence that apply to material before reusing it.
				</p>
			</section>

			<section>
				<h2>Disclaimer</h2>
				<p>
					We make reasonable efforts to keep BetterCalapan useful and up to date, but provide it “as
					is” and “as available”. We do not guarantee that its content is current, accurate,
					complete, secure, or always available.
				</p>
				<p>
					The website does not provide legal, financial, medical, or other professional advice. Get
					advice from a qualified professional or the responsible authority when appropriate.
				</p>
				<p>
					To the fullest extent permitted by law, we are not responsible for loss or damage
					resulting from your use of, inability to use, or reliance on BetterCalapan or an external
					website linked from it. Nothing in these terms excludes or limits liability that cannot
					lawfully be excluded or limited.
				</p>
			</section>

			<section>
				<h2>Website security</h2>
				<p>You must not:</p>
				<ul>
					<li>introduce viruses, malware, or other technologically harmful material</li>
					<li>attempt to gain unauthorised access to the website or systems connected to it</li>
					<li>probe for vulnerabilities without prior permission</li>
					<li>attack the website, including through a denial-of-service attack</li>
				</ul>
				<p>We may report unlawful activity to the relevant authorities.</p>
			</section>

			<section>
				<h2>Corrections and content removal</h2>
				<p>
					You can report inaccurate content, copyright concerns, or material that should be removed
					by
					<a
						href="https://github.com/BetterCalapan/bettercalapan/issues"
						target="_blank"
						rel="external noopener noreferrer">opening an issue on GitHub</a
					>. Do not include personal, financial, or other sensitive information in a public issue.
				</p>
				<p>
					Questions about a municipal service should be directed to the government office
					responsible for that service.
				</p>
			</section>

			<section>
				<h2>Changes to these terms</h2>
				<p>
					We may update these terms when the website or relevant requirements change. The date at
					the top of this page shows when the terms were last updated. If you continue to use
					BetterCalapan after an update, the revised terms will apply to your use.
				</p>
			</section>

			<section>
				<h2>Governing law</h2>
				<p>
					These terms are governed by the laws of the Republic of the Philippines. Disputes relating
					to these terms or your use of BetterCalapan are subject to the jurisdiction of the courts
					of the Philippines.
				</p>
				<p>
					If any part of these terms is found to be invalid or unenforceable, the remaining parts
					will continue to apply.
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
		<p class="updated">Last updated <time datetime="2026-08-05">August 5, 2026</time></p>
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
