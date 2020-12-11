<template>
	<view class="content">
		<view class="name">
			{{ data.name }}
		</view>
		<u-parse :html="data.details" :tag-style="style"></u-parse>
		
		<view class="next">
			<u-button type="primary" @click="back">已阅读，返回</u-button>
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
				data: {},
				style: {
					p: 'display: inline-block;margin-bottom: 20rpx;line-height: 55rpx;text-indent: 2em;'
				}
			}
		},
		onLoad(data) {
			this.data = JSON.parse(data.data)
		},
		methods: {
			home() {
				uni.switchTab({
					url: '../../index/index'
				})
			},
			back() {
				uni.navigateBack()
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
