BEGIN;

INSERT INTO "user" ("name", "email", "password", "role") VALUES
('Jean','jean.dupont@mail.com','jean','user'),
('Michel','michel.dufour@mail.com','michel','user'),
('Jeanne','jeanne.dupont@mail.com','jeanne','modo'),
('Micheline','micheline.dufour@mail.com','micheline', 'admin');


INSERT INTO "category" ("name") VALUES
('perçage'),
('ponçage'),
('soudage'),
('élévation');

INSERT INTO "ad" ("title", "picture_id", "price", "product_state", "deposit", "description","ad_type",  "postcode", "category_id", "user_id") VALUES
('perceuse à percution', 1, 12,'bon état',10,'perceuse à percution au top pour percer tout types de matériaux','je loue',59000,1,2),

('ponceuse électrique', 2, 15,'comme neuf',80,'ponceuse parfaite pour poncer du bois','je cherche',75001,2,3),

('poste à souder', 3, 20,'en état de marche',20,'poste à souder pro. Location possible du masque à souder eb complément','je loue',74000,3,4),

('échelle', 4, 25,'bon état',70,'une échelle stable de minimum 5 mètres','je cherche',12000,4,1);


INSERT INTO "booking" ("begining", "end", "user_id", "ad_id") VALUES
('2021-06-09', '2021-06-10',4 ,1),
('2021-06-11', '2021-07-11',3 ,1),
('2021-06-01', '2021-06-05',2 ,3),
('2021-06-12', '2021-06-20', 1,3);

INSERT INTO "saved_research" ( "postcode", "title", "radius", "category_id", "user_id") VALUES
(10100,'meuleuse',10,2,1),
(45000,'',20,3,2),
(60000,'perceuse',30,1,3),
(59680,'nacelle',5,4,4);

INSERT INTO "message" ("content", "recipient", "sender") VALUES
('Bonjour Jean je peux vous louer une échelle', 1,2),
('Bonjour Michel je souhaite louer une perceuse', 2,3),
('Bonjour Jeanne jai une ponceuse parfaite pour vous', 3,4),
('Bonjour Micheline je suis interessé par votre poste à souder', 4,1);

INSERT INTO "bookmark" ("ad_id", "user_id") VALUES
(1, 3),
(1, 4),
(3, 2),
(4, 2);

INSERT INTO "ad_rating" ("rated_by_user", "rated_ad", "rating") VALUES
(1, 3, 2),
(1, 4, 3),
(3, 2, 4),
(4, 2, 1);

COMMIT;