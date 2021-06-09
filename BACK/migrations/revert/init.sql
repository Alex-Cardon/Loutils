-- Revert le-bon-outil:init from pg

BEGIN;

DROP TABLE "bookmark";

DROP TABLE "message";

DROP TABLE "saved_research";

DROP TABLE "user";

DROP TABLE "booking";

DROP TABLE "ad";

DROP TABLE "category";

DROP DOMAIN "pint";

COMMIT;
