<script>
	import BusinessPage from '../business-page.svelte';
	import Clock from '@lucide/svelte/icons/clock';
	import Landmark from '@lucide/svelte/icons/landmark';
	import MapPin from '@lucide/svelte/icons/map-pin';
	import Phone from '@lucide/svelte/icons/phone';

	const faq = [
		{
			question: 'What is the purpose of this certification?',
			answer:
				'This certification is used to verify the legal status of a business entity registered in Calapan. It is accepted for legal, government, and private transactions.'
		},
		{
			question: 'Why is access to business records limited?',
			answer:
				'Pursuant to the Data Privacy Act of 2012 (RA 10173), the BPLO limits the data that can be accessed to protect the integrity and privacy of the information in its records.'
		}
	];
</script>

<BusinessPage
	title="Business Status Certificate"
	description="Issued to all who want to verify the status of a business entity registered with the Business Permit and Licensing Office (BPLO). Information access is limited pursuant to the Data Privacy Act of 2012 to maintain record integrity."
	{faq}
	relatedServices={[
		{
			name: 'Business Permit',
			url: '/(app)/services/business/business-permit'
		},
		{ name: 'Special Permit', url: '/(app)/services/business/special-permit' },
		{
			name: "Certified True Copy of Business License & Mayor's Permit",
			url: '/(app)/services/business/ctc-business-license'
		}
	]}
>
	{#snippet requirements()}
		<div class="info">
			<h2>Requirements</h2>
			<p class="description">There are additional documents if applied through a representative.</p>
		</div>
		<div class="documents">
			<h3>Documents</h3>
			<ul>
				<li>Request Letter indicating the name of requestor and purpose of certification</li>
				<li>Identification Card</li>
				<li>Barangay Clearance</li>
				<li>Assessor's Certificate</li>
				<li>Referral letter from Hospital/DSWD/PAO or other government agencies (if applicable)</li>
			</ul>
		</div>
		<div class="representative">
			<h3>If done through a representative</h3>
			<ul>
				<li>Letter of Authority / Special Power of Attorney / Secretary Certificate</li>
				<li>Valid ID of both the owner and representative</li>
			</ul>
		</div>
	{/snippet}

	{#snippet steps()}
		<div class="info">
			<h2>Step-by-step process</h2>
			<p>Follow these steps to claim your certificate.</p>
		</div>
		<ol>
			<li>
				<h3>Submit application & requirements</h3>
				<p>
					Fill out the application form and submit the request letter together with other required
					documents to the BPLO frontliners for review and validation. The BPLO will verify records
					and issue an Order of Payment.
				</p>
			</li>
			<li>
				<h3>Pay the fee</h3>
				<p>
					Proceed to the Office of the City Treasurer's – Miscellaneous Division and pay ₱75, plus
					₱15 per additional page. An Official Receipt will be issued.
				</p>
			</li>
			<li>
				<h3>Claim the certification</h3>
				<p>
					Return to the BPLO for the processing and printing of the Certification, signing by the
					Chief of BPLO, and release to the applicant.
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
