<template>
	<view class="content">
		<view class="name">
			<view class="caser">
				<u-button type="primary" @click="caser">案件处理</u-button>
			</view>
			<view class="reviewse">
				<u-button type="primary" @click="reviewse">复核</u-button>
			</view>
			<view class="have">
				<u-button type="primary" @click="have">管辖</u-button>
			</view>
			<view class="accident">
				<u-button type="primary" @click="accident">火灾事故认定</u-button>
			</view>
			<view class="appraisal">
				<u-button type="primary" @click="appraisal">检验、鉴定</u-button>
			</view>
			<view class="easy">
				<u-button type="primary" @click="easy">简易程序</u-button>
			</view>
			<view class="commonly">
				<u-button type="primary" @click="commonly">一般程序</u-button>
			</view>
			<view class="statistics">
				<u-button type="primary" @click="openTbs('https://vkceyugu.cdn.bspapp.com/VKCEYUGU-aliyun-rydglh0nt2kq2b05dd/6f00e2c0-5320-11eb-bdc1-8bd33eb6adaa.docx')">火灾损失统计.docx</u-button>
			</view>
		</view>
		
		<view class="home" @click="home">
			首页
		</view>
	</view>
</template>

<script>
	const tbs = uni.requireNativePlugin('FUN-TBS');
		var _this;
		export default {
			data() {
				return {
					title: 'Hello'
				};
			},
			onLoad() {
				_this = this;
			},
			methods: {
				openTbs: function(path) {
					tbs.open({ folder: 'abb', url: path, topBarColor: '#ffffff', title: '文件查看', titleColor: '#000000' }, result => {
						console.log('-----TBS------ ' + JSON.stringify(result));
						
					});
				},
				home() {
					uni.switchTab({
						url: '../../index/index'
					})
				},
				caser() {
					uni.navigateTo({
						url: './caser'
					})
				},
				reviewse() {
					uni.navigateTo({
						url: './reviewse'
					})
				},
				have() {
					uni.navigateTo({
						url: './have'
					})
				},
				appraisal() {
					uni.navigateTo({
						url: './appraisal'
					})
				},
				accident() {
					uni.navigateTo({
						url: './accident'
					})
				},
				easy() {
					uni.navigateTo({
						url: './easy'
					})
				},
				commonly() {
					uni.navigateTo({
						url: './commonly'
					})
				},
			}
		};
</script>

<style lang="scss" scoped>
	.content{
		padding: 20rpx 20rpx 150rpx;
		position: relative;
		.name{
			font-size: 28rpx;
			font-weight: bold;
			line-height: 100rpx;
		}
		.caser{
			width: 80%;
			margin: 10rpx auto;
		}
		.reviewse{
			width: 80%;
			margin: 10rpx auto;
		}
		.have{
			width: 80%;
			margin: 10rpx auto;
		}
		.appraisal{
			width: 80%;
			margin: 10rpx auto;
		}
		.accident{
			width: 80%;
			margin: 10rpx auto;
		}
		.easy{
			width: 80%;
			margin: 10rpx auto;
		}
		.commonly{
			width: 80%;
			margin: 10rpx auto;
		}
		.statistics{    
			width: 80%;
			margin: 10rpx auto;
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
