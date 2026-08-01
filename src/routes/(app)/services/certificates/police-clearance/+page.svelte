<script>
	import Clock from '$lib/icons/clock.svelte';
	import Landmark from '$lib/icons/landmark.svelte';
	import MapPin from '$lib/icons/map-pin.svelte';
	import CertificatePage from '../certificate-page.svelte';

	const faq = [
		{
			question: 'Do I need an online appointment?',
			answer:
				'Check the Philippine National Police Clearance System before visiting. Appointment and payment instructions may change.'
		},
		{
			question: 'What happens if my clearance has a hit?',
			answer:
				'A name match may require additional verification by the PNP. The releasing officer will advise you of the next steps and release date.'
		},
		{
			question: 'Can I use a police clearance for any purpose?',
			answer:
				'Confirm the clearance requirements with the agency requesting it, including its required validity period.'
		}
	];
</script>

<CertificatePage
	title="Police Clearance"
	description="National police clearance issued through the Philippine National Police Clearance System."
	{faq}
	relatedServices={[
		{ name: 'Barangay Clearance', url: '/(app)/services/certificates/barangay-clearance' },
		{ name: 'Barangay ID', url: '/(app)/services/certificates/barangay-id' },
		{ name: "Driver's License", url: '/(app)/services/certificates/drivers-license' }
	]}
>
	{#snippet requirements()}
		<div class="info">
			<h2>Requirements</h2>
			<p>
				Confirm the current requirements, appointment availability, and payment instructions with
				the PNP before visiting.
			</p>
		</div>
		<div>
			<h3>For applicants</h3>
			<ul>
				<li>PNP Clearance System reference number or appointment confirmation, if required</li>
				<li>At least two valid government-issued IDs</li>
				<li>Personal information matching your IDs</li>
				<li>Payment for the clearance and applicable service charges</li>
			</ul>
		</div>
	{/snippet}

	{#snippet steps()}
		<div class="info">
			<h2>Step-by-step process</h2>
			<p>Follow these steps to request a police clearance.</p>
		</div>
		<ol>
			<li>
				<h3>Register or sign in online</h3>
				<p>
					Create or access your account in the PNP Clearance System and enter your current details.
				</p>
			</li>
			<li>
				<h3>Choose a police station</h3>
				<p>Select an available police station and appointment schedule convenient to you.</p>
			</li>
			<li>
				<h3>Pay the required fee</h3>
				<p>Follow the system's payment instructions and keep your payment confirmation.</p>
			</li>
			<li>
				<h3>Appear for biometrics</h3>
				<p>
					Bring your valid IDs to the selected police station for identity verification, photo, and
					biometrics capture.
				</p>
			</li>
			<li>
				<h3>Receive your clearance</h3>
				<p>
					Claim or download the clearance according to the issuing station's instructions. A
					verification hit may delay release.
				</p>
			</li>
		</ol>
	{/snippet}

	{#snippet officeInfo()}
		<ul>
			<li>
				<div class="icon"><Landmark /></div>
				Calapan Police Headquarters
			</li>
			<li>
				<div class="icon"><MapPin /></div>
				Camp Efigenio C Navarro, Calapan City, Oriental Mindoro
			</li>
			<li>
				<div class="icon"><Clock /></div>
				Mon-Fri: 8AM - 5PM
			</li>
		</ul>
	{/snippet}
</CertificatePage>
