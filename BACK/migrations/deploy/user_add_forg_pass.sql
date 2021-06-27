-- Deploy le-bon-outil:user_add_forg_pass to pg

BEGIN;

ALTER TABLE "user"
ADD COLUMN "forg_pass" BOOLEAN NOT NULL DEFAULT FALSE;

COMMIT;
