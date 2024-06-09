import { commentsTable } from '$lib/schema';
import { db } from '$lib/db';
import { eq } from 'drizzle-orm';


export const addComment = async (
	story_id: string,
	user: string,
	comment: string
) => {
	await db.insert(commentsTable).values({
		comment: comment,
		story: story_id,
		user: user
	});
}


export const getComments = async (
	story_id: string
) => {
	const comments = await db.select()
		.from(commentsTable)
		.where(
			eq(commentsTable.story, story_id)
		);
	return comments;
}

