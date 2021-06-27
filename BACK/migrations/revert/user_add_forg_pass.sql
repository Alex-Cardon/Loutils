-- Revert le-bon-outil:user_add_forg_pass from pg

BEGIN;

ALTER TABLE "user"
DROP "forg_pass";

COMMIT;
