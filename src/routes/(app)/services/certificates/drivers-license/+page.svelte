<script>
	import CertificatePage from "../certificate-page.svelte";
	import Clock from "@lucide/svelte/icons/clock";
	import Landmark from "@lucide/svelte/icons/landmark";
	import MapPin from "@lucide/svelte/icons/map-pin";

	const faq = [
		{
			question: "Can I renew my license online?",
			answer:
				"Eligibility for online renewal depends on your license record. Check the Land Transportation Office online portal for current options."
		},
		{
			question: "Do I need a medical certificate?",
			answer:
				"A medical certificate from an LTO-accredited medical clinic may be required. Confirm current LTO requirements before your appointment."
		},
		{
			question: "Can I apply for a new license at the same office?",
			answer:
				"New applications, renewals, and upgrades have different requirements. Confirm that your chosen LTO office handles your transaction."
		}
	];
</script>

<CertificatePage
	title="Driver's License"
	description="Apply for, renew, or update a driver's license through the Land Transportation Office."
	{faq}
	relatedServices={[
		{ name: "Police Clearance", url: "/(app)/services/certificates/police-clearance" },
		{ name: "Barangay ID", url: "/(app)/services/certificates/barangay-id" },
		{ name: "Barangay Clearance", url: "/(app)/services/certificates/barangay-clearance" }
	]}
>
	{#snippet requirements()}
		<div class="info">
			<h2>Requirements</h2>
			<p>
				Requirements depend on whether you are applying for a new license, renewing, or updating an
				existing license.
			</p>
		</div>
		<div>
			<h3>For license renewal</h3>
			<ul>
				<li>Existing driver's license</li>
				<li>Medical certificate from an LTO-accredited clinic, if required</li>
				<li>LTO online account or appointment confirmation, if required</li>
				<li>Payment for applicable LTO fees</li>
			</ul>
		</div>
		<div>
			<h3>For new applications</h3>
			<ul>
				<li>Valid student permit held for the required period</li>
				<li>Completed driver's education requirements, where applicable</li>
				<li>Medical certificate from an LTO-accredited clinic, if required</li>
				<li>Proof of identity, age, and residency as required by LTO</li>
			</ul>
		</div>
	{/snippet}

	{#snippet steps()}
		<div class="info">
			<h2>Step-by-step process</h2>
			<p>Follow these general steps for an LTO license transaction.</p>
		</div>
		<ol>
			<li>
				<h3>Check your transaction requirements</h3>
				<p>
					Identify whether you need a new application, renewal, replacement, or license upgrade.
				</p>
			</li>
			<li>
				<h3>Complete required training and medical exam</h3>
				<p>
					For new applications, complete the required education and obtain a medical certificate
					when needed.
				</p>
			</li>
			<li>
				<h3>Set an appointment or visit an LTO office</h3>
				<p>
					Use the LTO online services portal if an appointment is required for your transaction.
				</p>
			</li>
			<li>
				<h3>Submit documents and take assessments</h3>
				<p>
					Present your documents. New applicants may need to take written and practical driving
					examinations.
				</p>
			</li>
			<li>
				<h3>Pay fees and receive your license</h3>
				<p>Pay the assessed fees and follow the LTO office's release instructions.</p>
			</li>
		</ol>
	{/snippet}

	{#snippet officeInfo()}
		<ul>
			<li>
				<div class="icon"><Landmark /></div>
				Land Transportation Office
			</li>
			<li>
				<div class="icon"><MapPin /></div>
				95Q9+QWC Land Transportation Office, Calapan City, Oriental Mindoro
			</li>
			<li>
				<div class="icon"><Clock /></div>
				Mon-Fri: 8AM - 5PM
			</li>
		</ul>
	{/snippet}
</CertificatePage>
