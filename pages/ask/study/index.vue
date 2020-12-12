<template>
	<view class="container">
		<view class="banner">
			<u-image width="100%" height="300rpx" :src="src"></u-image>
		</view>
		<view class="verification">
			<u-button type="primary" @click="verification">言辞证据的审查验证</u-button>
		</view>
		<view class="skill">
			<u-button type="primary" @click="skill">火灾调查询问笔录的技巧</u-button>
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
			}
		}
	}
</script>

<style lang="scss" scoped>
	.container{
		.verification{
			width: 80%;
			margin: 100rpx auto;
		}
		
		.skill{
			width: 80%;
			margin: 100rpx auto;
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
