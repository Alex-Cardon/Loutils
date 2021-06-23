-- Revert le-bon-outil:msg_tab_modif from pg

BEGIN;

ALTER TABLE message
  DROP COLUMN "sender_deleted",
              "recipient_deleted";

COMMIT;
