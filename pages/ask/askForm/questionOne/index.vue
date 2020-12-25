<template>
	<view class="content">
		<u-form :model="form" ref="uForm" :rules="rules">
			<u-form-item :label="'问：' + form.question" prop="answer" label-position="top">
				<u-input v-model="form.answer" type="textarea" :border="border" height="150" :auto-height="true" placeholder="答:" />
			</u-form-item>
		</u-form>
		<view class="submitBtn">
			<u-button type="primary" @click="submit">下一步</u-button>
		</view>
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
					'question': '',
					'answer': ''
				},
				rules: {
					answer: [{required: true, message: '请输入答案', trigger: ['change','blur']}]
				},
				submitData: {}
			}
		},
		onLoad() {
			uni.getStorage({
				key: 'fire',
				success: (res) => {
					this.fireName = res.data.fireName
				}
			})
			
			uni.getStorage({
				key: 'record',
				success: (res) => {
					console.log(res)
					this.submitData = res.data
				}
			})
			
			uni.getStorage({
				key: 'company',
				success: (res) => {
					this.company = res.data
				}
			})
		},
		onReady() {
			this.form.question = '我们是西安市周至县'+ this.company +'消防大队的工作人员，现依法向你询问火灾'+ this.fireName +'有关问题，请你如实回答，作伪证要负法律责任。你依法有申请回避的权利，对与本案无关的问题，你有拒绝回答的权利。你听清楚了没有 ？'
			this.$refs.uForm.setRules(this.rules)
		},
		methods: {
			submit() {
				this.$refs.uForm.validate(valid => {
					if (valid) {
						const questionList = []
						questionList.push(this.form)
						this.submitData.questionList = questionList
						uni.setStorage({
							key: 'record',
							data: this.submitData
						})
						uni.navigateTo({
							url: '../question/index'
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
