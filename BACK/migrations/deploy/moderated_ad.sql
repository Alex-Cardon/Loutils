-- Deploy le-bon-outil:moderated_ad to pg

BEGIN;

ALTER TABLE "ad"
ADD COLUMN "moderated" BOOLEAN NOT NULL DEFAULT FALSE;

COMMIT;
