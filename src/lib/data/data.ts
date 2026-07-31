import type { Link, ExternalLink } from '$lib/types/link.types';

export const bettergovProjects: ExternalLink[] = [
	{
		name: 'Transparency Portal',
		url: 'https://transparency.bettergov.ph/'
	},
	{
		name: 'Open Data Portal',
		url: 'https://data.bettergov.ph/'
	},
	{
		name: 'Petitions PH',
		url: 'https://petition.ph/'
	},
	{
		name: 'SALN Tracker',
		url: 'https://saln.bettergov.ph/'
	},
	{
		name: 'Budget Tracker',
		url: 'https://budget.bettergov.ph/'
	},
	{
		name: 'Philgeps Tracker',
		url: 'https://philgeps.bettergov.ph/'
	}
];

const legislativePrefix = '/(app)/legislative';
export const legislatives: Link[] = [
	{
		name: 'Ordinance',
		url: legislativePrefix
	},
	{
		name: 'Resolution',
		url: legislativePrefix
	}
];

export const resources: ExternalLink[] = [
	{
		name: 'cityofcalapan.gov.ph',
		url: 'https://cityofcalapan.gov.ph/'
	},
	{
		name: 'ormindoro.gov.ph',
		url: 'https://ormindoro.gov.ph/'
	},
	{
		name: 'foi.gov.ph',
		url: 'https://foi.gov.ph/'
	}
];
