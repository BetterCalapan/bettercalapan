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
