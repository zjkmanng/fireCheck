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
			<u-grid-item @click="standard">
				<u-icon name="grid" :size="46"></u-icon>
				<view class="grid-text">规范</view>
			</u-grid-item>
			<u-grid-item @click="calendar">
				<u-icon name="calendar" :size="46"></u-icon>
				<view class="grid-text">数据库</view>
			</u-grid-item>
			<u-grid-item @click="order">
				<u-icon name="order" :size="46"></u-icon>
				<view class="grid-text">计损</view>
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
		onLoad() {
			uni.getStorage({
				key: 'userId',
				success: (res) => {
					this.userId = res.data
				}
			})
		},
		methods: {
			camera() {
				this.$u.route('/pages/photo/index')
			},
			question() {
				this.$u.route('/pages/ask/index')
			},
			editPwd() {
				this.$u.route('/pages/editpassword/index')
			},
			loginOut() {
				this.$u.route('/pages/login/index')
			},
			order() {
				this.$u.route('/pages/loss/index')
			},
			calendar() {
				this.$u.route('/pages/date/index')
			},
			standard() {
				this.$u.route('/pages/standard/index')
			},
		}
	}
</script>

<style>
</style>
