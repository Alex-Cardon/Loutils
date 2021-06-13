const searchDataMapper = require('../dataMapper/searchDataMapper');


module.exports = {

    async research(req, res) {

        try {
            let {
                postcode,
                radius
            } = req.body;
            if (radius === "0") {
                radius = "1";
            };
            const listPC = await searchDataMapper.fetchCP(postcode, radius);
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
            const trimmed_cp = [...new Set(full_arr_pc)];
            const {
                category,
                title
            } = req.body;

            if (!category) {
                const result = await searchDataMapper.getByTitle(title, trimmed_cp)
                res.json({
                    result
                });
            } else {
                const result = await searchDataMapper.getByTitleAndCat(category, trimmed_cp, title);
                res.json({
                    result
                });
            }
        } catch (error) {
            console.trace(error);
            res.json({
                error
            });
        }
    }
}