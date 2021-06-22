-- Revert le-bon-outil:msg_ad_id from pg

BEGIN;


ALTER TABLE message
  DROP COLUMN "ad_id";

COMMIT;
