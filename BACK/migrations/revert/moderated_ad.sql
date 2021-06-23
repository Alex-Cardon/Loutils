-- Revert le-bon-outil:moderated_ad from pg

BEGIN;

ALTER TABLE "ad"
  DROP COLUMN "moderated";

COMMIT;
