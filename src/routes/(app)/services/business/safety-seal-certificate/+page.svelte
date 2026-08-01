<script>
	import Clock from '$lib/icons/clock.svelte';
	import Landmark from '$lib/icons/landmark.svelte';
	import MapPin from '$lib/icons/map-pin.svelte';
	import Phone from '$lib/icons/phone.svelte';
	import BusinessPage from '../business-page.svelte';

	const faq = [
		{
			question: 'Is there a fee for the Safety Seal?',
			answer:
				"No, the issuance of the Safety Seal Certificate is free of charge as part of the city's effort to support safe business operations."
		},
		{
			question: 'How long is the processing time?',
			answer: 'The total processing time from submission to issuance via email is 7 working days.'
		}
	];
</script>

<BusinessPage
	title="Safety Seal Certificate"
	description="Issued to ensure that all business establishments follow Minimum Public Health Standards (MPHS) and promote business without compromising public health."
	{faq}
	relatedServices={[
		{
			name: 'Business Permit',
			url: '/(app)/services/business/business-permit'
		},
		{ name: 'Special Permit', url: '/(app)/services/business/special-permit' },
		{
			name: 'Business Status Certificate',
			url: '/(app)/services/business/business-status-certificate'
		}
	]}
>
	{#snippet requirements()}
		<div class="info">
			<h2>Requirements</h2>
			<p class="description">
				The documents, protocols, and compliance rules that must be followed.
			</p>
		</div>
		<div class="documents">
			<h3>Documents</h3>
			<ul>
				<li>Duly Accomplished Safety Seal Certification Form</li>
				<li>Valid Business License and Mayor's Permit</li>
			</ul>
		</div>
		<div class="protocols">
			<h3>Health & safety protocols</h3>
			<ul>
				<li>Use of StaySafe.ph or integrated contact tracing tool</li>
				<li>Availability of thermal scanners for employees and clients</li>
				<li>Health declaration sheets for individuals entering the premises</li>
				<li>Designated isolation area for symptomatic employees</li>
				<li>BHERT and COVID-19 hotlines placed in conspicuous areas</li>
				<li>Hand washing stations with soap and sanitizers</li>
				<li>Physical barriers and floor markers for social distancing</li>
				<li>Windows for adequate air exchange in indoor areas</li>
			</ul>
		</div>
		<div class="compliance">
			<h3>Compliance & personnel</h3>
			<ul>
				<li>Availability of personnel-in-charge for protocol monitoring</li>
				<li>Designated Safety Officer for contact tracing and referral</li>
				<li>Established referral system for medical and psychosocial services</li>
				<li>Regular disinfection protocol (at least twice a week)</li>
				<li>Mandatory wearing of face masks and shields</li>
				<li>Storage facility for used facemasks and infectious waste</li>
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
				<h3>Submit application</h3>
				<p>
					Submit the duly accomplished Safety Seal Certification Form along with attached
					eligibility requirements to the BPLO.
				</p>
			</li>
			<li>
				<h3>Review & scheduling</h3>
				<p>
					BPLO personnel will review and validate the requirements submitted and schedule the date
					of inspection.
				</p>
			</li>
			<li>
				<h3>Field inspection</h3>
				<p>
					Inspectors from the BPLO and related divisions will inspect the business establishment to
					validate compliance with health standards.
				</p>
			</li>
			<li>
				<h3>Database recording</h3>
				<p>The inspected establishment is encoded into the database for recording and tracking.</p>
			</li>
			<li>
				<h3>Issuance of certificate</h3>
				<p>
					The Safety Seal Certificate is issued and sent to the applicant's registered email
					address.
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
