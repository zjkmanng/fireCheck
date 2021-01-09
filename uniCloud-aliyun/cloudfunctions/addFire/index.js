'use strict';
const db = uniCloud.database()
exports.main = async (event, context) => {
	//event为客户端上传的参数
	console.log('event : ', event)
	const collection = db.collection('fire')
	if(event.fireName !== '') {
		await collection.add(event)
	}
	const res = await collection.get()
	return res
};
