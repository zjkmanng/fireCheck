<template>
	<view class="content">
		<view class="name">
			<view @click="openTbs('https://vkceyugu.cdn.bspapp.com/VKCEYUGU-aliyun-rydglh0nt2kq2b05dd/a1ed09d0-531f-11eb-b680-7980c8a877b8.docx')">1.管辖的一般规定.docx</view>
			<view @click="openTbs('https://vkceyugu.cdn.bspapp.com/VKCEYUGU-aliyun-rydglh0nt2kq2b05dd/a2ae36f0-531f-11eb-8a36-ebb87efcf8c0.docx')">2.军事设施的管辖.docx</view>
			<view @click="openTbs('https://vkceyugu.cdn.bspapp.com/VKCEYUGU-aliyun-rydglh0nt2kq2b05dd/a34f31e0-531f-11eb-bd01-97bc1429a9ff.docx')">3.跨行政区域的管辖.docx</view>
			<view @click="openTbs('https://vkceyugu.cdn.bspapp.com/VKCEYUGU-aliyun-rydglh0nt2kq2b05dd/a34f31e0-531f-11eb-bd01-97bc1429a9ff.docx')">4.应该告知刑侦部门的案件.docx</view>
		</view>
		<view class="home" @click="home">
			首页
		</view>
	</view>
</template>

<script>
	const tbs = uni.requireNativePlugin('FUN-TBS');
		var _this;
		export default {
			data() {
				return {
					title: 'Hello'
				};
			},
			onLoad() {
				_this = this;
			},
			methods: {
				openTbs: function(path) {
					tbs.open({ folder: 'abb', url: path, topBarColor: '#ffffff', title: '文件查看', titleColor: '#000000' }, result => {
						console.log('-----TBS------ ' + JSON.stringify(result));
						
					});
				},
				home() {
					uni.switchTab({
						url: '../../index/index'
					})
				}
			}
		};
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
