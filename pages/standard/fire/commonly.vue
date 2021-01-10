<template>
	<view class="content">
		<view class="name">
			<view @click="notice">物证提取规定.docx</view>
			<view @click="closer">现场实验规定.docx</view>
			<view @click="detailed">现场调查规定.docx</view>
			<view @click="letter">一般规定.docx</view>
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
			details() {
				const openfile = uni.requireNativePlugin("aq-fileviewer");
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
