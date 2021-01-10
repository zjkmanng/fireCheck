<template>
	<view class="content">
		<view class="name">
			<view @click="notice">爆炸火灾的提取要点.docx</view>
			<view @click="closer">电气类火灾的提取要点.docx</view>
			<view @click="detailed">放火火灾的提取要点.docx</view>
			<view @click="letter">物证提取的提取量.docx</view>
			<view @click="conclusion">物证提取的注意事项.docx</view>
			<view @click="acceptance">自燃火灾的提取要点.docx</view>
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
