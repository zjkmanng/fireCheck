<template>
	<view class="content">
		<view class="name">
			请选择被询问人员性质：
		</view>
		<view class="btn-list">
			<view v-for="(item, index) in list" :key="index" class="btn-list-item">
				<u-button type="primary" @click="details(item)">{{ item.name }}</u-button>
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
				list: [
					{
						name: '不满16周岁的未成年人',
						details: '询问不满16周岁的未成年人时，应当通知其父母或其他监护人到场。其父母或者其他监护人不能到场的，也可以通知未成年人的其他成年亲属，所在学校、单位、居住地基层组织或者未成年人保护组织的代表到场，并将有关情况记录在案，确实无法通知或者通知后未到场的，应当在询问笔录中注明。'
					},
					{
						name: '不通晓当地通用的语言文字的被询问人',
						details: '对不通晓当地通用的语言文字的被询问人，应当为其配备翻译人员，并在询问笔录中注明翻译人员的姓名、住址、工作单位和联系方式。'
					},
					{
						name: '少数民族人员',
						details: '询问少数民族人员时，应告知其享有使用本民族语言和文字的权利。'
					},
					{
						name: '聋哑人',
						details: '询问聋哑人，应当有通晓手语的翻译人员参加，并在询问笔录中注明被询问人的聋哑情况以及翻译人员的姓名、住址、工作单位和联系方式。'
					},
					{
						name: '因特殊原因不能进行书面询问',
						details: '如遇到特殊情况不能进行书面询问时，也可以采取录音或者录像方式。询问中要表明自己的身份，并要核实被询问人的身份，结束后要整理成书面记录，并保存好录音和录像资料。'
					},
					{
						name: '无特殊性',
						details: ''
					}
				]
			}
		},
		methods: {
			details(item) {
				if (item.details !== '') {
					uni.navigateTo({
						url: './details?data=' + JSON.stringify(item)
					})
				} else {
					uni.navigateTo({
						url: '../askType/index'
					})
				}
			},
			home() {
				uni.switchTab({
					url: '../../index/index'
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
			line-height: 100rpx;
		}
		
		.btn-list{
			.btn-list-item{
				margin-bottom: 20rpx;
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
