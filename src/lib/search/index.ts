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
	}
];
