import type { RouteId } from '$app/types';

type Link = {
	name: string;
	url: RouteId;
};
type ExternalLink = {
	name: string;
	url: string;
};

const servicePrefix = '/services';
export const services: Link[] = [
	{
		name: 'Certificates',
		url: `${servicePrefix}/certificates`
	},
	{
		name: 'Business',
		url: `${servicePrefix}/business`
	},
	{
		name: 'Tax Payments',
		url: `${servicePrefix}/tax-payments`
	},
	{
		name: 'Social Services',
		url: `${servicePrefix}/social-services`
	},
	{
		name: 'Health',
		url: `${servicePrefix}/health`
	},
	{
		name: 'Agriculture',
		url: `${servicePrefix}/agriculture`
	},
	{
		name: 'Infrastructure',
		url: `${servicePrefix}/infrastructure`
	},
	{
		name: 'Education',
		url: `${servicePrefix}/education`
	},
	{
		name: 'Public Safety',
		url: `${servicePrefix}/public-safety`
	},
	{
		name: 'Environment',
		url: `${servicePrefix}/environment`
	}
];

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

const governmentPrefix = '/government';
export const governments: Link[] = [
	{
		name: 'Officials',
		url: `${governmentPrefix}/officials`
	},
	{
		name: 'Departments',
		url: `${governmentPrefix}/departments`
	},
	{
		name: 'Barangays',
		url: `${governmentPrefix}/barangays`
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
