<template>
	<view class="content">
		<view class="name">
			<view @click="openTbs('https://vkceyugu.cdn.bspapp.com/VKCEYUGU-aliyun-rydglh0nt2kq2b05dd/3a3eff60-5323-11eb-bd01-97bc1429a9ff.doc')">1.对鉴定机构、专家意见采信的一般标准.docx</view>
			<view @click="openTbs('https://vkceyugu.cdn.bspapp.com/VKCEYUGU-aliyun-rydglh0nt2kq2b05dd/3b67a0e0-5323-11eb-b680-7980c8a877b8.doc')">2.可以作为火灾原因的证据.docx</view>
			<view @click="openTbs('https://vkceyugu.cdn.bspapp.com/VKCEYUGU-aliyun-rydglh0nt2kq2b05dd/3c151ef0-5323-11eb-8a36-ebb87efcf8c0.doc')">3.审查证据应当注意审查的具体内容.docx</view>
			<view @click="openTbs('https://vkceyugu.cdn.bspapp.com/VKCEYUGU-aliyun-rydglh0nt2kq2b05dd/3cc66d90-5323-11eb-bdc1-8bd33eb6adaa.doc')">4.证据的证据能力标准.docx</view>
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
