import { getHearts, incrementHearts } from '$lib/increment';
import type { PageServerLoad } from '../../.svelte-kit/types/src/routes/$types';
import type { Actions } from '@sveltejs/kit';

export const load : PageServerLoad = async ({params}) => {
	const hearts =  await getHearts();
	return {
		test: "A string",
		hearts
	}
}

export const actions: Actions = {
	default: async (event) => {
		const data = await event.request.formData();
		const monster = data.get("monster");
		if (monster) {
			if (typeof monster === 'string') {
				await incrementHearts(monster);
			}
		}

	}
}