import Fuse from 'fuse.js';
import { index } from '$lib/search/index';

const fuse = new Fuse(index, {
	useTokenSearch: true,
	keys: ['title', 'keywords'],
	threshold: 0.2
});

export function getResults(term: string) {
	return fuse.search(term);
}
