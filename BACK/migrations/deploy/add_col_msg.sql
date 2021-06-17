-- Deploy le-bon-outil:add_col_msg to pg

BEGIN;

ALTER TABLE message
  ADD COLUMN "has_been_read" BOOLEAN NOT NULL DEFAULT FALSE;

COMMIT;
