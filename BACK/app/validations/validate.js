const validate = {

  /*
   * Cette méthode est un factory de middleware
   * Elle sert à pouvoir récéptionner le schema (injection de dépendance)
   * @param {object} schema 
   * @param {object} schema 
   */

  queryString: (schema) => {

    return async (request, response, next) => {

      try {
        await schema.validateAsync(request.query);
        next();
      } catch (error) {
        return response.status(400).json({
          error: error.details[0].message
        });
      }
    }
  },

  body: (schema) => {

    return async (request, response, next) => {

      try {
        await schema.validateAsync(request.body);
        next();
      } catch (error) {
        return response.status(400).json({
          error: error.details[0].message
        });
      }
    }
  },

  params: (schema) => {

    return async (request, response, next) => {

      try {
        await schema.validateAsync(request.params);
        next();
      } catch (error) {
        return response.status(400).json({
          "error": error
        });
      }
    }
  },
};

module.exports = validate;