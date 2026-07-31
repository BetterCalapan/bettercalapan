import type { Link } from '$lib/types/link.types';

const servicePrefix = '/(app)/services';
export const services: {
	heading: string;
	description: string;
	data: Link[];
} = {
	heading: 'Services',
	description: 'See all the services offered in Calapan, divided into categories.',
	data: [
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
	]
};

export const certificates: {
	heading: string;
	description: string;
	data: Link[];
} = {
	heading: 'Certificates',
	description: 'Official documents for birth, marriage, death, and other vital records.',
	data: [
		{
			name: 'Birth Certificate',
			url: `${servicePrefix}/certificates/birth-certificate`
		},
		{
			name: 'Marriage Certificate',
			url: `${servicePrefix}/certificates`
		},
		{
			name: 'Death Certificate',
			url: `${servicePrefix}/certificates`
		},
		{
			name: 'Barangay Clearance',
			url: `${servicePrefix}/certificates`
		},
		{
			name: 'Barangay ID',
			url: `${servicePrefix}/certificates`
		},
		{
			name: 'Police Clearance',
			url: `${servicePrefix}/certificates`
		},
		{
			name: `Driver's License`,
			url: `${servicePrefix}/certificates`
		}
	]
};
