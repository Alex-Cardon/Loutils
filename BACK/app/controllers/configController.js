module.exports = {
 async radiusArray() {
   const radiusList = await [5, 10, 20, 50, 'fruits et légumes'];
   res.json({ radiusList });
 }
};
