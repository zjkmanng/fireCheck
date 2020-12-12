<template>
	<view class="content">
		<view class="name">
			火灾名称：{{ data.fireName }}
		</view>
		<view class="details">
			<text>1.询问人员不得少于两人（简易程序除外），并应当向被询问人表明执法身份。询问时应当告诉被询问人必须如实提供证据、证言和故意作伪证或隐匿证据应负的法律责任，以及对于本案无关的问题有拒绝回答的权利。有多个询问人时应当分别询问。</text>
			<text>2.询问笔录应当交被询问人核对，被询问人确认笔录无误后，应当在询问笔录上逐页签名或者按指印。拒绝签名和按指印的，询问人员应当在询问笔录中注明。记录有误或者有遗漏的，应当允许被询问人更正或者补充，并要求其在修改处按指印。对没有阅读能力的，应当向其宣读。询问人员应当在询问笔录上签名，翻译人员应当在询问笔录的结尾处签名。询问时可以全程录音、录像，并保持录音、录像资料的完整性。</text>
			<text>3.需要传唤火灾肇事嫌疑人接受调查的，经公安派出所批准使用传唤证传唤。现场发现的火灾肇事嫌疑人，火调人员出示工作证件可以口头传唤，并在询问笔录中注明火灾肇事嫌疑人到案经过、到按时间和离开时间。</text>
			<text>4.传唤的火灾肇事嫌疑人应当及时询问查证，询问查证时间不得超过8小时，案情复杂，违法行为依法可能适用于行政拘留处罚的，询问查证时间不得超过24小时。火灾受害人和其他证人的询问没有时限要求，如果火灾受害人和其他证人提出终止询问并离开的请求，应当在问明情况后允许其离开。</text>
			<text>5.被询问人请求自行提供书面材料的，应当准许。询问人员认为必要时也可以要求被询问人自行书写材料。被询问人应当在其提供的书面材料的结尾处签名或者按指印，并附身份证复印件。对打印的书面材料，被询问人应当逐页签名或者按指印。调查人员收到书面材料后，应当在首页注明收到的日期并签名。</text>
			<text>6.询问时要防止泄密。一方面火灾调查人员应当注意不泄露有关调查工作的秘密，另一方面火灾调查人员要对涉及的国家秘密、商业秘密和个人隐私等注意保存，如有其他部门或者个人了解情况时，要按规定由法制部门审核后提供，必要时可征求证人的意见。</text>
			<text>7.对询问对象采取一问一答的形式制作的笔录，要按照本人的原话记录，尽可能逐句记录，不能做任何装饰、概括或更改。每个询问对象的笔录应单独制作，不允许几个证。</text>
			<text>8.人的证言写在一个笔录中，更不允许只做一份询问笔录，让其他询问对象在该询问笔录上分别签字，但允许有两个以上证人出具共同签名的书面证据，证明材料。</text>
			<text>9.询问笔录要求填充的项目必须填写，不能留有空项，正文中记录的内容不能有空行，空白页和空白行在签字前，应由询问人划线填满。</text>
			<text>10.记录的字迹要清楚，语言要准确，不能出现模棱两可的语句。</text>
			<text>11.要用碳素或蓝黑墨水书写，严禁使用铅笔或圆珠笔制作询问笔录，以防止保存中变质或涂改。</text>
			<text>12.询问笔录可以电脑制作，但是涉及签名或签署意见的内容，必须用能够长期保存的笔迹书写工具签写，同时询问笔录的用纸必须符合要求。</text>
			<text>13.询问笔录结构包括开始、正文和结尾三个部分。</text>
			<text>(1) 开始部分。询问的地点、询问的时间，询问人、记录人的姓名、工作单位。被询问人的姓名、性别、年龄、身份证明、职业、民族、现住址、户籍所在地、工作单位、联系方式、是否是人大代表等情况。</text>
			<text>(2) 正文部分。正文部分记录的主要内容包括询问前的告知、提问和回答的内容，特别是与火灾有关的人、事、物、时间、地点等要素，一定要记录的全面、客观、清楚、准确。</text>
			<text>(3) 结尾部分。结尾部分应有结束询问的问答以及被询问人写明“以上笔录我看过，与我说的相符。”对笔录确认的语句和签名，参加询问的调查人员，翻译人员、监护人等也要签名。</text>
			
			<view class="next">
				<u-button type="primary" @click="next">已阅读，下一步</u-button>
			</view>
		</view>
		
		<view class="home" @click="home">
			首页
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				data: {}
			}
		},
		onLoad(item) {
			const data = JSON.parse(item.item)
			this.data = data
		},
		methods: {
			home() {
				uni.switchTab({
					url: '../../index/index'
				})
			},
			next() {
				uni.navigateTo({
					url: '../askSelect/index'
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.content{
		padding: 20rpx 20rpx 150rpx;
		position: relative;
		
		.name{
			font-size: 38rpx;
			font-weight: bold;
			line-height: 100rpx;
		}
		
		.details{
			text{
				display: inline-block;
				margin-bottom: 20rpx;
				line-height: 55rpx;
				text-indent: 2em;
				
				span{
					font-size: 36rpx;
					font-weight: bold;
				}
			}
			
			.next{
				margin: 50rpx 0;
			}
		}
		
		.home{
			position: fixed;
			left: 0;
			bottom: 0;
			width: 100%;
			height: 100rpx;
			border-top: 1px solid #ccc;
			background-color: #fff;
			display: flex;
			align-items: center;
			text-align: center;
			justify-content: center;
			z-index: 999;
		}
	}
</style>
