<template>
	<view class="content">
		<view class="name">
			<view @click="notice">对鉴定机构、专家意见采信的一般标准.docx</view>
			<view @click="closer">可以作为火灾原因的证据.docx</view>
			<view @click="detailed">审查证据应当注意审查的具体内容.docx</view>
			<view @click="letter">证据的证据能力标准.docx</view>
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
			notice() {
				
			},
			closer() {
				
			},
			detailed () {
				
			},
			letter() {
				
			},
		}
	}
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
