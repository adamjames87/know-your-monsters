import { sqliteTable, text, integer } from 'drizzle-orm/sqlite-core';

export const heartsTable = sqliteTable( 'message_reactions', {
	monster: text('monster_id').notNull().unique(),
	count: integer('heart_count').notNull(),
	starCount: integer('star_count').notNull()
});

