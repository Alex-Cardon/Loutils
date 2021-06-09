-- Deploy le-bon-outil:init to pg

BEGIN;

CREATE DOMAIN pint AS int
CHECK (VALUE > 0);
COMMENT ON DOMAIN pint IS 'only positive integer is accepted';

CREATE TABLE "category" (
    "id" integer GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "name" text NOT NULL,
    "created_at" timestamptz NOT NULL DEFAULT now(),
    "updated_at" timestamptz,
    "deleted_at" timestamptz
);

CREATE TABLE "ad" (
    "id" integer GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "title" text NOT NULL,
    "picture" text NOT NULL,
    "price" pint NOT NULL,
    "product_state" text NOT NULL,
    "deposit" pint NOT NULL,
    "description" text NOT NULL,
    "ad-type" text NOT NULL,
    "rating"pint,
    "category_id" integer NOT NULL REFERENCES "category"("id"),
    "created_at" timestamptz NOT NULL DEFAULT now(),
    "updated_at" timestamptz,
    "deleted_at" timestamptz
);

CREATE TABLE "booking" (
    "id" integer GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "begining" timestamptz NOT NULL,
    "end" timestamptz NOT NULL,
    "ad_id" integer NOT NULL REFERENCES "ad"("id"),
    "created_at" timestamptz NOT NULL DEFAULT now(),
    "updated_at" timestamptz,
    "deleted_at" timestamptz
);


CREATE TABLE "user" (
    "id" integer GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "name" text NOT NULL,
    "email" text NOT NULL,
    "password" text NOT NULL,
    "phone" text ,
    "adress" text NOT NULL,
    "postcode" pint NOT NULL,
    "rating" pint ,
    "created_at" timestamptz NOT NULL DEFAULT now(),
    "updated_at" timestamptz,
    "deleted_at" timestamptz
);

CREATE TABLE "saved_research" (
    "id" integer GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "adress" text,
    "postcode" pint,
    "title" text,
    "radius" pint,
    "category_id" integer NOT NULL REFERENCES "category"("id"),
    "user_id" integer NOT NULL REFERENCES "user"("id"),
    "created_at" timestamptz NOT NULL DEFAULT now(),
    "updated_at" timestamptz,
    "deleted_at" timestamptz
);

CREATE TABLE "message" (
    "id" integer GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "content" text NOT NULL,
    "recipient" integer NOT NULL REFERENCES "user"("id"),
    "created_at" timestamptz NOT NULL DEFAULT now(),
    "updated_at" timestamptz,
    "deleted_at" timestamptz
);

CREATE TABLE "bookmark" (
    "ad_id" integer NOT NULL REFERENCES "ad"("id"),
    "user_id" integer NOT NULL REFERENCES "user"("id"),
    "created_at" timestamptz NOT NULL DEFAULT now(),
    "updated_at" timestamptz,
    "deleted_at" timestamptz
);


COMMIT;
