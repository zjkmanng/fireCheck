<template>
	<view class="content">
		<view class="title">
			<span>{{ data.fireName }}</span>
			<span>{{ data.ask }}word</span>
		</view>
		<view class="link">
			<u-link href="http://static-178ac6c4-e55b-47ea-823a-47758d3121d9.bspapp.com/#/pages/ask/askAdd/index">下载word</u-link>
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
		onLoad(option) {
			var d = option.data
			var data = JSON.parse(d)
			console.log(data)
			this.data = data
		}
	}
</script>

<style lang="scss" scoped>
	.content{
		padding: 20rpx;
		
		.title{
			padding: 20rpx 0;
			display: flex;
			align-items: center;
			justify-content: space-between;
		}
		
		.link{
			margin: 100rpx 0;
			text-align: center;
		}
	}
</style>
