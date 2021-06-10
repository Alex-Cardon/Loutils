-- Deploy le-bon-outil:update_user_table to pg

BEGIN;

ALTER TABLE "user"
ADD "role" text NOT NULL;

COMMIT;
