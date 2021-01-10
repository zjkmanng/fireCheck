<template>
	<view class="content">
		<view class="name">
			<view @click="openTbs('https://vkceyugu.cdn.bspapp.com/VKCEYUGU-aliyun-rydglh0nt2kq2b05dd/ff6c0b80-531d-11eb-97b7-0dc4655d6e68.docx')">1.价格鉴证机构鉴定的取信标准.docx</view>
			<view @click="openTbs('https://vkceyugu.cdn.bspapp.com/VKCEYUGU-aliyun-rydglh0nt2kq2b05dd/0020b580-531e-11eb-b680-7980c8a877b8.docx')">2.伤情检验、鉴定.docx</view>
			<view @click="openTbs('https://vkceyugu.cdn.bspapp.com/VKCEYUGU-aliyun-rydglh0nt2kq2b05dd/00c5cf20-531e-11eb-a16f-5b3e54966275.docx')">3.尸体检验、鉴定.docx</view>
			<view @click="openTbs('https://vkceyugu.cdn.bspapp.com/VKCEYUGU-aliyun-rydglh0nt2kq2b05dd/0169d750-531e-11eb-8a36-ebb87efcf8c0.docx')">4.物证检验、鉴定.docx</view>
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
