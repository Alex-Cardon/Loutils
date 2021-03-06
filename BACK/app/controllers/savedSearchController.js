const savedSearchDataMapper = require('../dataMapper/savedSearchDataMapper');

/**
 * @typedef Ad
 * @property {number} id - Identifiant unique
 * @property {number} postcode - Code postal
 * @property {string} title - Titre de l'annonce
 * @property {number} radius - Rayon accepté autour du code postal 
 * @property {number} category_id - Identifiant de la catégorie
 * @property {number} user_id - identifiant de l'utilisateur
 * @property {string} created_at - Date de création (date ISO 8601)
 * @property {string} updated_at - Date de mise à jour (date ISO 8601)
  */

/**
 * @typedef AdInput 
 * @property {number} postcode - Code postal
 * @property {string} title - Titre de l'annonce
 * @property {number} radius - Rayon accepté autour du code postal 
 * @property {number} category_id - Identifiant de la catégorie
 * @property {number} user_id - identifiant de l'utilisateur
 */

module.exports = {

    /**
     * Récupération des recherches enregistrées d'un utilisateur connecté
     * @returns {object[]} Les recherches avec leur id,code postal, titre, rayon, identifiant de la catégorie, identifiant de l'utilisateur, date de création et date de mise à jour
     */
    async getSavedResearch(req, res, next){
        try{

            const user = req.user.user.user_id;

            if(!user){
                return res.status(401).json({
                    msg: "Veuillez vous connecter afin de voir vos recherches sauvegardées"
                  });
            };

            const get = await savedSearchDataMapper.findSavedResearchByUserId(user);
            if(!get){
                return next();
            }
            res.status(200).json({data : get})

        }catch (error) {
            console.trace(error);
            res.json({ error });
        }
    },

    /**
     * Enregistrer une nouvelle recherche
     * @property {number} id - Identifiant unique
     * @property {number} postcode - Code postal
     * @property {string} title - Titre de l'annonce
     * @property {number} radius - Rayon accepté autour du code postal 
     * @property {number} category_id - Identifiant de la catégorie
     * @returns {object} L'idendifiant de la sauvegarde, le code postal, le rayon, l'identifiant de la catégorie, l'identifiant de l'utilisateur, la date de création et la date de mise à jour
     */
    async addNewResearch(req, res, next) {
        try{

            const {postcode, title, radius, category_id} = req.body;

            const user_id = req.user.user.user_id;

            if(!user_id){
                return res.status(401).json({
                    msg: "Veuillez vous connecter afin de voir l'annonce"
                  });
            };

            const post = await savedSearchDataMapper.addNewResearch({postcode, title, radius, category_id, user_id});

            if(!post){
                return next();
            }
    
            res.status(200).json({data : post})


        }catch(error){
            console.trace(error);
            res.json({error});
        }
    },

       /**
     * Modifier une recherche sauvegardée en tant qu'utilisateur connecté
     * @property {number} postcode - Code postal
     * @property {string} title - Titre de l'annonce
     * @property {number} radius - Rayon accepté autour du code postal 
     * @property {number} category_id - Identifiant de la catégorie
     * @returns {object[]} La recherche modifiée avec son id, code postal, titre, rayon, l'id de la catégorie, l'id de l'utilisateur, la date de création et la date de mise à jour
     */
    async updateSavedResearch (req, res, next){
        try{
            const { postcode, title, radius, category_id } = req.body;

            const id = req.params.id; 
            if(!id){
                return res.status(405).json({
                    msg: "L'identifiant de l'annonce est inconnu"
                  });
            };

            const result = await savedSearchDataMapper.updateSavedResearch(id, postcode, title, radius, category_id);

            res.status(200).json({ data :result });

        }catch(error){
            console.trace(error);
            res.json(error);
        }
    },

    /**
     * Supprimer une recherche sauvegardée en tant qu'utilisateur connecté
     * @param {number} id - Id de la recherche
     * @returns {object} Un message indiquant que la recherche a bien été supprimée
     */
    async deleteSavedResearch (req, res) {
        try{
            const id = req.params.id;
            if(!id){
                return res.status(405).json({
                    msg: "L'identifiant de l'annonce est inconnu"
                  });
            };
            const result = await savedSearchDataMapper.deleteOneSavedResearch(id);

            res.status(200).json({msg : "recherche supprimée"});
        }catch(error){
            console.trace(error);
            res.status(500).json({ error: `Server error, please contact an administrator` });
        }
    },
}