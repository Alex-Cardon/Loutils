SELECT * FROM "ad" 

    JOIN "category" ON "ad"."category_id" = "category"."id"
    
    JOIN "user" ON "ad"."user_id" = "user"."id"         

    WHERE "ad"."postcode" IN (59000) 
    
     AND "ad"."title" LIKE  '%perceuse%' 
     AND "category"."name"= 'perçage'

     const query = {
        text: `SELECT * FROM "ad" 

        JOIN "category" ON "ad"."category_id" = "category"."id"
        
        JOIN "user" ON "ad"."user_id" = "user"."id"         
        
        WHERE "ad"."postcode" IN ('${postcode}') AND
    
        "ad"."title" LIKE  $2  AND
    
        "category"."name"= $3`,
        values : ['%'+title+'%', category]
    }
    console.log(query);
    const result = await client.query(query);