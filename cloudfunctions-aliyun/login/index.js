'use strict';
const db = uniCloud.database()
exports.main = async (event, context) => {
 const res = await db.collection('user').where({
   username: event.username,
   password: event.password
 }).get()
 return res
};