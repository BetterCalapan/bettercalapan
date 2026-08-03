import type { RouteId } from '$app/types';

type PageSection = {
	name: string;
	url: RouteId;
};

export const pageSections: PageSection[] = [
	{
		name: 'services',
		url: '/(app)/services'
	},
	{
		name: 'government',
		url: '/(app)/government'
	},
	{
		name: 'statistics',
		url: '/(app)/statistics'
	},
	{
		name: 'transparency',
		url: '/(app)/transparency'
	},
	{
		name: 'contact',
		url: '/(app)/contact'
	}
];
