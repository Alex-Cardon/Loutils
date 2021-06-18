-- Deploy le-bon-outil:msg_ad_id to pg

BEGIN;

ALTER TABLE message
ADD COLUMN "ad_id" integer NOT NULL REFERENCES "ad"("id") ON DELETE CASCADE;

COMMIT;
