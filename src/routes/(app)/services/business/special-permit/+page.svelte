<script>
	import BusinessPage from "../business-page.svelte";
	import Clock from "@lucide/svelte/icons/clock";
	import Landmark from "@lucide/svelte/icons/landmark";
	import MapPin from "@lucide/svelte/icons/map-pin";
	import Phone from "@lucide/svelte/icons/phone";

	const faq = [
		{
			question: "How long does the processing take?",
			answer:
				"According to the Citizen's Charter, the total processing time for a Special Permit is approximately 2 hours and 10 minutes."
		},
		{
			question: "What if that location had a previous tenant?",
			answer:
				"The previous tenant must have filed a formal Closure/Retirement of business to the City Treasurer's Office. Otherwise, the building owner must submit a Termination of Lease Contract and an Affidavit of No Relation so the new applicant can secure an account number."
		}
	];
</script>

<BusinessPage
	title="Special Permit"
	description="Issued by the City Government to all business establishments that operate within its territorial jurisdiction."
	{faq}
	relatedServices={[
		{ name: "Business Permit", url: "/(app)/services/business/business-permit" },
		{
			name: "Business Status Certificate",
			url: "/(app)/services/business/business-status-certificate"
		},
		{
			name: "Certified True Copy of Business License & Mayor's Permit",
			url: "/(app)/services/business/ctc-business-license"
		}
	]}
>
	{#snippet requirements()}
		<div class="info">
			<h2>Requirements</h2>
			<p class="description">
				There is an additional document if applied through a representative.
			</p>
		</div>
		<div class="documents">
			<h3>Documents</h3>
			<ul>
				<li>Unified Application Form</li>
				<li>
					Business Name Registration (1 Copy: DTI Registration or SEC Registration & Articles of
					Incorporation)
				</li>
				<li>
					Proof of Legal Ownership: Tax Declaration/TCT, Notarized Contract of Lease, or Letter of
					Authority to use property
				</li>
				<li>Picture of Business Establishment</li>
				<li>Picture of Owner / President or Treasurer</li>
				<li>
					Homeowners / Subdivision / Villages Clearance or Condominium Approval to conduct business
				</li>
				<li>Undertaking (BPLO)</li>
			</ul>
		</div>
		<div class="representative">
			<h3>If done through a representative</h3>
			<ul>
				<li>Letter of Authority / Special Power of Attorney / Secretary Certificate</li>
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
				<h3>Submit application & verification</h3>
				<p>
					Submit accomplished application form and complete requirements to the BPLO front liners
					for receiving, reviewing, and validating. Evaluated by Planning Department for Zoning
					Fees. Passed for approval of the Chief of BPLO, who issues a Tax Order Payment (TOP)
					routing you to the City Treasurer's.
				</p>
			</li>
			<li>
				<h3>Pay taxes and fees</h3>
				<p>
					Present the TOP to the Business License Tax Miscellaneous Division. Taxes are calculated
					based on the Revenue Code. Payment is accepted and Official Receipt is printed/issued.
				</p>
			</li>
			<li>
				<h3>Claim special permit</h3>
				<p>
					Return to Business Permit & Licensing Office (BPLO) for the processing, printing, signing,
					and releasing of the Special Permit.
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
