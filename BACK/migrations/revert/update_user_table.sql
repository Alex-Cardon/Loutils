-- Revert le-bon-outil:update_user_table from pg

BEGIN;

ALTER TABLE "user"
DROP COLUMN "role";

COMMIT;
