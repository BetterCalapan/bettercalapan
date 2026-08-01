<script>
	import CertificatePage from '../certificate-page.svelte';

	const faq = [
		{
			question: 'Who can apply for a barangay ID?',
			answer:
				"Residents of the issuing barangay may apply, subject to the barangay's residency and age requirements."
		},
		{
			question: 'Is a barangay ID a government-issued ID?',
			answer:
				'It is an identification document issued by your barangay. Check whether the agency receiving it accepts barangay IDs for your transaction.'
		},
		{
			question: 'What should I do if my ID is lost?',
			answer:
				'Report the loss to your barangay hall and ask about its replacement requirements and applicable fee.'
		}
	];
</script>

<CertificatePage
	title="Barangay ID"
	description="Local identification card issued to verified residents of a barangay."
	{faq}
	relatedServices={[
		{ name: 'Barangay Clearance', url: '/(app)/services/certificates/barangay-clearance' },
		{ name: 'Police Clearance', url: '/(app)/services/certificates/police-clearance' },
		{ name: "Driver's License", url: '/(app)/services/certificates/drivers-license' }
	]}
>
	{#snippet requirements()}
		<div class="info">
			<h2>Requirements</h2>
			<p>Requirements, fees, and validity periods are set by each barangay.</p>
		</div>
		<div>
			<h3>For new applications</h3>
			<ul>
				<li>Valid government-issued ID, if available</li>
				<li>Proof of residency in the barangay</li>
				<li>Completed barangay ID application form</li>
				<li>Recent ID photo, if requested</li>
				<li>Applicable barangay ID fee</li>
			</ul>
		</div>
	{/snippet}

	{#snippet steps()}
		<div class="info">
			<h2>Step-by-step process</h2>
			<p>Follow these steps to apply for a barangay ID.</p>
		</div>
		<ol>
			<li>
				<h3>Visit your barangay hall</h3>
				<p>Apply at the barangay hall where you are a resident.</p>
			</li>
			<li>
				<h3>Submit your documents</h3>
				<p>Present your ID and proof of residency for verification.</p>
			</li>
			<li>
				<h3>Complete the application</h3>
				<p>Fill out the barangay ID form with your current personal and address details.</p>
			</li>
			<li>
				<h3>Have your photo taken</h3>
				<p>Provide a photo or have one taken, depending on the barangay's process.</p>
			</li>
			<li>
				<h3>Pay and claim your ID</h3>
				<p>Pay the assessed fee, if any, and follow the barangay's instructions for release.</p>
			</li>
		</ol>
	{/snippet}
</CertificatePage>
