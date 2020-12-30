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
				<view v-for="(item, index) in recordList" :key="index" class="fire-list-item" @click="createWord(item)">
					<span>{{ item.fireName }}</span>
					<span>{{ item.ask }}</span>
				</view>
			</view>
		</view>
		
		<view class="btn">
			<u-button type="primary" size="medium" @click="add">添加询问笔录</u-button>
		</view>
		
		<view class="btn">
			<u-button type="primary" size="medium" @click="over">结束案件</u-button>
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
			},
			createWord(item) {
				console.log(item)
				uni.navigateTo({
					url: '../word/index?data=' + JSON.stringify(item)
				})
			},
			add() {
				var data = {
					status: 0
				}
				uni.navigateTo({
					url: '../askAdd/index?data=' + JSON.stringify(data)
				})
			},
			over() {
				uniCloud.callFunction({
					name: 'fire',
					data: {
						"handle": "update",
						"_id": this.data._id,
						"status": 1
					}
				}).then((res) => {
					if (res.result.updated === 1) {
						uni.showLoading({
							title: '正在结案...',
							success: () => {
								setTimeout(() => {
									var data = {
										status: 2
									}
									uni.navigateTo({
										url: '../askAdd/index?data=' + JSON.stringify(data)
									})
								}, 1000)
							}
						})
					} else {
						uni.showLoading({
							title: '已结案，请勿重复提交',
							success: () => {
								setTimeout(() => {
									var data = {
										status: 2
									}
									uni.navigateTo({
										url: '../askAdd/index?data=' + JSON.stringify(data)
									})
								}, 1000)
							}
						})
					}
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
		
		.btn{
			width: 50%;
			margin: 50rpx auto;
			
			.u-btn{
				width: 100%;
			}
		}
	}
</style>
