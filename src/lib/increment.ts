import { db } from './db';
import { heartsTable } from './schema';
import { sql } from 'drizzle-orm';


export const incrementHearts = async (monster_id: string) => {
	await db.insert(heartsTable)
		.values({count: 1, monster: monster_id, starCount: 0})
		.onConflictDoUpdate({
			target: heartsTable.monster,
			set: { count: sql`${heartsTable.count} + 1`}
		});

}


export const getHearts = async () => {
	const result = await db.select().from(heartsTable);
	return result;
}