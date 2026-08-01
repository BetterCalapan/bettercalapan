<script>
	import CertificatePage from '../certificate-page.svelte';
	import Clock from '@lucide/svelte/icons/clock';
	import Landmark from '@lucide/svelte/icons/landmark';
	import MapPin from '@lucide/svelte/icons/map-pin';
	import Phone from '@lucide/svelte/icons/phone';

	const faq = [
		{
			question: `How soon after the wedding should I register?`,
			answer: `Within 30 days of the marriage ceremony. Late registration may require additional documents.`
		},
		{
			question: `Can I get a copy if I was married elsewhere?`,
			answer: `Only marriages registered in this city are available. Request from the city where you were married or from PSA.`
		}
	];
</script>

<CertificatePage
	title="Marriage Certificate"
	description="Registration of Certificate of Marriage at the City Civil Registry."
	{faq}
	relatedServices={[
		{ name: 'Birth Certificate', url: '/(app)/services/certificates/birth-certificate' },
		{ name: 'Death Certificate', url: '/(app)/services/certificates/death-certificate' },
		{ name: 'Barangay Clearance', url: '/(app)/services/certificates/barangay-clearance' }
	]}
>
	{#snippet requirements()}
		<div class="info">
			<h2>Requirements</h2>
			<p class="description">
				The Certificate of Marriage (COM) of a Civil or Church wedding with Marriage License must be
				registered within fifteen (15) days after the solemnization of marriage. COM of a Civil or
				Church Wedding under Art. 34 or PD 1083 must be registered within thirty (30) days after the
				solemnization of marriage.
			</p>
			<p class="description">
				Registration of marriage certificate is free of charge, pursuant to Section 6 of P.D. No.
				651.
			</p>
		</div>
		<div class="timely-registration">
			<h3>For timely registration (within 15/30 days)</h3>
			<ul>
				<li>Duly accomplished Certificate of Marriage - 4 copies</li>
				<li>
					Marriage solemnized outside Churches or Municipal Court must submit a Request address to
					solemnizing officer for celebration of Marriage in a place other than those authorized by
					law
				</li>
				<li>Valid IDs of both spouses</li>
				<li>Marriage license (if applicable)</li>
			</ul>
		</div>
		<div class="late-registration">
			<h3>For late registration</h3>
			<ul>
				<li>Duly accomplished Certificate of Marriage - 4 copies</li>
				<li>Certificate of Marriage of contracting parties</li>
				<li>Valid IDs of both spouses</li>
				<li>Marriage license (if applicable)</li>
			</ul>
		</div>
		<div class="copy-request">
			<h3>For copy request</h3>
			<ul>
				<li>Valid ID of spouse or authorized representative</li>
				<li>Authorization letter (if representative)</li>
				<li>₱75 per copy</li>
			</ul>
		</div>
	{/snippet}

	{#snippet steps()}
		<div class="info">
			<h2>Step-by-step process</h2>
			<p>Follow these steps to register your marriage certificate.</p>
		</div>
		<ol>
			<li>
				<h3>Gather documents</h3>
				<p>Prepare marriage certificate from solemnizing officer and valid IDs.</p>
			</li>
			<li>
				<h3>Visit Civil Registry</h3>
				<p>
					Go to the Civil Registry Department in the Calapan City Hall. Office hours: Mon-Fri, 8 AM
					- 5 PM.
				</p>
			</li>
			<li>
				<h3>Submit documents & verification</h3>
				<p>
					Submit marriage certificate and supporting documents for registration. Staff verifies
					document authenticity and completeness.
				</p>
			</li>
			<li>
				<h3>Payment</h3>
				<p>Pay the Solemnization Fee of ₱150 in the Civil Registry Department.</p>
			</li>
			<li>
				<h3>Registration</h3>
				<p>Marriage is officially registered in the Civil Registry.</p>
			</li>
			<li>
				<h3>Claim certificate</h3>
				<p>Receive certified copy of registered marriage certificate.</p>
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
