import type { RouteId } from "$app/types";

type PageSection = {
	name: string;
	url: RouteId;
};

const prefix = "/(app)/(content)";
export const pageSections: PageSection[] = [
	{
		name: "services",
		url: `${prefix}/services`
	},
	{
		name: "government",
		url: `${prefix}/government`
	},
	{
		name: "statistics",
		url: `${prefix}/statistics`
	},
	{
		name: "contact",
		url: `${prefix}/contact`
	}
];
