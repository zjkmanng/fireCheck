<template>
	<view class="content">
		<view class="fire-list">
			<view class="fire-list-item title">
				<span>火灾名称</span>
				<span>问次</span>
			</view>
			<view v-if="recordList.length === 0" class="">
				<u-empty text="无记录" mode="list"></u-empty>
			</view>
			<view v-else class="">
				<view v-for="(item, index) in recordList" :key="index" class="fire-list-item">
					<span>{{ item.fireName }}</span>
					<span>{{ item.ask }}</span>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				data: {},
				recordList: []
			}
		},
		onLoad(option) {
			console.log(option)
			var d = option.data
			var data = JSON.parse(d)
			this.data = data
			this.getRecordList(data)
		},
		methods: {
			getRecordList(data) {
				uniCloud.callFunction({
					name: 'record',
					data: {
						"handle": "get",
						"fireId": data._id
					}
				}).then((res) => {
					this.recordList = res.result.data
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.content{
		padding: 20rpx;
		
		.fire-list{
			.fire-list-item{
				height: 100rpx;
				padding: 0 10rpx;
				display: flex;
				justify-content: space-between;
				align-items: center;
				border-bottom: 1px solid #366092;
				
				&:first-child,
				&:last-child{
					border-bottom: none;
				}
			}
			
			.title{
				background-color: #F1F1F1;
			}
		}
	}
</style>
