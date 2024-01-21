CREATE TABLE `users` (
	`id_user` integer PRIMARY KEY NOT NULL,
	`user_login` text NOT NULL,
	`username` text,
	`refresh_token` text NOT NULL,
	`active` integer DEFAULT 1 NOT NULL,
	`created_at` integer NOT NULL,
	`updated_at` integer NOT NULL
);
