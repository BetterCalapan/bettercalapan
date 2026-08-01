<script>
	import CertificatePage from '../certificate-page.svelte';
	import Clock from '@lucide/svelte/icons/clock';
	import Landmark from '@lucide/svelte/icons/landmark';
	import MapPin from '@lucide/svelte/icons/map-pin';
	import Phone from '@lucide/svelte/icons/phone';

	const faq = [
		{
			question: `How soon must death be registered?`,
			answer: `Within 48 hours of death. Late registration requires additional documents and fees.`
		},
		{
			question: `Do I need a burial permit?`,
			answer: `Yes, burial permit is required before interment in any cemetery.`
		},
		{
			question: `How long is the posting period for late registration?`,
			answer: `Evaluator shall prepare documents for posting within 10 days, and the release of Certified True Copy is expiration of 10 days posting period.`
		}
	];
</script>

<CertificatePage
	title="Death Certificate"
	description="Register death certificate and obtain burial/transfer permit."
	{faq}
	relatedServices={[
		{ name: 'Birth Certificate', url: '/(app)/services/certificates/birth-certificate' },
		{ name: 'Marriage Certificate', url: '/(app)/services/certificates/marriage-certificate' },
		{ name: 'Barangay Clearance', url: '/(app)/services/certificates/barangay-clearance' }
	]}
>
	{#snippet requirements()}
		<div class="info">
			<h2>Requirements</h2>
			<p class="description">
				The requirements depend on whether your registration is timely or not.
			</p>
		</div>
		<div class="timely-registration">
			<h3>For timely registration</h3>
			<ul>
				<li>Certificate of Death - 4 copies</li>
				<li>Valid ID of informant</li>
				<li>Valid ID of deceased (if available)</li>
			</ul>
		</div>
		<div class="late-registration">
			<h3>For late registration</h3>
			<ul>
				<li>Negative Certification from Philippine Statistics Authority</li>
				<li>Duly accomplished Certificate of Death or Certificate of Fetal Death</li>
				<li>Certification from the Cemetery</li>
				<li>Valid ID of informant</li>
				<li>Valid ID of deceased (if available)</li>
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
				<h3>Obtain medical certificate</h3>
				<p>Get certificate of death from attending physician or hospital.</p>
			</li>
			<li>
				<h3>Visit Civil Registry</h3>
				<p>
					Go to the Civil Registry Department in the Calapan City Hall with death certificate within
					48 hours. Office hours: Mon-Fri, 8 AM - 5 PM.
				</p>
			</li>
			<li>
				<h3>Complete registry</h3>
				<p>Staff registers death in civil registry.</p>
			</li>
			<li>
				<h3>Pay fees</h3>
				<p>
					Pay registration of ₱75, ₱150 if late, and burial permit fees at the Civil Registry
					Department in the Calapan City Hall.
				</p>
			</li>
			<li>
				<h3>Claim permits</h3>
				<p>Receive burial permit and certified death certificate.</p>
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
