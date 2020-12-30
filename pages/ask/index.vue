<template>
	<view class="container">
		<view class="banner">
			<u-image width="100%" height="300rpx" :src="src"></u-image>
		</view>
		<view class="make">
			<u-button type="primary" @click="make">制作</u-button>
		</view>
		<view class="study">
			<u-button type="primary" @click="study">学习</u-button>
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
			make() {
				// this.$u.route('/pages/ask/askAdd/index')
				var data = {
					status: 0
				}
				uni.navigateTo({
					url: 'askAdd/index?data=' + JSON.stringify(data)
				})
			},
			study() {
				this.$u.route('/pages/ask/study/index')
			},
			home() {
				uni.switchTab({
					url: '../index/index'
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.container{
		.make{
			width: 80%;
			margin: 100rpx auto;
		}
		
		.study{
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
