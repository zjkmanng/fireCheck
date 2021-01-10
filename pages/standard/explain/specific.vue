<template>
	<view class="content">
		<view class="name">
			<view @click="openTbs('https://vkceyugu.cdn.bspapp.com/VKCEYUGU-aliyun-rydglh0nt2kq2b05dd/d8755220-5318-11eb-b680-7980c8a877b8.doc')">1.案件移送通知书.docx</view>
			<view @click="openTbs('https://vkceyugu.cdn.bspapp.com/VKCEYUGU-aliyun-rydglh0nt2kq2b05dd/d9321270-5318-11eb-b680-7980c8a877b8.doc')">2.封闭火灾现场公告.docx</view>
			<view @click="openTbs('https://vkceyugu.cdn.bspapp.com/VKCEYUGU-aliyun-rydglh0nt2kq2b05dd/d9fb7cf0-5318-11eb-8ff1-d5dcf8779628.doc')">3.火灾痕迹物品提取清单.docx</view>
			<view @click="openTbs('https://vkceyugu.cdn.bspapp.com/VKCEYUGU-aliyun-rydglh0nt2kq2b05dd/daa26b50-5318-11eb-a16f-5b3e54966275.doc')">4.火灾事故简易调查认定书.docx</view>
			<view @click="openTbs('https://vkceyugu.cdn.bspapp.com/VKCEYUGU-aliyun-rydglh0nt2kq2b05dd/db654620-5318-11eb-b680-7980c8a877b8.doc')">5.火灾事故认定复核结论书.docx</view>
			<view @click="openTbs('https://vkceyugu.cdn.bspapp.com/VKCEYUGU-aliyun-rydglh0nt2kq2b05dd/dcb40d40-5318-11eb-b997-9918a5dda011.doc')">6.火灾事故认定复核申请不予受理通知书.docx</view>
			<view @click="openTbs('https://vkceyugu.cdn.bspapp.com/VKCEYUGU-aliyun-rydglh0nt2kq2b05dd/dd705860-5318-11eb-b997-9918a5dda011.doc')">7.火灾事故认定复核申请材料收取凭证.docx</view>
			<view @click="openTbs('https://vkceyugu.cdn.bspapp.com/VKCEYUGU-aliyun-rydglh0nt2kq2b05dd/de115350-5318-11eb-bdc1-8bd33eb6adaa.doc')">8.火灾事故认定复核申请受理通知书.docx</view>
			<view @click="openTbs('https://vkceyugu.cdn.bspapp.com/VKCEYUGU-aliyun-rydglh0nt2kq2b05dd/df26baf0-5318-11eb-b997-9918a5dda011.doc')">9.火灾事故认定复核调卷通知书.docx</view>
			<view @click="openTbs('https://vkceyugu.cdn.bspapp.com/VKCEYUGU-aliyun-rydglh0nt2kq2b05dd/dfe4b3c0-5318-11eb-bdc1-8bd33eb6adaa.doc')">10.火灾事故认定书.docx</view>
			<view @click="openTbs('https://vkceyugu.cdn.bspapp.com/VKCEYUGU-aliyun-rydglh0nt2kq2b05dd/e0849d40-5318-11eb-bdc1-8bd33eb6adaa.doc')">11.火灾损失统计表.docx</view>
			<view @click="openTbs('https://vkceyugu.cdn.bspapp.com/VKCEYUGU-aliyun-rydglh0nt2kq2b05dd/e13109e0-5318-11eb-b997-9918a5dda011.doc')">12.火灾现场勘验笔录.docx</view>
			<view @click="openTbs('https://vkceyugu.cdn.bspapp.com/VKCEYUGU-aliyun-rydglh0nt2kq2b05dd/e1cf45b0-5318-11eb-bdc1-8bd33eb6adaa.doc')">13.火灾直接财产损失申报统计表.docx</view>
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
				tbs.open({ folder: 'abb', url: path, topBarColor: '#FFFFFF', title: '文件查看', titleColor: '#000000' }, result => {
					console.log('-----TBS------ ' + JSON.stringify(result));
					
				});
			},
			home() {
				uni.switchTab({
					url: '../../index/index'
				})
			},
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
