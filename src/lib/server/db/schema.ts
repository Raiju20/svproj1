import { sqliteTable, text, integer } from 'drizzle-orm/sqlite-core';

export const user = sqliteTable('user', {
	id: text('id').primaryKey(),
	age: integer('age'),
	username: text('username').notNull().unique(),
	passwordHash: text('password_hash').notNull()
});

export const session = sqliteTable('session', {
	id: text('id').primaryKey(),
	userId: text('user_id')
		.notNull()
		.references(() => user.id),
	expiresAt: integer('expires_at', { mode: 'timestamp' }).notNull()
});

export const albums = sqliteTable("albums", {
	albumId: integer("AlbumId").primaryKey({ autoIncrement: true }).notNull(),
	title: text("Title", { length: 160 }).notNull(),
	artistId: integer("ArtistId").notNull().references(() => artists.artistId),
});

export const artists = sqliteTable("artists", {
	artistId: integer("ArtistId").primaryKey({ autoIncrement: true }).notNull(),
	name: text("Name", { length: 120 }),
	country: text("Country", { length: 120 }),
});

export type Session = typeof session.$inferSelect;

export type User = typeof user.$inferSelect;

export type Artist = typeof artists.$inferSelect;

export type Album = typeof albums.$inferSelect;