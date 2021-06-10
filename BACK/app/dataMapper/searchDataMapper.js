const client = require('../client');

class SearchModel {

datavalues = {};

    set data(values) {
        for (const field of search.fields) {
            if (values[field]) {
                search.dataValues[field] = values[field];
            }
        }
    };

    static async findByName(title,category, postcode,  radius) {
        const result = await client.query(`    SELECT * FROM "ad" 

        JOIN "category" ON "ad"."category_id" = "category"."id"
        
        JOIN "user" ON "ad"."user_id"="user"."id"        
        
        JOIN "saved_research" ON "user"."id" = "saved_research"."user_id" 
        
        WHERE 
    
        "ad"."title"='perceuse à percution' OR
    
        "ad"."postcode"='75000'
        OR
        "category"."name"='élévation'`, [title, postcode, category, radius]);

        if (!result.rows) {
            return null;
        }
        return (result.rows);
    };

/*! Mise en place de la requette en cours, "plus qu'à mettre" la connexion à l'API qui récupère les villes autours */




}

module.exports = SearchModel;