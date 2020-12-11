'use strict';
const db = uniCloud.database()
exports.main = async (event, context) => {
	const collection = db.collection('user')
	if (event.handle === 'get') {
		const res = await collection.where({
		  username: event.username,
		  password: event.password
		}).get()
		return res
	} else if (event.handle === 'update') {
		const res = await collection.doc(event._id).update({
			password: event.password
		});
		return res
	}
};