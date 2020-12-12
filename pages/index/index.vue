<template>
	<view class="content">
		<view class="banner">
			<u-image width="100%" height="400rpx" :src="src"></u-image>
		</view>
		<u-grid :col="3">
			<u-grid-item @click="question">
				<u-icon name="question-circle" :size="46"></u-icon>
				<view class="grid-text">询问</view>
			</u-grid-item>
			<u-grid-item @click="camera">
				<u-icon name="camera" :size="46"></u-icon>
				<view class="grid-text">照相</view>
			</u-grid-item>
			<u-grid-item @click="order">
				<u-icon name="order" :size="46"></u-icon>
				<view class="grid-text">计损</view>
			</u-grid-item>
			<u-grid-item>
				<u-icon name="photo" :size="46"></u-icon>
				<view class="grid-text">图片</view>
			</u-grid-item>
			<u-grid-item>
				<u-icon name="lock" :size="46"></u-icon>
				<view class="grid-text">锁头</view>
			</u-grid-item>
			<u-grid-item>
				<u-icon name="hourglass" :size="46"></u-icon>
				<view class="grid-text">沙漏</view>
			</u-grid-item>
			<u-grid-item @click="editPwd">
				<u-icon name="hourglass" :size="46"></u-icon>
				<view class="grid-text">修改密码</view>
			</u-grid-item>
			<u-grid-item @click="loginOut">
				<u-icon name="hourglass" :size="46"></u-icon>
				<view class="grid-text">退出登录</view>
			</u-grid-item>
		</u-grid>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				src: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-aliyun-rydglh0nt2kq2b05dd/47966b40-3af9-11eb-8ff1-d5dcf8779628.png'
			}
		},
		methods: {
			question() {
				this.$u.route('/pages/ask/index')
			},
			editPwd() {
				this.$u.route('/pages/editpassword/index')
			},
			loginOut() {
				this.$u.route('/pages/login/index')
			}
		}
	}
</script>

<style>
</style>
