-- Deploy le-bon-outil:init to pg

BEGIN;

CREATE DOMAIN pint AS int
CHECK (VALUE >= 0);
COMMENT ON DOMAIN pint IS 'only positive integer is accepted';



CREATE TABLE "user" (
    "id" integer GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "name" text NOT NULL,
    "email" text NOT NULL,
    "password" text NOT NULL,
    "created_at" timestamptz NOT NULL DEFAULT now(),
    "updated_at" timestamptz
);

CREATE TABLE "category" (
    "id" integer GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "name" text NOT NULL,
    "created_at" timestamptz NOT NULL DEFAULT now()
);

CREATE TABLE "image_files" (
    "id" SERIAL NOT NULL PRIMARY KEY,
    "filename" TEXT UNIQUE NOT NULL,
    "filepath" TEXT NOT NULL,
    "mimetype" TEXT NOT NULL,
    "size" BIGINT NOT NULL,
    "created_at" timestamptz NOT NULL DEFAULT now()
);

CREATE TABLE "ad" (
    "id" integer GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "title" text NOT NULL,
    "picture_id" integer NOT NULL REFERENCES "image_files"("id"),
    "price" pint,
    "product_state" text NOT NULL,
    "deposit" pint,
    "description" text NOT NULL,
    "ad_type" text NOT NULL,
    "postcode" pint NOT NULL,
    "category_id" integer NOT NULL REFERENCES "category"("id"), --si je supprime une annonce, je veux que la catégorie existe toujours donc pas de cascade
    "user_id" integer NOT NULL REFERENCES "user"("id"), --si je supprime une annonce, je veux que l'utilisateur existe toujours donc pas de cascade
    "created_at" timestamptz NOT NULL DEFAULT now(),
    "updated_at" timestamptz
);


CREATE TABLE "booking" (
    "id" integer GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "begining" timestamptz NOT NULL,
    "end" timestamptz NOT NULL,
    "user_id" integer NOT NULL REFERENCES "user"("id"),
    "ad_id" integer NOT NULL REFERENCES "ad"("id"), --si je supprime une reservation, je veux que l'annonce existe toujours donc pas de cascade
    "created_at" timestamptz NOT NULL DEFAULT now(),
    "updated_at" timestamptz
);


CREATE TABLE "saved_research" (
    "id" integer GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "postcode" pint,
    "title" text,
    "radius" pint,
    "category_id" integer NOT NULL REFERENCES "category"("id"), --si je supprime une recherche sauvegardée, je veux que la catégorie existe toujours donc pas de cascade
    "user_id" integer NOT NULL REFERENCES "user"("id"), --si je supprime une recherche sauvegardée, je veux qu'un utilisateur existe toujours donc pas de cascade
    "created_at" timestamptz NOT NULL DEFAULT now(),
    "updated_at" timestamptz
);

CREATE TABLE "message" (
    "id" integer GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "content" text NOT NULL,
    "recipient" integer NOT NULL REFERENCES "user"("id"), --si je supprime un message, je veux qu'un utilisateur existe toujours donc pas de cascade
    "sender" integer NOT NULL REFERENCES "user"("id"), --si je supprime un message, je veux qu'un utilisateur existe toujours donc pas de cascade
    "created_at" timestamptz NOT NULL DEFAULT now(),
    "updated_at" timestamptz
);

CREATE TABLE "bookmark" (
    "ad_id" integer NOT NULL REFERENCES "ad"("id"), --si je supprime un favori, je veux qu'une annonce existe toujours donc pas de cascade
    "user_id" integer NOT NULL REFERENCES "user"("id"),--si je supprime un favori, je veux qu'un utilisateur existe toujours donc pas de cascade
    "created_at" timestamptz NOT NULL DEFAULT now()
);

CREATE TABLE "ad_rating" (
    "rated_by_user" integer NOT NULL REFERENCES "user"("id"),
    "rated_ad" integer NOT NULL REFERENCES "ad"("id"),
    "rating" integer NOT NULL,
    "created_at" timestamptz NOT NULL DEFAULT now(),
    "updated_at" timestamptz
);


COMMIT;
