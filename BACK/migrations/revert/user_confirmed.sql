-- Revert le-bon-outil:user_confirmed from pg

BEGIN;

ALTER TABLE "user"
DROP "confirmed";

COMMIT;
