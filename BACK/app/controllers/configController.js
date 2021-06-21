module.exports = {
 async radiusArray(req, res) {
   const radiusList = await [5, 10, 20, 50, 'fruits et légumes'];
   res.json({ radiusList });
 }
};
