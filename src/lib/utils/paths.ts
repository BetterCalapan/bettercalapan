import { resolve } from "$app/paths";
import type { ResolvedPathname, RouteId } from "$app/types";

export function resolveRoute(url: RouteId | string): ResolvedPathname {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any -- resolve() requires a single literal route; data-driven URLs are only validated at the data source
	return resolve(url as any);
}
