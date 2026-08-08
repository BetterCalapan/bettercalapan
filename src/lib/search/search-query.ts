export function normalizeSearchTerm(term: string | null | undefined): string {
	return term?.trim() ?? "";
}

export function createSearchQuery(term: string): string {
	return new URLSearchParams({ term: normalizeSearchTerm(term) }).toString();
}
