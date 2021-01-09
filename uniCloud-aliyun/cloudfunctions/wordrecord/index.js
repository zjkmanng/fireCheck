'use strict';
const db = uniCloud.database()
exports.main = async (event, context) => {
	const collection = db.collection('record')
	const res = await collection.where({
			_id: event.id
		}).get()
	return res
};
