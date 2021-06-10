const searchDataMapper = require ('../dataMapper/searchDataMapper');


module.exports  = {
    async research(request, response, next) {
        try {
            const search = await searchDataMapper.listResultsResearch(request.body.category, request.body.postcode, request.body.title, request.body.radius);
            response.json({data : search});
        }catch (error) {
            console.trace(error);
            response.json({ error });
        }

    }

};