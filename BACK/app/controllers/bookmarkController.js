const bookmarkDataMapper = require ('../dataMapper/bookmarkDataMapper');


/**
 * @typedef Bookmark
 * @property {number} ad_id - Identifiant unique de l'annonce
 * @property {number} user_id - Identifiant unique de l'utilisateur
 * @property {string} created_at - Date de création (date ISO 8601)
  */

/**
 * @typedef BookmarkInput
 * @property {number} ad_id - Identifiant unique de l'annonce
 * @property {number} user_id - Identifiant unique de l'utilisateur
 */


module.exports = {

    /**
     * Afficher les annonces mises en favori par l'utilisateur connecté
     * @returns {object[]} L'identifiant de l'annonce, son titre, l'identifiant de la photo, le prix, l'état, la caution, la description, le type d'annonce, la code postal, l'identifiant de la catégorie, l'identifiant de l'utilisateur, la date de création, la date de mise à jour, le nom de l'utilisateur, son mail, son mot de passe crypté et le role
     */
    async getBookmarksById(req, res){
        try{
            const id = req.user.user.user_id;

            if(!id){
                return res.status(401).json({
                    msg: "Veuillez vous connecter afin de voir vos favoris"
                  });
            };

            const ad = await bookmarkDataMapper.findByPk(id);

            if(!ad){
                return res.status(405).json({
                    msg: "L'identifiant de l'annonce est inconnu"
                  });
            }
            res.status(200).json({data : ad})

        }catch (error) {
            console.trace(error);
            res.json({ error });
        }
    },

    /**
     * Ajouter une annonce en favori en tant qu'utilisateur connecté
     * @param {number} id - Identifiant de l'annonce
     * @returns {object} L'identifiant de l'annonce, l'identifiant de l'utilisateur et la date de création
     */
    async addBookmark(req, res, next){
        try{
            
            const user_id = req.user.user.user_id;

            if(!user_id){
                return res.status(401).json({
                    msg: "Veuillez vous connecter afin de voir l'annonce"
                  });
            };

            const ad_id = req.params.id;
            if(!ad_id){
                return res.status(405).json({
                    msg: "L'identifiant de l'annonce est inconnu"
                  });
            };

            const bookmarkExist = await bookmarkDataMapper.bookmarkExist(ad_id, user_id);

            if(bookmarkExist) return res.status(401).json({ error: "bookmark already exist" });

            const post = await bookmarkDataMapper.addBookmark(ad_id, user_id);
            
    
            if(!post){
                return next();
            }
    
            res.status(200).json({data : post})

        }catch (error) {
            console.trace(error);
            res.json({ error });
        }
    },

    /**
     * Supprimer une annonce en favori en tant qu'utilisateur connecté
     * @param {number} id - Identifiant du favori
     * @returns {object} Un message indiquant que le favori est supprimé
     */
    async deleteBookmark(req, res)  {

        try {

            const user_id = req.user.user.user_id;

            if(!user_id){
                return res.status(401).json({
                    msg: "Veuillez vous connecter afin de voir l'annonce"
                  });
            };


            const ad_id = req.params.id;

            if(!ad_id){
                return res.status(405).json({
                    msg: "L'identifiant de l'annonce est inconnu"
                  });
            };


            const result = await bookmarkDataMapper.deleteOneBookmark(ad_id, user_id);

            res.status(200).json({msg : "Favori supprimé"});
        } catch (error) {
            console.trace(error);
            res.status(500).json({ error: `Server error, please contact an administrator` });
        }
    },
 
}

