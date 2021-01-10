<template>
	<view class="content">
		<view class="name">
			<view @click="notice">对参加调查的专家的一般要求.docx</view>
			<view @click="closer">放火嫌疑的一般规定.docx</view>
			<view @click="detailed">火灾名称的一般规定.docx</view>
			<view @click="letter">火灾原因认定的一般规定.docx</view>
			<view @click="conclusion">提取物证的一般要求.docx</view>
			<view @click="acceptance">要做集体议案的火灾.docx</view>
			<view @click="apply">作出火灾原因认定前应当完成的调查工作.docx</view>
			<view @click="papers">做出认定前应当告知当事人的一般规定.docx</view>
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
			conclusion() {
				
			},
			acceptance() {
				
			},
			apply() {
				
			},
			papers() {
				
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
