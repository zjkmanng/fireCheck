<template>
	<view class="content">
		<view class="name">
			<view @click="openTbs('https://vkceyugu.cdn.bspapp.com/VKCEYUGU-aliyun-rydglh0nt2kq2b05dd/e6e1e710-5322-11eb-b997-9918a5dda011.doc')">1.认定灾害成因的一般规定.docx</view>
			<view @click="openTbs('https://vkceyugu.cdn.bspapp.com/VKCEYUGU-aliyun-rydglh0nt2kq2b05dd/e78bbba0-5322-11eb-b997-9918a5dda011.doc')">2.认定灾害成因的作用.docx</view>
			<view @click="openTbs('https://vkceyugu.cdn.bspapp.com/VKCEYUGU-aliyun-rydglh0nt2kq2b05dd/e833e280-5322-11eb-a16f-5b3e54966275.doc')">3.认定灾祸成因的分析依据.docx</view>
		</view>
		
		<view class="home">
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
