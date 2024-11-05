import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ params }) => {
	const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`);
	const post = await response.json();
	console.log(post);

	if (response.ok) {
		return {
			status: response.status,
			post
		};
	} else {
		error(404, 'Not found');
	}
};
