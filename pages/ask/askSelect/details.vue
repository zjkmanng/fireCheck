<template>
	<view class="content">
		<view class="name">
			{{ data.name }}
		</view>
		<view class="details">
			<text>{{ data.details }}</text>
			
			<view class="next">
				<u-button type="primary" @click="next">已阅读，下一步</u-button>
			</view>
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
				data: {}
			}
		},
		onLoad(data) {
			this.data = JSON.parse(data.data)
			console.log(this.data.details)
		},
		methods: {
			home() {
				uni.switchTab({
					url: '../../index/index'
				})
			},
			next() {
				console.log('dsafsda')
				uni.navigateTo({
					url: '../askType/index'
				})
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
		
		.details{
			text{
				display: inline-block;
				margin-bottom: 20rpx;
				line-height: 55rpx;
				text-indent: 2em;
				
				span{
					font-size: 36rpx;
					font-weight: bold;
				}
			}
			
			.next{
				margin: 50rpx 0;
			}
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
