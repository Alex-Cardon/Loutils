const client = require('../client');

module.exports = {
    async bookingTest(begining, end) {
        const result =await client.query(`SELECT * FROM "booking"
        WHERE "begining" BETWEEN $1 AND $2`, [begining, end]);
        return result.rows;
    },

    async newBooking(begining, end, user_id, ad_id) {
        const result = await client.query(`INSERT INTO "booking" ("begining", "end", "user_id", "ad_id")
        VALUES ($1, $2, $3, $4) RETURNING *`, [begining, end, user_id, ad_id]);
        return result.rows;
    },

    async updateBooking(begining, end, booking_id) {
        const result = await client.query(`UPDATE "booking"
        SET "begining" = $1,
            "end" = $2
        WHERE "id" = $3 RETURNING *`, [begining, end, booking_id]);
        return result.rows;
    },

    async getBooking(ad_id) {
        const result = await client.query(`SELECT * FROM "booking"
        WHERE "ad_id" = $1`, [ad_id]);
        return result.rows;
    },

    async deleteBooking(id) {
        const result = await client.query(`DELETE FROM "booking"
        WHERE "id" = $1`, [id]);
        return result;
    }

}