<template>
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
	</u-grid>
</template>

<script>
	export default {
		data() {
			return {}
		},
		methods: {
			question() {
				this.$u.route('/pages/ask/index')
			}
		}
	}
</script>

<style>
</style>
