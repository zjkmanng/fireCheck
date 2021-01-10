<template>
	<view class="container">
		<view class="banner">
			<u-image width="100%" height="300rpx" :src="src"></u-image>
		</view>
		<view class="inquest">
			<u-button type="primary" @click="inquest">火灾技术鉴定物证提取方法</u-button>
		</view>
		<view class="cognizance">
			<u-button type="primary" @click="cognizance">火灾事故调查法律文书制作与使用说明</u-button>
		</view>
		<view class="regulations">
			<u-button type="primary" @click="regulations">火灾事故调查规定</u-button>
		</view>
		<view class="rule">
			<u-button type="primary" @click="rule">火灾现场勘验规则</u-button>
		</view>
		<view class="reason">
			<u-button type="primary" @click="reason">火灾原因认定暂行规则</u-button>
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
				src: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-aliyun-rydglh0nt2kq2b05dd/47966b40-3af9-11eb-8ff1-d5dcf8779628.png',
			}
		},
		methods: {
			home() {
				uni.switchTab({
					url: '../../index/index'
				})
			},
			inquest() {
				uni.navigateTo({
					url: './method/inquest'
				})
			},
			cognizance() {
				uni.navigateTo({
					url: './explain/cognizance'
				})
			},
			regulations() {
				uni.navigateTo({
					url: './fire/regulations'
				})
			},
			rule() {
				uni.navigateTo({
					url: './rules/rule'
				})
			},
			reason() {
				uni.navigateTo({
					url: './reasons/reason'
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.container{
		.inquest{
			width: 80%;
			margin: 20rpx auto;
		}
		.cognizance{
			width: 80%;
			margin: 20rpx auto;
		}
		.regulations{
			width: 80%;
			margin: 20rpx auto;
		}
		.rule{
			width: 80%;
			margin: 20rpx auto;
		}
		.reason{
			width: 80%;
			margin: 20rpx auto;
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
