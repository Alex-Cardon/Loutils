-- Deploy le-bon-outil:user_confirmed to pg

BEGIN;

ALTER TABLE "user"
ADD COLUMN "confirmed" BOOLEAN NOT NULL DEFAULT FALSE;

COMMIT;
