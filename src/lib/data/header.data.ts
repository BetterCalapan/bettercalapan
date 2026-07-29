import type { RouteId } from '$app/types';

type PageSection = {
	name: string;
	url: RouteId;
};

export const pageSections: PageSection[] = [
	{
		name: 'services',
		url: '/services'
	},
	{
		name: 'government',
		url: '/government'
	},
	{
		name: 'legislative',
		url: '/legislative'
	},
	{
		name: 'statistics',
		url: '/statistics'
	},
	{
		name: 'transparency',
		url: '/transparency'
	},
	{
		name: 'contact',
		url: '/contact'
	}
];
