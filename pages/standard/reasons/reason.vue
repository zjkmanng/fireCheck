<template>
	<view class="content">
		<view class="name">
			<view class="requirement">
				<u-button type="primary" @click="requirement">火灾原因认定的一般要求</u-button>
			</view>
			<view class="examination">
				<u-button type="primary" @click="examination">火灾证据与证据审查</u-button>
			</view>
			<view class="cognizance">
				<u-button type="primary" @click="cognizance">起火部位或者起火点认定</u-button>
			</view>
			<view class="timese">
				<u-button type="primary" @click="timese">起火时间认定</u-button>
			</view>
			<view class="appraisal">
				<u-button type="primary" @click="appraisal">起火原因认定</u-button>
			</view>
			<view class="disaster">
				<u-button type="primary" @click="disaster">灾害成因认定</u-button>
			</view>
		</view>
		<view class="home" @click="home">
			首页
		</view>
	</view>
</template>

<script>
	export default {
		methods: {
			home() {
				uni.switchTab({
					url: '../../index/index'
				})
			},
			requirement() {
				uni.navigateTo({
					url: './requirement'
				})
			},
			examination() {
				uni.navigateTo({
					url: './examination'
				})
			},
			cognizance() {
				uni.navigateTo({
					url: './cognizance'
				})
			},
			appraisal() {
				uni.navigateTo({
					url: './appraisal'
				})
			},
			timese() {
				uni.navigateTo({
					url: './timese'
				})
			},
			disaster() {
				uni.navigateTo({
					url: './disaster'
				})
			},
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
		.requirement{
			width: 80%;
			margin: 10rpx auto;
		}
		.examination{
			width: 80%;
			margin: 10rpx auto;
		}
		.cognizance{
			width: 80%;
			margin: 10rpx auto;
		}
		.appraisal{
			width: 80%;
			margin: 10rpx auto;
		}
		.timese{
			width: 80%;
			margin: 10rpx auto;
		}
		.disaster{
			width: 80%;
			margin: 10rpx auto;
		}
	}
</style>
