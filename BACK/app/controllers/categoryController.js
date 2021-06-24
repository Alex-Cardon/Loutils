const categoryDatamapper = require('../dataMapper/categoryDatamapper');

/**
 * @typedef Category
 * @property {number} id - Identifiant unique de la catégorie
 * @property {string} name - nom de la catégorie
 * @property {string} created_at - Date de création(date ISO 8601)
  */

/**
 * @typedef CategoryInput
 * @property {number} id - Identifiant unique de la catégorie
 * @property {string} name - nom de la catégorie
 */


module.exports = {

    /**
     * Afficher les catégories
     * @returns {object[]} Les catégories avec leur identifiant, nom et date de création
     */
    async getCategories(req, res) {
        try {
            const result = await categoryDatamapper.getCategories();
            res.status(200).json({ data : result })
        } catch (error) {
            console.trace(error);
            res.status(500).json({ error: `Server error, please contact an administrator` });
        }

    }
}