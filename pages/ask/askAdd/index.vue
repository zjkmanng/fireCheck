<template>
	<view class="content">
		<view class="wrap">
			<view class="u-tabs-box">
				<u-tabs-swiper activeColor="#f29100" ref="tabs" :list="list" :bar-width="100" :bold="false" :current="current" @change="change" :is-scroll="false" swiperWidth="750"></u-tabs-swiper>
			</view>
			<swiper class="swiper-box" :current="swiperCurrent" @transition="transition" @animationfinish="animationfinish">
				<swiper-item class="swiper-item">
					<scroll-view scroll-y style="height: 100%;width: 100%;">
						<view class="page">
							<view class="add-content">
								<view class="name">
									火灾名称
								</view>
								<view class="input">
									<u-input v-model="fireName" type="text" :border="true" />
								</view>
								<view class="addbtn">
									<u-button type="primary" size="medium" @click="add">确认新建</u-button>
								</view>
							</view>
							<view v-if="loading === true" class="nolist">
								<u-loading size="100" mode="circle"></u-loading>
							</view>
							<view v-else class="add-list">
								<view v-for="(item, index) in addlist" :key="index" class="add-list-item">
									<view class="name" @click="details(item)">
										{{ item.fireName }}
									</view>
									<view class="delete">
										<u-button type="error" size="medium" @click="del(item)">删除</u-button>
									</view>
								</view>
							</view>
						</view>
					</scroll-view>
				</swiper-item>
				<swiper-item class="swiper-item">
					<scroll-view scroll-y style="height: 100%;width: 100%;">
						<view class="">
							
						</view>
					</scroll-view>
				</swiper-item>
				<swiper-item class="swiper-item">
					<scroll-view scroll-y style="height: 100%;width: 100%;">
						<view class="">
							一万
						</view>
					</scroll-view>
				</swiper-item>
			</swiper>
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
				list: [
					{
						name: '新增'
					},
					{
						name: '待完'
					},
					{
						name: '已完'
					}
				],
				userId: '',
				current: 0,
				swiperCurrent: 0,
				fireName: '',
				addlist: [],
				loading: false
			}
		},
		onLoad() {
			uni.getStorage({
				key: 'userId',
				success: (res) => {
					this.userId = res.data
					this.getList(this.userId)
				}
			})
		},
		methods: {
			getList(userId) {
				this.loading = true
				uniCloud.callFunction({
					name: 'fire',
					data: {
						"handle": "get",
						"userId": userId
					}
				}).then((res) => {
					this.loading = false
					this.addlist = res.result.data
				})
			},
			change(index) {
				this.swiperCurrent = index
			},
			transition({ detail: { dx } }) {
				this.$refs.tabs.setDx(dx);
			},
			animationfinish({ detail: { current } }) {
				this.$refs.tabs.setFinishCurrent(current);
				this.swiperCurrent = current;
				this.current = current;
			},
			add() {
				uniCloud.callFunction({
					name: 'fire',
					data: {
						"handle": "post",
						"fireName": this.fireName,
						"userId": this.userId,
						"status": 0
					}
				}).then((res) => {
					this.$u.toast('添加成功')
					this.fireName = ''
					this.getList()
				})
			},
			del(item) {
				uniCloud.callFunction({
					name: 'fire',
					data: {
						"handle": "delete",
						"_id": item._id
					}
				}).then((res) => {
					this.$u.toast('删除成功')
					this.getList()
				})
			},
			details(item) {
				uni.setStorage({
					key: "fire",
					data: item
				})
				uni.navigateTo({
					url: '/pages/ask/askFireDetails/index?item=' + JSON.stringify(item)
				})
			},
			home() {
				uni.switchTab({
					url: '../../index/index'
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.content{
		height: 100%;
		position: relative;
		
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
		
		.wrap {
			display: flex;
			flex-direction: column;
			height: calc(100vh - var(--window-top));
			width: 100%;
		}
		.swiper-box {
			flex: 1;
		}
		.swiper-item {
			height: 100%;
		}
		
		.page{
			padding: 20rpx 20rpx 100rpx;
			
			.add-content{
				display: flex;
				align-items: center;
				
				.name{
					flex: 1;
				}
				
				.input{
					flex: 2;
				}
				
				.addbtn{
					padding-left: 10rpx;
					flex: 1;
				}
			}
			
			.nolist{
				width: 100%;
				height: 200rpx;
				display: flex;
				align-items: center;
				justify-content: center;
			}
			
			.add-list{
				margin-top: 50rpx;
				
				.add-list-item{
					width: 100%;
					margin-bottom: 20rpx;
					display: flex;
					align-items: center;
					justify-content: space-between;
					
					.name{
						flex: 1;
					}
				}
			}
		}
	}
</style>
