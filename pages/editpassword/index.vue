<template>
	<view class="content">
		<u-form :model="form" ref="uForm" :rules="rules">
			<u-form-item label="账户" label-width="100" label-align="left">
				<u-input v-model="form.username" disabled :border="border" placeholder="账户" />
			</u-form-item>
			<u-form-item label="密码" label-width="100" label-align="left" prop="password">
				<u-input v-model="form.password" :border="border" placeholder="密码" />
			</u-form-item>
		</u-form>
		<view class="submitBtn">
			<u-button type="primary" @click="submit">确认修改</u-button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				border: true,
				form: {
					username: 'admin',
					password: ''
				},
				rules: {
					password: [
						{
							required: true,
							message: '请输入密码',
							trigger: ['change','blur'],
						}
					]
				}
			}
		},
		onReady() {
			this.$refs.uForm.setRules(this.rules);
		},
		methods: {
			submit() {
				this.$refs.uForm.validate(valid => {
					if (valid) {
						uni.getStorage({
							key: 'userId',
							success: (res) => {
								
								uniCloud.callFunction({
									name: 'user',
									data: {
										handle: 'update',
										_id: res.data,
										username: 'admin',
										password: this.form.password
									}
								}).then((r) => {
									this.$u.toast('修改密码成功')
								})
							}
						})
					}
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.content{
		padding: 30rpx;
		
		.submitBtn{
			margin: 100rpx 0;
		}
	}
</style>
