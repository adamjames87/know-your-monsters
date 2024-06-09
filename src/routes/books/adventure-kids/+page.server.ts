import { addComment, getComments } from '$lib/comments';
import type { Actions } from '@sveltejs/kit';

export const load  =  async () => {
	return {
		comments: await getComments('adventure-kids')
	}
}

export const actions: Actions  = {
	default: async (event) => {
		const formData = await event.request.formData();
		const story =  formData.get("story");
		const username = formData.get("username");
		const comment = formData.get("comment");
		console.log(story)
		console.log(username)
		console.log(comment)
		console.log("ACTION")
		if (story && username && comment) {
			if (typeof story === 'string'
			&& typeof comment === 'string'
			&& typeof username === 'string') {
				await addComment(story, username, comment);
			}
		}
	}
}