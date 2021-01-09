'use strict';
const db = uniCloud.database()
exports.main = async (event, context) => {
	const collection = db.collection('fire')
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
};
