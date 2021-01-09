'use strict';
const db = uniCloud.database()
exports.main = async (event, context) => {
	const collection = db.collection('fire')
	if (event.handle === 'get') {
		const res = await collection.where({
			_id: event.id,
		  userId: event.userId,
		  status: event.status
		}).get()
		return res
	} else if (event.handle === 'post') {
		const res = await collection.add(event)
		return res
	} else if (event.handle === 'update') {
		const res = await collection.doc(event._id).update({
			status: event.status
		});
		return res
	}else if (event.handle === 'delete') {
		const res = await collection.doc(event._id).remove()
		if (res.deleted === 1) {
			return {
				status: 0,
				msg: '删除成功'
			}
		} else {
			return {
				status: -2,
				msg: '删除数据失败'
			}
		}
	}
};
