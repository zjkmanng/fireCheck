<template>
	<view class="content">
		<view class="name">
			<view @click="notice">1.现场勘验职责.docx</view>
			<view @click="closer">2.现场勘验管辖.docx</view>
			<view @click="detailed">3.勘验前应排除的风险.docx</view>
			<view @click="letter">4.现场保护.docx</view>
			<view @click="conclusion">5.应保留现场的情形.docx</view>
			<view @click="acceptance">6.已破坏现场的记录要求.docx</view>
			<view @click="apply">7.现场勘验的一般规定.docx</view>
			<view @click="papers">8.现场勘验步骤及方法.docx</view>
			<view @click="accidents">9.现场勘验记录要求.docx</view>
			<view @click="statistical">10.现场制图记录要求.docx</view>
			<view @click="record">11.现场照相记录要求.docx</view>
			<view @click="declare">12.现场分析内容、要求.docx</view>
			<view @click="experiment">13.现场实验的规定.docx</view>
			<view @click="inquiry">14.现场询问的规定.docx</view>
			<view @click="extract">15.电气线路提取的要求.docx</view>
			<view @click="inflammable">16.易燃液体提取的要求.docx</view>
			<view @click="corpse">17.勘验尸体的相关要求.docx</view>
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
			experiment() {
				
			},
			inquiry() {
				
			},
			extract() {
				
			},
			inflammable() {
				
			},
			corpse() {
				
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
