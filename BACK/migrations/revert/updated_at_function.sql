-- Revert le-bon-outil:updated_at_function from pg

BEGIN;

DROP FUNCTION "trigger_set_timestamp" CASCADE;



COMMIT;
