-- Revert le-bon-outil:image from pg

BEGIN;

DROP TABLE "image_files";

ALTER TABLE "ad" 
    RENAME "picture_id" TO "picture";



COMMIT;
