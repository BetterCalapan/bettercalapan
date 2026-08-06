<script>
	import BusinessPage from "../business-page.svelte";
	import Clock from "@lucide/svelte/icons/clock";
	import Landmark from "@lucide/svelte/icons/landmark";
	import MapPin from "@lucide/svelte/icons/map-pin";
	import Phone from "@lucide/svelte/icons/phone";

	const faq = [
		{
			question: "What is the processing time for the permit?",
			answer:
				"The BPLO classifies the issuance of the Occupational Mayor's Permit as a simple transaction, typically taking around 3 hours depending on the volume of applicants."
		},
		{
			question: "Do I need to apply in person?",
			answer:
				"While in-person application is standard, the city has been integrating services online. Please check the official Calapan City website for recent updates."
		},
		{
			question: "Who is considered a first-time job seeker?",
			answer:
				"A first-time job seeker is defined as a Filipino citizen looking for work for the first time, who is between 15 to 30 years old, and not currently receiving benefits from other government job programs."
		},
		{
			question: "Are all fees waived under RA 11261?",
			answer:
				"Yes, government regulatory fees for standard documents such as the Occupational Permit, Barangay Clearance, and NBI Clearance are free of charge for valid first-time job seekers."
		},
		{
			question: "What if I am a food handler?",
			answer:
				"If you are applying as a food handler, you will be required to submit specific test results (Urine and Stool) and also undergo a seminar at the Sanitation Office."
		}
	];
</script>

<BusinessPage
	title="Occupational Permit"
	description="Issued to all workers or employees (temporary or permanent) employed within the territorial jurisdiction of Calapan."
	{faq}
	relatedServices={[
		{
			name: "Business Permit",
			url: "/(app)/services/business/business-permit"
		},
		{ name: "Special Permit", url: "/(app)/services/business/special-permit" },
		{
			name: "Business Status Certificate",
			url: "/(app)/services/business/business-status-certificate"
		}
	]}
>
	{#snippet requirements()}
		<div class="info">
			<h2>Requirements</h2>
			<p class="description">There are additional documents if you are a first-time job seeker.</p>
		</div>
		<div class="documents">
			<h3>Documents</h3>
			<ul>
				<li>Application Form (2 copies - secured from BPLO)</li>
				<li>Community Tax Certificate (Cedula)</li>
				<li>NBI Clearance or Police Clearance</li>
			</ul>
		</div>
		<div class="job-seeker">
			<h3>If first-time job seeker</h3>
			<ul>
				<li>
					Barangay Certificate with an undertaking stating you are a first-time job seeker to avail
					the assistance.
				</li>
				<li>Medical Results (X-Ray Result)</li>
				<li>Urine and Stool test results (specifically required for food handlers)</li>
			</ul>
		</div>
	{/snippet}

	{#snippet steps()}
		<div class="info">
			<h2>Step-by-step process</h2>
			<p>Follow these steps to claim your permit.</p>
		</div>
		<ol>
			<li>
				<h3>Secure application form</h3>
				<p>
					Secure and fill out the application form at the Business Permit and Licensing Office
					(BPLO).
				</p>
			</li>
			<li>
				<h3>Submit requirements</h3>
				<p>
					Submit the application form along with the required documents such as Cedula and
					NBI/Police Clearance for evaluation.
				</p>
			</li>
			<li>
				<h3>Assessment and payment</h3>
				<p>
					Proceed through the assessment and pay the assessed fees as directed by the BPLO
					personnel.
				</p>
			</li>
			<li>
				<h3>Claim permit</h3>
				<p>Claim the Occupational Permit once processed and approved.</p>
			</li>
		</ol>
	{/snippet}

	{#snippet officeInfo()}
		<ul>
			<li>
				<div class="icon">
					<Landmark />
				</div>
				Calapan City Hall
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
				+63432882496
			</li>
			<li>
				<div class="icon">
					<Clock />
				</div>
				Mon-Fri: 8AM - 5PM
			</li>
		</ul>
	{/snippet}
</BusinessPage>
