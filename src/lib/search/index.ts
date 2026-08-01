import type { RouteId } from '$app/types';

export const index: { title: string; url: RouteId; keywords: string[] }[] = [
	{
		title: 'Government',
		url: '/(app)/government',
		keywords: ['government', 'officials', 'departments', 'barangays']
	},
	{
		title: 'Officials',
		url: '/(app)/government/officials',
		// TODO: add more keywords
		keywords: [
			'government',
			'officials',
			'executive branch',
			'legislative branch',
			'mayor',
			'vice mayor',
			'city councilor'
		]
	},
	{
		title: 'Departments',
		url: '/(app)/government/departments',
		// TODO: add more keywords
		keywords: ['government', 'departments']
	},
	{
		title: 'Barangays',
		url: '/(app)/government/barangays',
		// TODO: add more keywords
		keywords: ['government', 'barangays', 'bayanan II']
	},
	{
		title: 'Services',
		url: '/(app)/services',
		// TODO: add more keywords
		keywords: [
			'services',
			'certificates',
			'business',
			'tax payments',
			'social services',
			'health',
			'agriculture',
			'infrastructure',
			'education',
			'public safety',
			'environment'
		]
	},
	{
		title: 'Business Permit',
		url: '/(app)/services/business/business-permit',
		keywords: [
			'business permit',
			'business license',
			"mayor's permit",
			'permit application',
			'permit renewal',
			'bplo',
			'business permit and licensing office',
			'services',
			'business'
		]
	},
	{
		title: 'Business Status Certificate',
		url: '/(app)/services/business/business-status-certificate',
		keywords: [
			'business status certificate',
			'business certification',
			'business status verification',
			'business records',
			'bplo',
			'business permit and licensing office',
			'services',
			'business'
		]
	},
	{
		title: "Certified True Copy of Business License and Mayor's Permit",
		url: '/(app)/services/business/ctc-business-license',
		keywords: [
			'certified true copy',
			'ctc business license',
			'business license',
			"mayor's permit",
			'bplo',
			'business permit and licensing office',
			'services',
			'business'
		]
	},
	{
		title: 'Occupational Permit',
		url: '/(app)/services/business/occupational-permit',
		keywords: [
			'occupational permit',
			"occupational mayor's permit",
			'worker permit',
			'employee permit',
			'first-time job seeker',
			'food handler',
			'bplo',
			'services',
			'business'
		]
	},
	{
		title: 'Safety Seal Certificate',
		url: '/(app)/services/business/safety-seal-certificate',
		keywords: [
			'safety seal certificate',
			'safety seal certification',
			'minimum public health standards',
			'mphs',
			'health and safety protocols',
			'business inspection',
			'bplo',
			'services',
			'business'
		]
	},
	{
		title: 'Special Permit',
		url: '/(app)/services/business/special-permit',
		keywords: [
			'special permit',
			'business establishment permit',
			'unified application form',
			'business name registration',
			'zoning fees',
			'bplo',
			'business permit and licensing office',
			'services',
			'business'
		]
	},
	{
		title: 'Certificates',
		url: '/(app)/services/certificates',
		// TODO: add more keywords
		keywords: [
			'services',
			'certificates',
			'birth certificate',
			'marriage certificate',
			'death certificate',
			'barangay clearance',
			'barangay id',
			'police clearance',
			`driver's license`,
			'city civil registry'
		]
	},
	{
		title: 'Birth Certificate',
		url: '/(app)/services/certificates/birth-certificate',
		// TODO: add more keywords
		keywords: [
			'birth certificate',
			'services',
			'certificates',
			'owner',
			'representative',
			'valid id',
			'original',
			'photocopy',
			'150',
			'authorization letter',
			'eligibility',
			'civil registrar',
			'civil registry',
			'request form'
		]
	},
	{
		title: 'Marriage Certificate',
		url: '/(app)/services/certificates/marriage-certificate',
		keywords: [
			'marriage certificate',
			'certificate of marriage',
			'marriage registration',
			'civil registry',
			'civil registrar',
			'marriage license',
			'late registration',
			'authorized representative',
			'services',
			'certificates'
		]
	},
	{
		title: 'Death Certificate',
		url: '/(app)/services/certificates/death-certificate',
		keywords: [
			'death certificate',
			'certificate of death',
			'death registration',
			'burial permit',
			'transfer permit',
			'late registration',
			'civil registry',
			'philippine statistics authority',
			'psa',
			'services',
			'certificates'
		]
	},
	{
		title: 'Barangay Clearance',
		url: '/(app)/services/certificates/barangay-clearance',
		keywords: [
			'barangay clearance',
			'clearance',
			'barangay hall',
			'proof of residency',
			'good standing',
			'authorized representative',
			'services',
			'certificates'
		]
	},
	{
		title: 'Barangay ID',
		url: '/(app)/services/certificates/barangay-id',
		keywords: [
			'barangay id',
			'barangay identification card',
			'local id',
			'barangay hall',
			'proof of residency',
			'id application',
			'id replacement',
			'services',
			'certificates'
		]
	},
	{
		title: 'Police Clearance',
		url: '/(app)/services/certificates/police-clearance',
		keywords: [
			'police clearance',
			'pnp clearance',
			'philippine national police',
			'police station',
			'online appointment',
			'biometrics',
			'background check',
			'services',
			'certificates'
		]
	},
	{
		title: "Driver's License",
		url: '/(app)/services/certificates/drivers-license',
		keywords: [
			"driver's license",
			'drivers license',
			'driving license',
			'lto',
			'land transportation office',
			'license renewal',
			'student permit',
			'medical certificate',
			'driving test',
			'services',
			'certificates'
		]
	}
];
