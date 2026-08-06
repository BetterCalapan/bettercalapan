<script>
	import CertificatePage from "../certificate-page.svelte";
	import Clock from "@lucide/svelte/icons/clock";
	import Landmark from "@lucide/svelte/icons/landmark";
	import MapPin from "@lucide/svelte/icons/map-pin";
	import Phone from "@lucide/svelte/icons/phone";

	const faq = [
		{
			question: `Can I get a birth certificate registered in another municipality?`,
			answer: `No. The Calapan Civil Registrar only has records for births registered in Calapan. For other
				municipalities, request from that municipality's Civil Registrar or from PSA.`
		},
		{
			question: `What if I don't know the exact date of birth?`,
			answer: `Provide an approximate year and month. The staff will help search the records, but this may
				take longer.`
		},
		{
			question: `Can I request through email or online?`,
			answer: `Currently, requests must be made in person. Online services are being planned for the
				future.`
		},
		{
			question: `What's the difference between local copy and PSA copy?`,
			answer: `Both are certified true copies. PSA copies are nationally-recognized and required for
				passport/visa applications. Local copies are accepted for most local transactions and school
				enrollment.`
		}
	];
</script>

<CertificatePage
	title="Birth Certificate"
	description="Official certified copy of birth certificate registered in Calapan."
	{faq}
	relatedServices={[
		{ name: "Marriage Certificate", url: "/(app)/services/certificates/marriage-certificate" },
		{ name: "Death Certificate", url: "/(app)/services/certificates/death-certificate" },
		{ name: "Barangay Clearance", url: "/(app)/services/certificates/barangay-clearance" }
	]}
>
	{#snippet requirements()}
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
	{/snippet}

	{#snippet steps()}
		<div class="info">
			<h2>Step-by-step process</h2>
			<p>Follow these steps to request your birth certificate.</p>
		</div>
		<ol>
			<li>
				<h3>Check eligibility</h3>
				<p>
					You can request if you are the owner, parent/guardian, or authorized representative with
					proper authorization letter.
				</p>
			</li>
			<li>
				<h3>Prepare documents</h3>
				<p>
					Bring valid government-issued ID. If representative: authorization letter and IDs of both
					owner and representative.
				</p>
			</li>
			<li>
				<h3>Visit Civil Registrar</h3>
				<p>
					Go to the Civil Registry Department in the Calapan City Hall. Office hours: Mon-Fri, 8 AM
					- 5 PM.
				</p>
			</li>
			<li>
				<h3>Fill out request form</h3>
				<p>
					Complete the request form with full name, date of birth, place of birth, parents' names,
					and purpose.
				</p>
			</li>
			<li>
				<h3>Pay the fee</h3>
				<p>Pay ₱150 per certified copy at the Municipal Treasurer's Office (same building).</p>
			</li>
			<li>
				<h3>Claim certificate</h3>
				<p>
					Return to Civil Registrar with official receipt. Certificate released within 15-30 minutes
					if record is available.
				</p>
			</li>
		</ol>
	{/snippet}

	{#snippet officeInfo()}
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
	{/snippet}
</CertificatePage>
