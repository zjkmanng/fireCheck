<template>
	<view class="content">
		<view class="name">
			<view @click="notice">1.案件移送通知书.docx</view>
			<view @click="close">2.封闭火灾现场公告.docx</view>
			<view @click="detailed">3.火灾痕迹物品提取清单.docx</view>
			<view @click="letter">4.火灾事故简易调查认定书.docx</view>
			<view @click="conclusion">5.火灾事故认定复核结论书.docx</view>
			<view @click="acceptance">6.火灾事故认定复核申请不予受理通知书.docx</view>
			<view @click="voucher">7.火灾事故认定复核申请材料收取凭证.docx</view>
			<view @click="apply">8.火灾事故认定复核申请受理通知书.docx</view>
			<view @click="papers">9.火灾事故认定复核调卷通知书.docx</view>
			<view @click="accidents">10.火灾事故认定书.docx</view>
			<view @click="statistical">11.火灾损失统计表.docx</view>
			<view @click="record">12.火灾现场勘验笔录.docx</view>
			<view @click="declare">13.火灾直接财产损失申报统计表.docx</view>
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
			statistical() {
				
			},
			record() {
				
			},
			declare() {
				
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
			line-height: 80rpx;
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
