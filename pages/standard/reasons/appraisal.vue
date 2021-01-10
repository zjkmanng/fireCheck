<template>
	<view class="content">
		<view class="name">
			<view @click="notice">电气类起火的认定依据.docx</view>
			<view @click="closer">放火嫌疑案件的认定依据.docx</view>
			<view @click="detailed">静电起火的认定依据.docx</view>
			<view @click="letter">雷击起火的认定依据.docx</view>
			<view @click="conclusion">认定起火原因的前提.docx</view>
			<view @click="acceptance">认定起火原因的一般规定.docx</view>
			<view @click="apply">认定起火源和起火物的条件.docx</view>
			<view @click="papers">无焰火源起火的认定依据.docx</view>
			<view @click="accidents">自燃起火的认定依据.docx</view>
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
			accidents() {
				
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
