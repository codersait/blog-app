import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load: PageLoad = async () => {
	const response = await fetch('https://jsonplaceholder.typicode.com/posts');
	const posts = await response.json();
	if (response.ok) {
		return {
			status: response.status,
			posts
		};
	} else {
		error(404, 'Not found');
	}
};
