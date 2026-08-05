<script lang="ts">
	import { resolve } from '$app/paths';
	import { info } from '$lib/snippets/info.snippet.svelte';
	import Info from '@lucide/svelte/icons/info';
</script>

<div class="page-wrapper">
	{@render info(
		'Privacy Policy',
		'This policy explains how BetterCalapan handles information when you use bettercalapan.org.'
	)}

	<div class="content">
		<section>
			<h2>Who is responsible for your information</h2>
			<p>
				BetterCalapan is an independent, open-source initiative maintained by community
				contributors. The BetterCalapan maintainers are responsible for personal information handled
				through this website.
			</p>
			<p>
				BetterCalapan is not operated by, affiliated with, or endorsed by the City Government of
				Calapan or any other government agency. Information you provide directly to a government
				office is controlled by that office and covered by its own privacy notice.
			</p>
		</section>

		<section>
			<h2>Information we handle</h2>
			<p>Depending on how you use BetterCalapan, the information handled may include:</p>
			<ul>
				<li>
					technical request information, such as your IP address, requested page, date and time,
					browser details, referring page, and security or network information
				</li>
				<li>words or phrases you enter into the website search</li>
				<li>your selected series on the competitiveness chart</li>
				<li>
					your email address, message, and any other information you choose to send to us by email
				</li>
			</ul>
			<p>
				BetterCalapan does not provide user accounts, accept payments, process municipal
				applications, or allow document uploads. Do not send us identification numbers, financial
				information, medical records, or other sensitive personal information unless it is necessary
				for a privacy request.
			</p>
		</section>

		<section>
			<h2>Technical request information</h2>
			<p>
				BetterCalapan is hosted on Cloudflare. When you visit the website, Cloudflare processes
				technical request information to deliver pages, maintain reliability, prevent abuse, and
				protect the website from security threats.
			</p>
			<p>
				Cloudflare may provide us with aggregated traffic statistics, such as the number of requests
				or visits to the website. We do not use this information to identify individual visitors.
			</p>
		</section>

		<section>
			<h2>Search information</h2>
			<p>
				Search results are calculated in your browser against a static search index. BetterCalapan
				does not maintain a separate database of your search history.
			</p>
			<p>
				When you submit a search, the words you enter become part of the page address after
				<code>?term=</code>. This means a search may appear in your browser history, a copied or
				shared link, and temporary hosting or security records. Do not enter names, identification
				numbers, or other private information into search.
			</p>
		</section>

		<section>
			<h2>Local storage and cookies</h2>
			<p>
				BetterCalapan stores your competitiveness-chart selection in your browser under
				<code>bettercalapan:competitiveness:selected-series</code>. This functional preference does
				not identify you and is not sent to BetterCalapan by the chart. It remains on your device
				until you change it or clear the website's stored data in your browser.
			</p>
			<p>
				The BetterCalapan application does not set cookies. Cloudflare may set strictly necessary
				cookies if it needs to manage traffic or present a security challenge. These are used to
				protect and operate the website, not for BetterCalapan advertising.
			</p>
		</section>

		<section>
			<h2>Analytics and advertising</h2>
			<p>
				BetterCalapan does not currently install a client-side analytics beacon or use advertising
				trackers. We do not build advertising profiles or track you across other websites.
			</p>
			<p>
				If we introduce analytics that changes how information is handled, we will update this
				policy to explain what is collected, why it is needed, and what choices you have.
			</p>
		</section>

		<section>
			<h2>Messages you send us</h2>
			<p>
				If you email <a href="mailto:contact@bettercalapan.org">contact@bettercalapan.org</a>, we
				and our email provider process your address, message, and related delivery information so we
				can respond and keep an appropriate record of your request.
			</p>
			<p>
				Messages sent through GitHub, Facebook, or another external service are also handled under
				that service's privacy policy. GitHub issues are public, so you should never post personal
				or sensitive information in an issue.
			</p>
		</section>

		<section>
			<h2>Public officials and contact information</h2>
			<p>
				BetterCalapan publishes names, roles, office contact details, emergency numbers, and similar
				civic information obtained from public or official sources. We use this information to help
				people find government services and understand local government.
			</p>
			<p>
				If public information about you is inaccurate, outdated, or should not be displayed, email
				us with the page address and an explanation of the correction you are requesting.
			</p>
		</section>

		<section>
			<h2>Why we process information</h2>
			<p>We process information only when necessary to:</p>
			<ul>
				<li>provide, maintain, and secure BetterCalapan</li>
				<li>return search results and remember your chart preference</li>
				<li>measure aggregate website traffic and reliability</li>
				<li>respond to messages, corrections, and privacy requests</li>
				<li>make relevant public civic information accessible</li>
				<li>comply with a legal obligation or a lawful request</li>
			</ul>
			<p>
				Under the Philippine Data Privacy Act of 2012, we rely on our legitimate interests in
				operating and protecting a public-interest civic website, provided those interests do not
				override your rights. Where appropriate, we rely on your consent when you voluntarily
				provide information.
			</p>
		</section>

		<section>
			<h2>Who information may be shared with</h2>
			<p>Information may be processed or shared with:</p>
			<ul>
				<li>Cloudflare, which hosts, delivers, and protects the website</li>
				<li>our email provider when you contact us</li>
				<li>maintainers who need the information to respond to your request</li>
				<li>authorities or other parties when disclosure is required by law</li>
			</ul>
			<p>
				We do not sell or rent personal information, and we do not share it with third parties for
				their advertising or direct-marketing purposes.
			</p>
		</section>

		<section>
			<h2>How long information is kept</h2>
			<p>
				We keep personal information only for as long as it is needed for the purpose described in
				this policy or as required by law. Technical records follow the retention settings and
				schedules of the hosting and security services we use.
			</p>
			<p>
				Correspondence is removed when it is no longer reasonably needed to answer the request,
				maintain an appropriate record, or meet a legal obligation. Public civic information remains
				available until it is outdated, corrected, removed, or no longer relevant. Browser storage
				remains on your device until you clear it.
			</p>
		</section>

		<section>
			<h2>Where information may be processed</h2>
			<p>
				Cloudflare operates a global network, and our hosting and email providers may process
				information outside the Philippines. When this happens, the provider's safeguards and
				privacy terms apply alongside applicable Philippine law.
			</p>
		</section>

		<section>
			<h2>How we protect information</h2>
			<p>
				We use reasonable technical and organisational safeguards appropriate to the limited
				information BetterCalapan handles. These include encrypted HTTPS connections and
				Cloudflare's hosting and security controls.
			</p>
			<p>
				No internet service can guarantee absolute security. Please avoid sending information that
				is not needed for your request.
			</p>
		</section>

		<section>
			<h2>Your privacy rights</h2>
			<p>
				Subject to the Data Privacy Act of 2012 and other applicable law, you may have the right to
				be informed, access your personal information, correct inaccurate information, object to or
				restrict processing, request erasure or blocking, obtain portable information where
				applicable, and seek compensation for unlawful processing.
			</p>
			<p>
				To exercise a right or ask a privacy question, email
				<a href="mailto:contact@bettercalapan.org">contact@bettercalapan.org</a>. Describe your
				request and the information or page involved. We may ask for enough information to verify
				your identity before acting on a request, but we will not ask for more than is necessary.
			</p>
			<p>
				You may also raise a complaint with the
				<a href="https://privacy.gov.ph/" target="_blank" rel="external noopener noreferrer"
					>National Privacy Commission</a
				>.
			</p>
		</section>

		<section>
			<h2>Children's privacy</h2>
			<p>
				BetterCalapan provides general civic information and is not designed to collect personal
				information from children. A child, parent, or guardian should not enter a child's personal
				or sensitive information into search or a public issue.
			</p>
		</section>

		<section>
			<h2>Links to other websites</h2>
			<p>
				This policy applies only to BetterCalapan. Government services and other websites linked
				from BetterCalapan decide how they process information you provide to them. Read their
				privacy policies before submitting personal information.
			</p>
		</section>

		<section>
			<h2>Changes to this policy</h2>
			<p>
				We may update this policy when BetterCalapan or the services supporting it change. The date
				at the bottom of this page shows when it was last updated. Material changes will be
				described here before or when the new processing begins.
			</p>
			<p>
				Read our <a href={resolve('/(app)/terms-of-use')}>Terms of Use</a> for the rules that apply when
				using BetterCalapan.
			</p>
		</section>
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
		gap: 2.5rem;

		.content {
			max-width: 48rem;
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

			code {
				font-size: 0.95em;
			}

			a {
				text-decoration: underline;

				&:hover {
					text-decoration: none;
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
		.page-wrapper .content h2 {
			font-size: 2rem;
		}
	}
</style>
