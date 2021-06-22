-- Revert le-bon-outil:add_col_msg from pg

BEGIN;

ALTER TABLE "message"
DROP "has_been_read";

COMMIT;
