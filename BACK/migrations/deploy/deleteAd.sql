-- Deploy le-bon-outil:deleteAd to pg

BEGIN;

ALTER TABLE "booking"
DROP CONSTRAINT "ad_id"; 

ALTER TABLE "booking"
ADD CONSTRAINT "ad_id"  integer NOT NULL REFERENCES "ad"("id") ON DELETE CASCADE;

COMMIT;
