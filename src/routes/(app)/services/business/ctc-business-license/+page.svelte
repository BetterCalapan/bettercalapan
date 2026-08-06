<script>
	import BusinessPage from "../business-page.svelte";
	import Clock from "@lucide/svelte/icons/clock";
	import Landmark from "@lucide/svelte/icons/landmark";
	import MapPin from "@lucide/svelte/icons/map-pin";
	import Phone from "@lucide/svelte/icons/phone";

	const faq = [
		{
			question: "What is the purpose of this certified true copy?",
			answer:
				"It is issued by the City Government to Business Owners who request it for whatever legal purposes it may serve."
		}
	];
</script>

<BusinessPage
	title="Certified True Copy of Business License and Mayor's Permit"
	description="Issued to business owners who request it in whatever legal purposes it may serve."
	{faq}
	relatedServices={[
		{
			name: "Business Permit",
			url: "/(app)/services/business/business-permit"
		},
		{
			name: "Occupational Permit",
			url: "/(app)/services/business/occupational-permit"
		},
		{ name: "Special Permit", url: "/(app)/services/business/special-permit" }
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
				<li>Photocopy of Business License and Mayor's Permit</li>
				<li>Identification Card</li>
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
			<p>Follow these steps to claim your certified true copy.</p>
		</div>
		<ol>
			<li>
				<h3>Submit requirements</h3>
				<p>
					Submit the requirements to the BPLO frontliners for review, validation, and verification
					of records. An Order of Payment will be issued.
				</p>
			</li>
			<li>
				<h3>Pay the fee</h3>
				<p>
					Upon receiving the Order of Payment, pay ₱90 at the Office of the City Treasurer's –
					Miscellaneous Division. An Official Receipt will be issued.
				</p>
			</li>
			<li>
				<h3>Claim the document</h3>
				<p>
					Return to the BPLO for the stamping, signing, and releasing of the Certified True Copy of
					Business License and Mayor's Permit.
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
