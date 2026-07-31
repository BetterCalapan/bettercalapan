import type { RouteId } from '$app/types';

export type Link = {
	name: string;
	url: RouteId;
};
export type ExternalLink = {
	name: string;
	url: string;
};
