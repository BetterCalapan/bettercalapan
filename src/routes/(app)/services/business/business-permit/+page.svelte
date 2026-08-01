<script>
	import Clock from '$lib/icons/clock.svelte';
	import Landmark from '$lib/icons/landmark.svelte';
	import MapPin from '$lib/icons/map-pin.svelte';
	import Phone from '$lib/icons/phone.svelte';
	import BusinessPage from '../business-page.svelte';

	const faq = [
		{
			question: 'How long does the processing take?',
			answer:
				'As prescribed by R.A. 11032 (Ease of Doing Business Law), government transactions follow a 3-7-20 day rule. While typical applications are processed within 1 Day, official timelines are: Up to 3 days for Simple, 7 days for Complex, and 20 days for Highly Technical transactions. If City Council approval is required, it may take 45 working days (extendable by 20 days).'
		},
		{
			question: 'What if that location had a previous tenant?',
			answer:
				"The previous tenant must have filed a formal Closure/Retirement of business to the City Treasurer's Office. Otherwise, the building owner must submit a Termination of Lease Contract and an Affidavit of No Relation so the new applicant can secure an account number."
		}
	];
</script>

<BusinessPage
	title="Business Permit"
	description="Apply for or renew your permit to operate a business within the city."
	{faq}
	relatedServices={[
		{
			name: 'Business Status Certificate',
			url: '/(app)/services/business/business-status-certificate'
		},
		{
			name: "Certified True Copy of Business License & Mayor's Permit",
			url: '/(app)/services/business/ctc-business-license'
		},
		{ name: 'Special Permit', url: '/(app)/services/business/special-permit' }
	]}
>
	{#snippet requirements()}
		<div class="info">
			<h2>Requirements</h2>
			<p class="description">
				The documents for your application will depend on whether you are applying for a permit or
				renewing. There are additional documents if done through a representative.
			</p>
		</div>
		<div class="application">
			<h3>If applying for a permit</h3>
			<ul>
				<li>Unified Application Form</li>
				<li>Business Name Registration (DTI / SEC / CDA)</li>
				<li>Proof of Legal Ownership (Tax Dec, TCT) or Notarized Contract of Lease</li>
				<li>Picture of Business Establishment (3R Size Colored, 1pc)</li>
				<li>Picture of Owner/President/Treasurer (2x2 Size, 1pc)</li>
				<li>Homeowners/Subdivision/Condominium Clearance to conduct business</li>
				<li>Undertaking (BPLO)</li>
				<li>Special Requirements based on line of business (if applicable)</li>
			</ul>
		</div>
		<div class="renewal">
			<h3>If renewing a permit</h3>
			<ul>
				<li>Unified Application Form</li>
				<li>Prior Year Audited Financial Statement / ITR (Last 2 years)</li>
				<li>Monthly/Quarterly VAT Returns / Percentage Tax Returns of previous years</li>
				<li>Homeowners/Subdivision/Condominium Clearance to conduct business</li>
				<li>Undertaking (BPLO)</li>
				<li>Special Requirements based on line of business (if applicable)</li>
			</ul>
		</div>
		<div class="representative">
			<h3>If done through a representative</h3>
			<ul>
				<li>Letter of Authority / Special Power of Attorney / Secretary Certificate</li>
				<li>Valid ID of owner and representative</li>
			</ul>
		</div>
	{/snippet}

	{#snippet steps()}
		<div class="info">
			<h2>Step-by-step process</h2>
			<p>Follow these steps to apply for or renew your business permit.</p>
		</div>
		<div class="application">
			<h3>If applying for a permit</h3>
			<ol>
				<li>
					<h4>Submit application</h4>
					<p>
						Submit duly accomplished Unified Application Form together with complete requirements to
						BPLO.
					</p>
				</li>
				<li>
					<h4>Planning & engineering evaluation</h4>
					<p>
						Personnel from Planning (Zoning/Locational Clearance) and Engineering (Occupancy)
						evaluate the application at the BPLO office.
					</p>
				</li>
				<li>
					<h4>Data verification</h4>
					<p>
						Verification of accounts and issuance of a Business Account Number at the Electronic
						Data Processing (EDP) division.
					</p>
				</li>
				<li>
					<h4>Approval</h4>
					<p>
						The application is forwarded for approval by the Chief of BPLO or their authorized
						representative.
					</p>
				</li>
				<li>
					<h4>Generate payment order</h4>
					<p>
						Release of the signed Tax Order of Payment (TOP) covering consolidated taxes, fees, and
						regulatory charges.
					</p>
				</li>
				<li>
					<h4>Pay taxes and fees</h4>
					<p>
						Present TOP to the Business License Tax Division, Treasury Department and pay assessed
						fees. An Official Receipt and Cedula will be issued.
					</p>
				</li>
				<li>
					<h4>Claim permit & clearances</h4>
					<p>
						Claim your Business License, Mayor's Permit, Sanitary Permit, and other clearances at
						BPLO.
					</p>
				</li>
			</ol>
		</div>
		<div class="renewal">
			<h3>If renewing a permit</h3>
			<ol>
				<li>
					<h4>Submit application</h4>
					<p>
						Submit duly accomplished application form indicating gross sale/receipt together with
						complete requirements to BPLO.
					</p>
				</li>
				<li>
					<h4>Evaluation & approval</h4>
					<p>
						BPLO personnel reviews requirements. The application is then forwarded for approval by
						the BPLO Chief or authorized representative.
					</p>
				</li>
				<li>
					<h4>Generate payment order</h4>
					<p>
						Once approved, a computer-generated Tax Order of Payment (TOP) is released, covering
						consolidated taxes and fees.
					</p>
				</li>
				<li>
					<h4>Pay taxes and fees</h4>
					<p>
						Present TOP and pay at the Business License Division, Treasury Department. Receive
						Official Receipt and Cedula.
					</p>
				</li>
				<li>
					<h4>Claim permit & clearances</h4>
					<p>
						Return to BPLO to claim your Business License, Mayor's Permit, Sanitary Permit, and
						other regulatory clearances.
					</p>
				</li>
			</ol>
		</div>
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
