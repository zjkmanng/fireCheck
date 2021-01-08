<template>
	<view class="content">
		<u-form :model="form" ref="uForm" :rules="rules">
			<u-form-item :label="'问：' + form.question01 + '？'" prop="answer01" label-position="top">
				<u-input v-model="form.answer01" type="textarea" :border="border" height="150" :auto-height="true" placeholder="答:" />
			</u-form-item>
			<u-form-item :label="'问：' + form.question02 + '？'" prop="answer02" label-position="top">
				<u-input v-model="form.answer02" type="textarea" :border="border" height="150" :auto-height="true" placeholder="答:" />
			</u-form-item>
			<u-form-item :label="'问：' + form.question03 + '？'" prop="answer03" label-position="top">
				<u-input v-model="form.answer03" type="select" :border="border" placeholder="询问时间" disabled @click="timeShow = true" />
			</u-form-item>
		</u-form>
		<view class="submitBtn">
			<u-button type="primary" @click="submit">生成询问笔录</u-button>
		</view>
		
		<u-picker v-model="timeShow" mode="time" @confirm="confirm"></u-picker>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				fireName: '',
				company: '',
				border: true,
				form: {
					'question01': '请问你有没有其他补充',
					'answer01': '',
					'question02': '以上内容是否属实',
					'answer02': '',
					'question03': '询问时间',
					'answer03': ''
				},
				rules: {
					answer01: [{required: true, message: '请输入答案', trigger: ['change','blur']}],
					answer02: [{required: true, message: '请输入答案', trigger: ['change','blur']}],
					answer03: [{required: true, message: '请输入答案', trigger: ['change','blur']}]
				},
				submitData: {},
				timeShow: false
			}
		},
		onLoad() {
			uni.getStorage({
				key: 'record',
				success: (res) => {
					this.submitData = res.data
				}
			})
		},
		onReady() {
			this.$refs.uForm.setRules(this.rules)
		},
		methods: {
			confirm(e) {
				this.form.answer03 = e.year + '年' + e.month + '月' + e.day + '日'
			},
			submit() {
				
				this.$refs.uForm.validate(valid => {
					if (valid) {
						
						this.submitData.questionLast = this.form
						console.log(this.submitData)
						
						uni.showLoading({
							title: '生成中...'
						})
						
						uniCloud.callFunction({
							name: 'record',
							data: this.submitData
						}).then((r) => {
							
							uni.hideLoading()
							
							var data = {
								status: 1
							}
							uni.navigateTo({
								url: '../../askAdd/index?data=' + JSON.stringify(data)
							})
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
