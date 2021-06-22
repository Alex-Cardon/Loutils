-- Deploy le-bon-outil:msg_tab_modif to pg

BEGIN;

ALTER TABLE "message"
 ADD COLUMN "sender_deleted" BOOLEAN NOT NULL DEFAULT FALSE,
 ADD COLUMN "recipient_deleted" BOOLEAN NOT NULL DEFAULT FALSE;

COMMIT;
