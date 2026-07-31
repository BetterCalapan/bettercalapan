import Fuse from 'fuse.js/min-basic';
import { index } from '$lib/search/index';

const fuse = new Fuse(index, {
	keys: ['title', 'keywords'],
	threshold: 0.2
});

export function getResults(term: string) {
	return fuse.search(term);
}
