<script>
	import CertificatePage from "../certificate-page.svelte";

	const faq = [
		{
			question: "Which barangay should issue my clearance?",
			answer:
				"Apply at the barangay where you currently reside. Bring proof of residency if the barangay requests it."
		},
		{
			question: "Can someone else apply for me?",
			answer:
				"Ask your barangay first. Some barangays may accept an authorized representative with a signed authorization letter and valid IDs."
		},
		{
			question: "How long is a barangay clearance valid?",
			answer:
				"Validity depends on the receiving agency and the purpose stated on the clearance. Confirm its required validity before applying."
		}
	];
</script>

<CertificatePage
	title="Barangay Clearance"
	description="Proof of good standing and residency issued by your barangay."
	{faq}
	relatedServices={[
		{ name: "Barangay ID", url: "/(app)/services/certificates/barangay-id" },
		{ name: "Police Clearance", url: "/(app)/services/certificates/police-clearance" },
		{ name: "Birth Certificate", url: "/(app)/services/certificates/birth-certificate" }
	]}
>
	{#snippet requirements()}
		<div class="info">
			<h2>Requirements</h2>
			<p>
				Requirements and fees may differ by barangay. Check with your barangay hall before visiting.
			</p>
		</div>
		<div>
			<h3>For the applicant</h3>
			<ul>
				<li>Valid government-issued ID or barangay ID</li>
				<li>Proof of residency, if requested</li>
				<li>Purpose of the clearance</li>
				<li>Barangay clearance fee, if applicable</li>
			</ul>
		</div>
	{/snippet}

	{#snippet steps()}
		<div class="info">
			<h2>Step-by-step process</h2>
			<p>Follow these steps to request a barangay clearance.</p>
		</div>
		<ol>
			<li>
				<h3>Visit your barangay hall</h3>
				<p>Go to the barangay hall for your current residential address during office hours.</p>
			</li>
			<li>
				<h3>Present your ID</h3>
				<p>Show your valid ID and any proof of residency requested by the barangay staff.</p>
			</li>
			<li>
				<h3>Complete the request form</h3>
				<p>Provide your personal details and the purpose for which the clearance will be used.</p>
			</li>
			<li>
				<h3>Pay the assessed fee</h3>
				<p>Pay the applicable barangay fee and keep the official receipt.</p>
			</li>
			<li>
				<h3>Claim your clearance</h3>
				<p>Receive the signed clearance after the barangay verifies your record and residency.</p>
			</li>
		</ol>
	{/snippet}
</CertificatePage>
