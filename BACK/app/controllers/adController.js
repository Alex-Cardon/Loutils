const adDataMapper = require ('../dataMapper/adDataMapper');

/**
 * @typedef Ad
 * @property {number} id - Identifiant unique
 * @property {string} title - Titre de l'annonce
 * @property {number} picture_id - Id de la photo de l'annonce
 * @property {number} price - Prix de location de l'outil 
 * @property {string} product_state - Etat de l'outil
 * @property {number} deposit - Montant de la caution
 * @property {string} description - Description de l'outil
 * @property {string} title - Titre de l'annonce
 * @property {string} ad_type - Si l'outil est disponible à la location ou si quelqu'un cherche un outil
 * @property {number} postcode - Ville où se situe l'outil
 * @property {number} category_id - La catégorie dans laquelle l'outil se situe
 * @property {number} user_id - Id de l'utilisateur à qui appartient l'outil
 * @property {string} created_at - Date de création (date ISO 8601)
 * @property {string} updated_at - Date de mise à jour (date ISO 8601)
  */

/**
 * @typedef AdInput
 * @property {string} title - Titre de l'annonce
 * @property {number} picture_id - Id de la photo de l'annonce
 * @property {number} price - Prix de location de l'outil 
 * @property {string} product_state - Etat de l'outil
 * @property {number} deposit - Montant de la caution
 * @property {string} description - Description de l'outil
 * @property {string} title - Titre de l'annonce
 * @property {string} ad_type - Si l'outil est disponible à la location ou si quelqu'un cherche un outil
 * @property {number} postcode - Ville où se situe l'outil
 * @property {number} category_id - La catégorie dans laquelle l'outil se situe
 * @property {number} user_id - Id de l'utilisateur à qui appartient l'outil
 */


module.exports = {
    /**
     * Récupération des radius prédéfinis
     * @returns {object[]} Les radius dans un tableau
     */
    async radiusArray(_, res) {
        const radiusList = await [5, 10, 20, 50, 'fruits et légumes'];
        res.json({ radiusList });
      },

    /**
     * Récupération les annonces d'un utilisateur connecté
     * @returns {object[]} Les annonces avec leur id, titre, id de l'image, prix, l'état, la caution, le type d'annonce, le code postal, l'id de la catégorie, l'id de l'utilisateur, la date de création et la date de mise à jour
     */
    async getByUserId(req, res){
        try{
            console.log(req.user.user.user_id);
            const user = req.user.user.user_id;
            console.log(user);
            if(!user){
                return res.status(401).json({
                    msg: "Accès non autorisé, veuillez vous connecter"
                  });
            };
            console.log(user);
            const ad = await adDataMapper.findByUserId(user);
            if(!ad){
                return res.status(403).json({
                    msg: "Accès non autorisé"
                  });
            }
            res.status(200).json({data : ad})

        }catch (error) {
            console.trace(error);
            res.json({ error });
        }
    },


    /**
     * Poster une annonce en tant qu'utilisateur connecté
     * @param {string} title - Titre de l'annonce
     * @param {number} picture_id - Id de la photo de l'annonce
     * @param {number} price - Prix de location de l'outil 
     * @param {string} product_state - Etat de l'outil
     * @param {number} deposit - Montant de la caution
     * @param {string} description - Description de l'outil
     * @param {string} ad_type - Si l'outil est disponible à la location ou si quelqu'un cherche un outil
     * @param {number} postcode - Ville où se situe l'outil
     * @param {number} category_id - La catégorie dans laquelle l'outil se situe
     * @returns {object} L'annonce créée avec son id, titre, id de l'image, prix, l'état, la caution, le type d'annonce, le code postal, l'id de la catégorie, l'id de l'utilisateur, la date de création et la date de mise à jour
     */
    async postAnAd(req, res){
        try{

            const { title, picture_id, price,product_state, deposit, description, ad_type, postcode, category_id } = req.body;
            
            const user_id = req.user.user.user_id

            if(!user_id){
                return res.status(401).json({
                    msg: "Accès non autorisé, veuillez vous connecter"
                  });
            };

            const post = await adDataMapper.
            postAnAd(title, picture_id, price,product_state, deposit, description, ad_type,  postcode, category_id, user_id);
            
    
            if(!post){
                return res.status(400).json({
                    'error': 'Veuillez remplir les champs de l\'annonce'
                  });
            }
    
            res.status(200).json({data : post})

        }catch (error) {
            console.trace(error);
            res.json({ error });
        }
    },

    /**
     * Modifier une annonce en tant qu'utilisateur connecté
     * @param {number} id id de l'annonce
     * @param {string} title - Titre de l'annonce
     * @param {number} picture_id - Id de la photo de l'annonce
     * @param {number} price - Prix de location de l'outil 
     * @param {string} product_state - Etat de l'outil
     * @param {number} deposit - Montant de la caution
     * @param {string} description - Description de l'outil
     * @param {string} title - Titre de l'annonce
     * @param {string} ad_type - Si l'outil est disponible à la location ou si quelqu'un cherche un outil
     * @param {number} postcode - Ville où se situe l'outil
     * @param {number} category_id - La catégorie dans laquelle l'outil se situe
     * @returns {object[]} L'annonce modifiée avec son id, titre, id de l'image, prix, l'état, la caution, le type d'annonce, le code postal, l'id de la catégorie, l'id de l'utilisateur, la date de création et la date de mise à jour
     */
    async patchAd(req, res){
        try {
            const { title, picture_id, price,product_state, deposit, description, ad_type, postcode, category_id } = req.body;

            const id = req.params.id
            if(!id){
                return res.status(405).json({
                    msg: "L'identifiant de l'annonce est inconnu"
                  });
            };

            const result = await adDataMapper.updateAd(title, picture_id, price,product_state, deposit, description, ad_type, postcode, category_id, id);

            res.status(200).json({ result });
        } catch (error) {
            console.trace(error);
            res.json({ error });
        }
    },

       /**
     * Rechercher une/des annonces qui correspond(ent) aux critères entrés dans la barre de recherche
     * @param {string} title - Titre de l'annonce
     * @param {number} category - La catégorie dans laquelle l'outil se situe
     * @param {number} postcode - Ville où se situe l'outil
     * @param {number} radius - Périmètre autour du code postal jusqu'où l'utilisateur recherche
     * @returns {object[]} Les annonces qui correspondent aux critères saisis
     */
    async searchAds(req, res) {

        try {
            let {
                postcode,
                radius
            } = req.body;
            if (radius === "0") {
                radius = "1";
            };

            const listPC = await adDataMapper.fetchCP(postcode, radius);
            const full_arr_pc = [];
            if (Array.isArray(listPC)) {
                for (const cp of listPC) {
                    full_arr_pc.push(cp.code_postal)
                }
            } else {
                for (const prop in listPC) {
                    full_arr_pc.push(listPC[prop].code_postal)
                }
            }

            if(!listPC){
                return res.status(400).json({
                    msg: "Veuillez saisir un code postal"
                  });
            };

            const trimmed_cp = [...new Set(full_arr_pc)];
            const {
                category,
                title
            } = req.body;

            if (!category) {
                const result = await adDataMapper.getByTitle(title, trimmed_cp)
                res.status(200).json({
                    result
                });
            } else {
                const result = await adDataMapper.getByTitleAndCat(category, trimmed_cp, title);
                res.status(200).json({
                    result
                });
            }
        } catch (error) {
            console.trace(error);
            res.json({
                error
            });
        }
    },

    /**
     * Supprimer une annonce en tant qu'utilisateur connecté
     * @param {number} id - Id de l'annonce
     * @returns {object} Un message indiquant que l'annonce a bien été supprimée
     */
    async deleteAnAd (req, res) {
        try{
            const id = req.params.id;
            const user_id = req.user.user.user_id;

            if(!user_id){
                return res.status(401).json({
                    msg: "Accès non autorisé, veuillez vous connecter"
                  });
            };
            
            const result = await adDataMapper.deleteOneAd(id, user_id);

            res.json({"msg" : "annonce supprimée"});
        }catch(error){
            console.trace(error);
            res.status(500).json({ error: `Server error, please contact an administrator` });
        }
    },

    /**
     * Récupérrer une annonce en tant que visiteur
     * @param {number} id - Id de l'annonce
     * @returns {object[]} L'annonce avec son id, titre, id de l'image, prix, l'état, la caution, le type d'annonce, le code postal, l'id de la catégorie, l'id de l'utilisateur, la date de création et la date de mise à jour
     */
    async getAdById(req, res) {
        try {
            const id = req.params.id;

            if(!id){
                return res.status(405).json({
                    msg: "L'identifiant de l'annonce est inconnu"
                  });
            };

            /*const user_id = req.user.user.user_id;

            if(!user_id){
                return res.status(401).json({
                    msg: "Veuillez vous connecter afin de voir l'annonce"
                  });
            };*/

            const result = await adDataMapper.findById(id/*, user_id*/);
            res.status(200).json({ result });
        } catch (error) {
            console.trace(error);
            req.status(500).json({ error: `Server error, please contact an administrator` });
        }
    },

    /**
     * Récupération de 10 annonces aléatoires en tant que visiteur
     * @returns {object[]} Les annonces avec leur id, titre, id de l'image, prix, l'état, la caution, le type d'annonce, le code postal, l'id de la catégorie, l'id de l'utilisateur, la date de création et la date de mise à jour
     */
    async getRandAds(req, res) {
        try {
            const result = await adDataMapper.getTenAds();
            res.status(200).json({ result });
        } catch (error) {

            console.trace(error);
            res.status(500).json({ error: `Server error, please contact an administrator` });
            
        }
    }
};