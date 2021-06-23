-- Revert le-bon-outil:deleteAd from pg

BEGIN;

ALTER TABLE "booking"
DROP CONSTRAINT "booking_ad_id_fkey"; 


ALTER TABLE "booking"
ADD CONSTRAINT "booking_ad_id_fkey" FOREIGN KEY (ad_id) REFERENCES "ad"("id"); 

ALTER TABLE "ad_rating"
DROP CONSTRAINT "ad_rating_rated_ad_fkey"; 


ALTER TABLE "ad_rating"
ADD CONSTRAINT "ad_rating_rated_ad_fkey" FOREIGN KEY (rated_ad) REFERENCES "ad"("id"); 



COMMIT;
