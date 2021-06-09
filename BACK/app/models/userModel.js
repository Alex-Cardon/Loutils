const CoreModel = require('./coreModel');

class UserModel extends CoreModel {
      /**
     * Nom de la table dans la BDD
     */
       static tableName = 'user';

       /**
        * Listes des champs de l'entité 
        */
       static fields = [
           'name',
           'email',
           'password',
           'phone',
           'rating'
       ];
   
       /**
        * Initialisation/instanciation de la classe
        * @param {object} obj 
        */
       constructor(obj) {
           super(obj);
       }
}