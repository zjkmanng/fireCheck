<template>
	<view class="content">
		<view class="name">
			<view @click="openTbs('https://vkceyugu.cdn.bspapp.com/VKCEYUGU-aliyun-rydglh0nt2kq2b05dd/40cff9d0-5321-11eb-a16f-5b3e54966275.doc')">1.现场勘验职责.docx</view>
			<view @click="openTbs('https://vkceyugu.cdn.bspapp.com/VKCEYUGU-aliyun-rydglh0nt2kq2b05dd/41bc7cb0-5321-11eb-bdc1-8bd33eb6adaa.doc')">2.现场勘验管辖.docx</view>
			<view @click="openTbs('https://vkceyugu.cdn.bspapp.com/VKCEYUGU-aliyun-rydglh0nt2kq2b05dd/427aeab0-5321-11eb-bdc1-8bd33eb6adaa.docx')">3.勘验前应排除的风险.docx</view>
			<view @click="openTbs('https://vkceyugu.cdn.bspapp.com/VKCEYUGU-aliyun-rydglh0nt2kq2b05dd/432ed160-5321-11eb-b997-9918a5dda011.doc')">4.现场保护.docx</view>
			<view @click="openTbs('https://vkceyugu.cdn.bspapp.com/VKCEYUGU-aliyun-rydglh0nt2kq2b05dd/43e83650-5321-11eb-b997-9918a5dda011.doc')">5.应保留现场的情形.docx</view>
			<view @click="openTbs('https://vkceyugu.cdn.bspapp.com/VKCEYUGU-aliyun-rydglh0nt2kq2b05dd/44a14d20-5321-11eb-8ff1-d5dcf8779628.docx')">6.已破坏现场的记录要求.docx</view>
			<view @click="openTbs('https://vkceyugu.cdn.bspapp.com/VKCEYUGU-aliyun-rydglh0nt2kq2b05dd/455a3ce0-5321-11eb-b997-9918a5dda011.docx')">7.现场勘验的一般规定.docx</view>
			<view @click="openTbs('https://vkceyugu.cdn.bspapp.com/VKCEYUGU-aliyun-rydglh0nt2kq2b05dd/46098fb0-5321-11eb-bdc1-8bd33eb6adaa.docx')">8.现场勘验步骤及方法.docx</view>
			<view @click="openTbs('https://vkceyugu.cdn.bspapp.com/VKCEYUGU-aliyun-rydglh0nt2kq2b05dd/46ab9c10-5321-11eb-97b7-0dc4655d6e68.docx')">9.现场勘验记录要求.docx</view>
			<view @click="openTbs('https://vkceyugu.cdn.bspapp.com/VKCEYUGU-aliyun-rydglh0nt2kq2b05dd/475ff7f0-5321-11eb-b997-9918a5dda011.docx')">10.现场制图记录要求.docx</view>
			<view @click="openTbs('https://vkceyugu.cdn.bspapp.com/VKCEYUGU-aliyun-rydglh0nt2kq2b05dd/4802a090-5321-11eb-97b7-0dc4655d6e68.docx')">11.现场照相记录要求.docx</view>
			<view @click="openTbs('https://vkceyugu.cdn.bspapp.com/VKCEYUGU-aliyun-rydglh0nt2kq2b05dd/48a9b600-5321-11eb-bdc1-8bd33eb6adaa.doc')">12.现场分析内容、要求.docx</view>
			<view @click="openTbs('https://vkceyugu.cdn.bspapp.com/VKCEYUGU-aliyun-rydglh0nt2kq2b05dd/495140a0-5321-11eb-97b7-0dc4655d6e68.doc')">13.现场实验的规定.docx</view>
			<view @click="openTbs('https://vkceyugu.cdn.bspapp.com/VKCEYUGU-aliyun-rydglh0nt2kq2b05dd/49ffa910-5321-11eb-b997-9918a5dda011.doc')">14.现场询问的规定.docx</view>
			<view @click="openTbs('https://vkceyugu.cdn.bspapp.com/VKCEYUGU-aliyun-rydglh0nt2kq2b05dd/4aa42670-5321-11eb-97b7-0dc4655d6e68.docx')">15.电气线路提取的要求.docx</view>
			<view @click="openTbs('https://vkceyugu.cdn.bspapp.com/VKCEYUGU-aliyun-rydglh0nt2kq2b05dd/4b4ac6b0-5321-11eb-b997-9918a5dda011.docx')">16.易燃液体提取的要求.docx</view>
			<view @click="openTbs('https://vkceyugu.cdn.bspapp.com/VKCEYUGU-aliyun-rydglh0nt2kq2b05dd/4c666fe0-5321-11eb-97b7-0dc4655d6e68.docx')">17.勘验尸体的相关要求.docx</view>
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
